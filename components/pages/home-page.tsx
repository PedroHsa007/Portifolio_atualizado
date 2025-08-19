"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { EditableText } from "@/components/editable-text"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"

// Ícones das tecnologias (usando emojis e símbolos para melhor visualização)
const skillsData = [
  // Desenvolvimento
  { name: "VBA", icon: "📊", level: 70, category: "Desenvolvimento" },
  { name: "React", icon: "⚛️", level: 85, category: "Desenvolvimento" },
  { name: "Python", icon: "🐍", level: 90, category: "Desenvolvimento" },
  { name: "JavaScript", icon: "🟨", level: 85, category: "Desenvolvimento" },
  { name: "HTML/CSS", icon: "🌐", level: 100, category: "Desenvolvimento" },
  { name: "TypeScript", icon: "🔷", level: 70, category: "Desenvolvimento" },

  // Banco de Dados
  { name: "Access", icon: "🗃️", level: 75, category: "Banco de Dados" },
  { name: "SQL Server", icon: "🛢️", level: 100, category: "Banco de Dados" },
  { name: "MySQL", icon: "🐬", level: 95, category: "Banco de Dados" },
  { name: "PostgreSQL", icon: "🐘", level: 70, category: "Banco de Dados" },

  // Business Intelligence
  { name: "Power BI", icon: "📈", level: 90, category: "BI & Analytics" },
  { name: "Excel", icon: "📋", level: 95, category: "BI & Analytics" },
  { name: "SAP GUI", icon: "💼", level: 85, category: "BI & Analytics" },
  //{ name: "Tableau", icon: "📊", level: 70, category: "BI & Analytics" },

  // Ferramentas
  { name: "Git/GitHub", icon: "🔧", level: 65, category: "Ferramentas" },
  { name: "VS Code", icon: "💻", level: 90, category: "Ferramentas" },
  { name: "Figma", icon: "🎨", level: 50, category: "Ferramentas" },
  { name: "Office 365", icon: "📄", level: 100, category: "Ferramentas" },

  // Cloud & DevOps
  //{ name: "AWS", icon: "☁️", level: 70, category: "Cloud & DevOps" },
  //{ name: "Docker", icon: "🐳", level: 65, category: "Cloud & DevOps" },
  { name: "Node.js", icon: "🟢", level: 75, category: "Cloud & DevOps" },

  // Soft Skills
  { name: "Análise de Dados", icon: "🔍", level: 90, category: "Soft Skills" },
  { name: "Problem Solving", icon: "🧩", level: 95, category: "Soft Skills" },
  { name: "Comunicação", icon: "💬", level: 85, category: "Soft Skills" }
]

// Função para obter cor baseada no nível
const getLevelColor = (level: number) => {
  if (level >= 90) return "from-green-400 to-green-600"
  if (level >= 80) return "from-blue-400 to-blue-600"
  if (level >= 70) return "from-yellow-400 to-yellow-600"
  return "from-gray-400 to-gray-600"
}

// Função para obter texto do nível
const getLevelText = (level: number) => {
  if (level >= 90) return "Avançado"
  if (level >= 80) return "Intermediário+"
  if (level >= 70) return "Intermediário"
  return "Básico"
}

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="pt-16 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-4xl lg:text-6xl font-bold text-white"
                >
                  Olá, sou{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                    Pedro Henrique
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl lg:text-2xl text-gray-300"
                >
                  <EditableText
                    initialText="Desenvolvedor Front-end & Ciêntista de Dados"
                    className="text-xl lg:text-2xl text-gray-300"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-gray-400 leading-relaxed"
              >
                <EditableText
                  initialText="Recém-formado em Sistemas de Informação pela UNIFOA, busco oportunidades na área de Análise de Dados e Business Intelligence, com foco em otimizar processos e gerar valor por meio da tecnologia.

                  Atuei como Estagiário de Desempenho Operacional na CSN, onde desenvolvi rotinas e relatórios que aumentaram a eficiência utilizando VBA, Qlik Sense e SAP GUI. Minha formação técnica inclui:

                  Análise de Dados e BI: Dashboards e relatórios em Power BI.

                  Programação: Python (Pandas, Selenium) e VBA para automações.

                  Banco de Dados: Consultas e gestão com MySQL e SQL Server.

                  Front-end: Conhecimento complementar em desenvolvimento web.

                  Sou organizado, proativo e comunicativo, com visão sistêmica e foco em resultados."
                  className="text-gray-400 leading-relaxed"
                  multiline
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/projetos">
                  <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold">
                    Ver Projetos
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
                  >
                    Entre em Contato
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black bg-transparent"
                  onClick={() => {
                  const link = document.createElement("a")
                        link.href = "/curriculo/Curriculo-PedroHenrique.pdf"
                        link.download = "Curriculo-PedroHenrique.pdf"
                        link.click()
                }}
                >
                  <Download size={16} className="mr-2" />
                  Baixar Currículo
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex gap-6"
              >
                <a
                  href="https://github.com/PedroHsa007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/pedro-henrique-oliveira-de-s%C3%A1-39057b214/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 p-1">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <img
                      src="/perfil.jpg"
                      alt="Pedro Henrique"
                      className="w-72 h-72 rounded-full object-cover"
                    />
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -inset-4 rounded-full border-2 border-dashed border-yellow-400/30"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-24 bg-gradient-to-b from-black/0 to-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Minhas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Habilidades
              </span>
            </h2>
            <div className="max-w-2xl mx-auto">
              <EditableText
                initialText="Tecnologias e ferramentas que domino para criar soluções inovadoras e eficientes."
                className="text-xl text-gray-300"
                multiline
              />
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="bg-black/40 border-yellow-500/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 hover:border-yellow-400/40 cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <div className="space-y-3">
                      {/* Ícone */}
                      <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>

                      {/* Nome da skill */}
                      <h3 className="text-white font-medium text-sm group-hover:text-yellow-400 transition-colors">
                        {skill.name}
                      </h3>

                      {/* Nível visual */}
                      <div className="flex justify-center">
                        <div
                          className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getLevelColor(skill.level)} text-white`}
                        >
                          {getLevelText(skill.level)}
                        </div>
                      </div>

                      {/* Indicador de nível com pontos */}
                      <div className="flex justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${
                              i < Math.floor(skill.level / 20) ? "bg-yellow-400" : "bg-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Skills Categories Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Desenvolvimento */}
              <Card className="bg-gradient-to-br from-blue-600/20 to-blue-400/20 border-blue-400/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">💻</div>
                  <h3 className="text-white font-semibold mb-2">Desenvolvimento</h3>
                  <p className="text-gray-300 text-sm">Frontend e Backend com foco em automação e web apps</p>
                </CardContent>
              </Card>

              {/* Data & BI */}
              <Card className="bg-gradient-to-br from-green-600/20 to-green-400/20 border-green-400/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">📊</div>
                  <h3 className="text-white font-semibold mb-2">Data & BI</h3>
                  <p className="text-gray-300 text-sm">Análise de dados, dashboards e business intelligence</p>
                </CardContent>
              </Card>

              {/* Cloud & DevOps */}
              <Card className="bg-gradient-to-br from-purple-600/20 to-purple-400/20 border-purple-400/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">☁️</div>
                  <h3 className="text-white font-semibold mb-2">Suporte Service desk </h3>
                  <p className="text-gray-300 text-sm">Um dos sonhos é trabalhar na área poder ajudar os usuários corrigir erros</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Learning Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <Card className="bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 border-yellow-400/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-4">Sempre Evoluindo</h3>
                <div className="max-w-2xl mx-auto">
                  <EditableText
                    initialText="Constantemente aprendendo novas tecnologias e aprimorando habilidades. Atualmente focado em Machine Learning, Cloud Computing e arquiteturas modernas."
                    className="text-gray-300 leading-relaxed"
                    multiline
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
