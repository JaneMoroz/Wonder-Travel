import React from "react"

// Styled Components
import { Container } from "../../styles/globalStyles"
import { HomeContentSection, Content } from "../../styles/homeStyles"

const HomeContent = () => {
  return (
    <HomeContentSection exit={{ opacity: 0 }}>
      <Container>
        <Content
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
          Если вы из тех, кто любит активный отдых на природе и не боится
          трудностей, то Камчатка для вас — настоящая сокровищница. Гейзеры,
          вулканы, дикая природа — это и многое другое ждет вас во время
          путешествия.
        </Content>
      </Container>
    </HomeContentSection>
  )
}

export default HomeContent
