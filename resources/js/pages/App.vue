<template>
    <div class="home">
        <NavBar></NavBar>
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-content">
                <h1>Construimos tu futuro</h1>
                <p>Proyectos de calidad con experiencia de 20 años</p>
                <button class="cta-button">Conocer proyectos</button>
            </div>
        </section>

        <!-- Servicios -->
        <section class="services">
            <h2>Nuestros Servicios</h2>
            <div class="services-grid">
                <div class="service-card">
                    <h3>Construcción Residencial</h3>
                    <p>
                        Casas y apartamentos de lujo con los mejores estándares
                    </p>
                </div>
                <div class="service-card">
                    <h3>Proyectos Comerciales</h3>
                    <p>Edificios comerciales y centros de negocios</p>
                </div>
                <div class="service-card">
                    <h3>Reforma y Remodelación</h3>
                    <p>Transforma tus espacios con nuestro equipo experto</p>
                </div>
            </div>
        </section>

        <!-- Proyectos Destacados -->
        <section class="projects">
            <h2>Proyectos Destacados</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-image">Proyecto 1</div>
                    <h3>Torres Moderna</h3>
                </div>
                <div class="project-card">
                    <div class="project-image">Proyecto 2</div>
                    <h3>Residencial Park</h3>
                </div>
                <div class="project-card">
                    <div class="project-image">Proyecto 3</div>
                    <h3>Centro Comercial</h3>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <FooterGeneral />
    </div>
</template>

<script setup lang="js">
import NavBar from './NavBar.vue';
import FooterGeneral from './FooterGeneral.vue';
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.home {
    font-family: 'Arial', sans-serif;
    color: #333;
}

.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
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

.service-card {
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.service-card h3 {
    margin-bottom: 15px;
    color: #667eea;
}

.projects {
    padding: 80px 20px;
    text-align: center;
}

.projects h2 {
    font-size: 2.5em;
    margin-bottom: 50px;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
}

.project-card {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.project-image {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
}

.project-card h3 {
    padding: 20px;
    background: white;
}
</style>
