import { SAUCES } from '../../game-data/menu'
import IngredientCard from '../ui/IngredientCard'

export default function Step5_Sauce({ selected, onSelect, onNext }) {
  return (
    <div className="space-y-8 relative">
      <div className="text-center md:text-left">
        <h2 className="step-title mb-2">Bañamos con salsa</h2>
        <p className="text-[16px] text-[var(--text-muted)] font-semibold">
          Ese toque líquido final que lo hace irresistible.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-24 lg:pb-0">
        
        <IngredientCard
          label="Sin salsa extra"
          emoji="🚫"
          selected={selected === 'sin_salsa'}
          onClick={() => onSelect('sin_salsa')}
        />

        {SAUCES.map(item => (
          <IngredientCard
            key={item.id}
            label={item.label}
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
            Elegir topping <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      )}
    </div>
  )
}
