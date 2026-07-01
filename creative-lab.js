// ============================================================
// CREATIVE STRATEGY LAB — APP LOGIC
// ============================================================

const CL_TABS = [
  {id:'overview',      num:1,  title:'نظرة عامة',            en:'Overview'},
  {id:'brief',         num:2,  title:'Creative Brief',        en:'Creative Brief'},
  {id:'problem',       num:3,  title:'Problem',               en:'Problem'},
  {id:'observation',   num:4,  title:'Observation',           en:'Observation'},
  {id:'insight',       num:5,  title:'Insight',               en:'Insight'},
  {id:'truths',        num:6,  title:'Truths',                en:'Truths'},
  {id:'tension',       num:7,  title:'Tension / Conflict',    en:'Tension'},
  {id:'bigidea',       num:8,  title:'Big Idea',              en:'Big Idea'},
  {id:'techniques',    num:9,  title:'Creative Techniques',   en:'Techniques'},
  {id:'copywriting',   num:10, title:'Copywriting',           en:'Copywriting'},
  {id:'execution',     num:11, title:'Execution',             en:'Execution'},
  {id:'artdirection',  num:12, title:'Art Direction',         en:'Art Direction'},
  {id:'mediacontext',  num:13, title:'Media Context',         en:'Media Context'},
  {id:'evaluation',    num:14, title:'Evaluation Checklist',  en:'Evaluation'},
  {id:'framework',     num:15, title:'Final Framework',       en:'Final Framework'},
];

let clState = { tab: 'overview', techFamily: 'all', techQuery: '', techExpanded: new Set(), checked: new Set() };

// ---------- small render helpers ----------
const esc = s => (s||'').toString();
const chips = arr => `<ul class="plain">${arr.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
const card = (title, bodyHtml) => `<div class="card"><div class="card-title"><span class="dot"></span>${esc(title)}</div>${bodyHtml}</div>`;
const noteBox = t => `<div class="note-box">${esc(t)}</div>`;
const ruleBox = t => `<div class="rule-box">${esc(t)}</div>`;
const qBox = t => `<div class="q-box">${esc(t)}</div>`;
const sectionHead = (eyebrow, title) => `<div class="section-head"><div class="section-eyebrow">${esc(eyebrow)}</div><div class="section-title">${esc(title)}</div></div>`;
const clCtaBlock = () => `<div class="cl-cta-block">
  <div class="cl-cta-title">جرب دلوقتي</div>
  <p class="cl-cta-sub">خدت التوجيه الفني اللي محتاجه؟ ابدأ تنفّذ الفكرة على طول.</p>
  <div class="cl-cta-btns">
    <a class="topbar-action" href="index.html?page=story">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
      جاليو
    </a>
    <a class="topbar-action" href="index.html?open=explore">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
      المكتبة
    </a>
    <a class="topbar-action primary" href="index.html?open=builder">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/></svg>
      البلدر
    </a>
  </div>
</div>`;

// ============================================================
// TAB RENDERERS
// ============================================================

function renderOverview(){
  let html = sectionHead('Section 1 · 15', 'Overview');
  html += card('باختصار', `<p>${CL_OVERVIEW.intro}</p>`);
  html += noteBox(CL_OVERVIEW.note);
  html += `<div class="card"><div class="card-title"><span class="dot"></span>ابدأ من هنا</div>
    <ul class="plain">${CL_TABS.slice(1).map(t=>`<li style="cursor:pointer" onclick="clGoTo('${t.id}')">${t.num}. ${t.title}</li>`).join('')}</ul>
  </div>`;
  return html;
}

function renderBrief(){
  const d = CL_BRIEF;
  let html = sectionHead('Section 2 · 15', 'Creative Brief — الهدف قبل الفكرة');
  html += card('الفكرة', `<p>${d.intro}</p>`);
  html += qBox(d.question);
  html += card('أهداف محتملة', chips(d.goals));
  html += `<div class="card"><div class="card-title"><span class="dot"></span>كل هدف يغيّر طريقة التفكير</div>
    <div class="checklist" style="cursor:default">
    ${d.mapping.map(m=>`<div class="check-item" style="cursor:default"><span><b class="en">${m.goal}</b> — ${m.note}</span></div>`).join('')}
    </div></div>`;
  html += noteBox(d.note);
  html += qBox(d.coreQuestion);
  html += card('Mini Checklist', chips(d.checklist));
  return html;
}

function renderProblem(){
  const d = CL_PROBLEM;
  let html = sectionHead('Section 3 · 15', 'Problem — المشكلة');
  html += card('الفكرة', `<p>${d.intro}</p>`);
  html += card('أنواع المشاكل الشائعة', chips(d.list));
  html += noteBox(d.note);
  html += `<div class="card"><div class="card-title"><span class="dot"></span>أمثلة</div>${d.examples.map(e=>`<p style="margin-bottom:10px">${e}</p>`).join('')}</div>`;
  html += qBox(d.coreQuestion);
  html += ruleBox(d.rule);
  return html;
}

function renderObservation(){
  const d = CL_OBSERVATION;
  let html = sectionHead('Section 4 · 15', 'Observation — الملاحظة');
  html += card('الفكرة', `<p>${d.intro}</p>`);
  html += qBox(d.coreQuestion);
  html += card('أمثلة على Observation', chips(d.examples));
  html += noteBox(d.notYet);
  html += card('Observation الجيدة تكون', chips(d.qualities));
  return html;
}

function renderInsight(){
  const d = CL_INSIGHT;
  let html = sectionHead('Section 5 · 15', 'Insight — البصيرة');
  html += card('الفكرة', `<p>${d.intro}</p>`);
  html += qBox(d.definition);
  html += `<div class="card"><div class="card-title"><span class="dot"></span>الفرق بين Observation و Insight</div>
    ${d.comparisons.map(c=>`<div class="pair">
      <div class="pair-box obs"><div class="pair-label">Observation</div>${c.observation}</div>
      <div class="pair-box ins"><div class="pair-label">Insight</div>${c.insight}</div>
    </div>`).join('')}</div>`;
  html += card('الـ Insight القوي غالبًا يكون', chips(d.qualities));
  html += noteBox(d.test);
  html += ruleBox(d.rule);
  return html;
}

function renderTruths(){
  const t = CL_TRUTHS;
  let html = sectionHead('Section 6 · 15', 'Truths — الحقائق التي تبني عليها الفكرة');
  html += card('الفكرة', `<p>${t.intro}</p>`);
  html += `<div class="mini-tabs" id="truthsTabs">
    <button class="mini-tab-btn active" data-mt="product">Product Truth</button>
    <button class="mini-tab-btn" data-mt="human">Human Truth</button>
    <button class="mini-tab-btn" data-mt="category">Category Truth</button>
    <button class="mini-tab-btn" data-mt="cultural">Cultural Truth</button>
  </div>`;

  html += `<div class="mini-panel active" data-mp="product">
    ${card('التعريف', `<p>${t.product.def}</p>`)}
    ${card('ممكن تكون', chips(t.product.list))}
    ${card('أمثلة', chips(t.product.examples))}
    ${noteBox(t.product.note)}
    ${qBox(t.product.formula)}
    <div class="card"><div class="card-title"><span class="dot"></span>مثال متكامل</div>
      <div class="pair-box obs" style="margin-bottom:8px"><div class="pair-label">Product Truth</div>${t.product.example.pt}</div>
      <div class="pair-box ins" style="margin-bottom:8px"><div class="pair-label">Human Truth</div>${t.product.example.ht}</div>
      <div class="pair-box obs"><div class="pair-label">Creative Direction</div>${t.product.example.direction}</div>
    </div>
  </div>`;

  html += `<div class="mini-panel" data-mp="human">
    ${card('التعريف', `<p>${t.human.def}</p>`)}
    ${card('أمثلة', chips(t.human.examples))}
    <div class="card"><div class="card-title"><span class="dot"></span>Product Truth + Human Truth</div>
    ${t.human.combos.map(c=>`<div class="pair" style="margin-bottom:8px">
      <div class="pair-box obs"><div class="pair-label">Product Truth</div>${c.pt}</div>
      <div class="pair-box ins"><div class="pair-label">Human Truth</div>${c.ht}</div>
    </div><div class="pair-box obs" style="margin-bottom:14px"><div class="pair-label">Creative Direction</div>${c.direction}</div>`).join('')}
    </div>
  </div>`;

  html += `<div class="mini-panel" data-mp="category">
    ${card('التعريف', `<p>${t.category.def}</p>`)}
    ${card('أمثلة', chips(t.category.examples))}
    ${qBox(t.category.question)}
  </div>`;

  html += `<div class="mini-panel" data-mp="cultural">
    ${card('التعريف', `<p>${t.cultural.def}</p>`)}
    ${card('أمثلة', chips(t.cultural.examples))}
    ${qBox(t.cultural.question)}
  </div>`;

  return html;
}

function renderTension(){
  const d = CL_TENSION;
  let html = sectionHead('Section 7 · 15', 'Tension / Conflict — الصراع أو التوتر');
  html += card('الفكرة', `<p>${d.intro}</p>`);
  html += card('أمثلة على الصراع', chips(d.examples));
  html += noteBox(d.note);
  html += qBox(d.question);
  html += card('طرق استخراج الصراع', chips(d.extraction));
  return html;
}

function renderBigIdea(){
  const d = CL_BIGIDEA;
  let html = sectionHead('Section 8 · 15', 'Big Idea — الفكرة الكبيرة');
  html += card('الفكرة', `<p>${d.intro}</p>`);
  html += card('لازم تكون', chips(d.qualities));
  html += `<div class="card"><div class="card-title"><span class="dot"></span>أمثلة</div>
    ${d.examples.map(e=>`<div class="pair-box obs" style="margin-bottom:8px"><div class="pair-label en">${e.name}</div>${e.note}</div>`).join('')}
  </div>`;
  html += ruleBox(d.test);
  html += qBox(d.coreQuestion);
  html += `<div class="card"><div class="card-title"><span class="dot"></span>الفرق بين Big Idea و Execution</div>
    ${d.diffExamples.map(x=>`<div class="pair" style="margin-bottom:8px">
      <div class="pair-box ins"><div class="pair-label">Big Idea</div>${x.bigIdea}</div>
      <div class="pair-box obs"><div class="pair-label">Execution</div>${x.execution}</div>
    </div>`).join('')}
  </div>`;
  return html;
}

// ---------- Techniques ----------
const escAttr = s => (s||'').toString().replace(/"/g,'&quot;');

const FI = {
  explain: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  meaning: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.5.4.8 1 .8 1.6V17h6.4v-.7c0-.6.3-1.2.8-1.6A7 7 0 0 0 12 2z"/></svg>',
  when: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
  example: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg>',
  why: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  search: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  tag: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41L11 3.83V3H3v8l.83.83L13.41 20.6a2 2 0 0 0 2.83 0l4.35-4.35a2 2 0 0 0 0-2.83z"/><circle cx="7.5" cy="7.5" r="1" fill="currentColor"/></svg>',
  notice: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>'
};

function techniqueCardHTML(t){
  const open = clState.techExpanded.has(t.id);
  const idx = CL_TECHNIQUES.findIndex(x=>x.id===t.id) + 1;
  return `<div class="tech-card ${open?'open':''}" data-tech="${t.id}" data-fam="${t.family}">
    <div class="tech-head" data-toggle="${t.id}">
      <div class="tech-head-left">
        <span class="tech-idx en">${String(idx).padStart(2,'0')}</span>
        <div class="tech-head-text">
          <span class="en">${t.nameEn}</span>
          <span class="ar">${t.nameAr}</span>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:10px;">
        <span class="tech-fam-badge">${CL_FAMILIES.find(f=>f.key===t.family).ar}</span>
        <svg class="tech-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </div>
    <div class="tech-body">
      <div class="tech-body-inner">
        <div class="tech-field"><div class="tech-field-label">${FI.explain}الشرح</div><div class="tech-field-body tf-lead">${t.explanation}</div></div>
        <div class="tech-field"><div class="tech-field-label">${FI.meaning}What it means</div><div class="tech-field-body tf-definition">${t.meaning}</div></div>
        <div class="tech-field"><div class="tech-field-label">${FI.when}إمتى تستخدمها</div><div class="tech-field-body"><ul class="plain">${t.when.map(w=>`<li>${w}</li>`).join('')}</ul></div></div>
        <div class="tech-field"><div class="tech-field-label">${FI.example}مثال</div><div class="tech-field-body tf-example">${t.example}</div></div>
        <div class="tech-field"><div class="tech-field-label">${FI.why}ليه بتشتغل</div><div class="tech-field-body tf-why">${t.why}</div></div>
        <div class="tech-field">
          <div class="tech-field-label">${FI.search}Search examples <button class="copy-all-btn" data-copyall="examples" data-tech="${t.id}" title="انسخ كل الأمثلة">نسخ الكل</button></div>
          <div class="tech-field-body"><div class="tag-row">${t.searchExamples.map(s=>`<span class="tag" data-copy-text="${escAttr(s)}" title="اضغط للنسخ">${s}</span>`).join('')}</div></div>
        </div>
        <div class="tech-field">
          <div class="tech-field-label">${FI.tag}Search keywords <button class="copy-all-btn" data-copyall="keywords" data-tech="${t.id}" title="انسخ كل الكلمات">نسخ الكل</button></div>
          <div class="tech-field-body"><div class="tag-row">${t.searchKeywords.map(s=>`<span class="tag kw" data-copy-text="${escAttr(s)}" title="اضغط للنسخ">${s}</span>`).join('')}</div></div>
        </div>
        <div class="tech-field" style="margin-bottom:0"><div class="tech-field-label">${FI.notice}What to notice</div><div class="tech-field-body"><div class="notice-line">${t.notice}</div></div></div>
      </div>
    </div>
  </div>`;
}

function filteredTechniques(){
  const q = clState.techQuery.trim().toLowerCase();
  return CL_TECHNIQUES.filter(t=>{
    if(clState.techFamily!=='all' && t.family!==clState.techFamily) return false;
    if(!q) return true;
    const hay = [t.nameEn,t.nameAr,t.explanation,t.family,...t.searchKeywords,...t.searchExamples].join(' ').toLowerCase();
    return hay.includes(q);
  });
}

function renderTechniques(){
  let html = sectionHead('Section 9 · 15', 'Creative Techniques — أدوات التفكير الإبداعي');
  html += card('الفكرة', `<p>بعد ما تفهم المشكلة والـ Insight وتطلع Big Idea، بتختار التكنيك اللي هيوصل الفكرة. التكنيك مش الفكرة نفسها، هو الطريقة اللي هتقدم بيها الفكرة.</p>`);

  html += `<div class="tech-toolbar">
    <div class="tech-search-wrap">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input class="tech-search" id="techSearch" type="text" placeholder="دور على تكنيك... (اسم، كلمة، عائلة)" value="${clState.techQuery}"/>
    </div>
    <div class="tech-actions">
      <button id="techExpandAll">فتح الكل</button>
      <button id="techCollapseAll">قفل الكل</button>
      <button id="techClearSearch">مسح البحث</button>
    </div>
  </div>`;

  html += `<div class="family-filters" id="famFilters">
    <button class="fam-btn ${clState.techFamily==='all'?'active':''}" data-fam="all"><span class="fam-dot" style="background:var(--muted2)"></span>الكل (${CL_TECHNIQUES.length})</button>
    ${CL_FAMILIES.map(f=>{
      const c = CL_TECHNIQUES.filter(t=>t.family===f.key).length;
      return `<button class="fam-btn ${clState.techFamily===f.key?'active':''}" data-fam="${f.key}" style="--fam-dot:var(--fam-${f.key})"><span class="fam-dot"></span>${f.ar} (${c})</button>`;
    }).join('')}
  </div>`;

  const list = filteredTechniques();
  html += `<div class="tech-result-count">بيظهر ${list.length} من ${CL_TECHNIQUES.length} تكنيك</div>`;
  html += `<div class="tech-list" id="techList">`;
  if(list.length===0){
    html += `<div class="empty-state">لا يوجد تكنيك مطابق. جرب كلمة مختلفة.</div>`;
  } else {
    html += list.map(techniqueCardHTML).join('');
  }
  html += `</div>`;
  return html;
}

function renderCopywriting(){
  const d = CL_COPYWRITING;
  let html = sectionHead('Section 10 · 15', 'Copywriting — دور الكتابة في الفكرة');
  html += `<p class="cw-lead">${d.intro}</p>`;

  html += `<div class="cw-block-title">مصطلحات لازم تفرق بينها <span class="tag-mini en">Glossary</span></div>`;
  html += `<div class="cw-glossary">${d.definitions.map(x=>`<div class="cw-glossary-item"><div class="cw-glossary-term">${x.term}</div><div class="cw-glossary-def">${x.def}</div></div>`).join('')}</div>`;

  html += `<div class="cw-block-title">قواعد المحترف مقابل أخطاء المبتدئين <span class="tag-mini en">Do vs Don't</span></div>`;
  html += `<div class="cw-two-col">
    <div class="cw-col dos">
      <div class="cw-col-title">✓ افعل</div>
      ${d.proRules.map((r,i)=>`<div class="cw-rule-row"><span class="cw-rule-num">${i+1}</span><span>${r}</span></div>`).join('')}
    </div>
    <div class="cw-col donts">
      <div class="cw-col-title">✕ متعملش</div>
      ${d.commonMistakes.map((m,i)=>`<div class="cw-rule-row"><span class="cw-rule-num">${i+1}</span><span>${m}</span></div>`).join('')}
    </div>
  </div>`;

  html += `<div class="cw-block-title">مثال متكامل <span class="tag-mini en">Snickers</span></div>`;
  html += `<div class="cw-hero-example">
    <div class="cw-hero-label">Big Idea</div>
    <div class="cw-hero-bigidea en">${d.example.bigIdea}</div>
    <div class="cw-hero-headline">${d.example.headline}</div>
    <span class="cw-hero-cta en">${d.example.cta}</span>
  </div>`;
  html += `<div class="cw-pullquote">${d.rule}</div>`;

  html += `<div class="cw-block-title">الكوبي الجيد لازم يكون <span class="tag-mini en">Checklist</span></div>`;
  html += `<div class="tag-row">${d.qualities.map(q=>`<span class="tag">${q}</span>`).join('')}</div>`;

  html += `<div class="cw-block-title">أسئلة قبل ما تسلّم الكوبي <span class="tag-mini en">Final Check</span></div>`;
  html += `<div class="cw-static-list">${d.questions.map(q=>`<div class="item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><span>${q}</span></div>`).join('')}</div>`;

  html += `<div class="cw-block-title">أمثلة أكتر من حملات معروفة <span class="tag-mini en">${d.moreExamples.length} Case Studies</span></div>`;
  html += `<div class="cw-campaign-grid">
    ${d.moreExamples.map(x=>{
      const fam = CL_FAMILIES.find(f=>f.key===x.technique);
      return `<div class="cw-campaign-card">
        <div class="cw-campaign-top">
          <div class="cw-campaign-brand en">${x.brand}</div>
          <div class="cw-campaign-badges">
            <span class="cw-campaign-industry">${x.industry}</span>
            ${fam?`<span class="cw-campaign-technique">${fam.ar}</span>`:''}
          </div>
        </div>
        <div>
          <div class="cw-campaign-bigidea-en en">${x.bigIdeaEn}</div>
          <div class="cw-campaign-bigidea-ar">${x.bigIdeaAr}</div>
        </div>
        <div class="cw-campaign-divider"></div>
        <div>
          <div class="cw-campaign-section-label en">Headline</div>
          <div class="cw-campaign-headline-en en">${x.headlineEn}</div>
          <div class="cw-campaign-headline-ar">${x.headlineAr}</div>
        </div>
        <div>
          <div class="cw-campaign-section-label en">CTA</div>
          <div class="cw-campaign-cta-row">
            <span class="en">${x.ctaEn}</span>
            <span>${x.ctaAr}</span>
          </div>
        </div>
        <div class="cw-campaign-note">${x.note}</div>
      </div>`;
    }).join('')}
  </div>`;

  html += `<div class="cw-pullquote" style="border-color:var(--indigo); margin-top:26px;">${d.proTip}</div>`;
  return html;
}

function renderExecution(){
  const d = CL_EXECUTION;
  let html = sectionHead('Section 11 · 15', 'Execution — التنفيذ');
  html += card('الفكرة', `<p>${d.intro}</p>`);
  html += card('أشكال التنفيذ', chips(d.forms));
  html += `<div class="card"><div class="card-title"><span class="dot"></span>مثال</div>
    <div class="pair-box ins" style="margin-bottom:10px"><div class="pair-label">Big Idea</div>${d.example.bigIdea}</div>
    <ul class="plain">${d.example.executions.map((e,i)=>`<li>Execution ${i+1}: ${e}</li>`).join('')}</ul>
  </div>`;
  html += card('التنفيذ الناجح لازم', chips(d.requirements));
  html += noteBox(d.diff);
  return html;
}

function renderArtDirection(){
  const d = CL_ARTDIRECTION;
  let html = sectionHead('Section 12 · 15', 'Art Direction — التوجيه الفني');
  html += card('الفكرة', `<p>${d.intro}</p>`);
  d.categories.forEach(c=>{
    html += `<div class="card"><div class="card-title"><span class="dot"></span>${c.name}</div><div class="tag-row">${c.items.map(i=>`<span class="tag">${i}</span>`).join('')}</div></div>`;
  });
  html += `<div class="card"><div class="card-title"><span class="dot"></span>أمثلة تطبيقية</div>
    ${d.examples.map(e=>`<div class="pair-box obs" style="margin-bottom:8px"><div class="pair-label">لو الفكرة عن ${e.theme}</div>${e.items.join(' · ')}</div>`).join('')}
  </div>`;
  html += ruleBox(d.rule);
  html += clCtaBlock();
  return html;
}

function renderMediaContext(){
  const d = CL_MEDIACONTEXT;
  let html = sectionHead('Section 13 · 15', 'Media Context — أين ستعيش الفكرة؟');
  html += card('الفكرة', `<p>${d.intro}</p>`);
  d.channels.forEach(c=>{
    html += card(c.name, chips(c.points));
  });
  html += ruleBox(d.rule);
  return html;
}

function renderEvaluation(){
  let html = sectionHead('Section 14 · 15', 'Evaluation Checklist — تقييم الفكرة');
  html += `<div class="score-box">
    <div><div class="score-num" id="scoreNum">0 / ${CL_EVALUATION.length}</div><div class="score-label" id="scoreLabel">Needs stronger thinking</div></div>
    <button class="reset-btn" id="checklistReset">Reset checklist</button>
  </div>`;
  html += `<div class="checklist" id="clChecklist">
    ${CL_EVALUATION.map((q,i)=>`<label class="check-item"><input type="checkbox" data-idx="${i}" ${clState.checked.has(i)?'checked':''}/><span>${q}</span></label>`).join('')}
  </div>`;
  return html;
}

function renderFramework(){
  let html = sectionHead('Section 15 · 15', 'Final Framework — الخريطة النهائية لأي إعلان');
  html += card('استخدم السؤال ده كل مرة', '');
  html += `<div class="fw-list" id="fwList">
    ${CL_FRAMEWORK.map((f,i)=>`<div class="fw-item"><div class="fw-num">${i+1}</div><div><div class="en">${f.en}</div><div class="ar">${f.ar}</div></div></div>`).join('')}
  </div>`;
  html += `<div class="fw-actions"><button class="fw-btn" id="copyFramework">Copy Framework</button></div>`;
  html += `<div class="card"><div class="card-title"><span class="dot"></span>الخلاصة</div><p>${CL_FINAL_SUMMARY}</p></div>`;
  return html;
}

const CL_RENDERERS = {
  overview: renderOverview, brief: renderBrief, problem: renderProblem, observation: renderObservation,
  insight: renderInsight, truths: renderTruths, tension: renderTension, bigidea: renderBigIdea,
  techniques: renderTechniques, copywriting: renderCopywriting, execution: renderExecution,
  artdirection: renderArtDirection, mediacontext: renderMediaContext, evaluation: renderEvaluation, framework: renderFramework
};

// ============================================================
// APP SHELL: sidebar, mobile tabs, routing, pager
// ============================================================

function buildFlowRow(){
  document.getElementById('flowRow').innerHTML = CL_FLOW.map((f,i)=>
    `<span class="flow-chip">${f}</span>${i<CL_FLOW.length-1?'<span class="flow-arrow">←</span>':''}`
  ).join('');
}

function buildSidebar(){
  const el = document.getElementById('sidebar');
  el.innerHTML = CL_TABS.map(t=>`<button class="side-btn" data-tab="${t.id}"><span class="side-num">${t.num}</span>${t.title}</button>`).join('');
  el.querySelectorAll('.side-btn').forEach(b=>b.addEventListener('click', ()=>clGoTo(b.dataset.tab)));
}

function buildMobileTabs(){
  const el = document.getElementById('mobileTabs');
  el.innerHTML = CL_TABS.map(t=>`<button data-tab="${t.id}">${t.title}</button>`).join('');
  el.querySelectorAll('button').forEach(b=>b.addEventListener('click', ()=>{
    clGoTo(b.dataset.tab);
    document.querySelector('.content').scrollIntoView({behavior:'smooth', block:'start'});
  }));
}

function updateActiveNav(){
  document.querySelectorAll('.side-btn').forEach(b=>b.classList.toggle('active', b.dataset.tab===clState.tab));
  document.querySelectorAll('#mobileTabs button').forEach(b=>b.classList.toggle('active', b.dataset.tab===clState.tab));
  const t = CL_TABS.find(x=>x.id===clState.tab);
  document.getElementById('topProgress').textContent = `Section ${t.num} of ${CL_TABS.length} — ${t.en}`;
}

function renderPager(){
  const idx = CL_TABS.findIndex(t=>t.id===clState.tab);
  const prev = CL_TABS[idx-1], next = CL_TABS[idx+1];
  return `<div class="pager">
    <button id="pagerPrev" ${!prev?'disabled':''}>${prev?`→ ${prev.title}`:''}</button>
    <button id="pagerNext" ${!next?'disabled':''}>${next?`${next.title} ←`:''}</button>
  </div>`;
}

function clGoTo(tabId){
  clState.tab = tabId;
  location.hash = tabId;
  try{ sessionStorage.setItem('cl_last_tab', tabId); }catch(e){}
  renderContent();
  updateActiveNav();
}
window.clGoTo = clGoTo;

function renderContent(){
  const fn = CL_RENDERERS[clState.tab] || renderOverview;
  const el = document.getElementById('content');
  el.innerHTML = `<div class="panel active">${fn()}${renderPager()}</div>`;
  wireContentEvents();
}

// ---------- event wiring for the currently rendered tab ----------
function wireContentEvents(){
  // pager
  const prevBtn = document.getElementById('pagerPrev');
  const nextBtn = document.getElementById('pagerNext');
  if(prevBtn) prevBtn.addEventListener('click', ()=>{
    const idx = CL_TABS.findIndex(t=>t.id===clState.tab);
    if(idx>0) clGoTo(CL_TABS[idx-1].id);
  });
  if(nextBtn) nextBtn.addEventListener('click', ()=>{
    const idx = CL_TABS.findIndex(t=>t.id===clState.tab);
    if(idx<CL_TABS.length-1) clGoTo(CL_TABS[idx+1].id);
  });

  // truths mini-tabs
  const truthsTabs = document.getElementById('truthsTabs');
  if(truthsTabs){
    truthsTabs.querySelectorAll('.mini-tab-btn').forEach(b=>{
      b.addEventListener('click', ()=>{
        truthsTabs.querySelectorAll('.mini-tab-btn').forEach(x=>x.classList.remove('active'));
        b.classList.add('active');
        document.querySelectorAll('.mini-panel').forEach(p=>p.classList.toggle('active', p.dataset.mp===b.dataset.mt));
      });
    });
  }

  // techniques
  const updateTechCount = ()=>{
    const el = document.querySelector('.tech-result-count');
    if(el) el.textContent = `بيظهر ${filteredTechniques().length} من ${CL_TECHNIQUES.length} تكنيك`;
  };
  const techSearch = document.getElementById('techSearch');
  if(techSearch){
    techSearch.addEventListener('input', ()=>{
      clState.techQuery = techSearch.value;
      const list = document.getElementById('techList');
      const results = filteredTechniques();
      list.innerHTML = results.length ? results.map(techniqueCardHTML).join('') : `<div class="empty-state">لا يوجد تكنيك مطابق. جرب كلمة مختلفة.</div>`;
      updateTechCount();
      wireTechCards();
    });
  }
  const famFilters = document.getElementById('famFilters');
  if(famFilters){
    famFilters.querySelectorAll('.fam-btn').forEach(b=>{
      b.addEventListener('click', ()=>{
        clState.techFamily = b.dataset.fam;
        famFilters.querySelectorAll('.fam-btn').forEach(x=>x.classList.remove('active'));
        b.classList.add('active');
        const list = document.getElementById('techList');
        const results = filteredTechniques();
        list.innerHTML = results.length ? results.map(techniqueCardHTML).join('') : `<div class="empty-state">لا يوجد تكنيك مطابق. جرب كلمة مختلفة.</div>`;
        updateTechCount();
        wireTechCards();
      });
    });
  }
  const expandAll = document.getElementById('techExpandAll');
  if(expandAll) expandAll.addEventListener('click', ()=>{
    filteredTechniques().forEach(t=>clState.techExpanded.add(t.id));
    document.getElementById('techList').innerHTML = filteredTechniques().map(techniqueCardHTML).join('');
    wireTechCards();
  });
  const collapseAll = document.getElementById('techCollapseAll');
  if(collapseAll) collapseAll.addEventListener('click', ()=>{
    clState.techExpanded.clear();
    document.getElementById('techList').innerHTML = filteredTechniques().map(techniqueCardHTML).join('');
    wireTechCards();
  });
  const clearSearch = document.getElementById('techClearSearch');
  if(clearSearch) clearSearch.addEventListener('click', ()=>{
    clState.techQuery=''; clState.techFamily='all';
    renderContent();
  });
  wireTechCards();

  // evaluation checklist
  const checklist = document.getElementById('clChecklist');
  if(checklist){
    checklist.querySelectorAll('input[type=checkbox]').forEach(cb=>{
      cb.addEventListener('change', ()=>{
        const idx = parseInt(cb.dataset.idx,10);
        if(cb.checked) clState.checked.add(idx); else clState.checked.delete(idx);
        updateScore();
      });
    });
    updateScore();
    const resetBtn = document.getElementById('checklistReset');
    if(resetBtn) resetBtn.addEventListener('click', ()=>{
      clState.checked.clear();
      renderContent();
    });
  }

  // framework copy
  const copyFw = document.getElementById('copyFramework');
  if(copyFw) copyFw.addEventListener('click', ()=>{
    const text = CL_FRAMEWORK.map((f,i)=>`${i+1}. ${f.en} — ${f.ar}`).join('\n');
    clCopyText(text);
  });
}

function wireTechCards(){
  document.querySelectorAll('#techList .tech-head').forEach(head=>{
    head.addEventListener('click', ()=>{
      const id = head.dataset.toggle;
      const techCardEl = head.closest('.tech-card');
      if(clState.techExpanded.has(id)){ clState.techExpanded.delete(id); techCardEl.classList.remove('open'); }
      else { clState.techExpanded.add(id); techCardEl.classList.add('open'); }
    });
  });
  // click any single tag (search example or keyword) to copy just that phrase
  document.querySelectorAll('#techList .tag[data-copy-text]').forEach(tag=>{
    tag.addEventListener('click', (e)=>{
      e.stopPropagation();
      clCopyText(tag.dataset.copyText);
      tag.classList.add('copied');
      setTimeout(()=>tag.classList.remove('copied'), 1000);
    });
  });
  // copy-all button next to "Search examples" / "Search keywords" labels
  document.querySelectorAll('#techList .copy-all-btn').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      const t = CL_TECHNIQUES.find(x=>x.id===btn.dataset.tech);
      if(!t) return;
      const list = btn.dataset.copyall === 'examples' ? t.searchExamples : t.searchKeywords;
      clCopyText(list.join(', '));
      const orig = btn.textContent;
      btn.textContent = 'اتنسخ ✓';
      setTimeout(()=>{ btn.textContent = orig; }, 1200);
    });
  });
}

function updateScore(){
  const n = clState.checked.size;
  const total = CL_EVALUATION.length;
  document.getElementById('scoreNum').textContent = `${n} / ${total}`;
  let label = 'Needs stronger thinking';
  if(n>=13) label='Strong creative idea';
  else if(n>=7) label='Good direction';
  document.getElementById('scoreLabel').textContent = label;
}

function clCopyText(text){
  const toast = document.getElementById('toast');
  const show = ()=>{ toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'), 1600); };
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(show).catch(show);
  } else {
    const ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta); ta.select();
    try{ document.execCommand('copy'); }catch(e){}
    document.body.removeChild(ta);
    show();
  }
}

// ============================================================
// INIT
// ============================================================

function initCreativeLab(){
  buildFlowRow();
  buildSidebar();
  buildMobileTabs();

  let startTab = 'overview';
  const hash = location.hash.replace('#','');
  if(hash && CL_RENDERERS[hash]) startTab = hash;
  else {
    try{ const saved = sessionStorage.getItem('cl_last_tab'); if(saved && CL_RENDERERS[saved]) startTab = saved; }catch(e){}
  }
  clState.tab = startTab;
  renderContent();
  updateActiveNav();

  window.addEventListener('hashchange', ()=>{
    const h = location.hash.replace('#','');
    if(h && CL_RENDERERS[h] && h!==clState.tab){
      clState.tab = h;
      renderContent();
      updateActiveNav();
    }
  });
}

document.addEventListener('DOMContentLoaded', initCreativeLab);
