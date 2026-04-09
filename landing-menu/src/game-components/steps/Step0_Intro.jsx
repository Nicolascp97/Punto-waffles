import { motion } from 'framer-motion'

export default function Step0_Intro({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      
      {/* Floating Emojis */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5, type: 'spring' }}
        className="flex gap-3 mb-6"
      >
        <span className="text-4xl filter drop-shadow-sm">🍓</span>
        <span className="text-5xl filter drop-shadow-md">🧇</span>
        <span className="text-4xl filter drop-shadow-sm">🍦</span>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="font-black text-[clamp(42px,10vw,64px)] leading-[1.05] tracking-tight text-[var(--chocolate)] mb-4"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Arma tu
        <br />
        <span className="text-[var(--primary)] relative">
          Waffle Perfecto
          <svg className="absolute -bottom-2 left-0 w-full h-3 text-[var(--primary)] opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-[17px] sm:text-[19px] text-[var(--text-muted)] font-semibold max-w-md mx-auto mb-10 leading-relaxed"
      >
        Elige tus ingredientes favoritos y nosotros lo preparamos para ti. ¡Pídelo directo por WhatsApp! 📲
      </motion.p>

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, type: 'spring', bounce: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="bg-[var(--primary)] text-white font-black text-[18px] sm:text-[20px] px-10 py-4 rounded-full shadow-[0_8px_24px_rgba(249,115,22,0.4)] hover:bg-[var(--primary-dark)] hover:shadow-[0_12px_32px_rgba(249,115,22,0.5)] transition-all flex items-center justify-center gap-3 cursor-pointer"
      >
        ¡Empezar ahora!
        <span className="text-[24px]">✨</span>
      </motion.button>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 text-[14px] font-bold text-[var(--text-light)]"
      >
        📍 Punto Waffles — Litueche
      </motion.div>
    </div>
  )
}
