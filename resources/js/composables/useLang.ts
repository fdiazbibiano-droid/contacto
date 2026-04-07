import { ref, computed } from 'vue';

type Locale = 'en' | 'es';

const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About Us',
            services: 'Services',
            contact: 'Contact',
        },
        hero: {
            title: 'We Build Your Future',
            subtitle: 'Quality projects with 20 years of experience',
            cta: 'Request a Free Quote',
        },
        about: {
            title: 'About Us',
            text: 'We are a company with experience in the construction, remodeling, repair and maintenance of roofs and homes, with quality products and specialized labor.',
        },
        services: {
            title: 'Our Services',
            label: 'Services',
        },
        contact: {
            title: 'Contact',
            name: 'Name',
            email: 'Email',
            phone: 'Phone',
            message: 'Message',
            sending: 'Sending...',
            send: 'Send',
            location: 'Location',
            success: 'Your message has been sent successfully!',
        },
        footer: {
            contact: 'Contact',
            phone: 'Phone:',
            address: 'Address:',
            addressValue: '123 Main Street, WA, USA',
            email: 'Email:',
            follow: 'Follow Us',
            links: 'Links',
            home: 'Home',
            about: 'About Us',
            services: 'Services',
            copyright: '© 2024 NW Point Construction LLC. All rights reserved.',
        },
    },
    es: {
        nav: {
            home: 'Inicio',
            about: 'Nosotros',
            services: 'Servicios',
            contact: 'Contacto',
        },
        hero: {
            title: 'Construimos tu Futuro',
            subtitle: 'Proyectos de calidad con experiencia de 20 años',
            cta: 'Solicitar Cotización gratis',
        },
        about: {
            title: 'Sobre Nosotros',
            text: 'Somos una empresa con experiencia en la construcción, remodelación, reparación y mantenimiento de techos y casas, con productos de calidad y mano de obra especializada.',
        },
        services: {
            title: 'Nuestros Servicios',
            label: 'Servicios',
        },
        contact: {
            title: 'Contacto',
            name: 'Nombre',
            email: 'Email',
            phone: 'Teléfono',
            message: 'Mensaje',
            sending: 'Enviando...',
            send: 'Enviar',
            location: 'Ubicación',
            success: '¡Tu mensaje fue enviado exitosamente!',
        },
        footer: {
            contact: 'Contacto',
            phone: 'Teléfono:',
            address: 'Dirección:',
            addressValue: 'Calle Principal 123, 28001 Madrid, España',
            email: 'Email:',
            follow: 'Síguenos',
            links: 'Enlaces',
            home: 'Inicio',
            about: 'Nosotros',
            services: 'Servicios',
            copyright: '© 2024 Nombre Empresa. Todos los derechos reservados.',
        },
    },
};

const isBrowser = typeof window !== 'undefined';

const locale = ref<Locale>(
    (isBrowser ? (localStorage.getItem('lang') as Locale) : null) ?? 'en'
);

const t = computed(() => translations[locale.value]);

function toggleLang() {
    locale.value = locale.value === 'en' ? 'es' : 'en';
    if (isBrowser) localStorage.setItem('lang', locale.value);
}

export function useLang() {
    return { locale, t, toggleLang };
}
