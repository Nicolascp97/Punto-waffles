# ⚡ Quick Start — Punto Waffles Landing

Guía rápida para empezar en 5 minutos.

---

## 1️⃣ Instalar

```bash
cd landing-menu
npm install
```

## 2️⃣ Desarrollar

```bash
npm run dev
```

Abre http://localhost:5173 en tu navegador. ✨

## 3️⃣ Personalizar

### Cambiar número de WhatsApp

Abre `src/data/menuData.js`:
```javascript
export const WAFFLES_PHONE = "56912345678"  // ← TU NÚMERO
```

También en `src/components/Header.jsx` y `src/pages/Landing.jsx` (busca `wa.me/`).

### Agregar imágenes reales

1. Crea carpeta `public/assets/`
2. Copia ahí:
   - `2.png` → `menu-precios.png`
   - `4.png` → `waffles-especiales.png`
   - `6.png` → `helados.png`

En `src/pages/Landing.jsx`, agrega antes del grid de waffles:
```jsx
<ImageDisplay
  src="/assets/waffles-especiales.png"
  alt="Nuestros waffles especiales"
  className="mb-space-12"
/>
```

## 4️⃣ Build para Producción

```bash
npm run build
```

Genera carpeta `dist/` lista para desplegar.

## 5️⃣ Desplegar

### Opción A: Vercel (Fácil ⭐)
1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Conecta tu repositorio
4. Vercel se encarga de todo automáticamente

### Opción B: Netlify
Igual que Vercel, pero ve a [netlify.com](https://netlify.com)

### Opción C: Tu propio servidor
Sube el contenido de `dist/` a tu servidor vía FTP

---

## 📁 Estructura Importante

```
landing-menu/
├── src/
│   ├── pages/Landing.jsx      ← La página principal
│   ├── data/menuData.js        ← Los datos del menú
│   └── components/             ← Componentes reutilizables
├── public/assets/              ← Aquí van las imágenes
└── tailwind.config.js          ← Colores y estilos
```

---

## 🎨 Colores Principales

Todos heredados del cooking game:

```
Naranja (principal):    #FF6B2C
Frambuesa (CTA):        #D4006A
Café oscuro (texto):    #2D1A00
Crema (fondo):          #FFF8F0
```

Están en `tailwind.config.js` bajo `colors`.

---

## 🔧 Cambios Comunes

### Cambiar un producto del menú
En `src/data/menuData.js`:
```javascript
waffles: {
  items: [
    {
      id: 1,
      name: "Sin Helado",              // ← Nombre
      description: "Base, Fruta...",   // ← Descripción
      price: 4500,                     // ← Precio en pesos
    },
    // Agrega más aquí
  ]
}
```

### Cambiar texto de una sección
En `src/pages/Landing.jsx`, busca `<SectionHeading>` y edita:
```jsx
<SectionHeading
  icon="🧇"
  title="Tu nuevo título aquí"
  subtitle="Tu nuevo subtítulo"
/>
```

### Cambiar colores globales
En `tailwind.config.js`, edita la sección `colors`:
```javascript
naranja: {
  waffle: "#FF6B2C",  // ← Cambiar aquí
  light: "#FFB347",
},
```

---

## ⚠️ Problemas Comunes

### El sitio no carga
```bash
# Limpia cache y reinstala
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Las imágenes no aparecen
- Verifica que estén en `public/assets/`
- Verifica que la ruta sea `/assets/...` (con `/` al inicio)

### El botón de WhatsApp no abre chat
- Asegúrate de que `WAFFLES_PHONE` sea correcto
- Formato: `56912345678` (sin `+`, sin espacios)

### Las animaciones se ven lentas
- Abre DevTools (F12)
- Desactiva el throttling (Performance > CPU throttling: No throttling)

---

## 📚 Documentación Completa

- `README.md` — Información general
- `INTEGRATION_GUIDE.md` — Integrar imágenes
- `DEPLOYMENT.md` — Desplegar en producción
- `ARCHITECTURE.md` — Estructura técnica profunda

---

## 🎯 Próximos Pasos

1. **Personalizar datos** — Actualiza `menuData.js` con tus productos
2. **Agregar imágenes** — Copia 2.png, 4.png, 6.png a `public/assets/`
3. **Actualizar WhatsApp** — Cambia el número en 3 lugares
4. **Probar mobile** — Abre DevTools (F12) y modo responsive
5. **Deploy** — Sube a Vercel o Netlify
6. **Integrar game** — Copia el cooking game cuando esté listo

---

## ✅ Checklist Antes de Producción

- [ ] Número de WhatsApp actualizado
- [ ] Imágenes del menú agregadas (si usas)
- [ ] `npm run dev` abre correctamente
- [ ] Se ve bien en mobile (F12, responsive mode)
- [ ] Botones funcionan
- [ ] `npm run build` sin errores
- [ ] Pronto desplegar en Vercel/Netlify

---

## 🚀 Listo para Empezar

```bash
# 1. Instala
npm install

# 2. Personaliza menuData.js y tailwind.config.js

# 3. Desarrolla
npm run dev

# 4. Cuando esté listo, build
npm run build

# 5. Deploy a Vercel/Netlify
```

**¡Tu landing está lista!** 🧇✨

Cualquier duda, revisa los otros archivos `.md` en este proyecto.
