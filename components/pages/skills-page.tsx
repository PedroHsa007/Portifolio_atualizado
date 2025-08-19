"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { EditableText } from "@/components/editable-text"
import { AdminPanel } from "@/components/admin-panel"
import { useAdmin } from "@/components/admin-provider"
import { Code, Database, BarChart3, Wrench, Brain, Server } from "lucide-react"

const iconMap = {
  Code,
  Database,
  BarChart3,
  Wrench,
  Brain,
  Server,
}

const initialSkillCategories = [
  {
    title: "Desenvolvimento",
    iconName: "Code",
    skills: [
      { name: "VBA", level: 90 },
      { name: "React", level: 85 },
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    title: "Banco de Dados",
    iconName: "Database",
    skills: [
      { name: "Access", level: 95 },
      { name: "SQL Server", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "PostgreSQL", level: 70 },
    ],
  },
  {
    title: "Business Intelligence",
    iconName: "BarChart3",
    skills: [
      { name: "Power BI", level: 90 },
      { name: "Excel Avançado", level: 95 },
      { name: "SAP GUI", level: 85 },
      { name: "Tableau", level: 70 },
    ],
  },
  {
    title: "Ferramentas",
    iconName: "Wrench",
    skills: [
      { name: "Pacote Office", level: 95 },
      { name: "Git/GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 75 },
    ],
  },
  {
    title: "Soft Skills",
    iconName: "Brain",
    skills: [
      { name: "Análise de Dados", level: 90 },
      { name: "Resolução de Problemas", level: 95 },
      { name: "Comunicação", level: 85 },
      { name: "Trabalho em Equipe", level: 90 },
    ],
  },
  {
    title: "Suporte Técnico",
    iconName: "Server",
    skills: [
      { name: "Troubleshooting", level: 90 },
      { name: "Automação de Processos", level: 85 },
      { name: "Documentação Técnica", level: 80 },
      { name: "Treinamento de Usuários", level: 85 },
    ],
  },
]

export function SkillsPage() {
  const { loadData, saveData } = useAdmin()
  const [skillCategories, setSkillCategories] = useState(initialSkillCategories)

  useEffect(() => {
    const savedSkills = loadData("skills")
    if (savedSkills) {
      setSkillCategories(savedSkills)
    }
  }, [loadData])

  const handleSaveSkills = (newSkills: any) => {
    setSkillCategories(newSkills)
    saveData("skills", newSkills)
  }

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
            Minhas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Habilidades
            </span>
          </h1>
          <div className="max-w-2xl mx-auto">
            <EditableText
              initialText="Aqui estão as principais tecnologias e habilidades que domino, desenvolvidas ao longo da minha jornada acadêmica e profissional."
              className="text-xl text-gray-300"
              multiline
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = iconMap[category.iconName as keyof typeof iconMap] || Code
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                <Card className="bg-black/40 border-yellow-500/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-white">
                      <IconComponent className="text-yellow-400" size={24} />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                          <span className="text-yellow-400 text-sm">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2 bg-gray-700" />
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 border-yellow-400/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Sempre Aprendendo</h3>
              <div className="max-w-2xl mx-auto">
                <EditableText
                  initialText="Estou constantemente me atualizando com as últimas tecnologias e tendências do mercado. Atualmente focado em aprofundar conhecimentos em Cloud Computing, Machine Learning e arquiteturas modernas de software."
                  className="text-gray-300 leading-relaxed"
                  multiline
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <AdminPanel title="Habilidades" data={skillCategories} onSave={handleSaveSkills} type="skills" />
      </div>
    </div>
  )
}
