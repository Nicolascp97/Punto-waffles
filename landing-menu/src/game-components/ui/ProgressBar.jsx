import { STEP_LABELS } from '../../game-data/menu'

const STEP_EMOJIS = ['', '🧇', '🫙', '🍓', '🍦', '🍨', '🍯', '✨', '📦']

export default function ProgressBar({ currentStep, goToStep }) {
  const totalSteps = 8

  return (
    <div className="w-full bg-white border-b-2 border-[var(--border)] sticky top-0 z-50 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">

        {/* Mobile View */}
        <div className="flex md:hidden flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[20px]">{STEP_EMOJIS[currentStep] || '🧇'}</span>
              <span
                className="font-black text-[15px] text-[var(--primary)]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {currentStep > 0 && currentStep <= totalSteps ? STEP_LABELS[currentStep] : '¡Listo!'}
              </span>
            </div>
            <span className="text-[12px] font-bold text-[var(--text-muted)] bg-[var(--primary-light)] px-3 py-1 rounded-full">
              {currentStep > totalSteps ? '¡Completado!' : `${currentStep} / ${totalSteps}`}
            </span>
          </div>

          {/* Progress dots mobile */}
          <div className="flex gap-1.5 h-2.5">
            {Array.from({ length: totalSteps }, (_, i) => {
              const step = i + 1
              const isActive = currentStep === step
              const isDone = currentStep > step
              return (
                <div
                  key={step}
                  className="flex-1 rounded-full overflow-hidden bg-[var(--border)]"
                >
                  <div
                    className="w-full h-full transition-all duration-300 rounded-full"
                    style={{
                      backgroundColor: isActive
                        ? 'var(--primary)'
                        : isDone
                        ? 'var(--honey)'
                        : 'transparent',
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex items-center gap-1">
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
                  flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[12px] font-black
                  transition-all duration-200
                  ${active
                    ? 'bg-[var(--primary)] text-white shadow-sm'
                    : done
                    ? 'bg-[var(--primary-light)] text-[var(--primary)] cursor-pointer hover:bg-orange-100'
                    : 'text-[var(--text-muted)] cursor-default opacity-50'
                  }
                `}
              >
                <span className="text-[14px] leading-none">
                  {done ? '✓' : STEP_EMOJIS[step] || step}
                </span>
                <span className="hidden lg:inline uppercase tracking-wide">{label}</span>
              </button>
            )
          })}
        </div>

      </div>
    </div>
  )
}
