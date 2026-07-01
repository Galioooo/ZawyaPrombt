// ════════════════════════════════════════════════════════
//  ZAWYA Admin Dashboard — admin.js
// ════════════════════════════════════════════════════════

const db = window._supabase;
const TABLE = 'library_items';
const BUCKET = 'item-images';

let currentUser = null;
let allItems = [];
let builderSelected = [];
let pendingDeleteId = null;

// ── AUTH GUARD ─────────────────────────────────────────
async function authGuard() {
  const { data: { session } } = await db.auth.getSession();
  if (!session) { window.location.href = 'login.html'; return null; }
  return session.user;
}

// ── INIT ───────────────────────────────────────────────
async function init() {
  currentUser = await authGuard();
  if (!currentUser) return;

  document.getElementById('adminUser').textContent = currentUser.email;

  // Sidebar nav
  document.querySelectorAll('.sidebar-link[data-view]').forEach(btn => {
    btn.addEventListener('click', () => switchView(btn.dataset.view));
  });

  // Sidebar toggle (mobile)
  document.getElementById('sidebarToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
  });

  // Logout
  document.getElementById('logoutBtn').addEventListener('click', async () => {
    await db.auth.signOut();
    window.location.href = 'login.html';
  });

  // Library
  document.getElementById('librarySearch').addEventListener('input', renderLibraryGrid);
  document.getElementById('catFilter').addEventListener('change', renderLibraryGrid);
  document.getElementById('addFromLibBtn').addEventListener('click', () => switchView('add'));

  // Form
  document.getElementById('itemForm').addEventListener('submit', handleSave);
  document.getElementById('cancelEditBtn').addEventListener('click', resetForm);

  // Image upload
  setupImageUpload();

  // Builder
  document.getElementById('builderCatFilter').addEventListener('change', renderBuilderChips);
  document.getElementById('clearBuilderBtn').addEventListener('click', clearBuilder);
  document.getElementById('copyBuilderBtn').addEventListener('click', copyPrompt);

  // Delete modal
  document.getElementById('confirmDeleteBtn').addEventListener('click', executeDelete);
  document.getElementById('cancelDeleteBtn').addEventListener('click', () => {
    document.getElementById('deleteModal').classList.add('hidden');
  });

  // Load data
  await loadItems();
  switchView('library');
}

// ── VIEW SWITCHING ──────────────────────────────────────
function switchView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.sidebar-link[data-view]').forEach(b => b.classList.remove('active'));

  const view = document.getElementById(`view-${viewId}`);
  const btn  = document.querySelector(`.sidebar-link[data-view="${viewId}"]`);
  if (view) view.classList.add('active');
  if (btn)  btn.classList.add('active');

  const titles = { library:'المكتبة', add:'إضافة عنصر', builder:'Prompt Builder', stats:'الإحصائيات' };
  document.getElementById('viewTitle').textContent = titles[viewId] || viewId;

  if (viewId === 'builder') renderBuilderChips();
  if (viewId === 'stats')   renderStats();
  document.getElementById('sidebar').classList.remove('open');
}

// ── LOAD ITEMS ─────────────────────────────────────────
async function loadItems() {
  const { data, error } = await db.from(TABLE).select('*').order('created_at', { ascending: false });
  if (error) { showToast('خطأ في تحميل البيانات', 'error'); return; }
  allItems = data || [];
  renderLibraryGrid();
}

// ── LIBRARY GRID ────────────────────────────────────────
function renderLibraryGrid() {
  const q   = document.getElementById('librarySearch').value.toLowerCase();
  const cat = document.getElementById('catFilter').value;

  let items = allItems;
  if (q)   items = items.filter(i => i.title?.toLowerCase().includes(q) || i.description?.includes(q));
  if (cat) items = items.filter(i => {
    if (cat === 'cinematic') return ['camera-work','composition','lighting','editing','storytelling','genres','vfx','camera-angles'].includes(i.category);
    if (cat === 'product')   return ['angles','styles','product-lighting','advanced','post'].includes(i.category);
    if (cat === 'lenses')    return i.category === 'lenses';
    return true;
  });

  const grid = document.getElementById('libraryGrid');
  if (!items.length) {
    grid.innerHTML = `<div class="empty-state">لا توجد عناصر${q ? ` تطابق "${q}"` : ''}</div>`;
    return;
  }

  grid.innerHTML = items.map(item => `
    <div class="item-card" data-id="${item.id}">
      <div class="item-card-img">
        ${item.image_url
          ? `<img src="${item.image_url}" alt="${item.title}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'img-placeholder\\'></div>'"/>`
          : `<div class="img-placeholder"></div>`}
        <span class="item-badge">${catLabel(item.category)}</span>
      </div>
      <div class="item-card-body">
        <div class="item-title">${item.title || '—'}</div>
        <div class="item-title-ar">${item.name_ar || ''}</div>
        <p class="item-desc">${(item.description||'').substring(0,80)}${item.description?.length>80?'…':''}</p>
        <div class="item-prompt" dir="ltr">${(item.prompt_part||'').substring(0,60)}…</div>
      </div>
      <div class="item-card-footer">
        <button class="btn-icon btn-edit" data-id="${item.id}" title="تعديل">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          تعديل
        </button>
        <button class="btn-icon btn-delete" data-id="${item.id}" title="حذف">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
          حذف
        </button>
      </div>
    </div>
  `).join('');

  // Wire edit/delete buttons
  grid.querySelectorAll('.btn-edit').forEach(btn => btn.addEventListener('click', () => openEdit(btn.dataset.id)));
  grid.querySelectorAll('.btn-delete').forEach(btn => btn.addEventListener('click', () => openDeleteModal(btn.dataset.id)));
}

// ── FORM: SAVE ──────────────────────────────────────────
async function handleSave(e) {
  e.preventDefault();
  const btn = document.getElementById('saveBtn');
  btn.disabled = true;
  btn.textContent = 'جاري الحفظ…';

  const editId = document.getElementById('editId').value;
  let imageUrl = document.getElementById('f_imageUrl').value.trim();

  // Upload image if file selected
  const fileInput = document.getElementById('imageFile');
  if (fileInput.files[0]) {
    const uploaded = await uploadImage(fileInput.files[0]);
    if (uploaded) imageUrl = uploaded;
  }

  const payload = {
    title:       document.getElementById('f_title').value.trim(),
    name_ar:     document.getElementById('f_nameAr').value.trim(),
    description: document.getElementById('f_desc').value.trim(),
    category:    document.getElementById('f_category').value,
    difficulty:  document.getElementById('f_diff').value,
    prompt_part: document.getElementById('f_prompt').value.trim(),
    tags:        document.getElementById('f_tags').value.split(',').map(t=>t.trim()).filter(Boolean),
    image_url:   imageUrl || null,
  };

  let error;
  if (editId) {
    ({ error } = await db.from(TABLE).update(payload).eq('id', editId));
  } else {
    ({ error } = await db.from(TABLE).insert(payload));
  }

  btn.disabled = false;
  btn.textContent = 'حفظ العنصر';

  if (error) {
    document.getElementById('formFeedback').innerHTML = `<span class="feedback-error">خطأ: ${error.message}</span>`;
    return;
  }

  showToast(editId ? 'تم التعديل بنجاح ✓' : 'تم الإضافة بنجاح ✓');
  resetForm();
  await loadItems();
  switchView('library');
}

// ── FORM: EDIT ──────────────────────────────────────────
function openEdit(id) {
  const item = allItems.find(i => i.id === id);
  if (!item) return;

  document.getElementById('editId').value       = item.id;
  document.getElementById('f_title').value      = item.title || '';
  document.getElementById('f_nameAr').value     = item.name_ar || '';
  document.getElementById('f_desc').value       = item.description || '';
  document.getElementById('f_category').value   = item.category || '';
  document.getElementById('f_diff').value       = item.difficulty || 'basic';
  document.getElementById('f_prompt').value     = item.prompt_part || '';
  document.getElementById('f_tags').value       = (item.tags||[]).join(', ');
  document.getElementById('f_imageUrl').value   = item.image_url || '';
  document.getElementById('formTitle').textContent = 'تعديل العنصر';

  if (item.image_url) {
    document.getElementById('uploadPreview').src = item.image_url;
    document.getElementById('uploadPreview').classList.remove('hidden');
    document.getElementById('uploadPlaceholder').classList.add('hidden');
  }

  switchView('add');
}

function resetForm() {
  document.getElementById('editId').value = '';
  document.getElementById('itemForm').reset();
  document.getElementById('formTitle').textContent = 'إضافة عنصر جديد';
  document.getElementById('formFeedback').innerHTML = '';
  document.getElementById('uploadPreview').classList.add('hidden');
  document.getElementById('uploadPlaceholder').classList.remove('hidden');
}

// ── DELETE ──────────────────────────────────────────────
function openDeleteModal(id) {
  pendingDeleteId = id;
  document.getElementById('deleteModal').classList.remove('hidden');
}

async function executeDelete() {
  if (!pendingDeleteId) return;
  document.getElementById('deleteModal').classList.add('hidden');

  const { error } = await db.from(TABLE).delete().eq('id', pendingDeleteId);
  if (error) { showToast('خطأ في الحذف', 'error'); return; }

  showToast('تم الحذف ✓');
  allItems = allItems.filter(i => i.id !== pendingDeleteId);
  pendingDeleteId = null;
  renderLibraryGrid();
}

// ── IMAGE UPLOAD ────────────────────────────────────────
function setupImageUpload() {
  const zone    = document.getElementById('uploadZone');
  const input   = document.getElementById('imageFile');
  const preview = document.getElementById('uploadPreview');
  const ph      = document.getElementById('uploadPlaceholder');

  zone.addEventListener('click', () => input.click());

  zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
  zone.addEventListener('dragleave', ()  => zone.classList.remove('drag-over'));
  zone.addEventListener('drop', e => {
    e.preventDefault();
    zone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) previewFile(file);
  });

  input.addEventListener('change', () => {
    if (input.files[0]) previewFile(input.files[0]);
  });

  function previewFile(file) {
    const reader = new FileReader();
    reader.onload = e => {
      preview.src = e.target.result;
      preview.classList.remove('hidden');
      ph.classList.add('hidden');
    };
    reader.readAsDataURL(file);
  }
}

async function uploadImage(file) {
  const ext  = file.name.split('.').pop();
  const name = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const path = `library/${name}`;

  const { error } = await db.storage.from(BUCKET).upload(path, file, { cacheControl: '3600', upsert: false });
  if (error) { showToast('خطأ في رفع الصورة', 'error'); return null; }

  const { data } = db.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

// ── PROMPT BUILDER ──────────────────────────────────────
async function renderBuilderChips() {
  const cat = document.getElementById('builderCatFilter').value;
  let items = allItems;
  if (cat) items = items.filter(i => i.category === cat);

  const container = document.getElementById('builderChips');
  if (!items.length) {
    container.innerHTML = '<div class="empty-state">لا توجد عناصر في هذا التصنيف</div>';
    return;
  }

  container.innerHTML = items.map(item => {
    const sel = builderSelected.some(s => s.id === item.id);
    return `
      <button class="builder-chip ${sel ? 'selected' : ''}" data-id="${item.id}">
        <span class="bc-en">${item.title}</span>
        <span class="bc-ar">${item.name_ar || ''}</span>
      </button>
    `;
  }).join('');

  container.querySelectorAll('.builder-chip').forEach(btn => {
    btn.addEventListener('click', () => toggleBuilderChip(btn.dataset.id));
  });
}

function toggleBuilderChip(id) {
  const item = allItems.find(i => i.id === id);
  if (!item) return;

  const idx = builderSelected.findIndex(s => s.id === id);
  if (idx > -1) builderSelected.splice(idx, 1);
  else           builderSelected.push(item);

  renderBuilderChips();
  updateBuilderOutput();
}

function updateBuilderOutput() {
  const out   = document.getElementById('builderOutput');
  const count = document.getElementById('builderCount');
  count.textContent = `${builderSelected.length} عنصر`;

  if (!builderSelected.length) {
    out.innerHTML = '<span class="builder-ph">اختر عناصر من الأعلى…</span>';
    return;
  }
  out.textContent = builderSelected.map(i => i.prompt_part).filter(Boolean).join(', ');
}

function clearBuilder() {
  builderSelected = [];
  renderBuilderChips();
  updateBuilderOutput();
}

function copyPrompt() {
  const text = builderSelected.map(i => i.prompt_part).filter(Boolean).join(', ');
  if (!text) { showToast('لا يوجد prompt للنسخ', 'error'); return; }
  navigator.clipboard.writeText(text).then(() => showToast('تم نسخ الـ Prompt ✓'));
}

// ── STATS ───────────────────────────────────────────────
function renderStats() {
  const total = allItems.length;
  const byCat = {};
  allItems.forEach(i => { byCat[i.category] = (byCat[i.category]||0) + 1; });

  const cinematic = allItems.filter(i => ['camera-work','composition','lighting','editing','storytelling','genres','vfx','camera-angles'].includes(i.category)).length;
  const product   = allItems.filter(i => ['angles','styles','product-lighting','advanced','post'].includes(i.category)).length;
  const lenses    = allItems.filter(i => i.category === 'lenses').length;
  const withImage = allItems.filter(i => i.image_url).length;

  document.getElementById('statsGrid').innerHTML = `
    <div class="stat-card">
      <div class="stat-num">${total}</div>
      <div class="stat-label">إجمالي العناصر</div>
    </div>
    <div class="stat-card stat-card--teal">
      <div class="stat-num">${cinematic}</div>
      <div class="stat-label">Cinematic</div>
    </div>
    <div class="stat-card stat-card--indigo">
      <div class="stat-num">${product}</div>
      <div class="stat-label">Product</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">${lenses}</div>
      <div class="stat-label">Lenses</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">${withImage}</div>
      <div class="stat-label">مع صورة</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">${total - withImage}</div>
      <div class="stat-label">بدون صورة</div>
    </div>

    <div class="stat-breakdown">
      <h3 class="stat-breakdown-title">توزيع التصنيفات</h3>
      ${Object.entries(byCat).sort((a,b)=>b[1]-a[1]).map(([cat,cnt]) => `
        <div class="stat-bar-row">
          <span class="stat-bar-label">${catLabel(cat)}</span>
          <div class="stat-bar-track">
            <div class="stat-bar-fill" style="width:${Math.round(cnt/total*100)}%"></div>
          </div>
          <span class="stat-bar-count">${cnt}</span>
        </div>
      `).join('')}
    </div>
  `;
}

// ── HELPERS ─────────────────────────────────────────────
function catLabel(cat) {
  const map = {
    'camera-work':'Camera Work','composition':'Composition','lighting':'Lighting',
    'editing':'Editing','storytelling':'Storytelling','genres':'Genres','vfx':'VFX',
    'camera-angles':'Camera Angles','angles':'Product Angles','styles':'Styles',
    'product-lighting':'Product Lighting','advanced':'Advanced','post':'Post Production',
    'lenses':'Lenses'
  };
  return map[cat] || cat;
}

let toastTimer;
function showToast(msg, type = 'success') {
  const t = document.getElementById('adminToast');
  t.textContent = msg;
  t.className = `toast toast--${type} toast--show`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('toast--show'), 3000);
}

// ── START ───────────────────────────────────────────────
init();
