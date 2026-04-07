<template>
    <div class="home">
        <NavBar></NavBar>
        <!-- Hero Section -->
        <section id="inicio" class="hero">
            <div class="hero-content">
                <h1>{{ t.hero.title }}</h1>
                <p>{{ t.hero.subtitle }}</p>
                <button class="cta-button" @click="scrollToContact">{{ t.hero.cta }}</button>
            </div>
        </section>

        <!-- Nosotros -->
        <section id="nosotros" class="about">
            <h2>{{ t.about.title }}</h2>
            <p>{{ t.about.text }}</p>
        </section>

        <!-- Servicios -->
        <section id="servicios" class="services">
            <h2>{{ t.services.title }}</h2>
            <div class="services-grid">
                <ServiceCard
                    v-for="card in serviceCards"
                    :key="card.titleEn"
                    :image="card.image"
                    :title="card.titleEn"
                />
            </div>
        </section>

        <!-- Contacto -->
        <section id="contacto" class="contacto"><ContactoForm /></section>

        <!-- Botón flotante de WhatsApp -->
        <a
            href="https://wa.me/15642098251"
            target="_blank"
            id="whatsapp-float"
        >
            <img src="@/assets/icons8-whatsapp.svg" alt="WhatsApp" />
        </a>

        <!--Botón de subir al inicio-->
        <button id="btnTop" ref="btnTop">↑</button>

        <!-- Footer -->
        <FooterGeneral />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ContactoForm from './ContactoForm.vue';
import NavBar from './NavBar.vue';
import FooterGeneral from './FooterGeneral.vue';
import ServiceCard from './ServiceCard.vue';
import { useLang } from '@/composables/useLang';
import roof1 from '@/assets/roof1.jpeg';
import roof5 from '@/assets/roof5.jpeg';
import roof10 from '@/assets/roof10.jpeg';
import roof7 from '@/assets/roof7.jpeg';
import roof20 from '@/assets/roof20.jpeg';
import roof13 from '@/assets/roof13.jpeg';
import roof23 from '@/assets/roof23.jpeg';

const { t } = useLang();

const serviceCards = [
    { image: roof1,  titleEn: 'ALL TYPES OF ROOFING (TPO, METAL, SHAKE & SHINGLES)' },
    { image: roof5,  titleEn: 'ROOF MAINTENANCE' },
    { image: roof10, titleEn: 'ROOF & GUTTER CLEANING' },
    { image: roof7,  titleEn: 'REPAIRS' },
    { image: roof20, titleEn: 'SIDING' },
    { image: roof13, titleEn: 'RENOVATION' },
    { image: roof23, titleEn: 'PRESSURE WASHING' },
];

const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
};

const btnTop = ref<HTMLButtonElement | null>(null);

onMounted(() => {
    window.addEventListener('scroll', () => {
        if (btnTop.value) {
            btnTop.value.style.display = window.scrollY > 300 ? 'block' : 'none';
        }
    });

    if (btnTop.value) {
        btnTop.value.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    scroll-behavior: smooth;
}
</style>

<style scoped>
.home {
    font-family: 'Arial', sans-serif;
    color: #333;
}

.hero {
    background: radial-gradient(circle, #ffffff 0%, #B3B3B3 100%);
    color: red;
    padding: 100px 20px;
    text-align: center;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-content h1 {
    font-size: 3em;
    margin-bottom: 20px;
}

.hero-content p {
    font-size: 1.3em;
    margin-bottom: 30px;
    color: #555;
}

.cta-button {
    background-color: #ff6b6b;
    color: white;
    border: none;
    padding: 12px 30px;
    font-size: 1em;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.cta-button:hover {
    background-color: #ee5a52;
}

.services {
    padding: 80px 20px;
    text-align: center;
    background-color: #f8f9fa;
}

.services h2 {
    font-size: 2.5em;
    margin-bottom: 50px;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
}

.about {
    padding: 80px 20px;
    text-align: center;
    background-color: #f8f9fa;
}

.about h2 {
    font-size: 2.5em;
    margin-bottom: 50px;
}

.about p {
    font-size: 1.3em;
    margin-bottom: 30px;
    color: #555;
}

#btnTop {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid black;
    background-color: transparent;
    color: black;
    font-size: 20px;
    cursor: pointer;
    display: none;
    text-align: center;
    line-height: 46px;
}

#btnTop:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

#whatsapp-float {
    position: fixed;
    bottom: 20px;
    left: 20px;
    width: 60px;
    height: 60px;
    z-index: 100;
}

#whatsapp-float img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

#whatsapp-float img:hover {
    background-color: rgba(0, 0, 0, 0.1);
}
</style>
