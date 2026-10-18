import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import DownloadPageClient from './DownloadPageClient'

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params
    return generatePageMetadata({
        pageKey: 'download',
        locale,
        canonicalPath: '/download',
    })
}

export default function DownloadPage() {
    return <DownloadPageClient />
}
