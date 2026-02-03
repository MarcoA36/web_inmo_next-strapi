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


import { fetchFromDirectus, DIRECTUS_URL } from "./api";

export async function getHome() {
  try {
    const res = await fetchFromDirectus(
      "/items/home?fields=title,subtitle,image.*"
    );

    const home = res?.data;

    return {
      title: home?.title ?? null,
      subtitle: home?.subtitle ?? null,
      imageUrl: home?.image?.id
        ? `${DIRECTUS_URL}/assets/${home.image.id}`
        : null,
    };
  } catch (error) {
    console.error("💥 Error en getHome():", error);
    return {
      title: null,
      subtitle: null,
      imageUrl: null,
    };
  }
}
