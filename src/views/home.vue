<template>
  <ion-page class="ion-page-custom">
    <header class="custom-header">
      <div class="logo-container">
        <img src="/assets/totopos-garchi-logo.png" alt="Totopos Garchi" class="logo" />
      </div>
      <nav class="custom-nav">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
    <main class="main-content" style="flex: 1 0 auto;">
      <section class="hero">
        <div class="hero-content">
          <img src="/assets/totopos-garchi-logo.png" alt="Totopos Garchi" class="hero-logo" />
          <h1 class="hero-title">¡Totopos para conquistar tu paladar!</h1>
          <p class="hero-subtitle">Sin conservadores y con el sabor más auténtico</p>
          <a href="#contacto" class="cta-button">¡HAZ TU PEDIDO AHORA!</a>
        </div>
      </section>
      <section class="stats-section">
        <div class="stat-item">
          <div class="stat-icon stat-brown">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="none" />
              <path d="M20 12l2.5 5 5.5.5-4 4 1 5.5-5-2.5-5 2.5 1-5.5-4-4 5.5-.5L20 12z" stroke="#fff" stroke-width="2"
                fill="none" />
            </svg>
          </div>
          <div class="stat-text">
            <span class="stat-main">+20 años</span>
            <span class="stat-desc">en el Mercado</span>
          </div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-icon stat-orange">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="none" />
              <rect x="13" y="18" width="14" height="10" rx="2" stroke="#fff" stroke-width="2" fill="none" />
              <rect x="16" y="14" width="8" height="4" rx="1" stroke="#fff" stroke-width="2" fill="none" />
            </svg>
          </div>
          <div class="stat-text">
            <span class="stat-main stat-orange-text">+100</span>
            <span class="stat-desc stat-orange-text">Puntos de Venta</span>
          </div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-icon stat-brown">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="none" />
              <path d="M13 27l14-14M13 13l14 14" stroke="#fff" stroke-width="2" fill="none" />
            </svg>
          </div>
          <div class="stat-text">
            <span class="stat-main">+300</span>
            <span class="stat-desc">Colaboradores</span>
          </div>
        </div>
      </section>
      <section class="productos-section" id="productos">
        <h2 class="productos-title">NUESTROS PRODUCTOS</h2>
        <h3 class="productos-subtitle">¡SÍ SABEN RICOS!</h3>
        <p class="productos-desc">“Explora la diversidad de sabores que ofrecen nuestros productos”</p>
        <div class="productos-grid">
          <div class="producto-card" style="background:#ff2d2d;">
            <img src="" alt="Totopos Charricas" class="producto-img" />
            <button class="producto-btn">Ver Productos</button>
          </div>
          <div class="producto-card" style="background:#4db6ff;">
            <img src="" alt="Brachis Malanga" class="producto-img" />
          </div>
          <div class="producto-card" style="background:#ffe14d;">
            <img src="" alt="Frituras Floochis" class="producto-img" />
          </div>
          <div class="producto-card" style="background:#4db6ff;">
            <img src="" alt="Hojuelas de Plátano" class="producto-img" />
          </div>
        </div>
        <button class="explorar-btn">Explorar Productos</button>
      </section>
    </main>
    <footer class="main-footer">
      <div class="footer-content">
        <div class="footer-social">
          <a href="#" aria-label="Facebook" class="footer-icon"><svg width="28" height="28" fill="none"
              viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#2d1a0b" />
              <path d="M15.5 8.5h-2V7.5c0-.4.3-.5.5-.5h1.5V5h-2c-1.7 0-2.5 1.3-2.5 2.5V8.5H8.5V11h2v6h2.5v-6h2l.5-2.5z"
                fill="#fff" />
            </svg></a>
          <a href="#" aria-label="Instagram" class="footer-icon"><svg width="28" height="28" fill="none"
              viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#2d1a0b" />
              <rect x="7" y="7" width="10" height="10" rx="3" stroke="#fff" stroke-width="2" />
              <circle cx="12" cy="12" r="2.5" stroke="#fff" stroke-width="2" />
              <circle cx="15.5" cy="8.5" r="1" fill="#fff" />
            </svg></a>
          <a href="#" aria-label="TikTok" class="footer-icon"><svg width="28" height="28" fill="none"
              viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#2d1a0b" />
              <path d="M15 8.5V13c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.2 0 .4 0 .5.1V8.5h1.5z" fill="#fff" />
            </svg></a>
        </div>
        <div class="footer-links">
          <a href="#" class="footer-link">Aviso de Privacidad</a>
          <span class="footer-divider">|</span>
          <a href="#" class="footer-link">Términos y Condiciones</a>
          <span class="footer-divider">|</span>
          <a href="#contacto" class="footer-link">Contáctanos</a>
        </div>
        <div class="footer-copy">
          © 2025 Copyright | Totopos Garchi
        </div>
      </div>
    </footer>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage } from '@ionic/vue';

defineOptions({
  name: 'HomePage'
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
html,
body,
#app {
  --header-height: 5rem;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
  font-family: 'Poppins', sans-serif;
}

.ion-page-custom {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
}

.custom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  padding: 0 2rem;
  background: linear-gradient(90deg, #ff6f00, #e65100);
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 50px;
  border-radius: 50%;
}

.custom-nav ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.custom-nav a {
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  transition: color 0.3s, transform 0.3s;
}

.custom-nav a:hover {
  color: #ffd700;
  transform: scale(1.1);
}

.custom-nav a:active {
  color: #ff4d4d;
}

.main-content {
  flex: 1 0 auto;
  background: white;

  text-align: center;
  overflow-x: hidden;
  width: 100vw;
}

.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh ;
  text-align: center;
  color: #fff;
  background: linear-gradient(135deg, #ff8a00, #ff0000);
  overflow: hidden;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at center, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0) 70%),
    url('/assets/totopos-garchi-logo.jpg') center/40% no-repeat;
  opacity: 0.1;
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.hero-logo {
  width: 180px;
  height: 180px;
  border-radius: 50%;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
}

.hero-subtitle {
  font-size: 1.4rem;
  margin: 0;
}

.cta-button {
  display: inline-block;
  padding: 0.8rem 1.6rem;
  background: linear-gradient(90deg, #ff6f00, #e65100);
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 30px;
  text-decoration: none;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
}

.stats-section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 0;
  min-height: calc(100vh - var(--header-height));
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-brown {
  background: #2d1a0b;
}

.stat-orange {
  background: #ff9800;
}

.stat-main {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a1a1a;
}

.stat-desc {
  display: block;
  font-size: 1rem;
  color: #333;
}

.stat-orange-text {
  color: #ff9800;
}

.stat-divider {
  width: 2px;
  height: 50px;
  background: #ccc;
  margin: 0 1rem;
}

.productos-section {
  margin: 0;
  text-align: center;
  min-height: calc(100vh - var(--header-height));
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.productos-title {
  color: #ff9800;
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 0.2rem;
}

.productos-subtitle {
  font-size: 2.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
}

.productos-desc {
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 2rem;
}

.productos-grid {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.producto-card {
  background: #fff;
  border-radius: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 220px;
  min-height: 340px;
  position: relative;
}

.producto-img {
  width: 150px;
  height: 220px;
  object-fit: contain;
  margin-bottom: 1.2rem;
}

.producto-btn {
  background: linear-gradient(90deg, #1bbf3a, #0e7c25);
  color: #fff;
  border: none;
  border-radius: 1.5rem;
  padding: 0.5rem 1.5rem;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 0.5rem;
  cursor: pointer;
  transition: filter 0.2s;
}

.producto-btn:hover {
  filter: brightness(1.1);
}

.explorar-btn {
  margin-top: 1.5rem;
  background: #fff;
  color: #1a1a1a;
  border: 2px solid #1a1a1a;
  border-radius: 2rem;
  padding: 0.7rem 2rem;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.explorar-btn:hover {
  background: #1a1a1a;
  color: #fff;
}

.main-footer {
  background: #2d1a0b;
  color: #fff;
  padding: 2rem 0 1rem 0;
  text-align: center;
  margin-top: 3rem;
}

.footer-content {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
}

.footer-social {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 0.5rem;
}

.footer-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: none;
  transition: transform 0.2s;
}

.footer-icon:hover {
  transform: scale(1.15);
}

.footer-links {
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 1rem;
}

.footer-link {
  color: #fff;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #ff9800;
}

.footer-divider {
  color: #fff;
  font-size: 1.2rem;
}

.footer-copy {
  font-size: 0.95rem;
  color: #fff;
  margin-top: 0.5rem;
}

@media (max-width: 900px) {
  .stats-section {
    flex-direction: column;
    gap: 1.5rem;
  }

  .stat-divider {
    display: none;
  }

  .productos-grid {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
}
</style>
