<template>
  <ion-page class="ion-page-custom">
    <!-- Meta tags for SEO -->
    <ion-header>
      <meta name="description" content="Totopos Garchi - Los mejores totopos artesanales sin conservadores. +20 años de experiencia. Sabor auténtico para todas las ocasiones.">
      <meta name="keywords" content="totopos, tortilla chips, snacks mexicanos, sin conservadores, artesanales, Garchi">
      <meta property="og:title" content="Totopos Garchi - Sabor Auténtico Sin Conservadores">
      <meta property="og:description" content="Descubre nuestros deliciosos totopos artesanales. +20 años conquistando paladares con el sabor más auténtico.">
      <meta property="og:image" content="/assets/totopos-garchi-logo.png">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </ion-header>
    
    <header class="custom-header" role="banner">
      <div class="logo-container">
        <img src="/assets/totopos-garchi-logo.png" alt="Totopos Garchi - Logo oficial" class="logo" loading="eager" />
        <span class="sr-only">Totopos Garchi - Inicio</span>
      </div>
      <nav class="custom-nav" role="navigation" aria-label="Navegación principal">
        <button class="mobile-menu-btn" @click="toggleMobileMenu" aria-label="Abrir menú móvil">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
        <ul class="nav-list" :class="{ 'nav-open': mobileMenuOpen }">
          <li><a href="#inicio" @click="(e) => scrollToSection(e, '#inicio')" aria-label="Ir a sección de inicio">Inicio</a></li>
          <li><a href="#productos" @click="(e) => scrollToSection(e, '#productos')" aria-label="Ver nuestros productos">Productos</a></li>
          <li><a href="#contacto" @click="(e) => scrollToSection(e, '#contacto')" aria-label="Información de contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
    <main class="main-content" role="main">
      <section id="inicio" class="hero" aria-labelledby="hero-title">
        <div class="hero-background"></div>
        <div class="hero-content">
          <div class="hero-logo-container">
            <img 
              src="/assets/totopos-garchi-logo.png" 
              alt="Logo de Totopos Garchi" 
              class="hero-logo" 
              loading="eager"
              @error="handleHeroImageError"
              @load="handleHeroImageLoad"
            />
            <div class="hero-logo-placeholder">
              <div class="hero-placeholder-icon">🌮</div>
              <span class="hero-placeholder-text">Totopos Garchi</span>
            </div>
          </div>
          <h1 id="hero-title" class="hero-title">¡Totopos para conquistar tu paladar!</h1>
          <p class="hero-subtitle">Sin conservadores y con el sabor más auténtico</p>
          <div class="hero-features">
            <span class="feature-badge">✓ 100% Natural</span>
            <span class="feature-badge">✓ Sin Conservadores</span>
            <span class="feature-badge">✓ Sabor Auténtico</span>
          </div>
          <a href="#contacto" class="cta-button" aria-label="Hacer pedido ahora - Ir a contacto">
            ¡HAZ TU PEDIDO AHORA!
            <span class="cta-arrow">→</span>
          </a>
        </div>
        <div class="scroll-indicator" @click="scrollToNextSection" aria-label="Deslizar hacia abajo para ver más">
          <div class="scroll-arrow"></div>
        </div>
      </section>
      <section class="stats-section" aria-labelledby="stats-title">
        <h2 id="stats-title" class="sr-only">Estadísticas de la empresa</h2>
        <div class="stats-container">
          <div class="stat-item" data-aos="fade-up" data-aos-delay="100">
            <div class="stat-icon stat-brown">
              <span style="color: white; font-size: 28px; font-weight: bold;">🌽</span>
            </div>
            <div class="stat-text">
              <span class="stat-main" data-count="20">+20 años</span>
              <span class="stat-desc">en el Mercado</span>
            </div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item" data-aos="fade-up" data-aos-delay="200">
            <div class="stat-icon stat-orange">
              <span style="color: white; font-size: 28px; font-weight: bold;">🏪</span>
            </div>
            <div class="stat-text">
              <span class="stat-main stat-orange-text" data-count="100">+100</span>
              <span class="stat-desc stat-orange-text">Puntos de Venta</span>
            </div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item" data-aos="fade-up" data-aos-delay="300">
            <div class="stat-icon stat-brown">
              <span style="color: white; font-size: 28px; font-weight: bold;">🤝</span>
            </div>
            <div class="stat-text">
              <span class="stat-main" data-count="300">+300</span>
              <span class="stat-desc">Colaboradores</span>
            </div>
          </div>
        </div>
      </section>
            <section class="productos-section" id="productos" aria-labelledby="productos-title">
        <div class="productos-header">
          <p class="productos-overline">NUESTROS PRODUCTOS</p>
          <h2 id="productos-title" class="productos-title">¡SABOR AUTÉNTICO MEXICANO!</h2>
          <p class="productos-desc">"Descubre la variedad de sabores únicos en nuestros totopos artesanales"</p>
        </div>
        <div class="productos-grid">
          <article class="producto-card producto-nacho" data-aos="fade-up" data-aos-delay="100">
            <div class="producto-content">
              <div class="producto-bg" style="background:#ff6f00;"></div>
              <div class="producto-img-container">
                <img 
                  src="" 
                  alt="Totopos Sabor Nacho - Clásico queso nacho" 
                  class="producto-img" 
                  loading="lazy" 
                  @error="handleImageError"
                  @load="handleImageLoad"
                />
                <div class="producto-placeholder">
                  <div class="placeholder-icon">🧀</div>
                  <span class="placeholder-text">Totopos Nacho</span>
                </div>
              </div>
              <div class="producto-info">
                <h3 class="producto-name">Totopos Sabor Nacho</h3>
                <p class="producto-description">El clásico sabor a queso nacho que todos aman</p>
                <button class="producto-btn" aria-label="Ver productos Totopos Nacho">
                  Ver Productos
                  <span class="btn-icon">→</span>
                </button>
              </div>
            </div>
          </article>
          <article class="producto-card" data-aos="fade-up" data-aos-delay="200">
            <div class="producto-content">
              <div class="producto-bg" style="background:#ff1744;"></div>
              <div class="producto-img-container">
                <img 
                  src="" 
                  alt="Totopos Flamin Hot - Sabor picante intenso" 
                  class="producto-img" 
                  loading="lazy" 
                  @error="handleImageError"
                  @load="handleImageLoad"
                />
                <div class="producto-placeholder">
                  <div class="placeholder-icon">🌶️</div>
                  <span class="placeholder-text">Totopos Flamin Hot</span>
                </div>
              </div>
              <div class="producto-info">
                <h3 class="producto-name">Totopos Flamin Hot</h3>
                <p class="producto-description">Para los amantes del picante extremo</p>
              </div>
            </div>
          </article>
          <article class="producto-card" data-aos="fade-up" data-aos-delay="300">
            <div class="producto-content">
              <div class="producto-bg" style="background:#2e2e2e;"></div>
              <div class="producto-img-container">
                <img 
                  src="" 
                  alt="Totopos Salsa Negra - Sabor intenso y ahumado" 
                  class="producto-img" 
                  loading="lazy" 
                  @error="handleImageError"
                  @load="handleImageLoad"
                />
                <div class="producto-placeholder">
                  <div class="placeholder-icon">🖤</div>
                  <span class="placeholder-text">Totopos Salsa Negra</span>
                </div>
              </div>
              <div class="producto-info">
                <h3 class="producto-name">Totopos Salsa Negra</h3>
                <p class="producto-description">Sabor intenso y ahumado irresistible</p>
              </div>
            </div>
          </article>
          <article class="producto-card" data-aos="fade-up" data-aos-delay="400">
            <div class="producto-content">
              <div class="producto-bg" style="background:#ffd54f;"></div>
              <div class="producto-img-container">
                <img 
                  src="" 
                  alt="Tostadas Garchi - Perfectas para tus antojitos" 
                  class="producto-img" 
                  loading="lazy" 
                  @error="handleImageError"
                  @load="handleImageLoad"
                />
                <div class="producto-placeholder">
                  <div class="placeholder-icon">🥙</div>
                  <span class="placeholder-text">Tostadas Garchi</span>
                </div>
              </div>
              <div class="producto-info">
                <h3 class="producto-name">Tostadas Garchi</h3>
                <p class="producto-description">Perfectas para todos tus antojitos mexicanos</p>
              </div>
            </div>
          </article>
        </div>
        <div class="productos-actions">
          <button class="explorar-btn" aria-label="Explorar todos nuestros productos">
            Explorar Productos
            <span class="btn-icon">🔍</span>
          </button>
        </div>
      </section>
      
      <!-- Nueva sección de contacto -->
      <section id="contacto" class="contacto-section" aria-labelledby="contacto-title">
        <div class="contacto-container">
          <div class="contacto-header">
            <h2 id="contacto-title" class="contacto-title">¡Contáctanos!</h2>
            <p class="contacto-subtitle">Estamos listos para atender tu pedido</p>
          </div>
          <div class="contacto-content">
            <div class="contacto-info">
              <div class="contacto-item">
                <div class="contacto-icon">📞</div>
                <div>
                  <h3>Teléfono</h3>
                  <p><a href="tel:+525551234567" aria-label="Llamar a Totopos Garchi">+52 55 5123 4567</a></p>
                </div>
              </div>
              <div class="contacto-item">
                <div class="contacto-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <p><a href="mailto:ventas@totopossgarchi.com" aria-label="Enviar email a Totopos Garchi">ventas@totopossgarchi.com</a></p>
                </div>
              </div>
              <div class="contacto-item">
                <div class="contacto-icon">📍</div>
                <div>
                  <h3>Ubicación</h3>
                  <p>Ciudad de México, México</p>
                </div>
              </div>
            </div>
            <div class="contacto-form">
              <form class="contact-form" @submit.prevent="handleContactSubmit">
                <div class="form-group">
                  <label for="nombre">Nombre completo</label>
                  <input type="text" id="nombre" v-model="contactForm.nombre" required aria-required="true">
                </div>
                <div class="form-group">
                  <label for="email">Correo electrónico</label>
                  <input type="email" id="email" v-model="contactForm.email" required aria-required="true">
                </div>
                <div class="form-group">
                  <label for="telefono">Teléfono</label>
                  <input type="tel" id="telefono" v-model="contactForm.telefono">
                </div>
                <div class="form-group">
                  <label for="mensaje">Mensaje</label>
                  <textarea id="mensaje" v-model="contactForm.mensaje" rows="4" required aria-required="true"></textarea>
                </div>
                <button type="submit" class="form-submit-btn">
                  Enviar Mensaje
                  <span class="btn-icon">📤</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="main-footer" role="contentinfo">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="footer-logo-container">
            <img 
              src="/assets/totopos-garchi-logo.png" 
              alt="Totopos Garchi Logo" 
              class="footer-logo" 
              loading="lazy"
              @error="handleFooterImageError"
            />
          </div>
          <p class="footer-tagline">Sabor auténtico sin conservadores</p>
        </div>
        <div class="footer-social">
          <h3 class="footer-section-title">Síguenos</h3>
          <div class="social-links">
            <a href="#" aria-label="Síguenos en Facebook" class="footer-icon">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="12" fill="#1877f2" />
                <path d="M15.5 8.5h-2V7.5c0-.4.3-.5.5-.5h1.5V5h-2c-1.7 0-2.5 1.3-2.5 2.5V8.5H8.5V11h2v6h2.5v-6h2l.5-2.5z"
                  fill="#fff" />
              </svg>
              <span class="social-name">Facebook</span>
            </a>
            <a href="#" aria-label="Síguenos en Instagram" class="footer-icon">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="12" fill="#E4405F" />
                <rect x="7" y="7" width="10" height="10" rx="3" stroke="#fff" stroke-width="2" />
                <circle cx="12" cy="12" r="2.5" stroke="#fff" stroke-width="2" />
                <circle cx="15.5" cy="8.5" r="1" fill="#fff" />
              </svg>
              <span class="social-name">Instagram</span>
            </a>
            <a href="#" aria-label="Síguenos en TikTok" class="footer-icon">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="12" fill="#000" />
                <path d="M15 8.5V13c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.2 0 .4 0 .5.1V8.5h1.5z" fill="#fff" />
              </svg>
              <span class="social-name">TikTok</span>
            </a>
          </div>
        </div>
        <div class="footer-links">
          <h3 class="footer-section-title">Enlaces</h3>
          <ul class="footer-nav">
            <li><a href="#" class="footer-link">Aviso de Privacidad</a></li>
            <li><a href="#" class="footer-link">Términos y Condiciones</a></li>
            <li><a href="#contacto" class="footer-link">Contáctanos</a></li>
            <li><a href="#productos" class="footer-link">Productos</a></li>
          </ul>
        </div>
        <div class="footer-contact">
          <h3 class="footer-section-title">Contacto</h3>
          <div class="contact-info">
            <p><a href="tel:+525551234567" class="footer-contact-link">📞 +52 55 5123 4567</a></p>
            <p><a href="mailto:ventas@totopossgarchi.com" class="footer-contact-link">📧 ventas@totopossgarchi.com</a></p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copy">© 2025 Totopos Garchi. Todos los derechos reservados.</p>
        <p class="footer-credits">Hecho con ❤️ en México</p>
      </div>
    </footer>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader } from '@ionic/vue';
import { ref, reactive, onMounted } from 'vue';

defineOptions({
  name: 'HomePage'
});

// Reactive data
const mobileMenuOpen = ref(false);
const contactForm = reactive({
  nombre: '',
  email: '',
  telefono: '',
  mensaje: ''
});

// Methods
const scrollToSection = (event: Event, sectionId: string) => {
  event.preventDefault();
  closeMobileMenu();
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const scrollToNextSection = () => {
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    statsSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleContactSubmit = () => {
  // Validation
  if (!contactForm.nombre || !contactForm.email || !contactForm.mensaje) {
    alert('Por favor, completa todos los campos requeridos.');
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(contactForm.email)) {
    alert('Por favor, ingresa un email válido.');
    return;
  }

  // Here you would typically send the form data to a server
  console.log('Formulario enviado:', contactForm);
  alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  
  // Reset form
  Object.assign(contactForm, {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
};

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  const container = img.closest('.producto-img-container');
  
  if (img && container) {
    img.style.display = 'none';
    const placeholder = container.querySelector('.producto-placeholder') as HTMLElement;
    if (placeholder) {
      placeholder.style.display = 'flex';
    }
  }
};

const handleImageLoad = (event: Event) => {
  const img = event.target as HTMLImageElement;
  const container = img.closest('.producto-img-container');
  
  // Si la imagen tiene src vacío o no se puede cargar, mostrar placeholder
  if (!img.src || img.src === window.location.href || img.naturalWidth === 0) {
    if (container) {
      img.style.display = 'none';
      const placeholder = container.querySelector('.producto-placeholder') as HTMLElement;
      if (placeholder) {
        placeholder.style.display = 'flex';
      }
    }
    return;
  }
  
  if (img && container) {
    img.style.display = 'block';
    const placeholder = container.querySelector('.producto-placeholder') as HTMLElement;
    if (placeholder) {
      placeholder.style.display = 'none';
    }
  }
};

const handleHeroImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  const container = img.closest('.hero-logo-container');
  
  if (img && container) {
    img.style.display = 'none';
    const placeholder = container.querySelector('.hero-logo-placeholder') as HTMLElement;
    if (placeholder) {
      placeholder.style.display = 'flex';
    }
  }
};

const handleHeroImageLoad = (event: Event) => {
  const img = event.target as HTMLImageElement;
  const container = img.closest('.hero-logo-container');
  
  if (img && container) {
    img.style.display = 'block';
    const placeholder = container.querySelector('.hero-logo-placeholder') as HTMLElement;
    if (placeholder) {
      placeholder.style.display = 'none';
    }
  }
};

const handleFooterImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  if (img) {
    img.style.display = 'none';
  }
};

const initializePlaceholders = () => {
  // Mostrar placeholders para todas las imágenes que no tienen src válido
  const productImages = document.querySelectorAll('.producto-img');
  productImages.forEach((img: Element) => {
    const imgElement = img as HTMLImageElement;
    const container = img.closest('.producto-img-container');
    
    if (!imgElement.src || imgElement.src === window.location.href) {
      imgElement.style.display = 'none';
      const placeholder = container?.querySelector('.producto-placeholder') as HTMLElement;
      if (placeholder) {
        placeholder.style.display = 'flex';
      }
    }
  });
};

// Add scroll effect to header
onMounted(() => {
  // Initialize placeholders for images without src
  setTimeout(() => {
    initializePlaceholders();
  }, 100);

  const header = document.querySelector('.custom-header');
  const handleScroll = () => {
    if (window.scrollY > 100) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    const nav = document.querySelector('.custom-nav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuOpen.value && nav && !nav.contains(e.target as Node) && !menuBtn?.contains(e.target as Node)) {
      closeMobileMenu();
    }
  });

  // Add counter animation for stats
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statsSection = entry.target;
        const counters = statsSection.querySelectorAll('[data-count]');
        
        counters.forEach((counter: Element) => {
          const target = parseInt((counter as HTMLElement).dataset.count || '0');
          const element = counter as HTMLElement;
          let current = 0;
          const increment = target / 50;
          
          const updateCounter = () => {
            if (current < target) {
              current += increment;
              element.textContent = `+${Math.ceil(current)}${target >= 100 ? '' : ' años'}`;
              requestAnimationFrame(updateCounter);
            } else {
              element.textContent = `+${target}${target === 20 ? ' años' : ''}`;
            }
          };
          
          updateCounter();
        });
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    observer.observe(statsSection);
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* Reset and base styles */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100vw;
  overflow-x: hidden;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  scroll-behavior: smooth;
  background: transparent !important;
  color: #1a1a1a !important;
}

/* Accessibility classes */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Page layout */
.ion-page-custom {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow-x: hidden;
  background: transparent !important;
  color: #1a1a1a !important;
}

/* Header styles */
.custom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  padding: 0 2rem;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.custom-header.scrolled {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.logo-container {
  display: flex;
  align-items: center;
  z-index: 1001;
}

.logo {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  object-fit: contain;
  transition: var(--transition);

  padding: 4px;
}

.logo:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  border-color: var(--accent-gold);
}

/* Navigation */
.custom-nav {
  position: relative;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1002;
}

.hamburger-line {
  width: 25px;
  height: 3px;
  background: white;
  margin: 3px 0;
  transition: var(--transition);
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-list a {
  text-decoration: none;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: var(--transition);
  position: relative;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-list a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--accent-gold);
  transition: var(--transition);
  transform: translateX(-50%);
}

.nav-list a:hover {
  background: rgba(255, 215, 0, 0.2);
  color: var(--accent-gold);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-color: var(--accent-gold);
}

.nav-list a:hover::after {
  width: 80%;
}

/* Main content */
.main-content {
  flex: 1 0 auto;
  background: white !important;
  text-align: center;
  overflow-x: hidden;
  width: 100vw;
  margin-top: var(--header-height);
  color: #1a1a1a !important;
}

/* Hero section */
.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  color: #fff;
  background: linear-gradient(135deg, #ff8a00, #ff0000, #ff6f00);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  overflow: hidden;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.hero-background {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.2), transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(255, 215, 0, 0.1), transparent 50%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 800px;
  padding: 2rem;
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-logo-container {
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-logo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: contain;

  animation: float 3s ease-in-out infinite;
  transition: var(--transition);
  background: white;
  padding: 8px;
}

.hero-logo-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  gap: 0.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: float 3s ease-in-out infinite;
}

.hero-placeholder-icon {
  font-size: 4rem;
  opacity: 0.8;
  animation: pulse 2s infinite;
}

.hero-placeholder-text {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-dark);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  line-height: 1.2;
}

.hero-subtitle {
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  margin: 0;
  font-weight: 400;
  opacity: 0.9;
}

.hero-features {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem 0;
}

.feature-badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--primary-orange), var(--primary-orange-dark));
  color: var(--text-white);
  font-size: 1.2rem;
  font-weight: 700;
  border: 3px solid var(--primary-orange-dark);
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 8px 25px rgba(255, 111, 0, 0.4);
  transition: var(--transition);
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
}

.cta-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 15px 40px rgba(255, 111, 0, 0.6);
  border-color: var(--primary-orange);
  background: linear-gradient(135deg, var(--primary-orange-dark), var(--primary-orange-light));
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s;
}

.cta-button:hover::before {
  left: 100%;
}

.cta-arrow {
  font-size: 1.5rem;
  transition: var(--transition);
}

.cta-button:hover .cta-arrow {
  transform: translateX(5px);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  cursor: pointer;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% { transform: translateX(-50%) translateY(0); }
  40%, 43% { transform: translateX(-50%) translateY(-10px); }
  70% { transform: translateX(-50%) translateY(-5px); }
}

.scroll-arrow {
  width: 30px;
  height: 30px;
  border: 2px solid white;
  border-radius: 50%;
  position: relative;
}

.scroll-arrow::after {
  content: '↓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 16px;
}

/* Stats section */
.stats-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: auto;
  position: relative;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(255, 111, 0, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(45, 26, 11, 0.03) 0%, transparent 50%);
}

.stats-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-orange), var(--primary-orange-dark));
}

.stats-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: #ffffff;
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: var(--transition);
  min-width: 250px;
  border: 2px solid rgba(255, 111, 0, 0.2);
}

.stat-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 111, 0, 0.4);
}

.stat-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-brown {
  background: #8B4513;
}

.stat-orange {
  background: #FF8C00;
}

.stat-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.stat-main {
  font-size: 2rem;
  font-weight: 800;
  color: #2d1a0b;
  line-height: 1;
}

.stat-desc {
  font-size: 1rem;
  color: #5a5a5a;
  font-weight: 500;
  margin-top: 0.25rem;
}

.stat-orange-text {
  color: #e65100 !important;
}

.stat-divider {
  width: 2px;
  height: 60px;
  background: linear-gradient(to bottom, transparent, var(--primary-orange), transparent);
  display: none;
}

/* Products section */
.productos-section {
  padding: 5rem 2rem;
  background: white;
  min-height: auto;
  position: relative;
}

.productos-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--secondary-brown), var(--primary-orange));
}

.productos-header {
  max-width: 800px;
  margin: 0 auto 4rem;
}

.productos-overline {
  color: var(--primary-orange);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.productos-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: #2c3e50;
  line-height: 1.2;
}

.productos-desc {
  font-size: 1.2rem;
  color: #4a4a4a;
  line-height: 1.6;
}

.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.producto-card {
  background: var(--bg-white);
  border-radius: var(--border-radius-large);
  overflow: hidden;
  box-shadow: 0 8px 25px var(--shadow-light);
  transition: var(--transition);
  position: relative;
  border: 2px solid transparent;
}

.producto-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px var(--shadow-medium);
  border-color: var(--primary-orange);
}

.producto-content {
  position: relative;
  height: 400px;
  display: flex;
  flex-direction: column;
}

.producto-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60%;
  border-radius: 20px 20px 0 0;
}

.producto-img-container {
  width: 100%;
  height: 60%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
}

.producto-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 2;
  transition: var(--transition);
}

.producto-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 249, 250, 0.95));
  backdrop-filter: blur(10px);
  border: 2px solid var(--primary-orange);
  border-radius: var(--border-radius-large) var(--border-radius-large) 0 0;
  z-index: 3;
  gap: 1rem;
}

.placeholder-icon {
  font-size: 3rem;
  opacity: 1;
  background: linear-gradient(135deg, var(--primary-orange), var(--primary-orange-dark));
  padding: 1rem;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(255, 140, 0, 0.3);
  animation: pulse 2s infinite;
  color: var(--text-white);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
}

.placeholder-text {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-white);
  text-align: center;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, var(--text-dark), #333);
  border-radius: var(--border-radius-large);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@keyframes pulse {
  0%, 100% { 
    opacity: 1; 
    transform: scale(1);
  }
  50% { 
    opacity: 0.8; 
    transform: scale(1.05);
  }
}

.producto-info {
  padding: 1.5rem;
  background: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.producto-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-dark);
  margin: 0 0 0.5rem 0;
}

.producto-description {
  font-size: 0.9rem;
  color: #555555;
  line-height: 1.4;
  margin: 0 0 1rem 0;
  flex: 1;
}

.producto-btn {
  background: linear-gradient(90deg, #1bbf3a, #0e7c25);
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 0.7rem 1.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-start;
}

.producto-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(27, 191, 58, 0.3);
}

.btn-icon {
  transition: var(--transition);
}

.producto-btn:hover .btn-icon {
  transform: translateX(3px);
}

.productos-actions {
  margin-top: 3rem;
  text-align: center;
}

.explorar-btn {
  background: linear-gradient(135deg, var(--text-dark), #333);
  color: var(--text-white);
  border: 2px solid var(--text-dark);
  border-radius: 50px;
  padding: 1rem 2.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  box-shadow: 0 4px 15px var(--shadow-light);
}

.explorar-btn:hover {
  background: linear-gradient(135deg, var(--primary-orange), var(--primary-orange-dark));
  color: var(--text-white);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px var(--shadow-medium);
  border-color: var(--primary-orange);
}

/* Contact section */
.contacto-section {
  padding: 5rem 2rem;
  background: var(--bg-light);
}

.contacto-container {
  max-width: 1200px;
  margin: 0 auto;
}

.contacto-header {
  text-align: center;
  margin-bottom: 4rem;
}

.contacto-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  color: black;
  margin-bottom: 1rem;
}

.contacto-subtitle {
  font-size: 1.3rem;
  color: #333333;
}

.contacto-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contacto-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contacto-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: white;
  border-radius: var(--border-radius);
  box-shadow: 0 5px 15px var(--shadow-light);
  transition: var(--transition);
}

.contacto-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px var(--shadow-medium);
}

.contacto-icon {
  font-size: 2rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-orange), var(--primary-orange-dark));
  border-radius: 50%;
  flex-shrink: 0;
}

.contacto-item h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-dark);
  margin: 0 0 0.5rem 0;
}

.contacto-item p {
  margin: 0;
  color: #555555;
}

.contacto-item a {
  color: var(--primary-orange);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
}

.contacto-item a:hover {
  color: var(--primary-orange-dark);
}

.contact-form {
  background: white;
  padding: 2.5rem;
  border-radius: var(--border-radius);
  box-shadow: 0 8px 25px var(--shadow-light);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: var(--transition);
  background: white;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-orange);
  box-shadow: 0 0 0 3px rgba(255, 111, 0, 0.1);
}

.form-submit-btn {
  background: black;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 1rem 2rem;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
}

/* Footer styles */
.main-footer {
  background: linear-gradient(135deg, var(--secondary-brown), #1a0f07);
  color: #fff;
  padding: 3rem 0 1rem 0;
  margin-top: 0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.footer-logo-container {
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-logo {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: contain;
  transition: var(--transition);
  background: white;
  padding: 4px;
}

.footer-logo:hover {
  transform: scale(1.05);
}

.footer-tagline {
  font-size: 1.1rem;
  color: #ccc;
  font-weight: 500;
  margin: 0;
}

.footer-section-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--accent-gold);
}

.footer-social {
  text-align: center;
}

.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.footer-icon {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
  transition: var(--transition);
  font-size: 0.9rem;
}

.footer-icon:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.social-name {
  font-weight: 500;
}

.footer-links {
  text-align: center;
}

.footer-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link {
  color: #ccc;
  text-decoration: none;
  transition: var(--transition);
  padding: 0.25rem 0;
  font-size: 0.95rem;
}

.footer-link:hover {
  color: var(--accent-gold);
  transform: translateX(5px);
}

.footer-contact {
  text-align: center;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-contact-link {
  color: #ccc;
  text-decoration: none;
  transition: var(--transition);
  font-size: 0.95rem;
}

.footer-contact-link:hover {
  color: var(--accent-gold);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 2rem 0;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-copy {
  font-size: 0.9rem;
  color: #ccc;
  margin: 0;
}

.footer-credits {
  font-size: 0.9rem;
  color: #ccc;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .contacto-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .stats-container {
    gap: 2rem;
  }
  
  .stat-divider {
    display: block;
    width: 80%;
    height: 2px;
    background: linear-gradient(to right, transparent, var(--primary-orange), transparent);
  }
}

@media (max-width: 768px) {
  /* Mobile header */
  .custom-header {
    padding: 0 1rem;
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .nav-list {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    z-index: 999;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .nav-list.nav-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .nav-list a {
    font-size: 1.2rem;
    padding: 1rem;
    border-radius: var(--border-radius);
    display: block;
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 0.5rem;
  }
  
  /* Mobile hero */
  .hero-content {
    padding: 1rem;
  }
  
  .hero-logo-container {
    width: 160px;
    height: 160px;
  }
  
  .hero-logo,
  .hero-logo-placeholder {
    width: 160px;
    height: 160px;
  }
  
  .hero-placeholder-icon {
    font-size: 3rem;
  }
  
  .hero-placeholder-text {
    font-size: 0.9rem;
  }
  
  .hero-features {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .feature-badge {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
  
  /* Mobile stats */
  .stats-container {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .stat-item {
    min-width: auto;
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
  }
  
  /* Mobile products */
  .productos-grid {
    grid-template-columns: 1fr;
    max-width: 350px;
    margin: 0 auto;
  }
  
  /* Mobile contact */
  .contacto-section {
    padding: 3rem 1rem;
  }
  
  .contacto-item {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .contact-form {
    padding: 1.5rem;
  }
  
  /* Mobile footer */
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
  
  .social-links {
    flex-direction: column;
    align-items: center;
  }
  
  .footer-nav {
    align-items: center;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .cta-button {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
  
  .productos-title {
    font-size: 2rem;
  }
  
  .contacto-title {
    font-size: 2rem;
  }
  
  .stat-item {
    padding: 1.5rem;
  }
  
  .contacto-item {
    padding: 1.5rem;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .scroll-indicator {
    animation: none;
  }
  
  .hero {
    animation: none;
  }
  
  .hero-logo {
    animation: none;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .hero {
    background: #000;
    color: #fff;
  }
  
  .cta-button {
    background: #fff;
    color: #000;
    border: 2px solid #000;
  }
  
  .producto-card {
    border: 2px solid #000;
  }
}

/* Focus styles for accessibility */
a:focus,
button:focus,
input:focus,
textarea:focus {
  outline: 3px solid var(--accent-gold);
  outline-offset: 2px;
}

/* Loading states */
.producto-img:not([src]):not([src=""]),
.hero-logo:not([src]):not([src=""]),
.footer-logo:not([src]):not([src=""]) {
  background: #f0f0f0;
  background-image: linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

.producto-img[src]:not([src=""]),
.hero-logo[src]:not([src=""]),
.footer-logo[src]:not([src=""]) {
  background: none;
  animation: none;
}

.producto-img[style*="display: none"],
.hero-logo[style*="display: none"],
.footer-logo[style*="display: none"] {
  background: none;
  animation: none;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Print styles */
@media print {
  .custom-header,
  .scroll-indicator,
  .cta-button,
  .explorar-btn,
  .producto-btn,
  .form-submit-btn,
  .footer-social {
    display: none;
  }
  
  .hero {
    background: white;
    color: black;
    min-height: auto;
    padding: 2rem;
  }
  
  .main-content {
    margin-top: 0;
  }
  
  body {
    font-size: 12pt;
    line-height: 1.4;
  }
}
</style>
