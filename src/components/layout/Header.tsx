'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, useRouter, usePathname } from '@/i18n/navigation'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const navKeys = [
  { key: 'workers', href: '/for-workers' },
  { key: 'employers', href: '/for-business' },
  { key: 'kayaScore', href: '/for-business/assessment' },
  { key: 'ofwHub', href: '/ofw' },
  { key: 'pricing', href: '/pricing' },
  { key: 'about', href: '/about' },
] as const

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const t = useTranslations('nav')
  const tc = useTranslations('common')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const switchLocale = (newLocale: 'fil' | 'en') => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
      ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100/50'
      : 'bg-white/0 border-b border-transparent'
      }`}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
            <Image
              src="/logo.svg"
              alt="Trabz"
              width={120}
              height={32}
              className="h-8 w-auto transition-transform group-hover:scale-105"
              priority
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-10">
          {navKeys.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="relative text-sm font-semibold text-gray-700 hover:text-primary transition-colors group py-2"
            >
              {t(item.key)}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-4">
          <button
            type="button"
            onClick={() => switchLocale(locale === 'fil' ? 'en' : 'fil')}
            className="hidden lg:block rounded-full px-3 py-1 text-xs font-bold text-gray-600 ring-1 ring-gray-200 hover:ring-primary hover:text-primary transition-all"
          >
            {locale === 'fil' ? 'EN' : 'FIL'}
          </button>
          <div className="hidden lg:block w-px h-6 bg-gray-200" />
          <a href="https://portal.trabz.ph/login" className="hidden text-sm font-semibold text-gray-700 lg:block hover:text-primary transition-colors">
            {tc('login')}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary-hover hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
          >
            {tc('contact')}
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">{tc('openMainMenu')}</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-2xl">
          <div className="flex items-center gap-x-6">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <Image src="/logo.svg" alt="Trabz" width={120} height={32} className="h-8 w-auto" />
            </Link>
            <Link
              href="/contact"
              className="ml-auto rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-primary-hover"
            >
              {tc('contact')}
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-500 hover:text-gray-900"
            >
              <span className="sr-only">{tc('closeMenu')}</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-gray-100">
              <div className="space-y-2 py-6">
                {navKeys.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-primary transition-colors"
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </div>
              <div className="py-6 space-y-3">
                <button
                  type="button"
                  onClick={() => { switchLocale(locale === 'fil' ? 'en' : 'fil'); setMobileMenuOpen(false) }}
                  className="-mx-3 w-full text-left block rounded-lg px-3 py-2.5 text-base font-semibold text-primary hover:bg-gray-50"
                >
                  {locale === 'fil' ? 'Switch to English' : 'Lumipat sa Filipino'}
                </button>
                <a
                  href="https://portal.trabz.ph/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {tc('login')}
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
