import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import MenuCard from '../components/MenuCard'
import SectionHeading from '../components/SectionHeading'
import { MENU_DATA } from '../data/menuData'

/**
 * Landing — Página principal con menú completo y CTA al cooking game
 */
export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* ===== WAFFLES DULCES ESPECIALES ===== */}
      <section id="waffles" className="py-space-24 md:py-space-32 bg-white border-y-4 border-naranja-waffle/20">
        <div className="max-w-7xl mx-auto px-space-4 md:px-space-8">
          <SectionHeading
            icon="🧇"
            title={MENU_DATA.waffles.title}
            subtitle={MENU_DATA.waffles.description}
          />

          {/* Waffles Grid */}
          <div className="grid md:grid-cols-3 gap-space-8 mb-space-16">
            {MENU_DATA.waffles.items.map((item, index) => (
              <MenuCard
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                icon="🧇"
                index={index}
              />
            ))}
          </div>

          {/* CTA Button to Cooking Game */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative pt-space-12 mt-space-12 border-t-4 border-frambuesa/40"
          >
            {/* Background glow */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(212, 0, 106, 0.4)",
                  "0 0 0 30px rgba(212, 0, 106, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-0 rounded-2xl"
            />

            <div className="relative text-center">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-frambuesa mb-space-4 font-pacifico"
              >
                ¿Prefieres crear TU WAFFLE?
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg text-cafe-light mb-space-8 max-w-2xl mx-auto font-nunito font-600"
              >
                Accede a nuestro juego interactivo: selecciona tus ingredientes favoritos paso a paso y arma tu waffle perfecto. ¡Es divertido, interactivo y delicioso!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="cta"
                  size="lg"
                  onClick={() => navigate('/cocinar')}
                  className="text-lg md:text-xl px-space-12 py-space-6 shadow-xl hover:shadow-2xl"
                >
                  👨‍🍳 COCINAR AHORA — Arma tu Waffle Personalizado
                </Button>
              </motion.div>

              {/* Decoration */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -right-12 top-1/2 text-6xl opacity-30"
              >
                🧇
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -left-12 bottom-0 text-6xl opacity-30"
              >
                🎮
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== MENÚ GENERAL ===== */}
      <section id="menu" className="py-space-24 md:py-space-32 bg-cream-50">
        <div className="max-w-7xl mx-auto px-space-4 md:px-space-8">
          <SectionHeading
            icon="📋"
            title="Menú Completo"
            subtitle="Explora toda nuestra variedad de productos"
          />

          {/* Menu sections by category */}
          <div className="space-y-space-16">
            {MENU_DATA.general.sections.map((section, sectionIndex) => (
              <motion.div
                key={section.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: sectionIndex * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Category title */}
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-cafe-dark mb-space-8 font-pacifico relative inline-block"
                  whileHover={{ x: 10 }}
                >
                  {section.name}
                  <motion.div
                    className="absolute -bottom-3 left-0 h-1 bg-naranja-waffle rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.5, delay: sectionIndex * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  />
                </motion.h3>

                {/* Items grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-space-6 mt-space-8">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={`${section.name}-${itemIndex}`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4 }}
                      className="bg-white rounded-lg p-space-6 border border-naranja-waffle/20 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <h4 className="text-lg font-bold text-cafe-dark mb-space-2 font-nunito">
                        {item.name}
                      </h4>
                      <p className="text-naranja-waffle font-bold text-xl">
                        ${item.price.toLocaleString('es-CL')}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HELADOS ===== */}
      <section id="helados" className="py-space-24 md:py-space-32 bg-white border-y-4 border-frambuesa/20">
        <div className="max-w-7xl mx-auto px-space-4 md:px-space-8">
          <SectionHeading
            icon="🍨"
            title="Nuestros Helados"
            subtitle="Sabores deliciosos en tres tamaños: Simple, Doble y Triple"
          />

          {/* Sizes row */}
          <div className="grid md:grid-cols-3 gap-space-8 mb-space-16">
            {[
              { size: "Simple", price: MENU_DATA.iceCream.singlePrice, emoji: "🍦" },
              { size: "Doble", price: MENU_DATA.iceCream.doublePrice, emoji: "🍨" },
              { size: "Triple", price: MENU_DATA.iceCream.triplePrice, emoji: "🍰" },
            ].map((item, index) => (
              <motion.div
                key={item.size}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-white to-cream-100 rounded-xl p-space-8 border-2 border-frambuesa/30 shadow-lg text-center"
              >
                <div className="text-6xl mb-space-4">{item.emoji}</div>
                <h3 className="text-2xl font-bold text-cafe-dark mb-space-4 font-nunito">
                  {item.size}
                </h3>
                <p className="text-3xl font-bold text-frambuesa">
                  ${item.price.toLocaleString('es-CL')}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Sabores */}
          <div className="space-y-space-12">
            {MENU_DATA.iceCream.sabores.map((flavor, flavorIndex) => (
              <motion.div
                key={flavor.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: flavorIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl md:text-2xl font-bold text-naranja-waffle mb-space-6 font-nunito uppercase tracking-wider">
                  {flavor.category}
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-space-4">
                  {flavor.items.map((sabor, saborIndex) => (
                    <motion.div
                      key={sabor}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: saborIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, x: 4 }}
                      className="bg-white rounded-lg px-space-6 py-space-4 border border-naranja-waffle/20 shadow-sm hover:shadow-md hover:border-naranja-waffle/50 transition-all duration-200"
                    >
                      <p className="text-cafe-dark font-nunito font-600">{sabor}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-space-20 md:py-space-24 bg-gradient-to-r from-naranja-waffle to-frambuesa text-cream-50 relative overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-space-4 md:px-space-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-space-6 font-pacifico"
          >
            ¡Estamos listos para servirte!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl mb-space-12 font-nunito font-600"
          >
            Haz tu pedido directamente a través de WhatsApp o visítanos en Litueche. ¡Tu waffle perfecto te está esperando!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-space-6 justify-center items-center"
          >
            <a
              href="https://wa.me/56XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-naranja-waffle font-bold py-space-4 px-space-8 rounded-lg hover:bg-cream-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-nunito text-lg"
            >
              📱 Pedido por WhatsApp
            </a>
            <a
              href="tel:+56XXXXXXXXX"
              className="inline-block bg-cream-50 bg-opacity-30 text-cream-50 border-2 border-cream-50 font-bold py-space-4 px-space-8 rounded-lg hover:bg-opacity-50 transition-all duration-200 font-nunito text-lg"
            >
              📞 Llamar Ahora
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-space-8 text-sm opacity-90 font-nunito"
          >
            Ubicación: Litueche, Chile • Atención: Todos los días
          </motion.p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-cafe-dark text-cream-50 py-space-12">
        <div className="max-w-7xl mx-auto px-space-4 md:px-space-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-pacifico text-2xl mb-space-4">🧇 Punto Waffles</h3>
            <p className="text-cream-50 opacity-80 mb-space-6 font-nunito">
              Waffles artesanales con ❤️ en Litueche, Chile
            </p>

            <div className="flex justify-center gap-space-6 mb-space-8">
              <a href="#waffles" className="hover:text-naranja-waffle transition-colors">
                Waffles
              </a>
              <a href="#menu" className="hover:text-naranja-waffle transition-colors">
                Menú
              </a>
              <a href="#helados" className="hover:text-naranja-waffle transition-colors">
                Helados
              </a>
              <a href="/juego" className="hover:text-naranja-waffle transition-colors">
                Juego
              </a>
            </div>

            <div className="border-t border-cream-50 border-opacity-20 pt-space-8 text-sm opacity-70">
              <p>© 2025 Punto Waffles. Todos los derechos reservados.</p>
              <p className="mt-space-2">Hecho con pasión y waffles ✨</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
