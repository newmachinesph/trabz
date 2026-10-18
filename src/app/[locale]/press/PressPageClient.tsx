'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import HeroInner from '@/components/sections/HeroInner'
import { MotionSection, MotionStagger, MotionItem } from '@/components/ui/MotionSection'
import {
  DocumentTextIcon,
  PhotoIcon,
  UserGroupIcon,
  EnvelopeIcon,
  PhoneIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline'

export default function PressPageClient() {
  const t = useTranslations('press')

  const mediaKit = [
    {
      icon: PhotoIcon,
      title: 'Brand Assets',
      description: 'Download high-resolution logos, brand colors, and visual guidelines',
      items: ['Logo (SVG, PNG)', 'App Screenshots', 'Brand Guidelines PDF'],
      link: '/public/logo-full.svg',
    },
    {
      icon: DocumentTextIcon,
      title: 'Press Releases',
      description: 'Latest news, announcements, and company updates',
      items: ['Launch Announcement', 'Funding News', 'Partnership Announcements'],
      link: '#',
    },
    {
      icon: UserGroupIcon,
      title: 'Team Bios',
      description: 'Meet the team behind Trabz',
      items: ['Founder Bios', 'Team Photos', 'Advisory Board'],
      link: '#',
    },
  ]

  const stats = [
    { label: 'Registered Workers', value: '10,000+' },
    { label: 'Jobs Posted', value: '5,000+' },
    { label: 'Successful Hires', value: '3,500+' },
    { label: 'Average Time-to-Hire', value: '3 days' },
  ]

  return (
    <main>
      <HeroInner
        subtitle={t('badge') || 'Press & Media'}
        title={t('title') || 'Press Kit & Media Resources'}
        description={t('description') || 'Download our press kit, brand assets, and latest news for media coverage.'}
      />

      {/* About Trabz */}
      <MotionSection className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">About Trabz</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Trabz is revolutionizing blue-collar employment in the Philippines by connecting workers
              with quality job opportunities through AI-powered matching, psychometric assessments, and
              a mobile-first platform designed for the Filipino workforce.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Media Kit */}
      <MotionSection className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Media Kit</h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need for your story about Trabz
            </p>
          </div>

          <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaKit.map((item) => (
              <MotionItem key={item.title}>
                <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-gray-900/5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <ul className="space-y-2 mb-6">
                    {item.items.map((listItem) => (
                      <li key={listItem} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {listItem}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    <ArrowDownTrayIcon className="h-5 w-5" />
                    Download
                  </a>
                </div>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </MotionSection>

      {/* Company Info */}
      <MotionSection className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Company Information</h2>
          </div>

          <dl className="space-y-8">
            <div>
              <dt className="text-sm font-semibold text-gray-900">Founded</dt>
              <dd className="mt-2 text-gray-600">2026</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-gray-900">Headquarters</dt>
              <dd className="mt-2 text-gray-600">Metro Manila, Philippines</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-gray-900">Industry</dt>
              <dd className="mt-2 text-gray-600">HR Technology, Employment Platform, Gig Economy</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-gray-900">Mission</dt>
              <dd className="mt-2 text-gray-600">
                To empower Filipino blue-collar workers with access to quality employment opportunities
                and provide employers with a faster, more reliable way to find trusted talent.
              </dd>
            </div>
          </dl>
        </div>
      </MotionSection>

      {/* Press Contact */}
      <MotionSection className="py-24 bg-gradient-to-br from-primary to-primary-hover">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Media Inquiries</h2>
          <p className="text-xl text-white/90 mb-12">
            For press inquiries, interviews, or additional information
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="mailto:press@trabz.ph"
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-white hover:bg-white/20 transition-colors"
            >
              <EnvelopeIcon className="h-6 w-6" />
              <span className="font-semibold">press@trabz.ph</span>
            </a>
            <a
              href="tel:+6328000000"
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-white hover:bg-white/20 transition-colors"
            >
              <PhoneIcon className="h-6 w-6" />
              <span className="font-semibold">+63 2 8000 0000</span>
            </a>
          </div>
        </div>
      </MotionSection>
    </main>
  )
}
