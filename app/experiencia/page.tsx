"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { ExperiencePage } from "@/components/pages/experience-page"

export default function Experiencia() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <ExperiencePage />
      </motion.main>
    </div>
  )
}
