<template>
    <footer class="footer">
        <div class="footer-content">
            <!-- Información de contacto -->
            <div class="footer-section">
                <h3>{{ t.footer.contact }}</h3>
                <p>
                    <strong>{{ t.footer.phone }}</strong>
                    <a href="tel:+15642098251">+1 564 209 8251</a>
                </p>
                <p>
                    <strong>{{ t.footer.address }}</strong>
                    {{ t.footer.addressValue }}
                </p>
                <p>
                    <strong>{{ t.footer.email }}</strong>
                    <a href="mailto:info@empresa.com">info@empresa.com</a>
                </p>
            </div>

            <!-- Redes sociales -->
            <div class="footer-section">
                <h3>{{ t.footer.follow }}</h3>
                <div class="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener">Facebook</a>
                </div>
            </div>

            <!-- Enlaces rápidos -->
            <div class="footer-section">
                <h3>{{ t.footer.links }}</h3>
                <ul>
                    <li><a href="#inicio">{{ t.footer.home }}</a></li>
                    <li><a href="#nosotros">{{ t.footer.about }}</a></li>
                    <li><a href="#servicios">{{ t.footer.services }}</a></li>
                    <li><a href="#contacto">{{ t.footer.contact }}</a></li>
                </ul>
            </div>
        </div>

        <!-- Copyright -->
        <div class="footer-bottom">
            <p>{{ t.footer.copyright }}</p>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { useLang } from '@/composables/useLang';

const { t } = useLang();
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
    color: #ff0000;
}

.footer-section p {
    margin: 10px 0;
    line-height: 1.6;
}

.footer-section a {
    color: #ff0000;
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
    background-color: #ff0000;
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
