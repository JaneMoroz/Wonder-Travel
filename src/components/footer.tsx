import React from "react"

// Styled Components
import { Container, Flex } from "../styles/globalStyles"
import { FooterNav, FooterContent, FooterSocial } from "../styles/footerStyles"

// Icons
import { FaVk, FaOdnoklassniki, FaYandex } from "react-icons/fa"
import { useGlobalActionContext } from "../context/globalContext"

const Footer: React.FC = () => {
  const { onCursor } = useGlobalActionContext()
  return (
    <FooterNav>
      <Container>
        <Flex spaceBetween homeFooter>
          <FooterContent>
            <p>+7 (764) 989-77-77</p>
            <p>Центральная ул., 1</p>
            <p>г. Петропавловск-Камчатский</p>
          </FooterContent>
          <FooterSocial>
            <a
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={() => onCursor("")}
              href="/"
            >
              <FaVk />
            </a>
            <a
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={() => onCursor("")}
              href="/"
            >
              <FaOdnoklassniki />
            </a>
            <a
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={() => onCursor("")}
              href="/"
            >
              <FaYandex />
            </a>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  )
}

export default Footer
