"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Newspaper, Star, TrendingUp, Award } from "lucide-react"
import { motion } from "framer-motion"

const pressItems = [
  {
    title: "Brand Guidelines and Media Assets",
    publication: "Media",
    excerpt:
      "Color, typography, and usage rules.",
      url:"/Petresia_Brand_Strategy_v1.0.pdf",
    featured: false,
    category: "Launch",
    type: "hero", // Added card type for different layouts
  },
  {
    title: "Press Kit (ZIP)",
    publication: "Bundle with logo and guidelines.",
    url:"/press-kit.zip",
    excerpt: "",
    category: "Interview",
    featured: true,
    type: "spotlight", // Added spotlight card type
  },
  {
    title: "Logos",
    publication: "Wired",
    url:"/logo.png",
    excerpt:
      "Download the logo as PNG.",
    category: "Feature",
    featured: false,
    type: "standard", // Added standard card type
  },
  
]

export function PressSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Launch: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      Interview: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      Feature: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      Research: "bg-green-500/10 text-green-400 border-green-500/20",
      Funding: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      Analysis: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    }
    return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground border-border"
  }

  const getCategoryIcon = (category: string) => {
    const icons = {
      Launch: TrendingUp,
      Interview: Newspaper,
      Feature: Star,
      Research: Award,
      Funding: TrendingUp,
      Analysis: Award,
    }
    return icons[category as keyof typeof icons] || Newspaper
  }

  const renderCard = (item: (typeof pressItems)[0], index: number) => {
    const IconComponent = getCategoryIcon(item.category)

    if (item.type === "hero") {
      return (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          className="lg:col-span-2"
        >
          <Card className="group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-white/20 backdrop-blur-sm cursor-pointer overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-8 relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30">
                    <IconComponent className="w-5 h-5 text-purple-300" />
                  </div>
                  {/* <Badge
                    className={`${getCategoryColor(item.category)} bg-opacity-30 border-opacity-50 text-sm px-3 py-1`}
                  >
                    {item.category}
                  </Badge> */}
                </div>
                <Badge variant="outline" className="border-amber-400/50 text-amber-300 bg-amber-500/10">
                  Featured
                </Badge>
              </div>

              <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-purple-200 transition-colors leading-tight">
                {item.title}
              </h3>

              {/* <div className="flex items-center space-x-6 mb-4 text-sm">
                <span className="font-semibold text-white/80 text-base">{item.publication}</span>
                <div className="flex items-center space-x-2 text-white/60">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(item.date)}</span>
                </div>
              </div> */}

              <p className="text-white/70 mb-6 text-lg leading-relaxed">{item.excerpt}</p>

              <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                <a href={item.url} download={item.url} target="_blank" rel="noopener noreferrer">
                  <span className="font-medium mr-3">Download {item.title}</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )
    }

    if (item.type === "spotlight") {
      return (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          className="lg:col-span-2"
        >
          <Card className="group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 bg-slate-800/60 border-blue-400/20 backdrop-blur-sm cursor-pointer overflow-hidden">
            <CardContent className="p-6 flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <IconComponent className="w-4 h-4 text-blue-400" />
                    {/* <Badge className={`${getCategoryColor(item.category)} bg-opacity-20 border-opacity-30`}>
                      {item.category}
                    </Badge> */}
                  </div>
                  <Badge variant="outline" className="border-blue-400/30 text-blue-300">
                    Spotlight
                  </Badge>
                </div>

                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-200 transition-colors">
                  {item.title}
                </h3>

                {/* <div className="flex items-center space-x-4 mb-3 text-sm text-white/60">
                  <span className="font-medium text-white/80">{item.publication}</span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                </div> */}

                <p className="text-white/70 mb-4 leading-relaxed">{item.excerpt}</p>

                <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                 <a href={item.url}  download={item.url} target="_blank" rel="noopener noreferrer">
                  <span className="text-sm font-medium mr-2">Download {item.title}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                </div>
              </div>

              <div className="lg:w-32 flex lg:flex-col justify-center items-center gap-2 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-blue-300" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )
    }

    if (item.type === "compact") {
      return (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
        >
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-slate-800/40 border-white/10 backdrop-blur-sm cursor-pointer h-full">
            <CardContent className="p-5">
              {/* <div className="flex items-center justify-between mb-3">
                <Badge className={`${getCategoryColor(item.category)} bg-opacity-20 border-opacity-30 text-xs`}>
                  {item.category}
                </Badge>
                <IconComponent className="w-4 h-4 text-white/40 group-hover:text-white/60 transition-colors" />
              </div> */}

              <h3 className="font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors text-lg flex-grow-0">
                {item.title}
              </h3>

              {/* <div className="text-xs text-white/50 mb-3">
                <span className="font-medium text-white/70">{item.publication}</span>
                <span className="mx-2">•</span>
                <span>{formatDate(item.date)}</span>
              </div> */}

              <p className="text-white/60 text-sm leading-relaxed mb-3 line-clamp-2">{item.excerpt}</p>

              <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                <span className="text-xs font-medium mr-1">Read</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )
    }

    // Standard card type
    return (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
      >
        <Card className="group hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-400 hover:-translate-y-2 bg-slate-800/50 border-white/15 backdrop-blur-sm cursor-pointer h-full">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20">
                  <IconComponent className="w-4 h-4 text-purple-300" />
                </div>
                {/* <Badge className={`${getCategoryColor(item.category)} bg-opacity-20 border-opacity-30`}>
                  {item.category}
                </Badge> */}
              </div>
            </div>

            <h3 className="font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors text-xl flex-grow-0">
              {item.title}
            </h3>



            <p className="text-white/60 mb-4 text-pretty leading-relaxed flex-grow">{item.excerpt}</p>

            <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors mt-auto">
              <a href={item.url}  download={item.url} target="_blank" rel="noopener noreferrer">
                <span className="text-sm font-medium mr-2">Download {item.title}</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <section id="press" className="py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-24 lg:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 0.86, 0.39, 0.96] }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-white/[0.15] backdrop-blur-sm text-sm font-semibold uppercase tracking-wider text-purple-300"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <Newspaper className="h-4 w-4" />
            Media Coverage
          </motion.span>

          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold mt-8 mb-10 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <span className="bg-gradient-to-r from-white/95 via-purple-100/90 to-pink-100/90 bg-clip-text text-transparent block">
            Press
            </span>
            <span className="text-white/95 block">Kit</span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Logos and brand usage for media and partners. For inquiries: info@petresia.org
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {pressItems.map((item, index) => renderCard(item, index))}
        </div>
      </div>
    </section>
  )
}
