import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import PrivacyPageClient from './PrivacyPageClient'

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params
    return generatePageMetadata({
        pageKey: 'privacy',
        locale,
        canonicalPath: '/legal/privacy',
    })
}

export default function PrivacyPage() {
    return <PrivacyPageClient />
}
