import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: {
      default: t('home.title'),
      template: `%s | ${t('siteName')}`,
    },
    description: t('home.description'),
    keywords: t('home.keywords'),
    openGraph: {
      locale: locale === 'fil' ? 'fil_PH' : 'en_US',
      type: 'website',
      siteName: t('siteName'),
      images: ['/images/og-home.jpg'],
    },
    metadataBase: new URL('https://trabz.ph'),
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'fil' | 'en')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <Header />
      <main>{children}</main>
      <Footer />
    </NextIntlClientProvider>
  )
}
