import { motion } from 'framer-motion'

export default function Step7_Delivery({ onSelect }) {
  return (
    <div className="space-y-8 text-center md:text-left">
      <div>
        <h2 className="step-title mb-2">Modalidad de entrega</h2>
        <p className="text-[16px] text-[var(--text-muted)] font-semibold">
          ¿Te lo llevas o te quedas un rato?
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center sm:items-stretch">
        
        <motion.button
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect('local')}
          className="flex-1 max-w-[280px] bg-white border-2 border-[var(--border)] rounded-[var(--radius-xl)] p-6 shadow-sm hover:border-[var(--primary)] hover:shadow-md cursor-pointer transition-all flex flex-col items-center gap-4 group"
        >
          <div className="text-6xl group-hover:scale-110 transition-transform duration-300">🍽️</div>
          <div className="font-bold text-[20px] text-[var(--chocolate)] group-hover:text-[var(--primary)] transition-colors">
            Comer en el local
          </div>
          <div className="text-[14px] text-[var(--text-muted)] font-semibold">Te lo servimos en platito 🧇</div>
        </motion.button>

        <motion.button
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect('takeaway')}
          className="flex-1 max-w-[280px] bg-white border-2 border-[var(--border)] rounded-[var(--radius-xl)] p-6 shadow-sm hover:border-[var(--primary)] hover:shadow-md cursor-pointer transition-all flex flex-col items-center gap-4 group"
        >
          <div className="text-6xl group-hover:scale-110 transition-transform duration-300">🥡</div>
          <div className="font-bold text-[20px] text-[var(--chocolate)] group-hover:text-[var(--primary)] transition-colors">
            Para llevar
          </div>
          <div className="text-[14px] text-[var(--text-muted)] font-semibold">Empaque especial Punto Waffles</div>
        </motion.button>

      </div>
    </div>
  )
}
