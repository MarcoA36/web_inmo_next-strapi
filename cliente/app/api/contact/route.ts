import { NextResponse } from "next/server"

const DIRECTUS_URL =
  process.env.NEXT_PUBLIC_DIRECTUS_URL || "https://directus.notechofer.online"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const res = await fetch(`${DIRECTUS_URL}/items/contact_messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: body, // 👈 ESTO ES LA CLAVE
      }),
    })

    if (!res.ok) {
      const text = await res.text()
      return NextResponse.json({ error: text }, { status: res.status })
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: "Error al enviar mensaje" },
      { status: 500 }
    )
  }
}
