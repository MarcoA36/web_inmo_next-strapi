import { fetchFromStrapi } from "./api";

export async function getHome() {
  try {
    const data = await fetchFromStrapi("/api/home?populate=image");
    const home = data?.data || {};

    return {
      title: home.title || null,
      subtitle: home.subtitle || null,
      imageUrl: home.image?.url || null,
    };
  } catch (error) {
    console.error("💥 Error en getHome():", error);
    return { title: null, subtitle: null, imageUrl: null };
  }
}
