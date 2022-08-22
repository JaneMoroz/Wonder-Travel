import React from "react"
import Layout from "../components/layout"

// Components
import HomeBanner from "../components/homePage/HomeBanner"
import HomeContent from "../components/homePage/HomeContent"
import HomeFeatured from "../components/homePage/HomeFeatured"

// Context
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/globalContext"

const IndexPage: React.FC = props => {
  const { cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()
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
    </Layout>
  )
}

export default IndexPage
