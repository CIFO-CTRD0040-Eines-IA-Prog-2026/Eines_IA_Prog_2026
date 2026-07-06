(function () {
  var bar = document.getElementById('progress-bar');
  var btnArriba = document.getElementById('btn-arriba');
  if (bar) {
    function updateProgress() {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollHeight > 0) {
        bar.style.width = (scrollTop / scrollHeight * 100) + '%';
      }
      if (btnArriba) {
        if (scrollTop > 300) {
          btnArriba.classList.add('btn-arriba--visible');
        } else {
          btnArriba.classList.remove('btn-arriba--visible');
        }
      }
    }
    window.addEventListener('scroll', updateProgress);
    updateProgress();
  }
  if (btnArriba) {
    btnArriba.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  var revealEls = document.querySelectorAll('.seccion, .filtros, .tarjeta, .datos-clave, .footer');
  for (var r = 0; r < revealEls.length; r++) {
    revealEls[r].classList.add('reveal');
  }
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      for (var e = 0; e < entries.length; e++) {
        if (entries[e].isIntersecting) {
          entries[e].target.classList.add('reveal--visible');
          observer.unobserve(entries[e].target);
        }
      }
    }, { threshold: 0.1 });
    for (var r = 0; r < revealEls.length; r++) {
      observer.observe(revealEls[r]);
    }
  } else {
    for (var r = 0; r < revealEls.length; r++) {
      revealEls[r].classList.add('reveal--visible');
    }
  }

  var filtros = document.querySelectorAll('.filtro-btn');
  if (filtros.length) {
    function filtrar(sector) {
      var cards = document.querySelectorAll('.tarjeta');
      for (var i = 0; i < cards.length; i++) {
        if (sector === 'todos' || cards[i].getAttribute('data-sector') === sector) {
          cards[i].style.display = '';
        } else {
          cards[i].style.display = 'none';
        }
      }
      for (var j = 0; j < filtros.length; j++) {
        var isActive = filtros[j].getAttribute('data-sector') === sector;
        if (isActive) {
          filtros[j].classList.add('filtro-btn--active');
        } else {
          filtros[j].classList.remove('filtro-btn--active');
        }
      }
    }
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.filtro-btn');
      if (btn) {
        filtrar(btn.getAttribute('data-sector'));
      }
    });
  }

  var btn = document.getElementById('toggle-modo');
  if (!btn) return;

  var html = document.documentElement;

  function setModo(claro) {
    if (claro) {
      html.classList.add('modo-claro');
      btn.innerHTML = '&#9790;';
    } else {
      html.classList.remove('modo-claro');
      btn.innerHTML = '&#9728;';
    }
    try {
      localStorage.setItem('modo-claro', claro ? 'true' : '');
    } catch (_) {}
  }

  var guardado;
  try {
    guardado = localStorage.getItem('modo-claro') === 'true';
  } catch (_) {
    guardado = false;
  }
  setModo(guardado);

  btn.addEventListener('click', function () {
    setModo(!html.classList.contains('modo-claro'));
  });
})();
