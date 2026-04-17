"use client"
import { motion } from "framer-motion"
import Image from "next/image"

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

export default function Clients() {
  return (
    <section id="clients" className="w-full py-12 md:py-16 lg:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container px-4 md:px-6 border border-white/5 rounded-[2rem] bg-white/[0.02] backdrop-blur-sm"
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-full bg-white/5 border border-white/10 px-4 py-1 text-sm text-secondary-glow font-medium"
            >
              Trusted by
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              Strategic Partnerships
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto max-w-[700px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Collaborating with industry leaders to drive innovation and digital transformation.
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid grid-cols-2 items-center gap-4 py-8 md:grid-cols-3 lg:grid-cols-6"
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              variants={itemFadeIn}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center"
            >
              <div className="w-full rounded-[1.5rem] border border-white/5 p-6 bg-white/[0.02] hover:bg-white/[0.05] hover:shadow-lg transition-all">
                <Image
                  src={`https://raw.githubusercontent.com/designali-in/designali/2a5d38f658ab24084e3260cdba2259fdc44ae2cd/apps/www/public/placeholder.svg?height=80&width=160&text=Brand+${i + 1}`}
                  alt={`Client Logo ${i + 1}`}
                  width={160}
                  height={80}
                  className="grayscale opacity-50 transition-all hover:grayscale-0 hover:opacity-100"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
