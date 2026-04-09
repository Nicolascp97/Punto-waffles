import React from 'react'
import { motion } from 'framer-motion'

/**
 * SectionHeading — Título de sección con animación y decoración
 *
 * @param {string} icon - Emoji o icono
 * @param {string} title - Título principal
 * @param {string} subtitle - Subtítulo o descripción
 */
export default function SectionHeading({ icon, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="text-center mb-space-12"
    >
      {/* Icon animation */}
      <motion.div
        className="text-5xl mb-space-4 inline-block"
        whileInView={{ rotate: 360 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {icon}
      </motion.div>

      <h2 className="text-4xl md:text-5xl font-bold text-cafe-dark font-pacifico mb-space-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-lg text-cafe-light max-w-2xl mx-auto font-nunito">
          {subtitle}
        </p>
      )}

      {/* Decorative line */}
      <motion.div
        className="w-24 h-1 bg-gradient-to-r from-naranja-waffle to-frambuesa mx-auto mt-space-6 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      ></motion.div>
    </motion.div>
  )
}
