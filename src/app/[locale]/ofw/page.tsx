import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import OFWPageClient from './OFWPageClient'

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params
    return generatePageMetadata({
        pageKey: 'ofw',
        locale,
        canonicalPath: '/ofw',
        ogImagePath: '/images/og-ofw.jpg',
    })
}

export default function OFWPage() {
    return <OFWPageClient />
}
