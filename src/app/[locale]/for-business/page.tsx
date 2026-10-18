import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import BusinessPageClient from './BusinessPageClient'

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params
    return generatePageMetadata({
        pageKey: 'employers',
        locale,
        canonicalPath: '/for-business',
        ogImagePath: '/images/og-business.jpg',
    })
}

export default function BusinessPage() {
    return <BusinessPageClient />
}
