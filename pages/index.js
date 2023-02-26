import Head from "next/head"
import Script from "next/script"

import Logo from "../components/Logo"
import Description from "../components/Description"
import SocialMedia from "../components/SocialMedia"
import Buttons from "../components/Buttons"

const Home = () => (
  <>
    <Head>
      <title>Rent Plan LinkTree</title>
      <meta name="description" content="Start, systemize, and scale your real estate investing business at Rent Plan" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Script src="https://kit.fontawesome.com/56472d7d03.js" crossOrigin="anonymous" />

    <div id="linktree">
      <Logo />
      <Description />
      <Buttons />
      <SocialMedia />
    </div>
  </>
)

export default Home
