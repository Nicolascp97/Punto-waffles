/**
 * config.js — Configuración centralizada del proyecto
 * Carga variables desde .env o usa valores por defecto
 */

export const CONFIG = {
  // Número de WhatsApp para contacto
  // Formato: 56912345678 (sin +, sin espacios)
  WAFFLE_PHONE: import.meta.env.VITE_WAFFLE_PHONE || "56XXXXXXXXX",

  // URL base para peticiones API (si aplica en futuro)
  API_URL: import.meta.env.VITE_API_URL || "http://localhost:3000",

  // Ambiente (development, production)
  ENV: import.meta.env.MODE || "development",

  // URLs útiles
  URLS: {
    instagram: "https://instagram.com/nico.agenteia",
    whatsapp: function() {
      return `https://wa.me/${this.WAFFLE_PHONE}`
    },
    phone: function() {
      return `tel:+${this.WAFFLE_PHONE}`
    },
  },

  // Colores del brand (sincronizado con tailwind.config.js)
  COLORS: {
    primary: "#FF6B2C",      // Naranja waffle
    primaryLight: "#FFB347", // Amarillo dorado
    accent: "#D4006A",       // Frambuesa
    bgDark: "#1A0F00",       // Café oscuro
    textDark: "#2D1A00",     // Café para textos
    bg: "#FFF8F0",           // Crema
  },

  // Mensaje WhatsApp de ejemplo
  WHATSAPP_MESSAGE: {
    template: function(waffleDetails = "") {
      return `🧇 *Pedido Punto Waffles*

Hola! Quiero hacer un pedido.

${waffleDetails ? `*Mi waffle personalizado:*\n${waffleDetails}\n\n` : ""}*¡Gracias!*`
    },
  },
}

export default CONFIG
