import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/**
 * Header — Barra de navegación sticky con logo y enlace al menú
 */
export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-cream-50 border-b-2 border-naranja-waffle/20 shadow-md backdrop-blur-sm"
    >
      <nav className="max-w-7xl mx-auto px-space-4 md:px-space-8 py-space-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
        >
          <motion.div
            whileHover={{ rotate: 5 }}
            className="text-3xl"
          >
            🧇
          </motion.div>
          <div>
            <h1 className="font-pacifico text-2xl text-naranja-waffle">Punto Waffles</h1>
            <p className="text-xs text-cafe-dark">Litueche, Chile</p>
          </div>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-space-6">
          <a
            href="#waffles"
            className="text-cafe-dark hover:text-naranja-waffle transition-colors duration-200 font-nunito font-600"
          >
            Waffles
          </a>
          <a
            href="#menu"
            className="text-cafe-dark hover:text-naranja-waffle transition-colors duration-200 font-nunito font-600"
          >
            Menú
          </a>
          <a
            href="#helados"
            className="text-cafe-dark hover:text-naranja-waffle transition-colors duration-200 font-nunito font-600"
          >
            Helados
          </a>
        </div>

        {/* Info */}
        <div className="flex items-center gap-space-3 text-sm">
          <a
            href="https://wa.me/56XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-naranja-waffle hover:text-naranja-light transition-colors font-600"
          >
            📱 WhatsApp
          </a>
        </div>
      </nav>
    </motion.header>
  )
}
