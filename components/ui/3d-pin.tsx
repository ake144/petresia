"use client"
import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode
  title?: string
  href?: string
  className?: string
  containerClassName?: string
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={cn("relative group/pin", containerClassName)}>
      <motion.div
        className="relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{ perspective: "1000px" }}
      >
        {/* Main Card */}
        <motion.div
          className={cn(
            "relative w-full h-full transform-gpu transition-all duration-700 ease-out",
            "group-hover/pin:scale-[1.02] group-hover/pin:rotate-x-[5deg]",
            className,
          )}
          animate={{
            rotateX: isHovered ? 5 : 0,
            scale: isHovered ? 1.02 : 1,
            y: isHovered ? -8 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.23, 0.86, 0.39, 0.96],
          }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-3xl blur" />
          <div
            className={cn(
              "relative z-10 w-full h-full p-0",
              "backdrop-blur-xl rounded-3xl border border-white/[0.04]",
              "shadow-[0_20px_60px_rgba(0,0,0,0.6)]",
              "group-hover/pin:shadow-[0_30px_80px_rgba(0,0,0,0.7)]",
              "group-hover/pin:border-white/[0.08]",
              "transition-all duration-700",
            )}
          >
            {children}
          </div>
        </motion.div>

        {/* Enhanced Shadow */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-black/70 to-transparent opacity-0 group-hover/pin:opacity-100"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* Enhanced Pin Effect */}
      <PinPerspective title={title} href={href} isHovered={isHovered} />
    </div>
  )
}

interface PinPerspectiveProps {
  title?: string
  href?: string
  isHovered: boolean
}

export const PinPerspective = ({ title, href, isHovered }: PinPerspectiveProps) => {
  return (
    <motion.div
      className={cn(
        "pointer-events-none absolute inset-0 z-20 opacity-0 group-hover/pin:opacity-100 transition-opacity duration-500",
        "w-full h-full",
      )}
      animate={{ opacity: isHovered ? 1 : 0 }}
    >
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-indigo-500/[0.015] shadow-[0_0_40px_rgba(99,102,241,0.05)]"
          style={{ perspective: "1000px" }}
          animate={{
            rotateX: isHovered ? 15 : 0,
            scale: isHovered ? 1.1 : 1,
            opacity: isHovered ? 1 : 0.3,
          }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-rose-500/[0.015] shadow-[0_0_40px_rgba(239,68,68,0.05)]"
          animate={{
            rotateX: isHovered ? -10 : 0,
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 1 : 0.3,
          }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />

        {/* Title Bar */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 mt-4 px-8 py-3"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <motion.a
            href={href || "/"}
            target="_blank"
            className="relative flex items-center justify-center gap-3 bg-black/90 backdrop-blur-sm rounded-2xl px-8 py-3 border border-white/[0.05] shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-black/60 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            rel="noreferrer"
          >
            <span className="text-white/80 text-base font-bold tracking-wide">{title || "Learn More"}</span>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-indigo-400/30 via-white/20 to-rose-400/30 rounded-full opacity-0"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>

        {/* Enhanced Pin Elements */}
        <motion.div
          className="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 bg-gradient-to-b from-transparent via-indigo-500/20 to-indigo-500/5 w-1 h-24 rounded-full blur-sm opacity-0 group-hover/pin:opacity-100"
          animate={{ height: isHovered ? 48 : 24 }}
          transition={{ duration: 0.4 }}
        />

        <motion.div
          className="absolute right-1/2 bottom-1/2 translate-x-[1.5px] translate-y-1/2 bg-indigo-400/40 w-3 h-3 rounded-full z-40 blur-sm opacity-0 group-hover/pin:opacity-100"
          animate={{ scale: isHovered ? 1.2 : 1 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute right-1/2 bottom-1/2 translate-x-[0.5px] translate-y-1/2 bg-indigo-300/60 w-1.5 h-1.5 rounded-full z-50"
          animate={{ scale: isHovered ? [1, 1.3, 1] : 1 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
        />
      </div>
    </motion.div>
  )
}
