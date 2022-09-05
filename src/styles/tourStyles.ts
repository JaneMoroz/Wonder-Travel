import styled from "styled-components"
import { motion } from "framer-motion"

// Tour Content Section
export const TourContentSection = styled(motion.div)`
  margin-top: 200px;
  margin-bottom: 200px;
  box-sizing: border-box;
  color: ${props => props.theme.text};
`

// Tour Title
export const TourTitleContainer = styled.div`
  div {
    display: flex;
    justify-content: end;
    column-gap: 16px;

    span {
      color: ${props => props.theme.pink};
      font-size: 12px;
      text-transform: uppercase;
      font-weight: 600;
    }
  }

  h1 {
    font-size: 5.6rem;
    font-weight: 900;
    line-height: 90px;
    margin-top: 0;

    @media only screen and (max-width: 56.25em) {
      font-size: 4.4rem;
      line-height: 75px;
    }

    @media only screen and (max-width: 37.5em) {
      font-size: 3.6rem;
      line-height: 65px;
    }
  }
`

// Tour Image
export const TourImageContainer = styled(motion.div)`
  margin: 0 auto;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
