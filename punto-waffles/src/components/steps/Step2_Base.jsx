import { BASES } from '../../data/menu'
import IngredientCard from '../ui/IngredientCard'

export default function Step2_Base({ selected, onSelect, onNext }) {
  return (
    <div className="space-y-8 relative">
      <div className="text-center md:text-left">
        <h2 className="step-title mb-2">Elige tu base untable</h2>
        <p className="text-[16px] text-[var(--text-muted)] font-semibold">
          La cama perfecta para tus ingredientes. (1 opción)
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-24 lg:pb-0">
        {BASES.map(item => (
          <IngredientCard
            key={item.id}
            label={item.label}
            desc={item.desc}
            color={item.color}
            emoji={item.emoji}
            selected={selected === item.id}
            onClick={() => onSelect(item.id)}
          />
        ))}
      </div>

      {selected && (
        <div className="fixed lg:static bottom-0 left-0 w-full p-4 lg:p-0 mt-8 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)] to-transparent lg:bg-none z-20">
          <button onClick={onNext} className="btn-primary w-full shadow-lg">
            Siguiente paso <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      )}
    </div>
  )
}
