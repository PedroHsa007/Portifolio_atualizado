"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EditableText } from "@/components/editable-text"
import { Calendar, MapPin, Building, Award } from "lucide-react"

const experiences = [
{
    id: 1,
    company: "CSN - Companhia Siderúrgica Nacional",
    position: "Estagiário em Desempenho Operacional",
    department: "Gerencia de Desempenho Operacional - GGPL/GDOP - CAP",
    period: "Fev/2024 - Jun/2025",
    location: "Volta Redonda, RJ",
    activities: [
      "Criação de dashboards e relatórios com VBA, Access e SAP GUI",
      "Desenvolvimento de macros e automações para otimização de tempo",
      "Apoio a analistas e controle de indicadores operacionais",
    ],
    achievements: [
      "Destaque de Segurança Mar/24"
    ],
    technologies: ["VBA", "Python", "QlikSense", "SAP GUI", "ThinkCell", "Microsoft Access"],
    logo: "/placeholderCSN.jpeg?height=60&width=60",
  },
  {
    id: 2,
    company: "Hospital Casa de Saúde Santa Maria – Ano Bom",
    position: "Almoxarife",
    department: "Setor de Suprimentos e Logística",
    period: "Fev/2023 - Fev/2023",
    location: "Volta Redonda, RJ",
    activities: [
      "Supervisão de entrada e saída de alimentos",
      "Gestão de estoque e organização do ambiente",
      "Controle preciso de notas fiscais",
    ],
    achievements: [
      "Implementou sistema de controle de estoque em Excel",
      "Organizou processo de recebimento de mercadorias",
    ],
    technologies: ["Excel Avançado", "Sistema MV"],
    logo: "/placeholderSANTA.jpeg?height=60&width=60",
  },
  {
    id: 3,
    company: "Hospital Casa de Saúde Santa Maria – Ano Bom",
    position: "Jovem Aprendiz",
    department: "Setor Administrativo",
    period: "Set/2021 - Dez/2022",
    location: "Volta Redonda, RJ",
    activities: [
      "Controle de notas fiscais e convênios",
      "Gestão de entregas via sistema MV",
      "Apoio administrativo com pacote Office",
      "Organização de documentos e arquivos",
    ],
    achievements: [
      "Organizou sistema de arquivamento digital",
      "Melhorou eficiência no controle de convênios",
      "Desenvolveu planilhas de controle administrativo",
      "Apoiou na digitalização de processos",
    ],
    technologies: ["Pacote Office", "Sistema MV", "Excel"],
    logo: "/placeholderSANTA.jpeg?height=60&width=60",
  },
]

export function ExperiencePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Experiência{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Profissional
            </span>
          </h1>
          <div className="max-w-2xl mx-auto">
            <EditableText
              initialText="Minha jornada profissional, destacando as principais experiências e conquistas ao longo da carreira."
              className="text-xl text-gray-300"
              multiline
            />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-yellow-600" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2.5 md:left-6.5 top-6 w-4 h-4 bg-yellow-400 rounded-full border-4 border-black" />

                <Card className="bg-black/40 border-yellow-500/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <img
                        src={experience.logo || "/placeholder.svg"}
                        alt={`${experience.company} logo`}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <CardTitle className="text-white text-xl mb-2">{experience.position}</CardTitle>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-yellow-400">
                            <Building size={16} />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                          <div className="text-gray-400 text-sm">
                            <span className="font-medium">Departamento:</span> {experience.department}
                          </div>
                          <div className="flex items-center gap-4 text-gray-400 text-sm">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{experience.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Atividades Desempenhadas</h4>
                      <ul className="space-y-2">
                        {experience.activities.map((activity, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-yellow-400 mt-1">•</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <Award size={16} className="text-yellow-400" />
                        Principais Conquistas
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-yellow-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Tecnologias Utilizadas</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-yellow-400/50 text-yellow-400">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
