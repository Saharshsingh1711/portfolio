"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Palette, 
  Code, 
  Sparkles, 
  Zap, 
  LineChart, 
  MessageSquare,
  ArrowRight
} from "lucide-react"

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

const services = [
  {
    icon: <Palette className="h-10 w-10 text-primary-glow" />,
    title: "UI/UX Design",
    description:
      "Crafting intuitive, engaging user experiences that delight users and drive conversions with aesthetic precision.",
  },
  {
    icon: <Code className="h-10 w-10 text-primary-glow" />,
    title: "Web Development",
    description:
      "Building high-performance, responsive, and accessible websites using modern frameworks like Next.js and React.",
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary-glow" />,
    title: "Brand Identity",
    description:
      "Developing distinctive brand identities that communicate core values and resonate deeply with target audiences.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary-glow" />,
    title: "Mobile Solutions",
    description: "Designing and developing robust, feature-rich mobile applications for both iOS and Android platforms.",
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary-glow" />,
    title: "Growth Strategy",
    description:
      "Implementing data-driven marketing and technical strategies to scale businesses and maximize digital reach.",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-primary-glow" />,
    title: "Content Systems",
    description: "Producing compelling digital content and CMS architectures that tell impactful stories effectively.",
  },
]

export default function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
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
              Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              Full-Spectrum Engineering
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto max-w-[900px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Specializing in the intersection of design and technology to deliver world-class digital products.
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemFadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/5 p-8 shadow-sm transition-all hover:shadow-2xl bg-white/[0.02] hover:bg-white/[0.06]"
            >
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary-glow/5 group-hover:bg-primary-glow/10 transition-all duration-300"></div>
              <div className="relative space-y-3">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="text-slate-400 group-hover:text-slate-200 transition-colors">{service.description}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <Link href="#" className="text-sm font-medium text-primary-glow underline-offset-4 hover:underline">
                  Learn more
                </Link>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <ArrowRight className="h-4 w-4 text-primary-glow" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
