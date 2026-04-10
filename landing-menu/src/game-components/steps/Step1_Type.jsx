import { motion } from 'framer-motion'

export default function Step1_Type({ onSelect }) {
  return (
    <div className="space-y-8">
      <div className="text-center md:text-left">
        <h2 className="step-title mb-2">¿Cómo lo prefieres?</h2>
        <p className="text-[16px] text-[var(--text-muted)] font-semibold">
          Comencemos eligiendo el estilo de tu waffle.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        {/* DULCE */}
        <motion.button
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onSelect('sweet')}
          className="text-left bg-white border-2 border-[var(--border)] rounded-[var(--radius-2xl)] p-8 shadow-sm hover:shadow-md hover:border-[var(--primary)] cursor-pointer transition-all duration-200 group relative overflow-hidden"
        >
          {/* Popular tag */}
          <div
            className="absolute top-5 right-5 text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-widest"
            style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}
          >
            Popular
          </div>

          <div className="text-5xl mb-4">🍯</div>
          <h3
            className="text-[28px] font-normal text-[var(--chocolate)] group-hover:text-[var(--primary)] mb-2 transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Waffle Dulce
          </h3>
          <p className="text-[14px] text-[var(--text-muted)] font-semibold mb-6">
            Frutas frescas, cremas, helado y salsas a elección. ¡El clásico!
          </p>
          <div className="inline-flex font-black text-[14px] text-[var(--primary)] items-center gap-1 group-hover:gap-2 transition-all">
            Armar dulce <span aria-hidden="true">&rarr;</span>
          </div>
        </motion.button>

        {/* SALADO */}
        <motion.button
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onSelect('salado')}
          className="text-left bg-white border-2 border-[var(--border)] rounded-[var(--radius-2xl)] p-8 shadow-sm hover:shadow-md hover:border-[var(--frambuesa)] cursor-pointer transition-all duration-200 group relative overflow-hidden"
        >
          {/* Salado tag */}
          <div
            className="absolute top-5 right-5 text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-widest"
            style={{ background: 'var(--frambuesa-light)', color: 'var(--frambuesa)' }}
          >
            Nuevo
          </div>

          <div className="text-5xl mb-4">🧀</div>
          <h3
            className="text-[28px] font-normal text-[var(--chocolate)] group-hover:text-[var(--frambuesa)] mb-2 transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Waffle Salado
          </h3>
          <p className="text-[14px] text-[var(--text-muted)] font-semibold mb-6">
            Churrasco, Lomito, Pollo, Champiñón o Mechada. ¡Contundente y sabroso!
          </p>
          <div
            className="inline-flex font-black text-[14px] items-center gap-1 group-hover:gap-2 transition-all"
            style={{ color: 'var(--frambuesa)' }}
          >
            Elegir salado <span aria-hidden="true">&rarr;</span>
          </div>
        </motion.button>

      </div>
    </div>
  )
}
