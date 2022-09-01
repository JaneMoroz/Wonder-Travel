import React from "react"
import Layout from "../components/layout"

// Components
import HomeBanner from "../components/homePage/HomeBanner"
import HomeContent from "../components/homePage/HomeContent"
import HomeFeatured from "../components/homePage/HomeFeatured"
import HomeAbout from "../components/homePage/HomeAbout"

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <HomeBanner />
      <HomeContent />
      <HomeFeatured />
      <HomeAbout />
    </Layout>
  )
}

export default IndexPage
