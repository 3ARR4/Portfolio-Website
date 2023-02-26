import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ description, title }) => {
  const defaultMetaData = {
    title: `Rent Plan`,
    description: `Rent Plan provides you with the software to create a plan, build a team, and analyze a property to buy. My goal is to help you build your foundation to financial freedom using the software as a guide to get you there. It's as easy as 1-2-3!`
    // siteUrl: `https://rentplan.com`,
    // image: "/images/rentplan.png",
    // lang: "en"
  }

  return (
    <Helmet>
      <title>{title || defaultMetaData.title}</title>
      <meta name="author" content="Matthew J Roybal" />
      <meta name="description" content={description || defaultMetaData.description} />
      <meta name="keywords" content="Real Estate Investing, Real Estate Plan, Real Estate Team, Property Analysis" />
    </Helmet>
  )
}

export default SEO
