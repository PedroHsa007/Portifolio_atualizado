import { type NextRequest, NextResponse } from "next/server"

// Simulando um banco de dados em memória (em produção, use um banco real)
const analytics = {
  daily: {},
  weekly: {},
  monthly: {},
  total: 0,
}

export async function POST(request: NextRequest) {
  try {
    const { action } = await request.json()

    if (action === "visit") {
      const now = new Date()
      const today = now.toISOString().split("T")[0] // YYYY-MM-DD
      const thisWeek = getWeekKey(now)
      const thisMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`

      // Incrementar contadores
      analytics.daily[today] = (analytics.daily[today] || 0) + 1
      analytics.weekly[thisWeek] = (analytics.weekly[thisWeek] || 0) + 1
      analytics.monthly[thisMonth] = (analytics.monthly[thisMonth] || 0) + 1
      analytics.total += 1

      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ success: false, message: "Ação inválida" }, { status: 400 })
  } catch (error) {
    console.error("Erro no analytics:", error)
    return NextResponse.json({ success: false, message: "Erro interno" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json(analytics)
}

function getWeekKey(date: Date) {
  const startOfYear = new Date(date.getFullYear(), 0, 1)
  const pastDaysOfYear = (date.getTime() - startOfYear.getTime()) / 86400000
  const weekNumber = Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7)
  return `${date.getFullYear()}-W${weekNumber}`
}
