import { fetchFromStrapi, STRAPI_URL } from "./api";

export async function getHome() {
  console.log("strapi_url", STRAPI_URL)
  try {
    const data = await fetchFromStrapi("/api/home?populate=image");
console.log("data: ", data)
    const home = data?.data || {};

    return {
      title: home.title || null,
      subtitle: home.subtitle || null,
      // imageUrl: home.image?.url ? `${STRAPI_URL}${home.image.url}` : null,
      imageUrl: home.image?.data?.attributes?.url
  ? `${STRAPI_URL}${home.image.data.attributes.url}`
  : null,

    };
  } catch (error) {
    console.error("💥 Error general en getHome():", error);
    return { title: null, subtitle: null, imageUrl: null };
  }
}

// import { fetchFromStrapi } from "./api";

// export async function getHome() {
//   try {
//     const data = await fetchFromStrapi("/api/home?populate=image");
//     const home = data?.data || {};

//     return {
//       title: home.title || null,
//       subtitle: home.subtitle || null,
//       imageUrl: home.image?.url || null,
//     };
//   } catch (error) {
//     console.error("💥 Error en getHome():", error);
//     return { title: null, subtitle: null, imageUrl: null };
//   }
// }
