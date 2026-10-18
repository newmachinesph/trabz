import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import AssessmentPageClient from './AssessmentPageClient'

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params
    return generatePageMetadata({
        pageKey: 'assessment',
        locale,
        canonicalPath: '/for-business/assessment',
        ogImagePath: '/images/og-assessment.jpg',
    })
}

export default function AssessmentPage() {
    return <AssessmentPageClient />
}
