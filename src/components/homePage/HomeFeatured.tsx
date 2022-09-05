import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import starsVideo from "../../assets/video/stars-falling.mp4"
import activeVideo from "../../assets/video/hiking-small.mp4"

// Styled components
import {
  Container,
  Flex,
  MediaSection,
  MediaContent,
  MediaSource,
} from "../../styles/globalStyles"

// Context
import { useGlobalActionContext } from "../../context/globalContext"

const HomeFeatured: React.FC = () => {
  const { onCursor } = useGlobalActionContext()
  const [hovered, setHovered] = useState(false)

  return (
    <MediaSection
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.5,
            duration: 0.6,
            ease: [0.6, 0.05, -0.01, 0.9],
          },
        },
        hidden: {
          opacity: 0,
          y: 72,
        },
      }}
    >
      <Container>
        <Link to="/">
          <MediaContent
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={() => onCursor("")}
          >
            <Flex spaceBetween>
              <h3>Горячий тур</h3>
              <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                className="meta"
              >
                <h4>Групповой тур</h4>
                <h4>2022</h4>
              </motion.div>
            </Flex>
            <h2 className="media-title">
              Звездопад <br /> Персеиды
              <span className="arrow">
                <motion.svg
                  animate={{ x: hovered ? 48 : 0 }}
                  transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 57"
                >
                  <path
                    d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </motion.svg>
              </span>
            </h2>
          </MediaContent>
          <MediaSource>
            <video
              height="100%"
              width="100%"
              loop
              autoPlay
              muted
              src={starsVideo}
            />
          </MediaSource>
        </Link>
      </Container>
    </MediaSection>
  )
}

export default HomeFeatured
