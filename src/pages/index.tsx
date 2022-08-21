import React from "react"
import Layout from "../components/layout"

// Components
import HomeBanner from "../components/homePage/HomeBanner"

const IndexPage: React.FC = props => {
  return (
    <Layout>
      <HomeBanner />
    </Layout>
  )
}

export default IndexPage
