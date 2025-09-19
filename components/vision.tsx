"use client"

import { motion } from "framer-motion"
import { Sparkles, BarChart, Globe, Zap, Scale } from "lucide-react"
import { PinContainer } from "./ui/3d-pin"

const features = [
  {
    title: "Ethical Foundation",
    content:
      "AI models that respect human dignity, safety, and consent with transparent, auditable governance structures.",
    icon: Sparkles,
    stat: "100%",
    color: "from-indigo-600/40 via-indigo-500/30 to-rose-600/40",
    gradientBg: "from-[#0a0a0a]/95 via-[#0a0a0a]/90 to-[#0a0a0a]/95",
    description: "Guided by the Esperanza Charter",
  },
  {
    title: "Open Infrastructure",
    content:
      "Fully auditable compute orchestration with transparent governance enabling global collaboration and innovation.",
    icon: BarChart,
    stat: "99.9%",
    color: "from-cyan-600/40 via-emerald-500/30 to-teal-600/40",
    gradientBg: "from-[#0a0a0a]/95 via-[#0a0a0a]/90 to-[#0a0a0a]/95",
    description: "Built for transparency",
  },
  {
    title: "Global Access",
    content:
      "Developed in Africa, empowering creators worldwide with equitable access to cutting-edge AI capabilities.",
    icon: Globe,
    stat: "90+",
    color: "from-purple-600/40 via-pink-500/30 to-rose-600/40",
    gradientBg: "from-[#0a0a0a]/95 via-[#0a0a0a]/90 to-[#0a0a0a]/95",
    description: "For the world",
  },
]

export function MissionPage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
        duration: 0.8,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
        mass: 1,
      },
    },
  }

  const statVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 25,
      },
    },
  }

  return (
    <section className="relative py-32 min-h-screen overflow-hidden bg-black" id="mission">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-rose-500/[0.008]" />

      {/* Floating Elements */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-indigo-500/[0.008] rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-rose-500/[0.008] rounded-full blur-3xl translate-x-1/4" />
      <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-white/[0.02] rounded-full" />
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-white/[0.02] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-24 lg:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 0.86, 0.39, 0.96] }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600/10 to-rose-600/10 border border-white/[0.08] backdrop-blur-sm text-sm font-semibold uppercase tracking-wider text-indigo-400/80"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="h-4 w-4" />
            Esperanza Charter
          </motion.span>

          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold mt-8 mb-10 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <span className="bg-gradient-to-r from-white/80 via-indigo-100/70 to-rose-100/70 bg-clip-text text-transparent block">
              Ethical AI
            </span>
            <span className="text-white/80 block">Foundation</span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-white/40 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Petresia is more than technology—it's a commitment to building AI that serves humanity, guided by principles
            of transparency, equity, and human dignity.
          </motion.p>
        </motion.div>

        {/* Enhanced Features Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="group relative">
              <PinContainer
                title={feature.title}
                href="#"
                className="h-[24rem] lg:h-[28rem] xl:h-[32rem] w-full relative"
                containerClassName="w-full h-full"
              >
                <motion.div
                  className={`
                    flex flex-row items-center p-8 lg:p-10 tracking-tight text-white/80 w-full h-full
                    backdrop-blur-xl bg-gradient-to-br ${feature.gradientBg}
                    border-2 border-white/[0.04] rounded-3xl lg:rounded-[2rem]
                    shadow-[0_20px_60px_rgba(0,0,0,0.8)]
                    hover:shadow-[0_30px_80px_rgba(0,0,0,0.9)]
                    hover:border-white/[0.08]
                    transition-all duration-700 ease-out
                    overflow-hidden relative
                    before:absolute before:inset-0 before:bg-gradient-to-br before:${feature.color} before:opacity-0 before:blur-xl before:group-hover:opacity-[0.01] before:transition-all before:duration-700
                  `}
                  whileHover={{
                    y: -12,
                    scale: 1.03,
                    transition: { duration: 0.5, ease: [0.23, 0.86, 0.39, 0.96] },
                  }}
                >
                  {/* Enhanced Stat Badge */}
                  <motion.div
                    className={`
                      absolute top-6 right-6 lg:right-8 bg-gradient-to-r ${feature.color}
                      text-white/90 text-lg lg:text-xl font-bold px-6 py-3 rounded-full lg:rounded-2xl
                      shadow-2xl shadow-black/50
                      backdrop-blur-sm border border-white/[0.1]
                      before:absolute before:inset-0 before:rounded-full before:bg-white/5 before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-300
                    `}
                    variants={statVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="relative  z-10">{feature.stat}</span>
                  </motion.div>

                  {/* Enhanced Icon Container */}
                  <motion.div
                    className={`
                      relative w-20 h-20 lg:w-24 lg:h-24 mr-8 rounded-2xl lg:rounded-3xl
                      bg-gradient-to-r ${feature.color}
                      flex items-center justify-center
                      shadow-2xl shadow-black/50
                      backdrop-blur-sm
                      border border-white/[0.1]
                      overflow-hidden flex-shrink-0
                      after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-r after:from-white/10 after:to-transparent after:opacity-0 after:group-hover:opacity-100 after:transition-opacity after:duration-500
                    `}
                    initial={{ rotateY: -180, scale: 0.8 }}
                    animate={{ rotateY: 0, scale: 1 }}
                    whileHover={{
                      rotateY: 8,
                      scale: 1.15,
                      y: -4,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    }}
                    transition={{ duration: 0.6, ease: [0.23, 0.86, 0.39, 0.96] }}
                  >
                    <motion.div
                      className="relative z-10 p-2 lg:p-3"
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 360, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 2,
                        ease: "linear",
                      }}
                    >
                      <feature.icon className="h-10 w-10 lg:h-12 lg:w-12 text-white/90 drop-shadow-2xl" />
                    </motion.div>

                    {/* Icon Shine */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                  </motion.div>

                  {/* Enhanced Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="text-left">
                      <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white/90 mb-4 tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-white/60 text-base lg:text-lg xl:text-xl leading-relaxed">{feature.content}</p>
                      <motion.p
                        className="text-indigo-300/60 text-sm lg:text-base font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {feature.description}
                      </motion.p>
                    </div>

                    {/* Enhanced Bottom Accent */}
                    <motion.div
                      className="mt-6 pt-4 border-t border-white/[0.04] flex items-center gap-3"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Scale className="h-4 w-4 text-white/40" />
                      <span className="text-sm lg:text-base text-white/30 font-medium tracking-wide">
                        Charter Compliant
                      </span>
                      <motion.div
                        className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </div>

                  {/* Enhanced Floating Elements */}
                  <motion.div
                    className="absolute top-8 left-8 w-2 h-2 lg:w-3 lg:h-3 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 blur-sm"
                    animate={{
                      y: [0, -8, 0],
                      opacity: [0, 0.6, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.5 + 1,
                    }}
                  />

                  <motion.div
                    className="absolute bottom-8 right-8 w-2 h-2 lg:w-2 lg:h-2 bg-gradient-to-r from-indigo-400/30 to-rose-400/30 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      y: [0, 6, 0],
                      opacity: [0, 0.5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.5 + 1.5,
                    }}
                  />

                  {/* Card Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/2 to-rose-500/2 opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0, 0.05, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: 0.5,
                    }}
                  />
                </motion.div>
              </PinContainer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
