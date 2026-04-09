# 🚀 Guía de Deploy — Punto Waffles Landing

Este documento explica cómo desplegar la landing page en diferentes plataformas.

---

## 📦 Build de Producción

```bash
npm run build
```

Esto genera una carpeta `dist/` lista para desplegar.

---

## ☁️ Opción 1: Vercel (RECOMENDADO)

**Vercel es ideal para proyectos Vite/React. Despliegue en segundos.**

### Paso 1: Conectar repositorio
```bash
# Primero, inicializa git (si no lo has hecho)
git init
git add .
git commit -m "Initial commit: Punto Waffles landing"
git remote add origin https://github.com/tu-usuario/punto-waffles-landing.git
git push -u origin main
```

### Paso 2: Desplegar en Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Click en "New Project"
3. Selecciona tu repositorio de GitHub
4. Vercel detectará automáticamente que es un proyecto Vite
5. Click en "Deploy"

**¡Listo!** Tu sitio está en vivo en `https://punto-waffles-landing.vercel.app`

### Agregar dominio personalizado
1. En el panel de Vercel, ve a "Settings" > "Domains"
2. Agrega tu dominio (ej: `puntowaffles.cl`)
3. Sigue las instrucciones para actualizar los DNS

---

## ☁️ Opción 2: Netlify

### Paso 1: Conectar repositorio
```bash
git push origin main  # Asegúrate que el código está en GitHub
```

### Paso 2: Desplegar en Netlify
1. Ve a [netlify.com](https://netlify.com)
2. Click en "Add new site" > "Import an existing project"
3. Selecciona tu repositorio de GitHub
4. Vercel configura automáticamente:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click en "Deploy site"

**¡Listo!** Tu sitio está en vivo

---

## ☁️ Opción 3: GitHub Pages

**Menos recomendado para este proyecto, pero funciona.**

### Paso 1: Actualizar `vite.config.js`
```javascript
export default defineConfig({
  base: '/punto-waffles-landing/',  // Reemplazar con tu repo name
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
})
```

### Paso 2: Build y deploy
```bash
npm run build
npx gh-pages -d dist
```

Tu sitio estará en: `https://tu-usuario.github.io/punto-waffles-landing/`

---

## ☁️ Opción 4: Hosting Compartido (Cpanel/FTP)

Si tienes un hosting compartido (GoDaddy, Bluehost, etc.):

### Paso 1: Build local
```bash
npm run build
```

### Paso 2: Subir archivos
1. Abre tu cliente FTP (FileZilla, WinSCP)
2. Conecta a tu servidor
3. Navega a la carpeta `public_html/` o `www/`
4. Sube el contenido de la carpeta `dist/`

### Paso 3: Configurar .htaccess (para React Router)
Crea un archivo `.htaccess` en la raíz:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**¡Listo!** Tu sitio está en vivo en tu dominio

---

## 🌍 Variables de Ambiente en Producción

### En Vercel:
1. Ve a "Settings" > "Environment Variables"
2. Agrega:
   - `VITE_WAFFLE_PHONE`: `56912345678` (tu número)
   - Otros como necesites

### En Netlify:
1. Ve a "Site settings" > "Build & deploy" > "Environment"
2. Agrega variables igual que en Vercel

### En hosting compartido:
1. Crea un archivo `.env.production` local
2. Build con `npm run build` (Vite leerá las variables)

---

## ✅ Checklist Pre-Deploy

- [ ] Número de WhatsApp actualizado en el código
- [ ] Imágenes en `/public/assets/` (si las estás usando)
- [ ] Build local funciona: `npm run build && npm run preview`
- [ ] No hay errores en la consola del navegador
- [ ] El sitio se ve bien en mobile (F12, modo responsive)
- [ ] Botones de WhatsApp funcionan correctamente
- [ ] Animaciones cargan suavemente
- [ ] Imágenes cargan rápido (DevTools > Network)

---

## 📊 Performance Checks

Después de desplegar:

1. **Google PageSpeed Insights**
   - Ve a [pagespeed.web.dev](https://pagespeed.web.dev)
   - Ingresa tu URL
   - Verifica que tenga score >90 en mobile y desktop

2. **Core Web Vitals**
   - LCP (Largest Contentful Paint): < 2.5s ✓
   - INP (Interaction to Next Paint): < 200ms ✓
   - CLS (Cumulative Layout Shift): < 0.1 ✓

3. **DevTools**
   - F12 > Lighthouse
   - Run audit para performance, accessibility, best practices

---

## 🔒 Seguridad

- ✓ HTTPS habilitado (automático en Vercel/Netlify)
- ✓ Headers de seguridad configurados
- ✓ No hay datos sensibles en el código frontend
- ✓ Links a WhatsApp usan HTTPS

---

## 🔄 Actualizaciones Futuras

### Para hacer cambios después del deploy:

1. Edita el código localmente
2. Haz commit y push:
```bash
git add .
git commit -m "actualizar menú"
git push origin main
```

3. Vercel/Netlify detectan el cambio automáticamente
4. El deploy ocurre sin intervención manual ✨

---

## 📞 Soporte

Si tienes problemas:

- **Vercel**: [Documentación](https://vercel.com/docs)
- **Netlify**: [Documentación](https://docs.netlify.com)
- **GitHub Pages**: [Documentación](https://pages.github.com)

---

**¡Tu landing está lista para conquista el mundo de los waffles!** 🧇🚀
