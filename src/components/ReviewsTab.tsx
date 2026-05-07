'use client'

import { useEffect } from 'react'

type WindowWithRs = Window & {
  rs?: { loadWidget: (id: string, name: string, firmId: number, props: object) => void }
  requestIdleCallback?: (cb: () => void, opts?: { timeout?: number }) => number
}

export default function ReviewsTab() {
  useEffect(() => {
    if (document.getElementById('rs-core-script')) return

    const load = () => {
      if (!document.getElementById('rs-widget-stylesheet')) {
        const link = document.createElement('link')
        link.id = 'rs-widget-stylesheet'
        link.rel = 'stylesheet'
        link.type = 'text/css'
        link.media = 'all'
        link.href = 'https://www.reviewsolicitors.co.uk/assets/css/build/widgets/rs-widget-sideNew.css?v=1.0.0'
        link.crossOrigin = 'anonymous'
        link.referrerPolicy = 'no-referrer'
        document.head.appendChild(link)
      }

      const rsCore = document.createElement('script')
      rsCore.id = 'rs-core-script'
      rsCore.src = 'https://www.reviewsolicitors.co.uk/widget/rs.js'
      rsCore.async = true
      rsCore.crossOrigin = 'anonymous'
      rsCore.referrerPolicy = 'no-referrer'
      rsCore.onload = () => {
        const w = window as WindowWithRs
        w.rs?.loadWidget('rswidget_6jga6', 'side', 9742, {
          google: true,
          defaultposition: true,
          isClick: false,
          stats: ['satisfaction', 'wouldRecommend', 'valueForMoney', 'approachability', 'legalKnowledge'],
          widgetStyle: 2,
          mr: 4,
        })
      }
      document.head.appendChild(rsCore)
    }

    const w = window as WindowWithRs
    if (typeof w.requestIdleCallback === 'function') {
      w.requestIdleCallback(load, { timeout: 3000 })
    } else {
      setTimeout(load, 1)
    }
  }, [])

  return <div id="rswidget_6jga6" />
}
