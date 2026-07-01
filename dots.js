// ===== Zawya — Dots Background =====
(function () {
  // Skip on very low-end devices
  if (navigator.hardwareConcurrency <= 2 && /Mobi/i.test(navigator.userAgent)) return;

  /* ── CONFIG ─────────────────────────────────────────────── */
  var C = {
    spacing:     28,
    baseR:       1.1,
    ir:          85,             // smaller radius = tighter, less overwhelming
    opMin:       0.10,
    opMax:       0.18,
    opBoost:     0.40,           // subtle boost on hover
    rBoost:      1.6,
    dot:         [45, 212, 191],   // teal — matches UI accent
  };
  C.irSq   = C.ir * C.ir;
  C.cell   = Math.ceil(C.ir / 1.5);
  /* ────────────────────────────────────────────────────────── */

  /* ── Canvas ─────────────────────────────────────────────── */
  var cv = document.createElement('canvas');
  cv.id  = 'zawya-dots';
  cv.style.cssText = [
    'position:fixed', 'inset:0', 'z-index:1',
    'pointer-events:none', 'opacity:0',
    'transition:opacity .7s ease'
  ].join(';');
  document.body.insertBefore(cv, document.body.firstChild);
  var ctx = cv.getContext('2d');

  var dots = [], grid = {};
  var W = 0, H = 0;
  var mX = null, mY = null;

  /* ── Build dot grid ─────────────────────────────────────── */
  function build() {
    dots = []; grid = {};
    var s = C.spacing, cell = C.cell;
    for (var i = 0; i * s < W + s; i++) {
      for (var j = 0; j * s < H + s; j++) {
        var x = i * s + s / 2, y = j * s + s / 2;
        var k = (Math.floor(x / cell)) + '_' + (Math.floor(y / cell));
        if (!grid[k]) grid[k] = [];
        var op = Math.random() * (C.opMax - C.opMin) + C.opMin;
        grid[k].push(dots.length);
        dots.push({
          x: x, y: y, op: op,
          spd: (Math.random() * 0.004 + 0.001) * (Math.random() < .5 ? 1 : -1)
        });
      }
    }
  }

  function resize() {
    W = window.innerWidth; H = window.innerHeight;
    cv.width = W; cv.height = H;
    build();
  }

  /* ── Animation ──────────────────────────────────────────── */
  function frame() {
    ctx.clearRect(0, 0, W, H);
    var r = C.dot[0], g = C.dot[1], b = C.dot[2];
    var near = new Set();

    if (mX !== null) {
      var cx = Math.floor(mX / C.cell), cy = Math.floor(mY / C.cell);
      var sr = Math.ceil(C.ir / C.cell);
      for (var i = -sr; i <= sr; i++)
        for (var j = -sr; j <= sr; j++) {
          var k = (cx + i) + '_' + (cy + j);
          if (grid[k]) grid[k].forEach(function(n) { near.add(n); });
        }
    }

    dots.forEach(function(d, idx) {
      d.op += d.spd;
      if (d.op > C.opMax || d.op < C.opMin) {
        d.spd = -d.spd;
        d.op = Math.max(C.opMin, Math.min(d.op, C.opMax));
      }
      var factor = 0;
      if (mX !== null && near.has(idx)) {
        var dx = d.x - mX, dy = d.y - mY;
        var dSq = dx * dx + dy * dy;
        if (dSq < C.irSq)
          factor = Math.pow(1 - Math.sqrt(dSq) / C.ir, 2);
      }
      var op  = Math.min(1, d.op + factor * C.opBoost);
      var rad = C.baseR + factor * C.rBoost;
      ctx.beginPath();
      ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + op.toFixed(3) + ')';
      ctx.arc(d.x, d.y, rad, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(frame);
  }

  /* ── Visibility (all pages — lower opacity on content pages) ── */
  function checkVis() {
    var lp = document.getElementById('pageLanding');
    var sp = document.getElementById('pageStory');
    var pages = document.getElementById('pages');
    if (!pages) { cv.style.opacity = '0'; return; }
    // Check if any page is active
    var anyActive = pages.querySelector('.page.active');
    if (!anyActive) { cv.style.opacity = '0'; return; }
    var isHero = (lp && lp.classList.contains('active')) ||
                 (sp && sp.classList.contains('active'));
    cv.style.opacity = isHero ? '0.78' : '0.35';
  }

  /* ── Bento SVG placeholders ─────────────────────────────── */
  function makeSVG(label, w, h) {
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '">' +
      '<rect width="100%" height="100%" fill="#0D0B08"/>' +
      '<rect x="0.5" y="0.5" width="' + (w-1) + '" height="' + (h-1) + '"' +
      ' fill="none" stroke="rgba(45,212,191,0.14)" stroke-width="1"/>' +
      '<text x="50%" y="44%" dominant-baseline="middle" text-anchor="middle"' +
      ' fill="rgba(45,212,191,0.28)" font-family="monospace" font-size="12" font-weight="600">' +
      label + '</text>' +
      '<text x="50%" y="61%" dominant-baseline="middle" text-anchor="middle"' +
      ' fill="rgba(255,240,210,0.12)" font-family="monospace" font-size="9">' +
      'images/gallery/' + label + '</text>' +
      '</svg>';
    return 'data:image/svg+xml,' + encodeURIComponent(svg);
  }

  function enhanceBento() {
    var bg = document.getElementById('bentoGrid');
    if (!bg || bg.dataset.ph) return;
    var cards = bg.querySelectorAll('.bento-card');
    if (!cards.length) return;
    bg.dataset.ph = '1';

    var li = 0, wi = 0, si = 0;
    cards.forEach(function(card) {
      var img = card.querySelector('img');
      if (!img) return;

      var label;
      if      (card.classList.contains('bento-large')) label = 'large-0' + (++li) + '.jpg';
      else if (card.classList.contains('bento-wide'))  label = 'wide-'  + String(++wi).padStart(2,'0') + '.jpg';
      else                                             label = 'small-' + String(++si).padStart(2,'0') + '.jpg';

      card.setAttribute('data-slot', label);

      // Show labeled SVG only when image fails to load
      img.onerror = (function(lbl, c, im) {
        return function() {
          im.onerror = null;
          var w = c.offsetWidth  || 400;
          var h = c.offsetHeight || 220;
          im.src = makeSVG(lbl, w, h);
        };
      })(label, card, img);
    });
  }

  /* ── Rotating Text ──────────────────────────────────────── */
  function initRotText() {
    var el = document.getElementById('rotWord');
    if (!el) return;

    var words = [
      'Cinematic Shot',
      'Perfect Prompt',
      'Studio Light',
      'Product Shot',
      'Pro Visual',
    ];
    var idx = 0;

    function splitWord(word) {
      if (typeof Intl !== 'undefined' && Intl.Segmenter) {
        try {
          var seg = new Intl.Segmenter('ar', { granularity: 'grapheme' });
          return Array.from(seg.segment(word), function(s){ return s.segment; });
        } catch(e) {}
      }
      return word.split('');
    }

    function render(word, enter) {
      var chars = splitWord(word);
      var total = chars.length;
      el.innerHTML = '';
      chars.forEach(function(ch, i) {
        var s = document.createElement('span');
        s.className = 'rot-c';
        s.textContent = (ch === ' ') ? '\u00A0' : ch;
        var delay = enter
          ? (total - 1 - i) * 28   // stagger from last on enter
          : i * 22;                 // stagger from first on exit
        var anim = enter
          ? 'rotIn .42s cubic-bezier(0.22,1,0.36,1) ' + delay + 'ms both'
          : 'rotOut .3s cubic-bezier(0.55,0,0.8,0) '  + delay + 'ms both';
        s.style.animation = anim;
        el.appendChild(s);
      });
    }

    function next() {
      render(words[idx], false);                 // exit current
      setTimeout(function() {
        idx = (idx + 1) % words.length;
        render(words[idx], true);                // enter next
      }, 360);
    }

    render(words[0], true);
    setInterval(next, 2700);
  }

  /* ── Events ─────────────────────────────────────────────── */
  window.addEventListener('resize',    resize,  { passive: true });
  window.addEventListener('mousemove', function(e) { mX = e.clientX; mY = e.clientY; }, { passive: true });
  document.addEventListener('mouseleave', function() { mX = mY = null; });

  var pagesEl = document.getElementById('pages');
  if (pagesEl) new MutationObserver(checkVis).observe(pagesEl, { subtree: true, attributeFilter: ['class'] });

  var bentoEl = document.getElementById('bentoGrid');
  if (bentoEl) new MutationObserver(enhanceBento).observe(bentoEl, { childList: true });
  setTimeout(enhanceBento, 300);

  /* ── Rotating Demo ──────────────────────────────────────── */
  function initRotatingDemo() {
    var chipsEl  = document.getElementById('demoChips');
    var outputEl = document.getElementById('demoOutput');
    var progressEl = document.getElementById('demoProgress');
    if (!chipsEl || !outputEl) return;

    var sets = [
      {
        chips:  ['Dutch Angle', 'Golden Hour', '35mm Lens', 'Bokeh', 'Cinematic Grade'],
        output: 'Dutch angle shot, golden hour lighting, 35mm lens, shallow depth of field, bokeh background, cinematic color grade, warm film tones'
      },
      {
        chips:  ["Bird's Eye View", 'Studio Light', 'Clean BG', 'Close-Up', 'Sharp Focus'],
        output: "Bird's eye view, clean studio lighting, white background, extreme close-up, ultra sharp focus, commercial product photography"
      },
      {
        chips:  ['Low Angle', 'Blue Hour', '85mm Lens', 'Film Grain', 'Anamorphic'],
        output: 'Low angle portrait shot, blue hour atmosphere, 85mm lens compression, film grain texture, anamorphic lens flare, moody cinematic mood'
      },
      {
        chips:  ['Aerial Shot', 'Magic Hour', 'Wide Angle', 'Epic Scale', 'Color Grade'],
        output: 'Aerial establishing shot, magic hour golden light, ultra-wide angle lens, epic cinematic scale, sweeping landscape, drone cinematography, rich color grade'
      },
    ];

    var idx = 0;

    // Build progress dots
    if (progressEl) {
      sets.forEach(function(_, i) {
        var d = document.createElement('span');
        d.className = 'demo-dot' + (i === 0 ? ' active' : '');
        d.dataset.i = i;
        progressEl.appendChild(d);
      });
    }

    function updateDots(i) {
      if (!progressEl) return;
      progressEl.querySelectorAll('.demo-dot').forEach(function(d) {
        d.classList.toggle('active', +d.dataset.i === i);
      });
    }

    function renderSet(set, entering) {
      // Chips
      chipsEl.innerHTML = '';
      set.chips.forEach(function(chip, i) {
        var s = document.createElement('span');
        s.className = 'demo-chip demo-chip--amber';
        s.textContent = chip;
        s.style.animation = entering
          ? 'rotIn .38s cubic-bezier(0.22,1,0.36,1) ' + (i * 55) + 'ms both'
          : 'rotOut .25s ease ' + (i * 35) + 'ms both';
        chipsEl.appendChild(s);
      });
      // Output
      if (entering) {
        outputEl.style.opacity = '0';
        setTimeout(function() {
          outputEl.textContent = set.output;
          outputEl.style.transition = 'opacity .45s ease';
          outputEl.style.opacity = '1';
        }, 280);
      } else {
        outputEl.style.transition = 'opacity .2s ease';
        outputEl.style.opacity = '0';
      }
    }

    function rotate() {
      renderSet(sets[idx], false);
      setTimeout(function() {
        idx = (idx + 1) % sets.length;
        updateDots(idx);
        renderSet(sets[idx], true);
      }, 420);
    }

    renderSet(sets[0], true);
    updateDots(0);
    setInterval(rotate, 3800);
  }

  /* ── Start ──────────────────────────────────────────────── */
  resize();
  frame();
  checkVis();
  initRotText();
  initRotatingDemo();

})();
