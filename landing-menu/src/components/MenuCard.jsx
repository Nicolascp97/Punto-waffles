import React from 'react'
import { motion } from 'framer-motion'

/**
 * MenuCard — Card interactiva para items del menú
 *
 * @param {string} name - Nombre del producto
 * @param {string} description - Descripción
 * @param {number} price - Precio en pesos
 * @param {string} icon - Emoji o icono
 * @param {number} index - Índice para stagger animation
 */
export default function MenuCard({ name, description, price, icon = '🧇', index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(255, 107, 44, 0.15)" }}
      className="bg-white rounded-lg p-space-6 border-2 border-naranja-waffle/10 shadow-md hover:border-naranja-waffle/40 transition-all duration-200 will-animate"
    >
      {/* Icon */}
      <motion.div
        className="text-4xl mb-space-4"
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>

      {/* Content */}
      <h3 className="text-xl font-bold text-cafe-dark mb-space-2 font-nunito line-clamp-2">
        {name}
      </h3>

      {description && (
        <p className="text-sm text-cafe-light mb-space-4 line-clamp-2">
          {description}
        </p>
      )}

      {/* Price */}
      <div className="flex items-baseline gap-space-2">
        <span className="text-2xl font-bold text-naranja-waffle font-nunito">
          ${price.toLocaleString('es-CL')}
        </span>
        <span className="text-xs text-cafe-light">CLP</span>
      </div>

      {/* Decorative line */}
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-naranja-waffle/30 to-transparent mt-space-4"></div>
    </motion.div>
  )
}
