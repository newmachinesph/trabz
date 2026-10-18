'use client'

import { useRef, useEffect, useState, useCallback } from 'react'

const PRESETS = {
  'fb-profile': { label: 'Facebook Profile Picture', width: 320, height: 320 },
  'fb-profile-hd': { label: 'Facebook Profile HD', width: 720, height: 720 },
  'fb-cover': { label: 'Facebook Cover Photo', width: 820, height: 360 },
  'fb-post': { label: 'Facebook Post', width: 1200, height: 630 },
} as const

type PresetKey = keyof typeof PRESETS

const BG_OPTIONS = [
  { label: 'White', value: '#FFFFFF' },
  { label: 'Blue (Primary)', value: '#1A56DB' },
  { label: 'Dark Navy', value: '#0F172A' },
  { label: 'Yellow (Secondary)', value: '#EAB308' },
  { label: 'Light Gray', value: '#F1F5F9' },
  { label: 'Gradient Blue', value: 'gradient-blue' },
  { label: 'Gradient Dark', value: 'gradient-dark' },
]

export default function LogoCanvasClient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [preset, setPreset] = useState<PresetKey>('fb-profile')
  const [bgOption, setBgOption] = useState('#1A56DB')
  const [showTagline, setShowTagline] = useState(true)
  const [showDot, setShowDot] = useState(true)

  const { width, height } = PRESETS[preset]

  const drawLogo = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = width
    canvas.height = height

    // Background
    if (bgOption === 'gradient-blue') {
      const grad = ctx.createLinearGradient(0, 0, width, height)
      grad.addColorStop(0, '#1A56DB')
      grad.addColorStop(1, '#3B82F6')
      ctx.fillStyle = grad
    } else if (bgOption === 'gradient-dark') {
      const grad = ctx.createLinearGradient(0, 0, width, height)
      grad.addColorStop(0, '#0F172A')
      grad.addColorStop(0.5, '#1E293B')
      grad.addColorStop(1, '#0F172A')
      ctx.fillStyle = grad
    } else {
      ctx.fillStyle = bgOption
    }
    ctx.fillRect(0, 0, width, height)

    // Determine text colors based on background
    const isDark = bgOption === '#1A56DB' || bgOption === '#0F172A' || bgOption === 'gradient-blue' || bgOption === 'gradient-dark'
    const isYellow = bgOption === '#EAB308'

    const textColor = isDark ? '#FFFFFF' : isYellow ? '#0F172A' : '#1A56DB'
    const dotColor = isDark ? '#FACC15' : isYellow ? '#1A56DB' : '#EAB308'
    const taglineColor = isDark ? 'rgba(255,255,255,0.7)' : isYellow ? 'rgba(15,23,42,0.7)' : '#6B7280'

    // Calculate font sizes relative to canvas
    const isSquare = width === height
    const logoFontSize = isSquare ? Math.round(width * 0.22) : Math.round(height * 0.35)
    const dotFontSize = Math.round(logoFontSize * 1.2)
    const taglineFontSize = isSquare ? Math.round(width * 0.055) : Math.round(height * 0.1)

    // Center position
    const centerX = width / 2
    const centerY = showTagline ? height / 2 - taglineFontSize * 0.6 : height / 2

    // Draw "Trabz" text
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.font = `800 ${logoFontSize}px "Plus Jakarta Sans", system-ui, sans-serif`
    ctx.fillStyle = textColor

    const trabzMetrics = ctx.measureText('Trabz')

    if (showDot) {
      // Draw "Trabz" with tighter letter spacing
      ctx.font = `800 ${logoFontSize}px "Plus Jakarta Sans", system-ui, sans-serif`
      ctx.letterSpacing = '-0.5px'

      const dotSize = logoFontSize * 0.16
      const totalWidth = trabzMetrics.width + dotSize
      const trabzX = centerX - totalWidth / 2 + trabzMetrics.width / 2

      ctx.fillStyle = textColor
      ctx.fillText('Trabz', trabzX, centerY)

      // Draw the dot (Square) - NO gap, touching the z
      ctx.fillStyle = dotColor
      // Position right at the end of the z with no gap
      const dotX = trabzX + trabzMetrics.width / 2
      // Adjust Y to align with baseline
      const dotY = centerY + logoFontSize * 0.22

      ctx.fillRect(dotX, dotY, dotSize, dotSize)
    } else {
      ctx.fillStyle = textColor
      ctx.fillText('Trabz', centerX, centerY)
    }

    // Draw tagline
    if (showTagline) {
      const taglineY = centerY + logoFontSize * 0.55 + taglineFontSize * 0.4
      ctx.font = `600 ${taglineFontSize}px "Plus Jakarta Sans", system-ui, sans-serif`
      ctx.fillStyle = taglineColor
      ctx.textAlign = 'center'
      ctx.fillText('Hanap. Apply. Hired.', centerX, taglineY)
    }
  }, [width, height, bgOption, showTagline, showDot])

  useEffect(() => {
    drawLogo()
  }, [drawLogo])

  const handleDownload = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const link = document.createElement('a')
    link.download = `trabz-logo-${PRESETS[preset].label.toLowerCase().replace(/\s+/g, '-')}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Trabz<span className="text-secondary">.</span> Logo Canvas
          </h1>
          <p className="mt-2 text-gray-500">
            Generate and download logo images for your Facebook page
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Controls */}
          <div className="p-6 border-b border-gray-100 space-y-5">
            {/* Size Preset */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Size Preset
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(Object.entries(PRESETS) as [PresetKey, typeof PRESETS[PresetKey]][]).map(
                  ([key, { label, width: w, height: h }]) => (
                    <button
                      key={key}
                      onClick={() => setPreset(key)}
                      className={`rounded-lg px-3 py-2 text-xs font-medium transition-all ${preset === key
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                      {label}
                      <span className="block text-[10px] opacity-70 mt-0.5">
                        {w}x{h}px
                      </span>
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Background Color */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Background
              </label>
              <div className="flex flex-wrap gap-2">
                {BG_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setBgOption(opt.value)}
                    className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${bgOption === opt.value
                      ? 'ring-2 ring-primary ring-offset-1 bg-white shadow'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-gray-200 shrink-0"
                      style={{
                        background: opt.value.startsWith('gradient')
                          ? opt.value === 'gradient-blue'
                            ? 'linear-gradient(135deg, #1A56DB, #3B82F6)'
                            : 'linear-gradient(135deg, #0F172A, #1E293B)'
                          : opt.value,
                      }}
                    />
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggles */}
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showTagline}
                  onChange={(e) => setShowTagline(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-gray-700">Show tagline</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showDot}
                  onChange={(e) => setShowDot(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-gray-700">Show yellow dot</span>
              </label>
            </div>
          </div>

          {/* Canvas Preview */}
          <div className="p-8 bg-gray-50 flex flex-col items-center gap-6">
            <div
              className="rounded-xl shadow-lg overflow-hidden border border-gray-200"
              style={{ maxWidth: '100%' }}
            >
              <canvas
                ref={canvasRef}
                style={{
                  width: Math.min(width, 600),
                  height: Math.min(width, 600) * (height / width),
                  maxWidth: '100%',
                  display: 'block',
                }}
              />
            </div>
            <div className="text-center space-y-3">
              <p className="text-xs text-gray-400">
                {width} x {height} px &middot; PNG
              </p>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary-hover hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                  <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                </svg>
                Download PNG
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}