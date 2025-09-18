"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
// Update the import path to the correct relative location if needed
// import { CanvasRevealEffect } from "../components/ui/canvas-reveal-effect"
import {
  Users,
  Brain,
  Code,
  Zap,
  Shield,
  Globe,
  Scale,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

const teamSections = [
  {
    title: "Team",
    subtitle: "Distributed Coalition",
    description:
      "We are a distributed coalition of researchers, builders, and partners across continents. Add your name—join the founding contributors below.",
    icon: Users,
    color: "from-indigo-500 via-indigo-400 to-rose-500",
    gradientBg: "from-[#030303]/80 via-[#030303]/60 to-[#030303]/80",
    canvasColors: [
      [99, 102, 241],
      [239, 68, 68],
    ],
    canvasSpeed: 4.5,
    stat: "50+",
  },
  {
    title: "Research",
    subtitle: "Scientific Foundation",
    description:
      "Alignment, safety, and interpretability research ensuring AI systems respect human values and ethical principles.",
    icon: Brain,
    color: "from-cyan-500 via-emerald-400 to-teal-500",
    gradientBg: "from-[#030303]/80 via-[#030303]/60 to-[#030303]/80",
    canvasColors: [
      [34, 197, 94],
      [6, 182, 212],
    ],
    canvasSpeed: 3.8,
    stat: "20+",
  },
  {
    title: "Protocol",
    subtitle: "Technical Backbone",
    description:
      "Consensus mechanisms, verification protocols, and security infrastructure for a robust, transparent AI ecosystem.",
    icon: Code,
    color: "from-purple-500 via-pink-400 to-violet-500",
    gradientBg: "from-[#030303]/80 via-[#030303]/60 to-[#030303]/80",
    canvasColors: [
      [168, 85, 247],
      [147, 51, 234],
    ],
    canvasSpeed: 3.2,
    stat: "15+",
  },
];

export function Teams() {
  return (
    <div className="relative py-32 min-h-screen overflow-hidden bg-[#030303]" id='team'>

    <div className="absolute inset-0 bg-gradient-to-br from-[#030303] via-[#030303]/50 to-rose-500/[0.01]" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-indigo-500/[0.01] rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-rose-500/[0.01] rounded-full blur-3xl translate-x-1/4" />
      <div className="absolute top-1/2 left-10 w-24 h-24 border-2 border-white/[0.03] rounded-full" />
      <div className="absolute bottom-1/2 right-10 w-20 h-20 border border-white/[0.03] rounded-full" />

      {/* Header Section */}{" "}
      <motion.div
        className="text-center mb-24 lg:mb-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.23, 0.86, 0.39, 0.96] }}
      >
        {" "}
        <motion.span
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600/20 via-rose-600/20 to-indigo-600/20 border-2 border-white/[0.1] backdrop-blur-xl text-sm font-semibold uppercase tracking-wider text-indigo-300 shadow-lg shadow-black/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
          }}
        >
          {" "}
          <Scale className="h-4 w-4" /> Open Protocol{" "}
        </motion.span>{" "}
        <motion.h2
          className="text-5xl md:text-7xl lg:text-8xl font-bold mt-8 mb-10 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {" "}
          <span className="bg-gradient-to-r from-white/95 via-indigo-100/90 to-rose-100/90 bg-clip-text text-transparent block">
            {" "}
            Our Foundation{" "}
          </span>{" "}
          <span className="text-white/95 block">Teams</span>{" "}
        </motion.h2>{" "}
        <motion.p
          className="text-xl md:text-2xl text-white/60 max-w-5xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {" "}
          Petresia is an open, verifiable protocol that organizes donated
          compute for ethical AI workloads—prioritized by the Esperanza Charter
          and stewarded with transparency, fairness, and global access.{" "}
        </motion.p>{" "}
      </motion.div>
      <div className="py-3 mt-14 flex flex-col lg:flex-row items-center justify-center bg-black w-full gap-4 mx-auto px-8">
        <Card title="Protocol" name="Protocol">
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
          <p className="text-gray-400 mt-4">
            Consensus, verification, security.
          </p>
        </Card>

        <Card title="Deployments" name="Deployments">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <p className="text-gray-400 mt-4">
            Real-world projects, partners, pilots.
          </p>
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/90" />
        </Card>

        <Card title="Research" name="Research">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
          <p className="text-gray-400 mt-4">
            Alignment, safety, interpretability.
          </p>
        </Card>
      </div>
    </div>
  );
}

const Card = ({
  title,
  name,
  children,
}: {
  title: string;
  name: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center text-white text-4xl group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {name}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};


// const AceternityIcon = () => {
//   return (
//     <svg
//       width="66"
//       height="65"
//       viewBox="0 0 66 65"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
//     >
//       <path
//         d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
//         stroke="currentColor"
//         strokeWidth="15"
//         strokeMiterlimit="3.86874"
//         strokeLinecap="round"
//         style={{ mixBlendMode: "darken" }}
//       />
//     </svg>
//   );
// };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
