import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string
    const file = formData.get("file") as File | null

    // For now, we'll simulate email sending and log the data
    // In production, you would configure nodemailer properly
    console.log("Contact form submission:", {
      name,
      email,
      message,
      file: file?.name,
      timestamp: new Date().toISOString(),
    })

    // Simulate email sending with a more realistic approach
    // You can replace this with actual email service integration
    const emailData = {
      to: "pedrohenrisa21@gmail.com",
      subject: `Nova mensagem do portfólio - ${name}`,
      html: `
        <h2>Nova mensagem recebida no seu portfólio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        ${file ? `<p><strong>Arquivo anexado:</strong> ${file.name}</p>` : ""}
        <hr>
        <p><em>Mensagem enviada através do seu portfólio profissional</em></p>
        <p><em>Data/Hora:</em> ${new Date().toLocaleString("pt-BR")}</p>
      `,
      replyTo: email,
    }

    // Log the email data that would be sent
    console.log("Email data prepared:", emailData)

    // Simulate successful email sending
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Mensagem enviada com sucesso!",
    })
  } catch (error) {
    console.error("Erro ao processar formulário de contato:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Erro ao enviar mensagem. Tente novamente.",
      },
      { status: 500 },
    )
  }
}
