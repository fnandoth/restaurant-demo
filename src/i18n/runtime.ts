const LANG_KEY = 'gcs_lang';

export type Lang = 'es' | 'en';

export const T: Record<string, { es: string; en: string }> = {
  'nav.inicio':       { es: 'Inicio',        en: 'Home' },
  'nav.carta':        { es: 'Carta',         en: 'Menu' },
  'nav.reservas':     { es: 'Reservas',      en: 'Reservations' },
  'nav.contacto':     { es: 'Contacto',      en: 'Contact' },
  'nav.reservarCta':  { es: 'Reservar mesa', en: 'Book a table' },
  'nav.menuLabel':    { es: 'Menú',          en: 'Menu' },

  'footer.tagline':      { es: 'Sabores del norte, alma madrileña.',            en: 'Flavours of the north, Madrid soul.' },
  'footer.contactTitle': { es: 'Contacto',                                      en: 'Contact' },
  'footer.hours':        { es: 'Lun–Vie 08:00–01:00 / Sáb–Dom 09:00–01:00',   en: 'Mon–Fri 08:00–01:00 / Sat–Sun 09:00–01:00' },
  'footer.joinTitle':    { es: 'Trabaja con nosotros',                          en: 'Work with us' },
  'footer.joinLink':     { es: 'Enviar candidatura',                            en: 'Send application' },
  'footer.legalTitle':   { es: 'Legal',                                         en: 'Legal' },
  'footer.avisoLegal':   { es: 'Aviso Legal',                                   en: 'Legal Notice' },
  'footer.privacidad':   { es: 'Política de Privacidad',                        en: 'Privacy Policy' },
  'footer.cookies':      { es: 'Política de Cookies',                           en: 'Cookie Policy' },
  'footer.rights':       { es: 'Todos los derechos reservados.',                en: 'All rights reserved.' },

  'cookie.title':           { es: 'Preferencias de cookies',  en: 'Cookie preferences' },
  'cookie.description':     { es: 'Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y personalizar contenidos. Puedes aceptar todas, rechazarlas o configurar tus preferencias. Más información en nuestra', en: 'We use our own and third-party cookies to improve your experience, analyse traffic, and personalise content. You can accept all, reject them, or set your preferences. More info in our' },
  'cookie.policyLink':      { es: 'Política de Cookies',      en: 'Cookie Policy' },
  'cookie.accept':          { es: 'Aceptar todas',            en: 'Accept all' },
  'cookie.reject':          { es: 'Rechazar',                 en: 'Reject' },
  'cookie.configure':       { es: 'Configurar',               en: 'Manage' },
  'cookie.savePrefs':       { es: 'Guardar preferencias',     en: 'Save preferences' },
  'cookie.essential':       { es: 'Cookies técnicas / esenciales', en: 'Technical / essential cookies' },
  'cookie.essentialNote':   { es: 'Necesarias para el funcionamiento del sitio.', en: 'Required for the site to work.' },
  'cookie.analytics':       { es: 'Cookies analíticas',       en: 'Analytics cookies' },
  'cookie.analyticsNote':   { es: 'Google Analytics (_ga, _gat, _gid).', en: 'Google Analytics (_ga, _gat, _gid).' },
  'cookie.preferences':     { es: 'Cookies de preferencias',  en: 'Preference cookies' },
  'cookie.preferencesNote': { es: 'Recuerdan tus ajustes de navegación.', en: 'Remember your browsing settings.' },

  'index.heroBadge':       { es: 'Desde 1967 · Madrid',   en: 'Since 1967 · Madrid' },
  'index.heroSubtitle':    { es: 'Cocina cántabra con alma madrileña, sabores del norte en un salón que invita a quedarse.', en: 'Cantabrian cuisine with a Madrid soul — northern flavours in a room that invites you to stay.' },
  'index.heroCarta':       { es: 'Ver la carta',           en: 'View the menu' },
  'index.heroReserva':     { es: 'Reservar mesa',          en: 'Book a table' },
  'index.conceptoEyebrow': { es: 'Nuestra historia',       en: 'Our story' },
  'index.conceptoTitle':   { es: 'El sabor de Cantabria en el corazón de Madrid', en: 'The taste of Cantabria in the heart of Madrid' },
  'index.conceptoP1':      { es: 'Gran Café Santander ocupa un lugar con más de medio siglo de historia en la ciudad. Heredero de la emblemática Cafetería Santander, abierta en 1967, conserva el espíritu acogedor que convirtió este espacio en un punto de encuentro para generaciones de madrileños.', en: 'Gran Café Santander has occupied its place in the city for more than half a century. Heir to the iconic Cafetería Santander, opened in 1967, it preserves the welcoming spirit that turned this space into a meeting point for generations of Madrileños.' },
  'index.conceptoP2':      { es: 'Nuestra cocina apuesta por el producto de calidad, las recetas honestas y los sabores que han definido la gastronomía cántabra, todo ello en un ambiente cálido y contemporáneo.', en: 'Our kitchen champions quality produce, honest recipes, and the flavours that define Cantabrian gastronomy — all within a warm, contemporary setting.' },
  'index.conceptoP3':      { es: 'Un lugar para desayunar, compartir una comida especial o disfrutar de los pequeños rituales de cada día.', en: 'A place to have breakfast, share a special meal, or enjoy the small rituals of every day.' },
  'index.recomEyebrow':    { es: 'Recomendados',           en: 'Highlights' },
  'index.recomTitle':      { es: 'Una selección de nuestra carta', en: 'A selection from our menu' },
  'index.recomSubtitle':   { es: 'Cocina tradicional cantabresa con producto de temporada', en: 'Traditional Cantabrian cuisine with seasonal produce' },
  'index.recomVerCarta':   { es: 'Ver carta completa',     en: 'View full menu' },
  'index.horarioTitle':    { es: 'Horario',                en: 'Hours' },
  'index.horarioLocal':    { es: 'Local',                  en: 'Venue' },
  'index.horarioLocalP1':  { es: 'Lun-Vie 08:00-01:00',   en: 'Mon–Fri 08:00–01:00' },
  'index.horarioLocalP2':  { es: 'Sáb, Dom y Festivo 09:00-01:00', en: 'Sat, Sun & Holidays 09:00–01:00' },
  'index.horarioCocina':   { es: 'Cocina',                 en: 'Kitchen' },
  'index.horarioCocinaP1': { es: 'Lun-Jue 13:00-16:00 / 20:00-23:00', en: 'Mon–Thu 13:00–16:00 / 20:00–23:00' },
  'index.horarioCocinaP2': { es: 'Vie-Sáb 13:00-16:30 / 20:00-23:30', en: 'Fri–Sat 13:00–16:30 / 20:00–23:30' },
  'index.horarioCocinaP3': { es: 'Dom 13:00-16:30 / 20:00-23:00', en: 'Sun 13:00–16:30 / 20:00–23:00' },
  'index.ubicacionTitle':  { es: 'Ubicación',              en: 'Location' },
  'index.ubicacionCta':    { es: 'Cómo llegar',            en: 'Get directions' },
  'index.ctaTitle':        { es: '¿Tienes una ocasión especial?', en: 'Have a special occasion?' },
  'index.ctaSubtitle':     { es: 'Reserva tu mesa y deja que nuestro equipo prepare una experiencia a la altura de tu celebración.', en: 'Book your table and let our team craft an experience worthy of your celebration.' },
  'index.ctaButton':       { es: 'Reservar mesa',          en: 'Book a table' },

  'carta.heroTitle':        { es: 'Nuestra Carta',          en: 'Our Menu' },
  'carta.heroSubtitle':     { es: 'Cocina tradicional con producto de temporada', en: 'Traditional cuisine with seasonal produce' },
  'carta.tabCarta':         { es: 'Carta Principal',        en: 'Main Menu' },
  'carta.tabDesayunos':     { es: 'Desayunos & Meriendas', en: 'Breakfast & Snacks' },
  'carta.sidebarCarta':     { es: 'Carta principal',        en: 'Main menu' },
  'carta.sidebarDesayunos': { es: 'Desayunos',              en: 'Breakfast' },
  'carta.desayunoNote':     { es: 'Café o infusión incluido con su acompañamiento a elegir', en: 'Coffee or infusion included with your choice of accompaniment' },
  'carta.allergenNote':     { es: 'Información sobre alérgenos disponible bajo petición al personal del restaurante. Algunos platos pueden modificarse para adaptarse a necesidades dietéticas específicas.', en: 'Allergen information is available on request from restaurant staff. Some dishes can be modified to suit specific dietary needs.' },

  'contacto.heroTitle':    { es: 'Encuéntranos',            en: 'Find us' },
  'contacto.sectionTitle': { es: 'Contacto y ubicación',    en: 'Contact & location' },
  'contacto.addressLabel': { es: 'Dirección',               en: 'Address' },
  'contacto.phoneLabel':   { es: 'Teléfono',                en: 'Phone' },
  'contacto.hoursLabel':   { es: 'Horario del local',       en: 'Venue hours' },
  'contacto.hoursLine1':   { es: 'Lunes – Viernes: 08:00 – 01:00', en: 'Monday – Friday: 08:00 – 01:00' },
  'contacto.hoursLine2':   { es: 'Sábado, Domingo y Festivo: 09:00 – 01:00', en: 'Saturday, Sunday & Holidays: 09:00 – 01:00' },
  'contacto.kitchenLabel': { es: 'Horario de cocina',       en: 'Kitchen hours' },
  'contacto.kitchenLine1': { es: 'Lunes – Jueves: 13:00–16:00 / 20:00–23:00', en: 'Monday – Thursday: 13:00–16:00 / 20:00–23:00' },
  'contacto.kitchenLine2': { es: 'Viernes – Sábado: 13:00–16:30 / 20:00–23:30', en: 'Friday – Saturday: 13:00–16:30 / 20:00–23:30' },
  'contacto.kitchenLine3': { es: 'Domingo: 13:00–16:30 / 20:00–23:00', en: 'Sunday: 13:00–16:30 / 20:00–23:00' },
  'contacto.reservarCta':  { es: 'Reservar mesa',           en: 'Book a table' },
  'contacto.llegarTitle':  { es: 'Cómo llegar',             en: 'Getting here' },
  'contacto.metroTitle':   { es: 'Metro',                   en: 'Metro' },
  'contacto.metroDesc':    { es: 'Línea 4 (marrón), estación Alonso Martínez. 4 min caminando.', en: 'Line 4 (brown), Alonso Martínez station. 4 min walk.' },
  'contacto.busTitle':     { es: 'Bus',                     en: 'Bus' },
  'contacto.busDesc':      { es: 'Líneas 3, 7, 14, 40. Parada Santa Bárbara.', en: 'Lines 3, 7, 14, 40. Santa Bárbara stop.' },
  'contacto.parkingTitle': { es: 'Aparcamiento 24/7',       en: 'Parking 24/7' },
  'contacto.parkingDesc':  { es: 'C. de Fernando el Santo, 11, Chamberí, 28010 a 5 min.', en: 'C. de Fernando el Santo, 11, Chamberí, 28010 — 5 min away.' },

  'reservas.heroTitle':    { es: 'Reserva tu mesa',         en: 'Book your table' },
  'reservas.heroSubtitle': { es: 'Asegura tu lugar en Gran Café Santander', en: 'Secure your place at Gran Café Santander' },
  'reservas.sectionTitle': { es: 'Selecciona fecha y hora', en: 'Select date and time' },
  'reservas.preferCall':   { es: '¿Prefieres llamarnos?',   en: 'Prefer to call us?' },
  'reservas.callNote':     { es: 'Atención telefónica en horario de cocina', en: 'Phone support during kitchen hours' },
  'reservas.hoursTitle':   { es: 'Horario de cocina',       en: 'Kitchen hours' },
  'reservas.monThu':       { es: 'Lun–Jue',                 en: 'Mon–Thu' },
  'reservas.friSat':       { es: 'Vie–Sáb',                 en: 'Fri–Sat' },
  'reservas.sun':          { es: 'Dom',                     en: 'Sun' },

  'trabaja.heroTitle':     { es: 'Trabaja con nosotros',    en: 'Work with us' },
  'trabaja.heroSubtitle':  { es: 'Queremos conocerte. Envíanos tu candidatura y tu CV.', en: 'We want to meet you. Send us your application and CV.' },
  'trabaja.sectionTitle':  { es: 'Únete al equipo del Gran Café Santander', en: 'Join the Gran Café Santander team' },
  'trabaja.sectionDesc':   { es: 'Buscamos personas apasionadas por la hostelería y el servicio. Completa el formulario y cuéntanos tu experiencia.', en: 'We are looking for people passionate about hospitality and service. Fill in the form and tell us about yourself.' },
  'trabaja.labelName':     { es: 'Nombre',                  en: 'First name' },
  'trabaja.labelSurname':  { es: 'Apellido',                en: 'Last name' },
  'trabaja.labelEmail':    { es: 'Email',                   en: 'Email' },
  'trabaja.labelPhone':    { es: 'Teléfono',                en: 'Phone' },
  'trabaja.labelMessage':  { es: 'Mensaje / Presentación',  en: 'Message / Introduction' },
  'trabaja.labelCV':       { es: 'Adjuntar CV (PDF)',        en: 'Attach CV (PDF)' },
  'trabaja.noFile':        { es: 'Ningún archivo seleccionado', en: 'No file selected' },
  'trabaja.privacy':       { es: 'He leído y acepto la',    en: 'I have read and accept the' },
  'trabaja.privacyLink':   { es: 'Política de Privacidad',  en: 'Privacy Policy' },
  'trabaja.submit':        { es: 'Enviar',                  en: 'Submit' },

  'aviso.eyebrow':  { es: 'LSSI-CE · RGPD', en: 'LSSI-CE · GDPR' },
  'aviso.title':    { es: 'Aviso Legal',     en: 'Legal Notice' },
  'aviso.subtitle': { es: 'Información legal sobre el uso del sitio web, responsabilidades y derechos del usuario.', en: 'Legal information about the use of the website, liabilities, and user rights.' },

  'cookiesPage.eyebrow':   { es: 'RGPD · Directiva ePrivacy', en: 'GDPR · ePrivacy Directive' },
  'cookiesPage.title':     { es: 'Política de Cookies',        en: 'Cookie Policy' },
  'cookiesPage.subtitle':  { es: 'Esta política explica qué son las cookies, qué tipos utilizamos y cómo puedes gestionarlas.', en: 'This policy explains what cookies are, which types we use and how you can manage them.' },
  'cookiesPage.manageBtn': { es: 'Gestionar cookies',          en: 'Manage cookies' },

  'privacidad.eyebrow':  { es: 'RGPD · LSSI-CE', en: 'GDPR · LSSI-CE' },
  'privacidad.title':    { es: 'Política de Privacidad', en: 'Privacy Policy' },
  'privacidad.subtitle': { es: 'Información sobre el tratamiento de datos personales y tus derechos como usuario.', en: 'Information about the processing of personal data and your rights as a user.' },

  'contacto.heroSubtitle': {
  es: 'Plaza de Santa Bárbara · Madrid',
  en: 'Plaza de Santa Bárbara · Madrid'
},
'contacto.mapTitle': {
  es: 'Ubicación de Gran Café Santander en Google Maps',
  en: 'Gran Café Santander on Google Maps'
},

'reservas.widgetPending': {
  es: 'Widget de reservas — pendiente de configuración.',
  en: 'Booking widget — pending configuration.'
},
'reservas.monThuHours': {
  es: '13:00–16:00 / 20:00–23:00',
  en: '13:00–16:00 / 20:00–23:00'
},
'reservas.friSatHours': {
  es: '13:00–16:30 / 20:00–23:30',
  en: '13:00–16:30 / 20:00–23:30'
},
'reservas.sunHours': {
  es: '13:00–16:30 / 20:00–23:00',
  en: '13:00–16:30 / 20:00–23:00'
},

'carta.celiacGood': {
  es: 'Apto para celíacos',
  en: 'Gluten-free'
},
'carta.celiacWarn': {
  es: 'Previa modificación, apto para celíacos',
  en: 'Gluten-free with modification'
},
'carta.tabsLabel': {
  es: 'Secciones de la carta',
  en: 'Menu sections'
},

'trabaja.successMsg': {
  es: '¡Gracias por tu interés! Hemos recibido tu solicitud y nos pondremos en contacto contigo pronto.',
  en: 'Thank you for your interest! We have received your application and will be in touch soon.'
},
'trabaja.errNombre': {
  es: 'El nombre es obligatorio.',
  en: 'First name is required.'
},
'trabaja.errApellido': {
  es: 'El apellido es obligatorio.',
  en: 'Last name is required.'
},
'trabaja.errEmailReq': {
  es: 'El email es obligatorio.',
  en: 'Email is required.'
},
'trabaja.errEmailInv': {
  es: 'Introduce un email válido.',
  en: 'Please enter a valid email.'
},
'trabaja.errTelReq': {
  es: 'El teléfono es obligatorio.',
  en: 'Phone is required.'
},
'trabaja.errTelInv': {
  es: 'Introduce un teléfono válido (mínimo 9 dígitos).',
  en: 'Please enter a valid phone number (min. 9 digits).'
},
'trabaja.errMensaje': {
  es: 'El mensaje es obligatorio.',
  en: 'Message is required.'
},
'trabaja.errCvReq': {
  es: 'Adjunta tu CV en PDF.',
  en: 'Please attach your CV as a PDF.'
},
'trabaja.errCvType': {
  es: 'Solo se permiten archivos PDF.',
  en: 'Only PDF files are allowed.'
},
'trabaja.errPrivacy': {
  es: 'Debes aceptar la política de privacidad.',
  en: 'You must accept the privacy policy.'
},

'cookiesPage.tableOwn': {
  es: 'Propia',
  en: 'Own'
},
'cookiesPage.tableThird': {
  es: 'Tercero — Google',
  en: 'Third-party — Google'
},
'cookiesPage.tableTech': {
  es: 'Técnica',
  en: 'Technical'
},
'cookiesPage.tablePref': {
  es: 'Técnica / Preferencia',
  en: 'Technical / Preference'
},
'cookiesPage.tableAnalytics': {
  es: 'Analítica',
  en: 'Analytics'
},
'cookiesPage.tableSession': {
  es: 'Sesión',
  en: 'Session'
},
'cookiesPage.tableYear': {
  es: '2 años',
  en: '2 years'
},
'cookiesPage.tableDay': {
  es: '1 día',
  en: '1 day'
},
'cookiesPage.tableYearOne': {
  es: '1 año',
  en: '1 year'
}
};

export function getLang(): Lang {
  const stored = typeof localStorage !== 'undefined' ? localStorage.getItem(LANG_KEY) : null;
  return stored === 'en' ? 'en' : 'es';
}

export function applyTranslations(lang: Lang) {
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (key && T[key]) {
      el.textContent = T[key][lang];
    }
  });
  document.querySelectorAll<HTMLElement>('[data-i18n-attr]').forEach((el) => {
    const raw = el.dataset.i18nAttr!;
    raw.split(',').forEach((pair) => {
      const [attr, key] = pair.split(':');
      if (attr && key && T[key]) {
        el.setAttribute(attr, T[key][lang]);
      }
    });
  });
  document.documentElement.lang = lang;
}