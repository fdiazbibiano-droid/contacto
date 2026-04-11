import { ref, computed } from 'vue';

type Locale = 'en' | 'es';

const isBrowser = typeof window !== 'undefined';

const translations = {
    en: {
        nav: {
            home: 'Home',
            roofing: 'Roofing',
            siding: 'Siding',
            gutters: 'Gutters',
            repairs: 'Repairs',
            contact: 'Contact',
            cta: 'GET A FREE ESTIMATE',
            phone: '(564) 209-8251',
        },
        hero: {
            eyebrow: 'Licensed & Insured / Bonded — Pacific Northwest',
            title: 'NW POINT',
            titleSpan: 'CONSTRUCTION',
            subtitle:
                'Free estimate, no obligation. Serving WA with 10+ years of expert craftsmanship.',
            cta: 'Get a Free Estimate',
            scrollHint: 'Discover More',
        },
        features: [
            {
                title: 'Free Estimates',
                desc: 'No-obligation quotes for your next roofing or exterior project. We come to you.',
            },
            {
                title: 'Flexible Financing',
                desc: 'Payment plans to fit any budget. 60-second pre-qualification with no credit score impact.',
            },
            {
                title: 'Industry-Leading Warranties',
                desc: 'Peace of mind for 30+ years. Our materials and workmanship are fully backed.',
            },
            {
                title: 'Insurance Specialists',
                desc: "We professionally manage insurance claims from start to finish so you don't have to.",
            },
        ],
        stats: [
            { number: '10+', label: 'Years in Business' },
            { number: '5,000+', label: 'Satisfied Customers' },
            { number: 'A+', label: 'BBB Rating' },
            { number: '#1', label: 'Consumer Choice — PNW' },
        ],
        services: {
            eyebrow: 'What We Do',
            title: 'Full-Service Exterior Solutions',
            sub: 'While we specialize in high-quality residential roof replacements, we are a full-service exterior contractor — from gutters to siding.',
            learnMore: 'Learn More →',
            items: [
                {
                    name: 'Roofing',
                    desc: 'TPO, metal, shake & shingles. Proper roofing prevents water damage and protects your investment.',
                },
                {
                    name: 'Siding',
                    desc: 'Fresh siding gives your home a clean, updated look while improving insulation and curb appeal.',
                },
                {
                    name: 'Gutters',
                    desc: 'Properly installed gutters prevent water damage to your foundation, siding, and landscaping.',
                },
                {
                    name: 'Repairs',
                    desc: 'Fast, reliable repairs for leaks, storm damage, and wear. We restore your roof to peak condition.',
                },
                {
                    name: 'Pressure Washing',
                    desc: 'Remove moss, algae, and years of buildup. We restore your roof and exterior surfaces safely.',
                },
                {
                    name: 'Renovation',
                    desc: 'Full exterior renovations that increase property value and give your home a lasting transformation.',
                },
            ],
        },
        trust: {
            eyebrow: 'Why Choose Us',
            title: 'Award-Winning\nService You Can Trust',
            intro: 'With over 10 years serving the Pacific Northwest, we bring certified expertise, premium materials, and a commitment to craftsmanship that lasts decades.',
            cta: 'Request a Free Estimate',
            points: [
                {
                    title: 'Certified & Licensed',
                    desc: 'Fully licensed, bonded, and insured in Washington State.',
                },
                {
                    title: 'Premium Materials Only',
                    desc: 'We use top-tier products backed by manufacturer warranties.',
                },
                {
                    title: 'Clean Job Sites',
                    desc: 'We respect your property and leave it better than we found it.',
                },
                {
                    title: 'Transparent Pricing',
                    desc: 'No hidden fees. What we quote is what you pay.',
                },
                {
                    title: 'Local & Family-Owned',
                    desc: 'We live here too — your community is our community.',
                },
            ],
            badges: [
                { value: '10+', title: 'Years Experience' },
                { value: 'A+', title: 'BBB Rating' },
                { value: '100%', title: 'Satisfaction Goal' },
            ],
        },
        gallery: {
            eyebrow: 'Our Work',
            title: 'Recent Projects',
            sub: 'A sample of roofing and exterior work completed across the Pacific Northwest.',
        },
        contact: {
            eyebrow: 'Get In Touch',
            title: "Let's Talk About\nYour Project",
            intro: "Ready for a new roof or exterior upgrade? Fill out the form and we'll get back to you within one business day with a free, no-obligation estimate.",
            phone: 'Phone',
            email: 'Email',
            area: 'Service Area',
            areaVal: 'Washington State — Pacific Northwest',
            nameLbl: 'Full Name *',
            namePh: 'John Smith',
            phoneLbl: 'Phone',
            phonePh: '(360) 555-0000',
            emailLbl: 'Email *',
            emailPh: 'john@example.com',
            serviceLbl: 'Service Needed',
            servicePh: 'Select a service…',
            services: [
                'Roofing (New / Replacement)',
                'Siding',
                'Gutters',
                'Repairs',
                'Pressure Washing',
                'Renovation',
                'Other / Not Sure',
            ],
            msgLbl: 'Message *',
            msgPh: 'Tell us about your project…',
            submit: "Send Message — It's Free",
            sending: 'Sending…',
            successTitle: 'Message Sent!',
            successSub: "We'll be in touch within one business day.",
            successBtn: 'Send Another',
        },
        footer: {
            tagline:
                "Pacific Northwest's trusted roofing and exterior specialists. Licensed, bonded, and insured in Washington State.",
            services: 'Services',
            company: 'Company',
            contact: 'Contact',
            links: {
                home: 'Home',
                whyUs: 'Why Choose Us',
                services: 'Services',
                quote: 'Get a Quote',
            },
            serviceItems: [
                'Roofing',
                'Siding',
                'Gutters',
                'Repairs',
                'Pressure Washing',
                'Renovation',
            ],
            phone: 'Phone',
            email: 'Email',
            location: 'Washington State, PNW',
            copy: 'NW Point Construction LLC. All rights reserved.',
            license: 'Licensed & Insured / Bonded — Washington State',
        },
    },

    es: {
        nav: {
            home: 'Inicio',
            roofing: 'Techos',
            siding: 'Revestimiento',
            gutters: 'Canaletas',
            repairs: 'Reparaciones',
            contact: 'Contacto',
            cta: 'PRESUPUESTO GRATIS',
            phone: '(564) 209-8251',
        },
        hero: {
            eyebrow: 'Licenciado y Asegurado — Noroeste del Pacífico',
            title: 'NW POINT',
            titleSpan: 'CONSTRUCTION',
            subtitle:
                'Estimado gratis, sin compromiso. Sirviendo WA con más de 10 años de experiencia.',
            cta: 'Obtener Presupuesto Gratis',
            scrollHint: 'Descubrir Más',
        },
        features: [
            {
                title: 'Estimados Gratis',
                desc: 'Cotizaciones sin compromiso para tu próximo proyecto. Vamos a donde estés.',
            },
            {
                title: 'Financiamiento Flexible',
                desc: 'Planes de pago para cualquier presupuesto. Pre-calificación en 60 segundos sin afectar tu crédito.',
            },
            {
                title: 'Garantías Líderes del Sector',
                desc: 'Tranquilidad por más de 30 años. Nuestros materiales y mano de obra están totalmente respaldados.',
            },
            {
                title: 'Especialistas en Seguros',
                desc: 'Gestionamos reclamaciones de seguros de principio a fin para que no tengas que hacerlo tú.',
            },
        ],
        stats: [
            { number: '10+', label: 'Años de Experiencia' },
            { number: '5,000+', label: 'Clientes Satisfechos' },
            { number: 'A+', label: 'Calificación BBB' },
            { number: '#1', label: 'Opción del Consumidor — PNW' },
        ],
        services: {
            eyebrow: 'Lo Que Hacemos',
            title: 'Soluciones Exteriores Completas',
            sub: 'Aunque nos especializamos en reemplazos de techos residenciales de alta calidad, somos contratistas exteriores de servicio completo.',
            learnMore: 'Ver Más →',
            items: [
                {
                    name: 'Techos',
                    desc: 'TPO, metal, tablillas y tejas. Un techo adecuado previene daños por agua y protege tu inversión.',
                },
                {
                    name: 'Revestimiento',
                    desc: 'El revestimiento nuevo le da a tu hogar una apariencia fresca y actualizada, mejorando el aislamiento.',
                },
                {
                    name: 'Canaletas',
                    desc: 'Las canaletas instaladas correctamente previenen daños por agua en los cimientos, revestimiento y jardín.',
                },
                {
                    name: 'Reparaciones',
                    desc: 'Reparaciones rápidas y confiables para goteras y daños por tormenta. Restauramos tu techo.',
                },
                {
                    name: 'Lavado a Presión',
                    desc: 'Eliminamos musgo, algas y suciedad acumulada. Restauramos tus superficies exteriores de forma segura.',
                },
                {
                    name: 'Renovación',
                    desc: 'Renovaciones exteriores completas que aumentan el valor de tu propiedad y transforman tu hogar.',
                },
            ],
        },
        trust: {
            eyebrow: 'Por Qué Elegirnos',
            title: 'Servicio Galardonado\nEn El Que Puedes Confiar',
            intro: 'Con más de 10 años sirviendo al Noroeste del Pacífico, ofrecemos experiencia certificada, materiales premium y un compromiso con la artesanía que dura décadas.',
            cta: 'Solicitar Estimado Gratis',
            points: [
                {
                    title: 'Certificados y Licenciados',
                    desc: 'Totalmente licenciados, afianzados y asegurados en el Estado de Washington.',
                },
                {
                    title: 'Solo Materiales Premium',
                    desc: 'Utilizamos productos de primera categoría respaldados por garantías del fabricante.',
                },
                {
                    title: 'Lugares de Trabajo Limpios',
                    desc: 'Respetamos tu propiedad y la dejamos mejor de como la encontramos.',
                },
                {
                    title: 'Precios Transparentes',
                    desc: 'Sin costos ocultos. Lo que cotizamos es lo que pagas.',
                },
                {
                    title: 'Local y Familiar',
                    desc: 'También vivimos aquí — tu comunidad es nuestra comunidad.',
                },
            ],
            badges: [
                { value: '10+', title: 'Años de Experiencia' },
                { value: 'A+', title: 'Calificación BBB' },
                { value: '100%', title: 'Meta de Satisfacción' },
            ],
        },
        gallery: {
            eyebrow: 'Nuestro Trabajo',
            title: 'Proyectos Recientes',
            sub: 'Una muestra de trabajos de techos y exteriores completados en todo el Noroeste del Pacífico.',
        },
        contact: {
            eyebrow: 'Contáctanos',
            title: 'Hablemos de\nTu Proyecto',
            intro: '¿Listo para un techo nuevo o mejoras exteriores? Completa el formulario y te contactaremos en un día hábil con un estimado gratis y sin compromiso.',
            phone: 'Teléfono',
            email: 'Correo',
            area: 'Área de Servicio',
            areaVal: 'Estado de Washington — Noroeste del Pacífico',
            nameLbl: 'Nombre Completo *',
            namePh: 'Juan García',
            phoneLbl: 'Teléfono',
            phonePh: '(360) 555-0000',
            emailLbl: 'Correo Electrónico *',
            emailPh: 'juan@ejemplo.com',
            serviceLbl: 'Servicio Necesario',
            servicePh: 'Selecciona un servicio…',
            services: [
                'Techos (Nuevo / Reemplazo)',
                'Revestimiento',
                'Canaletas',
                'Reparaciones',
                'Lavado a Presión',
                'Renovación',
                'Otro / No Estoy Seguro',
            ],
            msgLbl: 'Mensaje *',
            msgPh: 'Cuéntanos sobre tu proyecto…',
            submit: 'Enviar Mensaje — Es Gratis',
            sending: 'Enviando…',
            successTitle: '¡Mensaje Enviado!',
            successSub: 'Nos pondremos en contacto en un día hábil.',
            successBtn: 'Enviar Otro',
        },
        footer: {
            tagline:
                'Especialistas de confianza en techos y exteriores del Noroeste del Pacífico. Licenciados, afianzados y asegurados en Washington.',
            services: 'Servicios',
            company: 'Empresa',
            contact: 'Contacto',
            links: {
                home: 'Inicio',
                whyUs: 'Por Qué Elegirnos',
                services: 'Servicios',
                quote: 'Obtener Cotización',
            },
            serviceItems: [
                'Techos',
                'Revestimiento',
                'Canaletas',
                'Reparaciones',
                'Lavado a Presión',
                'Renovación',
            ],
            phone: 'Teléfono',
            email: 'Correo',
            location: 'Estado de Washington, PNW',
            copy: 'NW Point Construction LLC. Todos los derechos reservados.',
            license:
                'Licenciado y Asegurado / Afianzado — Estado de Washington',
        },
    },
};

const locale = ref<Locale>(
    (isBrowser ? (localStorage.getItem('lang-new') as Locale) : null) ?? 'en',
);

const t = computed(() => translations[locale.value]);

function toggleLang() {
    locale.value = locale.value === 'en' ? 'es' : 'en';
    if (isBrowser) localStorage.setItem('lang-new', locale.value);
}

export function useLangNew() {
    return { locale, t, toggleLang };
}
