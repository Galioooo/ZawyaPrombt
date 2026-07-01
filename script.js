// ===== Zawya v16 — CLEAN REWRITE =====

// ============================================================
// DATA
// ============================================================

const MODES = {
  cinematic: { ar: 'Cinematic', en: 'CINEMATIC TOOLS' },
  product:   { ar: 'Product Photo', en: 'PRODUCT PHOTOGRAPHY' },
};

const CATEGORIES = {
  cinematic: [
    { id:'camera-work',   ar:'حركة الكاميرا',    en:'Camera Movement',       desc:'حركات وزوايا الكاميرا السينمائية',       count:41 },
    { id:'comp-light',    ar:'التكوين والإضاءة',  en:'Composition & Lighting', desc:'قواعد التكوين البصري وأساليب الإضاءة',   count:51 },
    { id:'story-edit',    ar:'السرد والمونتاج',    en:'Storytelling & Editing', desc:'تقنيات السرد البصري والمونتاج',           count:29 },
    { id:'genres-styles', ar:'الأنواع والأساليب', en:'Genres & Styles',        desc:'الأنواع السينمائية والأساليب البصرية',    count:29 },
    { id:'camera-angles', ar:'زوايا التصوير',     en:'Photography Angles',     desc:'الزوايا الأساسية للتصوير الفوتوغرافي',   count:15 },
  ],
  product: [
    { id:'pp-angles',   ar:'الزوايا',        en:'Shooting Angles',     desc:'كل زوايا تصوير المنتجات',            count:23 },
    { id:'pp-styles',   ar:'الستايلات',       en:'Shooting Styles',     desc:'أساليب تصوير المنتجات الاحترافية',  count:17 },
    { id:'pp-lighting', ar:'الإضاءة',         en:'Product Lighting',    desc:'تقنيات الإضاءة المتخصصة للمنتجات', count:15 },
    { id:'pp-advanced', ar:'تقنيات متقدمة',   en:'Advanced Techniques', desc:'التقنيات الاحترافية المتخصصة',      count:7  },
    { id:'pp-post',     ar:'Post Production', en:'Post Production',     desc:'معالجة ما بعد التصوير',             count:5  },
    { id:'pp-composition', ar:'التكوين',      en:'Composition',         desc:'تكوينات وتخطيطات احترافية لصور المنتجات الإعلانية', count:33 },
  ],
};

const BUILDER_LABELS = { cinematic:'Cinematic Builder', product:'Product Builder' };

function getCategoryData(catId) {
  const map = {
    'camera-work':   () => videoAnglesData.filter(i => i.cat==='camera-work'),
    'comp-light':    () => videoAnglesData.filter(i => i.cat==='composition'||i.cat==='lighting'),
    'story-edit':    () => videoAnglesData.filter(i => i.cat==='storytelling'||i.cat==='editing'),
    'genres-styles': () => videoAnglesData.filter(i => i.cat==='genres'||i.cat==='vfx'),
    'camera-angles': () => cameraAnglesData,
    'pp-angles':     () => productPhotoData.filter(i => i.cat==='angles'),
    'pp-styles':     () => productPhotoData.filter(i => i.cat==='styles'),
    'pp-lighting':   () => productPhotoData.filter(i => i.cat==='lighting'),
    'pp-advanced':   () => productPhotoData.filter(i => i.cat==='advanced'),
    'pp-post':       () => productPhotoData.filter(i => i.cat==='post'),
    'pp-composition':() => productPhotoData.filter(i => i.cat==='composition'),
  };
  return map[catId] ? map[catId]() : [];
}

function allItems() { return [...videoAnglesData,...cameraAnglesData,...productPhotoData]; }
function findItem(id) { return allItems().find(i=>i.id===id); }

// ============================================================
// STATE
// ============================================================

const state = {
  page:'landing', mode:null, category:null,
  level:'all', itemId:null, search:'',
};

// ============================================================
// POPUP EXTRA DATA
// ============================================================

const POPUP_EXTRA = {
  'aerial-shot':        {when:'استخدمها لتأسيس المكان وإظهار ضخامة البيئة.',tips:['اجعل الحركة بطيئة وناعمة','استخدمها في بداية المشهد','رائعة مع مناظر واسعة']},
  'close-up':           {when:'لكشف المشاعر الدقيقة أو تفاصيل مهمة.',tips:['الإضاءة الناعمة أفضل مع الوجوه','ركّز على العين أو التفصيلة','استخدمها في لحظات الذروة']},
  'dutch-angle':        {when:'للتعبير عن التوتر النفسي أو عدم الاستقرار.',tips:['درجات قليلة من الميل تكفي','تعمل جيداً مع الإضاءة المنخفضة','استخدمها بحذر']},
  'dolly-shot':         {when:'للدخول المكثف نحو موضوع أو كشف البيئة بتراجع.',tips:['الحركة لازم تكون ناعمة','اجمعها مع موسيقى','الدولي للأمام يُحكم القبضة']},
  'golden-hour':        {when:'لأي مشهد خارجي يحتاج دفئاً ورومانسية.',tips:['الوقت محدود خطط مسبقاً','الألوان الدافئة مع البشرة رائعة','جرّب السيلويت أمام الشمس']},
  'slow-motion':        {when:'لتمديد لحظة مهمة وإظهار تفاصيل الحركة.',tips:['اختر اللحظة الصحيحة','الإضاءة الجيدة ضرورية','اجمعها مع موسيقى']},
  'film-noir':          {when:'لمشهد يحتاج جواً غامضاً وكلاسيكياً.',tips:['الأسود والأبيض مع ظلال قوية','المطر والنيون يعززان الجو','الشخصيات الغامضة تكتمل بهذا']},
  'chiaroscuro':        {when:'للمشاهد الدرامية التي تحتاج تباين قوي.',tips:['مصدر ضوء واحد قوي هو السر','اترك مناطق كبيرة في الظلام','مستوحى من لوحات كارافاجيو']},
  'rule-of-thirds':     {when:'لأي تكوين يحتاج توازناً طبيعياً.',tips:['ضع العناصر المهمة على الخطوط','لا تضع الموضوع في المنتصف دائماً','تعمل مع كل أنواع اللقطات']},
  'montage':            {when:'لضغط الوقت أو بناء الزخم العاطفي.',tips:['الإيقاع الموسيقي يحدد سرعة القطع','اختر لقطات متنوعة الزوايا','لا تطل المونتاج أكثر من اللازم']},
  'pp-front':           {when:'الزاوية الافتراضية لأي متجر إلكتروني.',tips:['خلفية بيضاء نظيفة تناسبها','تأكد المنتج نظيف','الإضاءة المتساوية ضرورية']},
  'pp-three-quarter':   {when:'مع منتجات لها عمق وأبعاد.',tips:['45 درجة هي المسافة المثالية','تُظهر الجانبين معاً','أضف إضاءة جانبية']},
  'pp-lifestyle-full':  {when:'لبناء الارتباط العاطفي مع المشتري.',tips:['اختر بيئة تعكس الجمهور','المنتج لازم يكون واضحاً','الإضاءة الطبيعية أفضل']},
  'pp-top-down':        {when:'للمنتجات المسطحة وإنستجرام.',tips:['الترتيب الجمالي هو كل شيء','ألوان متناسقة','الضوء الطبيعي مثالي']},
  'pp-splash':          {when:'لمنتجات النظافة والمشروبات.',tips:['سرعة شاتر عالية 1/2000+','الإضاءة القوية ضرورية','تدرب كثيراً']},
  'pp-soft-box':        {when:'الاستخدام اليومي لمعظم المنتجات.',tips:['الأكبر يعطي ضوء أناعم','ضعه قريباً','أضف عاكساً']},
  'pp-natural-light':   {when:'للمنتجات الطبيعية والعضوية.',tips:['قرب النافذة الشمالية أفضل','الغيوم تُعطي ضوء ناعم','الساعة الذهبية رائعة']},
  'pp-focus-stack':     {when:'للمجوهرات والساعات والمنتجات الدقيقة.',tips:['حامل ثلاثي ثابت','صوّر عشرات الصور','Helicon Focus للدمج']},
  'pp-compositing':     {when:'للإعلانات الكبرى.',tips:['صوّر كل عنصر منفصلاً','الإضاءة متسقة','يستغرق وقتاً']},
  'pp-beauty-retouch':  {when:'لكل صورة منتج قبل النشر.',tips:['نظّف الغبار بهواء مضغوط','clone stamp للخدوش','لا تبالغ']},
  'pp-ghost-mannequin': {when:'للتجارة الإلكترونية.',tips:['خيوط السمك مفيدة','المونتاج يُزيل الخيوط','خلفية بيضاء نقية']},
  'pp-flat-lay-advanced':{when:'لإظهار محتويات العبوة.',tips:['الترتيب المتوازي أساسي','حاكم لضبط المسافات','إضاءة من الأعلى']},
  'pp-cgi':             {when:'للمنتجات غير الموجودة فعلياً.',tips:['Blender مجاني وقوي','الإضاءة الرقمية مهمة','يحتاج تعلماً']},
};

const DEF_EXTRA = {
  when:'استخدم هذه التقنية حين تريد إضافة عمق وتأثير بصري خاص.',
  tips:['اعرف الهدف قبل التطبيق','جرّبها مع إضاءة مختلفة','ادرس أمثلة ناجحة'],
};

// ============================================================
// BUILDER DATA
// ── Builder data sourced from library ──
// Cinematic tabs pull directly from videoAnglesData / cameraAnglesData
// Product tabs pull directly from productPhotoData

const LENSES_DATA = [
  {en:'14mm Ultra Wide',    ar:'مشاهد ضخمة وتشويه درامي للمنظور',             p:'14mm ultra wide lens, extreme distortion, vast perspective'},
  {en:'24mm Wide Angle',    ar:'واسع طبيعي بعمق وبُعد حقيقي',                  p:'24mm wide angle lens, natural depth, environmental context'},
  {en:'35mm Classic',       ar:'منظور قريب من العين البشرية',                   p:'35mm lens, classic cinematic perspective, natural framing'},
  {en:'50mm Natural',       ar:'منظور طبيعي تماماً بدون تشويه',                 p:'50mm normal lens, natural perspective, true to life'},
  {en:'85mm Portrait Lens', ar:'عزل جميل وخلفية ناعمة مثالية للبورتريه',       p:'85mm portrait lens, flattering compression, soft background bokeh'},
  {en:'135mm Telephoto',    ar:'ضغط الخلفية لعزل الموضوع من بعيد',              p:'135mm telephoto lens, background compression, subject isolation'},
  {en:'Macro Lens',         ar:'تفاصيل دقيقة جداً لإظهار النسيج والمواد',       p:'macro lens, extreme close-up detail, texture revealed'},
  {en:'Anamorphic Lens',    ar:'عدسة سينمائية تعطي flares وبوكيه بيضاوي',      p:'anamorphic lens, oval bokeh, cinematic lens flares, widescreen'},
];

// Convert library item → builder chip format
function libToChip(item) {
  return { en: item.nameEn, ar: item.nameAr, p: item.prompt, tags: item.tags || [] };
}

// BDATA — built from library at runtime (populated in initBuilderData)
let BDATA = {};
let PB_DATA = {};

function initBuilderData() {
  BDATA = {
    'camera-work': videoAnglesData.filter(i=>i.cat==='camera-work').map(libToChip),
    'comp':        videoAnglesData.filter(i=>i.cat==='composition').map(libToChip),
    'light':       videoAnglesData.filter(i=>i.cat==='lighting').map(libToChip),
    'edit':        videoAnglesData.filter(i=>i.cat==='editing'||i.cat==='storytelling').map(libToChip),
    'genres':      videoAnglesData.filter(i=>i.cat==='genres'||i.cat==='vfx').map(libToChip),
    'angles':      cameraAnglesData.map(libToChip),
    'lens':        LENSES_DATA,
  };
  PB_DATA = {
    'angle':    productPhotoData.filter(i=>i.cat==='angles').map(libToChip),
    'style':    productPhotoData.filter(i=>i.cat==='styles').map(libToChip),
    'lighting': productPhotoData.filter(i=>i.cat==='lighting').map(libToChip),
    'composition': productPhotoData.filter(i=>i.cat==='composition').map(libToChip),
    'advanced': productPhotoData.filter(i=>i.cat==='advanced').map(libToChip),
    'post':     productPhotoData.filter(i=>i.cat==='post').map(libToChip),
    'lens':     LENSES_DATA,
  };
}

// ============================================================
// LUCIDE ICONS (inline SVG — no external dep)
// ============================================================

const ICONS = {
  film:      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>`,
  camera:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  sun:       `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  scissors:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>`,
  layers:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  aperture:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="14.31" y1="8" x2="20.05" y2="17.94"/><line x1="9.69" y1="8" x2="21.17" y2="8"/><line x1="7.38" y1="12" x2="13.12" y2="2.06"/><line x1="9.69" y1="16" x2="3.95" y2="6.06"/><line x1="14.31" y1="16" x2="2.83" y2="16"/><line x1="16.62" y1="12" x2="10.88" y2="21.94"/></svg>`,
  rotate:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`,
  sparkles:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M19 15l.75 2.25L22 18l-2.25.75L19 21l-.75-2.25L16 18l2.25-.75L19 15z"/><path d="M5 3l.75 2.25L8 6l-2.25.75L5 9l-.75-2.25L2 6l2.25-.75L5 3z"/></svg>`,
  zap:       `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  monitor:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  search:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  x:         `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  arrowLeft: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  copy:      `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  home:      `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  chevronLeft:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  bookOpen:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
};

const CAT_ICONS = {
  'camera-work':   ICONS.film,
  'comp-light':    ICONS.sun,
  'story-edit':    ICONS.scissors,
  'genres-styles': ICONS.layers,
  'camera-angles': ICONS.aperture,
  'pp-angles':     ICONS.rotate,
  'pp-styles':     ICONS.sparkles,
  'pp-lighting':   ICONS.sun,
  'pp-advanced':   ICONS.zap,
  'pp-post':       ICONS.monitor,
  'pp-composition':ICONS.layers,
};

// ============================================================
// URL ↔ STATE
// ============================================================

function stateToURL(s) {
  const p = new URLSearchParams();
  if (s.page && s.page !== 'landing') p.set('page', s.page);
  if (s.mode)     p.set('mode', s.mode);
  if (s.category) p.set('cat',  s.category);
  if (s.itemId)   p.set('id',   s.itemId);
  if (s.level && s.level !== 'all') p.set('level', s.level);
  if (s.search)   p.set('q',    s.search);
  const qs = p.toString();
  return qs ? '?' + qs : window.location.pathname;
}

function urlToState() {
  const p = new URLSearchParams(window.location.search);
  return {
    page:     p.get('page')  || 'landing',
    mode:     p.get('mode')  || null,
    category: p.get('cat')   || null,
    itemId:   p.get('id')    || null,
    level:    p.get('level') || 'all',
    search:   p.get('q')     || '',
  };
}

// ============================================================
// NAVIGATION — KEY FIX: detail never pushes to history
// ============================================================

function navigateTo(page, params = {}) {
  if (page === 'detail') {
    // Detail is a modal — NO history push, just update state and render overlay
    Object.assign(state, { page, ...params });
    renderDetail();
    return;
  }
  // Close any open detail overlay first
  closeDetailOverlay();
  Object.assign(state, { page, ...params });
  const url = stateToURL(state);
  window.history.pushState({ ...state }, '', url);
  renderPage();
  updateHeader();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateHome() {
  closeDetailOverlay();
  Object.assign(state, { page:'landing', mode:null, category:null, itemId:null, search:'', level:'all' });
  document.getElementById('searchInput').value = '';
  window.history.pushState({ ...state }, '', stateToURL(state));
  renderPage();
  updateHeader();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeDetailOverlay(animate = false) {
  const ov = document.getElementById('detailOverlay');
  if (!ov) return;
  if (animate) {
    ov.classList.remove('open');
    setTimeout(() => ov.remove(), 280);
  } else {
    ov.remove();
  }
  // restore state to cards
  if (state.page === 'detail') {
    state.page = 'cards';
    state.itemId = null;
  }
}

// Browser back/forward
window.addEventListener('popstate', e => {
  closeDetailOverlay();
  const s = e.state || urlToState();
  Object.assign(state, s);
  const si = document.getElementById('searchInput');
  if (si) si.value = state.search || '';
  renderPage();
  updateHeader();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================================
// HEADER
// ============================================================

function updateHeader() {
  const isLanding = state.page === 'landing';
  document.getElementById('searchWrap').classList.toggle('hidden', isLanding);
  // navbar handles landing state

  const crumbs = [];
  if (state.page !== 'landing') {
    crumbs.push({ label: ICONS.home + ' الرئيسية', action: navigateHome });
    if (state.mode) {
      const ml = MODES[state.mode]?.ar;
      if (state.page === 'categories') {
        crumbs.push({ label: ml });
      } else {
        crumbs.push({ label: ml, action: () => navigateTo('categories', { mode: state.mode, category: null }) });
      }
    }
    if (state.category && state.page === 'cards') {
      const cat = (CATEGORIES[state.mode]||[]).find(c=>c.id===state.category);
      if (cat) crumbs.push({ label: cat.ar });
    }
    if (state.page === 'builder') crumbs.push({ label: BUILDER_LABELS[state.mode]||'Builder' });
    if (state.page === 'search')  crumbs.push({ label: `نتائج: "${state.search}"` });
  }

  const bc = document.getElementById('breadcrumb');
  bc.innerHTML = crumbs.map((c,i) => {
    const isLast = i === crumbs.length - 1;
    if (isLast || !c.action) return `<span class="crumb crumb--active">${c.label}</span>`;
    return `<button class="crumb crumb--link">${c.label}</button><span class="crumb-sep">${ICONS.chevronLeft}</span>`;
  }).join('');
  bc.querySelectorAll('.crumb--link').forEach((el,i) => {
    if (crumbs[i]?.action) el.addEventListener('click', crumbs[i].action);
  });
}

// ============================================================
// RENDER PAGES
// ============================================================

function renderPage() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pageMap = {
    landing:'pageLanding', categories:'pageCategories', cards:'pageCards',
    builder:'pageBuilder', search:'pageSearch', story:'pageStory',
  };
  const el = document.getElementById(pageMap[state.page]);
  if (el) el.classList.add('active');

  const renderers = {
    categories: renderCategories,
    cards:      renderCards,
    builder:    renderBuilderPage,
    search:     renderSearchResults,
  };
  if (renderers[state.page]) renderers[state.page]();
  animatePage();
}

// ---- CATEGORIES ----
function renderCategories() {
  const { mode } = state;
  const cats = CATEGORIES[mode] || [];
  const isProd = mode === 'product';

  document.getElementById('catPageTitle').innerHTML =
    `<span class="page-mode-badge ${isProd?'badge--amber':'badge--purple'}">${MODES[mode]?.ar}</span>`;
  document.getElementById('catPageSub').textContent = 'اختر القسم الذي تريد استعراضه';

  document.getElementById('categoriesGrid').innerHTML = cats.map(cat => `
    <button class="cat-card ${isProd?'cat-card--amber':''}" data-cat="${cat.id}">
      <span class="cat-icon-svg">${CAT_ICONS[cat.id]||ICONS.bookOpen}</span>
      <div class="cat-info">
        <div class="cat-name-en">${cat.en}</div>
        <div class="cat-name-ar">${cat.ar}</div>
        <div class="cat-desc">${cat.desc}</div>
      </div>
      <div class="cat-meta">
        <span class="cat-count ${isProd?'count--amber':''}">${cat.count}+</span>
        <span class="cat-arr">${ICONS.arrowLeft}</span>
      </div>
    </button>`).join('');

  const builderEntry = document.getElementById('builderEntry');
  document.getElementById('builderEntryTitle').textContent = BUILDER_LABELS[mode];
  builderEntry.className = `builder-entry ${isProd?'builder-entry--amber':''}`;
  document.getElementById('builderEntryBtn').onclick = () => navigateTo('builder');
}

// ---- CARDS ----
function renderCards() {
  const isProd = state.mode === 'product';
  const cats = CATEGORIES[state.mode] || [];
  const catInfo = cats.find(c=>c.id===state.category) || {};

  document.getElementById('cardsPageTitle').innerHTML =
    `<span class="cat-icon-svg-sm">${CAT_ICONS[state.category]||''}</span> ${catInfo.ar||''}`;
  document.getElementById('cardsPageSub').textContent = catInfo.desc || '';

  const lf = document.getElementById('levelFilter');
  lf.className = `level-filter ${isProd?'level-filter--amber':''}`;
  lf.querySelectorAll('.level-btn').forEach(b => b.classList.toggle('active', b.dataset.level===state.level));

  renderCardsGrid();
}

function renderCardsGrid() {
  let data = getCategoryData(state.category);
  if (state.level !== 'all') data = data.filter(i=>i.diff===state.level);
  if (state.search) {
    const q = state.search.toLowerCase();
    data = data.filter(i => i.nameAr.includes(state.search)||i.nameEn.toLowerCase().includes(q)||i.desc.includes(state.search));
  }
  document.getElementById('cardsCount').textContent = `${data.length} تقنية`;
  const grid = document.getElementById('cardsGrid');
  grid.innerHTML = data.length
    ? data.map(item => cardHTML(item)).join('')
    : `<div class="no-results"><div class="no-results-icon">${ICONS.search}</div><h3>لا توجد نتائج</h3><p>جرّب مستوى أو كلمة بحث مختلفة</p></div>`;
}

// ---- DETAIL MODAL ----
function renderDetail() {
  const item = findItem(state.itemId);
  if (!item) return;

  const extra = POPUP_EXTRA[item.id] || DEF_EXTRA;
  const isProd = state.mode === 'product';
  const accentClass = isProd ? 'accent--amber' : 'accent--purple';

  // Remove existing overlay
  document.getElementById('detailOverlay')?.remove();

  const div = document.createElement('div');
  div.innerHTML = `
    <div class="detail-overlay" id="detailOverlay">
      <div class="detail-modal">
        <button class="detail-close" id="detailClose">${ICONS.x}</button>
        <div class="detail-hero">
          <div class="detail-img-wrap">
            <img src="images/${item.id}.jpg" alt="${item.nameAr}" onerror="this.src='images/placeholder.png'" class="detail-img"/>
          </div>
          <div class="detail-info">
            <div class="detail-badges">
              ${item.catAr?`<span class="badge badge-cat">${item.catAr}</span>`:''}
              ${item.diff?`<span class="badge badge-diff badge-${item.diff}">${diffLabel(item.diff)}</span>`:''}
            </div>
            <h1 class="detail-title-en" style="font-size:1.5rem;font-weight:800;color:var(--text);margin-bottom:4px;letter-spacing:normal;text-transform:none;font-family:inherit">${item.nameEn}</h1>
            <div class="detail-title-ar" style="font-size:.85rem;font-weight:400;color:var(--muted);margin-bottom:var(--s2);font-family:inherit;letter-spacing:0">${item.nameAr}</div>
            <p class="detail-desc">${item.desc}</p>
          </div>
        </div>
        <div class="detail-body">
          <div class="detail-section">
            <div class="detail-section-label ${accentClass}">متى تستخدمها</div>
            <p class="detail-section-text">${extra.when}</p>
          </div>
          <div class="detail-section">
            <div class="detail-section-label ${accentClass}">أفضل الممارسات</div>
            <ul class="detail-tips">${extra.tips.map(t=>`<li>${t}</li>`).join('')}</ul>
          </div>
          <div class="detail-prompt-box ${isProd?'prompt-box--amber':''}">
            <div class="detail-prompt-label">PROMPT TEMPLATE</div>
            <div class="detail-prompt-text">${item.prompt}</div>
            <button class="detail-prompt-copy ${isProd?'btn--amber':''}" data-prompt="${esc(item.prompt)}" data-name="${esc(item.nameAr)}">
              ${ICONS.copy} نسخ الـ Prompt
            </button>
          </div>
        </div>
      </div>
    </div>`;
  document.body.appendChild(div.firstElementChild);

  requestAnimationFrame(() => {
    document.getElementById('detailOverlay')?.classList.add('open');
  });

  // Close handlers
  document.getElementById('detailClose')?.addEventListener('click', () => closeDetailOverlay(true));
  document.getElementById('detailOverlay').addEventListener('click', e => {
    if (e.target.id === 'detailOverlay') closeDetailOverlay(true);
  });
  const onEsc = e => { if (e.key==='Escape') { closeDetailOverlay(true); document.removeEventListener('keydown',onEsc); } };
  document.addEventListener('keydown', onEsc);
}

// ---- BUILDER ----
function renderBuilderPage() {
  initBuilderData();
  const isProd = state.mode === 'product';
  const c = document.getElementById('builderContainer');
  if (isProd) { c.innerHTML = buildProductBuilderHTML(); attachPBuilderEvents(); }
  else        { c.innerHTML = buildCinematicBuilderHTML(); attachBuilderEvents(); }
}

// ── NEW BUILDER: Tabs + Chips + Sticky Prompt ──────────────

const B_TABS = [
  { key:'camera-work', ar:'حركة الكاميرا',    en:'Camera Work'    },
  { key:'comp',        ar:'التكوين',           en:'Composition'    },
  { key:'light',       ar:'الإضاءة',           en:'Lighting'       },
  { key:'edit',        ar:'السرد والمونتاج',   en:'Editing'        },
  { key:'genres',      ar:'الأنواع والـ VFX',  en:'Genres & VFX'  },
  { key:'angles',      ar:'زوايا التصوير',     en:'Photo Angles'   },
  { key:'lens',        ar:'العدسات',           en:'Lenses'         },
];
const PB_TABS = [
  { key:'angle',    ar:'الزوايا',        en:'Angles'     },
  { key:'style',    ar:'الستايلات',      en:'Styles'     },
  { key:'lighting', ar:'الإضاءة',        en:'Lighting'   },
  { key:'composition', ar:'التكوين',     en:'Composition'},
  { key:'advanced', ar:'تقنيات متقدمة',  en:'Advanced'   },
  { key:'post',     ar:'Post Production',en:'Post'       },
  { key:'lens',     ar:'العدسات',        en:'Lenses'     },
];

function buildBuilderHTML(tabs, data, idPrefix, isAmber=false) {
  const ac = isAmber ? 'b--amber' : '';
  return `<div class="bnew ${ac}">

    <div class="bnew-header">
      <div class="bnew-title">
        ${isAmber
          ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg> Product Builder`
          : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg> Cinematic Builder`
        }
      </div>
      <div class="bnew-hint">اختر من كل تصنيف لبناء الـ Prompt</div>
    </div>

    <div class="bnew-tabs" id="${idPrefix}-tabs">
      ${tabs.map((t,i) => `
        <button class="btab ${i===0?'btab--on':''} ${ac}" data-tab="${t.key}">
          <span class="btab-ar">${t.ar}</span>
          <span class="btab-en">${t.en}</span>
          <span class="btab-dot" id="${idPrefix}-dot-${t.key}"></span>
        </button>
      `).join('')}
    </div>

    <div class="bnew-panels">
      ${tabs.map((t,i) => `
        <div class="bnew-panel ${i===0?'bnew-panel--on':''}" data-panel="${t.key}">
          ${data[t.key].map((item, idx) => `
            <button class="bchip ${ac}" data-key="${t.key}" data-i="${idx}" title="${item.ar}">
              <span class="bchip-en">${item.en}</span>
              <span class="bchip-ar">${item.ar}</span>
            </button>
          `).join('')}
        </div>
      `).join('')}
    </div>

    <div class="bsugg-wrap" id="${idPrefix}-sugg" style="display:none">
      <span class="bsugg-label">مقترح</span>
      <div class="bsugg-chips" id="${idPrefix}-sugg-chips"></div>
    </div>

    <div class="bnew-sticky" id="${idPrefix}-sticky">
      <div class="bnew-prompt-wrap">
        <span class="bnew-prompt-label">Prompt</span>
        <div class="bnew-prompt-text" id="${idPrefix}-text">
          <span class="bnew-ph">اختر من التصنيفات أعلاه…</span>
        </div>
      </div>
      <div class="bnew-actions">
        <button class="bnew-copy ${ac}" id="${idPrefix}-copy">${ICONS.copy} نسخ</button>
        <button class="bnew-reset" id="${idPrefix}-reset" title="إعادة تعيين">↺</button>
      </div>
    </div>

  </div>`;
}

function buildCinematicBuilderHTML() { return buildBuilderHTML(B_TABS,  BDATA,   'br',  false); }
function buildProductBuilderHTML()   { return buildBuilderHTML(PB_TABS, PB_DATA, 'pbr', true);  }

let bSel  = {'camera-work':null,comp:null,light:null,edit:null,genres:null,angles:null,lens:null};
let pbSel = {angle:null,style:null,lighting:null,advanced:null,post:null,lens:null};

function attachBuilderEvents() {
  bSel = {'camera-work':null,comp:null,light:null,edit:null,genres:null,angles:null,lens:null};
  _wireBuilder('br', B_TABS, BDATA, bSel, false);
}
function attachPBuilderEvents() {
  pbSel = {angle:null,style:null,lighting:null,advanced:null,post:null,lens:null};
  _wireBuilder('pbr', PB_TABS, PB_DATA, pbSel, true);
}

function _wireBuilder(pfx, tabs, data, sel, isAmber) {
  // Tab switching
  const tabsEl = document.getElementById(`${pfx}-tabs`);
  const stickyEl = document.getElementById(`${pfx}-sticky`);
  // find the panels container = sibling of tabs inside .bnew
  const bnewEl = tabsEl ? tabsEl.closest('.bnew') : null;
  document.querySelectorAll(`#${pfx}-tabs .btab`).forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll(`#${pfx}-tabs .btab`).forEach(t => t.classList.remove('btab--on'));
      if (bnewEl) bnewEl.querySelectorAll('.bnew-panel').forEach(p => p.classList.remove('bnew-panel--on'));
      tab.classList.add('btab--on');
      const panel = bnewEl ? bnewEl.querySelector(`.bnew-panel[data-panel="${tab.dataset.tab}"]`) : null;
      if (panel) panel.classList.add('bnew-panel--on');
    });
  });

  // Chip selection — scoped to this builder's .bnew container
  if (bnewEl) bnewEl.querySelectorAll('.bchip').forEach(chip => {
    chip.addEventListener('click', () => {
      const key = chip.dataset.key, idx = +chip.dataset.i;
      if (sel[key] === idx) {
        sel[key] = null;
        chip.classList.remove('bchip--sel');
      } else {
        sel[key] = idx;
        bnewEl.querySelectorAll(`.bchip[data-key="${key}"]`).forEach(c => c.classList.remove('bchip--sel'));
        chip.classList.add('bchip--sel');
      }
      _updatePrompt(pfx, tabs, data, sel);
      _updateSuggestions(pfx, tabs, data, sel, bnewEl, isAmber);
    });
  });

  // Copy
  document.getElementById(`${pfx}-copy`).onclick = () => {
    const el = document.getElementById(`${pfx}-text`);
    const t = el?.dataset.prompt || '';
    if (t) copyText(t, isAmber ? 'Product Builder' : 'Cinematic Builder');
  };

  // Reset
  document.getElementById(`${pfx}-reset`).onclick = () => {
    tabs.forEach(t => { sel[t.key] = null; });
    if (bnewEl) bnewEl.querySelectorAll('.bchip').forEach(c => c.classList.remove('bchip--sel'));
    document.querySelectorAll(`#${pfx}-tabs .btab`).forEach((t,i) => t.classList.toggle('btab--on', i===0));
    if (bnewEl) bnewEl.querySelectorAll('.bnew-panel').forEach((p,i) => p.classList.toggle('bnew-panel--on', i===0));
    _updatePrompt(pfx, tabs, data, sel);
    _updateSuggestions(pfx, tabs, data, sel, bnewEl, isAmber);
  };
}

function _updatePrompt(pfx, tabs, data, sel) {
  const parts = [];
  tabs.forEach(t => { if (sel[t.key] !== null) parts.push(data[t.key][sel[t.key]].p); });
  const el = document.getElementById(`${pfx}-text`);
  if (!el) return;
  if (parts.length) {
    el.textContent = parts.join(', ');
    el.dataset.prompt = parts.join(', ');
    el.classList.add('bnew-prompt--has');
  } else {
    el.innerHTML = '<span class="bnew-ph">اختر من التصنيفات أعلاه…</span>';
    el.dataset.prompt = '';
    el.classList.remove('bnew-prompt--has');
  }
  // Tab dots
  tabs.forEach(t => {
    const dot = document.getElementById(`${pfx}-dot-${t.key}`);
    if (dot) dot.classList.toggle('btab-dot--on', sel[t.key] !== null);
  });
  // Sticky bar pulse
  const sticky = document.getElementById(`${pfx}-sticky`);
  if (sticky && parts.length) {
    sticky.classList.remove('bnew-sticky--pulse');
    void sticky.offsetWidth;
    sticky.classList.add('bnew-sticky--pulse');
  }
}

// ── Smart Suggestions ──
function _updateSuggestions(pfx, tabs, data, sel, bnewEl, isAmber) {
  const suggWrap = document.getElementById(`${pfx}-sugg`);
  const suggChips = document.getElementById(`${pfx}-sugg-chips`);
  if (!suggWrap || !suggChips) return;

  // Collect tags from selected items
  const activeTags = new Set();
  tabs.forEach(t => {
    if (sel[t.key] !== null && data[t.key] && data[t.key][sel[t.key]]) {
      (data[t.key][sel[t.key]].tags || []).forEach(tag => activeTags.add(tag));
    }
  });

  if (!activeTags.size) { suggWrap.style.display = 'none'; return; }

  // Find unselected items sharing tags
  const seen = new Set();
  const suggestions = [];
  tabs.forEach(t => {
    if (sel[t.key] !== null || !data[t.key]) return;
    data[t.key].forEach((item, idx) => {
      const shared = (item.tags || []).filter(tag => activeTags.has(tag));
      if (shared.length && !seen.has(`${t.key}-${idx}`)) {
        seen.add(`${t.key}-${idx}`);
        suggestions.push({ key: t.key, idx, item, score: shared.length });
      }
    });
  });

  suggestions.sort((a, b) => b.score - a.score);
  const top = suggestions.slice(0, 4);

  if (!top.length) { suggWrap.style.display = 'none'; return; }

  const ac = isAmber ? 'b--amber' : '';
  suggWrap.style.display = 'flex';
  suggChips.innerHTML = top.map(s =>
    `<button class="bsugg-chip ${ac}" data-key="${s.key}" data-i="${s.idx}">${s.item.en}</button>`
  ).join('');

  suggChips.querySelectorAll('.bsugg-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.key, idx = +btn.dataset.i;
      // Switch to that tab
      document.querySelectorAll(`#${pfx}-tabs .btab`).forEach(t => t.classList.remove('btab--on'));
      const targetTab = document.querySelector(`#${pfx}-tabs .btab[data-tab="${key}"]`);
      if (targetTab) targetTab.classList.add('btab--on');
      if (bnewEl) {
        bnewEl.querySelectorAll('.bnew-panel').forEach(p => p.classList.remove('bnew-panel--on'));
        const panel = bnewEl.querySelector(`.bnew-panel[data-panel="${key}"]`);
        if (panel) panel.classList.add('bnew-panel--on');
      }
      // Select chip
      sel[key] = idx;
      if (bnewEl) {
        bnewEl.querySelectorAll(`.bchip[data-key="${key}"]`).forEach(c => c.classList.remove('bchip--sel'));
        const chip = bnewEl.querySelector(`.bchip[data-key="${key}"][data-i="${idx}"]`);
        if (chip) chip.classList.add('bchip--sel');
      }
      _updatePrompt(pfx, tabs, data, sel);
      _updateSuggestions(pfx, tabs, data, sel, bnewEl, isAmber);
    });
  });
}

// legacy aliases so old code still compiles
function updateBOut()  { _updatePrompt('br',  B_TABS,  BDATA,   bSel);  }
function updatePBOut() { _updatePrompt('pbr', PB_TABS, PB_DATA, pbSel); }

// ---- SEARCH ----
function renderSearchResults() {
  const q = state.search.toLowerCase();
  const data = allItems().filter(i => i.nameAr.includes(state.search)||i.nameEn.toLowerCase().includes(q)||i.desc.includes(state.search));
  document.getElementById('searchResultsTitle').textContent = `نتائج البحث عن "${state.search}"`;
  document.getElementById('searchResultsSub').textContent = `${data.length} نتيجة`;
  document.getElementById('searchGrid').innerHTML = data.length
    ? data.map(item=>cardHTML(item,true)).join('')
    : `<div class="no-results"><div class="no-results-icon">${ICONS.search}</div><h3>لا توجد نتائج</h3><p>جرّب كلمة مختلفة</p></div>`;
}

// ============================================================
// CARD HTML
// ============================================================

function cardHTML(item, showMode=false) {
  const isProduct = productPhotoData.some(p=>p.id===item.id);
  return `<div class="card ${isProduct?'card--amber':''}" data-id="${item.id}">
    <div class="card-img-wrap">
      <img class="card-img" src="images/${item.id}.jpg" alt="${item.nameAr}" onerror="this.src='images/placeholder.png'" loading="lazy"/>
      <div class="card-badges">
        ${item.catAr?`<span class="badge badge-cat">${item.catAr}</span>`:''}
        ${item.diff?`<span class="badge badge-diff badge-${item.diff}">${diffLabel(item.diff)}</span>`:''}
      </div>
    </div>
    <div class="card-body">
      <div class="card-name-en">${item.nameEn}</div>
      <div class="card-name-ar">${item.nameAr}</div>
      <p class="card-desc">${item.desc}</p>
    </div>
    <div class="card-footer">
      <span class="card-hint">اضغط للتفاصيل</span>
      <button class="btn-copy-prompt ${isProduct?'btn-copy--amber':''}" data-prompt="${esc(item.prompt)}" data-name="${esc(item.nameAr)}">
        ${ICONS.copy} نسخ
      </button>
    </div>
  </div>`;
}

// ============================================================
// UTILS
// ============================================================

function diffLabel(d) { return d==='basic'?'مبتدئ':d==='intermediate'?'متوسط':d==='advanced'?'متقدم':d; }
function esc(s) { return (s||'').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }

function showToast(msg) {
  const t=document.getElementById('toast');
  t.textContent=msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2200);
}

function copyText(text,name) {
  navigator.clipboard.writeText(text)
    .then(()=>showToast(`تم نسخ: ${name}`))
    .catch(()=>{ const el=document.createElement('textarea'); el.value=text; document.body.appendChild(el); el.select(); document.execCommand('copy'); document.body.removeChild(el); showToast(`تم نسخ: ${name}`); });
}

// ============================================================
// ANIMATIONS
// ============================================================

function animatePage() {
  if (typeof gsap === 'undefined') return;
  gsap.killTweensOf('*');
  if (state.page==='landing') {
    const tl=gsap.timeline({defaults:{ease:'power3.out'}});
    tl.fromTo('.landing-eyebrow',{opacity:0,y:14},{opacity:1,y:0,duration:.5})
      .fromTo('.landing-logo',{opacity:0,y:22,scale:.93},{opacity:1,y:0,scale:1,duration:.6},'-=.25')
      .fromTo('.landing-title',{opacity:0,y:22},{opacity:1,y:0,duration:.55},'-=.35')
      .fromTo('.landing-sub',{opacity:0,y:14},{opacity:1,y:0,duration:.45},'-=.35')
      .fromTo('.landing-cta-row',{opacity:0,y:12},{opacity:1,y:0,duration:.4},'-=.3')
      .fromTo('.landing-stats',{opacity:0,y:10},{opacity:1,y:0,duration:.35},'-=.25');
  }
  if (state.page==='categories') gsap.fromTo('.cat-card',{opacity:0,y:18},{opacity:1,y:0,duration:.4,ease:'power3.out',stagger:.06,delay:.08});
  if (state.page==='cards'||state.page==='search') gsap.fromTo('.card',{opacity:0,y:20},{opacity:1,y:0,duration:.35,ease:'power3.out',stagger:.035,delay:.04});
}

// ============================================================
// EVENT DELEGATION
// ============================================================

document.addEventListener('click', e => {
  // Landing CTA / any [data-mode] → direct to builder
  const ctaBtn = e.target.closest('[data-mode]');
  if (ctaBtn?.dataset.mode) { navigateTo('builder',{mode:ctaBtn.dataset.mode}); return; }

  // Cat card
  const catCard = e.target.closest('.cat-card');
  if (catCard) { navigateTo('cards',{category:catCard.dataset.cat}); return; }

  // Copy prompt (card footer)
  const copyBtn = e.target.closest('.btn-copy-prompt');
  if (copyBtn) { e.stopPropagation(); copyText(copyBtn.dataset.prompt, copyBtn.dataset.name); return; }

  // Detail prompt copy
  const detailCopy = e.target.closest('.detail-prompt-copy');
  if (detailCopy) { copyText(detailCopy.dataset.prompt, detailCopy.dataset.name); return; }

  // Card body click → detail
  const card = e.target.closest('.card');
  if (card) {
    const id=card.dataset.id;
    const isProduct=productPhotoData.some(p=>p.id===id);
    const detailMode=state.mode||(isProduct?'product':'cinematic');
    navigateTo('detail',{itemId:id,mode:detailMode});
    return;
  }

  // Logo
  if (e.target.closest('#logoBtn')) { navigateHome(); return; }
});

// Level filter
document.addEventListener('click', e => {
  const lb=e.target.closest('.level-btn');
  if (!lb) return;
  document.querySelectorAll('.level-btn').forEach(b=>b.classList.remove('active'));
  lb.classList.add('active');
  state.level=lb.dataset.level;
  renderCardsGrid();
});

// Ripple
const rippleStyle=document.createElement('style');
rippleStyle.textContent='@keyframes rippleAnim{to{transform:scale(2.8);opacity:0;}}';
document.head.appendChild(rippleStyle);

document.addEventListener('click', e => {
  const btn=e.target.closest('.btn-primary,.btn-secondary,.builder-copy-btn,.detail-prompt-copy');
  if (!btn) return;
  const rect=btn.getBoundingClientRect(), size=Math.max(rect.width,rect.height);
  const rpl=document.createElement('span');
  rpl.style.cssText=`position:absolute;width:${size}px;height:${size}px;border-radius:50%;background:rgba(255,255,255,0.18);top:${e.clientY-rect.top-size/2}px;left:${e.clientX-rect.left-size/2}px;transform:scale(0);pointer-events:none;animation:rippleAnim .5s ease-out forwards`;
  btn.style.position='relative'; btn.style.overflow='hidden';
  btn.appendChild(rpl); setTimeout(()=>rpl.remove(),520);
});

// Search
let searchTimer=null;
document.getElementById('searchInput').addEventListener('input', e => {
  const val=e.target.value.trim();
  document.getElementById('searchClear').classList.toggle('visible',val.length>0);
  clearTimeout(searchTimer);
  if (!val) return;
  searchTimer=setTimeout(()=>{ state.search=val; navigateTo('search',{search:val}); },400);
});
document.getElementById('searchInput').addEventListener('keydown', e => {
  if (e.key==='Escape') { document.getElementById('searchInput').value=''; document.getElementById('searchClear').classList.remove('visible'); state.search=''; }
});
document.getElementById('searchClear').addEventListener('click', () => {
  document.getElementById('searchInput').value=''; document.getElementById('searchClear').classList.remove('visible'); state.search='';
  if (state.page==='search') { navigateTo('categories',{mode:state.mode}); }
});

// ============================================================
// INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Capture deep-link param FIRST, before replaceState below rewrites the URL and strips it
  const openParam = new URLSearchParams(window.location.search).get('open');

  const fromURL=urlToState();
  Object.assign(state,fromURL);
  if (state.search) { document.getElementById('searchInput').value=state.search; document.getElementById('searchClear').classList.add('visible'); }
  window.history.replaceState({...state},'',stateToURL(state));
  renderPage();
  updateHeader();
  initLanding();
  wireModal();
  wireExploreModal();
  wireStory();

  // Deep-link support: creative-lab.html "المكتبة" / "البلدر" buttons
  if (openParam === 'explore') openExploreModal();
  if (openParam === 'builder') openModal();
});

// ============================================================
// LANDING — NEW ADDITIONS (non-breaking)
// ============================================================

// ============================================================
// BENTO GALLERY
// ============================================================

// Bento pattern: 8 slots
// [large, small, small, wide, small, small, small, small]
// Grid: 4 cols x 3 rows
// large = col 1-2, row 1-2
// small1 = col 3, row 1
// small2 = col 4, row 1
// wide = col 3-4, row 2
// small3 = col 1, row 3
// small4 = col 2, row 3
// small5 = col 3, row 3
// small6 = col 4, row 3

const BENTO_PATTERN = [
  { type:'large', cls:'bento-large' },  // col 1-6, row 1-2
  { type:'small', cls:'bento-small' },  // col 7-9, row 1
  { type:'small', cls:'bento-small' },  // col 10-12, row 1
  { type:'wide',  cls:'bento-wide'  },  // col 7-12, row 2
  { type:'small', cls:'bento-small' },  // col 1-3, row 3
  { type:'small', cls:'bento-small' },  // col 4-6, row 3
  { type:'small', cls:'bento-small' },  // col 7-9, row 3
  { type:'small', cls:'bento-small' },  // col 10-12, row 3
];

let bentoInterval = null;

function shuffle(arr) {
  const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a;
}

// ── Bento: per-type shuffled queues ──────────────────────────
const bentoQueues = { large: [], wide: [], small: [] };
const bentoIdx    = { large: 0,  wide: 0,  small: 0  };

function initBentoQueues() {
  if (typeof GALLERY === 'undefined') return;
  bentoQueues.large = shuffle(GALLERY.large);
  bentoQueues.wide  = shuffle(GALLERY.wide);
  bentoQueues.small = shuffle(GALLERY.small);
  bentoIdx.large = bentoIdx.wide = bentoIdx.small = 0;
}

function nextBentoSrc(type) {
  const q = bentoQueues[type];
  if (!q.length) return '';
  const src = q[bentoIdx[type] % q.length];
  bentoIdx[type]++;
  // re-shuffle when we wrap around
  if (bentoIdx[type] >= q.length) {
    bentoQueues[type] = shuffle(q);
    bentoIdx[type] = 0;
  }
  return src;
}

function fadeSlot(img, newSrc) {
  img.style.transition = 'opacity .5s ease';
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = newSrc;
    img.style.opacity = '1';
  }, 500);
}

function renderBento(animate=false) {
  const grid = document.getElementById('bentoGrid');
  if (!grid) return;
  if (typeof GALLERY === 'undefined') return;

  if (!grid.children.length) {
    // ── First render: build cards ──
    initBentoQueues();
    grid.innerHTML = BENTO_PATTERN.map(({type, cls}) => {
      const src = nextBentoSrc(type);
      return `<div class="bento-card ${cls}" data-bento-type="${type}">
        <img src="${src}" alt="" loading="lazy"/>
      </div>`;
    }).join('');
    return;
  }

  // ── Animated: rotate only ONE type per call ──
  const type = animate; // passed as string: 'large' | 'wide' | 'small'
  if (typeof type !== 'string') return;
  grid.querySelectorAll(`.bento-card[data-bento-type="${type}"] img`).forEach(img => {
    fadeSlot(img, nextBentoSrc(type));
  });
}

function startBentoRotation() {
  if (bentoInterval) clearInterval(bentoInterval);
  // Each type rotates independently at its own pace
  const intervals = [];
  intervals.push(setInterval(() => renderBento('small'), 7000));   // small: every 7s
  intervals.push(setInterval(() => renderBento('wide'),  12000));  // wide:  every 12s
  intervals.push(setInterval(() => renderBento('large'), 18000));  // large: every 18s
  bentoInterval = intervals; // store all so we can clear later
}

// ============================================================
// MOUSE GLOW
// ============================================================

function initMouseGlow() {
  const glow = document.getElementById('mouseGlow');
  if (!glow) return;
  let mx=0, my=0, cx=0, cy=0;
  let raf;

  document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });

  function animate() {
    cx += (mx - cx) * 0.08;
    cy += (my - cy) * 0.08;
    glow.style.left = cx + 'px';
    glow.style.top  = cy + 'px';
    raf = requestAnimationFrame(animate);
  }
  animate();

  // Hide when mouse leaves window
  document.addEventListener('mouseleave', () => glow.style.opacity='0');
  document.addEventListener('mouseenter', () => glow.style.opacity='1');
}

// ============================================================
// INIT LANDING
// ============================================================

function initLanding() {
  // Bento gallery
  renderBento(false);
  startBentoRotation();

  // Mouse glow
  initMouseGlow();

  // Landing buttons — scroll to builder cards
  function scrollToBuilder() {
    var el = document.querySelector('#libShowcase .showcase-title') || document.getElementById('libShowcase');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  document.getElementById('btnHeroCta')?.addEventListener('click', scrollToBuilder);
  document.getElementById('btnStartNow')?.addEventListener('click', function() {
    if (state.page === 'landing') { scrollToBuilder(); } else { openModal(); }
  });
  document.getElementById('btnEndCta')?.addEventListener('click', openModal);
  document.getElementById('btnExploreLanding')?.addEventListener('click', openExploreModal);
  document.getElementById('navHome')?.addEventListener('click', navigateHome);

  // Footer logo → جاليو page
  document.getElementById('footerLogo')?.addEventListener('click', function() {
    navigateTo('story');
  });
  document.getElementById('navExplore')?.addEventListener('click', openExploreModal);
  document.getElementById('navStory')?.addEventListener('click', () => navigateTo('story'));

  // Bottom CTA text → scroll to builder cards
  document.getElementById('bottomCta')?.addEventListener('click', scrollToBuilder);

  // Scroll to top button
  var scrollBtn = document.getElementById('scrollTopBtn');
  if (scrollBtn) {
    window.addEventListener('scroll', function() {
      scrollBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    scrollBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ============================================================
// MODE MODAL (Builder)
// ============================================================

function openModal() {
  document.getElementById('modeModal')?.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal() {
  document.getElementById('modeModal')?.classList.remove('open');
  document.body.style.overflow='';
}

// ============================================================
// EXPLORE MODAL (المكتبة)
// ============================================================

function openExploreModal() {
  document.getElementById('exploreModal')?.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeExploreModal() {
  document.getElementById('exploreModal')?.classList.remove('open');
  document.body.style.overflow='';
}

function wireExploreModal() {
  const modal = document.getElementById('exploreModal');
  if (!modal) return;
  document.getElementById('exploreModalClose')?.addEventListener('click', closeExploreModal);
  modal.addEventListener('click', e=>{ if(e.target===modal) closeExploreModal(); });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeExploreModal(); });

  document.getElementById('exploreLibCinema')?.addEventListener('click',()=>{
    closeExploreModal(); navigateTo('categories',{mode:'cinematic',category:null,level:'all'});
  });
  document.getElementById('exploreLibProduct')?.addEventListener('click',()=>{
    closeExploreModal(); navigateTo('categories',{mode:'product',category:null,level:'all'});
  });
}

function wireStory() {
  document.getElementById('storyStartBtn')?.addEventListener('click', openModal);
}

function wireModal() {
  const modal=document.getElementById('modeModal');
  if (!modal) return;

  document.getElementById('modalClose')?.addEventListener('click', closeModal);
  modal.addEventListener('click', e=>{ if(e.target===modal) closeModal(); });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModal(); });

  document.getElementById('modalCinematic')?.addEventListener('click',()=>{
    closeModal(); navigateTo('builder',{mode:'cinematic'});
  });
  document.getElementById('modalProduct')?.addEventListener('click',()=>{
    closeModal(); navigateTo('builder',{mode:'product'});
  });
}
