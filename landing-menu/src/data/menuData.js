export const MENU_DATA = {
  waffles: {
    title: "🧇 Waffles Dulces Especiales",
    description: "Elige tu waffle perfecto o crea el tuyo",
    items: [
      {
        id: 1,
        name: "Sin Helado",
        description: "Base, Fruta, Chantilly Opcional, Salsa y Topping",
        price: 4500,
      },
      {
        id: 2,
        name: "Split",
        description: "Plátano de Base, Chantilly Opcional, Tres Bolitas de Helado, Salsa y Topping",
        price: 4900,
      },
      {
        id: 3,
        name: "Postre Frutal",
        description: "Mesa Waffle, dos Frutas o selección, Crema Chantilly, Helado",
        price: 3500,
      },
    ],
    cta: "🎮 ARMA TU WAFFLE PERSONALIZADO",
    image: "imagen-4.png",
  },

  general: {
    title: "📋 Menú Completo",
    description: "Todos nuestros productos con precios actualizados",
    sections: [
      {
        name: "Creps",
        items: [
          { name: "Creps dulces con helado", price: 5300 },
          { name: "Creps dulces sin helado", price: 4500 },
        ],
      },
      {
        name: "Postres Especiales",
        items: [
          { name: "Volcán de chocolate", price: 4900 },
          { name: "Muffin", price: 1700 },
          { name: "Brownie con helado", price: 3000 },
          { name: "Parfait con helado", price: 3500 },
        ],
      },
      {
        name: "Helados",
        items: [
          { name: "Helado simple", price: 2000 },
          { name: "Helado doble", price: 2900 },
          { name: "Helado triple", price: 3900 },
        ],
      },
      {
        name: "Bebidas Calientes",
        items: [
          { name: "Café con helado", price: 4300 },
          { name: "Mochaccino", price: 4000 },
          { name: "Café Saboreo", price: 2500 },
          { name: "Café capuchino", price: 2700 },
        ],
      },
      {
        name: "Agua & Refrescos",
        items: [
          { name: "Té", price: 1300 },
          { name: "Agua", price: 1000 },
          { name: "Bebidas", price: 1500 },
          { name: "Jugos Naturales", price: 2000 },
        ],
      },
    ],
    image: "imagen-2.png",
  },

  iceCream: {
    title: "🍨 Nuestros Helados",
    description: "Variedad de sabores premium",
    singlePrice: 2000,
    doublePrice: 2900,
    triplePrice: 3900,
    sabores: [
      {
        category: "CREMA",
        items: ["Vainilla", "Chocolate", "Vainilla con Chocolate", "Chocolate Menta", "Chocolate Suizo", "Brownies"],
      },
      {
        category: "FRUTAS",
        items: ["Frutilla", "Plátano Manja", "Lúcuma Manjar", "Pistacho & Ron"],
      },
      {
        category: "AGUA",
        items: ["Limón", "Mango", "Naranja", "Vainilla", "Café Latte"],
      },
      {
        category: "AZÚCAR",
        items: ["Pistacio", "Piña - Fresa", "Chocolate Nuss", "Frutos del Bosque"],
      },
    ],
    image: "imagen-6.png",
  },
}

export const WAFFLES_PHONE = "56XXXXXXXXX" // Reemplazar con número real
