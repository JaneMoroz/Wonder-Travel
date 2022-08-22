import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import starsVideo from "../../assets/video/fire-small.mp4"

// Scroll behaviour
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

// Styled components
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeFeaturedSection,
  FeaturedContent,
  FeaturedVideo,
  FeaturedTours,
} from "../../styles/homeStyles"

type HomeFeaturedProps = {
  onCursor: (cursorType: string) => void
}

const HomeFeatured: React.FC<HomeFeaturedProps> = ({ onCursor }) => {
  const animation = useAnimation()
  const [featuredRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])
  const [hovered, setHovered] = useState(false)

  return (
    <HomeFeaturedSection
      ref={featuredRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: {
          opacity: 0,
          y: 72,
        },
      }}
    >
      <Container>
        <Link to="/">
          <FeaturedContent
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
            <h2 className="featured-title">
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
          </FeaturedContent>
          <FeaturedVideo>
            <video loop autoPlay muted src={starsVideo} />
          </FeaturedVideo>
        </Link>
      </Container>
      <Container>
        <FeaturedTours>
          <Flex flexEnd>
            <button>
              <span>Все туры</span>
            </button>
          </Flex>
        </FeaturedTours>
      </Container>
    </HomeFeaturedSection>
  )
}

export default HomeFeatured