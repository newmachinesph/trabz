'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import {
  FeatureCard,
  GlowButton,
  SectionBadge,
  SectionTitle,
  SectionDescription
} from '@/components/ui/FeatureCard'
import CTASection from '@/components/sections/CTASection'
import {
  // Hiring Automation
  MegaphoneIcon,
  ChartBarSquareIcon,
  CalendarIcon,
  ClipboardDocumentCheckIcon,
  ChatBubbleBottomCenterTextIcon,
  PresentationChartBarIcon,
  ChatBubbleLeftIcon,
  PhoneIcon,
  UsersIcon,
  // Employer Tools
  BuildingOfficeIcon,
  ViewColumnsIcon,
  ChartPieIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ScaleIcon,
  BanknotesIcon,
  // Additional
  SparklesIcon,
  ShieldCheckIcon,
  BoltIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  CheckBadgeIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  FingerPrintIcon,
  ExclamationTriangleIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  MapPinIcon,
  CalendarDaysIcon,
  StarIcon,
  FolderIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline'

export default function ParaSaNegosyo() {
  const t = useTranslations('employers')

  const platformStats = [
    { label: 'Active Workers', value: '500K+', trend: '+12% this month' },
    { label: 'Partner Employers', value: '10K+', trend: '+8% this month' },
    { label: 'Avg. Time to Hire', value: '3 days', trend: '-40% vs industry' },
    { label: 'Hiring Success Rate', value: '92%', trend: '+5% this quarter' },
  ]

  // Expanded Hiring Automation Features
  const hiringFeatures = [
    { name: 'Smart Ad Placement', desc: 'Auto-generate and place job ads where your ideal candidates will see them.', icon: <MegaphoneIcon className="w-6 h-6" /> },
    { name: 'Candidate Scoring & Ranking', desc: 'Smart scoring ranks applicants — top candidates surface first.', icon: <ChartBarSquareIcon className="w-6 h-6" /> },
    { name: 'Auto-Scheduling', desc: 'Book interviews directly into your calendar with zero back-and-forth.', icon: <CalendarIcon className="w-6 h-6" /> },
    { name: 'KayaScore Assessment', desc: 'The "Secret Weapon": 21-trait behavioral profiling + SJT + Dark Trait Screen.', icon: <ClipboardDocumentCheckIcon className="w-6 h-6" /> },
    { name: 'Smart Offer Letters', desc: 'Auto-generate and send employment offers from templates instantly.', icon: <DocumentTextIcon className="w-6 h-6" /> },
    { name: 'Interview Reminders', desc: 'Automated SMS/push reminders to reduce no-show rates.', icon: <ClockIcon className="w-6 h-6" /> },
    { name: 'Custom Interview Questions', desc: 'Auto-generated questions tailored to each role and candidate.', icon: <ChatBubbleBottomCenterTextIcon className="w-6 h-6" /> },
    { name: 'Team Behavioral Heatmap', desc: 'View all employees\' traits in one color-coded grid.', icon: <PresentationChartBarIcon className="w-6 h-6" /> },
    { name: 'Messenger Bot Recruiter', desc: 'Conversational recruiter via Facebook Messenger.', icon: <ChatBubbleLeftIcon className="w-6 h-6" /> },
    { name: 'Smart Voice Recruiter', desc: 'Voice calls in English and Filipino for accessibility.', icon: <PhoneIcon className="w-6 h-6" /> },
  ]

  // Expanded Employer Tools
  const employerTools = [
    { name: 'Company Profile', desc: 'Employer branding page with photos, reviews, and benefits.', icon: <BuildingOfficeIcon className="w-6 h-6" /> },
    { name: 'ATS Pipeline', desc: 'Kanban-style tracking: Applied → Screened → Interviewed → Hired.', icon: <ViewColumnsIcon className="w-6 h-6" /> },
    { name: 'Analytics Dashboard', desc: 'Track time-to-hire, cost-per-hire, source effectiveness.', icon: <ChartPieIcon className="w-6 h-6" /> },
    { name: 'Team Management', desc: 'View employee profiles, identify gaps, and plan growth.', icon: <UserGroupIcon className="w-6 h-6" /> },
    { name: 'Shift Scheduling', desc: 'Visual calendar for planning worker shifts and coverage.', icon: <CalendarDaysIcon className="w-6 h-6" /> },
    { name: 'Attendance Tracking', desc: 'Real-time attendance with geo-verification check-ins.', icon: <MapPinIcon className="w-6 h-6" /> },
    { name: 'Performance Reviews', desc: 'Structured feedback and evaluation tools for your team.', icon: <StarIcon className="w-6 h-6" /> },
    { name: 'Document Management', desc: 'Store contracts, IDs, and certifications digitally.', icon: <FolderIcon className="w-6 h-6" /> },
    { name: 'Payroll Integration', desc: 'Connect to existing payroll systems for seamless ops.', icon: <CurrencyDollarIcon className="w-6 h-6" /> },
    { name: 'DOLE Compliance', desc: 'Labor compliance checklists and contract templates.', icon: <ScaleIcon className="w-6 h-6" /> },
  ]

  // New Agency Specific Features
  const agencyFeatures = [
    { name: 'Bulk Hiring Tools', desc: 'Process hundreds of candidates at once for large deployments.', icon: <UsersIcon className="w-6 h-6" /> },
    { name: 'DMW/POEA Compliance', desc: 'Tools to ensure all overseas placements meet government standards.', icon: <GlobeAltIcon className="w-6 h-6" /> },
    { name: 'Pre-Departure Training', desc: 'Track PDOS and training completion for deployed workers.', icon: <AcademicCapIcon className="w-6 h-6" /> },
    { name: 'Agency Branding', desc: 'Premium agency profile with verified badge and ratings.', icon: <CheckBadgeIcon className="w-6 h-6" /> },
  ]

  const gigFeatures = [
    { name: 'Shift Marketplace', desc: 'Post same-day or next-day shifts. Workers claim instantly.', icon: <ClockIcon className="w-6 h-6" /> },
    { name: 'Performance Scoring', desc: 'Attendance tracking and reliability scores for workers.', icon: <ArrowTrendingUpIcon className="w-6 h-6" /> },
    { name: 'Temp-to-Hire', desc: 'Convert your best gig workers to permanent employees.', icon: <CheckBadgeIcon className="w-6 h-6" /> },
    { name: 'Instant Booking', desc: 'Fill last-minute shifts for events and restaurants.', icon: <BoltIcon className="w-6 h-6" /> },
  ]

  const trustFeatures = [
    { name: 'ID Verification', desc: 'NBI clearance, valid ID, and selfie verification.', icon: <FingerPrintIcon className="w-6 h-6" /> },
    { name: 'Background Checks', desc: 'Criminal record and employment history verification.', icon: <ShieldCheckIcon className="w-6 h-6" /> },
    { name: 'Scam Detection', desc: 'Smart system flags suspicious activity automatically.', icon: <ExclamationTriangleIcon className="w-6 h-6" /> },
    { name: 'Dispute Resolution', desc: 'In-app mediation for payment or workplace issues.', icon: <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" /> },
  ]

  const pricingTiers = [
    {
      name: 'Pay-Per-Hire',
      price: '₱500',
      period: '/ hire',
      desc: 'Perfect for occasional hiring. No monthly fees.',
      features: ['Unlimited job posts', 'Candidate smart scoring', 'First 3 hires guaranteed', 'Standard support'],
      cta: 'Post a Job',
      featured: false,
    },
    {
      name: 'Business Subscription',
      price: '₱2,499',
      period: '/ mo',
      desc: 'For growing businesses that hire regularly.',
      features: ['Unlimited hires', 'KayaScore Assessment', 'Team behavioral heatmap', 'Analytics dashboard', 'Priority support'],
      cta: 'Start Free Trial',
      featured: true,
    },
    {
      name: 'Agency Power',
      price: '₱4,999',
      period: '/ mo',
      desc: 'For recruitment agencies & high-volume hiring.',
      features: ['Unlimited job posts & hires', 'Bulk candidate processing', 'DMW compliance tools', 'White-label reports', 'Dedicated account manager'],
      cta: 'Contact Sales',
      featured: false,
    },
  ]

  return (
    <>
      {/* Hero Section - Light Mode */}
      <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center pb-16 sm:pb-24">
        <div className="absolute inset-0 -z-50">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2600"
            alt="Business meeting"
            fill
            className="object-cover object-center opacity-40 sm:opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/60" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
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
                  href="https://portal.trabz.ph/register"
                  className="rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-hover transition-colors"
                >
                  {t('page.postJob')}
                </a>
                <Link
                  href="/contact"
                  className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50 transition-colors"
                >
                  {t('page.scheduleDemo')}
                </Link>
              </div>

              {/* Quick stats */}
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <p className="text-3xl font-bold text-primary">3 days</p>
                  <p className="text-sm text-gray-500 mt-1">Avg. time to hire</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-secondary">85%</p>
                  <p className="text-sm text-gray-500 mt-1">Faster hiring</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">92%</p>
                  <p className="text-sm text-gray-500 mt-1">Success rate</p>
                </div>
              </div>
            </motion.div>

            {/* Right - Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-gray-900 font-semibold">Hiring Dashboard</h3>
                    <p className="text-gray-500 text-sm">Real-time overview</p>
                  </div>
                  <span className="flex items-center gap-2 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Live
                  </span>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs text-gray-500">Open Positions</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs text-gray-500">Total Applicants</p>
                    <p className="text-2xl font-bold text-secondary mt-1">284</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs text-gray-500">Interviews Today</p>
                    <p className="text-2xl font-bold text-primary mt-1">8</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs text-gray-500">Hired This Month</p>
                    <p className="text-2xl font-bold text-green-600 mt-1">23</p>
                  </div>
                </div>

                {/* Recent applicants */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500 mb-3">Top Candidates (Smart Ranked)</p>
                  <div className="space-y-2">
                    {[
                      { name: 'Juan dela Cruz', role: 'Welder • 5 yrs', match: 98, initials: 'JD', color: 'bg-blue-100 text-blue-600' },
                      { name: 'Maria Santos', role: 'Electrician • 3 yrs', match: 95, initials: 'MS', color: 'bg-yellow-100 text-yellow-600' },
                      { name: 'Pedro Reyes', role: 'Driver • 7 yrs', match: 89, initials: 'PR', color: 'bg-purple-100 text-purple-600' },
                    ].map((candidate) => (
                      <div key={candidate.name} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full ${candidate.color} flex items-center justify-center text-xs font-semibold`}>
                            {candidate.initials}
                          </div>
                          <div>
                            <p className="text-gray-900 text-sm font-medium">{candidate.name}</p>
                            <p className="text-gray-500 text-xs">{candidate.role}</p>
                          </div>
                        </div>
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium">
                          {candidate.match}% match
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Stats - Light */}
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
                className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-100"
              >
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <p className="text-xs text-green-600 mt-1">{stat.trend}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Automation Section - Light */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">
              {t('page.hiringAutomationBadge')}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
              {t('page.hiringAutomationTitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('page.hiringAutomationDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hiringFeatures.map((feature, i) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white rounded-xl p-6 ring-1 ring-gray-100 hover:ring-primary/30 hover:shadow-lg transition-all duration-300"
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

      {/* Recruitment Agencies Section - Light */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-100 text-purple-700">
                {t('page.agencyBadge')}
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
                {t('page.agencyTitle')}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                {t('page.agencyDesc')}
              </p>

              <div className="mt-8 space-y-4">
                {agencyFeatures.map((feature, i) => (
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

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block rounded-lg bg-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-purple-200 hover:bg-purple-700 transition-colors"
                >
                  {t('page.partnerWithUs')}
                </Link>
              </div>
            </div>

            {/* Right - Dashboard/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-6 shadow-xl ring-1 ring-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-gray-900 font-semibold">Bulk Hiring Pipeline</h3>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">Processing</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-purple-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600">500</div>
                    <div className="text-xs text-purple-800">Candidates</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">85%</div>
                    <div className="text-xs text-blue-800">Passed</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">120</div>
                    <div className="text-xs text-green-800">Deployed</div>
                  </div>
                </div>

                {/* List */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Batch A - Welders (Saudi)</span>
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">Medical</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Batch B - Household (HK)</span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">PDOS</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Batch C - Construction (Qatar)</span>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">Interview</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Marketplace Section - Light */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-secondary/10 text-secondary">
                {t('page.jobMarketplaceBadge')}
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
                {t('page.jobMarketplaceTitle')}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                {t('page.jobMarketplaceDesc')}
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { icon: <CheckBadgeIcon className="w-5 h-5 text-green-600" />, text: 'Verified workers with ID and background checks' },
                  { icon: <SparklesIcon className="w-5 h-5 text-secondary" />, text: 'Smart candidate matching and ranking' },
                  { icon: <MapPinIcon className="w-5 h-5 text-primary" />, text: 'Barangay-level location targeting' },
                  { icon: <DocumentTextIcon className="w-5 h-5 text-purple-600" />, text: 'One-tap apply means more applicants' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="https://portal.trabz.ph/register"
                  className="rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-hover transition-colors inline-block"
                >
                  {t('page.postFirstJob')}
                </a>
              </div>
            </div>

            {/* Jobs Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-xl ring-1 ring-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-900 font-semibold">Your Active Job Posts</h3>
                <span className="text-primary text-sm font-medium">View all</span>
              </div>
              <div className="space-y-3">
                {[
                  { title: 'Senior Welder', location: 'Quezon City', salary: '₱25,000/mo', tags: ['Full-time', 'NC II Required'], match: 98 },
                  { title: 'Delivery Riders (10)', location: 'Metro Manila', salary: '₱800/day', tags: ['Daily', 'Motor Required'], match: 94 },
                  { title: 'Construction Workers', location: 'Makati', salary: '₱650/day', tags: ['Project-based', 'Immediate'], match: 91 },
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
                        <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                          <span>{job.location}</span>
                          <span className="font-semibold text-secondary">{job.salary}</span>
                        </div>
                      </div>
                      <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">
                        {job.match}% Match
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {job.tags.map((tag) => (
                        <span key={tag} className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gig/Shift Section - Light */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Gig Preview */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-xl ring-1 ring-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-900 font-semibold">Shift Marketplace</h3>
                <span className="flex items-center gap-2 text-secondary text-sm font-medium">
                  <BoltIcon className="w-4 h-4" />
                  Real-time
                </span>
              </div>
              <div className="space-y-3">
                {[
                  { title: 'Event Staff - BGC', time: 'Today, 6PM - 12MN', pay: '₱800', distance: '2.5 km', urgency: 'URGENT', urgencyColor: 'bg-red-100 text-red-600' },
                  { title: 'Warehouse Helper', time: 'Tomorrow, 8AM - 5PM', pay: '₱650', distance: '5.2 km', urgency: 'TODAY', urgencyColor: 'bg-yellow-100 text-yellow-600' },
                  { title: 'Restaurant Crew', time: 'Sat-Sun, Flexible', pay: '₱550/day', distance: '1.8 km', urgency: 'FLEXIBLE', urgencyColor: 'bg-green-100 text-green-600' },
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
                      <span className="text-gray-500 text-sm">{gig.distance}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Content */}
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

              <div className="mt-8 grid grid-cols-2 gap-4">
                {gigFeatures.map((feature, i) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gray-50 rounded-xl p-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-3">
                      {feature.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm">{feature.name}</h4>
                    <p className="text-gray-500 text-xs mt-1">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KayaScore Assessment Section - Light */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5" id="assessment">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">
              {t('page.kayaBadge')}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
              {t('page.kayaTitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('page.kayaDesc')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { layer: 'Layer 1', title: 'Behavioral Profile', subtitle: '21 Traits • 15-20 mins', desc: 'Measures work ethic, safety, interpersonal skills, adaptability, and motivation.', color: 'blue' },
              { layer: 'Layer 2', title: 'Situational Judgment', subtitle: 'Role-Specific • 10-15 mins', desc: 'Realistic workplace scenarios tailored to job category.', color: 'yellow' },
              { layer: 'Layer 3', title: 'Dark Trait Screening', subtitle: 'Safety-Critical • 10 mins', desc: 'Screens for 6 dark personality traits with risk zone ratings.', color: 'purple' },
            ].map((layer, i) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`bg-white rounded-2xl p-8 shadow-lg ring-1 ring-gray-100 hover:shadow-xl transition-shadow`}
              >
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4 ${layer.color === 'blue' ? 'bg-primary/10 text-primary' :
                  layer.color === 'yellow' ? 'bg-secondary/10 text-secondary' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                  {layer.layer}
                </span>
                <h3 className="text-xl font-bold text-gray-900">{layer.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{layer.subtitle}</p>
                <p className="text-gray-600 text-sm mt-4">{layer.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Score Card Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-6 shadow-xl ring-1 ring-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-gray-900 font-semibold">KayaScore Card</h4>
                  <p className="text-gray-500 text-sm">Juan dela Cruz • Construction Worker</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-xl font-bold text-white">82</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Overall Fit</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { label: 'Work Ethic', value: 85, color: 'bg-primary' },
                  { label: 'Safety', value: 92, color: 'bg-green-500' },
                  { label: 'Interpersonal', value: 70, color: 'bg-purple-500' },
                  { label: 'Adaptability', value: 78, color: 'bg-secondary' },
                  { label: 'Motivation', value: 88, color: 'bg-pink-500' },
                ].map(({ label, value, color }) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">{label}</span>
                      <span className="text-gray-900 font-medium">{value}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-medium text-sm">Dark Trait Screen: CLEAR</span>
                </div>
                <span className="text-green-600 text-sm">Ready to hire</span>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <Link
              href="/en/for-business/assessment"
              className="text-primary font-semibold hover:underline"
            >
              Learn more about KayaScore →
            </Link>
          </div>
        </div>
      </section>

      {/* Employer Tools Section - Light */}
      <section id="employer-tools" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-secondary/10 text-secondary">
              {t('page.toolsBadge')}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
              {t('page.toolsTitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('page.toolsDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {employerTools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white rounded-xl p-6 ring-1 ring-gray-100 hover:ring-secondary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  {tool.icon}
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{tool.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety - Light */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                {t('page.trustBadge')}
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
                {t('page.trustTitle')}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                {t('page.trustDesc')}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {trustFeatures.map((feature, i) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{feature.name}</h4>
                      <p className="text-gray-500 text-xs mt-1">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trust visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-green-200 to-blue-200 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center">
                      <ShieldCheckIcon className="w-16 h-16 text-green-600" />
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white shadow-lg text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full ring-1 ring-green-200"
                >
                  100% Verified
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-white shadow-lg text-primary text-xs font-semibold px-3 py-1.5 rounded-full ring-1 ring-blue-200"
                >
                  Smart Monitored
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Pricing Section - Light */}
      < section className="py-24 bg-white" id="pricing" >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-secondary/10 text-secondary">
              {t('page.pricingBadge')}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
              {t('page.pricingTitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('page.pricingDesc')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col relative rounded-2xl p-8 ${tier.featured
                  ? 'bg-primary text-white ring-4 ring-primary/20'
                  : 'bg-white ring-1 ring-gray-200'
                  }`}
              >
                {tier.featured && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-gray-900 text-xs font-semibold px-4 py-1 rounded-full">
                    {t('page.mostPopular')}
                  </span>
                )}

                <div className="flex-1">
                  <h3 className={`text-xl font-bold ${tier.featured ? 'text-white' : 'text-gray-900'}`}>
                    {tier.name}
                  </h3>
                  <div className="mt-4 flex items-baseline">
                    <span className={`text-4xl font-bold ${tier.featured ? 'text-white' : 'text-gray-900'}`}>
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className={`ml-1 text-sm ${tier.featured ? 'text-blue-100' : 'text-gray-500'}`}>
                        {tier.period}
                      </span>
                    )}
                  </div>
                  <p className={`mt-2 text-sm ${tier.featured ? 'text-blue-100' : 'text-gray-500'}`}>
                    {tier.desc}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className={`flex items-center gap-2 text-sm ${tier.featured ? 'text-blue-100' : 'text-gray-600'}`}>
                        <CheckBadgeIcon className={`w-4 h-4 flex-shrink-0 ${tier.featured ? 'text-secondary' : 'text-primary'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`mt-8 w-full py-3 rounded-xl font-semibold transition-all duration-300 ${tier.featured
                  ? 'bg-white text-primary hover:bg-gray-100'
                  : 'bg-primary text-white hover:bg-primary-hover'
                  }`}>
                  {tier.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* Final CTA - Light */}
      < CTASection
        title={t('page.ctaTitle')}
        description={t('page.ctaDesc')}
        primaryText={t('page.ctaPrimary')}
        primaryHref="https://portal.trabz.ph/register"
        secondaryText={t('page.ctaSecondary')}
        secondaryHref="/contact"
      />
    </>
  )
}
