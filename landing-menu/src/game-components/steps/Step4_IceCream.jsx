import { ICE_CREAMS_CREMA, ICE_CREAMS_AGUA, ICE_CREAMS_ZERO } from '../../game-data/menu'
import IngredientCard from '../ui/IngredientCard'

const sections = [
  {
    label: 'De Crema',
    items: ICE_CREAMS_CREMA,
    icon: '🥛',
    bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
    borderColor: 'border-2 border-orange-200',
    headerColor: 'text-orange-900',
    badgeColor: 'bg-orange-100 text-orange-700'
  },
  {
    label: 'Al Agua',
    items: ICE_CREAMS_AGUA,
    icon: '💧',
    bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    borderColor: 'border-2 border-blue-200',
    headerColor: 'text-blue-900',
    badgeColor: 'bg-blue-100 text-blue-700'
  },
  {
    label: '0% Azúcar',
    items: ICE_CREAMS_ZERO,
    icon: '🤍',
    bgColor: 'bg-gradient-to-br from-gray-50 to-slate-50',
    borderColor: 'border-2 border-gray-200',
    headerColor: 'text-gray-900',
    badgeColor: 'bg-gray-100 text-gray-700'
  },
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
        <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 border-2 border-gray-300">
          <IngredientCard
            label="Sin Helado"
            emoji="🚫"
            desc="Prefiero mi waffle sin helado"
            selected={selected === 'sin_helado'}
            onClick={() => onSelect('sin_helado')}
          />
        </div>

        {sections.map(section => (
          <div key={section.label} className={`mb-10 last:mb-0 p-6 rounded-3xl ${section.bgColor} ${section.borderColor}`}>
            <div className="mb-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl">{section.icon}</span>
                <h3 className={`font-display text-[28px] font-bold ${section.headerColor}`}>
                  {section.label}
                </h3>
              </div>
              <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold ${section.badgeColor}`}>
                {section.items.length} opciones
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {section.items.map(ic => (
                <div key={ic.id} className="bg-white bg-opacity-60 rounded-2xl p-3 backdrop-blur-sm border border-white border-opacity-50">
                  <IngredientCard
                    label={ic.label}
                    color={ic.color}
                    emoji={ic.emoji}
                    selected={selected === ic.id}
                    onClick={() => onSelect(ic.id)}
                  />
                </div>
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
