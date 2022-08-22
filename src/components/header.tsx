import React from "react"
import { Link } from "gatsby"
import { MdLightMode, MdNightlight } from "react-icons/md"

// Styled components
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"
import { Container, Flex } from "../styles/globalStyles"

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

type HeaderProps = {
  onCursor: (cursorType: string) => void
}

const Header: React.FC<HeaderProps> = ({ onCursor }) => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme, toggleMenu } = useGlobalStateContext()

  const handleToggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
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
          <Menu>
            <button
              onClick={() =>
                dispatch({ type: "TOGGLE_MENU", toggleMenu: !toggleMenu })
              }
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={() => onCursor("")}
              aria-label="Меню/Туры"
            >
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
