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
        next = [...current.slice(1), id] // Keep max 3
      } else {
        next = [...current, id]
      }
    }
    onSelect(next)
  }

  return (
    <div className="space-y-8 relative">
      <div className="text-center md:text-left">
        <h2 className="step-title mb-2">Frutas frescas</h2>
        <p className="text-[16px] text-[var(--text-muted)] font-semibold">
          Puedes elegir hasta 3 opciones para tu waffle.
        </p>
      </div>

      <div className="flex gap-2 text-sm font-bold bg-[var(--primary-light)] text-[var(--primary-dark)] px-4 py-2 rounded-xl mb-4 w-fit mx-auto md:mx-0">
        <span className="text-[18px]">💡</span> Tip: ¡Combina plátano con frutilla!
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-24 lg:pb-0">
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

      <div className="fixed lg:static bottom-0 left-0 w-full p-4 lg:p-0 mt-8 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)] to-transparent lg:bg-none z-20 flex gap-4">
         <button onClick={onNext} className={`btn-primary flex-1 shadow-lg ${current.length === 0 ? 'bg-[var(--border-strong)] text-white/90 shadow-none' : ''}`}>
           {current.length === 0 ? 'Continuar sin fruta ⏭️' : 'Confirmar frutas ✓'}
         </button>
      </div>
    </div>
  )
}
