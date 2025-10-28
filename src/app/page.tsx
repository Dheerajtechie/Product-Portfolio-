"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail, Phone, BadgeCheck, ExternalLink } from "lucide-react";
import { PROFILE, ABOUT_GOOGLE_APM, EXPERIENCE, SKILLS, PROJECTS, HEADSHOT_PLACEHOLDERS, CASE_STUDY_LINK } from "@/lib/data";
import Script from "next/script";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": PROFILE.name,
    "jobTitle": PROFILE.title,
    "email": PROFILE.email,
    "telephone": PROFILE.phone,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": PROFILE.location
    },
    "url": "https://dheeraj-ingle-portfolio.vercel.app",
    "sameAs": [
      PROFILE.social.linkedin,
      PROFILE.social.github,
      PROFILE.social.x,
      PROFILE.social.instagram
    ],
    "knowsAbout": SKILLS,
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Product Manager",
      "description": "Building data-driven products with AI and analytics"
    }
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Navbar */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700"
          role="banner"
        >
          <div className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">DI</span>
              </div>
              <span className="text-lg font-bold tracking-wide bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                {PROFILE.name}
              </span>
            </div>
            <nav className="hidden gap-8 text-sm font-medium md:flex" role="navigation" aria-label="Main navigation">
              <a href="#about" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors duration-200">About</a>
              <a href="#experience" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors duration-200">Experience</a>
              <a href="#skills" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors duration-200">Skills</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors duration-200">Projects</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors duration-200">Contact</a>
            </nav>
            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </motion.header>

        {/* Hero */}
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300"
                >
                  <BadgeCheck className="size-4" />
                  Open to Google APM 2026 opportunities
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
                >
                  Building data-driven products with{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    impact
                  </span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg leading-8 text-slate-600 dark:text-slate-300 max-w-2xl"
                >
                  {ABOUT_GOOGLE_APM}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col gap-4 sm:flex-row sm:items-center"
                >
                  <a
                    href={PROFILE.resumeUrl}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:shadow-xl"
                  >
                    <Download className="size-4" /> Download Resume
                  </a>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
                  >
                    <Mail className="size-4" /> Email Me
                  </a>
                  <a
                    href={`https://wa.me/${PROFILE.phone}`}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
                  >
                    <Phone className="size-4" /> WhatsApp
                  </a>
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center lg:justify-end"
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {HEADSHOT_PLACEHOLDERS.map((p, index) => (
                    <motion.div 
                      key={p.id} 
                      initial={{ opacity: 0, y: 20, scale: 0.9 }} 
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700"
                    >
                      <div className="aspect-square overflow-hidden rounded-xl">
                        <Image 
                          src={p.src} 
                          alt={p.alt} 
                          width={200} 
                          height={200} 
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" 
                          priority={index === 0}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Professional Experience
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Building products that matter, with data-driven insights and user-focused strategy
              </p>
            </motion.div>
            
            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              {EXPERIENCE.map((exp, index) => (
                <motion.div 
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        {exp.period}
          </p>
        </div>
                  </div>
                  
                  <ul className="mt-6 space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {exp.cta && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {exp.cta.map((c) => (
                        <a 
                          key={c.href} 
                          href={c.href} 
            target="_blank"
                          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 transition-all duration-200"
                        >
                          <ExternalLink className="size-4" /> 
                          {c.label}
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-800/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Core Competencies
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Technical expertise and product management skills for building impactful products
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            >
              {SKILLS.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group relative overflow-hidden rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200 dark:bg-slate-700 dark:ring-slate-600 hover:shadow-md transition-all duration-200"
                >
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200 text-center block">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Featured Projects
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Data-driven products and AI-powered solutions that deliver real impact
              </p>
              <div className="mt-6">
                <a 
                  href={CASE_STUDY_LINK} 
                  target="_blank" 
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 transition-all duration-200"
                >
                  Nexus Analytics Case Study <ArrowUpRight className="size-4" />
                </a>
              </div>
            </motion.div>
            
            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              {PROJECTS.map((project, index) => (
                <motion.div 
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a 
                        key={link.href} 
                        href={link.href} 
                        target="_blank" 
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 transition-all duration-200"
                      >
                        <ExternalLink className="size-4" /> 
                        {link.label}
                      </a>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/20 dark:text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social / Contact */}
        <section id="contact" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-800/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Let's Connect
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Ready to discuss opportunities or collaborate on exciting projects
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
            >
              {[
                { name: 'LinkedIn', href: PROFILE.social.linkedin, icon: '💼' },
                { name: 'GitHub', href: PROFILE.social.github, icon: '💻' },
                { name: 'X (Twitter)', href: PROFILE.social.x, icon: '🐦' },
                { name: 'Instagram', href: PROFILE.social.instagram, icon: '📸' },
                { name: 'Unstop', href: PROFILE.social.unstop, icon: '🏆' },
                { name: 'Reddit', href: PROFILE.social.reddit, icon: '🤖' },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
            target="_blank"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-slate-700 dark:ring-slate-600 hover:shadow-md transition-all duration-200"
                >
                  <span className="text-2xl">{social.icon}</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200 text-center">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center gap-4 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700">
                <div className="text-left">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Ready to work together?</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{PROFILE.email}</p>
                </div>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  <Mail className="size-4" /> Contact
          </a>
        </div>
            </motion.div>
          </div>
        </section>

        <footer className="py-12 text-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
              </p>
              <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">
                Built with Next.js, TypeScript, and Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
    </>
  );
}
