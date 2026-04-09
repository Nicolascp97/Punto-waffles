import { ICE_CREAMS_CREMA, ICE_CREAMS_AGUA, ICE_CREAMS_ZERO } from '../../game-data/menu'
import IngredientCard from '../ui/IngredientCard'

const sections = [
  { label: 'De Crema', items: ICE_CREAMS_CREMA, icon: '🥛' },
  { label: 'Al Agua', items: ICE_CREAMS_AGUA, icon: '💧' },
  { label: '0% Azúcar', items: ICE_CREAMS_ZERO, icon: '🤍' },
]

export default function Step4_IceCream({ selected, onSelect, onNext }) {
  return (
    <div className="space-y-8 relative">
      <div className="text-center md:text-left">
        <h2 className="step-title mb-2">Una bolita de helado</h2>
        <p className="text-[16px] text-[var(--text-muted)] font-semibold">
          Sujeto a stock del local. Elige 1 opción.
        </p>
      </div>

      <div className="pb-24 lg:pb-0">
        
        {/* Sin helado option */}
        <div className="mb-8">
          <IngredientCard
            label="Sin Helado"
            emoji="🚫"
            desc="Prefiero mi waffle sin helado"
            selected={selected === 'sin_helado'}
            onClick={() => onSelect('sin_helado')}
          />
        </div>

        {sections.map(section => (
          <div key={section.label} className="mb-10 last:mb-0">
            <h3 className="font-display text-[22px] font-bold text-[var(--chocolate)] mb-4 flex items-center gap-2">
               {section.icon} {section.label}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2">
              {section.items.map(ic => (
                <IngredientCard
                  key={ic.id}
                  label={ic.label}
                  color={ic.color}
                  emoji={ic.emoji}
                  selected={selected === ic.id}
                  onClick={() => onSelect(ic.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed lg:static bottom-0 left-0 w-full p-4 lg:p-0 mt-8 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)] to-transparent lg:bg-none z-20">
          <button onClick={onNext} className="btn-primary w-full shadow-lg">
            Confirmar helado <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      )}
    </div>
  )
}
