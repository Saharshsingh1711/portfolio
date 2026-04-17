"use client"
import { motion } from "framer-motion"

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

const testimonials = [
  {
    quote:
      "The architectural precision and attention to detail delivered was beyond our expectations. A true engineering partner.",
    author: "Siddharth Raj",
    company: "CTO, InnovateX",
  },
  {
    quote:
      "Scaling our platform was a breeze thanks to the robust Next.js and MERN optimization strategies implemented.",
    author: "Ananya Mehta",
    company: "Founder, BloomTech",
  },
  {
    quote:
      "The algorithmic efficiency brought to our core engine saved us significant cloud costs while improving speed.",
    author: "Vikram Shah",
    company: "Engineering Lead, NexusAI",
  },
  {
    quote:
      "A rare talent that understands both the deep technical stack and the nuances of user experience design.",
    author: "Priya Das",
    company: "Product Manager, CloudFlow",
  },
]

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
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
              className="inline-block rounded-full bg-white/5 border border-white/10 px-4 py-1 text-sm text-secondary-glow font-medium"
            >
              Testimonials
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              Industry Feedback
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto max-w-[900px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Client perspectives on the impact of my technical engineering and design philosophy.
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemFadeIn}
              whileHover={{ y: -10 }}
              className="flex flex-col justify-between rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 shadow-sm hover:shadow-2xl transition-all"
            >
              <div>
                <div className="flex gap-1 text-primary-glow">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-6 text-lg font-medium leading-relaxed text-slate-200 indent-2 italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              <div className="mt-8 flex items-center">
                <div className="h-12 w-12 rounded-full bg-white/10 border border-white/5 flex items-center justify-center font-bold text-primary-glow font-mono">
                  {testimonial.author[0]}
                </div>
                <div className="ml-4">
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-sm text-slate-500 font-mono tracking-wider">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
