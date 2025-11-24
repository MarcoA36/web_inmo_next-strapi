// import { fetchFromStrapi, STRAPI_URL } from "./api";
// import { Property } from "@/types/property";

// export async function getProperties(): Promise<Property[]> {
//   const data = await fetchFromStrapi("/api/properties?populate=images");
// console.log("data properties: ", data)
//   return data.data.map((p: any) => {
//     const attributes = p.attributes || p;

//     const imageUrls =
//       attributes.images?.data?.map(
//         (img: any) => `${STRAPI_URL}${img.attributes.url}`
//       ) ||
//       attributes.images?.map((img: any) => `${STRAPI_URL}${img.url}`) ||
//       [];

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



// import { fetchFromStrapi, STRAPI_URL } from "./api";
// import { Property } from "@/types/property";

// export async function getProperties(): Promise<Property[]> {
//   const data = await fetchFromStrapi("/api/properties?populate=images");

//   return data.data.map((p: any) => {
//     const attributes = p.attributes;

//     // imágenes → estructura REAL de Strapi
//     const imageUrls =
//       attributes.images?.data?.map(
//         (img: any) => `${STRAPI_URL}${img.attributes.url}`
//       ) || [];

//     // description (RichText)
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
























import { fetchFromStrapi, STRAPI_URL } from "./api";
import { Property } from "@/types/property";

export async function getProperties(): Promise<Property[]> {
  const data = await fetchFromStrapi("/api/properties?populate=images");

  return data.data.map((p: any) => {
    const attributes = p.attributes || p;

    const imageUrls =
      attributes.images?.data?.map(
        (img: any) => `${STRAPI_URL}${img.attributes.url}`
      ) ||
      attributes.images?.map((img: any) => `${STRAPI_URL}${img.url}`) ||
      [];

    const descriptionText = Array.isArray(attributes.description)
      ? attributes.description
          .map((d: any) => d.children?.map((c: any) => c.text).join(" "))
          .join(" ")
      : attributes.description || "";

    return {
      id: p.id,
      slug: attributes.slug || `propiedad-${p.id}`,
      title: attributes.title,
      type: attributes.type,
      address: attributes.address,
      city: attributes.city,
      price: `$${attributes.price?.toLocaleString("es-AR")}`,
      description: descriptionText,
      image: imageUrls[0] || "",
      images: imageUrls,
    };
  });
}
