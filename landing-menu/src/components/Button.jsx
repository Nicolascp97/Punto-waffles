import React from 'react'
import { motion } from 'framer-motion'

/**
 * Button — Componente de botón reutilizable con estados y animaciones
 *
 * @param {string} children - Texto del botón
 * @param {string} variant - 'primary' | 'secondary' | 'outline' | 'cta'
 * @param {function} onClick - Función callback
 * @param {boolean} disabled - Estado deshabilitado
 * @param {string} className - Clases Tailwind adicionales
 * @param {string} size - 'sm' | 'md' | 'lg'
 */
export default function Button({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
  className = '',
  size = 'md',
  type = 'button',
  ...props
}) {
  const variants = {
    primary: 'bg-naranja-waffle text-white hover:bg-naranja-light focus:ring-4 focus:ring-naranja-waffle/50',
    secondary: 'bg-cafe-dark text-cream-50 hover:bg-cafe-light focus:ring-4 focus:ring-cafe-dark/50',
    outline: 'border-2 border-naranja-waffle text-naranja-waffle hover:bg-naranja-waffle hover:text-white focus:ring-4 focus:ring-naranja-waffle/50',
    cta: 'bg-frambuesa text-white hover:shadow-xl hover:scale-105 focus:ring-4 focus:ring-frambuesa/50 animate-pulse-subtle',
  }

  const sizes = {
    sm: 'px-space-4 py-space-2 text-sm rounded-md',
    md: 'px-space-6 py-space-3 text-base rounded-lg',
    lg: 'px-space-8 py-space-4 text-lg rounded-lg font-bold',
  }

  const baseStyles = 'font-nunito font-700 transition-all duration-200 ease-out focus:outline-none focus:ring-offset-2 focus:ring-offset-cream-50 active:scale-95'

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${disabledStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
