'use client'

import { useEffect } from 'react'

export default function ReviewsTab() {
  useEffect(() => {
    // Prevent double-init (React StrictMode runs effects twice in dev)
    if (document.getElementById('rs-core-script')) return

    const rsCore = document.createElement('script')
    rsCore.id = 'rs-core-script'
    rsCore.src = 'https://www.reviewsolicitors.co.uk/widget/rs.js'
    rsCore.onload = () => {
      // rs.js defines window.rs; now load the side widget via its API
      // 'side' is the canonical name — rs.loadWidget remaps it to 'sideNew' internally
      ;(window as unknown as { rs: { loadWidget: (id: string, name: string, firmId: number, props: object) => void } }).rs.loadWidget(
        'rswidget_6jga6',
        'side',
        9742,
        {
          google: true,
          defaultposition: true,
          isClick: false,
          stats: ['satisfaction', 'wouldRecommend', 'valueForMoney', 'approachability', 'legalKnowledge'],
          widgetStyle: 2,
          mr: 4,
        }
      )
    }
    document.head.appendChild(rsCore)
  }, [])

  return <div id="rswidget_6jga6" />
}
