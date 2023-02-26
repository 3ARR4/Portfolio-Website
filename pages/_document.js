import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    let GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

    return (
      <Html lang="en">
        <Head>
          <script async src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js, new Date()):
          gtag('config', '${GTM_ID}', {
            page_path: window.location.pathname,
          });
          `
            }}
          />
        </Head>
        <script />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
