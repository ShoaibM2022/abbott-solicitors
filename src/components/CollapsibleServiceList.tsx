'use client'

import { useState, useRef, useEffect } from 'react'

interface Category {
  title: string
  items: string[]
}

const Tick = () => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="shrink-0 mt-[3px]" aria-hidden="true">
    <path d="M1 4l3 3 5-6" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function CollapsibleServiceList({
  label,
  categories,
}: {
  label: string
  categories: Category[]
}) {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number | undefined>(0)

  useEffect(() => {
    if (!panelRef.current) return
    setHeight(open ? panelRef.current.scrollHeight : 0)
  }, [open])

  const id = 'collapsible-service-panel'

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-10 bg-[#0D1B35]/20 border-t border-[#C9A84C]/10">
      <div className="max-w-7xl mx-auto">

        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={id}
          className="flex items-center gap-3 px-6 py-3.5 border border-[#C9A84C]/40 text-[#C9A84C] text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-[#C9A84C]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A84C] transition-all duration-200"
        >
          <span>{open ? 'Hide' : 'View'} {label}</span>
          <svg
            width="12" height="7" viewBox="0 0 12 7" fill="none" aria-hidden="true"
            className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          >
            <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div
          id={id}
          role="region"
          aria-label={label}
          ref={panelRef}
          style={{ height, overflow: 'hidden', transition: 'height 0.45s cubic-bezier(0.22, 1, 0.36, 1)' }}
        >
          <div className="pt-10 pb-2">
            <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">
              Comprehensive Coverage
            </span>
            <h2 className="serif text-[clamp(1.8rem,4vw,3rem)] text-[#F0EDE6] font-light mt-3 mb-10">
              Full Range of <em className="italic text-[#C9A84C]">{label}</em>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map(({ title, items }) => (
                <div key={title} className="flex flex-col gap-3">
                  <h3 className="serif text-base text-[#E8C97A] tracking-wide">{title}</h3>
                  <div className="w-6 h-px bg-[#C9A84C]/30" />
                  <ul className="flex flex-col gap-1.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Tick />
                        <span className="text-[#8A8A94] text-sm font-sans leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
