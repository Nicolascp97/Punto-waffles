import React from 'react'
import { motion } from 'framer-motion'

/**
 * ImageDisplay — Componente para mostrar imágenes del menú con animación
 * Úsalo para integrar las fotos de los productos (2.png, 4.png, 6.png)
 *
 * @param {string} src - Ruta de la imagen (ej: "/assets/waffles-especiales.png")
 * @param {string} alt - Texto alternativo para accesibilidad
 * @param {string} className - Clases Tailwind adicionales
 * @param {number} width - Ancho de la imagen (para CLS prevention)
 * @param {number} height - Alto de la imagen (para CLS prevention)
 */
export default function ImageDisplay({
  src,
  alt,
  className = '',
  width,
  height,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.02 }}
      className={`rounded-xl overflow-hidden shadow-lg border-4 border-naranja-waffle/20 hover:shadow-2xl transition-shadow duration-300 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto object-cover display-block"
        loading="lazy"
        fetchPriority="auto"
      />
    </motion.div>
  )
}
