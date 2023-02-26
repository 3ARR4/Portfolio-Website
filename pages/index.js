import Head from "next/head"
import Script from "next/script"
import Header from "../components/Header"

const Home = () => (
  <>
    <Head>
      <title>Axel Barraza</title>
      <meta name="description" content="Start, systemize, and scale your real estate investing business at Rent Plan" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Script src="https://kit.fontawesome.com/56472d7d03.js" crossOrigin="anonymous" />

    <div id="main">
      <Header />
    </div>
  </>
)

export default Home
