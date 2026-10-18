import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import PricingPageClient from './PricingPageClient'

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params
    return generatePageMetadata({
        pageKey: 'pricing',
        locale,
        canonicalPath: '/pricing',
        ogImagePath: '/images/og-pricing.jpg',
    })
}

export default function PricingPage() {
    return <PricingPageClient />
}
