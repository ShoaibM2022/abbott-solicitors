'use client'

import { useEffect } from 'react'

type WindowWithRs = Window & {
  rs?: { loadWidget: (id: string, name: string, firmId: number, props: object) => void }
}

export default function ReviewsTab() {
  useEffect(() => {
    if (document.getElementById('rs-core-script')) return

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
  }, [])

  return <div id="rswidget_6jga6" />
}
