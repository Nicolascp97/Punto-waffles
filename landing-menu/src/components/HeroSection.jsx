import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

/**
 * HeroSection — Sección hero de la landing con CTA al juego
 */
export default function HeroSection() {
  const navigate = useNavigate()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="relative overflow-hidden pt-space-12 pb-space-24 md:pt-space-24 md:pb-space-32 bg-gradient-to-br from-cream-50 to-cream-100">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-naranja-waffle/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-frambuesa/5 rounded-full"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-space-4 md:px-space-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-space-12 items-center"
        >
          {/* Left: Text content */}
          <div>
            <motion.div variants={itemVariants} className="mb-space-6">
              <h1 className="text-5xl md:text-6xl font-pacifico text-cafe-dark leading-tight">
                Bienvenido a <span className="text-naranja-waffle">Punto Waffles</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-cafe-light mb-space-8 leading-relaxed font-nunito font-600"
            >
              Descubre una experiencia única: explora nuestro menú completo de waffles artesanales, postres especiales y helados premium. ¿Prefieres armar tu propio waffle? ¡Tenemos el juego perfecto para ti!
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-space-4"
            >
              <Button
                variant="cta"
                size="lg"
                onClick={() => document.getElementById('waffles')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🧇 Ver Waffles Especiales
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/cocinar')}
              >
                👨‍🍳 Cocinar Ahora
              </Button>
            </motion.div>
          </div>

          {/* Right: Animation */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 flex items-center justify-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-9xl"
            >
              🧇
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{
                x: [0, 30, 0],
                y: [0, 50, 0],
                rotate: 360,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-10 right-10 text-6xl opacity-60"
            >
              🍓
            </motion.div>

            <motion.div
              animate={{
                x: [0, -30, 0],
                y: [0, 40, 0],
                rotate: -360,
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-10 left-10 text-6xl opacity-60"
            >
              🍌
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
