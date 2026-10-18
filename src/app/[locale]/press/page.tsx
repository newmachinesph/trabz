import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import PressPageClient from './PressPageClient'

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params
    return generatePageMetadata({
        pageKey: 'press',
        locale,
        canonicalPath: '/press',
    })
}

export default function PressPage() {
    return <PressPageClient />
}
