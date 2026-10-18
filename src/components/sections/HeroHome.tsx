'use client'

import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import {
  HomeIcon,
  BriefcaseIcon,
  WalletIcon,
  UserIcon,
  MagnifyingGlassIcon,
  BellIcon,
  MapPinIcon,
  AcademicCapIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const ease = [0.25, 0.4, 0.25, 1] as const

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease },
  }),
}

const imageReveal: Variants = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, delay: 0.4, ease },
  },
}

const floatingCard: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: 0.9, ease },
  },
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function HeroHome() {
  const t = useTranslations('home.hero')

  const jobs = [
    { key: 'phoneJob1', locationKey: 'phoneJob1Location', salaryKey: 'phoneJob1Salary' },
    { key: 'phoneJob2', locationKey: 'phoneJob2Location', salaryKey: 'phoneJob2Salary' },
    { key: 'phoneJob3', locationKey: 'phoneJob3Location', salaryKey: 'phoneJob3Salary' },
  ]

  const tabs = [
    { key: 'phoneTabJobs' },
    { key: 'phoneTabShifts' },
    { key: 'phoneTabLearn' },
    { key: 'phoneTabWallet' },
  ]

  // Split the title into words for the staggered reveal
  const titleText: string = t('title')
  const titleWords = titleText.split(' ')

  return (
    <section className="relative isolate overflow-hidden bg-transparent min-h-[calc(100vh-80px)] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
          alt="Construction worker"
          fill
          className="object-cover object-center opacity-50 sm:opacity-60"
          priority
        />
        {/* Gradient Overlay: Solid white on left for text, transparent on right for image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10" />
        {/* Bottom fade for smooth transition */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>
      {/* ----------------------------------------------------------------- */}
      {/* Floating decorative blobs                                         */}
      {/* ----------------------------------------------------------------- */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-10 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-secondary/10 blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-10 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      {/* Small accent blob top-left */}
      <motion.div
        animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-40 left-1/4 w-48 h-48 rounded-full bg-primary/5 blur-2xl"
        aria-hidden="true"
      />

      {/* Subtle dot-grid pattern */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
      >
        <defs>
          <pattern
            id="hero-dot-grid"
            width={40}
            height={40}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <circle cx={1} cy={1} r={1} fill="currentColor" className="text-gray-200" />
          </pattern>
        </defs>
        <rect fill="url(#hero-dot-grid)" width="100%" height="100%" strokeWidth={0} />
      </svg>

      {/* ----------------------------------------------------------------- */}
      {/* Content grid                                                      */}
      {/* ----------------------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-6 pt-8 pb-24 sm:pt-12 sm:pb-32 lg:flex lg:items-center lg:gap-x-16 lg:px-8 lg:pt-16 lg:pb-40">
        {/* ---- Left column: text ---- */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto lg:max-w-xl">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex"
          >
            <div className="relative inline-flex items-center gap-x-3 rounded-full bg-blue-50/80 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-blue-700/10 hover:bg-blue-100/80 transition-colors">
              <span className="font-bold text-secondary-hover">{t('badge')}</span>
              <span aria-hidden="true" className="h-4 w-px bg-blue-700/10" />
              <Link
                href="/for-workers"
                className="flex items-center gap-x-1 font-semibold text-primary hover:text-primary-hover transition-colors"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                {t('badgeLink')}
                <ChevronRightIcon aria-hidden="true" className="-mr-2 size-5 text-blue-500" />
              </Link>
            </div>
          </motion.div>

          {/* Title -- staggered word reveal */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-10 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-7xl"
          >
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8"
          >
            {t('description')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.65}
            className="mt-10 flex items-center gap-x-6"
          >
            <a
              href="https://app.trabz.ph/register"
              className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
            >
              {t('ctaPrimary')}
            </a>
            <a
              href="https://app.trabz.ph/jobs"
              className="text-sm/6 font-semibold text-gray-900 hover:text-primary transition-colors group"
            >
              {t('ctaSecondary')}{' '}
              <span
                aria-hidden="true"
                className="inline-block transition-transform group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </a>
          </motion.div>
        </div>

        {/* ---- Right column: Phone Mockup ---- */}
        <div className="relative mt-12 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow flex justify-center lg:justify-end perspective-1000">
          <motion.div
            variants={imageReveal}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Rotating Feature Axis */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] opacity-20 hidden sm:block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-primary rounded-full"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg border border-blue-100">
                  <BriefcaseIcon className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-3 rounded-full shadow-lg border border-blue-100">
                  <WalletIcon className="w-6 h-6 text-secondary" />
                </div>
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[100px] border border-dashed border-primary rounded-full"
              >
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2.5 rounded-full shadow-lg border border-blue-100">
                  <AcademicCapIcon className="w-5 h-5 text-green-600" />
                </div>
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white p-2.5 rounded-full shadow-lg border border-blue-100">
                  <UserGroupIcon className="w-5 h-5 text-purple-600" />
                </div>
              </motion.div>
            </div>
            {/* Phone Frame */}
            <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[520px] w-[270px] sm:h-[600px] sm:w-[320px] shadow-2xl shadow-gray-900/40 ring-1 ring-gray-900/50">
              <div className="w-[148px] h-[18px] bg-gray-900 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>

              {/* Screen Content */}
              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-gray-50 flex flex-col relative z-10">

                {/* App Header */}
                <div className="bg-gradient-to-r from-primary to-primary-hover px-5 pt-8 pb-6 text-white">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                        <UserIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-blue-100">Welcome Back</p>
                        <p className="text-sm font-bold">Juan Dela Cruz</p>
                      </div>
                    </div>
                    <div className="relative">
                      <BellIcon className="w-6 h-6 text-white" />
                      <span className="absolute -top-1 -right-0.5 w-2.5 h-2.5 bg-secondary rounded-full border-2 border-primary"></span>
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 flex items-center gap-2 border border-white/10">
                    <MagnifyingGlassIcon className="w-4 h-4 text-blue-100" />
                    <span className="text-xs text-blue-100">Search for jobs, skills...</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="flex-1 overflow-hidden p-5 space-y-5">

                  {/* Quick Stats */}
                  <div className="flex gap-3">
                    <div className="flex-1 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                      <p className="text-[10px] text-gray-500">Wallet</p>
                      <p className="text-sm font-bold text-gray-900">₱12,500</p>
                    </div>
                    <div className="flex-1 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                      <p className="text-[10px] text-gray-500">Next Shift</p>
                      <p className="text-sm font-bold text-secondary">Tomorrow</p>
                    </div>
                  </div>

                  {/* Recommended Jobs */}
                  <div>
                    <div className="flex justify-between items-end mb-3">
                      <h3 className="text-sm font-bold text-gray-900">Recommended</h3>
                      <span className="text-[10px] text-primary font-medium">See All</span>
                    </div>
                    <div className="space-y-3">
                      {jobs.map((job, i) => (
                        <motion.div
                          key={job.key}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 + (i * 0.1) }}
                          className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center group cursor-pointer hover:border-primary/30 transition-colors"
                        >
                          <div className="flex gap-3 items-center">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${i === 0 ? 'bg-orange-100' : i === 1 ? 'bg-blue-100' : 'bg-green-100'}`}>
                              <BriefcaseIcon className={`w-5 h-5 ${i === 0 ? 'text-orange-600' : i === 1 ? 'text-blue-600' : 'text-green-600'}`} />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-gray-900">{t(job.key)}</p>
                              <div className="flex items-center gap-1 mt-0.5">
                                <MapPinIcon className="w-3 h-3 text-gray-400" />
                                <p className="text-[10px] text-gray-500">{t(job.locationKey)}</p>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] bg-secondary/10 text-secondary px-2 py-0.5 rounded-full font-medium">
                              {t(job.salaryKey)}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Nav */}
                <div className="bg-white border-t border-gray-100 p-3 pt-2 pb-5 flex justify-around items-center">
                  {[HomeIcon, BriefcaseIcon, WalletIcon, UserIcon].map((Icon, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <Icon className={`w-6 h-6 ${i === 0 ? 'text-primary' : 'text-gray-400'}`} />
                      {i === 0 && <span className="w-1 h-1 bg-primary rounded-full"></span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements for Detail */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/3 -left-4 sm:-left-12 bg-white p-2 sm:p-3 rounded-xl shadow-xl shadow-gray-500/10 border border-gray-100 flex items-center gap-2 sm:gap-3 z-30"
            >
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">New Job Match!</p>
                <p className="text-[10px] text-gray-500">98% Match Score</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-1/4 -right-2 sm:-right-8 bg-primary text-white p-2 sm:p-3 rounded-xl shadow-xl shadow-blue-900/20 flex items-center gap-2 sm:gap-3 z-30"
            >
              <WalletIcon className="w-5 h-5 text-secondary" />
              <div>
                <p className="text-[10px] opacity-80">Earnings</p>
                <p className="text-sm font-bold">₱12,500.00</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
