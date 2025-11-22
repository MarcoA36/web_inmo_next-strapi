import { Building2, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-7 w-7 text-primary" />
              <span className="font-serif text-xl sm:text-2xl font-bold">INMOBILIARIA</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Tu socio de confianza en bienes raíces. Encontramos la propiedad perfecta para ti.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#propiedades"
                  className="text-background/80 hover:text-background text-sm transition-colors"
                >
                  Propiedades
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-background/80 hover:text-background text-sm transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/80 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>+34 600 000 000</span>
              </li>
              <li className="flex items-center gap-2 text-background/80 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>info@inmobiliaria.com</span>
              </li>
              <li className="flex items-start gap-2 text-background/80 text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  Calle Principal 123
                  <br />
                  28001 Madrid, España
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 hover:bg-primary p-2.5 rounded-full transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 hover:bg-primary p-2.5 rounded-full transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 hover:bg-primary p-2.5 rounded-full transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 sm:pt-8 text-center">
          <p className="text-background/70 text-sm">
            © {new Date().getFullYear()} Inmobiliaria Premium. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
