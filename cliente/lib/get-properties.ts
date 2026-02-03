
// import { fetchFromStrapi } from "./api";
// import { Property } from "@/types/property";

// export async function getProperties(): Promise<Property[]> {
//   // const data = await fetchFromStrapi("/api/properties?populate=*");

//   const data = await fetchFromStrapi(
//     "/api/properties?populate[images][fields][0]=url"
//   );
//   return data.data.map((p: any) => {
//     const imageUrls = p.images?.map((img: any) => img.url) || [];

//     return {
//       id: p.id,
//       slug: p.slug || `propiedad-${p.id}`,
//       title: p.title,
//       type: p.type,
//       address: p.address,
//       city: p.city,
//       price: `$${p.price?.toLocaleString("es-AR")}`,
//       description: p.description
//         ?.map((d: any) => d.children?.map((c: any) => c.text).join(" "))
//         .join(" ") || "",
//       image: imageUrls[0] || "",
//       images: imageUrls,
//     };
//   });
// }

// import { fetchFromDirectus, DIRECTUS_URL } from "./api";
// import { Property } from "@/types/property";

// export async function getProperties(): Promise<Property[]> {
//   try {
//     // 1️⃣ Traemos todos los properties con relación images
//     const res = await fetchFromDirectus(
//       "/items/properties?fields=*,images.directus_files_id"
//     );

//     console.log("📌 FULL RESPONSE DATA:", JSON.stringify(res.data, null, 2));

//     // 2️⃣ Mapeamos cada propiedad
//     return res.data.map((p: any) => {
//       console.log("📌 RAW PROPERTY:", JSON.stringify(p, null, 2));

//       // 3️⃣ Construimos URLs completas de imágenes
//       const images =
//         p.images?.map((img: any) => {
//           const url = `${DIRECTUS_URL}/assets/${img.directus_files_id}`;
//           console.log(`➡ IMAGE URL GENERATED: ${url}`);
//           return url;
//         }) || [];

//       console.log("➡ IMAGES ARRAY FINAL:", images);

//       // 4️⃣ Devolvemos objeto listo para frontend
//       return {
//         id: p.id,
//         slug: p.slug || `propiedad-${p.id}`,
//         title: p.title,
//         type: p.type,
//         address: p.address,
//         city: p.city,
//         price: `$${p.price?.toLocaleString("es-AR")}`,
//         description: p.description || "",
//         image: images[0] || "", // primera imagen para la card
//         images, // array completo por si querés galería
//       };
//     });
//   } catch (error) {
//     console.error("❌ ERROR en getProperties:", error);
//     return [];
//   }
// }


import { fetchFromDirectus, DIRECTUS_URL } from "./api";
import { Property } from "@/types/property";

export async function getProperties(): Promise<Property[]> {
  try {
    const res = await fetchFromDirectus(
      "/items/properties?fields=*,images.directus_files_id"
    );

    console.log("📌 FULL RESPONSE DATA:", JSON.stringify(res.data, null, 2));

    return res.data.map((p: any) => {
      console.log("📌 RAW PROPERTY:", JSON.stringify(p, null, 2));

      const images =
        p.images?.map((img: any) => {
          const url = `${DIRECTUS_URL}/assets/${img.directus_files_id}`;
          console.log("➡ IMAGE URL GENERATED:", url);
          return url;
        }) || [];

      console.log("➡ IMAGES ARRAY FINAL:", images);

      return {
        id: p.id,
        slug: p.slug || `propiedad-${p.id}`,
        title: p.title,
        type: p.type,
        address: p.address,
        city: p.city,
        price: `$${p.price?.toLocaleString("es-AR")}`,
        description: p.description || "",
        image: images[0] || "", // primera imagen
        images, // array completo
      };
    });
  } catch (error) {
    console.error("❌ ERROR en getProperties:", error);
    return [];
  }
}
