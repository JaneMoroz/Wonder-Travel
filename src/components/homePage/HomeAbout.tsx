import React, { useState } from "react"
import { motion } from "framer-motion"

// Styled Components
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeAboutSection,
  About,
  Services,
  AccordionHeader,
  AccordionContent,
  AccordionIcon,
} from "../../styles/homeStyles"

// Services
import { services } from "../../assets/data/services"

// Context
import { useGlobalStateContext } from "../../context/globalContext"

type HomeAboutProps = {
  onCursor: (cursorType: string) => void
}

const HomeAbout: React.FC<HomeAboutProps> = ({ onCursor }) => {
  const [expanded, setExpanded] = useState(0)

  return (
    <HomeAboutSection
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
        <Flex alignTop>
          <About>
            <h2>Путешествия — это не отдых, это стиль жизни.</h2>
            <p>
              Горы дают ни с чем не сравнимое чувство свободы и силы, учат
              преодолевать себя, быть в гармонии с окружающим миром. <br />
              <br /> Мы постоянно изучаем новые направления и доказываем, что
              нет ничего невозможного, даже в том, чтобы отправиться на другой
              конец света. Впереди много новых маршрутов, ведь не вся карта мира
              еще освоена.
            </p>
          </About>
          <Services>
            <h3>Наши услуги</h3>
            {services.map(service => (
              <Accordion
                key={service.id}
                id={service.id}
                title={service.title}
                results={service.results}
                expanded={expanded}
                setExpanded={setExpanded}
                onCursor={onCursor}
              />
            ))}
          </Services>
        </Flex>
      </Container>
    </HomeAboutSection>
  )
}

type AccordionProps = {
  id: number
  title: string
  results: string[]
  expanded: number
  setExpanded: React.Dispatch<React.SetStateAction<number>>
  onCursor: (cursorType: string) => void
}

const Accordion: React.FC<AccordionProps> = ({
  id,
  title,
  results,
  expanded,
  setExpanded,
  onCursor,
}) => {
  const isOpen = id === expanded
  const [hovered, setHovered] = useState(false)
  const { currentTheme } = useGlobalStateContext()
  return (
    <>
      <AccordionHeader
        onClick={() => setExpanded(isOpen ? -1 : id)}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={() => onCursor("")}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        whileHover={{
          color: currentTheme === "dark" ? "#fff" : "#2f3e46",
        }}
      >
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
        </AccordionIcon>
        {title}
      </AccordionHeader>
      <AccordionContent
        key="content"
        animate={{ height: isOpen ? "100%" : "0" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {results.map((result, index) => {
          return <span key={index}>{result}</span>
        })}
      </AccordionContent>
    </>
  )
}

export default HomeAbout
