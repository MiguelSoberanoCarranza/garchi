<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="danger">
        <ion-title>Totopos Garchi</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="home-content">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Totopos Garchi</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- Hero Section -->
      <div class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Totopos Garchi</h1>
          <p class="hero-subtitle">"Sin conservadores" - Calidad y sabor garantizados</p>
          <ion-button expand="block" size="large" class="cta-button">
            <ion-icon name="cart-outline" slot="start"></ion-icon>
            ¡Haz tu pedido ahora!
          </ion-button>
        </div>
        <div class="hero-image">
          <img src="/assets/totopos-garchi-logo.png" alt="Totopos Garchi" class="hero-img" />
        </div>
      </div>

      <!-- Products Section -->
      <div class="products-section">
        <h2 class="section-title">Nuestros Productos</h2>
        <ion-grid>
          <ion-row>
            <ion-col size="6" size-md="3">
              <div class="product-item">
                <ion-icon name="triangle-outline" class="product-icon"></ion-icon>
                <h4>Clásicos</h4>
              </div>
            </ion-col>
            <ion-col size="6" size-md="3">
              <div class="product-item">
                <ion-icon name="flame-outline" class="product-icon"></ion-icon>
                <h4>Picantes</h4>
              </div>
            </ion-col>
            <ion-col size="6" size-md="3">
              <div class="product-item">
                <ion-icon name="flower-outline" class="product-icon"></ion-icon>
                <h4>Gourmet</h4>
              </div>
            </ion-col>
            <ion-col size="6" size-md="3">
              <div class="product-item">
                <ion-icon name="pizza-outline" class="product-icon"></ion-icon>
                <h4>Especiales</h4>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>

      <!-- Call to Action -->
      <div class="cta-section">
        <h2>¿Listo para probar nuestros totopos?</h2>
        <p>Contáctanos y descubre la diferencia Garchi</p>
        <ion-button expand="block" size="large" fill="outline" class="contact-button">
          <ion-icon name="call-outline" slot="start"></ion-icon>
          Contactar Ahora
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/vue';
</script>

<style scoped>
.home-content {
  --background: linear-gradient(135deg, #ffffff 0%, #ffffff 100%);
}

.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  text-align: center;

  color: white;
  margin-bottom: 2rem;
}

.hero-content {
  max-width: 500px;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.hero-img {
  max-width: 100%;
  border-radius: 15px;
}

.cta-button {
  --background: #ffffff;
  --color: #ff0000;
  --border-radius: 25px;
  margin-top: 1rem;
}

.products-section {
  padding: 2rem 1rem;
  background: white;
}

.section-title {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: bold;
}

.product-item {
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  margin-bottom: 1rem;
}

.product-icon {
  font-size: 2.5rem;
  color: #ff0000;
  margin-bottom: 0.5rem;
}

.product-item h4 {
  color: #333;
  margin: 0;
  font-weight: bold;
}

.cta-section {
  padding: 3rem 1rem;
  background: #333;
  color: white;
  text-align: center;
}

.cta-section h2 {
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.cta-section p {
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.contact-button {
  --color: white;
  --border-color: white;
  --border-radius: 25px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
