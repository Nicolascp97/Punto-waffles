import { FRUITS } from '../../game-data/menu'
import IngredientCard from '../ui/IngredientCard'

export default function Step2_Fruit({ selected, onSelect, onNext }) {
  const current = Array.isArray(selected) ? selected : (selected ? [selected] : [])

  const handleSelect = (id) => {
    let next
    if (current.includes(id)) {
      next = current.filter(i => i !== id)
    } else {
      if (current.length >= 3) {
        next = [...current.slice(1), id]
      } else {
        next = [...current, id]
      }
    }
    onSelect(next)
  }

  return (
    <div className="space-y-6 relative">
      <div className="text-center md:text-left">
        <h2 className="step-title mb-2">Frutas frescas</h2>
        <p className="text-[16px] text-[var(--text-muted)] font-semibold">
          Puedes elegir hasta 3 opciones para tu waffle.
        </p>
      </div>

      <div
        className="flex items-center gap-2 text-[13px] font-black px-4 py-2.5 rounded-xl w-fit"
        style={{ background: 'var(--primary-light)', color: 'var(--primary-dark)' }}
      >
        <span className="text-[16px]">💡</span>
        <span>Tip: ¡Combina plátano con frutilla!</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-24 lg:pb-0">
        {FRUITS.map(item => (
          <IngredientCard
            key={item.id}
            label={item.label}
            color={item.color}
            emoji={item.emoji}
            selected={current.includes(item.id)}
            onClick={() => handleSelect(item.id)}
            multi={true}
          />
        ))}
      </div>

      <div className="fixed lg:static bottom-0 left-0 w-full p-4 lg:p-0 mt-8 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)] to-transparent lg:bg-none z-20">
        <button
          onClick={onNext}
          className={`btn-primary w-full shadow-lg ${current.length === 0 ? 'opacity-70' : ''}`}
        >
          {current.length === 0 ? 'Continuar sin fruta ⏭️' : `Confirmar ${current.length} fruta${current.length > 1 ? 's' : ''} ✓`}
        </button>
      </div>
    </div>
  )
}
