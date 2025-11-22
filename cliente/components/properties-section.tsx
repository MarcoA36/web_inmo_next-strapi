import { getProperties } from "@/lib/get-properties"
import { PropertyCard } from "./property-card"
import { Property } from "@/types/property"

export async function PropertiesSection() {
  const properties: Property[] = await getProperties()

  return (
    <section id="propiedades" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Propiedades Destacadas
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Descubre nuestra selección de inmuebles exclusivos en las mejores ubicaciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {properties.map((property: Property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  )
}
