import { Link } from "gatsby"
import React, { useState } from "react"
import { motion } from "framer-motion"

// Test image
import tour1 from "../../assets/images/tour-1.jpg"

// Styled components
import { Container } from "../../styles/globalStyles"
import {
  HomeToursSection,
  TourContent,
  TourImage,
} from "../../styles/homeStyles"

// Context
import { useGlobalActionContext } from "../../context/globalContext"

const HomeTours = () => {
  const { onCursor } = useGlobalActionContext()
  const [hovered, setHovered] = useState(false)

  return (
    <HomeToursSection>
      <Container>
        <Link to="/">
          <TourContent
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 2.4,
                  duration: 0.6,
                  ease: [0.6, 0.05, -0.01, 0.9],
                },
              },
              hidden: {
                opacity: 0,
                y: 72,
              },
            }}
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={() => onCursor("")}
          >
            <h2 className="tour-title">
              Экскурсия к <br /> бухте Русская
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
          </TourContent>
          <TourImage>
            <img src={tour1} alt="Побережье бухты Русская" />
            <motion.div
              whileInView="hidden"
              initial="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  width: "100%",
                },
                hidden: {
                  width: "0",
                  transition: {
                    delay: 0.8,
                    duration: 1.4,
                    ease: [0.6, 0.05, -0.01, 0.9],
                  },
                },
              }}
              className="overlay"
            ></motion.div>
          </TourImage>
        </Link>
      </Container>
    </HomeToursSection>
  )
}

export default HomeTours
