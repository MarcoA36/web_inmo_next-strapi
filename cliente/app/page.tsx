import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PropertiesSection } from "@/components/properties-section"
import { ContactForm } from "@/components/contact-form"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PropertiesSection />
      <ContactForm />
      <WhatsAppButton />
      <Footer />
    </main>
  )
}
