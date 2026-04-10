import { motion } from 'framer-motion'
import { WAFFLES_SALADO, PRICE_SALADO } from '../../game-data/menu'

export default function StepSalado({ selected, onSelect, onNext }) {
  return (
    <div className="space-y-6 relative">
      {/* Header */}
      <div className="text-center md:text-left">
        <h2 className="step-title mb-2">Elige tu Waffle Salado</h2>
        <p className="text-[16px] text-[var(--text-muted)] font-semibold">
          Todos incluyen Papa Hilo opcional y Aderezo.
        </p>
      </div>

      {/* Price badge */}
      <div className="flex items-center gap-3 w-fit">
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full border-2 font-black text-[15px]"
          style={{
            borderColor: 'var(--primary)',
            color: 'var(--primary)',
            background: 'var(--primary-light)',
          }}
        >
          <span>💰</span>
          <span>${PRICE_SALADO.toLocaleString('es-CL')}</span>
        </div>
        <span className="text-[13px] font-bold text-[var(--text-muted)]">c/u</span>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3 pb-24 lg:pb-0">
        {WAFFLES_SALADO.map((waffle, idx) => {
          const isSelected = selected === waffle.id
          return (
            <motion.button
              key={waffle.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07, duration: 0.3 }}
              whileHover={{ y: -2, scale: 1.005 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(waffle.id)}
              className={`
                w-full text-left rounded-2xl border-2 overflow-hidden
                transition-all duration-200 cursor-pointer
                ${isSelected
                  ? 'border-[var(--primary)] shadow-[0_6px_24px_rgba(255,107,44,0.40)]'
                  : 'border-[var(--border)] bg-white hover:border-[var(--primary)] hover:shadow-[0_4px_16px_rgba(255,107,44,0.18)]'
                }
              `}
              style={isSelected ? { background: 'var(--primary)' } : {}}
            >
              {/* Card body */}
              <div className="flex items-start gap-4 p-4">

                {/* Emoji / color block */}
                <div
                  className="w-16 h-16 rounded-xl shrink-0 flex items-center justify-center text-[32px] shadow-sm"
                  style={{
                    background: isSelected ? 'rgba(255,255,255,0.22)' : `${waffle.color}15`,
                  }}
                >
                  {waffle.emoji}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      className={`text-[22px] leading-tight font-normal ${isSelected ? 'text-white' : 'text-[var(--chocolate)]'}`}
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {waffle.label}
                    </h3>
                    {/* Check indicator */}
                    <div
                      className={`
                        w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5
                        transition-all duration-200
                        ${isSelected ? 'bg-white border-white' : 'border-[var(--border-strong)] border-opacity-40 bg-transparent'}
                      `}
                    >
                      {isSelected && (
                        <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                          <path d="M10 3L4.5 8.5L2 6" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </div>

                  <p className={`text-[13px] font-bold mb-2 ${isSelected ? 'text-white/80' : 'text-[var(--text-muted)]'}`}>
                    {waffle.desc}
                  </p>

                  {/* Ingredient tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {waffle.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                        style={isSelected
                          ? { background: 'rgba(255,255,255,0.22)', color: 'white' }
                          : { background: `${waffle.color}12`, color: waffle.color }
                        }
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.button>
          )
        })}
      </div>

      {/* CTA */}
      {selected && (
        <div className="fixed lg:static bottom-0 left-0 w-full p-4 lg:p-0 mt-4 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)] to-transparent lg:bg-none z-20">
          <button onClick={onNext} className="btn-primary w-full shadow-lg">
            Confirmar selección <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      )}
    </div>
  )
}
