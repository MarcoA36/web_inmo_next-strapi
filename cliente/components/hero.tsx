import { getHome } from "@/lib/get-home";

export async function Hero() {
  const { title, subtitle, imageUrl } = await getHome();

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imageUrl || "/placeholder.svg?height=1080&width=1920&query=modern+luxury+residential+building"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight text-balance">
          {title || "⚠️ No se recibió título desde Strapi"}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 sm:mb-12 text-balance leading-relaxed">
          {subtitle || "⚠️ No se recibió subtítulo desde Strapi"}
        </p>
        <a
          href="#propiedades"
          className="inline-block bg-white text-primary px-8 py-3 sm:px-10 sm:py-4 rounded-lg font-medium text-base sm:text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
        >
          Ver Propiedades
        </a>
      </div>
    </section>
  );
}
