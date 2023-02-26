import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/app.scss"
import Script from "next/script"

const MyApp = ({ Component, pageProps }) => {
  React.useEffect(() => {
    import("bootstrap/dist/js/bootstrap")
  }, [])
  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-C43MW82YL1`} />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-C43MW82YL1');
      `}
      </Script>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
