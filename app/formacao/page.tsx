"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { EducationPage } from "@/components/pages/education-page"

export default function Formacao() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <EducationPage />
      </motion.main>
    </div>
  )
}
