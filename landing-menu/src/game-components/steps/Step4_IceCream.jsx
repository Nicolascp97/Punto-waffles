import { ICE_CREAMS_CREMA, ICE_CREAMS_AGUA, ICE_CREAMS_ZERO } from '../../game-data/menu'
import IngredientCard from '../ui/IngredientCard'

const sections = [
  {
    label: 'De Crema',
    subtitle: 'Cremosos y suaves',
    items: ICE_CREAMS_CREMA,
    icon: '🥛',
    accent: '#FF6B2C',       /* naranja-waffle */
    bg: '#FFF0E6',
    border: '#ffd5b0',
    headerText: '#C24A10',
    badge: '#fff',
    badgeText: '#C24A10',
  },
  {
    label: 'Al Agua',
    subtitle: 'Frescos y livianos',
    items: ICE_CREAMS_AGUA,
    icon: '💧',
    accent: '#0EA5E9',
    bg: '#EFF6FF',
    border: '#BAE0FD',
    headerText: '#0369A1',
    badge: '#fff',
    badgeText: '#0369A1',
  },
  {
    label: '0% Azúcar',
    subtitle: 'Sin culpa, con sabor',
    items: ICE_CREAMS_ZERO,
    icon: '🤍',
    accent: '#D4006A',       /* frambuesa */
    bg: '#FDF2F8',
    border: '#FBCFE8',
    headerText: '#9D174D',
    badge: '#fff',
    badgeText: '#9D174D',
  },
]

export default function Step4_IceCream({ selected, onSelect, onNext }) {
  return (
    <div className="space-y-6 relative">
      <div className="text-center md:text-left">
        <h2 className="step-title mb-2">Una bolita de helado</h2>
        <p className="text-[16px] text-[var(--text-muted)] font-semibold">
          Sujeto a stock del local — elige 1 opción.
        </p>
      </div>

      <div className="pb-24 lg:pb-0 space-y-5">

        {/* Sin helado */}
        <div
          className="rounded-2xl border-2 overflow-hidden"
          style={{ borderColor: '#e2e8f0', background: '#f8fafc' }}
        >
          <div className="px-5 py-3 flex items-center gap-3 border-b border-[#e2e8f0]">
            <span className="text-2xl">🚫</span>
            <h3 className="font-black text-[16px] text-slate-500 uppercase tracking-wide">Sin helado</h3>
          </div>
          <div className="p-3">
            <IngredientCard
              label="Sin Helado"
              emoji="🚫"
              desc="Prefiero mi waffle sin helado"
              selected={selected === 'sin_helado'}
              onClick={() => onSelect('sin_helado')}
            />
          </div>
        </div>

        {/* Categorías */}
        {sections.map(section => (
          <div
            key={section.label}
            className="rounded-2xl border-2 overflow-hidden"
            style={{ borderColor: section.border, background: section.bg }}
          >
            {/* Section header */}
            <div
              className="px-5 py-4 flex items-center justify-between border-b-2"
              style={{ borderColor: section.border }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-[24px] shadow-sm"
                  style={{ background: `${section.accent}20` }}
                >
                  {section.icon}
                </div>
                <div>
                  <h3
                    className="font-black text-[20px] leading-tight"
                    style={{ color: section.headerText, fontFamily: 'var(--font-display)' }}
                  >
                    {section.label}
                  </h3>
                  <p className="text-[12px] font-bold uppercase tracking-widest" style={{ color: `${section.accent}bb` }}>
                    {section.subtitle}
                  </p>
                </div>
              </div>
              <div
                className="text-[12px] font-black px-3 py-1.5 rounded-full border-2"
                style={{ color: section.headerText, borderColor: section.border, background: section.badge }}
              >
                {section.items.length} opciones
              </div>
            </div>

            {/* Items grid */}
            <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
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
