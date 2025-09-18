"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ShimmerButton } from "./ui/shimmer-button"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Mission", href: "#mission" },
  { name: "Team", href: "#team" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Resources", href: "#resources" },
  { name: "Press", href: "#press" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.2, ease: [0.42, 0, 0.58, 1] } // cubic-bezier for easeInOut
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3, ease: [0.23, 0.86, 0.39, 0.96] }
    }
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.1 + i * 0.05,
        ease: [0.42, 0, 0.58, 1] // cubic-bezier for easeInOut
      }
    })
  }

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        backdrop-blur-xl
        ${
          isScrolled 
            ? "bg-[#030303]/95 border-b border-white/[0.15] shadow-[0_4px_20px_rgba(0,0,0,0.3)]" 
            : "bg-[#030303]/80 border-b border-white/[0.08]"
        }
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
         <div className="flex items-center space-x-3 group">
  {/* Logo Container */}
  <motion.div 
    className="relative"
  >
    {/* Main Logo Container */}
   <div 
  className={`  `}
>
  {/* Logo Image */}
  <motion.div
    className="relative z-10"
  >
    <Image
      src="/logo.png"
      alt="Petresia Logo"
      width={65}
      height={50}
      className={`
        w-full h-full object-contain
      `}
      priority
    />
  </motion.div>

  {/* Enhanced Floating Particles */}
  <motion.div
    className="absolute top-1 right-1 w-2.5 h-2.5 bg-gradient-to-br from-indigo-400/70 to-rose-400/70 rounded-full opacity-0 blur-[0.5px]"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 0.8, 0], 
      scale: [0, 1.2, 0],
      x: [0, 3, 0],
      y: [0, -3, 0]
    }}
    transition={{ 
      duration: 2, 
      repeat: Infinity, 
      delay: 1.5,
      ease: "easeInOut"
    }}
  />
  
  <motion.div
    className="absolute bottom-1 left-1 w-2 h-2 bg-gradient-to-br from-rose-400/70 to-cyan-400/70 rounded-full opacity-0 blur-[0.5px]"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 0.7, 0], 
      scale: [0, 1.1, 0],
      x: [0, -2, 0],
      y: [0, 2, 0]
    }}
    transition={{ 
      duration: 2.5, 
      repeat: Infinity, 
      delay: 2,
      ease: "easeInOut"
    }}
  />

  {/* Additional subtle glow effect */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl opacity-0"
    initial={{ opacity: 0 }}
    whileHover={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  />
</div>

    {/* Outer Glow Ring */}
    <motion.div
      className="
        absolute inset-0 rounded-xl
        bg-gradient-to-r from-indigo-500/20 via-transparent to-rose-500/20
        blur-xl opacity-0
        group-hover:opacity-100 transition-opacity duration-500
      "
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.3 }}
      whileHover={{ scale: 1.2, opacity: 0.5 }}
      transition={{ duration: 0.4 }}
    />

    {/* Pulsing Ring */}
    {/* <motion.div
      className="
        absolute inset-0 rounded-xl border-2 border-transparent
        bg-gradient-to-r from-indigo-400/30 to-rose-400/30
        opacity-0
      "
      animate={{ 
        scale: [0.9, 1.4, 0.9],
        opacity: [0.3, 0, 0.3]
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity, 
        ease: "easeInOut"
      }} */}
    

    {/* Shine Effect */}
    {/* <motion.div
      className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/30 to-rose-500/30 opacity-0"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
    /> */}
  </motion.div>

  {/* Text */}
  <motion.span 
    className="
      text-xl font-bold 
      bg-gradient-to-r from-white/95 via-indigo-100/90 to-rose-100/90
      bg-clip-text text-transparent
      tracking-tight relative
      after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 
      after:bg-gradient-to-r after:from-indigo-400 after:via-white after:to-rose-400
      after:transition-all after:duration-300 after:opacity-0
      group-hover:after:w-full group-hover:after:opacity-100
    "
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 0.86, 0.39, 0.96] }}
  >
    PETRESIA
  </motion.span>
</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <AnimatePresence>
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={navItemVariants}
                  custom={index}
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    relative inline-flex h-10 items-center justify-center gap-1.5
                    px-4 py-2 text-sm font-medium transition-all duration-300
                    rounded-xl backdrop-blur-sm
                    ${
                      activeSection === item.href.substring(1)
                        ? "bg-white/[0.15] border border-white/[0.25] shadow-[0_4px_20px_rgba(255,255,255,0.1)] text-white/95"
                        : "text-white/70 hover:text-white/90 hover:bg-white/[0.08] border border-transparent"
                    }
                    hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Active indicator */}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-400/20 via-white/10 to-rose-400/20"
                      layoutId="activeIndicator"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 rounded-full bg-gradient-to-r from-indigo-400 via-white to-rose-400 opacity-0"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <motion.button 
              className="
                relative h-10 px-5 py-2.5 text-sm font-semibold 
                rounded-xl backdrop-blur-sm bg-white/[0.05] 
                border border-white/[0.15] text-white/80
                hover:bg-white/[0.1] hover:text-white/95 hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)]
                transition-all duration-300 hover:scale-105
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
              "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href='#join-us' >
                
              </Link>
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-transparent opacity-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button> */}
             <Link href='#join-us' >
             <ShimmerButton>
                  Join Us Today
                {/* <span className="relative z-10">Join Us Today</span> */}
                </ShimmerButton>
             </Link>

            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="
                relative h-10 px-6 py-2.5 text-sm font-semibold
                bg-gradient-to-r from-indigo-600/90 to-rose-600/90
                hover:from-indigo-500/95 hover:to-rose-500/95
                text-white border border-white/[0.2]
                backdrop-blur-sm shadow-[0_4px_20px_rgba(79,70,229,0.3)]
                hover:shadow-[0_8px_25px_rgba(79,70,229,0.4)]
                transition-all duration-300 hover:scale-105 rounded-xl
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
              "
              onClick={() => scrollToSection("#join-us")}
            >
              <span className="relative z-10">Join Us Today</span>
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              aria-label="Toggle Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="
                relative flex h-10 w-10 items-center justify-center rounded-xl
                backdrop-blur-sm bg-white/[0.05] border border-white/[0.15]
                text-white/80 hover:bg-white/[0.1] hover:text-white/95
                hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)]
                transition-all duration-300 hover:scale-110
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
              "
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: 180, scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="
                md:hidden overflow-hidden
                bg-[#030303]/95 backdrop-blur-xl
                border-t border-white/[0.15]
                shadow-[0_8px_32px_rgba(0,0,0,0.4)]
              "
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                {/* Mobile Navigation Items */}
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      variants={navItemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                      onClick={() => scrollToSection(item.href)}
                      className={`
                        group relative flex w-full items-center h-12
                        px-4 rounded-xl text-base font-medium transition-all duration-300
                        ${
                          activeSection === item.href.substring(1)
                            ? "bg-white/[0.1] border border-white/[0.2] text-white/95 shadow-[0_4px_20px_rgba(255,255,255,0.08)]"
                            : "text-white/70 hover:text-white/90 hover:bg-white/[0.05] border border-transparent"
                        }
                        hover:pl-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                      `}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">{item.name}</span>
                      
                      {/* Mobile active indicator */}
                      {activeSection === item.href.substring(1) && (
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-400/15 via-white/5 to-rose-400/15"
                          layoutId="mobileActiveIndicator"
                          initial={false}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      
                      {/* Mobile accent line */}
                      <motion.div
                        className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-gradient-to-b from-indigo-400 via-white to-rose-400 opacity-0"
                        initial={{ width: 0 }}
                        whileHover={{ width: 3, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  ))}
                </div>

                {/* Mobile CTAs */}
                <div className="pt-6 border-t border-white/[0.1] space-y-3">
                  <motion.button 
                    className="
                      block w-full h-12 px-4 py-3 text-base font-medium
                      rounded-xl backdrop-blur-sm bg-white/[0.05] 
                      border border-white/[0.15] text-white/80
                      hover:bg-white/[0.1] hover:text-white/95 
                      hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)]
                      transition-all duration-300 hover:pl-6
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                    "
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link href='#join-us' >
                    <span className="relative z-10">Join Us Today</span>
                    </Link>
                    <motion.div
                      className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-gradient-to-b from-white/30 to-transparent opacity-0"
                      initial={{ width: 0 }}
                      whileHover={{ width: 3, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                  
                  {/* <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    <Button
                      onClick={() => scrollToSection("#join-us")}
                      className="
                        w-full h-12 text-base font-semibold
                        bg-gradient-to-r from-indigo-600/95 to-rose-600/95
                        hover:from-indigo-500/100 hover:to-rose-500/100
                        text-white border border-white/[0.2]
                        backdrop-blur-sm shadow-[0_8px_25px_rgba(79,70,229,0.3)]
                        hover:shadow-[0_12px_30px_rgba(79,70,229,0.4)]
                        transition-all duration-300 rounded-xl
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                      "
                      hover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">Join Us Today</span>
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Button>
                  </motion.div> */}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}