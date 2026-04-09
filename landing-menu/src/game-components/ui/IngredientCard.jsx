import { motion } from 'framer-motion'

export default function IngredientCard({ label, emoji, color, desc, selected, onClick, multi = false }) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`
        relative w-full text-left p-4 rounded-[var(--radius-xl)] border-2 cursor-pointer
        transition-all duration-200 overflow-hidden flex items-center gap-4
        ${selected 
          ? 'border-[var(--primary)] shadow-md bg-[var(--primary-light)]' 
          : 'border-[var(--border)] shadow-xs bg-white hover:border-[var(--border-strong)] hover:shadow-sm'
        }
      `}
    >
      {/* Selection indicator mark */}
      <div 
        className={`
          absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center
          transition-all duration-200 border-2
          ${selected 
            ? 'bg-[var(--primary)] border-[var(--primary)]' 
            : 'bg-transparent border-[var(--border-strong)]'
          }
        `}
      >
        {selected && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>

      {/* Emoji / Color Drop */}
      <div 
        className="w-12 h-12 rounded-[var(--radius-lg)] shrink-0 flex items-center justify-center text-[24px] shadow-sm relative overflow-hidden"
        style={{ backgroundColor: color ? `${color}20` : 'var(--bg)' }}
      >
        {color && (
          <div className="absolute inset-x-0 bottom-0 top-3 opacity-30" style={{ backgroundColor: color }} />
        )}
        <span className="relative z-10">{emoji || '🧇'}</span>
      </div>

      <div className="flex-1 pr-6">
        <h3 className={`font-black text-[16px] leading-tight ${selected ? 'text-[var(--primary-dark)]' : 'text-[var(--text)]'}`}>
          {label}
        </h3>
        {desc && (
          <p className="text-[13px] text-[var(--text-muted)] font-semibold mt-0.5 leading-snug">
            {desc}
          </p>
        )}
      </div>
    </motion.button>
  )
}
