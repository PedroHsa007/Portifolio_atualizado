"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { HomePage } from "@/components/pages/home-page"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HomePage />
      </motion.main>
    </div>
  )
}
