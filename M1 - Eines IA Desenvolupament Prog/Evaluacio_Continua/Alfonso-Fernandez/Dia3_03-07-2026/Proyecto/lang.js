(function () {
  var translations = {
    es: {
      'site-title': 'CIFOs de Cataluña',
      'site-subtitle': 'Centros de Formación Profesional para el empleo',
      'nav-que-son': '¿Qué son?',
      'nav-listado': 'Listado de CIFOs',
      'nav-datos': 'Datos clave',
      'sec1-title': '¿Qué son los CIFOs?',
      'sec1-p1': 'Los <strong>CIFOs</strong> (Centros de Innovación y Formación para el Empleo) son centros públicos del <em>Servicio Público de Empleo de Cataluña</em> que ofrecen formación profesional orientada al trabajo. Imparten cursos gratuitos para trabajadores en activo y personas en situación de desempleo, con el objetivo de mejorar la cualificación profesional y la empleabilidad.',
      'sec1-p2': 'Estos centros disponen de instalaciones modernas y equipamiento actualizado para impartir formación en sectores como la informática, la industria, la hostelería o la sanidad, entre otros.',
      'sec2-title': 'CIFOs en Cataluña',
      'sec2-p': 'Actualmente hay varios CIFOs repartidos por el territorio catalán. A continuación se muestran los principales:',
      'card-1-title': "CIFO Barcelona 'La Violeta'",
      'card-1-location': 'Barcelona',
      'card-1-desc': 'Referente en informática y comunicaciones. Programación, administración de servidores, seguridad y sistemas microinformáticos.',
      'card-2-title': "CIFO L'Hospitalet",
      'card-2-location': 'L\'Hospitalet de Llobregat',
      'card-2-desc': 'Especializado en artes gráficas, imagen y sonido. Diseño gráfico, multimedia, audiovisual y programación de apps.',
      'card-3-title': 'CIFO Sabadell',
      'card-3-location': 'Sabadell (Vallès Occidental)',
      'card-3-desc': 'Centro especializado en instalación y mantenimiento, logística, fabricación mecánica y electricidad-electrónica.',
      'card-4-title': 'CIFO Tarragona',
      'card-4-location': 'Tarragona',
      'card-4-desc': 'Referente en química, fabricación mecánica y seguridad y medio ambiente. Formación vinculada al sector químico e industrial.',
      'card-5-title': 'CIFO Lleida',
      'card-5-location': 'Lleida (Segrià)',
      'card-5-desc': 'Orientado a instalación y mantenimiento, fabricación mecánica, electricidad-electrónica y energía y agua. Sector agroalimentario.',
      'card-6-title': 'CIFO Salt',
      'card-6-location': 'Salt (Gironès)',
      'card-6-desc': 'Especializado en industrias alimentarias, química y fabricación mecánica. Sectores tradicionales y emergentes del territorio.',
      'card-7-title': 'CIFO Sant Feliu',
      'card-7-location': 'Sant Feliu de Llobregat',
      'card-7-desc': 'Centro de Referencia Nacional en fabricación mecánica. Mecanizado CNC, soldadura, automatización y robótica industrial.',
      'card-8-title': 'CIFO Santa Coloma',
      'card-8-location': 'Santa Coloma de Gramenet',
      'card-8-desc': 'Especializado en economía verde: agraria, seguridad y medio ambiente, energía y agua, instalaciones y electricidad-electrónica.',
      'sec3-title': 'Datos clave',
      'sec3-p': 'Algunos datos de interés sobre la red de CIFOs:',
      'dato-1': '<strong>Total CIFOs en Cataluña:</strong> ',
      'dato-2': '<strong>Provincias cubiertas:</strong> ',
      'dato-3': '<strong>Cursos anuales aprox.:</strong> ',
      'dato-4': '<strong>Alumnos formados/año:</strong> ',
      'dato-5': '<strong>Sectores principales:</strong> TIC, industria química, fabricación mecánica, artes gráficas',
      'filtro-todos': 'Todos',
      'filtro-tic': 'TIC',
      'filtro-graficas': 'Gráficas',
      'filtro-mecanica': 'Mecánica',
      'filtro-quimica': 'Química',
      'filtro-agro': 'Agroalimentario',
      'filtro-energia': 'Energía',
      'footer-text': 'Información sobre CIFOs de Cataluña — Propuesta educativa',
      'footer-note': 'Los datos mostrados son orientativos. Consulta la web oficial del SOC para más información.'
    },
    cat: {
      'site-title': 'CIFOs de Catalunya',
      'site-subtitle': 'Centres de Formació Professional per a l\'ocupació',
      'nav-que-son': 'Què són?',
      'nav-listado': 'Llistat de CIFOs',
      'nav-datos': 'Dades clau',
      'sec1-title': 'Què són els CIFOs?',
      'sec1-p1': 'Els <strong>CIFOs</strong> (Centres d\'Innovació i Formació per a l\'Ocupació) són centres públics del <em>Servei Públic d\'Ocupació de Catalunya</em> que ofereixen formació professional orientada al treball. Imparteixen cursos gratuïts per a treballadors en actiu i persones en situació d\'atur, amb l\'objectiu de millorar la qualificació professional i l\'ocupabilitat.',
      'sec1-p2': 'Aquests centres disposen d\'instal·lacions modernes i equipament actualitzat per impartir formació en sectors com la informàtica, la indústria, l\'hostaleria o la sanitat, entre d\'altres.',
      'sec2-title': 'CIFOs a Catalunya',
      'sec2-p': 'Actualment hi ha diversos CIFOs repartits pel territori català. A continuació es mostren els principals:',
      'card-1-title': "CIFO Barcelona 'La Violeta'",
      'card-1-location': 'Barcelona',
      'card-1-desc': 'Referent en informàtica i comunicacions. Programació, administració de servidors, seguretat i sistemes microinformàtics.',
      'card-2-title': "CIFO L'Hospitalet",
      'card-2-location': 'L\'Hospitalet de Llobregat',
      'card-2-desc': 'Especialitzat en arts gràfiques, imatge i so. Disseny gràfic, multimèdia, audiovisual i programació d\'apps.',
      'card-3-title': 'CIFO Sabadell',
      'card-3-location': 'Sabadell (Vallès Occidental)',
      'card-3-desc': 'Centre especialitzat en instal·lació i manteniment, logística, fabricació mecànica i electricitat-electrònica.',
      'card-4-title': 'CIFO Tarragona',
      'card-4-location': 'Tarragona',
      'card-4-desc': 'Referent en química, fabricació mecànica i seguretat i medi ambient. Formació vinculada al sector químic i industrial.',
      'card-5-title': 'CIFO Lleida',
      'card-5-location': 'Lleida (Segrià)',
      'card-5-desc': 'Orientat a instal·lació i manteniment, fabricació mecànica, electricitat-electrònica i energia i aigua. Sector agroalimentari.',
      'card-6-title': 'CIFO Salt',
      'card-6-location': 'Salt (Gironès)',
      'card-6-desc': 'Especialitzat en indústries alimentàries, química i fabricació mecànica. Sectors tradicionals i emergents del territori.',
      'card-7-title': 'CIFO Sant Feliu',
      'card-7-location': 'Sant Feliu de Llobregat',
      'card-7-desc': 'Centre de Referència Nacional en fabricació mecànica. Mecanitzat CNC, soldadura, automatització i robòtica industrial.',
      'card-8-title': 'CIFO Santa Coloma',
      'card-8-location': 'Santa Coloma de Gramenet',
      'card-8-desc': 'Especialitzat en economia verda: agrària, seguretat i medi ambient, energia i aigua, instal·lacions i electricitat-electrònica.',
      'sec3-title': 'Dades clau',
      'sec3-p': 'Algunes dades d\'interès sobre la xarxa de CIFOs:',
      'dato-1': '<strong>Total CIFOs a Catalunya:</strong> ',
      'dato-2': '<strong>Províncies cobertes:</strong> ',
      'dato-3': '<strong>Cursos anuals aprox.:</strong> ',
      'dato-4': '<strong>Alumnes formats/any:</strong> ',
      'dato-5': '<strong>Sectors principals:</strong> TIC, indústria química, fabricació mecànica, arts gràfiques',
      'filtro-todos': 'Tots',
      'filtro-tic': 'TIC',
      'filtro-graficas': 'Gràfiques',
      'filtro-mecanica': 'Mecànica',
      'filtro-quimica': 'Química',
      'filtro-agro': 'Agroalimentari',
      'filtro-energia': 'Energia',
      'footer-text': 'Informació sobre CIFOs de Catalunya — Proposta educativa',
      'footer-note': 'Les dades mostrades són orientatives. Consulta el web oficial del SOC per a més informació.'
    },
    en: {
      'site-title': 'CIFOs of Catalonia',
      'site-subtitle': 'Vocational Training Centers for employment',
      'nav-que-son': 'What are they?',
      'nav-listado': 'CIFO List',
      'nav-datos': 'Key Data',
      'sec1-title': 'What are CIFOs?',
      'sec1-p1': '<strong>CIFOs</strong> (Centers for Innovation and Training for Employment) are public centers of the <em>Public Employment Service of Catalonia</em> that offer job-oriented vocational training. They provide free courses for active workers and unemployed people, with the goal of improving professional qualifications and employability.',
      'sec1-p2': 'These centers have modern facilities and updated equipment to provide training in sectors such as IT, industry, hospitality, healthcare, and others.',
      'sec2-title': 'CIFOs in Catalonia',
      'sec2-p': 'There are currently several CIFOs distributed throughout Catalonia. Below are the main ones:',
      'card-1-title': "CIFO Barcelona 'La Violeta'",
      'card-1-location': 'Barcelona',
      'card-1-desc': 'Reference in IT and communications. Programming, server administration, security and microcomputer systems.',
      'card-2-title': "CIFO L'Hospitalet",
      'card-2-location': "L'Hospitalet de Llobregat",
      'card-2-desc': 'Specialized in graphic arts, image and sound. Graphic design, multimedia, audiovisual and app programming.',
      'card-3-title': 'CIFO Sabadell',
      'card-3-location': 'Sabadell (Vallès Occidental)',
      'card-3-desc': 'Center specialized in installation and maintenance, logistics, mechanical manufacturing and electrical-electronics.',
      'card-4-title': 'CIFO Tarragona',
      'card-4-location': 'Tarragona',
      'card-4-desc': 'Reference in chemistry, mechanical manufacturing and safety and environment. Training linked to the chemical and industrial sector.',
      'card-5-title': 'CIFO Lleida',
      'card-5-location': 'Lleida (Segrià)',
      'card-5-desc': 'Focused on installation and maintenance, mechanical manufacturing, electrical-electronics and energy and water. Agri-food sector.',
      'card-6-title': 'CIFO Salt',
      'card-6-location': 'Salt (Gironès)',
      'card-6-desc': 'Specialized in food industries, chemistry and mechanical manufacturing. Traditional and emerging sectors of the territory.',
      'card-7-title': 'CIFO Sant Feliu',
      'card-7-location': 'Sant Feliu de Llobregat',
      'card-7-desc': 'National Reference Center in mechanical manufacturing. CNC machining, welding, automation and industrial robotics.',
      'card-8-title': 'CIFO Santa Coloma',
      'card-8-location': 'Santa Coloma de Gramenet',
      'card-8-desc': 'Specialized in green economy: agriculture, safety and environment, energy and water, installations and electrical-electronics.',
      'sec3-title': 'Key Data',
      'sec3-p': 'Some interesting data about the CIFO network:',
      'dato-1': '<strong>Total CIFOs in Catalonia:</strong> ',
      'dato-2': '<strong>Covered provinces:</strong> ',
      'dato-3': '<strong>Annual courses approx.:</strong> ',
      'dato-4': '<strong>Trained students/year:</strong> ',
      'dato-5': '<strong>Main sectors:</strong> IT, chemical industry, mechanical manufacturing, graphic arts',
      'filtro-todos': 'All',
      'filtro-tic': 'IT',
      'filtro-graficas': 'Graphics',
      'filtro-mecanica': 'Mechanics',
      'filtro-quimica': 'Chemistry',
      'filtro-agro': 'Agri-food',
      'filtro-energia': 'Energy',
      'footer-text': 'Information about CIFOs of Catalonia — Educational proposal',
      'footer-note': 'The data shown is approximate. Check the official SOC website for more information.'
    }
  };

  function animarContadores() {
    var items = document.querySelectorAll('[data-numero]');
    for (var i = 0; i < items.length; i++) {
      var raw = items[i].getAttribute('data-numero');
      var prefijo = '';
      var target = parseInt(raw, 10);
      if (isNaN(target) && raw.charAt(0) === '+') {
        prefijo = '+';
        target = parseInt(raw.slice(1), 10);
      }
      if (isNaN(target)) continue;
      var span = document.createElement('span');
      span.className = 'contar';
      span.textContent = '0';
      items[i].appendChild(span);
      (function (el, fin, pref) {
        var inicio = 0;
        var duracion = 1500;
        var inicioTiempo = null;
        function paso(tiempo) {
          if (!inicioTiempo) inicioTiempo = tiempo;
          var progreso = Math.min((tiempo - inicioTiempo) / duracion, 1);
          var actual = Math.floor(progreso * fin);
          el.textContent = pref + actual;
          if (progreso < 1) {
            requestAnimationFrame(paso);
          } else {
            el.textContent = pref + fin;
          }
        }
        requestAnimationFrame(paso);
      })(span, target, prefijo);
    }
  }

  function setLanguage(lang) {
    var t = translations[lang];
    if (!t) return;
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n');
      if (t[key] !== undefined) {
        els[i].innerHTML = t[key];
      }
    }
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      if (isActive) {
        btn.classList.add('lang-btn--active');
      } else {
        btn.classList.remove('lang-btn--active');
      }
    });
    document.documentElement.setAttribute('lang', lang);
    try {
      localStorage.setItem('lang', lang);
    } catch (_) {}
    animarContadores();
  }

  var savedLang;
  try {
    savedLang = localStorage.getItem('lang');
  } catch (_) {}
  var defaultLang = savedLang || 'es';
  setLanguage(defaultLang);

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.lang-btn');
    if (btn) {
      setLanguage(btn.getAttribute('data-lang'));
    }
  });
})();
