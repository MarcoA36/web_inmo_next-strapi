import { fetchFromDirectus, DIRECTUS_URL } from "./api";

export async function getPropertyById(id: string) {
  try {
    const path = `/items/properties/${id}?fields=*,images.directus_files_id`;

    console.log("🔗 URL generada:", `${DIRECTUS_URL}${path}`);

    const data = await fetchFromDirectus(path);

    console.log("📦 Respuesta de Directus:", JSON.stringify(data, null, 2));

    if (!data || !data.data) return null;

    const property = data.data;

    // Generamos URLs de imágenes
    const images = property.images?.map((img: any) => {
      const url = `${DIRECTUS_URL}/assets/${img.directus_files_id}`;
      console.log("➡ IMAGE URL GENERATED:", url);
      return url;
    }) || [];

    return {
      ...property,
      images,
    };
  } catch (error) {
    console.error("❌ Error en getPropertyById:", error);
    return null;
  }
}

// import { fetchFromStrapi, STRAPI_URL } from "./api";

// export async function getPropertyById(id: string | number) {
//   console.log("getPropertyById():", id);

//   // const path = `/api/properties?filters[id][$eq]=${id}&populate=*`;
//   const path = `/api/properties?filters[id][$eq]=${id}&populate[images][fields][0]=url`;


//   console.log("🔗 URL generada:", `${STRAPI_URL}${path}`);

//   const data = await fetchFromStrapi(path);

//   console.log("📦 Respuesta:", data);

//   return data;
// }


