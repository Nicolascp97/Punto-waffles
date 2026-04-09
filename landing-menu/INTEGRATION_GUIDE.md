# 📸 Guía de Integración de Imágenes — Punto Waffles Landing

Este documento explica cómo integrar las imágenes del menú (2.png, 4.png, 6.png) en la landing page.

---

## 🖼️ Estructura de Carpetas para Imágenes

Crea esta estructura en tu proyecto:

```
landing-menu/
└── public/
    └── assets/
        ├── waffles-especiales.png     ← de 4.png
        ├── menu-precios.png            ← de 2.png
        └── helados.png                 ← de 6.png
```

---

## 📋 Paso 1: Copiar las imágenes

1. Toma los archivos:
   - `punto-waffles/dist/img/4.png` → `/public/assets/waffles-especiales.png`
   - `punto-waffles/dist/img/2.png` → `/public/assets/menu-precios.png`
   - `punto-waffles/dist/img/6.png` → `/public/assets/helados.png`

2. Pega dentro de la carpeta `landing-menu/public/assets/`

---

## 🔧 Paso 2: Actualizar referencias en Landing.jsx

En `src/pages/Landing.jsx`, agrega un componente para mostrar las imágenes.

Opción A: **Mostrar imagen dentro de cada sección**

```jsx
// En la sección de waffles (después de SectionHeading)
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="rounded-2xl overflow-hidden shadow-xl mb-space-12"
>
  <img
    src="/assets/waffles-especiales.png"
    alt="Waffles Especiales — Sin Helado, Split, Postre Frutal"
    className="w-full h-auto object-cover"
    loading="lazy"
  />
</motion.div>
```

Opción B: **Mostrar antes del grid de cards**

```jsx
{/* Waffles Grid */}
<div className="grid md:grid-cols-3 gap-space-8 mb-space-16">
  {/* ... cards aquí ... */}
</div>
```

Reemplazar con:

```jsx
{/* Imagen de referencia */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="mb-space-12 rounded-xl overflow-hidden shadow-lg border-4 border-naranja-waffle/20"
>
  <img
    src="/assets/waffles-especiales.png"
    alt="Nuestros waffles especiales"
    className="w-full h-auto object-cover"
    loading="lazy"
  />
</motion.div>

{/* Waffles Grid */}
<div className="grid md:grid-cols-3 gap-space-8 mb-space-16">
  {/* ... cards aquí ... */}
</div>
```

---

## 🎨 Paso 3: Agregar componente ImageDisplay (Opcional)

Si quieres un componente reutilizable para mostrar imágenes, crea:

**`src/components/ImageDisplay.jsx`**

```jsx
import React from 'react'
import { motion } from 'framer-motion'

/**
 * ImageDisplay — Componente para mostrar imágenes del menú con animación
 *
 * @param {string} src - Ruta de la imagen
 * @param {string} alt - Texto alternativo
 * @param {string} className - Clases Tailwind adicionales
 */
export default function ImageDisplay({ src, alt, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`rounded-xl overflow-hidden shadow-lg border-4 border-naranja-waffle/20 hover:shadow-2xl transition-shadow duration-300 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover"
        loading="lazy"
        fetchPriority="auto"
      />
    </motion.div>
  )
}
```

Luego úsalo así:

```jsx
import ImageDisplay from '../components/ImageDisplay'

// En Landing.jsx, dentro de cada sección:
<ImageDisplay
  src="/assets/waffles-especiales.png"
  alt="Nuestros waffles especiales"
  className="mb-space-12"
/>
```

---

## 🏞️ Paso 4: Optimizaciones de Imagen

### Agregar width/height para evitar CLS

```jsx
<img
  src="/assets/waffles-especiales.png"
  alt="Waffles Especiales"
  width={1200}
  height={600}
  loading="lazy"
  className="w-full h-auto object-cover"
/>
```

### Usar srcset para responsive images (avanzado)

```jsx
<img
  src="/assets/waffles-especiales.png"
  srcSet="
    /assets/waffles-especiales-sm.png 480w,
    /assets/waffles-especiales-md.png 768w,
    /assets/waffles-especiales-lg.png 1200w
  "
  sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px"
  alt="Waffles Especiales"
  loading="lazy"
  className="w-full h-auto object-cover"
/>
```

---

## 🎬 Paso 5: Agregar Galería (Premium)

Si quieres mostrar múltiples fotos en un carrusel, crea:

**`src/components/ImageCarousel.jsx`**

```jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'

export default function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % images.length)
  const prev = () => setCurrent((current - 1 + images.length) % images.length)

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current].src}
          alt={images[current].alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-auto object-cover rounded-xl"
        />
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {images.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === current ? 'bg-naranja-waffle w-8' : 'bg-white/50'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Prev/Next */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        ▶
      </button>
    </div>
  )
}
```

Uso:

```jsx
import ImageCarousel from '../components/ImageCarousel'

const waffleImages = [
  { src: '/assets/waffles-especiales.png', alt: 'Sin Helado' },
  { src: '/assets/waffles-split.png', alt: 'Split' },
  { src: '/assets/waffles-frutal.png', alt: 'Postre Frutal' },
]

// En Landing.jsx:
<ImageCarousel images={waffleImages} />
```

---

## 📊 Paso 6: Verificar Carga de Imágenes

Abre DevTools (F12) y verifica en **Network**:
- Las imágenes cargan correctamente
- El tamaño es razonable (<500KB cada una)
- No hay errores 404

Si las imágenes son muy grandes, comprime antes de agregar:
- Usa [TinyPNG](https://tinypng.com/) o [ImageOptim](https://imageoptim.com/)
- Convierte a WebP si el navegador lo soporta

---

## ✅ Checklist de Integración

- [ ] Carpeta `public/assets/` creada
- [ ] Imágenes (2.png, 4.png, 6.png) copiadas y renombradas
- [ ] Referencias actualizadas en `Landing.jsx` o componente `ImageDisplay`
- [ ] Imágenes se ven correctamente en `npm run dev`
- [ ] Responsive en mobile (abre con F12, modo responsive)
- [ ] Imágenes cargan sin errores en DevTools > Network
- [ ] Performance aceptable (LCP < 2.5s)

---

## 🚀 Deploy

Cuando estés listo para producción:

```bash
npm run build
```

Verifica que la carpeta `dist/` incluya `assets/` con las imágenes.

---

## 🆘 Problemas Comunes

### Las imágenes no aparecen
**Causa:** Ruta incorrecta
**Solución:** Verifica que la ruta sea `/assets/...` (con el `/` al inicio)

### Las imágenes se ven borrosas
**Causa:** Tamaño muy pequeño o compresión excesiva
**Solución:** Usa imágenes a 1200x600px mínimo

### Las imágenes cargan lentamente
**Causa:** Archivos muy grandes
**Solución:** Comprime con TinyPNG o convierte a WebP

---

**¡Listo!** Tu landing ahora tendrá imágenes reales del menú. 🎉
