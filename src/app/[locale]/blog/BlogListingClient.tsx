'use client'

import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
import { MotionSection, MotionStagger, MotionItem } from '@/components/ui/MotionSection'
import { CalendarIcon, UserIcon, TagIcon } from '@heroicons/react/24/outline'
import { BlogPost } from '@/lib/blog'

interface BlogListingClientProps {
  posts: BlogPost[]
}

export default function BlogListingClient({ posts }: BlogListingClientProps) {
  const locale = useLocale()
  if (posts.length === 0) {
    return (
      <div className="py-24 text-center">
        <p className="text-gray-600">No blog posts available yet. Check back soon!</p>
      </div>
    )
  }

  return (
    <MotionSection className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <MotionStagger className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <MotionItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="h-4 w-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString(locale === 'fil' ? 'fil-PH' : 'en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1">
                      <UserIcon className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </MotionSection>
  )
}
