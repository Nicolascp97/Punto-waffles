# 🏗️ Arquitectura — Punto Waffles Landing + Game

Documento técnico que explica la estructura, flujo y cómo integrar el cooking game.

---

## 📐 Diagrama General

```
┌─────────────────────────────────────────────────────────────┐
│                     Punto Waffles                           │
│              Landing Page + Cooking Game                    │
└─────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┴─────────────┐
                │                           │
        ┌───────▼────────┐         ┌───────▼────────┐
        │   Landing      │         │  Cooking Game  │
        │   (Home)       │         │   (Sub-página) │
        ├────────────────┤         ├────────────────┤
        │ • Hero         │         │ • Intro        │
        │ • Waffles      │         │ • 7 Pasos      │
        │ • Menú         │         │ • Canvas       │
        │ • Helados      │         │ • Resumen      │
        │ • CTA al Game  │         │ • WhatsApp API │
        └────────────────┘         └────────────────┘
```

---

## 🔄 Flujo de Usuario

```
USUARIO LLEGA A LANDING
    │
    ├─▶ Explora menú ────────────────┐
    │   • Ve waffles especiales       │
    │   • Ve menú general             │
    │   • Ve helados                  │
    │                                 │
    └─▶ Hace clic en CTA "Arma tu Waffle"
        │
        ▼
    ACCEDE AL COOKING GAME
        │
        ├─▶ Completa 7 pasos
        │   • Tipo de waffle
        │   • Fruta
        │   • Crema
        │   • Helado
        │   • Salsa
        │   • Decoración
        │   • Entrega
        │
        ▼
    VE RESUMEN + SABE EL PRECIO
        │
        ├─▶ Copia el waffle "creado"
        │
        ▼
    ENVÍA PEDIDO POR WHATSAPP
        │
        ▼
    PUNTO WAFFLES RECIBE ORDEN
```

---

## 🎯 Componentes de la Landing

### Estructura jerárquica:

```
App.jsx (Router)
├── Landing.jsx (Main Page)
│   ├── Header
│   │   ├── Logo
│   │   ├── Nav links
│   │   └── WhatsApp link
│   ├── HeroSection
│   │   ├── Text content
│   │   ├── Animated waffle
│   │   └── CTA buttons
│   ├── Section: Waffles Especiales
│   │   ├── SectionHeading
│   │   ├── MenuCard x3
│   │   └── CTA al Game (prominente)
│   ├── Section: Menú General
│   │   ├── SectionHeading
│   │   └── MenuCard x N items
│   ├── Section: Helados
│   │   ├── SectionHeading
│   │   ├── Size cards (Simple/Doble/Triple)
│   │   └── Flavor items
│   ├── Section: CTA Final
│   │   ├── Heading
│   │   ├── WhatsApp button
│   │   └── Phone button
│   └── Footer
└── GamePage (próxima integración)
    └── [Cooking game completo]
```

---

## 📁 Árbol de Archivos Actual

```
landing-menu/
│
├── public/
│   └── assets/
│       ├── waffles-especiales.png   (imagen 4.png)
│       ├── menu-precios.png         (imagen 2.png)
│       └── helados.png              (imagen 6.png)
│
├── src/
│   ├── components/
│   │   ├── Button.jsx              (reutilizable)
│   │   ├── Header.jsx              (navbar sticky)
│   │   ├── HeroSection.jsx         (section hero)
│   │   ├── MenuCard.jsx            (card de item)
│   │   ├── SectionHeading.jsx      (título de sección)
│   │   └── ImageDisplay.jsx        (para imágenes del menú)
│   │
│   ├── pages/
│   │   └── Landing.jsx             (página principal)
│   │
│   ├── data/
│   │   └── menuData.js             (datos estructurados)
│   │
│   ├── App.jsx                     (router)
│   ├── main.jsx                    (entry point)
│   └── index.css                   (tailwind + globals)
│
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
├── .env.example
├── .gitignore
├── README.md
├── INTEGRATION_GUIDE.md
├── DEPLOYMENT.md
└── ARCHITECTURE.md (este archivo)
```

---

## 🎨 Sistema de Diseño (Design Tokens)

### Colores
```javascript
// Heredados del cooking game
colors: {
  cream: { 50: "#FFF8F0" },
  cafe: { dark: "#1A0F00", light: "#2D1A00" },
  naranja: { waffle: "#FF6B2C", light: "#FFB347" },
  frambuesa: "#D4006A",
  verde: "#4CAF50",
}
```

### Tipografía
```javascript
fontFamily: {
  pacifico: ["Pacifico", "cursive"],    // Display/Logo
  nunito: ["Nunito", "sans-serif"],     // UI/Body
}
```

### Espaciado (4px base)
```javascript
spacing: {
  "space-1": "4px",
  "space-2": "8px",
  "space-3": "12px",
  "space-4": "16px",
  "space-6": "24px",
  "space-8": "32px",
  "space-12": "48px",
  "space-16": "64px",
  "space-24": "96px",
}
```

---

## ⚡ Performance Optimizations

### Implementadas

1. **CSS Hardware Acceleration**
   - Animaciones con `transform` y `opacity` únicamente
   - No `top/left/width/height` para animar

2. **Lazy Loading**
   - Imágenes con `loading="lazy"`
   - Carga bajo demanda

3. **Code Splitting**
   - Vite split automático por ruta
   - Landing y Game en chunks separados

4. **Font Optimization**
   - Google Fonts con `font-display: swap`
   - Fuentes cargan sin bloquear render

5. **Component Memoization**
   - Componentes sin props dinámicas son estáticos
   - React evita re-renders innecesarios

---

## 🔗 Integración con Cooking Game

### Plan de integración:

**Actualmente:** Landing page en `/` y ruta dummy en `/juego`

**Próximo paso:** Integrar el proyecto del cooking game real

### Opción A: Monorepo (RECOMENDADO)

```
punto-waffles/
├── landing-menu/          ← Este proyecto
│   └── src/
│       └── pages/
│           └── Landing.jsx
├── punto-waffles-game/    ← Proyecto del game
│   └── src/
│       └── App.jsx
└── README.md (instrucciones)
```

### Opción B: Integración Directa

1. Copiar componentes del game a `landing-menu/src/components/game/`
2. Copiar datos del game a `landing-menu/src/data/gameData.js`
3. Crear `src/pages/GamePage.jsx` que importa componentes del game
4. Actualizar `App.jsx` para renderizar GamePage en `/juego`

### Ejemplo de Opción B:

**`src/App.jsx`** (actualizado)
```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import GamePage from './pages/GamePage'  // ← Nueva

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/juego" element={<GamePage />} />  {/* ← Nueva */}
      </Routes>
    </Router>
  )
}

export default App
```

**`src/pages/GamePage.jsx`** (nueva)
```jsx
import React from 'react'
import WaffleGame from '../components/game/WaffleGame'  // Importar del game

export default function GamePage() {
  return <WaffleGame />
}
```

---

## 📊 Estructura de Datos

### menuData.js
```javascript
export const MENU_DATA = {
  waffles: {
    title: string,
    description: string,
    items: [{ id, name, description, price }],
    cta: string,
  },
  general: {
    title: string,
    sections: [{
      name: string,
      items: [{ name, price }],
    }],
  },
  iceCream: {
    sabores: [{
      category: string,
      items: [string],
    }],
  },
}
```

---

## 🔄 Estado Compartido (futuro)

Cuando integres el game, considera compartir:

```javascript
// Contexto global para pedido actual
export const OrderContext = createContext()

export function useOrder() {
  return useContext(OrderContext)
}

// En App.jsx:
<OrderProvider>
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/juego" element={<GamePage />} />
  </Routes>
</OrderProvider>
```

Esto permite pasar datos entre Landing y Game.

---

## 🚀 Roadmap Técnico

### Phase 1 ✅ (COMPLETADO)
- [x] Landing page responsive
- [x] Menú estructurado
- [x] Animaciones
- [x] CTA al game
- [x] Componentes reutilizables

### Phase 2 (Próximo)
- [ ] Integración del cooking game
- [ ] Router funcionando entre landing y game
- [ ] Contexto compartido de pedidos
- [ ] Imágenes reales del menú

### Phase 3 (Futuro)
- [ ] Backend para almacenar pedidos
- [ ] Validación de WhatsApp
- [ ] Analytics (Google Analytics)
- [ ] SEO optimization
- [ ] Multi-idioma (ES/EN)

---

## 🛠️ Stack Técnico Definitivo

| Herramienta | Versión | Uso |
|-------------|---------|-----|
| React | 18.3.1 | UI Framework |
| Vite | 5.0.8 | Bundler |
| Tailwind CSS | 3.4.1 | Styling |
| Framer Motion | 10.16.4 | Animaciones |
| React Router | 6.20.0 | Routing |
| Node.js | 18+ | Runtime |
| npm | 9+ | Package Manager |

---

## 📋 Checklist de Completitud

- [x] Landing page responsiva
- [x] 5 secciones principales
- [x] Animaciones con Framer Motion
- [x] Componentes reutilizables
- [x] Sistema de diseño coherente
- [x] CTA prominente al game
- [x] Header sticky
- [x] Footer con links
- [x] MenuCard con precios
- [x] Documentación completa
- [ ] Imágenes reales integradas
- [ ] Cooking game integrado
- [ ] Deploy en producción

---

## 📚 Referencias Internas

- **Color Reference:** `src/index.css` + `tailwind.config.js`
- **Typography Scale:** `tailwind.config.js` (fontSize)
- **Spacing System:** `tailwind.config.js` (spacing)
- **Animation Config:** `tailwind.config.js` (animation, keyframes)
- **Component Patterns:** Ver `src/components/Button.jsx`

---

## 🤝 Contribuyendo

Para agregar nuevas características:

1. Mantén coherencia con el design system
2. Usa spacing scale (nunca valores arbitrarios)
3. Implementa todos los estados del componente
4. Anima con `transform` y `opacity` solamente
5. Documenta con JSDoc comments
6. Test responsive (375px, 768px, 1440px)

---

**¡La arquitectura está lista para crecer!** 🚀
