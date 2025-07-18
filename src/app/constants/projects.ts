
export interface Project {
  title: string;
  description: string;
  period: string;
  image: string;
  tags: string[];
  collaborators?: string[];
  codeUrl?: string;
  liveUrl?: string;
  images?: string[];
}

export const PROJECTS: Project[] = [
  {
    title: 'Totem - Clinica Intenacional',
    description: 'Aplicación de autoservicio para pagos y check-in de pacientes.',
    period: 'Septiembre. 2024 – Febrero 2025',
    image: 'assets/img/totem-home.jpg',
    tags: ['Angular16', 'TypeScript','NgRx', 'AzureDevops', 'Google Cloud', 'Google Analytics', 'Microservicios'],
    liveUrl: 'https://clinicainternacional.com.pe/',
    images: [
    'assets/img/totem-1.jpg',
    'assets/img/totem-2.svg',
    'assets/img/totem-3.svg',
    'assets/img/totem-4.svg',
    'assets/img/totem-5.svg',
    'assets/img/totem-6.svg',
    'assets/img/totem-7.svg',
    'assets/img/totem-8.svg',
  ],
  },
  {
    title: 'Backoffice - Clinica Internacional',
    description: 'Sistema de backoffice para la gestión administrativa de citas pagadas y visualización de de transacciones, generación de reportes y anulación de pagos.',
    period: 'Marzo 2025 – Abril 2025',
    image: 'assets/img/backoffice-login.svg',
    images: [
    'assets/img/bo-ci-1.svg',
    'assets/img/bo-ci-2.svg',
    'assets/img/bo-ci-4.svg',
    'assets/img/bo-ci-5.svg',
    'assets/img/bo-ci-6.svg',
  ],
    tags: ['Angular16','TypeScript', 'NgRx', 'AzureDevops', 'Google Cloud', 'Google Analytics','Microservicios'],
    liveUrl: 'https://clinicainternacional.com.pe/',
  },
  {
    title: 'Saldos y Movimientos consolidados - Interbank Empresa',
    description: 'Sistema web que permite a los clientes empresariales consultar sus saldos y movimientos consolidados de cuentas',
    period: 'Enero 2024  – Marzo 2024',
    image: 'assets/img/interbank-empresa-saldos.svg',
    images: [
      'assets/img/saldo-mov-2.svg',
      'assets/img/saldo-mov-3.svg',
      'assets/img/saldo-mov-4.jpg',
      'assets/img/saldo-mov-5.svg',
      'assets/img/saldo-mov-6.svg',
    ],
    tags: ['Angular16', 'TypeScript', 'AzureDevops', 'Karma', 'Jasmine','Angular Material', 'Adobe Analytics'],
    liveUrl: 'https://empresas.interbank.pe/login',
  },
  {
    title: 'Módulo Cuentas MT940 - Interbank Empresa - Intranet',
    description: 'Sistema de intranet que permite a los clientes empresariales la descarga y buscar sus estados de cuenta en formato MT940.',
    period: 'Enero 2024  – Marzo 2024',
    image: 'assets/img/intranet-MT940.svg',
    images: [
      'assets/img/mt-1.svg',
      'assets/img/mt-2.svg',
      'assets/img/mt-3.svg',
      'assets/img/mt-4.jpg',
    ],
    tags: ['Angular16', 'TypeScript', 'AzureDevops', 'Karma', 'Jasmine','Angular Material', 'Adobe Analytics'],
    liveUrl: 'https://empresas.interbank.pe/login',
  },
  {
    title: 'Prepago de préstamo - Interbank Persona',
    description: 'Sistema web que permite a los clientes la cancelación de préstamos desde la web eliminando la necesidad de ir a una agencia.',
    period: 'Septiembre 2021  – Diciembre 2024',
    image: 'assets/img/interbank-persona.jpg',
    tags: ['Vue.js', 'AzureDevops', 'Cipress', 'Tailwind CSS', 'Adobe Analytics'],
    liveUrl: 'https://bancaporinternet.interbank.pe/login#/login',
  },
  {
    title: 'Login - Interbank Persona',
    description: 'Implementarción de CIAM (Customer Identity and Access Management) para la autenticación de clientes en la web',
    period: 'Jun 2023 – Jul 2023',
    image: 'assets/img/interbank-login.jpg',
     images: [
      'assets/img/login-1.jpg',
      'assets/img/login-2.jpg',
      'assets/img/login-3.jpg',
      'assets/img/login-4.jpg',
      'assets/img/login-5.jpg',
      'assets/img/login-6.jpg',
    ],
    tags: ['Vue.js', 'Cipress', 'Tailwind CSS', 'Adobe Analytics','AzureDevops'],
    liveUrl: 'https://bancaporinternet.interbank.pe/login#/login',
  },
  {
    title: 'Web Convergente - Movistar',
    description: 'Sistema web que permite visualizar ofertas y beneficios para seleccionar y activar productos de Movistar.',
    period: 'Jan 2024 – Dec 2023',
    image: 'assets/img/movistar-home.jpg',
    images: [
      'assets/img/movistar-home.jpg',
      'assets/img/mo-1.png',
      'assets/img/mo-2.png',
      'assets/img/mo-3.png',
      'assets/img/mo-4.png',
      'assets/img/mo-5.png',
      'assets/img/mo-6.png',
      'assets/img/mo-7.png',
    ],
    tags: ['Angular','Angular Material', 'SqlServer','IBM Cloud'],
    liveUrl: 'https://movistaronline.pe/hogar/movistar-total?tsource=7627&gad_source=1&gad_campaignid=21914776950&gbraid=0AAAAAqBHL5B5XfDjBDn1apRd3H6pnZcxf&gclid=CjwKCAjwyb3DBhBlEiwAqZLe5Go2J_Zp_X2Qu-pbVZwbLSTBT4fAS_vluLU1Rur5Hxl1HuvIRlP2tBoCbGAQAvD_BwE',
  },
  {
    title: 'BackOffice - Movistar',
    description: 'Sistema web que permite visualizar ofertas y beneficios para seleccionar y activar productos de Movistar.',
    period: 'Jan 2024 – Dec 2023',
    image: 'assets/img/backoffice-movistar.jpg',
    images: [
      'assets/img/lma-mo-1.png',
      'assets/img/lma-mo-2.png',
      'assets/img/lma-mo-3.png',
      'assets/img/lma-mo-4.png',
      'assets/img/lma-mo-5.png',
      'assets/img/lma-mo-6.png',
      'assets/img/lma-mo-7.png',
      'assets/img/lma-mo-8.png',
    ],
    tags: ['Angular','Angular Material', 'SqlServer','IBM Cloud'],
    liveUrl: 'https://movistaronline.pe/hogar/movistar-total?tsource=7627&gad_source=1&gad_campaignid=21914776950&gbraid=0AAAAAqBHL5B5XfDjBDn1apRd3H6pnZcxf&gclid=CjwKCAjwyb3DBhBlEiwAqZLe5Go2J_Zp_X2Qu-pbVZwbLSTBT4fAS_vluLU1Rur5Hxl1HuvIRlP2tBoCbGAQAvD_BwE',
  },
  {
    title: 'LinkMiners',
    description: 'Sistema web para la industria minera que permite la gestión de proyectos, recursos y tareas a funcionarios mineros y empresas proveedoras.',
    period: 'Jan 2024 – Dec 2023',
    image: 'assets/img/linkminers-home.jpg',
    images: [
      'assets/img/linkminers-home.jpg',
      'assets/img/miners-1.svg',
      'assets/img/miners-3.svg',
    ],
    tags: ['Vue.js','Bootstrap','AWS'],
    liveUrl: 'https://www.linkminers.com/',
  },
  {
    title: 'LMS - VitaPro',
    description: 'A Rule Builder application “Decision Hub” that empowers Business Analysts...',
    period: 'Jan 2024 – Dec 2023',
    image: 'assets/img/vitapro-lms.svg',
    images: [
      'assets/img/vitapro-lms.svg',
      'assets/img/vita-1.jpg',
      'assets/img/vita-2.jpg',
      'assets/img/vita-3.jpg',
      'assets/img/vita-4.jpg',
      'assets/img/vita-5.jpg',
      'assets/img/vita-6.jpg',
    ],
    tags: ['Vue.js','Bootstrap','AWS'],
    liveUrl: 'https://vitapro.com.pe/nosotros/',
  },
  {
    title: 'LMS - Alicorp',
    description: 'Sistema de gestión de aprendizaje (LMS) para la capacitación y desarrollo de empleados.',
    period: 'Jan 2024 – Dec 2023',
    image: 'assets/img/alicorp-lms.svg',
    images: [
      'assets/img/alicorp-lms.svg',
      'assets/img/alicorp-1.jpg',
      'assets/img/alicorp-2.jpg',
      'assets/img/alicorp-3.jpg',
      'assets/img/alicorp-4.jpg',
      'assets/img/alicorp-5.jpg',
      'assets/img/alicorp-6.jpg',
      'assets/img/alicorp-7.jpg',
      'assets/img/alicorp-8.jpg',
      'assets/img/alicorp-9.jpg',
    ],
    tags: ['Vue.js','Bootstrap','AWS'],
    liveUrl: 'hhttps://www.alicorp.com.pe/pe/es',
  }
];
