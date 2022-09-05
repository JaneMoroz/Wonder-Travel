import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Styled components
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

// Components
import { Header, Footer, CustomCursor as Cursor, Navigation } from "./index"

// Context
import { useGlobalStateContext } from "../context/globalContext"

type ThemeType = {
  background: string
  text: string
  pink: string
  left: string
  top: string
}

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${normalize}
  * {
    text-decoration: none;
    cursor: none;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }


  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background:  ${props => props.theme.background};
    overscroll-behavior: none;
    overflow-x: hidden;
  }
`

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [hamburgerPosition, setHamburgerPosition] = useState({ x: 0, y: 0 })

  const darkTheme: ThemeType = {
    background: "#555b6e",
    text: "#faf9f9",
    pink: "#f28482",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  }

  const lightTheme: ThemeType = {
    background: "#faf9f9",
    text: "#89b0ae",
    pink: "#f28482",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  }

  const { currentTheme } = useGlobalStateContext()

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Cursor />
      <Header
        hamburgerPosition={hamburgerPosition}
        setHamburgerPosition={setHamburgerPosition}
      />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
