// export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
export const STRAPI_URL = "https://giving-pleasure-c5847554d0.strapiapp.com";

export async function fetchFromStrapi(path: string) {
  const url = `${STRAPI_URL}${path}`;

  const res = await fetch(url, {
    cache: "no-store",
    // next: { revalidate: 60 }, // si lo necesitás más adelante
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`❌ Error en Strapi: ${res.status} ${res.statusText}`);
    console.error("📄 Respuesta:", text);
    throw new Error(`Strapi devolvió ${res.status}`);
  }

  return res.json();
}
