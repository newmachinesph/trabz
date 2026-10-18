'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { socialLinks } from '@/lib/constants'

type FooterLink = {
  key: string
  href: string
  hash?: string
}

const footerLinks: Record<string, FooterLink[]> = {
  workersLinks: [
    { key: 'findJob', href: '/for-workers' },
    { key: 'gigShifts', href: '/for-workers', hash: '#gig-shifts' },
    { key: 'upskilling', href: '/for-workers', hash: '#upskilling' },
    { key: 'eWallet', href: '/for-workers', hash: '#wallet' },
    { key: 'ofwHub', href: '/ofw' },
  ],
  employersLinks: [
    { key: 'postJob', href: '/for-business' },
    { key: 'kayaScore', href: '/for-business/assessment' },
    { key: 'pricing', href: '/pricing' },
    { key: 'apiAccess', href: '/for-business', hash: '#employer-tools' },
  ],
  companyLinks: [
    { key: 'about', href: '/about' },
    { key: 'contact', href: '/contact' },
    { key: 'blog', href: '/blog' },
    { key: 'press', href: '/press' },
  ],
  legalLinks: [
    { key: 'terms', href: '/legal/terms' },
    { key: 'privacy', href: '/legal/privacy' },
    { key: 'dataProtection', href: '/legal/data-protection' },
  ],
}

function FooterLink({ item, label }: { item: FooterLink; label: string }) {
  const href = item.hash
    ? { pathname: item.href, hash: item.hash }
    : item.href

  const linkHref = typeof href === 'string' ? href : href as { pathname: string; hash: string }

  return (
    <Link href={linkHref} className="text-sm/6 text-gray-400 hover:text-secondary transition-colors">
      {label}
    </Link>
  )
}

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <Image src="/logo-white.svg" alt="Trabz" width={120} height={32} className="h-8 w-auto" />
            </div>
            <p className="text-sm/6 text-balance text-gray-400">
              {t('tagline')}
            </p>
            <div className="flex gap-x-6">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-10 sm:mt-16 grid grid-cols-2 gap-4 sm:gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-white">{t('workersHeading')}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="https://app.trabz.ph" className="text-sm/6 text-secondary hover:text-secondary/80 font-medium transition-colors">
                      Open App &rarr;
                    </a>
                  </li>
                  {footerLinks.workersLinks.map((item) => (
                    <li key={item.key}>
                      <FooterLink item={item} label={t(`workersLinks.${item.key}`)} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-white">{t('employersHeading')}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.employersLinks.map((item) => (
                    <li key={item.key}>
                      <FooterLink item={item} label={t(`employersLinks.${item.key}`)} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-white">{t('companyHeading')}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.companyLinks.map((item) => (
                    <li key={item.key}>
                      <FooterLink item={item} label={t(`companyLinks.${item.key}`)} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-white">{t('legalHeading')}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.legalLinks.map((item) => (
                    <li key={item.key}>
                      <FooterLink item={item} label={t(`legalLinks.${item.key}`)} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm/6 text-gray-400">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
