// export async function getPropertyById(id: string | number) {
//     const baseUrl = "http://localhost:1337"; // <-- PONER MANUALMENTE
  
//     console.log("getPropertyById() llamado con ID:", id);
  
//     const url = `${baseUrl}/api/properties?filters[id][$eq]=${id}&populate=*`;
  
//     console.log("🔗 URL generada:", url);
  
//     const res = await fetch(url);
//     const data = await res.json();
  
//     console.log("📦 Respuesta:", data);
  
//     return data;
//   }
  
import { fetchFromStrapi, STRAPI_URL } from "./api";

export async function getPropertyById(id: string | number) {
  console.log("getPropertyById():", id);

  const path = `/api/properties?filters[id][$eq]=${id}&populate=*`;

  console.log("🔗 URL generada:", `${STRAPI_URL}${path}`);

  const data = await fetchFromStrapi(path);

  console.log("📦 Respuesta:", data);

  return data;
}
