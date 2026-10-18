'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { SectionHeader, PricingTier, IconFeatureCard } from '@/components/ui'
import CTASection from '@/components/sections/CTASection'
import {
  SparklesIcon,
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ChatBubbleBottomCenterIcon,
  PhoneIcon,
  ComputerDesktopIcon,
  CheckBadgeIcon,
  ExclamationTriangleIcon,
  UserGroupIcon,
  AcademicCapIcon,
  HeartIcon,
  ArrowTrendingUpIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  BuildingStorefrontIcon,
  HomeModernIcon,
  BuildingOffice2Icon,
  ShieldExclamationIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'

export default function KayaScoreAssessmentPage() {
  // 5 Domains with 21 Traits
  const domains = [
    {
      name: 'Work Ethic',
      emoji: '💪',
      color: 'blue',
      traits: ['Attendance & Punctuality', 'Task Completion', 'Effort & Initiative', 'Following Instructions'],
    },
    {
      name: 'Safety',
      emoji: '🛡️',
      color: 'green',
      traits: ['Hazard Awareness', 'PPE Compliance', 'Reportability', 'Physical Endurance Check'],
    },
    {
      name: 'Interpersonal',
      emoji: '🤝',
      color: 'purple',
      traits: ['Cooperation', 'Communication', 'Conflict Resolution', 'Respect for Authority'],
    },
    {
      name: 'Adaptability',
      emoji: '🔄',
      color: 'yellow',
      traits: ['Handling Change', 'Learning Speed', 'Stress Tolerance', 'Multi-tasking'],
    },
    {
      name: 'Motivation',
      emoji: '🎯',
      color: 'pink',
      traits: ['Goal Orientation', 'Career Aspiration', 'Self-Improvement', 'Job Commitment', 'Values Alignment'],
    },
  ]

  // Dark Traits
  const darkTraits = [
    { trait: 'Dishonesty', desc: 'Tendency to lie, cheat, or misrepresent' },
    { trait: 'Substance Abuse Risk', desc: 'Indicators of problematic substance use' },
    { trait: 'Violence Propensity', desc: 'Likelihood of aggressive behavior' },
    { trait: 'Theft Inclination', desc: 'Risk of stealing from employer/coworkers' },
    { trait: 'Chronic Absenteeism', desc: 'Pattern of unexplained work absences' },
    { trait: 'Negligence', desc: 'Reckless disregard for safety/quality' },
  ]

  // Job Categories
  const jobCategories = [
    { name: 'Construction', icon: <BuildingOffice2Icon className="w-6 h-6" />, scenarios: 'Scaffolding safety, supervisor conflict, overtime request' },
    { name: 'Food Service', icon: <BuildingStorefrontIcon className="w-6 h-6" />, scenarios: 'Rush hour pressure, customer complaint, food safety' },
    { name: 'Retail', icon: <ShoppingBagIcon className="w-6 h-6" />, scenarios: 'Stock discrepancy, difficult customer, team coordination' },
    { name: 'Manufacturing', icon: <WrenchScrewdriverIcon className="w-6 h-6" />, scenarios: 'Machine malfunction, quality reject, shift handover' },
    { name: 'Logistics', icon: <TruckIcon className="w-6 h-6" />, scenarios: 'Route change, package damage, time pressure' },
    { name: 'Household', icon: <HomeModernIcon className="w-6 h-6" />, scenarios: 'Employer absence, emergency, personal boundaries' },
    { name: 'Security', icon: <ShieldExclamationIcon className="w-6 h-6" />, scenarios: 'Intruder alert, colleague violation, post abandonment' },
    { name: 'Healthcare', icon: <HeartIcon className="w-6 h-6" />, scenarios: 'Patient emergency, med error, family complaint' },
    { name: 'BPO', icon: <PhoneIcon className="w-6 h-6" />, scenarios: 'Irate caller, system down, attendance policy' },
  ]

  // Delivery Modes
  const deliveryModes = [
    { name: 'Mobile App', icon: <DevicePhoneMobileIcon className="w-6 h-6" />, desc: 'Full-featured assessment in Trabz app', time: '20-30 mins' },
    { name: 'Messenger Bot', icon: <ChatBubbleBottomCenterIcon className="w-6 h-6" />, desc: 'Conversational assessment via Facebook Messenger', time: '25-35 mins' },
    { name: 'SMS Mode', icon: <PhoneIcon className="w-6 h-6" />, desc: 'Works on any phone, no data needed', time: '30-40 mins' },
    { name: 'Voice IVR', icon: <PhoneIcon className="w-6 h-6" />, desc: 'Phone call assessment for low-literacy users', time: '35-45 mins' },
    { name: 'Kiosk/Web', icon: <ComputerDesktopIcon className="w-6 h-6" />, desc: 'Computer-based testing at partner locations', time: '20-30 mins' },
  ]

  // Languages
  const languages = ['Filipino (Tagalog)', 'English']

  // Assessment Pricing
  const assessmentPricing = [
    { name: 'Basic Behavioral', price: '₱149', desc: 'Core 21-trait assessment', features: ['21 Traits Scored', 'PDF Report', '7-day validity'] },
    { name: 'Full KayaScore', price: '₱249', desc: 'Behavioral + Situational Judgment', features: ['21 Traits + SJT', 'Role-specific scenarios', 'PDF + Dashboard', '30-day validity'] },
    { name: 'Complete + Dark', price: '₱349', desc: 'Full assessment with dark trait screening', features: ['All assessments', 'Dark trait screen', 'Risk zone rating', '60-day validity'], featured: true },
  ]

  return (
    <>
      {/* Hero Section - Light Mode */}
      <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center pb-16 sm:pb-24">
        <div className="absolute inset-0 -z-50">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2600"
            alt="Assessment and hiring process"
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
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-[#1A56DB]/10 text-[#1A56DB] ring-1 ring-inset ring-[#1A56DB]/20">
                KayaScore Assessment
              </span>

              <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Hire the <span className="text-[#1A56DB]">Right Fit,</span> Every Time
              </h1>

              <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                Our proprietary 21-trait behavioral assessment goes beyond resumes.
                Understand candidate work ethic, safety consciousness, and cultural fit
                before you make an offer.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://portal.trabz.ph/register"
                  className="rounded-lg bg-[#1A56DB] px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[#1A56DB]/25 hover:bg-[#1E40AF] transition-colors"
                >
                  Try Free Assessment
                </a>
                <Link
                  href="/contact"
                  className="rounded-lg bg-white px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50 transition-colors"
                >
                  View Sample Report
                </Link>
              </div>

              {/* Quick stats */}
              <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
                <div>
                  <p className="text-3xl font-bold text-[#1A56DB]">21</p>
                  <p className="text-sm text-gray-500 mt-1">Traits Measured</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#EAB308]">5</p>
                  <p className="text-sm text-gray-500 mt-1">Core Domains</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">94%</p>
                  <p className="text-sm text-gray-500 mt-1">Prediction Accuracy</p>
                </div>
              </div>
            </motion.div>

            {/* Right - Score Card Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-white rounded-2xl p-6 shadow-2xl ring-1 ring-gray-200">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1A56DB] to-[#EAB308] flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">86</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Overall Score</p>
                  <div className="mt-3">
                    <h4 className="text-gray-900 font-semibold text-center">KayaScore Card</h4>
                    <p className="text-gray-500 text-sm text-center">Maria Santos • Cashier</p>
                  </div>
                </div>

                {/* Domain scores */}
                <div className="space-y-3 mb-6">
                  {[
                    { label: 'Work Ethic', value: 88, color: 'bg-[#1A56DB]' },
                    { label: 'Safety', value: 92, color: 'bg-green-500' },
                    { label: 'Interpersonal', value: 85, color: 'bg-purple-500' },
                    { label: 'Adaptability', value: 78, color: 'bg-[#EAB308]' },
                    { label: 'Motivation', value: 90, color: 'bg-pink-500' },
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

                {/* Dark trait screen */}
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <ShieldCheckIcon className="w-5 h-5 text-green-600" />
                    <span className="text-green-700 font-medium text-sm">Dark Trait Screen: CLEAR</span>
                  </div>
                  <span className="text-green-600 text-sm font-semibold">✓ Hire Ready</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three-Layer Assessment Model - Light */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Assessment Model"
            badgeVariant="primary"
            title="Three-Layer Assessment"
            description="Our comprehensive assessment combines behavioral profiling, situational judgment, and dark trait screening for a complete picture."
            className="mb-16"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                layer: 'Layer 1',
                title: 'Behavioral Profile',
                subtitle: '21 Traits • 15-20 mins',
                desc: 'Measures core behavioral competencies across 5 domains: Work Ethic, Safety, Interpersonal, Adaptability, and Motivation.',
                color: 'blue',
                icon: <ChartBarIcon className="w-8 h-8" />,
              },
              {
                layer: 'Layer 2',
                title: 'Situational Judgment',
                subtitle: 'Role-Specific • 10-15 mins',
                desc: 'Presents realistic workplace scenarios tailored to each job category. Measures decision-making under pressure.',
                color: 'yellow',
                icon: <ClipboardDocumentCheckIcon className="w-8 h-8" />,
              },
              {
                layer: 'Layer 3',
                title: 'Dark Trait Screening',
                subtitle: 'Safety Critical • 10 mins',
                desc: 'Screens for 6 dark traits that predict workplace problems: dishonesty, substance abuse, violence, theft, absenteeism, and negligence.',
                color: 'red',
                icon: <ShieldExclamationIcon className="w-8 h-8" />,
              },
            ].map((layer, i) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-gray-100"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${layer.color === 'blue' ? 'bg-[#1A56DB]/10 text-[#1A56DB]' :
                  layer.color === 'yellow' ? 'bg-[#EAB308]/10 text-[#EAB308]' :
                    'bg-red-100 text-red-600'
                  }`}>
                  {layer.icon}
                </div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${layer.color === 'blue' ? 'bg-[#1A56DB]/10 text-[#1A56DB]' :
                  layer.color === 'yellow' ? 'bg-[#EAB308]/10 text-[#EAB308]' :
                    'bg-red-100 text-red-600'
                  }`}>
                  {layer.layer}
                </span>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{layer.title}</h3>
                <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                  <ClockIcon className="w-4 h-4" />
                  {layer.subtitle}
                </p>
                <p className="text-gray-600 text-sm mt-4">{layer.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 21 Traits Across 5 Domains - Light */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-[#EAB308]/10 text-[#EAB308]">
              21 Traits
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
              Five Core Domains
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our behavioral profile measures 21 distinct traits across five
              domains that predict blue-collar job success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {domains.map((domain, i) => (
              <motion.div
                key={domain.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white rounded-2xl p-6 ring-1 ring-gray-100 hover:shadow-lg transition-shadow`}
              >
                <div className="text-3xl mb-3">{domain.emoji}</div>
                <h3 className={`font-bold text-lg ${domain.color === 'blue' ? 'text-[#1A56DB]' :
                  domain.color === 'green' ? 'text-green-600' :
                    domain.color === 'purple' ? 'text-purple-600' :
                      domain.color === 'yellow' ? 'text-[#EAB308]' :
                        'text-pink-600'
                  }`}>{domain.name}</h3>
                <ul className="mt-4 space-y-2">
                  {domain.traits.map((trait) => (
                    <li key={trait} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckBadgeIcon className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      {trait}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Trait Screening - Light */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-red-100 text-red-600">
                Dark Trait Screening
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
                Protect Your Business
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our dark trait screening identifies candidates who may pose risks
                to your workplace. Each trait is rated as Green (Low Risk),
                Yellow (Monitor), or Red (High Risk).
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {darkTraits.map((item, i) => (
                  <motion.div
                    key={item.trait}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white rounded-lg p-4 ring-1 ring-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <ExclamationTriangleIcon className="w-5 h-5 text-red-500" />
                      <h4 className="font-semibold text-gray-900 text-sm">{item.trait}</h4>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Risk Rating Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl ring-1 ring-gray-100"
            >
              <h3 className="text-gray-900 font-semibold mb-6">Risk Zone Rating</h3>
              <div className="space-y-4">
                {[
                  { zone: 'Green Zone', desc: 'Low Risk - Safe to hire', color: 'bg-green-500', textColor: 'text-green-700', bgColor: 'bg-green-50' },
                  { zone: 'Yellow Zone', desc: 'Monitor - Proceed with caution', color: 'bg-yellow-500', textColor: 'text-yellow-700', bgColor: 'bg-yellow-50' },
                  { zone: 'Red Zone', desc: 'High Risk - Not recommended', color: 'bg-red-500', textColor: 'text-red-700', bgColor: 'bg-red-50' },
                ].map((zone) => (
                  <div key={zone.zone} className={`flex items-center gap-4 p-4 rounded-xl ${zone.bgColor}`}>
                    <div className={`w-4 h-4 rounded-full ${zone.color}`} />
                    <div>
                      <h4 className={`font-semibold ${zone.textColor}`}>{zone.zone}</h4>
                      <p className="text-gray-600 text-sm">{zone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Categories & SJT Scenarios - Light */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-[#1A56DB]/10 text-[#1A56DB]">
              Role-Specific
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
              9 Job Categories
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Each job category has its own set of situational judgment scenarios
              that test real-world decision making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobCategories.map((category, i) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl p-6 ring-1 ring-gray-100 hover:ring-[#1A56DB]/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1A56DB]/10 flex items-center justify-center text-[#1A56DB] mb-4">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
                <p className="text-gray-500 text-sm mt-2">
                  <span className="font-medium text-gray-700">Scenarios:</span> {category.scenarios}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Modes - Light */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-[#EAB308]/10 text-[#EAB308]">
              Accessibility
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
              Multiple Delivery Modes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              KayaScore is available in formats that reach every worker,
              from smartphone users to those with basic feature phones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {deliveryModes.map((mode, i) => (
              <motion.div
                key={mode.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 ring-1 ring-gray-100 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-[#EAB308]/10 flex items-center justify-center text-[#EAB308] mx-auto mb-4">
                  {mode.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{mode.name}</h3>
                <p className="text-gray-500 text-xs mt-2">{mode.desc}</p>
                <p className="text-[#1A56DB] text-xs font-medium mt-2">{mode.time}</p>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full ring-1 ring-gray-100">
              <GlobeAltIcon className="w-5 h-5 text-[#1A56DB]" />
              <span className="text-gray-600 text-sm">Available in:</span>
              {languages.map((lang, i) => (
                <span key={lang} className="text-gray-900 font-medium text-sm">
                  {lang}{i < languages.length - 1 && <span className="text-gray-300 mx-2">•</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Cheating & Integrity */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="bg-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>

                  <div className="space-y-4 font-mono text-sm text-gray-300">
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                      <span>Question_ID: 8492</span>
                      <span className="text-green-400">Verified</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                      <span>Response_Time: 4.2s</span>
                      <span className="text-green-400">Normal</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                      <span>Device_FP: iPhone_13</span>
                      <span className="text-green-400">Match</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span>Selfie_Check: Match</span>
                      <span className="text-green-400">99.8%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-gray-100 text-gray-700">
                Integrity Measures
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
                100% Validated Results
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We prevent gaming the system with multi-layer anti-cheating protocols.
                Every score is a true reflection of the candidate.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                {[
                  { title: 'Randomized Questions', desc: 'No two tests are alike. Questions are shuffled from a massive bank.' },
                  { title: 'Selfie Verification', desc: 'Camera snaps photo at start to verify identity matches profile.' },
                  { title: 'Time-Stamp Analysis', desc: 'Detects impossible response times or hesitation patterns.' },
                  { title: 'Consistency Checks', desc: 'Cross-references answers to catch contradictory claims.' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1A56DB] mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Light */}
      <section className="py-24 bg-white" id="pricing">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Assessment Pricing"
            badgeVariant="primary"
            title="Pay Per Assessment"
            description="No subscriptions. Just pay for what you use."
            className="mb-16"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {assessmentPricing.map((tier, i) => (
              <PricingTier
                key={tier.name}
                name={tier.name}
                price={tier.price}
                description={tier.desc}
                features={tier.features}
                featured={tier.featured}
                index={i}
              />
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Volume discounts available for 50+ assessments. <Link href="/contact" className="text-primary hover:underline">Contact sales</Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Make Better Hiring Decisions?"
        description="Try KayaScore on your next candidate. First assessment is free."
        primaryText="Try Free Assessment"
        primaryHref="#"
        secondaryText="Back to Business"
        secondaryHref="/en/for-business"
      />
    </>
  )
}

// Add missing icon
function ShoppingBagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  )
}
