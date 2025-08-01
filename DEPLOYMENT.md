# 🌮 Totopos Garchi - Guía de Despliegue

## Opciones de Despliegue Gratuito

### 1. Netlify (Recomendado)

1. **Opción A: Despliegue desde GitHub**
   - Conecta tu repositorio de GitHub a Netlify
   - Netlify detectará automáticamente la configuración desde `netlify.toml`
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Opción B: Despliegue manual**
   ```bash
   npm run build
   # Luego sube la carpeta 'dist' a Netlify
   ```

### 2. Vercel

1. **Desde GitHub:**
   - Conecta tu repositorio a Vercel
   - Vercel usará la configuración de `vercel.json`

2. **CLI de Vercel:**
   ```bash
   npm install -g vercel
   npm run build
   vercel --prod
   ```

### 3. GitHub Pages

```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

## Comandos de Build

```bash
# Desarrollo
npm run dev

# Producción
npm run build

# Preview local del build
npm run preview
```

## URL de Ejemplo

Una vez desplegado, tu app estará disponible en URLs como:
- Netlify: `https://totopos-garchi.netlify.app`
- Vercel: `https://totopos-garchi.vercel.app`

## Características del Proyecto

- ⚡ Ionic Vue 3 + Vite
- 📱 Responsive design
- 🌮 Optimizado para negocio de totopos
- 🚀 Build optimizado para producción
