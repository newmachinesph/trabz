'use client'

import { motion } from 'framer-motion'

interface CTASectionProps {
  title: string
  description: string
  primaryText: string
  primaryHref: string
  secondaryText?: string
  secondaryHref?: string
  dark?: boolean
}

export default function CTASection({
  title,
  description,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
  dark = false
}: CTASectionProps) {
  return (
    <section className={`relative overflow-hidden ${dark ? 'gradient-business-hero' : 'bg-white'}`}>
      {/* Animated background elements */}
      {dark && (
        <>
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute top-10 left-10 w-40 h-40 sm:w-64 sm:h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-yellow-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </>
      )}

      <div className="relative z-10 px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className={`text-balance text-4xl font-bold tracking-tight ${dark ? 'text-white' : 'text-gray-900'} sm:text-5xl lg:text-6xl`}>
            {title}
          </h2>
          <p className={`mx-auto mt-6 max-w-xl text-lg leading-8 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
            {description}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href={primaryHref}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-xl border-2 border-transparent bg-gradient-to-r from-yellow-400 to-yellow-500 px-5 py-3 text-base sm:px-8 sm:py-4 sm:text-lg font-semibold text-gray-900 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
            >
              {primaryText}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>

            {secondaryText && secondaryHref && (
              <motion.a
                href={secondaryHref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-base sm:px-8 sm:py-4 sm:text-lg font-semibold border-2 transition-all duration-300 ${dark
                  ? 'border-white/20 text-white hover:bg-white/10 hover:border-white/40'
                  : 'border-gray-200 text-gray-900 hover:bg-gray-50 hover:border-gray-300'
                  }`}
              >
                {secondaryText}
                <span className="ml-2" aria-hidden="true">→</span>
              </motion.a>
            )}
          </motion.div>

          {/* Trust badges */}
          {dark && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span>Cancel anytime</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
