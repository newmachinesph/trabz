import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import TermsPageClient from './TermsPageClient'

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params
    return generatePageMetadata({
        pageKey: 'terms',
        locale,
        canonicalPath: '/legal/terms',
    })
}

export default function TermsPage() {
    return <TermsPageClient />
}
