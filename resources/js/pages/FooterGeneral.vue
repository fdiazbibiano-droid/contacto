<template>
    <footer class="footer">
        <div class="footer-content">
            <!-- Información de contacto -->
            <div class="footer-section">
                <h3>Contacto</h3>
                <p>
                    <strong>Teléfono:</strong>
                    <a href="tel:+34123456789">+34 123 456 789</a>
                </p>
                <p>
                    <strong>Dirección:</strong>
                    Calle Principal 123, 28001 Madrid, España
                </p>
                <p>
                    <strong>Email:</strong>
                    <a href="mailto:info@empresa.com">info@empresa.com</a>
                </p>
            </div>

            <!-- Redes sociales -->
            <div class="footer-section">
                <h3>Síguenos</h3>
                <div class="social-links">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener"
                        >Facebook</a
                    >
                    <a href="https://twitter.com" target="_blank" rel="noopener"
                        >Twitter</a
                    >
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener"
                        >Instagram</a
                    >
                </div>
            </div>

            <!-- Enlaces rápidos -->
            <div class="footer-section">
                <h3>Enlaces</h3>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/about">Acerca de</a></li>
                    <li><a href="/services">Servicios</a></li>
                    <li><a href="/contact">Contacto</a></li>
                </ul>
            </div>
        </div>

        <!-- Copyright -->
        <div class="footer-bottom">
            <p>&copy; 2024 Nombre Empresa. Todos los derechos reservados.</p>
        </div>
    </footer>
</template>

<script setup lang="ts">
defineOptions({
    name: 'FooterGeneral',
});
</script>

<style scoped>
.footer {
    background-color: #333;
    color: #fff;
    padding: 40px 20px 20px;
    margin-top: 60px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto 30px;
}

.footer-section h3 {
    margin-bottom: 15px;
    color: #ffc107;
}

.footer-section p {
    margin: 10px 0;
    line-height: 1.6;
}

.footer-section a {
    color: #ffc107;
    text-decoration: none;
}

.footer-section a:hover {
    text-decoration: underline;
}

.social-links {
    display: flex;
    gap: 15px;
}

.social-links a {
    display: inline-block;
    padding: 8px 12px;
    background-color: #555;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.social-links a:hover {
    background-color: #ffc107;
    color: #333;
    text-decoration: none;
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section ul li {
    margin: 8px 0;
}

.footer-bottom {
    text-align: center;
    border-top: 1px solid #555;
    padding-top: 20px;
    color: #999;
}
</style>
