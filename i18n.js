(function () {
  'use strict';

  var EXACT = {
    'home':'Inicio', 'back':'Volver', 'next':'Siguiente', 'done':'Listo', 'edit':'Editar',
    'open':'Abrir', 'close':'Cerrar', 'cancel':'Cancelar', 'save':'Guardar', 'saved':'Guardado',
    'download':'Descargar', 'downloads':'Descargas', 'search':'Buscar', 'share':'Compartir',
    'settings':'Ajustes', 'about':'Acerca de', 'featured':'Destacado', 'favorites':'Favoritos',
    'popular':'Popular', 'local':'Local', 'profile':'Perfil', 'following':'Siguiendo',
    'message':'Mensaje', 'messages':'Mensajes', 'mail':'Correo', 'phone':'Teléfono',
    'camera':'Cámara', 'map':'Mapa', 'maps':'Mapas', 'music':'Música', 'weather':'Clima',
    'voice memo':'Nota de voz', 'voice memos':'Notas de voz', 'pages':'Páginas', 'notes':'Notas',
    'calculator':'Calculadora', 'compass':'Brújula', 'cards':'Tarjetas', 'clock':'Reloj',
    'videos':'Videos', 'photos':'Fotos', 'numbers':'Números', 'albums':'Álbumes',
    'songs':'Canciones', 'contacts':'Contactos', 'recents':'Recientes', 'documents':'Documentos',
    'projects':'Proyectos', 'recent projects':'Proyectos recientes', 'resume':'Currículum',
    'my portfolio':'Mi portfolio', 'my digital crib':'Mi Digital Crib', 'contact':'Contacto',
    'today':'Hoy', 'yesterday':'Ayer', 'tomorrow':'Mañana', 'sunday':'Domingo',
    'monday':'Lunes', 'tuesday':'Martes', 'wednesday':'Miércoles', 'thursday':'Jueves',
    'friday':'Viernes', 'saturday':'Sábado', 'free':'Gratis', 'loading':'Cargando',
    'play':'Reproducir', 'pause':'Pausa', 'record':'Grabar', 'recording':'grabando',
    'memos':'Notas', 'normal':'Normal', 'light':'Claro', 'night':'Noche', 'brightness':'Brillo',
    'wallpaper':'Fondo de pantalla', 'sounds':'Sonidos', 'theme':'Tema', 'airplane mode':'Modo avión',
    'wi-fi':'Wi-Fi', 'about this mangophone':'Acerca de este MangoPhone', 'call':'Llamar',
    'world clock':'Reloj mundial', 'alarm':'Alarma', 'stopwatch':'Cronómetro', 'timer':'Temporizador',
    'featured videos':'Videos destacados', 'featured album':'Álbum destacado',
    'new & noteworthy':'Nuevo y destacado', 'press & zines':'Prensa y zines',
    'specials & essays':'Especiales y ensayos', 'app of the week':'App de la semana',
    'recent activity':'Actividad reciente', 'achievements':'Logros', 'points':'Puntos',
    'friends':'Amigos', 'games':'Juegos', 'categories':'Categorías', 'updates':'Actualizaciones',
    'news':'Noticias', 'newsstand':'Quiosco', 'city survival':'Sobrevivir en la ciudad',
    'productivity':'Productividad', 'photo & video':'Foto y video', 'navigation':'Navegación',
    'social networking':'Redes sociales', 'what are you still doing on your phone':'¿Qué sigues haciendo en tu teléfono?',
    'essential for making your life harder':'Esencial para complicarte la vida',
    'downloaded at 1:14 am for emotional reasons':'Descargado a la 1:14 AM por razones emocionales',
    'late-night bad idea purchases':'Compras nocturnas de malas ideas',
    'because you are avoiding writing':'Porque estás evitando escribir',
    'spreadsheets':'Hojas de cálculo', 'presentations':'Presentaciones', 'playlist tracker':'Control de playlist',
    'expenses i regret':'Gastos de los que me arrepiento', 'draft':'Borrador', 'never mailed':'Nunca enviada',
    'postcard from the crib':'Postal desde el crib', 'the cat — a report':'La gata — un informe',
    'for mom (not sent)':'Para mamá (no enviada)', 'if i ever actually mailed things':'Si alguna vez enviara cosas',
    'no older notifications':'No hay notificaciones anteriores', 'swipe to flip →':'desliza para voltear →',
    'slide to unlock':'desliza para desbloquear', 'tap to download':'toca para descargar',
    'preview':'Vista previa', 'preview both pages':'Ver ambas páginas', 'open full pdf':'Abrir PDF completo',
    'download pdf':'Descargar PDF', 'main quest':'Misión principal', 'side quest':'Misión secundaria',
    'welcome':'Bienvenido', 'welcome :)':'bienvenido :)', 'password':'Contraseña', 'username':'Usuario',
    'log in':'Iniciar sesión', 'sign in':'Iniciar sesión', 'start':'Inicio', 'all programs':'Todos los programas',
    'my computer':'Mi PC', 'my documents':'Mis documentos', 'recycle bin':'Papelera de reciclaje',
    'internet explorer':'Internet Explorer', 'control panel':'Panel de control', 'shut down':'Apagar',
    'yes':'Sí', 'no':'No', 'ok':'Aceptar', 'apply':'Aplicar', 'file':'Archivo', 'view':'Ver',
    'help':'Ayuda', 'tools':'Herramientas', 'folder':'Carpeta', 'details':'Detalles', 'type':'Tipo',
    'size':'Tamaño', 'name':'Nombre', 'date modified':'Fecha de modificación',
    'michelle salcedo portfolio':'Portfolio de Michelle Salcedo', 'loading experience':'cargando experiencia',
    'tap mango for luck':'toca el mango para tener suerte', 'tap for luck':'toca para tener suerte',
    'mangophone assembly':'ensamblaje del mangophone', 'assembling your mangophone':'armando tu mangophone',
    'choose your language to enter':'elige tu idioma para entrar', 'welcome home':'bienvenido a casa',
    'wanna continue in english or spanish?':'¿quieres continuar en inglés o español?',
    'english':'Inglés', 'toggle the cozy lamp':'encender o apagar la lámpara acogedora',
    'pet the pixel cat':'acariciar a la gata pixelada',
    'light mode':'modo claro', 'night mode':'modo noche', 'michisearch':'michisearch',
    '7 results (0.42 seconds, obviously)':'7 resultados (0,42 segundos, obvio)',
    'pdf · tap to download':'pdf · toca para descargar', 'edited today · 1 page':'editado hoy · 1 página',
    'edited yesterday · 5 slides':'editado ayer · 5 diapositivas', 'revised · 5 slides':'revisado · 5 diapositivas',
    '12 frames · 5 slides':'12 fotos · 5 diapositivas', '5 rows · regret':'5 filas · arrepentimiento',
    '6 rows · research':'6 filas · investigación', 'few but iconic':'pocos pero icónicos',
    'probably editing photos':'probablemente editando fotos', 'mobile':'móvil', 'work':'trabajo',
    'scam probablemente':'estafa probablemente', 'current forecast':'pronóstico actual',

    /* Shared legacy desktop + Nokia navigation */
    'to begin, click your user name':'Para comenzar, haz clic en tu nombre de usuario',
    'password protected':'Protegido con contraseña', 'turn off computer':'Apagar el equipo',
    'about me':'Sobre mí', 'resume.pdf':'Currículum.pdf', 'video player':'Reproductor de video',
    'calendar':'Calendario', 'connecting brands':'conectando marcas', 'menu':'Menú', 'links':'Enlaces',
    'book call':'Reservar llamada', 'reminders':'Recordatorios', 'snake':'Serpiente', 'pet':'Mascota',
    'radio':'Radio', 'gallery':'Galería', 'call log':'Registro de llamadas', 'ringtones':'Tonos',
    'inquiry':'Consulta', 'reply':'Responder', 'send':'Enviar', 'read':'Leer', 'new':'Nuevo',
    'all':'Todas', 'missed':'Perdidas', 'dialed':'Realizadas', 'no calls yet':'Aún no hay llamadas',
    'general':'General', 'silent':'Silencio', 'meeting':'Reunión', 'outdoor':'Exterior',
    'volume':'Volumen', 'language':'Idioma', 'select':'Seleccionar', 'go':'Ir', 'end':'Finalizar',
    'clear':'Borrar', 'digits':'dígitos', 'website':'Sitio web',
    'portfolio':'Portfolio', 'design client':'Cliente de diseño', 'strategy client':'Cliente de estrategia',
    'design studio':'Estudio de diseño', 'potential client':'Cliente potencial',
    'future collaborator':'Futura colaboración', 'need a website?':'¿Necesitas un sitio web?',
    'ready to grow?':'¿Lista para crecer?', 'book a call':'Reservar una llamada',
    'book free call':'Reservar llamada gratis', 'let\'s talk':'Hablemos',
    'message sent!':'¡Mensaje enviado!', 'i\'ll be in touch soon.':'Te escribiré pronto.',
    'full name:':'Nombre completo:', 'business / brand name:':'Empresa / marca:',
    'website type:':'Tipo de sitio web:', 'timeline:':'Plazo:', 'budget range:':'Rango de presupuesto:',
    'your vision:':'Tu visión:', 'your full name':'Tu nombre completo', 'your brand name':'El nombre de tu marca',
    'what kind of website?':'¿Qué tipo de sitio web?', 'what is your timeline?':'¿Cuál es tu plazo?',
    'your budget range':'Tu rango de presupuesto', 'tell me about your vision...':'Cuéntame sobre tu visión...',
    'let\'s build your website':'Construyamos tu sitio web',
    'no photos yet. use camera to take some.':'Aún no hay fotos. Usa Cámara para tomar algunas.',
    'tap to read':'Toca para leer', 'tap any row to open link':'Toca una fila para abrir el enlace',
    'tap to call · ↗ opens link':'Toca para llamar · ↗ abre el enlace',
    'right soft key opens the inquiry screen so you can keep the conversation moving.':'La tecla derecha abre la consulta para que puedas continuar la conversación.',
    'calling...':'Llamando...', 'connecting...':'Conectando...', 'playback blocked':'Reproducción bloqueada',
    'press play again':'Pulsa reproducir otra vez',
    '1 new message — design studio':'1 mensaje nuevo — Estudio de diseño',
    'your new website mockup is ready for review! check it when you can.':'¡La nueva maqueta de tu sitio está lista para revisar! Mírala cuando puedas.',
    'love the branding direction — can we book a call to go over the details?':'Me encanta la dirección de marca. ¿Agendamos una llamada para revisar los detalles?',
    'you have 3 new connection requests waiting.':'Tienes 3 nuevas solicitudes de conexión esperando.',
    'mon':'Lun', 'tue':'Mar', 'wed':'Mié', 'thu':'Jue', 'fri':'Vie',
    'sat':'Sáb', 'sun':'Dom', 'jan':'Ene', 'feb':'Feb', 'mar':'Mar', 'apr':'Abr',
    'may':'May', 'jun':'Jun', 'jul':'Jul', 'aug':'Ago', 'sep':'Sep', 'oct':'Oct',
    'nov':'Nov', 'dec':'Dic',

    /* MangoPhone content and controls */
    'return':'intro', 'unknown number':'número desconocido', 'mom':'mamá', 'dad':'papá',
    'now':'ahora', 'feed':'Inicio', 'shuffle':'Aleatorio', 'partly cloudy':'Parcialmente nublado',
    'cloudy':'Nublado', 'sunny':'Soleado', 'high':'Máx.', 'low':'Mín.',
    'follow':'Seguir', 'agenda':'agenda', 'our rates':'nuestras tarifas', 'collabs':'colaboraciones',
    'get social':'redes', 'virtual coffee':'café virtual', 'our playlist':'nuestra playlist',
    'single':'Una foto', 'strip':'Tira', 'hearts':'Corazones', 'dreamy glow':'Brillo de ensueño',
    'b&w booth':'Cabina B/N', 'pink haze':'Bruma rosa', 'cool blue':'Azul frío',
    'vintage strip':'Tira vintage', 'sparkle':'Destellos', 'love sick':'Mal de amores',
    'earlybird':'Mañanero', 'inkwell':'Tintero',
    'experience:':'Experiencia:', 'skills:':'Habilidades:', 'certs:':'Certificaciones:',
    'languages:':'Idiomas:', 'english c1 · spanish native':'inglés C1 · español nativo',
    'marketing specialist':'especialista en marketing', 'collaborations manager':'gerente de colaboraciones',
    'account manager':'gerente de cuentas', 'executive assistant':'asistente ejecutiva',
    'bids sourcer assistant':'asistente de búsqueda de licitaciones',
    'creator sourcing & outreach':'búsqueda y contacto de creadores',
    'campaign ops':'operaciones de campañas', 'creative direction':'dirección creativa',
    'ai tools & automation':'herramientas de IA y automatización',
    'webfolio ideas':'ideas para el webfolio', 'more cats':'más gatos',
    'secret nokia games':'juegos secretos de Nokia', 'spam folder':'carpeta de spam',
    'page???':'¿¿¿página???', 'capybara easter egg':'easter egg del chigüire',
    'cat food (a lot)':'comida para gatos (MUCHA)', 'coffee':'café',
    'creator shortlist: niche > reach':'lista de creadores: nicho > alcance',
    'brief = story, not script':'brief = historia, no guion',
    'tracking v2 in notion':'seguimiento v2 en Notion',
    'ugc hooks that dont feel like ads':'ganchos UGC que no parezcan anuncios',
    'you literally just ate':'literalmente acabas de comer',
    '...fine. third dinner it is':'...está bien. tercera cena entonces',
    'kindly send $50 itunes gift card':'por favor envía una tarjeta de iTunes de $50',
    'emma the cat':'emma la gata', 'photography:':'fotografía:',
    'minimize':'Minimizar', 'maximize':'Maximizar', 'about':'Acerca de',
    'experience':'Experiencia', 'present':'Actualidad', 'photographer':'Fotógrafa',
    'self-employed':'Independiente', 'skills & tools':'Habilidades y herramientas',
    'what drives me':'Lo que me impulsa', 'web design':'Diseño web',
    'visual storytelling':'Narrativa visual', 'campaign management':'Gestión de campañas',
    'operations':'Operaciones', 'cross-functional collaboration':'Colaboración multifuncional',
    'system tasks':'Tareas del sistema', 'other places':'Otros lugares', 'address':'Dirección',
    'view about me':'Ver Sobre mí', 'send a message':'Enviar un mensaje', 'view resume':'Ver currículum',
    'open links':'Abrir enlaces',
    'contact.lnk':'Contacto.lnk', 'camera.exe':'Cámara.exe', 'music player.exe':'Reproductor de música.exe',
    'plot twist: the real portfolio was the friends we made along the way.':'Giro inesperado: el verdadero portfolio fueron las amistades que hicimos en el camino.',
    'i\'m legally required to tell you this portfolio slaps.':'La ley me obliga a decirte que este portfolio está brutal.',
    'i\'ve been stuck in this computer since 2001. send help. or a job offer.':'Estoy atrapado en esta computadora desde 2001. Envía ayuda. O una oferta de trabajo.',
    'chatgpt & ai tools':'ChatGPT y herramientas de IA'
  };

  var PHRASES = [
    ['you found my mangophone', 'encontraste mi mangophone'],
    ['you found my phone', 'encontraste mi teléfono'],
    ['former owner of this phone', 'antigua dueña de este teléfono'],
    ['web designer', 'diseñadora web'], ['creative director', 'directora creativa'],
    ['influencer marketing', 'marketing de influencers'], ['ai workflows', 'flujos de IA'],
    ['ai specialist', 'especialista en IA'], ['project management', 'gestión de proyectos'],
    ['tap this bar to continue', 'toca esta barra para continuar'],
    ['tap to continue', 'toca para continuar'], ['tap the button', 'toca el botón'],
    ['tap the resume result', 'toca el resultado del currículum'],
    ['open the full pdf', 'abre el PDF completo'], ['download a copy', 'descarga una copia'],
    ['preview or download', 'ver o descargar'], ['preview and download', 'ver y descargar'],
    ['preview both pages', 'ver ambas páginas'], ['full resume', 'currículum completo'],
    ['real client work', 'trabajo real para clientes'], ['every link is real', 'cada enlace es real'],
    ['my websites and resume', 'mis sitios web y mi currículum'],
    ['first stop', 'primera parada'], ['great taste', 'buen gusto'],
    ['quick controls', 'controles rápidos'], ['round button', 'botón redondo'],
    ['takes you home', 'te lleva al inicio'], ['drag the mango', 'arrastra el mango'],
    ['every app has a story', 'cada app tiene una historia'],
    ['think of me as your tour guide', 'piensa en mí como tu guía'],
    ['open my portfolio', 'abre mi portfolio'], ['welcome to my portfolio', 'bienvenido a mi portfolio'],
    ['let\'s make something', 'hagamos algo'], ['work together', 'trabajar juntos'],
    ['my inbox is always open', 'mi inbox siempre está abierto'],
    ['i actually answer', 'sí respondo de verdad'], ['this is not a drill', 'esto no es un simulacro'],
    ['feed me', 'dame comida'], ['call your mom', 'llama a tu mamá'],
    ['take a pic', 'toma una foto'], ['try the filters', 'prueba los filtros'],
    ['press play', 'dale play'], ['current forecast', 'pronóstico actual'],
    ['camera roll', 'carrete de fotos'], ['world clock', 'reloj mundial'],
    ['boarding passes', 'pases de abordar'], ['travel plans', 'planes de viaje'],
    ['wallpaper picker', 'selector de fondos'], ['try the wallpaper', 'prueba el fondo'],
    ['contact info', 'información de contacto'], ['grocery list', 'lista del mercado'],
    ['view all', 'ver todo'], ['learn more', 'saber más'], ['read more', 'leer más'],
    ['click here', 'haz clic aquí'], ['double click', 'doble clic'], ['right click', 'clic derecho'],
    ['open with', 'abrir con'], ['send to', 'enviar a'], ['new folder', 'nueva carpeta'],
    ['are you sure', '¿estás seguro?'], ['please wait', 'por favor espera'],
    ['loading your desktop', 'cargando tu escritorio'], ['welcome back', 'bienvenido de nuevo'],
    ['an interactive desktop experience', 'una experiencia de escritorio interactiva'],
    ['made with', 'hecho con'], ['designed and built by me', 'diseñado y creado por mí'],
    ['photography portfolio', 'portfolio de fotografía'], ['content calendar', 'calendario de contenido'],
    ['campaign brain dump', 'ideas sueltas de campaña'], ['groceries + stuff', 'mercado + cosas'],
    ['edited today', 'editado hoy'], ['edited yesterday', 'editado ayer'],
    ['last modified', 'última modificación'], ['no results', 'sin resultados'],
    ['results', 'resultados'], ['seconds', 'segundos'], ['page', 'página'], ['pages', 'páginas'],
    ['slides', 'diapositivas'], ['rows', 'filas'], ['followers', 'seguidores'], ['following', 'siguiendo'],
    ['posts', 'publicaciones'], ['followed by', 'seguido por'], ['view profile', 'ver perfil'],
    ['today at', 'hoy a las'], ['yesterday at', 'ayer a las'], ['new message', 'mensaje nuevo'],
    ['no notifications', 'sin notificaciones'], ['notifications', 'notificaciones'],

    /* Full experience prose */
    ['tap items on screen', 'toca los elementos en pantalla'],
    ['buttons below = shortcuts', 'los botones de abajo son atajos'],
    ['custom websites for brands that want to look unforgettable online', 'sitios web a medida para marcas que quieren verse inolvidables online'],
    ['creative, strategic and personality-led websites', 'sitios web creativos, estratégicos y con personalidad'],
    ['for founders, personal brands, and service businesses', 'para fundadores, marcas personales y negocios de servicios'],
    ['i create custom websites that feel intentional', 'creo sitios web a medida que se sienten intencionales'],
    ['visually distinctive, and aligned with your brand personality', 'visualmente distintivos y alineados con la personalidad de tu marca'],
    ['my work blends design, strategy, and strong creative direction', 'mi trabajo combina diseño, estrategia y una dirección creativa sólida'],
    ['to help you stand out online', 'para ayudarte a destacar online'],
    ['if you can imagine it, i can build it', 'si puedes imaginarlo, puedo construirlo'],
    ['need help figuring out the right website direction for your brand', '¿necesitas definir la dirección correcta del sitio web de tu marca'],
    ['book a free consultation call', 'reserva una llamada de consulta gratuita'],
    ['let\'s talk through your goals, style, and next steps', 'conversemos sobre tus objetivos, estilo y próximos pasos'],
    ['let\'s talk about your website in a free 1:1 call with me', 'hablemos de tu sitio web en una llamada individual gratuita conmigo'],
    ['nav fields', 'navega los campos'], ['submit', 'enviar'], ['opens link', 'abre el enlace'],
    ['right soft key', 'tecla derecha'], ['inquiry screen', 'pantalla de consulta'],
    ['keep the conversation moving', 'continuar la conversación'],
    ['no photos yet', 'aún no hay fotos'], ['use camera to take some', 'usa Cámara para tomar algunas'],
    ['no calls yet', 'aún no hay llamadas'], ['book call', 'reservar llamada'],
    ['call log', 'registro de llamadas'], ['missed call', 'llamada perdida'],
    ['design studio', 'estudio de diseño'], ['design client', 'cliente de diseño'],
    ['strategy client', 'cliente de estrategia'], ['potential client', 'cliente potencial'],
    ['future collaborator', 'futura colaboración'], ['new connection requests', 'nuevas solicitudes de conexión'],
    ['ready for review', 'lista para revisar'], ['branding direction', 'dirección de marca'],
    ['go over the details', 'revisar los detalles'],
    ['to begin, click your user name', 'para comenzar, haz clic en tu nombre de usuario'],
    ['password protected', 'protegido con contraseña'], ['turn off computer', 'apagar el equipo'],
    ['click for msn messenger', 'haz clic para abrir MSN Messenger'],
    ['click here', 'haz clic aquí'], ['about me', 'sobre mí'], ['video player', 'reproductor de video'],
    ['my pictures', 'mis imágenes'], ['my music', 'mi música'], ['my videos', 'mis videos'],
    ['search the web', 'buscar en la web'], ['welcome to', 'bienvenido a'],
    ['internet options', 'opciones de Internet'], ['task manager', 'administrador de tareas'],
    ['log off', 'cerrar sesión'], ['shut down', 'apagar'],

    /* MangoPhone app copy */
    ['thursday, january 1', 'jueves, 1 de enero'],
    ['you should check this website again but in desktop', 'deberías volver a ver este sitio en desktop'],
    ['its crazyyyy', 'es una locuraaa'], ['you literally just ate', 'literalmente acabas de comer'],
    ['third dinner it is', 'entonces será la tercera cena'],
    ['unknown number', 'número desconocido'], ['kindly send', 'por favor envía'],
    ['gift card', 'tarjeta de regalo'], ['emma the cat', 'emma la gata'],
    ['webfolio ideas', 'ideas para el webfolio'], ['more cats', 'más gatos'],
    ['secret nokia games', 'juegos secretos de Nokia'], ['spam folder', 'carpeta de spam'],
    ['capybara easter egg', 'easter egg del chigüire'],
    ['post pastflash', 'publicar en Pastflash'], ['playlist story', 'historia de playlist'],
    ['update my digital crib', 'actualizar My Digital Crib'], ['touch grass', 'salir a tocar pasto'],
    ['cat food', 'comida para gatos'], ['creator shortlist', 'lista de creadores'],
    ['campaign systems', 'sistemas de campañas'], ['marketing specialist', 'especialista en marketing'],
    ['collaborations manager', 'gerente de colaboraciones'], ['account manager', 'gerente de cuentas'],
    ['executive assistant', 'asistente ejecutiva'], ['bids sourcer assistant', 'asistente de búsqueda de licitaciones'],
    ['creator sourcing & outreach', 'búsqueda y contacto de creadores'],
    ['campaign ops', 'operaciones de campañas'], ['creative direction', 'dirección creativa'],
    ['ai tools & automation', 'herramientas de IA y automatización'],
    ['english c1', 'inglés C1'], ['spanish native', 'español nativo'],
    ['photo & video', 'foto y video'], ['partly cloudy', 'parcialmente nublado'],
    ['featured videos', 'videos destacados'], ['featured album', 'álbum destacado'],
    ['tap to download', 'toca para descargar'], ['open full pdf', 'abrir PDF completo'],
    ['linkedin, website, portfolio', 'LinkedIn, sitio web, portfolio'],

    /* XP portfolio windows */
    ['i\'m a bilingual web designer, ai specialist and influencer marketing specialist based in buenos aires', 'soy una diseñadora web bilingüe, especialista en IA y marketing de influencers radicada en Buenos Aires'],
    ['working at the intersection of creativity, systems, and technology', 'trabajo en la intersección de creatividad, sistemas y tecnología'],
    ['with a background in photography and creative direction', 'con experiencia en fotografía y dirección creativa'],
    ['i design websites and digital experiences that combine strong visual direction, storytelling, and personality', 'diseño sitios web y experiencias digitales que combinan una dirección visual sólida, narrativa y personalidad'],
    ['i bring that same eye to fast-moving marketing teams', 'llevo esa misma mirada a equipos de marketing dinámicos'],
    ['i love turning complex workflows into organized systems and creative ideas into clear, measurable results', 'me encanta convertir flujos complejos en sistemas organizados e ideas creativas en resultados claros y medibles'],
    ['designing websites and digital portfolios that combine strong visual direction, clear structure, storytelling, and personality', 'diseño sitios web y portfolios digitales que combinan dirección visual, estructura clara, narrativa y personalidad'],
    ['from concept and visual research to design, copy direction, and final delivery', 'desde el concepto y la investigación visual hasta el diseño, la dirección de textos y la entrega final'],
    ['led end-to-end execution of influencer campaigns', 'lideré la ejecución integral de campañas de influencers'],
    ['creator sourcing, outreach, negotiations, briefing, and performance tracking', 'búsqueda de creadores, contacto, negociaciones, briefing y seguimiento de rendimiento'],
    ['built internal systems for campaign tracking and intake', 'creé sistemas internos para seguimiento y recepción de campañas'],
    ['connecting storytelling with measurable growth', 'conectando narrativa con crecimiento medible'],
    ['led influencer discovery and outreach', 'lideré el descubrimiento y contacto con influencers'],
    ['managed documentation workflows', 'gestioné flujos de documentación'],
    ['contributed to an organized influencer tracking system across creative and operations teams', 'contribuí a un sistema organizado de seguimiento de influencers entre equipos creativos y operativos'],
    ['oversaw multiple client projects', 'supervisé múltiples proyectos de clientes'],
    ['optimized accounts across three models', 'optimicé cuentas en tres modelos'],
    ['doubled key account metrics through data-driven insights', 'dupliqué métricas clave mediante análisis basados en datos'],
    ['managed calendars, coordinated high-level meetings, reviewed scopes of work', 'gestioné calendarios, coordiné reuniones ejecutivas y revisé alcances de trabajo'],
    ['improved project alignment and communication', 'mejoré la alineación y comunicación de proyectos'],
    ['created cinematic and editorial portraits for influencers and personal brands', 'creé retratos cinematográficos y editoriales para influencers y marcas personales'],
    ['the foundation of how i approach visual storytelling, creative direction, and web design today', 'la base de cómo abordo hoy la narrativa visual, la dirección creativa y el diseño web'],
    ['i\'m naturally systems-oriented and constantly exploring new tools', 'me orientan naturalmente los sistemas y exploro nuevas herramientas constantemente'],
    ['especially ai and automation', 'especialmente IA y automatización'],
    ['to improve how teams work', 'para mejorar cómo trabajan los equipos'],
    ['whether it\'s building workflows in notion, automating processes with zapier or make', 'ya sea creando flujos en Notion o automatizando procesos con Zapier o Make'],
    ['experimenting with new ai tools', 'experimentando con nuevas herramientas de IA'],
    ['i love finding smarter ways to work', 'me encanta encontrar formas más inteligentes de trabajar'],
    ['outside of my day-to-day work', 'fuera de mi trabajo cotidiano'],
    ['i enjoy building creative digital projects, designing interactive portfolio experiences', 'disfruto crear proyectos digitales y experiencias interactivas de portfolio'],
    ['experimenting with nostalgic ui concepts', 'experimentar con conceptos de interfaz nostálgicos'],
    ['influencer marketing specialist', 'especialista en marketing de influencers'],
    ['freelance web designer', 'diseñadora web freelance'],
    ['photographer & creative director', 'fotógrafa y directora creativa'],
    [' – present', ' – actualidad'], ['aug ', 'ago '], ['apr ', 'abr '], ['dec ', 'dic '],
    ['▶ menu', '▶ menú'], ['sun ', 'dom '], ['mon ', 'lun '], ['tue ', 'mar '],
    ['wed ', 'mié '], ['thu ', 'jue '], ['fri ', 'vie '], ['sat ', 'sáb '],
    [' and ', ' y '], [' or ', ' o '],
    ['pro tip: click the sun! it\'s not just decoration', 'consejo: ¡haz clic en el sol! no es solo decoración'],
    ['the real portfolio was the friends we made along the way', 'el verdadero portfolio fueron las amistades que hicimos en el camino']
  ];

  var ORDERED_PHRASES = PHRASES.slice().sort(function (a, b) {
    return b[0].length - a[0].length;
  });

  var originalText = new WeakMap();
  var translatedText = new WeakMap();
  var originalAttrs = new WeakMap();
  var language = readLanguage();
  var observer = null;

  function readLanguage() {
    try { return localStorage.getItem('pr_lang') === 'es' ? 'es' : 'en'; }
    catch (error) { return 'en'; }
  }

  function preserveCase(source, translated) {
    if (source === source.toUpperCase() && /[A-Z]/.test(source)) return translated.toUpperCase();
    if (/^[A-ZÁÉÍÓÚÑ]/.test(source) && source.slice(1) === source.slice(1).toLowerCase()) {
      return translated.charAt(0).toUpperCase() + translated.slice(1);
    }
    return translated;
  }

  function escapeRegExp(value) { return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function translateCore(core) {
    if (!core || /^[\d\s:.,+\-–—•●★☆♥♡<>#%$€£¥/\\()[\]{}]+$/.test(core)) return core;
    if (/^(https?:\/\/|www\.|[^\s]+@[^\s]+\.)/i.test(core)) return core;
    var exact = EXACT[core.toLowerCase()];
    if (exact) return preserveCase(core, exact);
    var decorated = core.match(/^([^A-Za-zÀ-ÿ0-9]*)(.*?)([^A-Za-zÀ-ÿ0-9]*)$/);
    if (decorated) {
      var decoratedExact = EXACT[decorated[2].toLowerCase()];
      if (decoratedExact) return decorated[1] + preserveCase(decorated[2], decoratedExact) + decorated[3];
    }
    var result = core;
    for (var i = 0; i < ORDERED_PHRASES.length; i++) {
      var pattern = new RegExp(escapeRegExp(ORDERED_PHRASES[i][0]), 'gi');
      result = result.replace(pattern, ORDERED_PHRASES[i][1]);
    }
    return result;
  }

  function translateValue(value) {
    var match = String(value).match(/^(\s*)([\s\S]*?)(\s*)$/);
    return match[1] + translateCore(match[2]) + match[3];
  }

  function shouldSkip(node) {
    var parent = node.parentElement;
    if (!parent) return true;
    return /^(SCRIPT|STYLE|NOSCRIPT|CODE|PRE|TEXTAREA)$/i.test(parent.tagName) || parent.closest('[data-no-translate]');
  }

  function translateTextNode(node) {
    if (shouldSkip(node) || !node.nodeValue.trim()) return;
    var lastTranslation = translatedText.get(node);
    if (!originalText.has(node) || (lastTranslation !== undefined && node.nodeValue !== lastTranslation)) {
      originalText.set(node, node.nodeValue);
    }
    var original = originalText.get(node);
    var next = language === 'es' ? translateValue(original) : original;
    translatedText.set(node, next);
    if (node.nodeValue !== next) node.nodeValue = next;
  }

  function translateAttributes(element) {
    if (!(element instanceof Element) || element.closest('[data-no-translate]')) return;
    var names = ['title', 'aria-label', 'placeholder', 'alt'];
    var saved = originalAttrs.get(element) || {};
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      if (!element.hasAttribute(name)) continue;
      var current = element.getAttribute(name);
      if (!(name in saved)) saved[name] = current;
      var next = language === 'es' ? translateValue(saved[name]) : saved[name];
      if (current !== next) element.setAttribute(name, next);
    }
    if (element instanceof HTMLInputElement && /^(button|submit|reset)$/i.test(element.type)) {
      if (!('value' in saved)) saved.value = element.value;
      var value = language === 'es' ? translateValue(saved.value) : saved.value;
      if (element.value !== value) element.value = value;
    }
    originalAttrs.set(element, saved);
  }

  function translateTree(root) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) { translateTextNode(root); return; }
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE && root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) return;
    if (root.nodeType === Node.ELEMENT_NODE) translateAttributes(root);
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    var current;
    while ((current = walker.nextNode())) {
      if (current.nodeType === Node.TEXT_NODE) translateTextNode(current);
      else translateAttributes(current);
    }
  }

  function setLanguage(nextLanguage, options) {
    language = nextLanguage === 'es' ? 'es' : 'en';
    document.documentElement.lang = language;
    if (!options || options.persist !== false) {
      try { localStorage.setItem('pr_lang', language); } catch (error) {}
    }
    translateTree(document.body || document.documentElement);
    try { document.dispatchEvent(new CustomEvent('crib:i18n', { detail:{ language:language } })); } catch (error) {}
    return language;
  }

  function start() {
    setLanguage(language, { persist:false });
    observer = new MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i++) {
        if (mutations[i].type === 'characterData') translateTextNode(mutations[i].target);
        for (var j = 0; j < mutations[i].addedNodes.length; j++) translateTree(mutations[i].addedNodes[j]);
      }
    });
    try {
      observer.observe(document.documentElement, { childList:true, subtree:true, characterData:true });
    } catch (error) {
      observer = null;
    }
    [0, 250, 900].forEach(function (delay) {
      setTimeout(function () { if (language === 'es') translateTree(document.body); }, delay);
    });
    if (!observer) {
      setInterval(function () { if (language === 'es') translateTree(document.body); }, 1200);
    }
  }

  window.CribI18n = { setLanguage:setLanguage, getLanguage:function () { return language; }, translateTree:translateTree };
  window.addEventListener('message', function (event) {
    if (!event.data || event.data.type !== 'crib-language') return;
    setLanguage(event.data.language);
  });
  document.addEventListener('cribLanguageChanged', function (event) {
    if (event.detail && event.detail.language) setLanguage(event.detail.language);
  });
  window.addEventListener('storage', function (event) {
    if (event.key === 'pr_lang') setLanguage(event.newValue);
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once:true });
  else start();
})();
