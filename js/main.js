/**
 * SOS Plumbing & Electric Services
 * Main JavaScript File
 * Multi-language support, animations, and interactive features
 */

// ========================================
// Translations
// ========================================
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.services': 'Services',
        'nav.portfolio': 'Portfolio',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'SOS Plumbing & Electric Services',
        'hero.subtitle': 'Exceptional Solutions for Modern Living',
        'hero.experience': '20 Years of Experience',
        'hero.callNow': 'Call Now',
        'hero.viewServices': 'View Services',
        
        // About Section
        'about.title': 'About Us',
        'about.intro': 'SOS Plumbing & Electric Services: Exceptional Solutions for Modern Living',
        'about.description': 'SOS Plumbing & Electric Services is a distinguished provider of comprehensive plumbing and electrical solutions tailored to meet the needs of residential, commercial, and industrial clients. Known for prompt service, innovative approaches, and superior workmanship, SOS is committed to solving problems efficiently and effectively.',
        'about.visionTitle': 'Our Vision',
        'about.vision': 'To be the most trusted name in plumbing and electrical services, offering innovative solutions that improve the quality of life for our clients.',
        'about.missionTitle': 'Our Mission',
        'about.mission': 'To provide top-tier plumbing and electrical services with a focus on reliability, safety, and customer satisfaction while adopting sustainable practices for a better tomorrow.',
        'about.years': 'Years Experience',
        'about.projects': 'Projects Completed',
        'about.satisfaction': '% Satisfaction',
        'about.support': '/7 Support',
        'about.certified': 'Licensed & Certified',
        
        // Services Section
        'services.title': 'Our Services',
        'services.subtitle': 'Comprehensive Plumbing & Electrical Solutions',
        'services.plumbing.title': 'Plumbing Services',
        'services.plumbing.general': 'General Plumbing Repairs',
        'services.plumbing.waterHeater': 'Water Heater Services',
        'services.plumbing.drain': 'Drain & Sewer Solutions',
        'services.plumbing.piping': 'Piping and Repiping',
        'services.plumbing.waterTreatment': 'Water Treatment Systems',
        'services.plumbing.gasLine': 'Water Heater Gas Line',
        'services.plumbing.unclogging': 'Sewer Unclogging',
        'services.plumbing.leaks': 'Leak Detection & Repair',
        'services.electrical.title': 'Electrical Services',
        'services.electrical.general': 'General Electrical Repairs',
        'services.electrical.panel': 'Panel Upgrades',
        'services.electrical.lighting': 'Lighting Solutions',
        'services.electrical.smartHome': 'Smart Home Integrations',
        'services.electrical.emergency': 'Emergency Electrical Services',
        'services.electrical.wiring': 'Wiring & Outlets',
        'services.electrical.appliances': 'Appliance Installation',
        'services.hvac.title': 'HVAC Services',
        'services.hvac.heating': 'Heating Systems',
        'services.hvac.cooling': 'Cooling Systems',
        'services.hvac.maintenance': 'HVAC Maintenance',
        'services.hvac.repair': 'HVAC Repair',
        'services.hvac.installation': 'System Installation',
        'services.hvac.boiler': 'Boiler Services',
        'services.hvac.circulation': 'Circulation Systems',
        'services.specialized.badge': '24/7 Available',
        'services.specialized.title': 'Specialized Services',
        'services.specialized.emergency': '24/7 Emergency Services',
        'services.specialized.energy': 'Energy Efficiency Upgrades',
        'services.specialized.custom': 'Custom Solutions',
        'services.specialized.replacement': 'System Replacement',
        'services.specialized.inspection': 'Professional Inspection',
        
        // Video Section
        'video.title': 'Professional Service You Can Trust',
        'video.subtitle': '20 Years of Excellence in Plumbing, Electrical & HVAC Services',
        'video.callAction': 'Call 973-932-5740',
        
        // Portfolio Section
        'portfolio.title': 'Our Portfolio',
        'portfolio.subtitle': 'Recent Projects & Work',
        'portfolio.filter.all': 'All',
        'portfolio.filter.plumbing': 'Plumbing',
        'portfolio.filter.electrical': 'Electrical',
        'portfolio.filter.hvac': 'HVAC',
        'portfolio.item1': 'Plumbing Repair',
        'portfolio.item1Desc': 'Professional pipe repair and installation',
        'portfolio.item1Full': 'Expert plumbing repair services for residential and commercial properties. Our licensed plumbers handle pipe repairs, fixture installations, leak detection, and emergency plumbing solutions with 20 years of experience.',
        'portfolio.item2': 'Electrical Panel',
        'portfolio.item2Desc': 'Panel upgrade and installation',
        'portfolio.item2Full': 'Complete electrical panel upgrades and installations. We ensure your electrical system meets current safety standards and can handle your power demands with modern circuit breaker panels.',
        'portfolio.item3': 'HVAC System',
        'portfolio.item3Desc': 'Heating system repair and maintenance',
        'portfolio.item3Full': 'Comprehensive HVAC system repair and maintenance services. Our certified technicians provide heating and cooling solutions, system diagnostics, and preventive maintenance for optimal performance.',
        'portfolio.item4': 'Water Heater',
        'portfolio.item4Desc': 'Gas water heater installation',
        'portfolio.item4Full': 'Professional gas water heater installation and replacement services. We work with traditional and tankless water heaters, ensuring proper gas line connections and efficient operation.',
        'portfolio.item5': 'Pipe Replacement',
        'portfolio.item5Desc': 'Complete pipe replacement service',
        'portfolio.item5Full': 'Full-service pipe replacement for outdated or damaged plumbing systems. We use modern materials like PEX and copper for long-lasting, leak-free plumbing solutions.',
        'portfolio.item6': 'Bathroom Fixtures',
        'portfolio.item6Desc': 'Fixture installation and repair',
        'portfolio.item6Full': 'Expert installation and repair of bathroom fixtures including faucets, sinks, toilets, showers, and bathtubs. We ensure proper sealing and functionality for all plumbing fixtures.',
        'portfolio.item7': 'Heating Maintenance',
        'portfolio.item7Desc': 'Boiler and heating system maintenance',
        'portfolio.item7Full': 'Professional boiler and heating system maintenance to ensure efficient operation during cold months. Our services include system inspection, cleaning, and tune-ups for all heating equipment.',
        'portfolio.item8': 'Professional Service',
        'portfolio.item8Desc': 'Expert technicians at work',
        'portfolio.item8Full': 'Our team of licensed and certified professionals delivers exceptional service for all plumbing, electrical, and HVAC needs. We pride ourselves on quality workmanship and customer satisfaction.',
        
        // Contact Section
        'contact.title': 'Contact Us',
        'contact.subtitle': 'Get In Touch With Our Experts',
        'contact.address': 'Address',
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'contact.hours': 'Hours',
        'contact.hoursValue': 'Monday - Sunday: 24 Hours',
        'contact.available': 'Available 24/7',
        
        // Footer
        'footer.about': 'Your trusted partner for plumbing, electrical, and HVAC services in Newark, NJ. 20 years of excellence and 24/7 emergency support.',
        'footer.services': 'Services',
        'footer.plumbing': 'Plumbing',
        'footer.electrical': 'Electrical',
        'footer.hvac': 'HVAC',
        'footer.waterHeater': 'Water Heater',
        'footer.emergency': 'Emergency Services',
        'footer.quickLinks': 'Quick Links',
        'footer.contactInfo': 'Contact Info',
        'footer.design': 'Design by',
        'footer.rights': 'All Rights Reserved.',
        'footer.privacy': 'Privacy Policy',
        'footer.cookies': 'Cookie Policy',
        
        // Cookie Banner
        'cookie.message': 'We use cookies to improve your experience. By continuing to browse, you agree to our use of cookies.',
        'cookie.accept': 'Accept',
        
        // Portfolio Modal
        'portfolio.modal.details': 'Project Details',
        'portfolio.modal.requestQuote': 'Request a Quote',
        'portfolio.modal.services': 'Services Provided',
        'portfolio.modal.duration': 'Project Duration',
        'portfolio.modal.location': 'Location',
        
        // Legal Page
        'legal.titlePrivacy': 'Privacy & Cookie Policy | SOS Plumbing & Electric Services',
        'legal.privacyTab': 'Privacy Policy',
        'legal.cookiesTab': 'Cookie Policy',
        'legal.privacyTitle': 'Privacy Policy',
        'legal.cookiesTitle': 'Cookie Policy',
        'legal.lastUpdated': 'Last Updated:',
        'legal.date': 'January 2024',
        'legal.backToHome': 'Back to Home',
        'legal.privacyIntro': 'At SOS Plumbing & Electric Services, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.',
        'legal.privacySection1': '1. Information We Collect',
        'legal.privacySection1Text': 'We collect the following types of information:',
        'legal.privacyPersonal': '<strong>Personal Information:</strong> Name, phone number, email address, and service address when you contact us or request services.',
        'legal.privacyUsage': '<strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, and pages visited.',
        'legal.privacyCookies': '<strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze website traffic.',
        'legal.privacySection2': '2. How We Use Your Information',
        'legal.privacySection2Intro': 'We use the collected information for the following purposes:',
        'legal.privacyUse1': 'To provide and maintain our plumbing, electrical, and HVAC services.',
        'legal.privacyUse2': 'To respond to your inquiries and provide customer support.',
        'legal.privacyUse3': 'To schedule appointments and service calls.',
        'legal.privacyUse4': 'To send you important updates about your service.',
        'legal.privacyUse5': 'To improve our website and services.',
        'legal.privacyUse6': 'To comply with legal obligations.',
        'legal.privacySection3': '3. Information Sharing',
        'legal.privacySection3Text': 'We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:',
        'legal.privacyShare1': 'With service providers who assist in our operations (e.g., scheduling software providers).',
        'legal.privacyShare2': 'When required by law or to protect our rights and safety.',
        'legal.privacyShare3': 'With your explicit consent.',
        'legal.privacySection4': '4. Data Security',
        'legal.privacySection4Text': 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
        'legal.privacySection5': '5. Your Rights',
        'legal.privacySection5Intro': 'You have the following rights regarding your personal information:',
        'legal.privacyRight1': 'The right to access your personal data.',
        'legal.privacyRight2': 'The right to correct inaccurate data.',
        'legal.privacyRight3': 'The right to request deletion of your data.',
        'legal.privacyRight4': 'The right to opt-out of marketing communications.',
        'legal.privacyRight5': 'The right to data portability.',
        'legal.privacySection6': '6. Contact Us',
        'legal.privacySection6Text': 'If you have any questions about this Privacy Policy or our data practices, please contact us:',
        'legal.cookiesIntro': 'This Cookie Policy explains how SOS Plumbing & Electric Services uses cookies and similar technologies on our website. It explains what cookies are, how we use them, and how you can control them.',
        'legal.cookiesSection1': '1. What Are Cookies?',
        'legal.cookiesSection1Text': 'Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They help websites remember information about your visit, which can make it easier to visit the site again and make the site more useful to you.',
        'legal.cookiesSection2': '2. Types of Cookies We Use',
        'legal.cookiesEssential': 'Essential Cookies',
        'legal.cookiesEssentialText': 'These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. Without these cookies, the website cannot function properly.',
        'legal.cookiesPerformance': 'Performance Cookies',
        'legal.cookiesPerformanceText': 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the way our website works.',
        'legal.cookiesFunctional': 'Functional Cookies',
        'legal.cookiesFunctionalText': 'These cookies allow the website to remember choices you make (such as your language preference or the region you are in) and provide enhanced, more personalized features.',
        'legal.cookiesSection3': '3. Specific Cookies We Use',
        'legal.cookiesSpecific1': '<strong>Language Preference Cookie:</strong> Remembers your selected language preference for the website.',
        'legal.cookiesSpecific2': '<strong>Cookie Consent Cookie:</strong> Remembers whether you have accepted our cookie policy.',
        'legal.cookiesSpecific3': '<strong>Analytics Cookies:</strong> Help us understand website traffic and visitor behavior.',
        'legal.cookiesSection4': '4. How to Control Cookies',
        'legal.cookiesSection4Text': 'You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences through your browser settings:',
        'legal.cookiesBrowser': 'Browser Settings',
        'legal.cookiesBrowserText': 'Most web browsers allow you to control cookies through their settings. You can set your browser to accept all cookies, reject all cookies, notify you when a cookie is set, or delete cookies periodically.',
        'legal.cookiesSection5': '5. Contact Us',
        'legal.cookiesSection5Text': 'If you have any questions about our use of cookies, please contact us:',
        'legal.byPhone': 'By phone:',
        'legal.byEmail': 'By email:',
        'legal.byMail': 'By mail:'
    },
    es: {
        // Navigation
        'nav.home': 'Inicio',
        'nav.about': 'Somos',
        'nav.services': 'Servicios',
        'nav.portfolio': 'Portafolio',
        'nav.contact': 'Contacto',
        
        // Hero Section
        'hero.title': 'SOS Plomería y Electricidad',
        'hero.subtitle': 'Soluciones Excepcionales para la Vida Moderna',
        'hero.experience': '20 Años de Experiencia',
        'hero.callNow': 'Llamar Ahora',
        'hero.viewServices': 'Ver Servicios',
        
        // About Section
        'about.title': 'Sobre Nosotros',
        'about.intro': 'SOS Plomería y Electricidad: Soluciones Excepcionales para la Vida Moderna',
        'about.description': 'SOS Plomería y Electricidad es un proveedor distinguido de soluciones integrales de plomería y electricidad adaptadas para satisfacer las necesidades de clientes residenciales, comerciales e industriales. Conocido por su servicio rápido, enfoques innovadores y mano de obra superior, SOS está comprometido a resolver problemas de manera eficiente y efectiva.',
        'about.visionTitle': 'Nuestra Visión',
        'about.vision': 'Ser el nombre de mayor confianza en servicios de plomería y electricidad, ofreciendo soluciones innovadoras que mejoren la calidad de vida de nuestros clientes.',
        'about.missionTitle': 'Nuestra Misión',
        'about.mission': 'Proporcionar servicios de plomería y electricidad de primer nivel con un enfoque en la confiabilidad, seguridad y satisfacción del cliente, mientras adoptamos prácticas sostenibles para un mañana mejor.',
        'about.years': 'Años de Experiencia',
        'about.projects': 'Proyectos Completados',
        'about.satisfaction': '% Satisfacción',
        'about.support': '/7 Soporte',
        'about.certified': 'Licenciado y Certificado',
        
        // Services Section
        'services.title': 'Nuestros Servicios',
        'services.subtitle': 'Soluciones Integrales de Plomería y Electricidad',
        'services.plumbing.title': 'Servicios de Plomería',
        'services.plumbing.general': 'Reparaciones Generales de Plomería',
        'services.plumbing.waterHeater': 'Servicios de Calentadores de Agua',
        'services.plumbing.drain': 'Soluciones de Drenaje y Alcantarillado',
        'services.plumbing.piping': 'Tuberías y Retubería',
        'services.plumbing.waterTreatment': 'Sistemas de Tratamiento de Agua',
        'services.plumbing.gasLine': 'Línea de Gas para Calentadores',
        'services.plumbing.unclogging': 'Destape de Alcantarillado',
        'services.plumbing.leaks': 'Detección y Reparación de Fugas',
        'services.electrical.title': 'Servicios Eléctricos',
        'services.electrical.general': 'Reparaciones Eléctricas Generales',
        'services.electrical.panel': 'Actualización de Paneles',
        'services.electrical.lighting': 'Soluciones de Iluminación',
        'services.electrical.smartHome': 'Integración de Hogar Inteligente',
        'services.electrical.emergency': 'Servicios Eléctricos de Emergencia',
        'services.electrical.wiring': 'Cableado y Tomacorrientes',
        'services.electrical.appliances': 'Instalación de Electrodomésticos',
        'services.hvac.title': 'Servicios HVAC',
        'services.hvac.heating': 'Sistemas de Calefacción',
        'services.hvac.cooling': 'Sistemas de Enfriamiento',
        'services.hvac.maintenance': 'Mantenimiento HVAC',
        'services.hvac.repair': 'Reparación HVAC',
        'services.hvac.installation': 'Instalación de Sistemas',
        'services.hvac.boiler': 'Servicios de Calderas',
        'services.hvac.circulation': 'Sistemas de Circulación',
        'services.specialized.badge': 'Disponible 24/7',
        'services.specialized.title': 'Servicios Especializados',
        'services.specialized.emergency': 'Servicios de Emergencia 24/7',
        'services.specialized.energy': 'Actualizaciones de Eficiencia Energética',
        'services.specialized.custom': 'Soluciones Personalizadas',
        'services.specialized.replacement': 'Reemplazo de Sistemas',
        'services.specialized.inspection': 'Inspección Profesional',
        
        // Video Section
        'video.title': 'Servicio Profesional en el Que Puede Confiar',
        'video.subtitle': '20 Años de Excelencia en Servicios de Plomería, Electricidad y HVAC',
        'video.callAction': 'Llamar al 973-932-5740',
        
        // Portfolio Section
        'portfolio.title': 'Nuestro Portafolio',
        'portfolio.subtitle': 'Proyectos Recientes y Trabajo',
        'portfolio.filter.all': 'Todos',
        'portfolio.filter.plumbing': 'Plomería',
        'portfolio.filter.electrical': 'Electricidad',
        'portfolio.filter.hvac': 'HVAC',
        'portfolio.item1': 'Reparación de Plomería',
        'portfolio.item1Desc': 'Reparación e instalación profesional de tuberías',
        'portfolio.item1Full': 'Servicios expertos de reparación de plomería para propiedades residenciales y comerciales. Nuestros plomeros licenciados manejan reparaciones de tuberías, instalaciones de accesorios, detección de fugas y soluciones de plomería de emergencia con 20 años de experiencia.',
        'portfolio.item2': 'Panel Eléctrico',
        'portfolio.item2Desc': 'Actualización e instalación de paneles',
        'portfolio.item2Full': 'Actualizaciones e instalaciones completas de paneles eléctricos. Nos aseguramos de que su sistema eléctrico cumpla con los estándares de seguridad actuales y pueda manejar sus demandas de energía con paneles de disyuntores modernos.',
        'portfolio.item3': 'Sistema HVAC',
        'portfolio.item3Desc': 'Reparación y mantenimiento de sistemas de calefacción',
        'portfolio.item3Full': 'Servicios integrales de reparación y mantenimiento de sistemas HVAC. Nuestros técnicos certificados proporcionan soluciones de calefacción y refrigeración, diagnóstico de sistemas y mantenimiento preventivo para un rendimiento óptimo.',
        'portfolio.item4': 'Calentador de Agua',
        'portfolio.item4Desc': 'Instalación de calentador de agua a gas',
        'portfolio.item4Full': 'Servicios profesionales de instalación y reemplazo de calentadores de agua a gas. Trabajamos con calentadores de agua tradicionales y sin tanque, asegurando conexiones de gas adecuadas y funcionamiento eficiente.',
        'portfolio.item5': 'Reemplazo de Tuberías',
        'portfolio.item5Desc': 'Servicio completo de reemplazo de tuberías',
        'portfolio.item5Full': 'Servicio completo de reemplazo de tuberías para sistemas de plomería obsoletos o dañados. Usamos materiales modernos como PEX y cobre para soluciones de plomería duraderas y sin fugas.',
        'portfolio.item6': 'Accesorios de Baño',
        'portfolio.item6Desc': 'Instalación y reparación de accesorios',
        'portfolio.item6Full': 'Instalación y reparación experta de accesorios de baño incluyendo grifos, lavabos, inodoros, duchas y bañeras. Aseguramos un sellado adecuado y funcionalidad para todos los accesorios de plomería.',
        'portfolio.item7': 'Mantenimiento de Calefacción',
        'portfolio.item7Desc': 'Mantenimiento de calderas y sistemas de calefacción',
        'portfolio.item7Full': 'Mantenimiento profesional de calderas y sistemas de calefacción para asegurar un funcionamiento eficiente durante los meses fríos. Nuestros servicios incluyen inspección del sistema, limpieza y ajustes para todo el equipo de calefacción.',
        'portfolio.item8': 'Servicio Profesional',
        'portfolio.item8Desc': 'Técnicos expertos en el trabajo',
        'portfolio.item8Full': 'Nuestro equipo de profesionales licenciados y certificados ofrece un servicio excepcional para todas las necesidades de plomería, electricidad y HVAC. Nos enorgullece la calidad de nuestro trabajo y la satisfacción del cliente.',
        
        // Contact Section
        'contact.title': 'Contáctenos',
        'contact.subtitle': 'Comuníquese con Nuestros Expertos',
        'contact.address': 'Dirección',
        'contact.phone': 'Teléfono',
        'contact.email': 'Correo Electrónico',
        'contact.hours': 'Horario',
        'contact.hoursValue': 'Lunes - Domingo: 24 Horas',
        'contact.available': 'Disponible 24/7',
        
        // Footer
        'footer.about': 'Su socio de confianza para servicios de plomería, electricidad y HVAC en Newark, NJ. 20 años de excelencia y soporte de emergencia 24/7.',
        'footer.services': 'Servicios',
        'footer.plumbing': 'Plomería',
        'footer.electrical': 'Electricidad',
        'footer.hvac': 'HVAC',
        'footer.waterHeater': 'Calentador de Agua',
        'footer.emergency': 'Servicios de Emergencia',
        'footer.quickLinks': 'Enlaces Rápidos',
        'footer.contactInfo': 'Información de Contacto',
        'footer.design': 'Diseño por',
        'footer.rights': 'Todos los Derechos Reservados.',
        'footer.privacy': 'Política de Privacidad',
        'footer.cookies': 'Política de Cookies',
        
        // Cookie Banner
        'cookie.message': 'Usamos cookies para mejorar su experiencia. Al continuar navegando, acepta nuestro uso de cookies.',
        'cookie.accept': 'Aceptar',
        
        // Portfolio Modal
        'portfolio.modal.details': 'Detalles del Proyecto',
        'portfolio.modal.requestQuote': 'Solicitar Cotización',
        'portfolio.modal.services': 'Servicios Proporcionados',
        'portfolio.modal.duration': 'Duración del Proyecto',
        'portfolio.modal.location': 'Ubicación',
        
        // Legal Page
        'legal.titlePrivacy': 'Política de Privacidad y Cookies | SOS Plomería y Electricidad',
        'legal.privacyTab': 'Política de Privacidad',
        'legal.cookiesTab': 'Política de Cookies',
        'legal.privacyTitle': 'Política de Privacidad',
        'legal.cookiesTitle': 'Política de Cookies',
        'legal.lastUpdated': 'Última Actualización:',
        'legal.date': 'Enero 2024',
        'legal.backToHome': 'Volver al Inicio',
        'legal.privacyIntro': 'En SOS Plomería y Electricidad, nos comprometemos a proteger su privacidad y garantizar la seguridad de su información personal. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos sus datos cuando visita nuestro sitio web o utiliza nuestros servicios.',
        'legal.privacySection1': '1. Información que Recopilamos',
        'legal.privacySection1Text': 'Recopilamos los siguientes tipos de información:',
        'legal.privacyPersonal': '<strong>Información Personal:</strong> Nombre, número de teléfono, dirección de correo electrónico y dirección de servicio cuando nos contacta o solicita servicios.',
        'legal.privacyUsage': '<strong>Datos de Uso:</strong> Información sobre cómo accede y utiliza nuestro sitio web, incluida su dirección IP, tipo de navegador y páginas visitadas.',
        'legal.privacyCookies': '<strong>Cookies:</strong> Usamos cookies para mejorar su experiencia de navegación y analizar el tráfico del sitio web.',
        'legal.privacySection2': '2. Cómo Usamos su Información',
        'legal.privacySection2Intro': 'Usamos la información recopilada para los siguientes propósitos:',
        'legal.privacyUse1': 'Proporcionar y mantener nuestros servicios de plomería, electricidad y HVAC.',
        'legal.privacyUse2': 'Responder a sus consultas y proporcionar atención al cliente.',
        'legal.privacyUse3': 'Programar citas y llamadas de servicio.',
        'legal.privacyUse4': 'Enviarle actualizaciones importantes sobre su servicio.',
        'legal.privacyUse5': 'Mejorar nuestro sitio web y servicios.',
        'legal.privacyUse6': 'Cumplir con obligaciones legales.',
        'legal.privacySection3': '3. Compartición de Información',
        'legal.privacySection3Text': 'No vendemos, intercambiamos ni alquilamos su información personal a terceros. Podemos compartir su información solo en las siguientes circunstancias:',
        'legal.privacyShare1': 'Con proveedores de servicios que ayudan en nuestras operaciones (por ejemplo, proveedores de software de programación).',
        'legal.privacyShare2': 'Cuando lo exija la ley o para proteger nuestros derechos y seguridad.',
        'legal.privacyShare3': 'Con su consentimiento explícito.',
        'legal.privacySection4': '4. Seguridad de Datos',
        'legal.privacySection4Text': 'Implementamos medidas técnicas y organizativas apropiadas para proteger su información personal contra acceso, alteración, divulgación o destrucción no autorizados. Sin embargo, ningún método de transmisión por Internet es 100% seguro y no podemos garantizar seguridad absoluta.',
        'legal.privacySection5': '5. Sus Derechos',
        'legal.privacySection5Intro': 'Usted tiene los siguientes derechos con respecto a su información personal:',
        'legal.privacyRight1': 'El derecho a acceder a sus datos personales.',
        'legal.privacyRight2': 'El derecho a corregir datos inexactos.',
        'legal.privacyRight3': 'El derecho a solicitar la eliminación de sus datos.',
        'legal.privacyRight4': 'El derecho a excluirse de comunicaciones de marketing.',
        'legal.privacyRight5': 'El derecho a la portabilidad de datos.',
        'legal.privacySection6': '6. Contáctenos',
        'legal.privacySection6Text': 'Si tiene alguna pregunta sobre esta Política de Privacidad o nuestras prácticas de datos, contáctenos:',
        'legal.cookiesIntro': 'Esta Política de Cookies explica cómo SOS Plomería y Electricidad usa cookies y tecnologías similares en nuestro sitio web. Explica qué son las cookies, cómo las usamos y cómo puede controlarlas.',
        'legal.cookiesSection1': '1. ¿Qué Son las Cookies?',
        'legal.cookiesSection1Text': 'Las cookies son pequeños archivos de texto que se colocan en su dispositivo (computadora, teléfono inteligente o tableta) cuando visita un sitio web. Ayudan a los sitios web a recordar información sobre su visita, lo que puede facilitar la visita nuevamente al sitio y hacer que el sitio sea más útil para usted.',
        'legal.cookiesSection2': '2. Tipos de Cookies que Usamos',
        'legal.cookiesEssential': 'Cookies Esenciales',
        'legal.cookiesEssentialText': 'Estas cookies son necesarias para que el sitio web funcione correctamente. Habilitan funciones básicas como la navegación en la página y el acceso a áreas seguras del sitio web. Sin estas cookies, el sitio web no puede funcionar correctamente.',
        'legal.cookiesPerformance': 'Cookies de Rendimiento',
        'legal.cookiesPerformanceText': 'Estas cookies nos ayudan a comprender cómo los visitantes interactúan con nuestro sitio web recopilando e informando información de forma anónima. Esto nos ayuda a mejorar la forma en que funciona nuestro sitio web.',
        'legal.cookiesFunctional': 'Cookies Funcionales',
        'legal.cookiesFunctionalText': 'Estas cookies permiten que el sitio web recuerde las elecciones que hace (como su preferencia de idioma o la región en la que se encuentra) y proporciona funciones mejoradas y más personalizadas.',
        'legal.cookiesSection3': '3. Cookies Específicas que Usamos',
        'legal.cookiesSpecific1': '<strong>Cookie de Preferencia de Idioma:</strong> Recuerda su preferencia de idioma seleccionada para el sitio web.',
        'legal.cookiesSpecific2': '<strong>Cookie de Consentimiento de Cookies:</strong> Recuerda si ha aceptado nuestra política de cookies.',
        'legal.cookiesSpecific3': '<strong>Cookies de Analítica:</strong> Nos ayudan a comprender el tráfico del sitio web y el comportamiento de los visitantes.',
        'legal.cookiesSection4': '4. Cómo Controlar las Cookies',
        'legal.cookiesSection4Text': 'Tiene el derecho de decidir si acepta o rechaza las cookies. Puede ejercer sus preferencias de cookies a través de la configuración de su navegador:',
        'legal.cookiesBrowser': 'Configuración del Navegador',
        'legal.cookiesBrowserText': 'La mayoría de los navegadores web le permiten controlar las cookies a través de su configuración. Puede configurar su navegador para aceptar todas las cookies, rechazar todas las cookies, notificarle cuando se establece una cookie o eliminar cookies periódicamente.',
        'legal.cookiesSection5': '5. Contáctenos',
        'legal.cookiesSection5Text': 'Si tiene alguna pregunta sobre nuestro uso de cookies, contáctenos:',
        'legal.byPhone': 'Por teléfono:',
        'legal.byEmail': 'Por correo electrónico:',
        'legal.byMail': 'Por correo:'
    }
};

// ========================================
// Current Language State
// ========================================
let currentLang = 'en';

// ========================================
// DOM Elements
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Language Switcher
    const langBtns = document.querySelectorAll('.lang-btn');
    
    // Slider
    const slides = document.querySelectorAll('.slide');
    const sliderPrev = document.getElementById('sliderPrev');
    const sliderNext = document.getElementById('sliderNext');
    const sliderDots = document.getElementById('sliderDots');
    
    // Scroll to Top
    const scrollTopBtn = document.getElementById('scrollTop');
    
    // Cookie Banner
    const cookieBanner = document.getElementById('cookieBanner');
    const cookieAccept = document.getElementById('cookieAccept');
    
    // Portfolio Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // Portfolio Modal
    const portfolioModal = document.getElementById('portfolioModal');
    const modalClose = document.getElementById('modalClose');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalDetailsList = document.getElementById('modalDetailsList');
    
    let currentModalIndex = 0;
    let visiblePortfolioItems = [];
    
    // Stats Counter
    const statNumbers = document.querySelectorAll('.stat-number');
    
    // ========================================
    // Functions
    // ========================================
    
    /**
     * Update language throughout the page
     */
    function updateLanguage(lang) {
        currentLang = lang;
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        
        // Update language buttons
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Save preference
        localStorage.setItem('preferredLanguage', lang);
    }
    
    /**
     * Initialize slider dots
     */
    function initSliderDots() {
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            sliderDots.appendChild(dot);
        });
    }
    
    /**
     * Go to specific slide
     */
    function goToSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        const dots = sliderDots.querySelectorAll('.slider-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    /**
     * Next slide
     */
    function nextSlide() {
        const activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
        const nextIndex = (activeIndex + 1) % slides.length;
        goToSlide(nextIndex);
    }
    
    /**
     * Previous slide
     */
    function prevSlide() {
        const activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
        const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
        goToSlide(prevIndex);
    }
    
    /**
     * Filter portfolio items
     */
    function filterPortfolio(category) {
        visiblePortfolioItems = [];
        portfolioItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
                visiblePortfolioItems.push(item);
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    }
    
    /**
     * Open portfolio modal
     */
    function openModal(index) {
        const item = visiblePortfolioItems[index];
        if (!item) return;
        
        currentModalIndex = index;
        const image = item.getAttribute('data-image');
        const titleKey = item.getAttribute('data-i18n-title');
        const descKey = item.getAttribute('data-i18n-desc');
        const fullKey = item.getAttribute('data-i18n-full');
        
        modalImage.src = image;
        modalImage.alt = translations[currentLang][titleKey];
        modalTitle.textContent = translations[currentLang][titleKey];
        modalDescription.textContent = translations[currentLang][fullKey];
        
        // Add project details
        const details = [
            translations[currentLang]['portfolio.modal.services'],
            translations[currentLang]['portfolio.modal.duration'],
            translations[currentLang]['portfolio.modal.location']
        ];
        const detailValues = [
            item.getAttribute('data-category').charAt(0).toUpperCase() + item.getAttribute('data-category').slice(1),
            '1-3 days',
            'Newark, NJ'
        ];
        
        modalDetailsList.innerHTML = '';
        details.forEach((detail, i) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${detail}:</strong> ${detailValues[i]}`;
            modalDetailsList.appendChild(li);
        });
        
        portfolioModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    /**
     * Close portfolio modal
     */
    function closeModal() {
        portfolioModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    /**
     * Next modal item
     */
    function nextModalItem() {
        let newIndex = currentModalIndex + 1;
        if (newIndex >= visiblePortfolioItems.length) newIndex = 0;
        openModal(newIndex);
    }
    
    /**
     * Previous modal item
     */
    function prevModalItem() {
        let newIndex = currentModalIndex - 1;
        if (newIndex < 0) newIndex = visiblePortfolioItems.length - 1;
        openModal(newIndex);
    }
    
    /**
     * Animate stats counter
     */
    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target.toLocaleString();
                    if (stat.nextElementSibling && stat.nextElementSibling.classList.contains('stat-label')) {
                        const label = stat.nextElementSibling.textContent;
                        if (label.includes('%') || label.includes('/7')) {
                            stat.textContent = target + label.replace(/[0-9]/g, '');
                        }
                    }
                }
            };
            
            updateCounter();
        });
    }
    
    /**
     * Check if element is in viewport
     */
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    /**
     * Smooth scroll to element
     */
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
    
    // ========================================
    // Event Listeners
    // ========================================
    
    // Language Switcher
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            updateLanguage(btn.getAttribute('data-lang'));
        });
    });
    
    // Mobile Navigation Toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Scroll to top button visibility
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
        
        // Active nav link based on scroll position
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
                });
            }
        });
    });
    
    // Slider Controls
    if (sliderPrev) {
        sliderPrev.addEventListener('click', prevSlide);
    }
    
    if (sliderNext) {
        sliderNext.addEventListener('click', nextSlide);
    }
    
    // Auto-advance slider
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause slider on hover
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        heroSection.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
    
    // Scroll to Top
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Cookie Banner
    if (cookieBanner && cookieAccept) {
        // Check if user already accepted
        if (!localStorage.getItem('cookiesAccepted')) {
            setTimeout(() => {
                cookieBanner.classList.add('visible');
            }, 2000);
        }
        
        cookieAccept.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieBanner.classList.remove('visible');
        });
    }
    
    // Portfolio Filter
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterPortfolio(btn.getAttribute('data-filter'));
        });
    });
    
    // Portfolio Modal - Click on item
    portfolioItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Update visible items array after filter
            const filter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
            visiblePortfolioItems = Array.from(portfolioItems).filter(i => {
                return i.style.display !== 'none';
            });
            const currentIndex = visiblePortfolioItems.indexOf(item);
            if (currentIndex !== -1) {
                openModal(currentIndex);
            }
        });
    });
    
    // Modal Close Button
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // Modal Navigation
    if (modalPrev) {
        modalPrev.addEventListener('click', prevModalItem);
    }
    
    if (modalNext) {
        modalNext.addEventListener('click', nextModalItem);
    }
    
    // Close modal on background click
    if (portfolioModal) {
        portfolioModal.addEventListener('click', (e) => {
            if (e.target === portfolioModal) {
                closeModal();
            }
        });
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && portfolioModal && portfolioModal.classList.contains('active')) {
            closeModal();
        }
        if (e.key === 'ArrowLeft' && portfolioModal && portfolioModal.classList.contains('active')) {
            prevModalItem();
        }
        if (e.key === 'ArrowRight' && portfolioModal && portfolioModal.classList.contains('active')) {
            nextModalItem();
        }
    });
    
    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            smoothScroll(target);
        });
    });
    
    // Stats animation on scroll
    const statsSection = document.querySelector('.stats-grid');
    let statsAnimated = false;
    
    function checkStatsAnimation() {
        if (statsSection && !statsAnimated && isInViewport(statsSection)) {
            animateStats();
            statsAnimated = true;
        }
    }
    
    window.addEventListener('scroll', checkStatsAnimation);
    checkStatsAnimation(); // Check on load
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service cards and portfolio items
    document.querySelectorAll('.service-card, .portfolio-item, .contact-info-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Initialize slider dots
    initSliderDots();
    
    // Initialize visible portfolio items
    visiblePortfolioItems = Array.from(portfolioItems);
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    updateLanguage(savedLang);
    
    // Phone number click handler (prevent default on desktop)
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // On desktop, you might want to show a modal instead
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            if (!isMobile) {
                // Could show a confirmation or info message
                console.log('Phone number: 973-932-5740');
            }
        });
    });
});

// ========================================
// Utility Functions
// ========================================

/**
 * Debounce function for performance
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function for scroll events
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Lazy loading for images (fallback for older browsers)
 */
if ('loading' in HTMLImageElement.prototype === false) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
}

console.log('SOS Plumbing & Electric Services - Website loaded successfully!');
console.log('Designed by Christian Herencia - https://christian-freelance.us/');
