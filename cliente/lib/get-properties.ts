import { Property } from "@/types/property";

export async function getProperties(): Promise<Property[]> {
  const res = await fetch("http://localhost:1337/api/properties?populate=images", {
    // next: { revalidate: 60 },
    cache: "no-store",

  });

  if (!res.ok) throw new Error("Error al obtener propiedades");

  const data = await res.json();

  return data.data.map((p: any) => {
    const attributes = p.attributes || p; // 🧩 compatibilidad con Strapi v4

    // 🔹 Manejo de imágenes (según la estructura que devuelva Strapi)
    const imageUrls =
      attributes.images?.data?.map(
        (img: any) => `http://localhost:1337${img.attributes.url}`
      ) ||
      attributes.images?.map((img: any) => `http://localhost:1337${img.url}`) ||
      [];

    // 🔹 Descripción convertida a texto
    const descriptionText = Array.isArray(attributes.description)
      ? attributes.description
          .map((d: any) => d.children?.map((c: any) => c.text).join(" "))
          .join(" ")
      : attributes.description || "";

    return {
      id: p.id,
      slug: attributes.slug || `propiedad-${p.id}`, // ✅ usa el slug real o genera uno temporal
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
