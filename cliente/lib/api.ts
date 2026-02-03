// export const STRAPI_URL = "https://giving-pleasure-c5847554d0.strapiapp.com";

// export async function fetchFromStrapi(path: string) {
//   const url = `${STRAPI_URL}${path}`;
//   const res = await fetch(url, { next: { revalidate: 60 } });

//   if (!res.ok) {
//     const text = await res.text();
//     console.error(`❌ Error en Strapi: ${res.status} ${res.statusText}`);
//     console.error("📄 Respuesta:", text);
//     throw new Error(`Strapi devolvió ${res.status}`);
//   }

//   return res.json();
// }


export const DIRECTUS_URL =
  process.env.NEXT_PUBLIC_DIRECTUS_URL || "https://directus.notechofer.online";

export async function fetchFromDirectus(path: string) {
  const url = `${DIRECTUS_URL}${path}`;

  console.log(`🔗 Fetching from Directus: ${url}`);

  const res = await fetch(url, {
    next: { revalidate: 60 }, // caching ISR
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`❌ Error en Directus: ${res.status} ${res.statusText}`);
    console.error("📄 Respuesta:", text);
    throw new Error(`Directus devolvió ${res.status}`);
  }

  const json = await res.json();

  console.log("📌 JSON fetchFromDirectus:", JSON.stringify(json, null, 2));

  return json;
}

