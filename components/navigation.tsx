"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { AdminToggle } from "@/components/admin-toggle"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "/", label: "Home" },
  //{ href: "/habilidades", label: "Habilidades" },
  { href: "/projetos", label: "Projetos" },
  { href: "/experiencia", label: "Experiência" },
  { href: "/formacao", label: "Formação" },
  { href: "/contato", label: "Contato" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-yellow-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-white">
            Pedro Henrique
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-yellow-400 ${
                  pathname === item.href ? "text-yellow-400" : "text-white/80"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400" layoutId="activeTab" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <AdminToggle />
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 text-sm font-medium transition-colors hover:text-yellow-400 ${
                  pathname === item.href ? "text-yellow-400" : "text-white/80"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-center space-x-4 pt-4">
              <ThemeToggle />
              <AdminToggle />
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
