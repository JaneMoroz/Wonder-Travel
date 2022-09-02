import React from "react"
import Layout from "../components/layout"

// Components
import HomeBanner from "../components/homePage/HomeBanner"
import HomeContent from "../components/homePage/HomeContent"
import HomeFeatured from "../components/homePage/HomeFeatured"
import HomeAbout from "../components/homePage/HomeAbout"
import HomeTours from "../components/homePage/HomeTours"

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <HomeBanner />
      <HomeContent />
      <HomeFeatured />
      <HomeAbout />
      <HomeTours />
    </Layout>
  )
}

export default IndexPage
