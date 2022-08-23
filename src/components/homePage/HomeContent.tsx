import React from "react"

// Styled Components
import { Container } from "../../styles/globalStyles"
import { HomeContentSection, Content } from "../../styles/homeStyles"

const HomeContent = () => {
  return (
    <HomeContentSection>
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
          Путешествие в этот удивительный край, где воедино переплелись огненные
          вулканы и водные просторы, подарит ощущение свободы, полета и
          бесконечности мироздания.
        </Content>
      </Container>
    </HomeContentSection>
  )
}

export default HomeContent
