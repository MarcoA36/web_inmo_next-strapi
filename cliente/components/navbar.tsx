import Link from "next/link"
import { Building2 } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <Building2 className="h-6 w-6 sm:h-7 sm:w-7 text-primary transition-transform group-hover:scale-110" />
            <span className="font-serif text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              INMOBILIARIA
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#propiedades"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Propiedades
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
