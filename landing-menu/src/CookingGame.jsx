import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useWaffleOrder } from './game-hooks/useWaffleOrder'
import ProgressBar from './game-components/ui/ProgressBar'
import AnimatedWaffle from './game-components/ui/AnimatedWaffle'
import Step0_Intro from './game-components/steps/Step0_Intro'
import Step1_Type from './game-components/steps/Step1_Type'
import Step2_Base from './game-components/steps/Step2_Base'
import Step2_Fruit from './game-components/steps/Step2_Fruit'
import Step3_Cream from './game-components/steps/Step3_Cream'
import Step4_IceCream from './game-components/steps/Step4_IceCream'
import Step5_Sauce from './game-components/steps/Step5_Sauce'
import Step6_Decoration from './game-components/steps/Step6_Decoration'
import Step7_Delivery from './game-components/steps/Step7_Delivery'
import StepComplete from './game-components/steps/StepComplete'

const pageVariants = {
  enter: { opacity: 0, y: 18 },
  center: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0, duration: 0.38 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.18 } },
}

export default function App() {
  const { order, setField, nextStep, prevStep, goToStep, reset } = useWaffleOrder()
  const step = order.currentStep
  const navigate = useNavigate()

  const selectAndNext = (field) => (value) => {
    setField(field, value)
    setTimeout(nextStep, 250)
  }

  const selectOnly = (field) => (value) => {
    setField(field, value)
  }

  function renderStep() {
    switch (step) {
      case 0: return <Step0_Intro key="s0" onStart={nextStep} />
      case 1: return <Step1_Type key="s1" onSelect={selectAndNext('type')} />
      case 2: return <Step2_Base key="s2" selected={order.base} onSelect={selectOnly('base')} onNext={nextStep} />
      case 3: return <Step2_Fruit key="s3" selected={order.fruit} onSelect={selectOnly('fruit')} onNext={nextStep} />
      case 4: return <Step3_Cream key="s4" onSelect={selectAndNext('cream')} />
      case 5: return <Step4_IceCream key="s5" selected={order.iceCream} onSelect={selectOnly('iceCream')} onNext={nextStep} />
      case 6: return <Step5_Sauce key="s6" selected={order.sauce} onSelect={selectOnly('sauce')} onNext={nextStep} />
      case 7: return <Step6_Decoration key="s7" selected={order.decoration} onSelect={selectOnly('decoration')} onNext={nextStep} />
      case 8: return <Step7_Delivery key="s8" onSelect={selectAndNext('delivery')} />
      case 9: return <StepComplete key="s9" order={order} onReset={reset} />
      default: return null
    }
  }

  const showChrome = step > 0

  return (
    <div className="min-h-dvh flex flex-col bg-[var(--bg)] text-[var(--text)]">

      {/* Top brand bar — only on intro screen */}
      {!showChrome && (
        <div className="w-full bg-white border-b-2 border-[var(--border)] px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--primary)] text-[13px] font-bold transition-colors"
          >
            <span>&larr;</span> Menú
          </button>
          <span
            className="text-[var(--primary)] text-[18px]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            🧇 Punto Waffles
          </span>
          <div className="w-12" />
        </div>
      )}

      {/* Progress bar */}
      {showChrome && <ProgressBar currentStep={step} goToStep={goToStep} />}

      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">

        {/* Waffle preview panel */}
        {showChrome && (
          <div className="w-full flex flex-col items-center py-5 px-4 gap-2 border-b-2 border-[var(--border)] bg-white">
            <p
              className="text-[13px] font-black text-[var(--text-muted)] uppercase tracking-widest"
            >
              Tu waffle
            </p>
            <div className="w-[130px] sm:w-[160px] mx-auto">
              <AnimatedWaffle order={order} />
            </div>
          </div>
        )}

        {/* Content */}
        <div className={`flex-1 flex flex-col p-4 sm:p-6 md:p-8 ${!showChrome ? 'items-center justify-center' : ''}`}>

          {/* Back button */}
          <div className="w-full max-w-2xl mx-auto mb-4 min-h-[36px]">
            {showChrome && step > 0 && step < 9 && (
              <button
                onClick={prevStep}
                className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--primary)] text-[13px] font-bold transition-colors group"
              >
                <span className="w-7 h-7 rounded-full border-2 border-[var(--border)] group-hover:border-[var(--primary)] flex items-center justify-center text-[11px] transition-colors">
                  &larr;
                </span>
                Paso anterior
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full max-w-2xl mx-auto px-1 sm:px-2 py-2"
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
