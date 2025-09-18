"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Code,
  BookOpen,
  Download,
  ExternalLink,
  Archive,
  Quote,
  Copy,
  CheckCircle,
  FolderOpen,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { url } from "inspector";
import Link from "next/link";

const resources = [
  {
    icon: FileText,
    title: "Petresia Manifesto",
    description: "Our guiding principles and values",
    type: "Document",
    url: "https://www.sreglobal.org/petresia/assets/Petresia_Manifesto_v1.0_Updated.pdf",
    // size: "2.3 MB",
    format: "PDF",
    featured: true,
  },
  {
    icon: Code,
    title: "Day One Declaration",
    description: "Immediate commitments to transparency, safety, and fairness.",
    type: "Technical",
    url: "https://www.sreglobal.org/petresia/assets/Petresia_DayOne_Declaration.pdf",
    format: "PDF",
    featured: false,
  },
  {
    icon: BookOpen,
    title: "Whitepaper",
    description: "Technical protocol and long-horizon vision.",
    type: "Research",
    url: "https://www.sreglobal.org/petresia/assets/Petresia_Whitepaper_v1.0_Cosmic.pdf",
    format: "ZIP",
    featured: false,
  },
];

const citationFormats = [
  {
    name: "APA (7th)",
    format: "apa",
    citation: `Petresia Council, & S.R.E Global. (2025, September). *Freeing AI from corporate monopolies: The Petresia Protocol for decentralized, verifiable, and human-centered intelligence* (Version 1.0 — Cosmic Intelligence Extension) [Whitepaper]. Petresia Council / S.R.E Global. https://www.sreglobal.org/petresia/assets/Petresia_Whitepaper_v1.0_Cosmic.pdf`,
  },
  {
    name: "MLA (9th)",
    format: "mla",
    citation: `Petresia Council, and S.R.E Global. *Freeing AI from Corporate Monopolies: The Petresia Protocol for Decentralized, Verifiable, and Human-Centered Intelligence.* Version 1.0 — Cosmic Intelligence Extension, Sept. 2025, Petresia Council / S.R.E Global, https://www.sreglobal.org/petresia/assets/Petresia_Whitepaper_v1.0_Cosmic.pdf.`,
  },
  {
    name: "IEEE",
    format: "ieee",
    citation: `Petresia Council and S.R.E Global, "Freeing AI from Corporate Monopolies: The Petresia Protocol for Decentralized, Verifiable, and Human-Centered Intelligence," Whitepaper, Version 1.0 — Cosmic Intelligence Extension, Sep. 2025. [Online]. Available: https://www.sreglobal.org/petresia/assets/Petresia_Whitepaper_v1.0_Cosmic.pdf`,
  },
  {
    name: "BibTeX",
    format: "bibtex",
    citation: `@misc{Petresia2025Cosmic,
  title        = {Freeing AI from Corporate Monopolies: The Petresia Protocol for Decentralized, Verifiable, and Human-Centered Intelligence},
  author       = {{Petresia Council} and {S.R.E Global}},
  year         = {2025},
  month        = sep,
  version      = {1.0},
  note         = {Cosmic Intelligence Extension},
  url          = {https://www.sreglobal.org/petresia/assets/Petresia_Whitepaper_v1.0_Cosmic.pdf},
  urldate      = {2025-09-17},
  institution  = {Petresia Council / S.R.E Global},
  keywords     = {Decentralized AI, Verifiable Compute, Ethical AI Governance, Planetary Supercomputer, Esperanza Charter}
}`,
  },
];

export function ResourcesSection() {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  const copyToClipboard = async (text: string, format: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedFormat(format);
      setTimeout(() => setCopiedFormat(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section
      id="resources"
      className="py-24 lg:py-32 bg-black relative overflow-hidden"
    >
      {/* Background Elements */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-24 lg:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 0.86, 0.39, 0.96] }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-600/20 to-orange-600/20 border border-white/[0.15] backdrop-blur-sm text-sm font-semibold uppercase tracking-wider text-amber-300"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <Archive className="h-4 w-4" />
            Knowledge Base
          </motion.span>

          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold mt-8 mb-10 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <span className="bg-gradient-to-r from-white/95 via-amber-100/90 to-orange-100/90 bg-clip-text text-transparent block">
              Resources &
            </span>
            <span className="text-white/95 block">Documentation</span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Access our comprehensive collection of documents, research papers,
            and development tools to understand and contribute to the Petresia
            ecosystem.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card
                className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-slate-800/50 border-white/10 backdrop-blur-sm relative overflow-hidden ${
                  resource.featured ? "ring-2 ring-amber-500/20" : ""
                }`}
              >
                {resource.featured && (
                  <Badge className="absolute top-4 right-4 bg-amber-500 text-black">
                    Featured
                  </Badge>
                )}

                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                    <resource.icon className="w-8 h-8 text-amber-400" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {resource.title}
                  </h3>
                  <p className="text-white/60 mb-4 text-pretty leading-relaxed">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="outline"
                      className="border-white/20 text-white/80"
                    >
                      {resource.type}
                    </Badge>
                  </div>

                  <div className="flex space-x-2">
                    <Link
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      passHref
                    >
                      <Button
                        size="sm"
                        className="flex-1 cursor-pointer bg-amber-500 hover:bg-amber-600 text-black"
                      >
                        <FolderOpen className="w-4 h-4 mr-2" />
                        Open Document
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white/80 hover:bg-white/10 bg-transparent"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 0.86, 0.39, 0.96] }}
        >
          <div className="text-center mb-16">
            <motion.span
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-white/[0.15] backdrop-blur-sm text-sm font-semibold uppercase tracking-wider text-purple-300"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <Quote className="h-4 w-4" />
              Academic Citations
            </motion.span>

            <motion.h3
              className="text-4xl md:text-5xl lg:text-6xl font-bold mt-8 mb-6 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <span className="bg-gradient-to-r from-white/95 via-purple-100/90 to-blue-100/90 bg-clip-text text-transparent">
                Cite Us
              </span>
            </motion.h3>

            <motion.p
              className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              If you reference Petresia in academic or professional work, use
              one of the styles below or download the BibTeX.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {citationFormats.map((format, index) =>
              index === 3 ? (
                <motion.div
                  key={format.format}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="group hover:shadow-2xl transition-all duration-300 bg-slate-800/50 border-white/10 backdrop-blur-sm relative overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                          {format.name}
                        </Badge>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-white/80 hover:bg-white/10 bg-transparent"
                          onClick={() =>
                            copyToClipboard(format.citation, format.format)
                          }
                        >
                          {copiedFormat === format.format ? (
                            <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4 mr-2" />
                          )}
                          {copiedFormat === format.format ? "Copied!" : "Copy"}
                        </Button>
                      </div>

                      <div className="bg-slate-900/50 rounded-lg p-4 border border-white/5">
                        <pre className="text-sm text-white/80 whitespace-pre-wrap font-mono leading-relaxed">
                          {format.citation}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  key={format.format}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="group hover:shadow-2xl transition-all duration-300 bg-slate-800/50 border-white/10 backdrop-blur-sm relative overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                          {format.name}
                        </Badge>
                      </div>

                      <div className=" rounded-md p-4 border-white/5">
                        <span className="text-sm text-white/80 whitespace-pre-wrap font-mono leading-relaxed">
                          {format.citation}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            )}
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="https://www.sreglobal.org/petresia/assets/Petresia_Whitepaper_v1.0_Cosmic.bib"
              download="Petresia_Whitepaper_v1.0_Cosmic.bib"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="cursor-pointer hover:bg-gray-600 text-white">
                <Download className="w-4 h-4 mr-2" />
                Download BibTeX
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
