'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Image from 'next/image' // Added
import CTASection from '@/components/sections/CTASection'
import {
  // Job Marketplace
  BoltIcon,
  MapPinIcon,
  SparklesIcon,
  ShieldCheckIcon,
  // Gig/Shift
  CalendarDaysIcon,
  StarIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  // Wallet
  WalletIcon,
  BanknotesIcon,
  CreditCardIcon,
  ArrowsRightLeftIcon,
  // Upskilling
  PlayCircleIcon,
  AcademicCapIcon,
  DevicePhoneMobileIcon,
  CheckBadgeIcon,
  // Community
  UsersIcon,
  HeartIcon,
  GiftIcon,
  ChatBubbleBottomCenterTextIcon,
  // OFW
  GlobeAltIcon,
  DocumentTextIcon,
  BuildingLibraryIcon,
  PhoneIcon,
  // Missions
  FlagIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline'

export default function ParaSaManggagawa() {
  const t = useTranslations('workers')

  const platformStats = [
    { label: 'Active Jobs', value: '50K+', trend: 'New jobs daily' },
    { label: 'Verified Employers', value: '10K+', trend: 'Scam-free hiring' },
    { label: 'Avg. Response Time', value: '2 hrs', trend: 'Employers reply fast' },
    { label: 'Workers Hired', value: '200K+', trend: 'This year alone' },
  ]

  const jobMarketplaceFeatures = [
    { name: 'One-Tap Apply', desc: 'Apply to jobs with one tap - no long forms.', icon: <BoltIcon className="w-6 h-6" /> },
    { name: 'Barangay-Level Search', desc: 'Find jobs walking distance from your home.', icon: <MapPinIcon className="w-6 h-6" /> },
    { name: 'Smart Job Matching', desc: 'We suggest jobs that fit your skills and experience.', icon: <SparklesIcon className="w-6 h-6" /> },
    { name: 'Verified Employers', desc: 'All employers are verified - no scams.', icon: <ShieldCheckIcon className="w-6 h-6" /> },
  ]

  const gigFeatures = [
    { name: 'Shift Marketplace', desc: 'Browse same-day or next-day shifts near you.', icon: <CalendarDaysIcon className="w-6 h-6" /> },
    { name: 'Instant Booking', desc: 'Claim shifts instantly - no waiting for approval.', icon: <ClockIcon className="w-6 h-6" /> },
    { name: 'Instant Pay', desc: 'Get paid right after completing your shift.', icon: <BanknotesIcon className="w-6 h-6" /> },
    { name: 'Rating System', desc: 'Build your reputation with 5-star ratings.', icon: <StarIcon className="w-6 h-6" /> },
    { name: 'Temp-to-Hire', desc: 'Gig today, full-time tomorrow if you impress.', icon: <ArrowTrendingUpIcon className="w-6 h-6" /> },
  ]

  const walletFeatures = [
    { name: 'Trabz E-Wallet', desc: 'Your own digital wallet for receiving payments.', icon: <WalletIcon className="w-6 h-6" /> },
    { name: 'Early Wage Access', desc: 'Get up to 50% of your earned wages before payday.', icon: <BanknotesIcon className="w-6 h-6" /> },
    { name: 'Bills Payment', desc: 'Pay electricity, water, load, and more in-app.', icon: <CreditCardIcon className="w-6 h-6" /> },
    { name: 'Send & Receive', desc: 'Transfer to GCash, Maya, bank accounts instantly.', icon: <ArrowsRightLeftIcon className="w-6 h-6" /> },
  ]

  const learningFeatures = [
    { name: 'Bite-Sized Courses', desc: '5-15 minute mobile-friendly video courses.', icon: <PlayCircleIcon className="w-6 h-6" /> },
    { name: 'TESDA-Aligned', desc: 'Skills that lead to actual NC certifications.', icon: <AcademicCapIcon className="w-6 h-6" /> },
    { name: 'Offline Mode', desc: 'Download courses, learn without data.', icon: <DevicePhoneMobileIcon className="w-6 h-6" /> },
    { name: 'Skill Badges', desc: 'Earn badges that employers can see on your profile.', icon: <CheckBadgeIcon className="w-6 h-6" /> },
  ]

  const communityFeatures = [
    { name: 'Worker Groups', desc: 'Join groups for your trade: welders, drivers, caregivers.', icon: <UsersIcon className="w-6 h-6" /> },
    { name: 'Peer Support', desc: 'Ask questions, share tips, help each other out.', icon: <HeartIcon className="w-6 h-6" /> },
    { name: 'Referral Rewards', desc: 'Earn ₱100-500 for every friend who gets hired.', icon: <GiftIcon className="w-6 h-6" /> },
    { name: 'Anonymous Chat', desc: 'Report bad employers safely and anonymously.', icon: <ChatBubbleBottomCenterTextIcon className="w-6 h-6" /> },
  ]

  const ofwFeatures = [
    { name: 'DMW Verification', desc: 'Check if agency/employer is DMW-registered.', icon: <BuildingLibraryIcon className="w-6 h-6" /> },
    { name: 'Smart Contract Scanner', desc: 'Upload contract, smart system flags red flags in Tagalog.', icon: <DocumentTextIcon className="w-6 h-6" /> },
    { name: 'Pre-Departure Courses', desc: 'Culture, language, and rights training.', icon: <GlobeAltIcon className="w-6 h-6" /> },
    { name: 'OFW Hotline', desc: 'Direct line to OWWA and embassy contacts.', icon: <PhoneIcon className="w-6 h-6" /> },
  ]

  const missionTypes = [
    { name: 'Daily Check-in', reward: '₱5', desc: 'Open the app every day', icon: <FlagIcon className="w-6 h-6" /> },
    { name: 'Complete Profile', reward: '₱50', desc: 'Add all your info and documents', icon: <CheckBadgeIcon className="w-6 h-6" /> },
    { name: 'Refer a Friend', reward: '₱100-500', desc: 'Get paid when they get hired', icon: <GiftIcon className="w-6 h-6" /> },
    { name: 'Complete a Course', reward: '₱25', desc: 'Finish any learning module', icon: <AcademicCapIcon className="w-6 h-6" /> },
    { name: 'First Gig', reward: '₱100', desc: 'Complete your first shift', icon: <TrophyIcon className="w-6 h-6" /> },
  ]

  return (
    <>
      {/* Hero Section - Light Mode */}
      <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
        <div className="absolute inset-0 -z-50">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2600"
            alt="Factory worker"
            fill
            className="object-cover object-center opacity-40 sm:opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/60" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-secondary/10 text-secondary ring-1 ring-inset ring-secondary/20">
                {t('page.heroBadge')}
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t.rich('page.heroTitle', { highlight: (chunks) => <span className="text-primary">{chunks}</span> })}
              </h1>

              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                {t('page.heroDesc')}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://app.trabz.ph/register"
                  className="rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-gray-900 shadow-lg shadow-secondary/25 hover:bg-secondary-hover transition-colors"
                >
                  {t('page.downloadApp')}
                </a>
                <a
                  href="https://app.trabz.ph/jobs"
                  className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50 transition-colors"
                >
                  {t('page.browseJobs')}
                </a>
              </div>

              {/* Quick stats */}
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <p className="text-3xl font-bold text-primary">{t('page.quickStat1Value')}</p>
                  <p className="text-sm text-gray-500 mt-1">{t('page.quickStat1Label')}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-secondary">{t('page.quickStat2Value')}</p>
                  <p className="text-sm text-gray-500 mt-1">{t('page.quickStat2Label')}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">{t('page.quickStat3Value')}</p>
                  <p className="text-sm text-gray-500 mt-1">{t('page.quickStat3Label')}</p>
                </div>
              </div>
            </motion.div>

            {/* Right - Phone Mockup with Job Listings */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-white rounded-2xl p-6 shadow-2xl ring-1 ring-gray-200 max-w-sm mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-900 font-semibold">Jobs Near You</h3>
                  <span className="text-primary text-sm font-medium">Quezon City</span>
                </div>
                <div className="space-y-3">
                  {[
                    { title: 'Delivery Rider', company: 'FoodPanda', salary: '₱800/day', tags: ['Motor Required', 'Daily Pay'], match: 98 },
                    { title: 'Construction Helper', company: 'DMCI Homes', salary: '₱650/day', tags: ['No Experience OK', 'Immediate'], match: 92 },
                    { title: 'Restaurant Crew', company: 'Jollibee', salary: '₱18,000/mo', tags: ['Full-time', 'With Benefits'], match: 89 },
                  ].map((job) => (
                    <div key={job.title} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors cursor-pointer">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-gray-900">{job.title}</h4>
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="text-gray-500 text-sm">{job.company}</p>
                          <span className="text-secondary font-semibold text-sm">{job.salary}</span>
                        </div>
                        <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">
                          {job.match}%
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {job.tags.map((tag) => (
                          <span key={tag} className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full">{tag}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <a href="https://app.trabz.ph/jobs" className="w-full mt-4 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover transition-colors block text-center">
                  {t('page.viewAllJobs')}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Light */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {platformStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-100 text-center"
              >
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                <p className="text-xs text-green-600 mt-2">{stat.trend}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Marketplace Section - Light */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">
              {t('page.jobMarketplaceBadge')}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
              {t('page.jobMarketplaceTitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('page.jobMarketplaceDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobMarketplaceFeatures.map((feature, i) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-xl p-6 ring-1 ring-gray-100 hover:ring-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gig/Shift Section - Light */}
      <section id="gig-shifts" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Gig Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-xl ring-1 ring-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-900 font-semibold">Available Gigs</h3>
                  <span className="flex items-center gap-2 text-secondary text-sm font-medium">
                    <BoltIcon className="w-4 h-4" />
                    Live
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { title: 'Event Staff - BGC', time: 'Today, 6PM - 12MN', pay: '₱800', urgency: 'URGENT', urgencyColor: 'bg-red-100 text-red-600' },
                    { title: 'Warehouse Loader', time: 'Tomorrow, 6AM - 2PM', pay: '₱700', urgency: 'TODAY', urgencyColor: 'bg-yellow-100 text-yellow-600' },
                    { title: 'Dishwasher - Restaurant', time: 'Sat-Sun, Flexible', pay: '₱500/day', urgency: 'FLEXIBLE', urgencyColor: 'bg-green-100 text-green-600' },
                  ].map((gig) => (
                    <div key={gig.title} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">{gig.title}</h4>
                          <p className="text-gray-500 text-sm mt-1">{gig.time}</p>
                        </div>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${gig.urgencyColor}`}>
                          {gig.urgency}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                        <span className="text-secondary font-bold">{gig.pay}</span>
                        <span className="text-gray-400 text-sm">Claim now →</span>
                      </div>
                    </div>
                  ))}
                </div>
                <a href="https://app.trabz.ph/gigs" className="w-full mt-4 py-3 bg-secondary text-gray-900 font-semibold rounded-xl hover:bg-secondary-hover transition-colors block text-center">
                  {t('page.findMoreGigs')}
                </a>
              </div>
            </motion.div>

            {/* Right - Content */}
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-secondary/10 text-secondary">
                {t('page.gigBadge')}
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
                {t('page.gigTitle')}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                {t('page.gigDesc')}
              </p>

              <div className="mt-8 space-y-4">
                {gigFeatures.map((feature, i) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.name}</h4>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet & Financial Section - Light */}
      <section id="wallet" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">
                {t('page.walletBadge')}
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
                {t('page.walletTitle')}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                {t('page.walletDesc')}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {walletFeatures.map((feature, i) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gray-50 rounded-xl p-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                      {feature.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm">{feature.name}</h4>
                    <p className="text-gray-500 text-xs mt-1">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - Wallet Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <div className="bg-gradient-to-br from-primary to-primary-hover rounded-2xl p-8 shadow-2xl">
                <div className="text-blue-100 text-sm">{t('page.walletBalance')}</div>
                <div className="text-4xl font-bold text-white mt-2">₱12,450.00</div>
                <div className="flex gap-4 mt-6">
                  <button className="flex-1 bg-white/20 text-white py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors">
                    {t('page.cashIn')}
                  </button>
                  <button className="flex-1 bg-secondary text-gray-900 py-3 rounded-xl font-semibold hover:bg-secondary-hover transition-colors">
                    {t('page.cashOut')}
                  </button>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-100">{t('page.earlyWageAccess')}</span>
                    <span className="text-green-300 font-semibold">₱3,500 available</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning & Upskilling Section - Light */}
      <section id="upskilling" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-secondary/10 text-secondary">
              {t('page.academyBadge')}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
              {t('page.academyTitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('page.academyDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningFeatures.map((feature, i) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-xl p-6 ring-1 ring-gray-100 hover:ring-secondary/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Course categories preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {['Welding', 'Electrical', 'Caregiving', 'Food Service', 'Driving', 'Security', 'Construction', 'Computer Skills'].map((category) => (
              <div key={category} className="bg-white rounded-xl p-4 text-center ring-1 ring-gray-100 hover:ring-primary/30 transition-colors cursor-pointer">
                <span className="text-gray-700 font-medium">{category}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OFW Hub Section - Light */}
      <section className="py-24 bg-gradient-to-br from-secondary/5 via-white to-primary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">
              {t('page.ofwBadge')}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
              {t('page.ofwTitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('page.ofwDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ofwFeatures.map((feature, i) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 ring-1 ring-gray-100 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section - Light */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-100 text-purple-600">
                {t('page.communityBadge')}
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
                {t('page.communityTitle')}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                {t('page.communityDesc')}
              </p>

              <div className="mt-8 space-y-4">
                {communityFeatures.map((feature, i) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.name}</h4>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - Community Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <div className="bg-white rounded-2xl p-8 ring-1 ring-gray-100 shadow-lg">
                <h3 className="text-gray-900 font-semibold mb-6">Community Activity</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Active Members</span>
                    <span className="text-2xl font-bold text-secondary">45,231</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Help Posts This Week</span>
                    <span className="text-2xl font-bold text-primary">1,284</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Scams Reported</span>
                    <span className="text-2xl font-bold text-red-500">127</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Referral Rewards Paid</span>
                    <span className="text-2xl font-bold text-green-600">₱2.5M</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missions Section - Light */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">
              {t('page.missionsBadge')}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
              {t('page.missionsTitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('page.missionsDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {missionTypes.map((mission, i) => (
              <motion.div
                key={mission.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-5 ring-1 ring-gray-100 hover:ring-secondary/30 transition-all text-center cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-3">
                  {mission.icon}
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">{mission.name}</h4>
                <p className="text-xs text-gray-500 mt-1">{mission.desc}</p>
                <div className="mt-3 text-secondary font-bold">{mission.reward}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Light */}
      <CTASection
        title={t('page.ctaTitle')}
        description={t('page.ctaDesc')}
        primaryText={t('page.ctaPrimary')}
        primaryHref="https://app.trabz.ph/register"
        secondaryText={t('page.ctaSecondary')}
        secondaryHref="https://app.trabz.ph/jobs"
      />
    </>
  )
}
