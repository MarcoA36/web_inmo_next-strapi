// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Mail, Phone, User, Send } from "lucide-react"
// import { STRAPI_URL } from "@/lib/api"

// export function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   })

//   const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(null)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     try {
//       const res = await fetch(`${STRAPI_URL}/api/contact-messages`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           data: {
//             name: formData.name,
//             email: formData.email,
//             phone: formData.phone,
//             message: formData.message,
//           },
//         }),
//       })

//       if (!res.ok) throw new Error("Error al enviar mensaje a Strapi")

//       setStatus({ type: "success", message: "Mensaje enviado correctamente. Te responderemos pronto." })

//       setFormData({ name: "", email: "", phone: "", message: "" })

//       setTimeout(() => setStatus(null), 4000)
//     } catch (err) {
//       setStatus({ type: "error", message: "Hubo un error al enviar el mensaje. Intenta nuevamente." })
//       setTimeout(() => setStatus(null), 4000)
//     }
//   }

//   return (
//     <section id="contacto" className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-3xl mx-auto">
//           <div className="text-center mb-10 sm:mb-12">
//             <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
//               Contáctanos
//             </h2>
//             <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
//               Estamos aquí para ayudarte a encontrar tu propiedad ideal
//             </p>
//           </div>

//           <Card className="border-border/50 shadow-lg">
//             <CardHeader>
//               <CardTitle className="text-xl sm:text-2xl font-serif text-foreground">
//                 Envíanos un mensaje
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                
//                 {/* Nombre */}
//                 <div className="space-y-2">
//                   <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
//                     <User className="h-4 w-4 text-primary" />
//                     Nombre completo
//                   </label>
//                   <Input
//                     id="name"
//                     type="text"
//                     placeholder="Tu nombre"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     required
//                   />
//                 </div>

//                 {/* Email */}
//                 <div className="space-y-2">
//                   <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
//                     <Mail className="h-4 w-4 text-primary" />
//                     Email
//                   </label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="tu@email.com"
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     required
//                   />
//                 </div>

//                 {/* Teléfono */}
//                 <div className="space-y-2">
//                   <label htmlFor="phone" className="text-sm font-medium text-foreground flex items-center gap-2">
//                     <Phone className="h-4 w-4 text-primary" />
//                     Teléfono
//                   </label>
//                   <Input
//                     id="phone"
//                     type="tel"
//                     placeholder="+54 9 ..."
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                     required
//                   />
//                 </div>

//                 {/* Mensaje */}
//                 <div className="space-y-2">
//                   <label htmlFor="message" className="text-sm font-medium text-foreground">
//                     Mensaje
//                   </label>
//                   <Textarea
//                     id="message"
//                     placeholder="Cuéntanos qué tipo de propiedad buscas..."
//                     value={formData.message}
//                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                     required
//                     rows={5}
//                   />
//                 </div>

//                 <Button type="submit" className="w-full text-lg py-5">
//                   <Send className="h-5 w-5 mr-2" />
//                   Enviar mensaje
//                 </Button>

//                 {/* Mensaje de estado */}
//                 {status && (
//                   <div
//                     className={`text-center p-3 rounded-xl text-sm font-medium ${
//                       status.type === "success"
//                         ? "bg-green-100 text-green-700 border border-green-300"
//                         : "bg-red-100 text-red-700 border border-red-300"
//                     }`}
//                   >
//                     {status.message}
//                   </div>
//                 )}
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   )
// }




































"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, User, Send } from "lucide-react"
import { DIRECTUS_URL } from "@/lib/api"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch(`${DIRECTUS_URL}/items/contact_messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      })

      if (!res.ok) throw new Error("Error al enviar mensaje a Directus")

      setStatus({
        type: "success",
        message: "Mensaje enviado correctamente. Te responderemos pronto.",
      })

      setFormData({ name: "", email: "", phone: "", message: "" })

      setTimeout(() => setStatus(null), 4000)
    } catch (err) {
      setStatus({
        type: "error",
        message: "Hubo un error al enviar el mensaje. Intenta nuevamente.",
      })
      setTimeout(() => setStatus(null), 4000)
    }
  }

  return (
    <section id="contacto" className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Contáctanos
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Estamos aquí para ayudarte a encontrar tu propiedad ideal
            </p>
          </div>

          <Card className="border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-serif text-foreground">
                Envíanos un mensaje
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    Nombre completo
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    Teléfono
                  </label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Mensaje</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full text-lg py-5">
                  <Send className="h-5 w-5 mr-2" />
                  Enviar mensaje
                </Button>

                {status && (
                  <div
                    className={`text-center p-3 rounded-xl text-sm font-medium ${
                      status.type === "success"
                        ? "bg-green-100 text-green-700 border border-green-300"
                        : "bg-red-100 text-red-700 border border-red-300"
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
