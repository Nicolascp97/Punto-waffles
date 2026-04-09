# 🧇 START HERE — Punto Waffles Landing

Bienvenido. Este documento te orienta sobre qué se creó y cómo empezar.

---

## 📌 Lo Que Recibiste

Una **landing page premium** completamente funcional para **Punto Waffles** con:

```
✅ Página de inicio (/)
   └─ Hero + Menú completo + Helados + CTA al juego

✅ Estructura lista para integrar cooking game (/juego)

✅ Componentes reutilizables
   └─ Button, Header, MenuCard, SectionHeading, HeroSection

✅ Diseño coherente con el cooking game
   └─ Colores, tipografía, animaciones

✅ Responsive en todos los dispositivos
   └─ Mobile, tablet, desktop

✅ Documentación completa
   └─ 6 guías + código comentado
```

---

## 🎯 ¿Por Dónde Empezar?

### Opción A: Quiero empezar AHORA (5 minutos)
→ Lee **`QUICKSTART.md`**

### Opción B: Quiero entender todo primero
→ Lee **`PROJECT_SUMMARY.md`** (este archivo explica el proyecto completo)

### Opción C: Necesito documentación específica
→ Elige del índice abajo

---

## 📚 Índice de Documentación

| Archivo | Para Quién | Tiempo |
|---------|-----------|--------|
| `QUICKSTART.md` | ⚡ Impatientes | 5 min |
| `README.md` | 📖 Detallistas | 15 min |
| `INTEGRATION_GUIDE.md` | 📸 Agregar imágenes | 10 min |
| `DEPLOYMENT.md` | 🚀 Desplegar | 20 min |
| `ARCHITECTURE.md` | 🏗️ Técnicamente curioso | 25 min |
| `PROJECT_SUMMARY.md` | 📋 Quiero resumen | 10 min |

---

## 🚀 Pasos Básicos

### 1. Instalar dependencias
```bash
cd landing-menu
npm install
```

### 2. Ejecutar en desarrollo
```bash
npm run dev
```
Abre http://localhost:5173

### 3. Personalizar con TUS datos

**A. Tu número de WhatsApp**
Edita estos 3 lugares:
- `src/data/menuData.js` (línea 65)
- `src/components/Header.jsx` (línea 41)
- `src/pages/Landing.jsx` (línea 160)

Reemplaza `56XXXXXXXXX` con tu número real: `56912345678`

**B. Tus productos del menú**
Edita `src/data/menuData.js`:
- Cambia nombre, descripción, precio
- Agrega o quita productos

**C. Agregar imágenes**
1. Copia 2.png, 4.png, 6.png a `public/assets/`
2. Renombra a nombres descriptivos
3. Sigue `INTEGRATION_GUIDE.md` para insertarlas

### 4. Ver en producción
```bash
npm run build
npm run preview
```

### 5. Desplegar
- Sube a **Vercel** (recomendado, 2 clicks)
- O a Netlify, GitHub Pages, tu servidor

---

## 🎨 Colores Principales

Todos coherentes con el cooking game:

```
🟠 Naranja: #FF6B2C      (principal)
💗 Frambuesa: #D4006A    (botones)
☕ Café oscuro: #1A0F00  (textos)
🍦 Crema: #FFF8F0        (fondo)
```

Están en `tailwind.config.js`.

---

## 📁 Estructura de Carpetas

```
landing-menu/
├── src/
│   ├── pages/Landing.jsx     ← Tu página principal
│   ├── data/menuData.js      ← Edita aquí los datos
│   ├── components/           ← Componentes reutilizables
│   └── config.js             ← Configuración
├── public/
│   └── assets/               ← Aquí van las imágenes
└── [archivos de config]
```

---

## ✨ Características Principales

### Landing Page

**Hero Section**
- Título animado
- Emoji flotante
- 2 CTAs (Ver menú, Jugar)

**Waffles Especiales**
- 3 opciones (Sin helado, Split, Postre Frutal)
- Precios
- CTA NOTORIO hacia el juego (pulsante)

**Menú Completo**
- 5 categorías (Creps, Postres, Helados, Bebidas calientes, Agua)
- 40+ productos con precios
- Grid responsivo

**Helados**
- 3 tamaños (Simple, Doble, Triple)
- Sabores organizados por tipo
- Colores representativos

**Footer**
- Links de navegación
- Botones de contacto (WhatsApp, teléfono)
- Créditos

### Componentes

**Button** — 4 variantes
- `primary` (naranja)
- `secondary` (café oscuro)
- `outline` (borde)
- `cta` (frambuesa, pulsante)

**MenuCard** — Card de producto
- Emoji animado
- Nombre, descripción
- Precio formateado
- Hover effect

**Header** — Navbar sticky
- Logo
- Links de navegación
- WhatsApp link

---

## 🎬 Animaciones Incluidas

✅ Fade-up: Elementos entran desde abajo  
✅ Scale: Cards escalan al hover  
✅ Rotate: Iconos giran  
✅ Pulse: Botón CTA pulsea  
✅ Float: Emojis flotan  
✅ Stagger: Elementos entran escalonados

Todas con **Framer Motion** — smooth y performantes.

---

## 📱 Responsive Design

Se ve perfectamente en:
- ✅ iPhone (375px)
- ✅ Samsung (390px)
- ✅ iPad (768px)
- ✅ Laptop (1280px)
- ✅ Desktop (1440px)

---

## 🆘 Troubleshooting Rápido

### "npm install falla"
```bash
rm -rf node_modules package-lock.json
npm install
```

### "Sitio no carga en npm run dev"
```bash
# Mata el proceso anterior
# Ctrl+C (Windows/Mac/Linux)
npm run dev
```

### "Las imágenes no aparecen"
- Verifica que estén en `public/assets/`
- Verifica que la ruta sea `/assets/nombre.png` (con `/` al inicio)

### "El número de WhatsApp no funciona"
- Cambia en los 3 lugares mencionados arriba
- Formato correcto: `56912345678` (sin `+`, sin espacios)

---

## 🔗 Integración con Cooking Game

**Actualmente:** Hay un placeholder en `/juego`

**Para integrar el juego real:**
1. Copia el proyecto del cooking game a una carpeta similar
2. Actualiza `src/App.jsx` para importar el juego
3. Ver `ARCHITECTURE.md` para detalles técnicos

---

## ✅ Checklist Antes de Producción

- [ ] Número de WhatsApp actualizado en 3 lugares
- [ ] Datos del menú personalizados (si quieres)
- [ ] Imágenes agregadas (si tienes 2.png, 4.png, 6.png)
- [ ] `npm run dev` abre correctamente
- [ ] Se ve bien en mobile (F12 → responsive mode)
- [ ] Botones funcionan
- [ ] `npm run build` sin errores
- [ ] Ready para desplegar a Vercel/Netlify

---

## 🚀 Deploy en 3 Pasos

### Opción A: Vercel (Recomendado ⭐)
1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. "New project" → Conecta repo → "Deploy"
4. ¡Listo! Tu sitio está en vivo

### Opción B: Netlify
Igual que Vercel pero en [netlify.com](https://netlify.com)

### Opción C: Tu Servidor
1. `npm run build`
2. Sube contenido de `dist/` vía FTP
3. Configura el servidor para servir `dist/index.html`

---

## 📊 Resumen Técnico

| Aspecto | Detalles |
|--------|----------|
| **Framework** | React 18.3 + Vite 5.0 |
| **Estilos** | Tailwind CSS 3.4 |
| **Animaciones** | Framer Motion 10.16 |
| **Routing** | React Router 6.20 |
| **Tipografía** | Google Fonts (Pacifico + Nunito) |
| **Responsive** | Mobile-first (375px → 1440px) |
| **Build size** | ~40KB JS (gzipped) |
| **Performance** | Animaciones aceleradas por GPU |

---

## 📞 ¿Necesitas Ayuda?

Revisa los documentos específicos:
- Problema técnico → `README.md`
- Cómo agregar imágenes → `INTEGRATION_GUIDE.md`
- Cómo desplegar → `DEPLOYMENT.md`
- Entender la estructura → `ARCHITECTURE.md`
- Empezar rápido → `QUICKSTART.md`

---

## 🎉 ¡Listo!

**Tu landing está lista para:**
1. ✅ Ejecutar (`npm run dev`)
2. ✅ Personalizar (menuData.js, config)
3. ✅ Desplegar (Vercel, Netlify, etc)
4. ✅ Integrar cooking game

**Próximo paso:**

Si tienes prisa → `QUICKSTART.md`  
Si prefieres entender todo → `PROJECT_SUMMARY.md`  
Si necesitas hacer algo específico → revisa el índice arriba

---

**Creado con ❤️ para Punto Waffles**  
*Hecho con React + Vite + Tailwind + Framer Motion*  
*Coherencia visual total con el Cooking Game* ✨🧇

