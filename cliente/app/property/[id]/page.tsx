import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Bed, Bath, Maximize } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { PropertyCarousel } from "@/components/property-carousel";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Footer } from "@/components/footer";
import { getPropertyById } from "@/lib/get-property";
import { STRAPI_URL } from "@/lib/api";


export default async function PropertyDetailPage({ params }: { params: { id: string } }) {
  const id = params.id;

  const response = await getPropertyById(id);

  if (!response || response.data.length === 0) {
    notFound();
  }

  const property = response.data[0];

  const imageUrls = property.images.map((img: any) =>
    img.url.startsWith("http") ? img.url : `${STRAPI_URL}${img.url}`
  );

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-16 sm:pt-28 sm:pb-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <Link href="/#propiedades">
            <Button variant="ghost" className="mb-6 -ml-4 hover:bg-muted">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a propiedades
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-8">
              <PropertyCarousel images={imageUrls} alt={`Propiedad en ${property.city}`} />

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary text-primary-foreground">
                    {property.type}
                  </span>
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-primary">
                    $ {property.price}
                  </span>
                </div>

                <div className="flex items-start gap-2 mb-6">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-serif font-bold">{property.address}</h1>
                    <p className="text-lg text-muted-foreground">{property.city}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 py-6 border-y border-border">
                  <div className="flex items-center gap-2">
                    <Bed className="h-5 w-5 text-primary" />
                    <span>{property.bedrooms} Habitaciones</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="h-5 w-5 text-primary" />
                    <span>{property.bathrooms} Baños</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize className="h-5 w-5 text-primary" />
                    <span>{property.area}</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold mb-4">Descripción</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {property.description
                    ?.map((p: any) => p.children?.map((c: any) => c.text).join(" "))
                    .join("\n")}
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-muted/30 rounded-lg p-6 border">
                <h3 className="text-xl font-serif font-bold mb-4">
                  ¿Interesado en esta propiedad?
                </h3>

                <Button className="w-full bg-primary hover:bg-primary/90" size="lg" asChild>
                  <a href="#contacto">Solicitar información</a>
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/5"
                  size="lg"
                  asChild
                >
                  <a
                    href={`https://wa.me/34123456789?text=Hola, estoy interesado en la propiedad: ${property.address}, ${property.city}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
