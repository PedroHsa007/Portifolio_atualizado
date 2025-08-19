"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EditableText } from "@/components/editable-text"
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react"

const education = [
   {
    id: 1,
    institution: "UNIFOA - Centro Universitário de Volta Redonda",
    degree: "Bacharelado em Sistemas de Informação",
    period: "Ago/2021 - Jul/2025",
    status: "Concluído",
    location: "Volta Redonda, RJ",
    description:
      "Formação completa em desenvolvimento de sistemas, análise de dados, gerenciamento de projetos e tecnologias emergentes. Foco em programação, banco de dados, engenharia de software e business intelligence.",
    highlights: [
      "Projeto de TCC: Sistema de Automação Industrial com IoT",
      "Participação em projetos de extensão universitária",
      "Monitor da disciplina de Programação Web",
      "Membro do grupo de estudos em Data Science",
    ],
    subjects: [
      "Programação Web",
      "Banco de Dados",
      "Engenharia de Software",
      "Análise de Sistemas",
      "Redes de Computadores",
      "Business Intelligence",
      "Gestão de Projetos",
      "Inteligência Artificial",
      "Segurança da Informação",
    ],
    logo: "/placeholderFOA.jpeg?height=60&width=60",
  },
 {
    id: 2,
    institution: "FIRJAN SESI",
    degree: "Ensino Médio - Formação Geral",
    period: "Concluído em Dez/2019",
    status: "Concluído",
    location: "Volta Redonda, RJ",
    description:
      "Ensino médio - Formação geral.",
    highlights: [
      "Projeto de robótica",
    ],
    subjects: [
      "Matemática Avançada",
      "Física",
      "Química",
      "Portugues",
      "Biologia",
      "FIlosofia",
      "Literatura",
      "Redação",
    ],
    logo: "/placeholderSESI.JPEG?height=60&width=60",
  },
  {
    id: 3,
    institution: "UNIFOA - Centro Universitário de Volta Redonda",
    degree: "Engenharia Mecânica",
    period: "2020 - 2021",
    status: "Trancado",
    location: "Volta Redonda, RJ",
    description:
      "Curso inciado após termino do ensino médio.",
    highlights: [
      "Fundamentos de Engenharia e Cálculo Avançado",
      "Projetos em CAD e modelagem 3D",
      "Participação em competições de robótica",
    ],
    subjects: [
      "Física Aplicada",
      "Desenho Técnico",
      "Materiais de Engenharia",
      "Mecânica dos Sólidos",
    ],
    logo: "/placeholderFOA.jpeg?height=60&width=60",
  },
]

const additionalCourses = [
  {
    title: "Desenvolvimento Front-end",
    institution: "Udemy",
    duration: "120h",
    year: "2024",
  },
  {
    title: "Python para Análise de Dados",
    institution: "Alura",
    duration: "80h",
    year: "2024",
  },
  {
    title: "Typescript e Javascript - Basico ao Avançado",
    institution: "Udemy",
    duration: "60h",
    year: "2025",
  },
  {
    title: "Informática",
    institution: "Microlins - Barra Mansa",
    duration: "1 ano",
    year: "2022",
  },
  {
    title: "Visão Computacional com Yolov4 e Yolov5",
    institution: "Udemy",
    duration: "40h",
    year: "2024",
  },
  {
    title: "Formação de Cientista de Dados - 2025",
    institution: "Udemy",
    duration: "52h",
    year: "2025",
  },
]

const certifications = [
  {
    title: "VBA + Pacote Office + Power bi",
    issuer: "Udemy",
    date: "2024",
    credentialId: "UC-eb9ec48a-cdf5-4b6d-b5cc-67afb53301b4",
  },
  {
    title: "Python 3",
    issuer: "Udemy",
    date: "2025",
    credentialId: "PY-DA-2023",
  },
  {
    title: "Power BI do Basico ao Avançado",
    issuer: "Udemy",
    date: "2024",
    credentialId: "VBA-ADV-2022",
  },
]

export function EducationPage() {
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
            Formação{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Acadêmica
            </span>
          </h1>
          <div className="max-w-2xl mx-auto">
            <EditableText
              initialText="Minha trajetória educacional, desde o ensino médio até a graduação, incluindo cursos complementares e especializações."
              className="text-xl text-gray-300"
              multiline
            />
          </div>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-yellow-600" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
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
                        src={edu.logo || "/placeholder.svg"}
                        alt={`${edu.institution} logo`}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-white text-xl">{edu.degree}</CardTitle>
                          <Badge
                            variant={edu.status === "Concluído" ? "default" : "secondary"}
                            className={
                              edu.status === "Concluído"
                                ? "bg-green-600 hover:bg-green-700"
                                : "bg-yellow-600 hover:bg-yellow-700"
                            }
                          >
                            {edu.status}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-yellow-400">
                            <GraduationCap size={16} />
                            <span className="font-medium">{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-4 text-gray-400 text-sm">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{edu.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div>
                      <EditableText initialText={edu.description} className="text-gray-300 leading-relaxed" multiline />
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <Award size={16} className="text-yellow-400" />
                        Destaques e Conquistas
                      </h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-yellow-400 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <BookOpen size={16} className="text-yellow-400" />
                        Principais Disciplinas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject) => (
                          <Badge
                            key={subject}
                            variant="outline"
                            className="border-yellow-400/50 text-yellow-400 text-xs"
                          >
                            {subject}
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

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Certificações e{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Cursos</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/10 border-yellow-400/30 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <h3 className="text-white font-semibold">{cert.title}</h3>
                      <p className="text-yellow-400 text-sm">{cert.issuer}</p>
                      <div className="flex justify-between items-center text-xs text-gray-400">
                        <span>{cert.date}</span>
                        <span>ID: {cert.credentialId}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Cursos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Complementares
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalCourses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/10 border-yellow-400/30 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <h3 className="text-white font-semibold leading-tight">{course.title}</h3>
                      <p className="text-yellow-400 text-sm">{course.institution}</p>
                      <div className="flex justify-between items-center text-xs text-gray-400">
                        <span>{course.duration}</span>
                        <span>{course.year}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Academic Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 border-yellow-400/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Resumo Acadêmico</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">1</div>
                  <div className="text-gray-300 text-sm">Graduação Concluída</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">6+</div>
                  <div className="text-gray-300 text-sm">Cursos Complementares</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">300+</div>
                  <div className="text-gray-300 text-sm">Horas de Estudo</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">4</div>
                  <div className="text-gray-300 text-sm">Anos de Formação</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
