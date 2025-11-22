export interface Property {
  id: number
  slug: string
  image: string
  title: string
  type: "Alquiler" | "Venta"
  address: string
  city: string
  price: string
  description: string
  images?: string[]
}
