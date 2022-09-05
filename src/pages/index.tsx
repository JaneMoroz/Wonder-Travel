import React from "react"

// Components
import {
  Layout,
  HomeBanner,
  HomeContent,
  HomeFeatured,
  HomeAbout,
  HomeTours,
} from "../components/index"

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
