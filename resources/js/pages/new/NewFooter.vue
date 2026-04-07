<template>
    <footer class="footer">
        <div class="footer-inner">
            <!-- Brand -->
            <div class="footer-brand">
                <a href="#home">
                    <img src="@/assets/logo2.png" alt="NW Point Construction LLC" class="footer-logo" />
                </a>
                <p>{{ t.footer.tagline }}</p>
                <div class="social-links">
                    <a href="https://www.facebook.com/profile.php?id=61587659294576&mibextid=wwXIfr&rdid=50riagJZuUX0f3EU&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1VXCamA8KK%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener" aria-label="Facebook">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                    </a>
                </div>
            </div>

            <!-- Services -->
            <div class="footer-col">
                <h4>{{ t.footer.services }}</h4>
                <ul>
                    <li v-for="svc in t.footer.serviceItems" :key="svc">
                        <a href="#services">{{ svc }}</a>
                    </li>
                </ul>
            </div>

            <!-- Company -->
            <div class="footer-col">
                <h4>{{ t.footer.company }}</h4>
                <ul>
                    <li><a href="#home">{{ t.footer.links.home }}</a></li>
                    <li><a href="#features">{{ t.footer.links.whyUs }}</a></li>
                    <li><a href="#services">{{ t.footer.links.services }}</a></li>
                    <li><a href="#contact">{{ t.footer.links.quote }}</a></li>
                </ul>
            </div>

            <!-- Contact -->
            <div class="footer-col">
                <h4>{{ t.footer.contact }}</h4>
                <ul class="contact-info">
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.32.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.18 21 3 13.82 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/></svg>
                        <a href="tel:+15642098251">(564) 209-8251</a>
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        <a href="mailto:nw.point.construction25@gmail.com">nw.point.construction25@gmail.com</a>
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        <span>{{ t.footer.location }}</span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Bottom bar -->
        <div class="footer-bottom">
            <p>© {{ year }} {{ t.footer.copy }}</p>
            <p>{{ t.footer.license }}</p>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { useLangNew } from '@/composables/useLangNew';

const { t } = useLangNew();
const year = new Date().getFullYear();
</script>

<style scoped>
.footer { background: #0a0a0a; color: #aaa; padding: 70px 2rem 0; }

.footer-inner {
    max-width: 1300px; margin: 0 auto;
    display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 3rem; padding-bottom: 3rem; border-bottom: 1px solid #222;
}

.footer-brand p { font-size: 0.9rem; line-height: 1.7; color: #888; margin-top: 1.25rem; max-width: 300px; }

.footer-logo { height: 48px; width: auto; display: block; }

.social-links { display: flex; gap: 0.75rem; margin-top: 1.5rem; }
.social-links a {
    width: 38px; height: 38px; background: #1a1a1a; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: #888; text-decoration: none; transition: background 0.25s, color 0.25s;
}
.social-links a:hover { background: #c0392b; color: #fff; }
.social-links svg { width: 16px; height: 16px; }

.footer-col h4 {
    color: #fff; font-size: 0.85rem; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1.25rem;
}
.footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 0.65rem; }
.footer-col a { color: #888; text-decoration: none; font-size: 0.9rem; transition: color 0.2s; }
.footer-col a:hover { color: #e74c3c; }

.contact-info li { display: flex; align-items: flex-start; gap: 0.6rem; }
.contact-info svg { width: 16px; height: 16px; flex-shrink: 0; margin-top: 2px; }
.contact-info a, .contact-info span { font-size: 0.88rem; }

.footer-bottom {
    max-width: 1300px; margin: 0 auto; padding: 1.5rem 0;
    display: flex; justify-content: space-between; align-items: center;
    gap: 1rem; font-size: 0.8rem; color: #555;
}

@media (max-width: 1000px) { .footer-inner { grid-template-columns: 1fr 1fr; } .footer-brand { grid-column: 1 / -1; } }
@media (max-width: 560px)  { .footer-inner { grid-template-columns: 1fr; } .footer-bottom { flex-direction: column; text-align: center; } }
</style>