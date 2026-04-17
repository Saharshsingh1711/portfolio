"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

const portfolioItems = [
  {
    title: "AI Debate Arena",
    description: "A real-time AI-powered debating platform with dynamic character personalities.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=800&fit=crop&q=80",
    size: "large", 
  },
  {
    title: "DevFlow",
    description: "Developer-focused project management system with integrated CI/CD monitoring.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&q=80",
    size: "small",
  },
  {
    title: "Neural Mesh",
    description: "Interactive 3D visualization of neural network architectures using Three.js.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=600&fit=crop&q=80",
    size: "small",
  },
  {
    title: "Crypto Pulse",
    description: "High-frequency real-time crypto analytics dashboard with predictive modeling.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=600&fit=crop&q=80",
    size: "small",
  },
  {
    title: "EcoSphere",
    description: "E-commerce platform for sustainable tech products with custom inventory logic.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop&q=80",
    size: "wide", 
  },
]

export default function BentoProjects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container px-4 md:px-6 border border-white/5 rounded-[2.5rem] bg-white/[0.01] backdrop-blur-3xl"
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-full bg-white/5 border border-white/10 px-4 py-1 text-sm text-primary-glow font-medium"
            >
              Portfolio
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              Selected Engineering Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto max-w-[900px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              A deep-dive into scalable architectures, algorithmic complexity, and high-performance frontend systems.
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-7xl gap-4 py-12 md:grid-cols-4 md:grid-rows-2 lg:gap-6"
        >
          {portfolioItems.map((item, index) => {
            let gridClass = ""
            if (item.size === "large") gridClass = "md:col-span-2 md:row-span-2 h-[400px] md:h-auto"
            else if (item.size === "wide") gridClass = "md:col-span-2 h-[200px] md:h-auto"
            else gridClass = "h-[200px] md:h-auto"

            return (
              <motion.div
                key={index}
                variants={itemFadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/10 ${gridClass}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100 z-10"></div>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white opacity-0 transition-all duration-500 group-hover:opacity-100 z-20 translate-y-4 group-hover:translate-y-0 text-left">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">{item.description}</p>
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all"
                    >
                      Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
        <div className="flex justify-center pb-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="rounded-full px-8 bg-primary-glow hover:bg-primary-glow/90 text-white font-bold group">
              Explore All Repositories
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.span>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
