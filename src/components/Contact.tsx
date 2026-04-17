"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ButtonColorful } from "@/components/ui/button-colorful";
import styles from "./Sections.module.css";

import { ContactCard } from "@/components/ui/contact-card";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const FORMBACKEND_URL = "https://www.formbackend.com/f/bfef5bb8bea5dab6";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("loading");
    try {
      const response = await fetch(FORMBACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'saharshsingh171105@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9911XXXXXX',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      className: 'md:col-span-2 lg:col-span-1',
    }
  ];

  return (
    <section id="contact" className="relative w-full py-32 flex flex-col items-center overflow-visible">
      <div className="container max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary-glow tracking-widest text-sm uppercase font-semibold mb-2">
            Available for opportunities
          </p>
          <h2 className={styles.sectionTitle}>
            Get In <span className="text-gradient">Touch</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ContactCard
            title="Let's build something together"
            description="If you have a project in mind, a question about my work, or just want to discuss the latest in tech—I'm always open to a conversation. I'll get back to you within 24 hours."
            contactInfo={contactInfo}
            className="rounded-xl border-white/10 bg-black/40 backdrop-blur-md overflow-visible"
            formSectionClassName="bg-white/[0.02]"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center w-full py-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Sent!</h3>
                  <p className="text-slate-400 text-sm"> I'll reach out soon.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-xs text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-widest font-bold"
                  >
                    New Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="w-full space-y-5"
                >
                  <div className="space-y-2">
                    <Label className="text-slate-400">Name</Label>
                    <Input
                      required
                      placeholder="Your Name"
                      className="bg-white/5 border-white/10 focus:border-indigo-500/50 transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-400">Email</Label>
                    <Input
                      required
                      type="email"
                      placeholder="email@example.com"
                      className="bg-white/5 border-white/10 focus:border-indigo-500/50 transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-400">Message</Label>
                    <Textarea
                      required
                      placeholder="How can I help you?"
                      className="bg-white/5 border-white/10 focus:border-indigo-500/50 transition-colors min-h-[120px] resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="pt-2">
                    <ButtonColorful
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full h-12 font-bold"
                      label={status === "loading" ? "Sending..." : "Submit"}
                    >
                      {status === "loading" ? (
                        <Loader2 className="animate-spin w-4 h-4 mr-2" />
                      ) : (
                        <Send className="w-4 h-4 mr-2" />
                      )}
                    </ButtonColorful>
                  </div>
                  
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-400 text-xs flex items-center justify-center"
                    >
                      <AlertCircle className="w-3 h-3 mr-2" />
                      Failed to send. Try again.
                    </motion.p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </ContactCard>
        </motion.div>
      </div>

      <footer className="mt-32 w-full py-8 border-t border-white/5 flex flex-col items-center gap-4 opacity-50">
        <p className="text-sm">Built with Next.js, Framer Motion & Tailwind</p>
        <p className="text-xs font-mono">© {new Date().getFullYear()} Saharsh Singh</p>
      </footer>
    </section>
  );
}
