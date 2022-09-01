import { Link } from "gatsby"
import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

// Styled components
import { Container, Flex } from "../styles/globalStyles"
import { FooterContent, FooterSocial } from "../styles/footerStyles"
import {
  Nav,
  NavHeader,
  CloseNav,
  NavList,
  NavFooter,
  NavVideos,
} from "../styles/navigationStyles"

// Data
import { tours } from "../assets/data/tours"

// Context
import {
  useGlobalStateContext,
  useGlobalActionContext,
} from "../context/globalContext"

// Icons
import { FaVk, FaOdnoklassniki, FaYandex } from "react-icons/fa"

const Navigation: React.FC = () => {
  const [video, setVideo] = useState({
    show: false,
    video: tours[0].video,
    key: "0",
  })
  const { dispatch, onCursor } = useGlobalActionContext()
  const { toggleMenu } = useGlobalStateContext()

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "-100%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <h2>НАШИ ТУРЫ</h2>
                  <CloseNav>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "TOGGLE_MENU",
                          toggleMenu: !toggleMenu,
                        })
                      }
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={() => onCursor("")}
                      aria-label="Закрыть"
                    >
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  {tours.map(tour => {
                    return (
                      <motion.li
                        key={tour.id}
                        onHoverStart={() =>
                          setVideo({
                            show: true,
                            video: tour.video,
                            key: `${tour.id}`,
                          })
                        }
                        onHoverEnd={() =>
                          setVideo({
                            show: false,
                            video: tour.video,
                            key: `${tour.id}`,
                          })
                        }
                        onMouseEnter={() => onCursor("pointer")}
                        onMouseLeave={() => onCursor("")}
                      >
                        <Link to={`${tour.path}`}>
                          <motion.div
                            initial={{ x: -108 }}
                            whileHover={{
                              x: -40,
                              transition: {
                                duration: 0.4,
                                ease: [0.6, 0.05, -0.01, 0.9],
                              },
                            }}
                            className="link"
                          >
                            <span className="arrow">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 101 57"
                              >
                                <path
                                  d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                  fill="#FFF"
                                  fillRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            {tour.title}
                          </motion.div>
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>
              </NavList>
              <NavFooter>
                <Flex spaceBetween>
                  <FooterContent wider>
                    <p>+7 (764) 989-77-77</p>
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
              </NavFooter>
              <NavVideos>
                <motion.div
                  animate={{ width: video.show ? 0 : "100%" }}
                  transition={{ ease: "easeInOut" }}
                  className="reveal"
                ></motion.div>
                <div className="video">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.video
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      key={video.key}
                      loop
                      autoPlay
                      muted
                      src={video.video}
                    />
                  </AnimatePresence>
                </div>
              </NavVideos>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
