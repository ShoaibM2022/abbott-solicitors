import Script from 'next/script'

export default function ReviewsTab() {
  return (
    <>
      <div id="rswidget_6jga6" />
      <Script id="rs-widget-init" strategy="afterInteractive">{`
        var rsWidgetUrlsideNew = 'https://www.reviewsolicitors.co.uk/widget/';
        var rsEndpointUrlsideNew = 'https://www.reviewsolicitors.co.uk/';
        var rsElementIdsideNew = 'rswidget_6jga6';
        var rsWidgetNamesideNew = 'sideNew';
        var rsFirmIdsideNew = 9742;
        var rsPropssideNew = {"google":true,"defaultposition":true,"isClick":false,"stats":["satisfaction","wouldRecommend","valueForMoney","approachability","legalKnowledge"],"widgetStyle":2,"mr":4};
        (function(){
          var s = document.createElement('script');
          s.src = 'https://www.reviewsolicitors.co.uk/widget/rs-widget-sideNew.js';
          s.defer = true;
          document.head.appendChild(s);
        })();
      `}</Script>
    </>
  )
}
