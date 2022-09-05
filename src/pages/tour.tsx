import React from "react"
import { Layout } from "../components/index"
import { motion, useTransform, useScroll } from "framer-motion"

// Test image
import tour1 from "../assets/images/tour-1.jpg"

// Styled Components
import { Container } from "../styles/globalStyles"
import {
  TourContentSection,
  TourImageContainer,
  TourTitleContainer,
} from "../styles/tourStyles"

// Variants

const TourPage: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <Layout>
      <TourContentSection>
        <Container>
          <TourTitleContainer>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 2 } }}
            >
              <span>Целый день</span>
              <span>Рыбалка</span>
              <span>Косатки</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1.5 } }}
            >
              Экскурсия к бухте Русская
            </motion.h1>
          </TourTitleContainer>
        </Container>
        <TourImageContainer
          style={{ scale: scale }}
          initial={{ y: "-50%", height: 480, width: 1244 }}
          animate={{
            y: 0,
            width: "100%",
            transition: {
              delay: 0.2,
              duration: 1.4,
              ease: [0.6, 0.05, -0.01, 0.9],
            },
          }}
        >
          <img src={tour1} alt="Бухта Русская" />
        </TourImageContainer>
      </TourContentSection>
    </Layout>
  )
}

export default TourPage
