'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroInnerProps {
  subtitle: string
  title: string
  description: string
  backgroundImage?: string
}

export default function HeroInner({ subtitle, title, description, backgroundImage }: HeroInnerProps) {
  return (
    <section className={`relative isolate overflow-hidden pt-8 sm:pt-12 ${backgroundImage ? 'bg-transparent' : 'bg-white gradient-mesh'}`}>
      {backgroundImage && (
        <div className="absolute inset-0 -z-50">
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            className="object-cover object-center opacity-40 sm:opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/60" />
        </div>
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary ring-1 ring-inset ring-primary/20"
          >
            {subtitle}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-3xl font-bold tracking-tight text-balance text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
