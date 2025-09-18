"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowUp, Send, Users } from "lucide-react"
import { motion } from "framer-motion"
import { toast } from "sonner"

export function JoinUsSection() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [emailSubmitted, setEmailSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    joinType: "",
    message: "",
    agreement: false,
  })


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(null);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
   
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    setLoading(true)
    
    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();
     

      if (response.ok) {
        setEmailSubmitted(true);
        toast("Your message has been sent.")
      } else {
        toast("Uh oh! Something went wrong. There was a problem while sending your message.", {
          action: {
            label: "Try again",
            onClick: () => setError(null),
          },
        })
        setError(resData.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("Network error. Please check your connection.");
    }
    finally{
      setLoading(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section id="join-us" className="py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-24 lg:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 0.86, 0.39, 0.96] }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-white/[0.15] backdrop-blur-sm text-sm font-semibold uppercase tracking-wider text-green-300"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <Users className="h-4 w-4" />
            Community
          </motion.span>

          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold mt-8 mb-10 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <span className="bg-gradient-to-r from-white/95 via-green-100/90 to-emerald-100/90 bg-clip-text text-transparent block">
              Join Us in
            </span>
            <span className="text-white/95 block">Building the Future</span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Partner with Petresia — contribute research, donate compute, volunteer, or collaborate on deployments. We review every message.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Card className="bg-slate-800/50 border-white/10 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-white">
                      Full name <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="bg-slate-700/50 border-white/20 text-white placeholder:text-white/40"
                      required
                    />
                    <p className="text-xs text-white/50">Use your real name so we can address you properly.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@organization.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-700/50 border-white/20 text-white placeholder:text-white/40"
                      required
                    />
                    <p className="text-xs text-white/50">We'll only use this to respond to your inquiry.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="joinType" className="text-white">
                      How would you like to join? <span className="text-red-400">*</span>
                    </Label>
                    <Select
                      value={formData.joinType}
                      onValueChange={(value) => setFormData({ ...formData, joinType: value })}
                    >
                      <SelectTrigger className="bg-slate-700/50 border-white/20 text-white">
                        <SelectValue placeholder="Select an option..." />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-white/20">
                        <SelectItem value="researcher">Contribute Research</SelectItem>
                        <SelectItem value="compute">Donate Compute</SelectItem>
                        <SelectItem value="volunteer">Volunteer</SelectItem>
                        <SelectItem value="partner">Partnership</SelectItem>
                        <SelectItem value="developer">Developer</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-white">
                      Organization (optional)
                    </Label>
                    <Input
                      id="organization"
                      placeholder="Company, university, or group"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="bg-slate-700/50 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your interests, skills, and how you'd like to help..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-slate-700/50 border-white/20 text-white placeholder:text-white/40 min-h-[120px] resize-none"
                    rows={5}
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreement"
                    checked={formData.agreement}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreement: checked as boolean })}
                    className="mt-1 border-white/20"
                  />
                  <Label htmlFor="agreement" className="text-sm text-white/60 leading-relaxed">
                    I agree that Petresia may contact me about this inquiry.
                  </Label>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-black flex-1 group"
                    disabled={!formData.agreement}
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Submit
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={scrollToTop}
                    className="border-white/20 text-white/80 hover:bg-white/10 bg-transparent"
                  >
                    <ArrowUp className="w-5 h-5 mr-2" />
                    Back to top
                  </Button>
                </div>

                <p className="text-xs text-white/50 text-center pt-4">
                  We respect your privacy. Your info will only be used to contact you about Petresia.
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
