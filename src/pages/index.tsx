import React from "react"
import Layout from "../components/layout"

// Components
import HomeBanner from "../components/homePage/HomeBanner"
import HomeContent from "../components/homePage/HomeContent"
import HomeFeatured from "../components/homePage/HomeFeatured"
import HomeAbout from "../components/homePage/HomeAbout"

// Context
import {
  useGlobalActionContext,
  useGlobalStateContext,
} from "../context/globalContext"

const IndexPage: React.FC = () => {
  const { cursorStyles } = useGlobalStateContext()
  const { dispatch } = useGlobalActionContext()

  // Cursor handlers
  const onCursor = (cursorType: string) => {
    cursorType = cursorStyles.includes(cursorType) ? cursorType : ""
    dispatch({ type: "CURSOR_TYPE", cursorType })
  }
  return (
    <Layout>
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeFeatured onCursor={onCursor} />
      <HomeAbout onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage
