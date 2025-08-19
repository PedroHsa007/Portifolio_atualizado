import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    // Buscar dados de analytics
    const analyticsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/analytics`,
    )
    const analytics = await analyticsResponse.json()

    const now = new Date()
    const today = now.toISOString().split("T")[0]
    const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString().split("T")[0]

    const todayVisits = analytics.daily[today] || 0
    const yesterdayVisits = analytics.daily[yesterday] || 0

    // Preparar relatório
    const reportData = {
      to: "pedrohenrisa21@gmail.com",
      subject: `📊 Relatório Diário do Portfólio - ${today}`,
      html: `
        <h2>📊 Relatório de Visitantes do Seu Portfólio</h2>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>📈 Resumo de Hoje (${today})</h3>
          <p><strong>Visitas hoje:</strong> ${todayVisits}</p>
          <p><strong>Visitas ontem:</strong> ${yesterdayVisits}</p>
          <p><strong>Diferença:</strong> ${todayVisits - yesterdayVisits > 0 ? "+" : ""}${todayVisits - yesterdayVisits}</p>
        </div>

        <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>📊 Estatísticas Gerais</h3>
          <p><strong>Total de visitas:</strong> ${analytics.total}</p>
          <p><strong>Últimos 7 dias:</strong> ${getLastDaysVisits(analytics.daily, 7)}</p>
          <p><strong>Este mês:</strong> ${getCurrentMonthVisits(analytics.daily)}</p>
        </div>

        <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>🎯 Insights</h3>
          <p>${getInsights(todayVisits, yesterdayVisits, analytics.total)}</p>
        </div>

        <hr>
        <p><em>Relatório gerado automaticamente pelo sistema de analytics do seu portfólio</em></p>
      `,
    }

    // Log the report data
    console.log("Analytics report prepared:", reportData)

    // Simulate email sending
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json({ success: true, message: "Relatório preparado com sucesso!" })
  } catch (error) {
    console.error("Erro ao preparar relatório:", error)
    return NextResponse.json({ success: false, message: "Erro ao preparar relatório" }, { status: 500 })
  }
}

function getLastDaysVisits(daily: Record<string, number>, days: number) {
  let total = 0
  const now = new Date()

  for (let i = 0; i < days; i++) {
    const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000)
    const dateKey = date.toISOString().split("T")[0]
    total += daily[dateKey] || 0
  }

  return total
}

function getCurrentMonthVisits(daily: Record<string, number>) {
  const now = new Date()
  const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`

  return Object.entries(daily)
    .filter(([date]) => date.startsWith(currentMonth))
    .reduce((sum, [, visits]) => sum + visits, 0)
}

function getInsights(today: number, yesterday: number, total: number) {
  if (today > yesterday) {
    return `🚀 Excelente! Seu portfólio teve ${today - yesterday} visitas a mais que ontem. Continue assim!`
  } else if (today === yesterday) {
    return `📊 Estabilidade! Mesmo número de visitas que ontem. Considere promover seu portfólio nas redes sociais.`
  } else {
    return `📉 Hoje teve menos visitas que ontem. Que tal compartilhar seu portfólio em suas redes profissionais?`
  }
}
