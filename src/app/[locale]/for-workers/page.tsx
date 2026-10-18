import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import WorkersPageClient from './WorkersPageClient'

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params
    return generatePageMetadata({
        pageKey: 'workers',
        locale,
        canonicalPath: '/for-workers',
        ogImagePath: '/images/og-workers.jpg',
    })
}

export default function WorkersPage() {
    return <WorkersPageClient />
}
