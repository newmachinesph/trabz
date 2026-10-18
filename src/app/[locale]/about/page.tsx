import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import AboutPageClient from './AboutPageClient'

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params
    return generatePageMetadata({
        pageKey: 'about',
        locale,
        canonicalPath: '/about',
        ogImagePath: '/images/og-about.jpg',
    })
}

export default function AboutPage() {
    return <AboutPageClient />
}
