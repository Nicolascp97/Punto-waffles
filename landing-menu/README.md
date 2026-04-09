# 🧇 Punto Waffles — Landing Page + Menú Interactivo

**🚀 DESPLEGADO EN VERCEL:** https://proyecto-waffles-gqapanca5-nicolas-projects-72a7265f.vercel.app

Una landing page premium para **Punto Waffles** que integra:
- **Menú completo** de productos (waffles, creps, postres, helados, bebidas)
- **CTA destacado** hacia el cooking game interactivo
- **Diseño coherente** con la paleta de colores del juego
- **Animaciones smooth** con Framer Motion
- **Responsive design** mobile-first

---

## 🚀 Instalación Rápida

### 1. Instalar dependencias
```bash
cd landing-menu
npm install
```

### 2. Iniciar servidor de desarrollo
```bash
npm run dev
```

El sitio abrirá automáticamente en `http://localhost:5173`

### 3. Build para producción
```bash
npm run build
```

---

## 📝 Configuración Necesaria

### Agregar número de WhatsApp
Abre `src/data/menuData.js` y reemplaza `56XXXXXXXXX` con tu número real:

```javascript
export const WAFFLES_PHONE = "56912345678"  // Reemplazar con el tuyo
```

También actualiza en:
- `src/components/Header.jsx` (línea con `https://wa.me/56XXXXXXXXX`)
- `src/pages/Landing.jsx` (en la sección CTA final)

### Agregar imágenes del menú
Copia las imágenes a `public/assets/`:

```
public/
├── assets/
│   ├── waffles.png        (imagen 4.png — waffles especiales)
│   ├── menu-prices.png    (imagen 2.png — menú general)
│   └── ice-cream.png      (imagen 6.png — helados)
```

Luego actualiza las referencias en `src/data/menuData.js`:
```javascript
image: "/assets/waffles.png",
image: "/assets/menu-prices.png",
image: "/assets/ice-cream.png",
```

---

## 🎨 Paleta de Colores

Heredada del **Punto Waffles Cooking Game**:

```css
--color-bg: #FFF8F0;           /* Crema cálido — fondo */
--color-bg-dark: #1A0F00;      /* Café oscuro */
--color-primary: #FF6B2C;      /* Naranja waffle */
--color-primary-light: #FFB347;/* Amarillo dorado */
--color-accent: #D4006A;       /* Frambuesa — CTAs */
--color-text: #2D1A00;         /* Café oscuro para textos */
--color-text-light: #FFF8F0;   /* Crema para textos */
--color-step-done: #4CAF50;    /* Verde (si necesitas) */
```

---

## 📦 Stack Tecnológico

- **React 18** — Interfaz
- **Vite** — Bundler
- **Tailwind CSS** — Estilos
- **Framer Motion** — Animaciones
- **React Router DOM** — Navegación (para futura integración del juego)

---

## 🏗️ Estructura de Carpetas

```
landing-menu/
├── public/
│   └── assets/            ← Aquí van las imágenes
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── MenuCard.jsx
│   │   └── SectionHeading.jsx
│   ├── pages/
│   │   └── Landing.jsx    ← Página principal
│   ├── data/
│   │   └── menuData.js    ← Datos del menú
│   ├── App.jsx            ← Router
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🔗 Integración con Cooking Game

Para integrar el **Punto Waffles Cooking Game** existente:

1. Copia el proyecto del cooking game a una carpeta `game/`
2. Actualiza `src/App.jsx` para que la ruta `/juego` cargue el componente del juego
3. Asegúrate de que ambos proyectos compartan los mismos colores (ya están definidos en `tailwind.config.js`)

---

## ✨ Características Implementadas

### ✅ Completadas
- Hero section animado con CTA al juego
- Sección de waffles especiales con cards interactivas
- Menú completo organizado por categorías
- Sección de helados con 3 tamaños y sabores
- CTA prominente para el cooking game (pulse constant)
- Botones de contacto (WhatsApp, teléfono)
- Footer con navegación
- Animaciones smooth (Framer Motion)
- Responsive design (mobile-first)
- Escala tipográfica métrica (design-taste-frontend)
- Colores coherentes con el juego

### 🔄 Próximas mejoras
- Integración real del cooking game en `/juego`
- Galerías visuales de fotos de productos
- Formulario de contacto adicional
- Integración con backend para pedidos
- Dark mode toggle (opcional)

---

## 📱 Responsive Breakpoints

El diseño se adapta perfectamente en:
- **Mobile** (375px - 479px)
- **Small Mobile** (480px - 767px)
- **Tablet** (768px - 1023px)
- **Desktop** (1024px - 1279px)
- **Wide Desktop** (1280px+)

---

## 🎯 Optimizaciones Realizadas

✓ **CSS Hardware Acceleration** — Animaciones con `transform` y `opacity`  
✓ **Lazy Loading** — Imágenes debajo del fold cargadas bajo demanda  
✓ **Mobile-first** — Desarrollado en mobile y escalado a desktop  
✓ **Accesibilidad** — Contraste de colores, labels en botones  
✓ **Performance** — Sin bloat, carga rápida  

---

## 🐛 Troubleshooting

### Las imágenes no aparecen
- Asegúrate de que están en `public/assets/`
- Verifica que las rutas en `menuData.js` sean correctas

### El número de WhatsApp no funciona
- Reemplaza `56XXXXXXXXX` con tu número real SIN el `+`
- Ejemplo: `56912345678` (no `+56912345678`)

### Las animaciones se ven lentas
- Abre DevTools > Rendering y desactiva el throttling
- Verifica que no haya muchas tabs abiertas

---

## 📞 Contacto

**Punto Waffles**  
📍 Litueche, Chile  
📱 WhatsApp: [configurar número]  
🌐 Horarios: Todos los días

---

## 📄 Licencia

© 2025 Punto Waffles. Todos los derechos reservados.

---

**Hecho con ❤️ y waffles** ✨
