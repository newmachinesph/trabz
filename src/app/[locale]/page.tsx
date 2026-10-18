import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import HeroHome from '@/components/sections/HeroHome'
import LogoCloud from '@/components/sections/LogoCloud'
import HowItWorks from '@/components/sections/HowItWorks'
import BentoFeatures from '@/components/sections/BentoFeatures'
import StatsSection from '@/components/sections/StatsSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import CTADownload from '@/components/sections/CTADownload'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    pageKey: 'home',
    locale,
    canonicalPath: '',
    ogImagePath: '/images/og-home.jpg',
  })
}

export default function Home() {
  return (
    <>
      <HeroHome />
      <LogoCloud />
      <HowItWorks />
      <BentoFeatures />
      <StatsSection />
      <TestimonialSection />
      <CTADownload />
    </>
  )
}
