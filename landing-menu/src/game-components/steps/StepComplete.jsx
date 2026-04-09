import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { WAFFLE_PHONE, FRUITS, BASES, SAUCES, DECORATIONS, ICE_CREAMS_CREMA, ICE_CREAMS_AGUA, ICE_CREAMS_ZERO } from '../../game-data/menu'

const ALL_ICE_CREAMS = [...ICE_CREAMS_CREMA, ...ICE_CREAMS_AGUA, ...ICE_CREAMS_ZERO, { id: 'sin_helado', label: 'Sin Helado' }]

function getLabel(list, id) {
  return list.find(i => i.id === id)?.label || id || '—'
}

function getFruitLabel(fruit) {
  if (!fruit) return '—'
  const arr = Array.isArray(fruit) ? fruit : [fruit]
  return arr.map(f => getLabel(FRUITS, f)).join(' + ')
}

export default function StepComplete({ order, onReset }) {
  const fired = useRef(false)
  const orderId = useRef(`#PW-${Math.floor(1000 + Math.random() * 9000)}`)

  useEffect(() => {
    if (!fired.current) {
      fired.current = true
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#f97316', '#d4a017', '#22c55e', '#ff6b8a'],
      })
    }
  }, [])

  const baseLabel = getLabel(BASES, order.base)
  const fruitLabel = getFruitLabel(order.fruit)
  const iceLabel = order.iceCream ? getLabel(ALL_ICE_CREAMS, order.iceCream) : '—'
  const sauceLabel = order.sauce === 'sin_salsa' ? 'Sin salsa' : getLabel(SAUCES, order.sauce)
  const decoLabel = order.decoration === 'sin_deco' ? 'Sin topping' : getLabel(DECORATIONS, order.decoration)
  const deliveryLabel = order.delivery === 'takeaway' ? 'Para LLevar' : 'En Local'
  const creamLabel = order.cream ? 'Sí' : 'No'

  const whatsappMsg = encodeURIComponent(
    `[NUEVA COMANDA: ${orderId.current}] 🔔\n` +
    `---------------------------\n` +
    `TIPO: 🧇 Dulce\n` +
    `ENTREGA: ${order.delivery === 'takeaway' ? '🥡 Para Llevar' : '🍽️ En Local'}\n` +
    `---------------------------\n` +
    `[_] BASE: ${baseLabel}\n` +
    (fruitLabel !== '—' ? `[_] FRUTA: ${fruitLabel}\n` : '') +
    (iceLabel !== '—' ? `[_] HELADO: ${iceLabel}\n` : '') +
    `[_] CREMA: ${creamLabel}\n` +
    (sauceLabel !== 'Sin salsa' ? `[_] SALSA: ${sauceLabel}\n` : '') +
    (decoLabel !== 'Sin topping' ? `[_] TOPPING: ${decoLabel}\n` : '') +
    `---------------------------\n` +
    `¡Enviado desde el Menú Interactivo! ✨`
  )

  const rows = [
    { icon: '🍯', label: 'Base', val: baseLabel },
    { icon: '🫙', label: 'Salsa', val: sauceLabel },
    { icon: '🍓', label: 'Fruta', val: fruitLabel },
    { icon: '🍦', label: 'Crema', val: creamLabel },
    { icon: '🍨', label: 'Helado', val: iceLabel },
    { icon: '✨', label: 'Topping', val: decoLabel },
  ]

  const activeRows = rows.filter(r => r.val !== '—' && r.val !== 'Sin salsa' && r.val !== 'Sin topping' && r.val !== 'Sin Helado' && r.val !== 'No')

  return (
    <div className="space-y-6 lg:space-y-8 bg-white border border-[var(--border)] rounded-[var(--radius-xl)] p-5 sm:p-10 shadow-lg">
      
      <div className="text-center">
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ type: 'spring', delay: 0.2 }}
          className="text-5xl mb-3"
        >
          🎉
        </motion.div>
        <h2 className="step-title text-[var(--primary)] mb-1 tracking-tight">¡Pedido Listo!</h2>
        <p className="text-[15px] text-[var(--text-muted)] font-semibold">
          Tu ticket es el <strong className="text-[var(--chocolate)]">{orderId.current}</strong>
        </p>
      </div>

      {/* Visual Thermal Ticket */}
      <div className="bg-[#fffdf9] rounded-b-md p-6 sm:p-8 border border-[#e5e0d8] relative shadow-sm max-w-sm mx-auto"
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 4px, transparent 4px)',
             backgroundSize: '16px 16px',
             backgroundPosition: 'top -8px left 0',
             backgroundRepeat: 'repeat-x',
             borderTop: 'none',
             boxShadow: '0 4px 14px rgba(0,0,0,0.06)'
           }}>
        
        <div className="text-center border-b-[2px] border-dashed border-[#d1c8bc] pb-4 mb-5">
           <h3 className="font-bold text-[20px] uppercase tracking-[0.2em] text-[#5c5346] font-mono">Punto Waffles</h3>
           <p className="text-[12px] uppercase text-[#8c8273] font-mono mt-1 tracking-widest">Comanda Cocina {orderId.current}</p>
        </div>

        <ul className="space-y-3 font-mono text-[#4a4236] text-[13px] sm:text-[14px]">
          <li className="flex justify-between font-bold mb-5 uppercase tracking-wide">
            <span>MODALIDAD:</span> 
            <span>{deliveryLabel}</span>
          </li>
          
          {activeRows.map((row, i) => (
            <li key={i} className="flex flex-col sm:flex-row sm:items-end justify-between leading-snug">
              <span className="uppercase tracking-wide font-bold">☐ {row.label}</span>
              <span className="border-b-2 border-dotted border-[#e5e0d8] flex-1 mx-3 hidden sm:block mb-1"></span>
              <span className="text-right sm:text-left mt-1 sm:mt-0 font-medium ml-5 sm:ml-0 bg-[#f4ecd8] sm:bg-transparent px-2 sm:px-0 rounded-sm">
                {row.val}
              </span>
            </li>
          ))}
        </ul>

        <div className="text-center border-t-[2px] border-dashed border-[#d1c8bc] pt-5 mt-6">
           <p className="text-[10px] sm:text-[11px] uppercase text-[#8c8273] font-mono tracking-widest leading-relaxed">
             ** Muestra este ticket en caja **<br/>
             O haz tu pedido vía WhatsApp
           </p>
        </div>
      </div>

      <div className="space-y-4 pt-4 max-w-sm mx-auto">
        <a
          href={`https://wa.me/${WAFFLE_PHONE}?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full text-[15px] sm:text-[16px] py-4 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1DA851]"
          style={{ boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)' }}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Enviar Comanda a Cocina
        </a>

        <button
          onClick={onReset}
          className="btn-secondary w-full text-[14px]"
        >
          Volver a empezar
        </button>
      </div>
    </div>
  )
}
