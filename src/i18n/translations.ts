
export type Lang = 'es' | 'en';

export const translations = {
  // ── NAVBAR ──────────────────────────────────────────────────────────────────
  nav: {
    inicio:       { es: 'Inicio',        en: 'Home' },
    carta:        { es: 'Carta',         en: 'Menu' },
    reservas:     { es: 'Reservas',      en: 'Reservations' },
    contacto:     { es: 'Contacto',      en: 'Contact' },
    reservarCta:  { es: 'Reservar mesa', en: 'Book a table' },
    menuLabel:    { es: 'Menú',          en: 'Menu' },
    openMenu:     { es: 'Abrir menú',    en: 'Open menu' },
  },

  // ── FOOTER ──────────────────────────────────────────────────────────────────
  footer: {
    tagline:          { es: 'Sabores del norte, alma madrileña.',   en: 'Flavours of the north, Madrid soul.' },
    contactTitle:     { es: 'Contacto',                             en: 'Contact' },
    hours:            { es: 'Lun–Vie 08:00–01:00 / Sáb–Dom 09:00–01:00', en: 'Mon–Fri 08:00–01:00 / Sat–Sun 09:00–01:00' },
    joinTitle:        { es: 'Trabaja con nosotros',                 en: 'Work with us' },
    joinLink:         { es: 'Enviar candidatura',                   en: 'Send application' },
    legalTitle:       { es: 'Legal',                                en: 'Legal' },
    avisoLegal:       { es: 'Aviso Legal',                          en: 'Legal Notice' },
    privacidad:       { es: 'Política de Privacidad',               en: 'Privacy Policy' },
    cookies:          { es: 'Política de Cookies',                  en: 'Cookie Policy' },
    rights:           { es: 'Todos los derechos reservados.',       en: 'All rights reserved.' },
  },

  // ── COOKIE CONSENT ──────────────────────────────────────────────────────────
  cookie: {
    title:          { es: 'Preferencias de cookies',                en: 'Cookie preferences' },
    description:    { es: 'Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y personalizar contenidos. Puedes aceptar todas, rechazarlas o configurar tus preferencias. Más información en nuestra', en: 'We use our own and third-party cookies to improve your experience, analyse traffic, and personalise content. You can accept all, reject them, or set your preferences. More info in our' },
    policyLink:     { es: 'Política de Cookies',                    en: 'Cookie Policy' },
    accept:         { es: 'Aceptar todas',                          en: 'Accept all' },
    reject:         { es: 'Rechazar',                               en: 'Reject' },
    configure:      { es: 'Configurar',                             en: 'Manage' },
    savePrefs:      { es: 'Guardar preferencias',                   en: 'Save preferences' },
    essential:      { es: 'Cookies técnicas / esenciales',          en: 'Technical / essential cookies' },
    essentialNote:  { es: 'Necesarias para el funcionamiento del sitio.', en: 'Required for the site to work.' },
    analytics:      { es: 'Cookies analíticas',                     en: 'Analytics cookies' },
    analyticsNote:  { es: 'Google Analytics (_ga, _gat, _gid).',    en: 'Google Analytics (_ga, _gat, _gid).' },
    preferences:    { es: 'Cookies de preferencias',                en: 'Preference cookies' },
    preferencesNote:{ es: 'Recuerdan tus ajustes de navegación.',   en: 'Remember your browsing settings.' },
  },

  // ── INDEX ───────────────────────────────────────────────────────────────────
  index: {
    heroBadge:        { es: 'Desde 1967 · Madrid',                              en: 'Since 1967 · Madrid' },
    heroTitle:        { es: 'Gran Café Santander',                              en: 'Gran Café Santander' },
    heroSubtitle:     { es: 'Cocina cántabra con alma madrileña, sabores del norte en un salón que invita a quedarse.', en: 'Cantabrian cuisine with a Madrid soul — northern flavours in a room that invites you to stay.' },
    heroCarta:        { es: 'Ver la carta',                                     en: 'View the menu' },
    heroReserva:      { es: 'Reservar mesa',                                    en: 'Book a table' },
    conceptoEyebrow:  { es: 'Nuestra historia',                                 en: 'Our story' },
    conceptoTitle:    { es: 'El sabor de Cantabria en el corazón de Madrid',    en: 'The taste of Cantabria in the heart of Madrid' },
    conceptoP1:       { es: 'Gran Café Santander ocupa un lugar con más de medio siglo de historia en la ciudad. Heredero de la emblemática Cafetería Santander, abierta en 1967, conserva el espíritu acogedor que convirtió este espacio en un punto de encuentro para generaciones de madrileños.', en: 'Gran Café Santander has occupied its place in the city for more than half a century. Heir to the iconic Cafetería Santander, opened in 1967, it preserves the welcoming spirit that turned this space into a meeting point for generations of Madrileños.' },
    conceptoP2:       { es: 'Nuestra cocina apuesta por el producto de calidad, las recetas honestas y los sabores que han definido la gastronomía cántabra, todo ello en un ambiente cálido y contemporáneo.', en: 'Our kitchen champions quality produce, honest recipes, and the flavours that define Cantabrian gastronomy — all within a warm, contemporary setting.' },
    conceptoP3:       { es: 'Un lugar para desayunar, compartir una comida especial o disfrutar de los pequeños rituales de cada día.', en: 'A place to have breakfast, share a special meal, or enjoy the small rituals of every day.' },
    recomEyebrow:     { es: 'Recomendados',                                     en: 'Highlights' },
    recomTitle:       { es: 'Una selección de nuestra carta',                   en: 'A selection from our menu' },
    recomSubtitle:    { es: 'Cocina tradicional cantabresa con producto de temporada', en: 'Traditional Cantabrian cuisine with seasonal produce' },
    recomVerCarta:    { es: 'Ver carta completa',                               en: 'View full menu' },
    horarioTitle:     { es: 'Horario',                                          en: 'Hours' },
    horarioLocal:     { es: 'Local',                                            en: 'Venue' },
    horarioLocalP1:   { es: 'Lun-Vie 08:00-01:00',                             en: 'Mon–Fri 08:00–01:00' },
    horarioLocalP2:   { es: 'Sáb, Dom y Festivo 09:00-01:00',                  en: 'Sat, Sun & Holidays 09:00–01:00' },
    horarioCocina:    { es: 'Cocina',                                           en: 'Kitchen' },
    horarioCocinaP1:  { es: 'Lun-Jue 13:00-16:00 / 20:00-23:00',              en: 'Mon–Thu 13:00–16:00 / 20:00–23:00' },
    horarioCocinaP2:  { es: 'Vie-Sáb 13:00-16:30 / 20:00-23:30',              en: 'Fri–Sat 13:00–16:30 / 20:00–23:30' },
    horarioCocinaP3:  { es: 'Dom 13:00-16:30 / 20:00-23:00',                  en: 'Sun 13:00–16:30 / 20:00–23:00' },
    ubicacionTitle:   { es: 'Ubicación',                                        en: 'Location' },
    ubicacionCta:     { es: 'Cómo llegar',                                      en: 'Get directions' },
    ctaTitle:         { es: '¿Tienes una ocasión especial?',                    en: 'Have a special occasion?' },
    ctaSubtitle:      { es: 'Reserva tu mesa y deja que nuestro equipo prepare una experiencia a la altura de tu celebración.', en: 'Book your table and let our team craft an experience worthy of your celebration.' },
    ctaButton:        { es: 'Reservar mesa',                                    en: 'Book a table' },
  },

  // ── CARTA ───────────────────────────────────────────────────────────────────
  carta: {
    heroTitle:        { es: 'Nuestra Carta',                                    en: 'Our Menu' },
    heroSubtitle:     { es: 'Cocina tradicional con producto de temporada',     en: 'Traditional cuisine with seasonal produce' },
    tabCarta:         { es: 'Carta Principal',                                  en: 'Main Menu' },
    tabDesayunos:     { es: 'Desayunos & Meriendas',                           en: 'Breakfast & Snacks' },
    sidebarCarta:     { es: 'Carta principal',                                  en: 'Main menu' },
    sidebarDesayunos: { es: 'Desayunos',                                        en: 'Breakfast' },
    desayunoNote:     { es: 'Café o infusión incluido con su acompañamiento a elegir', en: 'Coffee or infusion included with your choice of accompaniment' },
    allergenNote:     { es: 'Información sobre alérgenos disponible bajo petición al personal del restaurante. Algunos platos pueden modificarse para adaptarse a necesidades dietéticas específicas.', en: 'Allergen information is available on request from restaurant staff. Some dishes can be modified to suit specific dietary needs.' },
    celiacGood:       { es: 'Apto para celíacos',                               en: 'Gluten-free' },
    celiacWarn:       { es: 'Previa modificación, apto para celíacos',          en: 'Gluten-free with modification' },
    tabsLabel:        { es: 'Secciones de la carta',                            en: 'Menu sections' },
  },

  // ── CONTACTO ────────────────────────────────────────────────────────────────
  contacto: {
    heroTitle:        { es: 'Encuéntranos',                                     en: 'Find us' },
    heroSubtitle:     { es: 'Plaza de Santa Bárbara · Madrid',                 en: 'Plaza de Santa Bárbara · Madrid' },
    sectionTitle:     { es: 'Contacto y ubicación',                             en: 'Contact & location' },
    addressLabel:     { es: 'Dirección',                                        en: 'Address' },
    phoneLabel:       { es: 'Teléfono',                                         en: 'Phone' },
    hoursLabel:       { es: 'Horario del local',                                en: 'Venue hours' },
    hoursLine1:       { es: 'Lunes – Viernes: 08:00 – 01:00',                  en: 'Monday – Friday: 08:00 – 01:00' },
    hoursLine2:       { es: 'Sábado, Domingo y Festivo: 09:00 – 01:00',        en: 'Saturday, Sunday & Holidays: 09:00 – 01:00' },
    kitchenLabel:     { es: 'Horario de cocina',                                en: 'Kitchen hours' },
    kitchenLine1:     { es: 'Lunes – Jueves: 13:00–16:00 / 20:00–23:00',       en: 'Monday – Thursday: 13:00–16:00 / 20:00–23:00' },
    kitchenLine2:     { es: 'Viernes – Sábado: 13:00–16:30 / 20:00–23:30',    en: 'Friday – Saturday: 13:00–16:30 / 20:00–23:30' },
    kitchenLine3:     { es: 'Domingo: 13:00–16:30 / 20:00–23:00',              en: 'Sunday: 13:00–16:30 / 20:00–23:00' },
    reservarCta:      { es: 'Reservar mesa',                                    en: 'Book a table' },
    llegarTitle:      { es: 'Cómo llegar',                                      en: 'Getting here' },
    metroTitle:       { es: 'Metro',                                            en: 'Metro' },
    metroDesc:        { es: 'Línea 4 (marrón), estación Alonso Martínez. 4 min caminando.', en: 'Line 4 (brown), Alonso Martínez station. 4 min walk.' },
    busTitle:         { es: 'Bus',                                              en: 'Bus' },
    busDesc:          { es: 'Líneas 3, 7, 14, 40. Parada Santa Bárbara.',      en: 'Lines 3, 7, 14, 40. Santa Bárbara stop.' },
    parkingTitle:     { es: 'Aparcamiento 24/7',                               en: 'Parking 24/7' },
    parkingDesc:      { es: 'C. de Fernando el Santo, 11, Chamberí, 28010 a 5 min.', en: 'C. de Fernando el Santo, 11, Chamberí, 28010 — 5 min away.' },
    mapTitle:         { es: 'Ubicación de Gran Café Santander en Google Maps',  en: 'Gran Café Santander on Google Maps' },
  },

  // ── RESERVAS ────────────────────────────────────────────────────────────────
  reservas: {
    heroTitle:        { es: 'Reserva tu mesa',                                  en: 'Book your table' },
    heroSubtitle:     { es: 'Asegura tu lugar en Gran Café Santander',          en: 'Secure your place at Gran Café Santander' },
    sectionTitle:     { es: 'Selecciona fecha y hora',                          en: 'Select date and time' },
    widgetPending:    { es: 'Widget de reservas — pendiente de configuración.', en: 'Booking widget — pending configuration.' },
    preferCall:       { es: '¿Prefieres llamarnos?',                            en: 'Prefer to call us?' },
    callNote:         { es: 'Atención telefónica en horario de cocina',         en: 'Phone support during kitchen hours' },
    hoursTitle:       { es: 'Horario de cocina',                                en: 'Kitchen hours' },
    monThu:           { es: 'Lun–Jue',                                          en: 'Mon–Thu' },
    monThuHours:      { es: '13:00–16:00 / 20:00–23:00',                       en: '13:00–16:00 / 20:00–23:00' },
    friSat:           { es: 'Vie–Sáb',                                          en: 'Fri–Sat' },
    friSatHours:      { es: '13:00–16:30 / 20:00–23:30',                       en: '13:00–16:30 / 20:00–23:30' },
    sun:              { es: 'Dom',                                              en: 'Sun' },
    sunHours:         { es: '13:00–16:30 / 20:00–23:00',                       en: '13:00–16:30 / 20:00–23:00' },
  },

  // ── TRABAJA CON NOSOTROS ─────────────────────────────────────────────────────
  trabaja: {
    heroTitle:        { es: 'Trabaja con nosotros',                             en: 'Work with us' },
    heroSubtitle:     { es: 'Queremos conocerte. Envíanos tu candidatura y tu CV.', en: 'We want to meet you. Send us your application and CV.' },
    sectionTitle:     { es: 'Únete al equipo del Gran Café Santander',          en: 'Join the Gran Café Santander team' },
    sectionDesc:      { es: 'Buscamos personas apasionadas por la hostelería y el servicio. Completa el formulario y cuéntanos tu experiencia.', en: 'We are looking for people passionate about hospitality and service. Fill in the form and tell us about yourself.' },
    labelName:        { es: 'Nombre',                                           en: 'First name' },
    labelSurname:     { es: 'Apellido',                                         en: 'Last name' },
    labelEmail:       { es: 'Email',                                            en: 'Email' },
    labelPhone:       { es: 'Teléfono',                                         en: 'Phone' },
    labelMessage:     { es: 'Mensaje / Presentación',                           en: 'Message / Introduction' },
    labelCV:          { es: 'Adjuntar CV (PDF)',                                en: 'Attach CV (PDF)' },
    noFile:           { es: 'Ningún archivo seleccionado',                      en: 'No file selected' },
    privacy:          { es: 'He leído y acepto la',                             en: 'I have read and accept the' },
    privacyLink:      { es: 'Política de Privacidad',                           en: 'Privacy Policy' },
    submit:           { es: 'Enviar',                                           en: 'Submit' },
    successMsg:       { es: '¡Gracias por tu interés! Hemos recibido tu solicitud y nos pondremos en contacto contigo pronto.', en: 'Thank you for your interest! We have received your application and will be in touch soon.' },
    errNombre:        { es: 'El nombre es obligatorio.',                        en: 'First name is required.' },
    errApellido:      { es: 'El apellido es obligatorio.',                      en: 'Last name is required.' },
    errEmailReq:      { es: 'El email es obligatorio.',                         en: 'Email is required.' },
    errEmailInv:      { es: 'Introduce un email válido.',                       en: 'Please enter a valid email.' },
    errTelReq:        { es: 'El teléfono es obligatorio.',                      en: 'Phone is required.' },
    errTelInv:        { es: 'Introduce un teléfono válido (mínimo 9 dígitos).', en: 'Please enter a valid phone number (min. 9 digits).' },
    errMensaje:       { es: 'El mensaje es obligatorio.',                       en: 'Message is required.' },
    errCvReq:         { es: 'Adjunta tu CV en PDF.',                            en: 'Please attach your CV as a PDF.' },
    errCvType:        { es: 'Solo se permiten archivos PDF.',                   en: 'Only PDF files are allowed.' },
    errPrivacy:       { es: 'Debes aceptar la política de privacidad.',         en: 'You must accept the privacy policy.' },
  },

  // ── AVISO LEGAL ─────────────────────────────────────────────────────────────
  aviso: {
    eyebrow:          { es: 'LSSI-CE · RGPD',                                  en: 'LSSI-CE · GDPR' },
    title:            { es: 'Aviso Legal',                                      en: 'Legal Notice' },
    subtitle:         { es: 'Información legal sobre el uso del sitio web, responsabilidades y derechos del usuario.', en: 'Legal information about the use of the website, liabilities, and user rights.' },
  },

  // ── POLÍTICA DE COOKIES ──────────────────────────────────────────────────────
  cookiesPage: {
    eyebrow:          { es: 'RGPD · Directiva ePrivacy',                       en: 'GDPR · ePrivacy Directive' },
    title:            { es: 'Política de Cookies',                              en: 'Cookie Policy' },
    subtitle:         { es: 'Esta política explica qué son las cookies, qué tipos utilizamos y cómo puedes gestionarlas.', en: 'This policy explains what cookies are, which types we use and how you can manage them.' },
    manageBtn:        { es: 'Gestionar cookies',                                en: 'Manage cookies' },
    tableOwn:         { es: 'Propia',                                           en: 'Own' },
    tableThird:       { es: 'Tercero — Google',                                 en: 'Third-party — Google' },
    tableTech:        { es: 'Técnica',                                          en: 'Technical' },
    tablePref:        { es: 'Técnica / Preferencia',                            en: 'Technical / Preference' },
    tableAnalytics:   { es: 'Analítica',                                        en: 'Analytics' },
    tableSession:     { es: 'Sesión',                                           en: 'Session' },
    tableYear:        { es: '2 años',                                           en: '2 years' },
    tableDay:         { es: '1 día',                                            en: '1 day' },
    tableYearOne:     { es: '1 año',                                            en: '1 year' },
  },

  // ── POLÍTICA DE PRIVACIDAD ───────────────────────────────────────────────────
  privacidad: {
    eyebrow:          { es: 'RGPD · LSSI-CE',                                  en: 'GDPR · LSSI-CE' },
    title:            { es: 'Política de Privacidad',                           en: 'Privacy Policy' },
    subtitle:         { es: 'Información sobre el tratamiento de datos personales y tus derechos como usuario.', en: 'Information about the processing of personal data and your rights as a user.' },
  },
} as const;

export type TranslationKey = keyof typeof translations;