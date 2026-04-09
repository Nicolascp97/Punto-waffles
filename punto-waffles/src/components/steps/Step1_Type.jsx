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
          className="text-left bg-white border-2 border-[var(--primary-light)] rounded-[var(--radius-2xl)] p-8 shadow-sm hover:shadow-md hover:border-[var(--primary)] cursor-pointer transition-all duration-200 group relative overflow-hidden"
        >
          {/* Tag */}
          <div className="absolute top-6 right-6 bg-[var(--primary-light)] text-[var(--primary)] font-bold text-[12px] px-3 py-1 rounded-full uppercase tracking-wider">
            Popular
          </div>

          <div className="text-5xl mb-4">🍯</div>
          <h3 className="font-display text-[28px] font-bold text-[var(--chocolate)] group-hover:text-[var(--primary)] mb-2 transition-colors">
            Waffle Dulce
          </h3>
          <p className="text-[14px] text-[var(--text-muted)] font-semibold mb-6">
            Frutas frescas, cremas, helado y salsas a elección. ¡El clásico!
          </p>
          
          <div className="inline-flex font-bold text-[14px] text-[var(--primary)] items-center gap-1 group-hover:gap-2 transition-all">
            Elegir dulce <span aria-hidden="true">&rarr;</span>
          </div>
        </motion.button>

        {/* SALADO - locked */}
        <div className="text-left bg-[var(--bg)] border-2 border-[var(--border)] rounded-[var(--radius-2xl)] p-8 opacity-60 relative overflow-hidden">
          <div className="absolute top-6 right-6 bg-[var(--border)] text-[var(--text-muted)] font-bold text-[12px] px-3 py-1 rounded-full uppercase tracking-wider">
            Pronto
          </div>
          <div className="text-5xl mb-4 grayscale">🧀</div>
          <h3 className="font-display text-[28px] font-bold text-[var(--text-muted)] mb-2">
            Waffle Salado
          </h3>
          <p className="text-[14px] text-[var(--text-muted)] font-semibold mb-6">
            Queso derretido, jamón, huevo y especias. Perfecto para un antojo.
          </p>
          <div className="inline-flex font-bold text-[14px] text-[var(--text-light)] items-center">
            Próximamente 🔒
          </div>
        </div>
      </div>
    </div>
  )
}
