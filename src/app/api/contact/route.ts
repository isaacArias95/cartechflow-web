import { NextRequest, NextResponse } from 'next/server'

const WEBHOOK_URL = 'https://n8n.cartechflow.cloud/webhook/66b819b1-55bf-40cb-93e4-ae1d7bb4bf69'

export async function POST(req: NextRequest) {
  const body = await req.json()

  const res = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Webhook error' }, { status: res.status })
  }

  return NextResponse.json({ ok: true })
}
