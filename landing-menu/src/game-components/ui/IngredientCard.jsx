import { motion } from 'framer-motion'

export default function IngredientCard({ label, emoji, color, desc, selected, onClick, multi = false }) {
  return (
    <motion.button
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`
        relative w-full text-left cursor-pointer overflow-hidden
        rounded-2xl border-2 transition-all duration-200
        flex items-center gap-4 p-4
        ${selected
          ? 'border-[var(--primary)] bg-[var(--primary)] shadow-[0_6px_20px_rgba(255,107,44,0.45)]'
          : 'border-[var(--border)] bg-white hover:border-[var(--primary)] hover:shadow-[0_4px_16px_rgba(255,107,44,0.20)]'
        }
      `}
    >
      {/* Color accent bar on left when selected */}
      {selected && (
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-white/40 rounded-l-2xl" />
      )}

      {/* Emoji bubble */}
      <div
        className={`
          w-14 h-14 rounded-xl shrink-0 flex items-center justify-center text-[28px]
          transition-all duration-200
          ${selected ? 'bg-white/25' : 'bg-[var(--bg)]'}
        `}
        style={!selected && color ? { backgroundColor: `${color}18` } : undefined}
      >
        {color && !selected && (
          <div
            className="absolute inset-0 rounded-xl opacity-20"
            style={{ backgroundColor: color }}
          />
        )}
        <span className="relative z-10 drop-shadow-sm">{emoji || '🧇'}</span>
      </div>

      {/* Text */}
      <div className="flex-1 pr-7 min-w-0">
        <h3 className={`font-black text-[17px] leading-tight truncate ${selected ? 'text-white' : 'text-[var(--text)]'}`}>
          {label}
        </h3>
        {desc && (
          <p className={`text-[13px] font-semibold mt-0.5 leading-snug ${selected ? 'text-white/85' : 'text-[var(--text-muted)]'}`}>
            {desc}
          </p>
        )}
      </div>

      {/* Checkmark / multi indicator */}
      <div
        className={`
          absolute top-3.5 right-3.5 w-6 h-6 rounded-full flex items-center justify-center
          border-2 transition-all duration-200 shrink-0
          ${selected
            ? 'bg-white border-white'
            : 'bg-transparent border-[var(--border-strong)] border-opacity-40'
          }
        `}
      >
        {selected && (
          <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
            <path d="M10 3L4.5 8.5L2 6" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
    </motion.button>
  )
}
