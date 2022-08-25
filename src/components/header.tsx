import React, { useRef } from "react"
import { Link } from "gatsby"
import { MdLightMode, MdNightlight } from "react-icons/md"

// Styled components
import { HeaderNav, Logo, Menu, LanguageToggle } from "../styles/headerStyles"
import { Container, Flex } from "../styles/globalStyles"

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

// Custom Hooks
import useElementPosition from "../hooks/useElementPosition"

// Icons
import { MdOutlineLanguage } from "react-icons/md"

type HeaderProps = {
  onCursor: (cursorType: string) => void
  hamburgerPosition: { x: number; y: number }
  setHamburgerPosition: React.Dispatch<{ x: number; y: number }>
}

const Header: React.FC<HeaderProps> = ({ onCursor, setHamburgerPosition }) => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme, toggleMenu } = useGlobalStateContext()
  const hamburgerMenu = useRef(null)
  const position = useElementPosition(hamburgerMenu)

  const handleToggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }

  const handleMenuOver = () => {
    onCursor("locked")
    setHamburgerPosition({ x: position.x, y: position.y + 72 })
  }

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={() => onCursor("")}
          >
            <h1>Travel</h1>
            <Link aria-label="Wonder Travel home page" to="/">
              W
            </Link>
            <span
              onClick={handleToggleTheme}
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={() => onCursor("")}
            >
              {currentTheme === "dark" ? <MdLightMode /> : <MdNightlight />}
            </span>
            <Link aria-label="Wonder Главная страница" to="/">
              NDER
            </Link>
          </Logo>
          <Flex>
            <LanguageToggle>
              <button>
                <MdOutlineLanguage className="icon" />
              </button>
            </LanguageToggle>
            <Menu
              ref={hamburgerMenu}
              onClick={() =>
                dispatch({ type: "TOGGLE_MENU", toggleMenu: !toggleMenu })
              }
              onMouseEnter={handleMenuOver}
              onMouseLeave={() => onCursor("")}
            >
              <button aria-label="Меню/Туры">
                <span></span>
                <span></span>
              </button>
            </Menu>
          </Flex>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
