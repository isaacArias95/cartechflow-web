import { NextRequest, NextResponse } from 'next/server'

const WEBHOOK_URL = 'https://n8n.cartechflow.cloud/webhook/66b819b1-55bf-40cb-93e4-ae1d7bb4bf69'

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      // disable Next.js cache for this fetch
      cache: 'no-store',
    })

    const text = await res.text()
    console.log('[contact] n8n status:', res.status, 'body:', text)

    // n8n returns 200 with {"message":"Workflow was started"} on success
    if (res.status >= 200 && res.status < 300) {
      return NextResponse.json({ ok: true })
    }

    return NextResponse.json({ error: `Webhook responded ${res.status}`, detail: text }, { status: 502 })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('[contact] fetch error:', message)
    return NextResponse.json({ error: 'fetch_failed', detail: message }, { status: 502 })
  }
}
