# 🧇 Punto Waffles — Cooking Game Interactivo
## Prompt Maestro para Claude Code

---

## CONTEXTO DEL PROYECTO

Construir una aplicación web tipo **"cooking game"** para **Punto Waffles**, una tienda de waffles ubicada en Litueche, Chile. El objetivo es reemplazar la toma de pedidos tradicional con una **experiencia interactiva y divertida** donde el cliente literalmente *construye* su waffle paso a paso, con animaciones que simulan el proceso real de preparación.

La experiencia debe sentirse como un mini-videojuego de cocina: **satisfactorio, visual, adictivo, y con personalidad propia**. Cada elección del cliente agrega una capa visual al waffle que se construye en tiempo real en pantalla.

---

## STACK TECNOLÓGICO

```
- Framework: React 18+ con Vite
- Animaciones: Framer Motion (obligatorio)
- Estilos: Tailwind CSS + CSS custom properties
- Fuentes: Google Fonts — usar fuentes con personalidad (NO Inter, NO Roboto)
  Sugeridas: Pacifico para display, Nunito o Quicksand para UI
- Sin backend por ahora — estado local con useState/useReducer
- Al finalizar el pedido: generar deep link de WhatsApp con el resumen
- Assets: imágenes PNG/SVG para ingredientes (crear placeholders con CSS art si no existen)
- El archivo 3.png (imagen del menú de helados) estará en /public/assets/3.png
```

---

## IDENTIDAD VISUAL — PUNTO WAFFLES

### Paleta de colores
```css
--color-bg: #FFF8F0;           /* crema cálido — fondo general */
--color-bg-dark: #1A0F00;      /* café oscuro — fondo de pasos activos */
--color-primary: #FF6B2C;      /* naranja waffle — color principal */
--color-primary-light: #FFB347;/* amarillo dorado — acentos */
--color-accent: #D4006A;       /* frambuesa — CTA y highlights */
--color-text: #2D1A00;         /* café oscuro para textos */
--color-text-light: #FFF8F0;   /* crema para textos sobre oscuro */
--color-step-done: #4CAF50;    /* verde para pasos completados */
```

### Tipografía
- **Display/Logo**: `Pacifico` — para "Punto Waffles" y títulos de paso
- **UI/Botones**: `Nunito` weight 700/800 — redondeado y amigable
- **Descripción**: `Nunito` weight 400/600

### Tono
Cálido, juguetón, apetitoso. Como si fuera un juego de cocina para niños pero ejecutado con calidad premium. Cada interacción debe sentirse **satisfactoria** — sonidos visuales (rebotes, pulsos, caídas).

---

## ARQUITECTURA DE LA APLICACIÓN

### Estructura de archivos
```
/src
  /components
    /game
      WaffleCanvas.jsx        — Canvas visual donde se construye el waffle
      StepNavigator.jsx       — Barra de progreso de pasos (1-7)
      OrderSummary.jsx        — Resumen final del pedido
    /steps
      Step0_Intro.jsx         — Pantalla de bienvenida animada
      Step1_Type.jsx          — Dulce o Salado
      Step2_Fruit.jsx         — Selección de fruta
      Step3_Cream.jsx         — Con o sin crema chantilly
      Step4_IceCream.jsx      — Selección de helado (usa 3.png)
      Step5_Sauce.jsx         — Selección de salsa
      Step6_Decoration.jsx    — Selección de decoración
      Step7_Delivery.jsx      — Para llevar o en local
      StepComplete.jsx        — Pantalla final + WhatsApp
    /ui
      IngredientCard.jsx      — Card interactiva de ingrediente (con animación)
      AnimatedWaffle.jsx      — Representación visual del waffle en construcción
      ProgressBar.jsx         — Indicador visual de progreso
  /hooks
    useWaffleOrder.js         — Estado central del pedido
    useAnimation.js           — Helpers de animación
  /data
    menu.js                   — Datos del menú (ingredientes, precios, emojis)
  /assets
    /ingredients              — PNGs/SVGs de cada ingrediente
  App.jsx
  main.jsx
```

### Estado global del pedido (useWaffleOrder)
```javascript
const initialOrder = {
  type: null,          // 'sweet' | 'salty'
  fruit: null,         // 'frutilla' | 'platano' | 'piña' | 'durazno' | 'kiwi' | 'arandano' | 'oreo'
  cream: null,         // true | false
  iceCream: null,      // string con nombre del helado
  sauce: null,         // 'frambuesa' | 'chocolate' | 'caramelo'
  decoration: null,    // 'chispas_chocolate' | 'chispas_colores' | 'coco_rallado'
  delivery: null,      // 'takeaway' | 'dine_in'
  currentStep: 0,      // 0 = intro, 1-7 = pasos, 8 = resumen
  completedSteps: [],  // array de pasos completados
}
```

---

## FLUJO DE PASOS — ESPECIFICACIÓN DETALLADA

### 🎬 STEP 0 — Pantalla de Bienvenida (Intro)
- Logo animado de "Punto Waffles" que entra con efecto de caída + rebote
- Waffle SVG que gira suavemente (rotation loop)
- Texto: "¡Arma tu waffle perfecto!" con animación de typewriter
- Botón CTA: "🧇 ¡Comenzar!" — grande, naranja, con pulse animation
- Fondo: color crema con patrón de waffles en SVG (textura sutil, opacity baja)

---

### STEP 1 — Tipo de Waffle
**Pregunta**: "¿Dulce o Salado?"
**Nota**: Por ahora solo implementar DULCE completamente. La opción SALADO debe estar visible pero con badge "¡Próximamente!" y no ser seleccionable (aparece bloqueada con overlay).

**UI**:
- Dos cards grandes, side by side
- Card DULCE: ícono 🍓, fondo dorado cálido, hover con glow
- Card SALADO: ícono 🧀, fondo gris, badge "Próximamente", opacity reducida, cursor not-allowed
- Al seleccionar DULCE: card escala up, confetti animado (CSS), transición al paso 2

**Animación de transición**: El waffle base aparece en el canvas con animación de "verter masa" — círculo que crece desde el centro.

---

### STEP 2 — Selección de Fruta
**Pregunta**: "¿Qué fruta le ponemos?"
**Opciones** (7 ingredientes):
| Fruta | Emoji | Color card |
|-------|-------|------------|
| Frutilla | 🍓 | Rojo rosado |
| Plátano | 🍌 | Amarillo cálido |
| Piña | 🍍 | Verde-amarillo |
| Durazno | 🍑 | Naranja melocotón |
| Kiwi | 🥝 | Verde intenso |
| Arándano | 🫐 | Azul violáceo |
| Oreo | 🍪 | Negro/blanco |

**UI**:
- Grid de 4 columnas en desktop, 2 en mobile
- Cards con emoji grande (64px), nombre, y efecto hover de "rebote"
- Selección múltiple permitida (máximo 2 frutas) — bonus si implementas
- Al seleccionar: la fruta "cae" con animación desde arriba hacia el waffle en el canvas

**Animación de canvas**: Aparecen trozos de fruta animados encima del waffle base.

---

### STEP 3 — Crema Chantilly
**Pregunta**: "¿Con crema chantilly?"
**Opciones**: Solo 2 opciones (SÍ / NO)

**UI**:
- Dos cards XL, toda la pantalla dividida en dos mitades
- Mitad izquierda: "¡Con crema! 🍦" — fondo blanco cremoso, texto tentador
- Mitad derecha: "Sin crema" — fondo neutral
- Hover: la mitad de crema muestra una animación de crema "chorriando" (CSS keyframe)
- Al seleccionar SÍ: animación de crema blanca que se extiende sobre el waffle en el canvas

---

### STEP 4 — Selección de Helado
**Pregunta**: "¿Qué helado le agregas?"
**Nota importante**: Las variedades de helado deben extraerse del archivo `/public/assets/3.png`. Mostrar la imagen como referencia visual en esta pantalla.

**Implementación**:
- Mostrar la imagen `3.png` del menú en la parte superior de la pantalla como referencia
- Crear cards seleccionables para cada variedad de helado visible en la imagen
- Incluir opción "Sin helado 🚫"
- Si no es posible leer todas las variedades, usar estas como placeholder:
  `Vainilla, Chocolate, Frutilla, Dulce de Leche, Menta, Coco, Maracuyá, Cookies & Cream`

**UI**:
- Grid scrolleable de helados con colores representativos de cada sabor
- Card seleccionada: borde grueso color primario, ícono de helado animado (bounce)
- Al seleccionar: bola de helado cae sobre el waffle en el canvas con animación de "splat" suave

---

### STEP 5 — Selección de Salsa
**Pregunta**: "¿Qué salsa le echamos?"
**Opciones** (3):
| Salsa | Emoji | Color |
|-------|-------|-------|
| Frambuesa | 🫐 | Rojo intenso (#C62828) |
| Chocolate | 🍫 | Café oscuro (#4E342E) |
| Caramelo | 🍮 | Ámbar (#F57F17) |

**UI**:
- 3 cards grandes con el color de la salsa de fondo
- Hover: animación de "chorro" de salsa (CSS gradient que baja)
- Opción "Sin salsa" disponible también
- Al seleccionar: líneas de salsa animadas se dibujan sobre el waffle en el canvas (stroke SVG animation)

---

### STEP 6 — Decoración
**Pregunta**: "¿Cómo lo decoramos?"
**Opciones** (3):
| Decoración | Emoji | Descripción visual |
|------------|-------|-------------------|
| Chispas de chocolate | 🍫 | Puntitos marrones pequeños |
| Chispas de colores | 🌈 | Puntitos multicolores |
| Coco rallado | 🥥 | Copos blancos |

**UI**:
- 3 cards con previsualización de la textura (CSS generado)
- Opción "Sin decoración" disponible
- Al seleccionar: partículas de la decoración elegida "llueven" sobre el waffle en el canvas (CSS particles animation)

---

### STEP 7 — Entrega
**Pregunta**: "¿Cómo lo quieres?"
**Opciones**:
- **Para llevar** 🥡 — "Te lo empacamos listo"
- **En el local** 🪑 — "Te lo servimos en mesa"

**UI**:
- Dos opciones grandes con ilustración CSS de cada una
- Al seleccionar: animación de "envolver" o "plato siendo puesto en mesa"
- Esta es la última selección antes del resumen

---

### 🎉 STEP 8 — Resumen del Pedido (StepComplete)
**Pantalla final** — debe ser el momento más satisfactorio de toda la experiencia.

**Elementos**:
1. **Waffle construido** — versión final del canvas con todas las capas seleccionadas, con animación de "completado" (glow, shimmer)
2. **Resumen visual** — lista de todas las elecciones con sus emojis
3. **Nombre sugerido** — generar un nombre creativo para el waffle del cliente (ej: "El Waffle Explosivo de Frutilla y Caramelo 🔥")
4. **Botón WhatsApp** — verde, grande, con ícono de WhatsApp
   - Deep link: `https://wa.me/56XXXXXXXXX?text=` + mensaje URL-encoded
   - Mensaje generado automáticamente con el resumen completo del pedido
5. **Botón "Armar otro waffle"** — reinicia el juego desde el paso 0

**Mensaje WhatsApp template**:
```
🧇 *Pedido Punto Waffles*

Hola! Quiero pedir un waffle con:
✅ Tipo: Dulce
🍓 Fruta: [fruta seleccionada]
🍦 Crema: [Sí/No]
🍨 Helado: [sabor]
🫙 Salsa: [salsa]
✨ Decoración: [decoración]
📦 Entrega: [Para llevar/En el local]

*¡Gracias!*
```
**Número WhatsApp de Punto Waffles**: Reemplazar `56XXXXXXXXX` con el número real (dejarlo como variable `WAFFLE_PHONE` en un archivo `.env` o constante en `menu.js`).

---

## COMPONENTE CENTRAL: WaffleCanvas

Este es el componente más importante del juego. Muestra el waffle construyéndose en tiempo real.

### Capas del waffle (orden de z-index, de abajo hacia arriba):
1. **Base** — círculo/grid dorado (waffle)
2. **Fruta** — imágenes/emojis de fruta
3. **Crema** — capa blanca con forma de remolino
4. **Helado** — bola con color del sabor
5. **Salsa** — líneas drizzle del color de la salsa
6. **Decoración** — partículas encima de todo

### Especificaciones técnicas:
- Implementar como SVG o div stack con `position: absolute`
- Cada capa aparece con `Framer Motion` `AnimatePresence` + `motion.div`
- Canvas siempre visible en desktop (sticky en sidebar derecho)
- En mobile: canvas visible como preview pequeño en la parte superior (collapsible)
- Tamaño: 300x300px desktop, 180x180px mobile

```jsx
// Ejemplo de estructura de capas
<div className="waffle-canvas">
  <AnimatePresence>
    {order.type && <WaffleBase key="base" />}
    {order.fruit && <FruitLayer key="fruit" fruit={order.fruit} />}
    {order.cream && <CreamLayer key="cream" />}
    {order.iceCream && <IceCreamLayer key="icecream" flavor={order.iceCream} />}
    {order.sauce && <SauceLayer key="sauce" sauce={order.sauce} />}
    {order.decoration && <DecorationLayer key="deco" type={order.decoration} />}
  </AnimatePresence>
</div>
```

---

## BARRA DE PROGRESO (StepNavigator)

- Visible en todo momento (sticky top)
- 7 círculos numerados conectados por línea
- Estados: ⬜ pendiente | 🟠 activo | ✅ completado
- Click en paso completado = navegar hacia atrás (permitir edición)
- En mobile: versión compacta con solo el número de paso actual

---

## ANIMACIONES REQUERIDAS (Framer Motion)

### Transición entre pasos
```javascript
// pageVariants para cada step
const variants = {
  enter: { opacity: 0, x: 100, scale: 0.95 },
  center: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -100, scale: 0.95 }
}
```

### Selección de ingrediente
```javascript
// Al hacer click en una card de ingrediente
const selectVariants = {
  tap: { scale: 0.92 },
  selected: { scale: 1.05, boxShadow: "0 0 30px var(--color-primary)" }
}
```

### Ingrediente cayendo al canvas
```javascript
// Animación de caída al seleccionar
initial: { y: -100, opacity: 0, scale: 0 }
animate: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.6 } }
```

### Confetti al completar el pedido
- Implementar con CSS keyframes o librería `canvas-confetti`
- Colores: naranja, dorado, rojo frambuesa, blanco

---

## LAYOUT RESPONSIVE

### Desktop (> 768px)
```
┌─────────────────────────────────┬──────────────────┐
│  StepNavigator (progress bar)   │                  │
├─────────────────────────────────│  WaffleCanvas    │
│                                 │  (sticky)        │
│  Contenido del paso actual      │                  │
│  (opciones, cards, etc.)        │  300x300px       │
│                                 │                  │
│  [Botón Continuar]              │                  │
└─────────────────────────────────┴──────────────────┘
```

### Mobile (< 768px)
```
┌─────────────────────────────────┐
│  StepNavigator (compacto)       │
├─────────────────────────────────┤
│  WaffleCanvas (180px, centrado) │
├─────────────────────────────────┤
│  Contenido del paso actual      │
│  (scroll si necesario)          │
├─────────────────────────────────┤
│  [Botón Continuar] (fixed btn)  │
└─────────────────────────────────┘
```

---

## DATOS DEL MENÚ (src/data/menu.js)

```javascript
export const WAFFLE_PHONE = "56XXXXXXXXX" // Reemplazar con número real

export const FRUITS = [
  { id: 'frutilla', label: 'Frutilla', emoji: '🍓', color: '#FF6B8A' },
  { id: 'platano', label: 'Plátano', emoji: '🍌', color: '#FFD54F' },
  { id: 'piña', label: 'Piña', emoji: '🍍', color: '#AED581' },
  { id: 'durazno', label: 'Durazno', emoji: '🍑', color: '#FFAB76' },
  { id: 'kiwi', label: 'Kiwi', emoji: '🥝', color: '#66BB6A' },
  { id: 'arandano', label: 'Arándano', emoji: '🫐', color: '#7C4DFF' },
  { id: 'oreo', label: 'Oreo', emoji: '🍪', color: '#1C1C1E' },
]

export const SAUCES = [
  { id: 'frambuesa', label: 'Frambuesa', emoji: '🫐', color: '#C62828' },
  { id: 'chocolate', label: 'Chocolate', emoji: '🍫', color: '#4E342E' },
  { id: 'caramelo', label: 'Caramelo', emoji: '🍮', color: '#F57F17' },
]

export const DECORATIONS = [
  { id: 'chispas_chocolate', label: 'Chispas de chocolate', emoji: '🍫' },
  { id: 'chispas_colores', label: 'Chispas de colores', emoji: '🌈' },
  { id: 'coco_rallado', label: 'Coco rallado', emoji: '🥥' },
]

export const ICE_CREAMS = [
  // Extraer desde 3.png o usar estos placeholders:
  { id: 'vainilla', label: 'Vainilla', emoji: '🍦', color: '#FFF9C4' },
  { id: 'chocolate', label: 'Chocolate', emoji: '🍫', color: '#5D4037' },
  { id: 'frutilla', label: 'Frutilla', emoji: '🍓', color: '#FF8A80' },
  { id: 'dulce_de_leche', label: 'Dulce de Leche', emoji: '🍮', color: '#D4A017' },
  { id: 'menta', label: 'Menta', emoji: '🌿', color: '#A5D6A7' },
  { id: 'coco', label: 'Coco', emoji: '🥥', color: '#ECEFF1' },
  { id: 'maracuya', label: 'Maracuyá', emoji: '🌟', color: '#FDD835' },
  { id: 'cookies_cream', label: 'Cookies & Cream', emoji: '🍪', color: '#B0BEC5' },
  { id: 'sin_helado', label: 'Sin helado', emoji: '🚫', color: '#EEEEEE' },
]
```

---

## COMANDOS DE INSTALACIÓN

```bash
# Crear proyecto
npm create vite@latest punto-waffles -- --template react

cd punto-waffles

# Dependencias principales
npm install framer-motion
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Opcional para confetti
npm install canvas-confetti

# Iniciar dev server
npm run dev
```

---

## REGLAS DE CALIDAD — OBLIGATORIAS

1. **Sin librerías de UI genéricas** — No usar shadcn, MUI, Ant Design. Todo el UI es custom.
2. **Cada paso debe sentirse diferente** — Varía el layout, el color dominante, y el tipo de animación.
3. **El WaffleCanvas siempre sincronizado** — Cualquier cambio de selección se refleja instantáneamente.
4. **Mobile-first** — Primero funciona perfecto en mobile, luego escala a desktop.
5. **Sin estados rotos** — El usuario puede retroceder en cualquier paso y cambiar su selección.
6. **Feedback inmediato** — Toda interacción tiene respuesta visual en menos de 100ms.
7. **Accesibilidad básica** — Botones con labels, contraste de colores adecuado.
8. **El botón de WhatsApp solo aparece cuando TODOS los pasos están completos.**

---

## ENTREGABLES ESPERADOS

Al finalizar este sprint, el proyecto debe tener:

- [ ] Pantalla de bienvenida animada (Step 0)
- [ ] 7 pasos funcionales para waffle dulce
- [ ] WaffleCanvas con construcción en tiempo real (mínimo base + fruta + crema + helado)
- [ ] Step de helado mostrando imagen `3.png`
- [ ] Pantalla de resumen con deep link de WhatsApp funcional
- [ ] Responsivo mobile y desktop
- [ ] Opción "Salado" visible pero bloqueada (Próximamente)
- [ ] README con instrucciones de personalización del número de WhatsApp

---

## NOTAS FINALES PARA CLAUDE CODE

- Este proyecto es para un negocio real en Chile. El tono es cálido, no corporativo.
- Priorizar la **experiencia móvil** — el 90% de los clientes usarán su celular.
- El waffle que se construye visualmente es el **elemento diferenciador** — invertir tiempo en que se vea delicioso.
- Si un asset no existe como imagen, **créalo con CSS art o SVG** — no dejar espacios vacíos.
- El proyecto debe correr con `npm run dev` sin configuración adicional al clonar.
- Documentar brevemente en comentarios JSDoc los componentes principales.
