'use client'

import { useEffect } from 'react'

export default function ReviewsTab() {
  useEffect(() => {
    // Set required globals before the widget script reads them
    ;(window as unknown as Record<string, unknown>).rsWidgetUrlsideNew =
      'https://www.reviewsolicitors.co.uk/widget/'
    ;(window as unknown as Record<string, unknown>).rsEndpointUrlsideNew =
      'https://www.reviewsolicitors.co.uk/'
    ;(window as unknown as Record<string, unknown>).rsElementIdsideNew = 'rswidget_6jga6'
    ;(window as unknown as Record<string, unknown>).rsWidgetNamesideNew = 'sideNew'
    ;(window as unknown as Record<string, unknown>).rsFirmIdsideNew = 9742
    ;(window as unknown as Record<string, unknown>).rsPropssideNew = {
      google: true,
      defaultposition: true,
      isClick: false,
      stats: ['satisfaction', 'wouldRecommend', 'valueForMoney', 'approachability', 'legalKnowledge'],
      widgetStyle: 2,
      mr: 4,
    }

    const script = document.createElement('script')
    script.src = 'https://www.reviewsolicitors.co.uk/widget/rs-widget-sideNew.js'
    script.defer = true
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return <div id="rswidget_6jga6" />
}
