import { STEP_LABELS } from '../../game-data/menu'

export default function ProgressBar({ currentStep, goToStep }) {
  const totalSteps = 8

  return (
    <div className="w-full bg-[var(--surface)] border-b border-[var(--border)] shadow-xs sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        
        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-between">
          {STEP_LABELS.slice(1, totalSteps + 1).map((label, i) => {
            const step = i + 1
            const done = currentStep > step
            const active = currentStep === step
            const clickable = done || active

            return (
              <button
                key={step}
                onClick={clickable ? () => goToStep(step) : undefined}
                className={`
                  flex items-center gap-2 font-bold text-[13px] 
                  ${clickable ? 'cursor-pointer hover:opacity-80' : 'cursor-default opacity-50'}
                  ${active ? 'text-[var(--primary)]' : done ? 'text-[var(--success)]' : 'text-[var(--text-muted)]'}
                  transition-all duration-200
                `}
              >
                <span
                  className="w-7 h-7 flex items-center justify-center rounded-full text-[12px] font-black shadow-xs"
                  style={{
                    backgroundColor: active ? 'var(--primary)' : done ? 'var(--success-light)' : 'var(--bg)',
                    color: active ? 'white' : done ? 'var(--success)' : 'var(--text-muted)',
                    border: `2px solid ${active ? 'var(--primary)' : done ? 'var(--success)' : 'var(--border)'}`,
                  }}
                >
                  {done ? '✓' : step}
                </span>
                <span className="hidden lg:inline">{label}</span>
              </button>
            )
          })}
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-[var(--text-muted)] text-[12px] uppercase tracking-wider">
              {currentStep > totalSteps ? '¡Completado!' : `Paso ${currentStep} de ${totalSteps}`}
            </span>
            <span className="font-black text-[var(--primary)] text-[14px]">
              {currentStep > 0 && currentStep <= totalSteps ? STEP_LABELS[currentStep] : ''}
            </span>
          </div>
          <div className="flex gap-1.5 h-2">
            {Array.from({ length: totalSteps }, (_, i) => {
              const step = i + 1
              const isActive = currentStep === step
              const isDone = currentStep > step
              return (
                <div
                  key={step}
                  className="flex-1 rounded-full overflow-hidden bg-[var(--bg)] border border-[var(--border)]"
                >
                  <div 
                    className="w-full h-full transition-all duration-300"
                    style={{ 
                      backgroundColor: isActive ? 'var(--primary)' : isDone ? 'var(--success)' : 'transparent',
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}
