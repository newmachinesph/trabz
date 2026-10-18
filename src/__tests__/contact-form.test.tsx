import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

// Mock next-intl
vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
  useLocale: () => 'en',
}))

// Mock next/image
vi.mock('next/image', () => ({
  default: (props: Record<string, unknown>) => {
    const { fill, priority, ...rest } = props
    return <img {...rest} data-fill={fill ? 'true' : undefined} data-priority={priority ? 'true' : undefined} />
  },
}))

// Mock MotionSection components to render children directly
vi.mock('@/components/ui/MotionSection', () => ({
  MotionSection: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  MotionStagger: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  MotionItem: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))

// Mock heroicons
vi.mock('@heroicons/react/24/outline', () => ({
  BuildingOffice2Icon: (props: Record<string, unknown>) => <svg {...props} />,
  EnvelopeIcon: (props: Record<string, unknown>) => <svg {...props} />,
  PhoneIcon: (props: Record<string, unknown>) => <svg {...props} />,
}))

import MakipagUgnayan from '@/app/[locale]/contact/ContactPageClient'

describe('ContactPageClient', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('renders all required form fields', () => {
    render(<MakipagUgnayan />)

    expect(screen.getByLabelText('form.firstName')).toBeInTheDocument()
    expect(screen.getByLabelText('form.lastName')).toBeInTheDocument()
    expect(screen.getByLabelText('form.email')).toBeInTheDocument()
    expect(screen.getByLabelText('form.phoneNumber')).toBeInTheDocument()
    expect(screen.getByLabelText('form.subject')).toBeInTheDocument()
    expect(screen.getByLabelText('form.message')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<MakipagUgnayan />)
    const submitButton = screen.getByRole('button', { name: 'form.submit' })
    expect(submitButton).toBeInTheDocument()
    expect(submitButton).not.toBeDisabled()
  })

  it('shows error status when submitting with empty fields', async () => {
    render(<MakipagUgnayan />)

    const form = screen.getByLabelText('form.firstName').closest('form')!
    fireEvent.submit(form)

    await waitFor(() => {
      expect(screen.getByText('form.errorMessage')).toBeInTheDocument()
    })
  })

  it('shows error when email format is invalid', async () => {
    render(<MakipagUgnayan />)

    fireEvent.change(screen.getByLabelText('form.firstName'), { target: { value: 'John' } })
    fireEvent.change(screen.getByLabelText('form.lastName'), { target: { value: 'Doe' } })
    fireEvent.change(screen.getByLabelText('form.email'), { target: { value: 'invalid-email' } })
    fireEvent.change(screen.getByLabelText('form.message'), { target: { value: 'Test message' } })

    const form = screen.getByLabelText('form.firstName').closest('form')!
    fireEvent.submit(form)

    await waitFor(() => {
      expect(screen.getByText('form.errorMessage')).toBeInTheDocument()
    })
  })

  it('calls API on valid submission and shows success message', async () => {
    const mockFetch = vi.fn().mockResolvedValue({ ok: true })
    global.fetch = mockFetch

    // Set the env variable
    vi.stubEnv('NEXT_PUBLIC_API_URL', 'https://api.test.com')

    render(<MakipagUgnayan />)

    fireEvent.change(screen.getByLabelText('form.firstName'), { target: { value: 'John' } })
    fireEvent.change(screen.getByLabelText('form.lastName'), { target: { value: 'Doe' } })
    fireEvent.change(screen.getByLabelText('form.email'), { target: { value: 'john@example.com' } })
    fireEvent.change(screen.getByLabelText('form.message'), { target: { value: 'Hello, this is a test.' } })

    const form = screen.getByLabelText('form.firstName').closest('form')!
    fireEvent.submit(form)

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('https://api.test.com/contact', expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      }))
    })

    await waitFor(() => {
      expect(screen.getByText('form.successMessage')).toBeInTheDocument()
    })

    vi.unstubAllEnvs()
  })

  it('shows error message on API failure', async () => {
    const mockFetch = vi.fn().mockResolvedValue({ ok: false })
    global.fetch = mockFetch

    vi.stubEnv('NEXT_PUBLIC_API_URL', 'https://api.test.com')

    render(<MakipagUgnayan />)

    fireEvent.change(screen.getByLabelText('form.firstName'), { target: { value: 'John' } })
    fireEvent.change(screen.getByLabelText('form.lastName'), { target: { value: 'Doe' } })
    fireEvent.change(screen.getByLabelText('form.email'), { target: { value: 'john@example.com' } })
    fireEvent.change(screen.getByLabelText('form.message'), { target: { value: 'Hello, this is a test.' } })

    const form = screen.getByLabelText('form.firstName').closest('form')!
    fireEvent.submit(form)

    await waitFor(() => {
      expect(screen.getByText('form.errorMessage')).toBeInTheDocument()
    })

    vi.unstubAllEnvs()
  })

  it('shows error message when fetch throws an exception', async () => {
    const mockFetch = vi.fn().mockRejectedValue(new Error('Network error'))
    global.fetch = mockFetch

    vi.stubEnv('NEXT_PUBLIC_API_URL', 'https://api.test.com')

    render(<MakipagUgnayan />)

    fireEvent.change(screen.getByLabelText('form.firstName'), { target: { value: 'John' } })
    fireEvent.change(screen.getByLabelText('form.lastName'), { target: { value: 'Doe' } })
    fireEvent.change(screen.getByLabelText('form.email'), { target: { value: 'john@example.com' } })
    fireEvent.change(screen.getByLabelText('form.message'), { target: { value: 'Hello, this is a test.' } })

    const form = screen.getByLabelText('form.firstName').closest('form')!
    fireEvent.submit(form)

    await waitFor(() => {
      expect(screen.getByText('form.errorMessage')).toBeInTheDocument()
    })

    vi.unstubAllEnvs()
  })

  it('shows error when NEXT_PUBLIC_API_URL is not set', async () => {
    // Ensure the env variable is not set
    delete process.env.NEXT_PUBLIC_API_URL

    render(<MakipagUgnayan />)

    fireEvent.change(screen.getByLabelText('form.firstName'), { target: { value: 'John' } })
    fireEvent.change(screen.getByLabelText('form.lastName'), { target: { value: 'Doe' } })
    fireEvent.change(screen.getByLabelText('form.email'), { target: { value: 'john@example.com' } })
    fireEvent.change(screen.getByLabelText('form.message'), { target: { value: 'Hello, this is a test.' } })

    const form = screen.getByLabelText('form.firstName').closest('form')!
    fireEvent.submit(form)

    await waitFor(() => {
      expect(screen.getByText('form.errorMessage')).toBeInTheDocument()
    })
  })

  it('renders FAQ section', () => {
    render(<MakipagUgnayan />)
    expect(screen.getByText('faqs.title')).toBeInTheDocument()
    expect(screen.getByText('faqs.subtitle')).toBeInTheDocument()
  })
})
