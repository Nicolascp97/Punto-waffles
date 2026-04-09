import { motion, AnimatePresence } from 'framer-motion'

const SPRING = { type: 'spring', bounce: 0.45, duration: 0.55 }
const FADE_IN = { initial: { opacity: 0, scale: 0.5, y: -20 }, animate: { opacity: 1, scale: 1, y: 0, transition: SPRING }, exit: { opacity: 0, scale: 0.6, transition: { duration: 0.2 } } }

/* ─── Sauce / Base spread ─── */
function BaseLayer({ base }) {
  const colors = { caramelo: '#D4A01799', frambuesa: '#C6282899', manjar: '#A0522D99', nutella: '#5D403799' }
  const fill = colors[base] || '#D4A01799'
  return (
    <motion.svg key={base} {...FADE_IN} className="absolute inset-0 w-full h-full" viewBox="0 0 300 300" style={{ pointerEvents: 'none' }}>
      <ellipse cx="150" cy="158" rx="90" ry="75" fill={fill} />
      <ellipse cx="150" cy="160" rx="70" ry="55" fill={fill} opacity="0.5" />
    </motion.svg>
  )
}

/* ─── Fruits ─── */
function FruitLayer({ fruit }) {
  const fruitData = {
    frutilla: { color: '#FF6B8A',  shape: 'frutilla' },
    platano:  { color: '#FFD54F',  shape: 'circle' },
    piña:     { color: '#AED581',  shape: 'circle' },
    durazno:  { color: '#FFAB76',  shape: 'circle' },
    kiwi:     { color: '#66BB6A',  shape: 'circle' },
    arandano: { color: '#7C4DFF',  shape: 'circle' },
    oreo:     { color: '#1C1C1E',  shape: 'circle' },
  }
  const fruits = Array.isArray(fruit) ? fruit : [fruit]
  const slots = [
    [105, 115], [170, 120], [130, 145], [90, 155], [175, 160],
    [115, 175], [160, 180], [140, 130], [100, 130], [165, 145],
  ]
  return (
    <motion.svg {...FADE_IN} className="absolute inset-0 w-full h-full" viewBox="0 0 300 300" style={{ pointerEvents: 'none' }}>
      {slots.map(([cx, cy], i) => {
        const fId = fruits[i % fruits.length]
        const d = fruitData[fId] || { color: '#FF6B8A', shape: 'circle' }
        return (
          <motion.circle
            key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 13 : 10}
            fill={d.color} stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ ...SPRING, delay: i * 0.06 }}
          />
        )
      })}
    </motion.svg>
  )
}

/* ─── Cream / Chantilly ─── */
function CreamLayer() {
  return (
    <motion.svg {...FADE_IN} className="absolute inset-0 w-full h-full" viewBox="0 0 300 300" style={{ pointerEvents: 'none' }}>
      {/* Cream blob */}
      <ellipse cx="150" cy="145" rx="48" ry="38" fill="#fffcf5" opacity="0.95" />
      <ellipse cx="135" cy="135" rx="22" ry="16" fill="white" opacity="0.9" />
      <ellipse cx="162" cy="138" rx="18" ry="14" fill="white" opacity="0.85" />
      {/* Peak */}
      <ellipse cx="150" cy="128" rx="12" ry="10" fill="white" opacity="0.95" />
      <ellipse cx="150" cy="122" rx="7" ry="6"  fill="white" opacity="0.9" />
      {/* Shine highlights */}
      <ellipse cx="138" cy="130" rx="5" ry="3" fill="white" opacity="0.5" />
    </motion.svg>
  )
}

/* ─── Ice Cream Scoop ─── */
function IceCreamLayer({ flavor }) {
  const colors = {
    vainilla: ['#FFF9C4', '#FEF08A'], chocolate: ['#795548', '#5D4037'],
    frutilla: ['#FF8A80', '#F44336'], dulce_de_leche: ['#D4A017', '#A07800'],
    menta: ['#A5D6A7', '#66BB6A'], coco: ['#ECEFF1', '#CFD8DC'],
    maracuya: ['#FDD835', '#F9A825'], brownie: ['#6D4C41', '#4E342E'],
    volcan_chocolate: ['#5D4037', '#3E2723'], platano_manjar: ['#FFD54F', '#FFC107'],
    lucuma_manjar: ['#F9A825', '#F57F17'], pasas_al_ron: ['#A1887F', '#795548'],
    mango: ['#FFB74D', '#FF8F00'], pistacho: ['#A5D6A7', '#66BB6A'],
    tres_leches: ['#FFF8E1', '#FFF3E0'], frambuesa_crema: ['#EF9A9A', '#E57373'],
    chirimoya_alegre: ['#C8E6C9', '#A5D6A7'], cafe_mocca: ['#A1887F', '#795548'],
    pie_de_limon: ['#FFF176', '#FFEE58'], suspiro_limeño: ['#FFE0B2', '#FFCC80'],
    cookies_cream: ['#B0BEC5', '#90A4AE'], tronco_castaña: ['#A1887F', '#6D4C41'],
    papaya_crema: ['#FFCC80', '#FFA726'], limon: ['#FFF176', '#FFEE58'],
    mango_agua: ['#FFB74D', '#FF8F00'], piña_agua: ['#AED581', '#9CCC65'],
    frambuesa_agua: ['#EF5350', '#E53935'], vainilla_zero: ['#FFF9C4', '#FEF08A'],
    cafe_late: ['#A1887F', '#795548'], chocolate_nuss: ['#795548', '#5D4037'],
    frutos_bosque: ['#CE93D8', '#BA68C8'],
  }
  const [base, shadow] = colors[flavor] || ['#FFF9C4', '#FEF08A']
  return (
    <motion.svg {...FADE_IN} className="absolute inset-0 w-full h-full" viewBox="0 0 300 300" style={{ pointerEvents: 'none' }}>
      <defs>
        <radialGradient id={`scoop-${flavor}`} cx="35%" cy="30%">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="100%" stopColor={shadow} stopOpacity="1" />
        </radialGradient>
      </defs>
      {/* Drop shadow */}
      <ellipse cx="152" cy="105" rx="30" ry="10" fill="rgba(0,0,0,0.12)" />
      {/* Scoop */}
      <circle cx="150" cy="90" r="32" fill={`url(#scoop-${flavor})`} />
      <circle cx="150" cy="90" r="32" fill={base} opacity="0.2" />
      {/* Shine */}
      <circle cx="140" cy="80" r="10" fill="white" opacity="0.4" />
      <circle cx="137" cy="77" r="5"  fill="white" opacity="0.5" />
    </motion.svg>
  )
}

/* ─── Sauce drizzle ─── */
function SauceLayer({ sauce }) {
  const colors = { frambuesa: '#C62828', chocolate: '#4E342E', caramelo: '#D4A017', manjar: '#A0522D' }
  const color = colors[sauce] || '#C62828'
  const paths = [
    'M 90,100 Q 130,130 100,170 Q 120,200 150,185',
    'M 150,95  Q 175,135 160,165 Q 170,198 195,185',
    'M 200,110 Q 185,145 200,175 Q 210,200 195,200',
  ]
  return (
    <motion.svg {...FADE_IN} className="absolute inset-0 w-full h-full" viewBox="0 0 300 300" style={{ pointerEvents: 'none' }}>
      {paths.map((d, i) => (
        <motion.path
          key={i} d={d} stroke={color} strokeWidth="5" fill="none"
          strokeLinecap="round" opacity="0.9"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 0.7, delay: i * 0.18, ease: 'easeOut' }}
        />
      ))}
    </motion.svg>
  )
}

/* ─── Decorations / Toppings ─── */
function DecorationLayer({ type }) {
  const palettes = {
    chispas_chocolate: ['#5D4037','#8D6E63','#4E342E','#3E2723'],
    chispas_colores:   ['#FF3300','#FFCC00','#00C853','#7C4DFF','#FF6B8A'],
    cono_molido:       ['#D4A017','#C8A415','#E8C245'],
    cereales:          ['#FFD54F','#FFC107','#FF8F00'],
    palitos:           ['#8D6E63','#A1887F','#BCAAA4'],
    estrellitas:       ['#FFCC00','#FFD54F','#FFF176'],
    corazones:         ['#FF3300','#EF5350','#E53935'],
  }
  const palette = palettes[type] || palettes.chispas_colores
  const particles = Array.from({ length: 28 }, (_, i) => ({
    x: 80 + (i * 37 % 140),
    y: 100 + (i * 53 % 110),
    r: 2.5 + (i % 3) * 1.5,
    color: palette[i % palette.length],
    angle: (i * 45) % 360,
  }))

  return (
    <motion.svg {...FADE_IN} className="absolute inset-0 w-full h-full" viewBox="0 0 300 300" style={{ pointerEvents: 'none' }}>
      {particles.map((p, i) => (
        <motion.rect
          key={i} x={p.x} y={p.y} width={p.r * 2} height={p.r * 2}
          rx="1" fill={p.color}
          style={{ rotate: p.angle }}
          initial={{ opacity: 0, y: p.y - 50, scale: 0 }}
          animate={{ opacity: 0.95, y: p.y, scale: 1 }}
          transition={{ ...SPRING, delay: i * 0.025 }}
        />
      ))}
    </motion.svg>
  )
}

/* ─── Waffle Base ─── */
function WaffleBase() {
  return (
    <svg viewBox="0 0 300 300" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      {/* Waffle grid pattern */}
      <defs>
        <pattern id="waffle-grid" patternUnits="userSpaceOnUse" width="30" height="30">
          <rect x="0" y="0" width="30" height="30" fill="#fdd89d" />
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#f9c74f" strokeWidth="0.5" />
        </pattern>
      </defs>
      {/* Base circle */}
      <circle cx="150" cy="150" r="110" fill="url(#waffle-grid)" />
      {/* Shadow */}
      <circle cx="150" cy="150" r="110" fill="rgba(0,0,0,0.05)" />
      {/* Shine highlight */}
      <ellipse cx="110" cy="110" rx="45" ry="45" fill="rgba(255,255,255,0.15)" />
    </svg>
  )
}

/* ─── Main Component ─── */
export default function AnimatedWaffle({ order }) {
  const hasType  = !!order.type
  const hasFruit = Array.isArray(order.fruit) ? order.fruit.length > 0 : !!order.fruit

  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-sm sm:max-w-md">
      {/* Waffle container */}
      <div
        className="relative overflow-hidden w-full aspect-square rounded-2xl"
        style={{
          background: '#fef3e2',
          boxShadow: 'inset 0 0 0 4px rgba(255,255,255,0.7), 0 8px 32px rgba(90,50,10,0.18)',
        }}
      >
        {/* Empty state */}
        <AnimatePresence>
          {!hasType && (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-2"
            >
              <div style={{ fontSize: '56px', animation: 'float 3s ease-in-out infinite' }}>🧇</div>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', fontWeight: 700, textAlign: 'center', padding: '0 16px' }}>
                Tu waffle aparecerá<br />aquí
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Waffle base SVG */}
        <AnimatePresence>
          {hasType && (
            <motion.div
              key="waffle-base"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, transition: SPRING }}
              exit={{ opacity: 0 }}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            >
              <WaffleBase />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ingredient SVG layers — stack on top of photo */}
        <AnimatePresence>
          {order.base   && <BaseLayer       key={`base-${order.base}`}           base={order.base} />}
          {hasFruit     && <FruitLayer      key={`fruit-${JSON.stringify(order.fruit)}`} fruit={order.fruit} />}
          {order.cream  && <CreamLayer      key="cream" />}
          {order.iceCream && order.iceCream !== 'sin_helado' && (
            <IceCreamLayer key={`ice-${order.iceCream}`} flavor={order.iceCream} />
          )}
          {order.sauce && order.sauce !== 'sin_salsa' && (
            <SauceLayer key={`sauce-${order.sauce}`} sauce={order.sauce} />
          )}
          {order.decoration && order.decoration !== 'sin_deco' && (
            <DecorationLayer key={`deco-${order.decoration}`} type={order.decoration} />
          )}
        </AnimatePresence>
      </div>

      {/* Status text */}
      <AnimatePresence mode="wait">
        {!hasType ? null : (
          <motion.div
            key="status"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 px-4 py-2 bg-white/70 backdrop-blur-md border border-[var(--border)] rounded-xl shadow-sm rounded-full flex items-center justify-center"
          >
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 800, margin: 0 }}>
              {order.currentStep < 9
                ? `Construyendo... paso ${order.currentStep} de 8 🍳`
                : '¡Tu waffle está listo! 🎉'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
