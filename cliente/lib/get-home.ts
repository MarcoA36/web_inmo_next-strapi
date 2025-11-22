// lib/get-home.ts
export async function getHome() {
  try {
    console.log("🛰️ Llamando a Strapi desde getHome()...");

    const res = await fetch("http://localhost:1337/api/home?populate=image", {
      // next: { revalidate: 60 },
      cache: "no-store",

    });

    if (!res.ok) {
      const text = await res.text();
      console.error("❌ Error en Strapi:", res.status, res.statusText);
      console.error("📄 Respuesta del servidor:", text);
      throw new Error(`Strapi devolvió ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    console.log("✅ Datos crudos recibidos en getHome():", data);

    const home = data?.data || {};

    return {
      title: home.title || null,
      subtitle: home.subtitle || null,
      imageUrl: home.image?.url
        ? `http://localhost:1337${home.image.url}`
        : null,
    };
  } catch (error) {
    console.error("💥 Error general en getHome():", error);
    return { title: null, subtitle: null, imageUrl: null };
  }
}
