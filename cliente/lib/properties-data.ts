export interface Property {
  id: string
  images: string[]
  type: "Alquiler" | "Venta"
  address: string
  city: string
  price: string
  description: string
  extendedDescription: string
  bedrooms: number
  bathrooms: number
  area: string
  features: string[]
}

export const properties: Property[] = [
  {
    id: "1",
    images: [
      "/apartment-interior-1.png",
      "/modern-apartment-living-room.png",
      "/luxury-kitchen-marble.png",
      "/spacious-apartment-bedroom-with-city-views.jpg",
    ],
    type: "Venta",
    address: "Av. Principal 123",
    city: "Madrid Centro",
    price: "€450,000",
    description:
      "Amplio apartamento de 3 habitaciones con vistas panorámicas, acabados de lujo y ubicación privilegiada.",
    extendedDescription:
      "Este excepcional apartamento de 3 habitaciones ofrece una experiencia de vida única en el corazón de Madrid. Con acabados de primera calidad y una distribución inteligente, cada espacio ha sido diseñado para maximizar la comodidad y el estilo. Las amplias ventanas inundan el interior con luz natural y ofrecen vistas panorámicas impresionantes de la ciudad. La cocina está completamente equipada con electrodomésticos de última generación, y los baños cuentan con acabados en mármol. Ubicado en una zona privilegiada con fácil acceso a transporte público, restaurantes, tiendas y servicios.",
    bedrooms: 3,
    bathrooms: 2,
    area: "120 m²",
    features: [
      "Aire acondicionado",
      "Calefacción central",
      "Ascensor",
      "Terraza",
      "Armarios empotrados",
      "Cocina equipada",
      "Portero automático",
      "Orientación sur",
    ],
  },
  {
    id: "2",
    images: [
      "/luxury-house-exterior-garden.jpg",
      "/luxury-living-room.png",
      "/modern-house-kitchen-with-island.jpg",
      "/house-backyard-with-swimming-pool.jpg",
      "/elegant-master-bedroom-suite.jpg",
    ],
    type: "Venta",
    address: "Calle del Sol 45",
    city: "Barcelona",
    price: "€780,000",
    description: "Casa independiente con jardín privado, 4 habitaciones, piscina y garaje para dos vehículos.",
    extendedDescription:
      "Magnífica casa independiente que combina elegancia y funcionalidad en cada detalle. Esta propiedad de 4 habitaciones ofrece amplios espacios interiores y exteriores perfectos para disfrutar en familia. El jardín privado de 300m² incluye una piscina de diseño, zona de barbacoa y áreas verdes cuidadosamente mantenidas. El interior destaca por sus techos altos, abundante luz natural y acabados de calidad superior. La cocina moderna está totalmente equipada y conecta con un amplio salón-comedor. Incluye garaje para dos vehículos y trastero adicional.",
    bedrooms: 4,
    bathrooms: 3,
    area: "250 m²",
    features: [
      "Piscina privada",
      "Jardín 300m²",
      "Garaje 2 coches",
      "Trastero",
      "Barbacoa",
      "Sistema de seguridad",
      "Paneles solares",
      "Chimenea",
    ],
  },
  {
    id: "3",
    images: ["/modern-studio-apartment.png", "/modern-studio-apartment-workspace.jpg", "/compact-studio-kitchen-design.jpg"],
    type: "Alquiler",
    address: "Plaza Mayor 8",
    city: "Valencia",
    price: "€1,200/mes",
    description: "Estudio moderno completamente amueblado, ideal para profesionales, cerca de transporte público.",
    extendedDescription:
      "Estudio moderno y funcional, perfecto para profesionales que buscan comodidad y ubicación privilegiada. Completamente amueblado con muebles de diseño contemporáneo y electrodomésticos nuevos. El espacio ha sido optimizado inteligentemente para incluir zona de estar, dormitorio, cocina americana totalmente equipada y baño completo. Ubicado en pleno centro de Valencia, a pocos minutos a pie de la estación de metro, supermercados, restaurantes y zonas comerciales. Edificio con ascensor y portero automático. Gastos de comunidad incluidos en el precio.",
    bedrooms: 1,
    bathrooms: 1,
    area: "45 m²",
    features: [
      "Completamente amueblado",
      "Electrodomésticos nuevos",
      "Wifi incluido",
      "Ascensor",
      "Portero automático",
      "Céntrico",
      "Gastos incluidos",
    ],
  },
  {
    id: "4",
    images: [
      "/penthouse-terrace-city-view.jpg",
      "/luxury-penthouse-interior-with-modern-design.jpg",
      "/penthouse-terrace-with-outdoor-furniture-and-sea-v.jpg",
      "/penthouse-master-bedroom-with-ocean-view.jpg",
    ],
    type: "Venta",
    address: "Torre Mirador 15",
    city: "Málaga",
    price: "€620,000",
    description: "Ático de lujo con terraza de 80m², 3 habitaciones, 2 baños y vistas al mar mediterráneo.",
    extendedDescription:
      "Espectacular ático de lujo en primera línea de playa con vistas panorámicas al mar Mediterráneo. Este exclusivo inmueble de 3 habitaciones ofrece un estilo de vida único con su impresionante terraza de 80m² equipada con zona chill-out, comedor exterior y jacuzzi. El interior presenta acabados de máxima calidad, suelos de mármol, cocina de diseño con isla central y amplios ventanales que conectan perfectamente el interior con el exterior. Las habitaciones son espaciosas con armarios empotrados, destacando el dormitorio principal con baño en suite y acceso directo a la terraza. Incluye plaza de garaje y trastero.",
    bedrooms: 3,
    bathrooms: 2,
    area: "180 m²",
    features: [
      "Terraza 80m²",
      "Vistas al mar",
      "Jacuzzi",
      "Plaza de garaje",
      "Trastero",
      "Primera línea playa",
      "Piscina comunitaria",
      "Gimnasio",
    ],
  },
  {
    id: "5",
    images: ["/cozy-apartment-bedroom.png", "/renovated-apartment-living-room-modern-style.jpg", "/modern-apartment-kitchen-with-new-appliances.jpg"],
    type: "Alquiler",
    address: "Calle Serrano 92",
    city: "Madrid",
    price: "€1,800/mes",
    description: "Piso de 2 habitaciones en zona exclusiva, totalmente reformado con electrodomésticos nuevos.",
    extendedDescription:
      "Elegante piso de 2 habitaciones en el prestigioso barrio de Salamanca, totalmente reformado con materiales de primera calidad. La vivienda ha sido diseñada con un estilo contemporáneo que combina funcionalidad y elegancia. Cuenta con un amplio salón-comedor con acceso a balcón, cocina independiente completamente equipada con electrodomésticos de última generación, dos dormitorios con armarios empotrados y dos baños completos. El edificio clásico madrileño dispone de portero físico, ascensor y está situado en una de las mejores zonas de Madrid, rodeado de boutiques de lujo, restaurantes y excelentes conexiones de transporte.",
    bedrooms: 2,
    bathrooms: 2,
    area: "95 m²",
    features: [
      "Totalmente reformado",
      "Electrodomésticos nuevos",
      "Balcón",
      "Portero físico",
      "Ascensor",
      "Barrio Salamanca",
      "Aire acondicionado",
      "Calefacción individual",
    ],
  },
  {
    id: "6",
    images: [
      "/villa-pool-luxury.jpg",
      "/luxury-villa-interior-with-high-ceilings.jpg",
      "/villa-infinity-pool-with-sea-views.jpg",
      "/luxury-villa-master-suite-bedroom.jpg",
      "/modern-home-gym-with-equipment.jpg",
    ],
    type: "Venta",
    address: "Urbanización Las Colinas",
    city: "Marbella",
    price: "€1,250,000",
    description: "Villa de diseño con piscina infinity, 5 habitaciones, gimnasio y vistas espectaculares.",
    extendedDescription:
      "Exclusiva villa de diseño contemporáneo ubicada en una de las urbanizaciones más prestigiosas de Marbella. Esta impresionante propiedad de 5 habitaciones ofrece el máximo lujo y confort en sus 400m² construidos sobre una parcela de 800m². La villa destaca por su piscina infinity con vistas panorámicas al mar y la montaña, amplias terrazas en diferentes niveles, gimnasio totalmente equipado y bodega climatizada. El interior presenta espacios diáfanos con techos de doble altura, cocina de diseño con isla central, salón con chimenea y sistema domótico integral. Todas las habitaciones son suites con baño privado y vestidor. Incluye garaje para 3 vehículos, sistema de seguridad avanzado y jardín mediterráneo con riego automático.",
    bedrooms: 5,
    bathrooms: 5,
    area: "400 m²",
    features: [
      "Piscina infinity",
      "Gimnasio privado",
      "Bodega climatizada",
      "Sistema domótico",
      "Garaje 3 coches",
      "Seguridad 24h",
      "Vistas panorámicas",
      "Jardín 800m²",
    ],
  },
]
