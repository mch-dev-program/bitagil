export const NAV_LINKS = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Portafolio', href: '/portafolio' },
  { label: 'Contacto', href: '/contacto' },
]

export const SOCIAL_LINKS = [
  { label: 'WhatsApp', href: 'https://wa.me/18495235144', icon: 'whatsapp' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1J21QCV1X7/?mibextid=wwXIfr', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/bit.agil?igsh=aG1kYng5ZmdyeWVx', icon: 'instagram' },
]

export const SERVICES = [
  {
    id: 'web',
    tag: 'DESARROLLO',
    title: 'Desarrollo Web',
    description: 'Aplicaciones full-stack, e-commerce y landing pages de alto rendimiento construidas para convertir.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'marketing',
    tag: 'CRECIMIENTO',
    title: 'Marketing Digital',
    description: 'Estrategias SEO, SEM y analítica orientadas a resultados medibles, no a vanity metrics.',
    tags: ['SEO', 'Google Analytics', 'SEM', 'CRO'],
  },
  {
    id: 'social',
    tag: 'ALCANCE',
    title: 'Publicidad & Redes',
    description: 'Gestión de campañas en Meta y Google Ads con creativos a medida y optimización continua.',
    tags: ['Meta Ads', 'Google Ads', 'Contenido', 'Copywriting'],
  },
  {
    id: 'servers',
    tag: 'INFRAESTRUCTURA',
    title: 'Administración de Servidores',
    description: 'Configuración de stacks Linux, Docker, CI/CD y monitoreo 24/7 para equipos que no pueden parar.',
    tags: ['Linux', 'Docker', 'Nginx', 'CI/CD'],
  },
  {
    id: 'databases',
    tag: 'DATOS',
    title: 'Administración de DBs',
    description: 'Diseño, optimización, backups automatizados y migraciones sin downtime de bases relacionales y NoSQL.',
    tags: ['PostgreSQL', 'MySQL', 'Redis', 'Backups'],
  },
  {
    id: 'saas',
    tag: 'PLATAFORMAS',
    title: 'Sistemas SaaS',
    description: 'Plataformas multi-tenant a medida con módulos de autenticación, facturación y roles de usuario.',
    tags: ['Multi-tenant', 'API REST', 'Auth', 'Billing'],
  },
]

export const STATS = [
  { numeric: 30,    decimals: 0, suffix: '+',     label: 'Proyectos' },
  { numeric: 4,     decimals: 0, suffix: ' años', label: 'Experiencia' },
  { numeric: 99.97, decimals: 2, suffix: '%',     label: 'Uptime' },
]

export const TESTIMONIALS = [
  {
    quote: 'El sistema que nos construyó BitAgil reemplazó tres herramientas distintas que usábamos. El ROI fue visible desde el primer trimestre.',
    name: 'Mariana Delgado',
    role: 'CEO · Trivanza Properties',
    metric: '+280% leads',
    color: '#4F6EF7',
  },
  {
    quote: 'En 48 horas ya teníamos nuestra primera venta online. No esperaba esa velocidad de ejecución.',
    name: 'Felipe Castro',
    role: 'Fundador · MercadoRápido',
    metric: '+340% tráfico',
    color: '#FF5C3A',
  },
  {
    quote: 'La migración a Docker era lo que más miedo nos daba. BitAgil la convirtió en la parte más tranquila del año.',
    name: 'Luis Herrera',
    role: 'CTO · CloudStack Latam',
    metric: '99.97% uptime',
    color: '#22C55E',
  },
]

export const FAQ = [
  {
    q: '¿Cuánto tiempo tarda un proyecto web típico?',
    a: 'Depende del alcance, pero manejamos tiempos de 2 a 10 semanas. Las landing pages y sitios simples salen en 2–3 semanas. Los sistemas SaaS o plataformas complejas entre 6 y 10 semanas. Siempre acordamos un timeline claro antes de empezar.',
  },
  {
    q: '¿Puedo contratar un solo servicio o debo tomar el paquete completo?',
    a: 'Podés contratar exactamente lo que necesitás. Tenemos clientes que solo gestionan sus servidores con nosotros, otros que solo corren campañas, y otros que usan el stack completo. Sin ataduras.',
  },
  {
    q: '¿Trabajan con clientes fuera de LATAM?',
    a: 'Sí. Operamos 100% remoto y tenemos clientes en Estados Unidos, España y México. El idioma de trabajo es español, pero nos manejamos en inglés sin problema.',
  },
  {
    q: '¿Qué incluye la administración de servidores?',
    a: 'Configuración inicial del stack (Linux, Nginx, Docker), CI/CD pipelines, monitoreo 24/7 con alertas automáticas, backups diarios y soporte ante incidentes. Todo documentado y con acceso completo para el cliente.',
  },
  {
    q: '¿Cómo es el proceso de pago?',
    a: 'Trabajamos con 50% al inicio y 50% al entregar. Para servicios mensuales (servidores, campañas) cobramos por adelantado cada mes. Aceptamos transferencia, PayPal y cripto.',
  },
]

export const PROJECTS = [
  {
    title: 'Trivanza Properties',
    category: 'Plataforma SaaS',
    description: 'Sistema de gestión inmobiliaria con CRM, portal de propiedades y módulo de ROI automatizado. Lanzado en 10 semanas.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    result: '+280% leads mensuales',
    color: '#4F6EF7',
    url: 'https://www.trivanzapropertiesrd.com.do',
  },
  {
    title: 'MercadoRápido',
    category: 'E-commerce + Marketing',
    description: 'Tienda online con campañas de Google Shopping y Meta Ads integradas al panel. Primer venta a las 48h del lanzamiento.',
    tech: ['Next.js', 'Stripe', 'Meta Ads'],
    result: '+340% tráfico orgánico',
    color: '#FF5C3A',
  },
  {
    title: 'CloudStack Latam',
    category: 'DevOps & Infraestructura',
    description: 'Migración de infraestructura legacy a contenedores Docker con pipelines CI/CD y alertas automáticas.',
    tech: ['Docker', 'Linux', 'CI/CD'],
    result: '99.97% uptime sostenido',
    color: '#22C55E',
  },
]

export const OPS_EVENTS_POOL = [
  { type: 'deploy', icon: '↑', label: 'Deployed', target: 'trivanza-api v2.4.1' },
  { type: 'active', icon: '●', label: 'Active', target: '5 campaigns / Google Ads' },
  { type: 'ssl',    icon: '✓', label: 'Renewed', target: 'SSL cert — cloudstack.io' },
  { type: 'scale',  icon: '⟳', label: 'Scaled', target: 'mercadorapido-db ×3' },
  { type: 'active', icon: '●', label: 'Monitoring', target: '3 servers — all green' },
  { type: 'deploy', icon: '↑', label: 'Deployed', target: 'bitagil-web v1.0.0' },
  { type: 'scale',  icon: '⟳', label: 'Backed up', target: 'prod-postgres — 2.1 GB' },
  { type: 'active', icon: '●', label: 'Active', target: '8 Meta campaigns running' },
  { type: 'deploy', icon: '↑', label: 'Released', target: 'saas-billing v1.2.3' },
  { type: 'ssl',    icon: '✓', label: 'Renewed', target: 'SSL cert — bitagil.io' },
]
