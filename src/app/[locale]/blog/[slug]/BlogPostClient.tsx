'use client'

import { useMemo } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
import { CalendarIcon, UserIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import { marked } from 'marked'
import DOMPurify from 'isomorphic-dompurify'
import { BlogPost } from '@/lib/blog'

interface BlogPostClientProps {
  post: BlogPost
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const locale = useLocale()

  const sanitizedHtml = useMemo(() => {
    const rawContent = post.content.replace(/^---[\s\S]*?---\n/, '')
    const html = marked.parse(rawContent, { async: false }) as string
    return DOMPurify.sanitize(html)
  }, [post.content])

  return (
    <article className="bg-white">
      {/* Header */}
      <div className="relative h-[60vh] min-h-[400px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium mb-6"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Back to Blog
            </Link>
            <div className="mb-4">
              <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(locale === 'fil' ? 'fil-PH' : 'en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <div
          className="prose prose-lg prose-gray max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-code:text-primary prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-gray-900 prose-pre:text-gray-100
            prose-img:rounded-xl prose-img:shadow-lg
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-gray-50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg
            prose-ul:list-disc prose-ol:list-decimal"
          dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-primary to-primary-hover py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
          <p className="mt-4 text-lg text-white/90">
            Join thousands of Filipino workers finding their next opportunity on Trabz.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/download"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-primary shadow-sm hover:bg-gray-100"
            >
              Download App
            </Link>
            <Link
              href="/for-business"
              className="inline-flex items-center justify-center rounded-md border-2 border-white px-6 py-3 text-base font-semibold text-white hover:bg-white/10"
            >
              For Employers
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
