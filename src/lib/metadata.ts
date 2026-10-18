import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

type PageKey = 'home' | 'workers' | 'employers' | 'ofw' | 'pricing' | 'about' | 'contact' | 'assessment' | 'terms' | 'privacy' | 'dataProtection' | 'blog' | 'press' | 'download'

interface GeneratePageMetadataOptions {
    pageKey: PageKey
    locale: string
    canonicalPath?: string
    ogImagePath?: string
}

export async function generatePageMetadata({
    pageKey,
    locale,
    canonicalPath = '',
    ogImagePath = '/images/og-default.jpg',
}: GeneratePageMetadataOptions): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: `metadata.${pageKey}` })
    const baseUrl = 'https://trabz.ph'
    const canonicalUrl = `${baseUrl}${canonicalPath}`

    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
        openGraph: {
            title: t('title'),
            description: t('description'),
            type: 'website',
            locale: locale === 'fil' ? 'fil_PH' : 'en_US',
            url: canonicalUrl,
            siteName: 'Trabz',
            images: [
                {
                    url: ogImagePath,
                    width: 1200,
                    height: 630,
                    alt: t('title'),
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: t('title'),
            description: t('description'),
        },
        robots: {
            index: true,
            follow: true,
        },
        alternates: {
            canonical: canonicalUrl,
            languages: {
                'en-US': `${baseUrl}/en${canonicalPath}`,
                'x-default': `${baseUrl}/fil${canonicalPath}`,
            },
        },
    }
}
