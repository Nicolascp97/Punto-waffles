import { DECORATIONS } from '../../game-data/menu'
import IngredientCard from '../ui/IngredientCard'

export default function Step6_Decoration({ selected, onSelect, onNext }) {
  return (
    <div className="space-y-8 relative">
      <div className="text-center md:text-left">
        <h2 className="step-title mb-2">¡Topping final!</h2>
        <p className="text-[16px] text-[var(--text-muted)] font-semibold">
          El toque crunchy para decorar.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-24 lg:pb-0">

        <div className="bg-white rounded-2xl p-3 shadow-sm border border-yellow-100 hover:border-yellow-300 transition-all duration-200">
          <IngredientCard
            label="Sin Topping"
            emoji="🚫"
            selected={selected === 'sin_deco'}
            onClick={() => onSelect('sin_deco')}
          />
        </div>

        {DECORATIONS.map(item => (
          <div key={item.id} className="bg-white rounded-2xl p-3 shadow-sm border border-yellow-100 hover:border-yellow-300 transition-all duration-200">
            <IngredientCard
              label={item.label}
              emoji={item.emoji}
              selected={selected === item.id}
              onClick={() => onSelect(item.id)}
            />
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed lg:static bottom-0 left-0 w-full p-4 lg:p-0 mt-8 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)] to-transparent lg:bg-none z-20">
          <button onClick={onNext} className="btn-primary w-full shadow-lg">
            Ya casi terminamos <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      )}
    </div>
  )
}
