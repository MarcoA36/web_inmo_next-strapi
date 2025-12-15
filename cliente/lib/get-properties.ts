// import { fetchFromStrapi } from "./api";
// import { Property } from "@/types/property";

// export async function getProperties(): Promise<Property[]> {
//   const data = await fetchFromStrapi("/api/properties?populate=images");

//   return data.data.map((p: any) => {
//     const attributes = p.attributes || p;

//     const imageUrls =
//       attributes.images?.data?.map((img: any) => {
//         const url = img.attributes.url;
//         return url.startsWith("http") ? url : url;
//       }) || [];

//     const descriptionText = Array.isArray(attributes.description)
//       ? attributes.description
//           .map((d: any) => d.children?.map((c: any) => c.text).join(" "))
//           .join(" ")
//       : attributes.description || "";

//     return {
//       id: p.id,
//       slug: attributes.slug || `propiedad-${p.id}`,
//       title: attributes.title,
//       type: attributes.type,
//       address: attributes.address,
//       city: attributes.city,
//       price: `$${attributes.price?.toLocaleString("es-AR")}`,
//       description: descriptionText,
//       image: imageUrls[0] || "",
//       images: imageUrls,
//     };
//   });
// }




import { fetchFromStrapi } from "./api";
import { Property } from "@/types/property";

export async function getProperties(): Promise<Property[]> {
  // const data = await fetchFromStrapi("/api/properties?populate=*");

  const data = await fetchFromStrapi(
    "/api/properties?populate[images][fields][0]=url"
  );
  return data.data.map((p: any) => {
    const imageUrls = p.images?.map((img: any) => img.url) || [];

    return {
      id: p.id,
      slug: p.slug || `propiedad-${p.id}`,
      title: p.title,
      type: p.type,
      address: p.address,
      city: p.city,
      price: `$${p.price?.toLocaleString("es-AR")}`,
      description: p.description
        ?.map((d: any) => d.children?.map((c: any) => c.text).join(" "))
        .join(" ") || "",
      image: imageUrls[0] || "",
      images: imageUrls,
    };
  });
}
