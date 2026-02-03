// import Link from "next/link"
// import { MapPin } from "lucide-react"
// import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"

// interface PropertyCardProps {
//   id: number
//   image: string
//   type: "Alquiler" | "Venta"
//   address: string
//   city: string
//   price: string
//   description: string
// }

// export function PropertyCard({ id, image, type, address, city, price, description }: PropertyCardProps) {
//   console.log("image: ", image)
//   return (
//     <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50">
//       {/* 🔥 Ahora usa el ID */}
//       <Link href={`/property/${id}`}>
//         <div className="relative h-64 sm:h-72 overflow-hidden">
//           <img
//             src={image || "/placeholder.svg"}
//             alt={`Propiedad en ${city}`}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//           />
//           <div className="absolute top-4 left-4">
//             <span
//               className={`px-4 py-1.5 rounded-full text-sm font-medium ${
//                 type === "Venta"
//                   ? "bg-primary text-primary-foreground"
//                   : "bg-secondary text-secondary-foreground"
//               }`}
//             >
//               {type}
//             </span>
//           </div>
//         </div>
//       </Link>

//       <CardContent className="p-5 sm:p-6">
//         <div className="flex items-start gap-2 mb-3">
//           <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
//           <div>
//             <p className="font-medium text-foreground text-base sm:text-lg">{address}</p>
//             <p className="text-sm text-muted-foreground">{city}</p>
//           </div>
//         </div>

//         <p className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-3">{price}</p>

//         <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-2">
//           {description}
//         </p>
//       </CardContent>

//       <CardFooter className="p-5 sm:p-6 pt-0">
//         <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
//           {/* 🔥 También usa ID acá */}
//           <Link href={`/property/${id}`}>Ver más</Link>
//         </Button>
//       </CardFooter>
//     </Card>
//   )
// }

































import Link from "next/link";
import { MapPin } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// interface PropertyCardProps {
//   id: string;
//   image: string;
//   type: string;
//   address: string;
//   city: string;
//   price: string;
//   description: string;
// }
interface PropertyCardProps {
  id: string | number
  image: string
  type: string
  address: string
  city: string
  price: string
  description: string
}


export function PropertyCard({
  id,
  image,
  type,
  address,
  city,
  price,
  description,
}: PropertyCardProps) {
  console.log("🖼 PropertyCard image:", image);

  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50">
      <Link href={`/property/${id}`}>
        <div className="relative h-64 sm:h-72 overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={`Propiedad en ${city}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <img
              src="/placeholder.svg"
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
          )}

          <div className="absolute top-4 left-4">
            <span
              className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                type.toLowerCase() === "venta"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              {type}
            </span>
          </div>
        </div>
      </Link>

      <CardContent className="p-5 sm:p-6">
        <div className="flex items-start gap-2 mb-3">
          <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-foreground text-base sm:text-lg">
              {address}
            </p>
            <p className="text-sm text-muted-foreground">{city}</p>
          </div>
        </div>

        <p className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-3">
          {price}
        </p>

        <div
          className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-2"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </CardContent>

      <CardFooter className="p-5 sm:p-6 pt-0">
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          asChild
        >
          <Link href={`/property/${id}`}>Ver más</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
