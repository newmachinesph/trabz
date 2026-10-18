import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import DataProtectionPageClient from './DataProtectionPageClient'

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params
    return generatePageMetadata({
        pageKey: 'dataProtection',
        locale,
        canonicalPath: '/legal/data-protection',
    })
}

export default function DataProtectionPage() {
    return <DataProtectionPageClient />
}
