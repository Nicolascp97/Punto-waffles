import { motion } from 'framer-motion'

export default function Step3_Cream({ onSelect }) {
  return (
    <div className="space-y-8 text-center md:text-left">
      <div>
        <h2 className="step-title mb-2">¿Le ponemos crema?</h2>
        <p className="text-[16px] text-[var(--text-muted)] font-semibold">
          Crema chantilly suave y esponjosa.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center sm:items-stretch">
        
        <motion.button
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(true)}
          className="flex-1 max-w-[280px] bg-white border-2 border-[var(--border)] rounded-[var(--radius-xl)] p-6 shadow-sm hover:border-[var(--primary)] hover:shadow-md cursor-pointer transition-all flex flex-col items-center gap-4 group"
        >
          <div className="text-6xl group-hover:scale-110 transition-transform duration-300">🍦</div>
          <div className="font-bold text-[20px] text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
            ¡Sí, por favor!
          </div>
        </motion.button>

        <motion.button
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(false)}
          className="flex-1 max-w-[280px] bg-[var(--bg)] border-2 border-[var(--border)] rounded-[var(--radius-xl)] p-6 hover:border-[var(--text-muted)] cursor-pointer transition-all flex flex-col items-center gap-4"
        >
          <div className="text-6xl opacity-40">🚫</div>
          <div className="font-bold text-[20px] text-[var(--text-muted)]">
            No, gracias
          </div>
        </motion.button>

      </div>
    </div>
  )
}
