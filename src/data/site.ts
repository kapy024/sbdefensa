export const site = {
  name: "SBDefensa",
  legalName: "Sámano Burkolter — Defensa Fiscal & Contable",
  tagline: "Defensa Fiscal & Contable",
  foundedYear: 2021,
  description:
    "Firma legal y contable que defiende a contribuyentes y empresariado en temas fiscales, societarios, administrativos y de propiedad industrial a nivel nacional.",
  url: "https://sbdefensa.com.mx",
  email: "defensa.fiscal@sbdefensa.com.mx",
  phones: [
    { label: "CDMX", number: "555-101-28-10", tel: "5551012810" },
    { label: "Chihuahua", number: "614-193-86-50", tel: "6141938650" },
  ],
  primaryPhone: "6141938650",
  whatsapp: "5216141938650",
  location: "Chihuahua, Chihuahua, México",
  coverage: "Cobertura nacional",
} as const;

export const services = [
  {
    slug: "defensa-fiscal",
    name: "Defensa Fiscal",
    short: "Controvertir créditos fiscales, multas y procedimientos del SAT.",
    icon: "⚖️",
    featured: true,
    bullets: [
      "Juicios de Nulidad ante el Tribunal Federal de Justicia Administrativa",
      "Recursos de Revocación ante el SAT a nivel nacional",
      "Juicios de Amparo ante Juzgados de Distrito, Tribunales Colegiados y SCJN",
      "Atención a visitas domiciliarias, revisiones de gabinete y revisiones electrónicas",
      "Procedimiento Administrativo de Ejecución (PAE) e impugnaciones",
      "Garantías del interés fiscal y suspensión de cobros",
      "Devoluciones de saldos a favor y pagos de lo indebido",
      "Acuerdos Conclusivos y Quejas ante PRODECON",
      "Solicitudes de pago en parcialidades y condonaciones",
    ],
  },
  {
    slug: "contable",
    name: "Servicios Contables",
    short:
      "Cumplimiento de obligaciones fiscales y contabilidad para personas físicas y morales.",
    icon: "📊",
    featured: true,
    bullets: [
      "Contabilidad mensual y anual",
      "Cumplimiento de obligaciones fiscales en general",
      "Declaraciones provisionales y anuales",
      "Conciliaciones, papeles de trabajo y cierres",
      "Diagnóstico fiscal preventivo",
      "Asesoría continua en estrategia fiscal",
    ],
  },
  {
    slug: "aduanero-comex",
    name: "Aduanero y Comercio Exterior",
    short: "PAMA, padrón de importadores, clasificación arancelaria.",
    icon: "🚢",
    bullets: [
      "Atención y seguimiento a Procedimientos Administrativos en Materia Aduanera (PAMA)",
      "Recurso de Revocación en materia aduanera",
      "Juicio de Nulidad contra PAMA y créditos por impuestos al comercio exterior",
      "Consultas para determinación de clasificación arancelaria",
      "Inscripción y cancelación del Padrón de Importadores",
      "Impugnación de sanciones y suspensiones del padrón",
      "Suspensión de embargos precautorios y regulación de mercancía",
      "Acuerdos Conclusivos en materia de comercio exterior",
    ],
  },
  {
    slug: "seguridad-social",
    name: "Seguridad Social",
    short: "Recursos y juicios contra IMSS e INFONAVIT.",
    icon: "🛡️",
    bullets: [
      "Recursos de Inconformidad ante IMSS e INFONAVIT",
      "Juicios de Nulidad contra resoluciones del IMSS e INFONAVIT",
      "Determinación de capitales constitutivos, multas e incapacidades",
      "Atención a facultades de comprobación de organismos de seguridad social",
      "Procedimiento Administrativo de Ejecución, impugnaciones y suspensiones",
      "Solicitudes de devolución por pagos injustificados",
      "Asesoría para el cumplimiento de obligaciones",
    ],
  },
  {
    slug: "corporativo",
    name: "Derecho Corporativo",
    short: "Constitución, reestructura y vida societaria.",
    icon: "🏢",
    bullets: [
      "Constitución de sociedades mercantiles y civiles",
      "Constitución de asociaciones civiles",
      "Reestructura de sociedades (objetos sociales y accionaria)",
      "Planificación de fusión, escisión y liquidación",
      "Elaboración de actas de asamblea ordinarias y extraordinarias",
      "Registro ante la STPS (actividades especializadas, ex-outsourcing)",
    ],
  },
  {
    slug: "propiedad-industrial",
    name: "Propiedad Industrial",
    short: "Registro de marcas, patentes y secretos industriales ante el IMPI.",
    icon: "™️",
    bullets: [
      "Registro de marcas, logotipos, avisos y nombres comerciales",
      "Registro de denominaciones, formas tridimensionales, sonidos y empaques",
      "Patentes por invención, modelos de utilidad y diseños industriales",
      "Esquemas de trazado de circuitos integrados",
      "Renuncia, rectificación y limitación de derechos",
      "Convenios de confidencialidad y protección de secretos industriales",
      "Litigio y juicios de amparo en materia de PI",
    ],
  },
  {
    slug: "piorpi",
    name: "Actividades Vulnerables (PIORPI)",
    short: "Cumplimiento de la Ley Antilavado para sujetos obligados.",
    icon: "🔒",
    bullets: [
      "Identificación de sujetos obligados en materia de Actividades Vulnerables",
      "Cumplimiento de obligaciones de la Ley PIORPI",
      "Elaboración de manuales y políticas de cumplimiento",
      "Expedientes de identificación de clientes",
      "Asesoría en operación cotidiana y reportes",
    ],
  },
  {
    slug: "administrativo",
    name: "Derecho Administrativo",
    short: "Defensa frente a sanciones y trámites con autoridades.",
    icon: "📋",
    bullets: [
      "Litigio e impugnación contra PROFECO, PROFEPA, Policía Federal, STPS, CONAGUA, COFEPRIS",
      "Recursos de revisión ante autoridades administrativas",
      "Atención de visitas de verificación y desahogo de requerimientos",
      "Tramitación de permisos y autorizaciones ante Municipios",
      "Impugnación de sanciones ante Tribunales Administrativos Locales y Federales",
    ],
  },
] as const;

export const team = [
  {
    slug: "luis-rodriguez-samano",
    name: "Luis Eduardo Rodríguez Sámano",
    role: "Director y Consultor",
    title: "Mtro. en Derecho Fiscal y Administrativo",
    specialties:
      "Derecho Fiscal, Administrativo, Amparo y Aduanero",
    bio: [
      "Maestro en Derecho Fiscal y Administrativo, con más de quince años defendiendo contribuyentes desde dentro y fuera de la administración pública.",
      "Su trayectoria combina la visión del defensor del contribuyente con la del juzgador: una perspectiva poco común que le permite anticipar criterios de tribunal.",
    ],
    credentials: [
      "Delegado Estatal en Chihuahua de PRODECON, durante 4 años 1 mes",
      "Delegado Coordinador en la Zona Norte de PRODECON (BC, BCS, Sonora, Sinaloa, Chihuahua, Coahuila, Durango, Zacatecas, Nuevo León y Tamaulipas), 2018",
      "Subdelegado Estatal en Estado de México de PRODECON, durante 2 años",
      "Oficial Jurisdiccional del entonces Tribunal Federal de Justicia Fiscal y Administrativa, durante 4 años",
      "Abogado de la UNAM, adscrito a la Secretaría Jurídica y de Control Administrativo, durante 2 años",
    ],
  },
  {
    slug: "pierre-burkolter-carbajal",
    name: "Pierre Burkolter Carbajal",
    role: "Director y Consultor",
    title: "Defensa Fiscal y Contable",
    specialties: "Cumplimiento fiscal y servicios contables",
    bio: [
      "Director y Consultor de SBDefensa, con foco en el cumplimiento de obligaciones fiscales y la práctica contable de la firma.",
    ],
    credentials: [],
  },
] as const;

export const audiences = [
  {
    icon: "👤",
    name: "Personas físicas",
    desc: "Contribuyentes con créditos fiscales, multas o procedimientos del SAT, IMSS o INFONAVIT.",
  },
  {
    icon: "🏪",
    name: "Pymes",
    desc: "Pequeñas y medianas empresas que necesitan acompañamiento integral en materia fiscal, contable y societaria.",
  },
  {
    icon: "🏛️",
    name: "Corporativos",
    desc: "Empresas con esquemas complejos, visitas domiciliarias, revisiones electrónicas y litigio fiscal de alto valor.",
  },
  {
    icon: "🌐",
    name: "Importadores y Exportadores",
    desc: "Empresas con operación de comercio exterior: PAMA, padrón de importadores y clasificación arancelaria.",
  },
] as const;

export const differentiators = [
  {
    title: "Doble visión",
    desc: "Experiencia tanto del lado del contribuyente (PRODECON) como del lado del juzgador (TFJFA). Anticipamos criterios y argumentos.",
  },
  {
    title: "Cobertura nacional",
    desc: "Atendemos a contribuyentes en toda la República, con presencia en CDMX y Chihuahua y litigio ante autoridades federales.",
  },
  {
    title: "Defensa integral",
    desc: "Servicio fiscal, contable, corporativo y administrativo bajo un mismo techo. Estrategia coherente, sin saltar entre proveedores.",
  },
] as const;

export const faq = [
  {
    q: "¿Cómo funciona la primera asesoría?",
    a: "Agenda una llamada o reunión por nuestro formulario de contacto o vía WhatsApp. La primera valoración del caso es sin costo y nos permite entender el alcance del asunto antes de proponer una estrategia.",
  },
  {
    q: "¿Atienden casos fuera de Chihuahua y CDMX?",
    a: "Sí. Litigamos a nivel nacional ante el SAT, IMSS, INFONAVIT, IMPI, autoridades aduaneras y tribunales federales. La presencia física es en CDMX y Chihuahua, pero la representación legal aplica en todo el país.",
  },
  {
    q: "¿Cuál es el costo del servicio?",
    a: "Depende de la materia, complejidad y monto del asunto. Trabajamos con esquemas de iguala mensual, honorarios fijos por asunto o porcentaje de éxito según el caso. Te entregamos propuesta económica clara antes de iniciar.",
  },
  {
    q: "¿Qué hago si recibí una notificación del SAT, IMSS o INFONAVIT?",
    a: "Contáctanos lo antes posible. Los plazos para impugnar son fatales y perderlos puede dejarte sin defensa. Una vez recibida la documentación, evaluamos opciones: recurso administrativo, juicio de nulidad, amparo o gestión vía PRODECON.",
  },
  {
    q: "¿Llevan también la contabilidad?",
    a: "Sí. SBDefensa ofrece servicios contables y de cumplimiento fiscal: contabilidad mensual, declaraciones, conciliaciones, diagnóstico fiscal y asesoría continua. Es común que un cliente lleve con nosotros tanto la contabilidad como la defensa.",
  },
  {
    q: "¿Se puede contratar solo una asesoría puntual o tiene que ser una iguala?",
    a: "Ambas opciones existen. Atendemos consultas puntuales, opiniones legales por escrito, defensa de un asunto específico, o iguala continua para acompañamiento permanente.",
  },
] as const;
