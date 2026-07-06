(function () {
  'use strict';

  var fillEl = document.getElementById('thermo-fill');
  var bulbEl = document.getElementById('thermo-bulb');
  var arrowEl = document.querySelector('.ts-arr');
  var labelEl = document.querySelector('.thermo-ctx .thermo-label');
  var sections = document.querySelectorAll('.climate-section[data-importancia]');

  if (!fillEl || !bulbEl || !labelEl || sections.length === 0) return;

  document.body.classList.add('js-thermo-active');

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var levelConfig = [
    { pct: 20, bg: 'linear-gradient(180deg,#81ecec,#00cec9)', bulb: 'linear-gradient(135deg,#81ecec,#00cec9)', shadow: '0 0 10px rgba(0,206,201,0.1)' },
    { pct: 35, bg: 'linear-gradient(180deg,#74b9ff,#0984e3)', bulb: 'linear-gradient(135deg,#74b9ff,#0984e3)', shadow: '0 0 14px rgba(9,132,227,0.15)' },
    { pct: 50, bg: 'linear-gradient(180deg,#55efc4,#00b894)', bulb: 'linear-gradient(135deg,#55efc4,#00b894)', shadow: '0 0 18px rgba(0,184,148,0.2)' },
    { pct: 65, bg: 'linear-gradient(180deg,#f9ca24,#f0932b)', bulb: 'linear-gradient(135deg,#f9ca24,#f0932b)', shadow: '0 0 24px rgba(249,202,36,0.25)' },
    { pct: 80, bg: 'linear-gradient(180deg,#e17055,#d63031)', bulb: 'linear-gradient(135deg,#e17055,#d63031)', shadow: '0 0 40px rgba(225,112,85,0.4)' },
    { pct:100, bg: 'linear-gradient(180deg,#ff6b6b,#b71c1c)', bulb: 'linear-gradient(135deg,#ff6b6b,#b71c1c)', shadow: '0 0 50px rgba(255,107,107,0.5)' }
  ];

  var currentLevel = -1;
  var animId = null;

  function clampLevel(n) {
    var num = parseInt(n, 10);
    if (isNaN(num)) return 0;
    if (num < 0) return 0;
    if (num > levelConfig.length - 1) return levelConfig.length - 1;
    return num;
  }

  function setThermoImmediate(level) {
    var cfg = levelConfig[level];
    fillEl.style.height = cfg.pct + '%';
    fillEl.style.background = cfg.bg;
    fillEl.style.boxShadow = cfg.shadow;
    bulbEl.style.background = cfg.bulb;
    bulbEl.style.boxShadow = cfg.shadow;
    if (arrowEl) arrowEl.style.top = (100 - cfg.pct) + '%';
  }

  function animateToLevel(level) {
    if (level === currentLevel) return;
    var fromLevel = currentLevel >= 0 ? currentLevel : 0;
    currentLevel = level;
    if (animId) cancelAnimationFrame(animId);

    var fromPct = parseFloat(fillEl.style.height) || 20;
    var toPct = levelConfig[level].pct;
    var start = performance.now();
    var duration = prefersReduced ? 0 : 420;

    function step(now) {
      var t = duration === 0 ? 1 : Math.min(1, (now - start) / duration);
      var ease = 1 - Math.pow(1 - t, 3);
      var val = fromPct + (toPct - fromPct) * ease;
      fillEl.style.height = val + '%';
      if (t >= 1 || fromLevel === level) {
        fillEl.style.background = levelConfig[level].bg;
        fillEl.style.boxShadow = levelConfig[level].shadow;
        bulbEl.style.background = levelConfig[level].bulb;
        bulbEl.style.boxShadow = levelConfig[level].shadow;
      }
      if (arrowEl) arrowEl.style.top = (100 - val) + '%';
      if (t < 1) animId = requestAnimationFrame(step);
    }
    animId = requestAnimationFrame(step);
  }

  function updateLabelForSection(section) {
    var h = section.querySelector('h2');
    var txt = h ? h.textContent.trim() : (section.getAttribute('id') || 'Temperatura');
    labelEl.textContent = txt;
  }

  var observer = new IntersectionObserver(function (entries) {
    var best = null;
    var bestRatio = 0;
    for (var i = 0; i < entries.length; i++) {
      var e = entries[i];
      if (e.intersectionRatio > bestRatio) { bestRatio = e.intersectionRatio; best = e.target; }
    }
    if (!best) return;
    var raw = best.getAttribute('data-importancia');
    var lvl = clampLevel(raw);
    updateLabelForSection(best);
    animateToLevel(lvl);
  }, { threshold: [0.1,0.25,0.5,0.75,1] });

  sections.forEach(function (s) { observer.observe(s); });

  // initial
  (function init() {
    // try to set based on the section mostly in view
    var midX = window.innerWidth / 2;
    var midY = window.innerHeight / 2;
    var list = typeof document.elementsFromPoint === 'function' ? document.elementsFromPoint(midX, midY) : [];
    var sec = Array.prototype.find.call(list, function (el) { return el.classList && el.classList.contains('climate-section'); });
    if (!sec) sec = sections[0];
    var lvl = clampLevel(sec.getAttribute('data-importancia'));
    updateLabelForSection(sec);
    if (prefersReduced) setThermoImmediate(lvl); else animateToLevel(lvl);
  })();

  window.addEventListener('beforeunload', function () { observer.disconnect(); if (animId) cancelAnimationFrame(animId); });

})();
