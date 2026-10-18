import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import ContactPageClient from './ContactPageClient'

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params
    return generatePageMetadata({
        pageKey: 'contact',
        locale,
        canonicalPath: '/contact',
        ogImagePath: '/images/og-contact.jpg',
    })
}

export default function ContactPage() {
    return <ContactPageClient />
}
