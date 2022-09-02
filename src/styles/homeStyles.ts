import styled from "styled-components"
import { motion } from "framer-motion"

// Banner
export const Banner = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 196px;
`

// Video
export const Video = styled.div`
  height: 100%;
  width: 100%;
  video {
    object-fit: cover;
  }
`

// Canvas
export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: block;
`

// BannerTitle
export const BannerTitle = styled.h1`
  position: absolute;
  bottom: 0;
  left: 18px;
  color: ${props => props.theme.text};
  pointer-events: none;
`

// Headline
export const Headline = styled(motion.span)`
  display: block;
  font-size: 8rem;
  font-weight: 900;
  line-height: 0.76;

  @media only screen and (max-width: 56.25em) {
    font-size: 5.6rem;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 3.2rem;
  }
`

// Content  Section
export const HomeContentSection = styled.div`
  margin-bottom: 200px;
`

// Content
export const Content = styled(motion.h2)`
  width: 70%;
  font-size: 2.3rem;
  font-weight: 400;
  margin-left: 124px;
  color: ${props => props.theme.text};

  @media only screen and (max-width: 56.25em) {
    margin-left: 0;
    width: 90%;
    font-size: 2rem;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 1.8rem;
  }
`

// Home featured section
export const HomeFeaturedSection = styled(motion.div)`
  margin-bottom: 200px;
  position: relative;
  a {
    position: relative;
    margin-bottom: 200px;
    display: block;
  }
`

// Featured content
export const FeaturedContent = styled(motion.div)`
  height: 480px;
  width: 100%;
  padding: 56px 124px;
  box-sizing: border-box;
  color: ${props => props.theme.text};

  @media only screen and (max-width: 56.25em) {
    padding: 32px 56px;
  }

  @media only screen and (max-width: 37.5em) {
    padding: 24px 16px;
  }

  h3 {
    font-size: 1.4rem;
  }
  .meta {
    display: flex;
    @media only screen and (max-width: 37.5em) {
      flex-direction: column;
    }
    h4 {
      padding: 5px 0;
      margin: 0;
      &:last-child {
        margin-left: 1rem;

        @media only screen and (max-width: 37.5em) {
          margin-left: 0;
        }
      }
    }
  }
  .featured-title {
    position: absolute;
    bottom: -128px;
    font-size: 7rem;
    font-weight: 900;
    line-height: 90px;
    margin: 0;

    @media only screen and (max-width: 56.25em) {
      font-size: 72px;
      left: 16px;
    }

    @media only screen and (max-width: 37.5em) {
      font-size: 44px;
      line-height: 60px;
    }

    .arrow {
      width: 120px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;
      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;

        @media only screen and (max-width: 37.5em) {
          width: 100px;
        }
        path {
          fill: ${props => props.theme.text};
        }
      }
    }
  }
`

// Featured video
export const FeaturedVideo = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 480px;
  top: 0;
  display: block;
  overflow: hidden;
  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

// About

export const About = styled.div`
  h2 {
    width: 60%;
    font-size: 2.3rem;
    font-weight: 400;
    margin-left: 124px;
    color: ${props => props.theme.text};

    @media only screen and (max-width: 56.25em) {
      margin-left: 0;
      width: 90%;
      font-size: 2rem;
    }

    @media only screen and (max-width: 37.5em) {
      font-size: 1.8rem;
    }
  }
  p {
    max-width: 440px;
    font-size: 1.4rem;
    line-height: 1.8rem;
    margin-left: 124px;
    color: ${props => props.theme.text};

    @media only screen and (max-width: 56.25em) {
      max-width: 90%;
      margin-left: 0;
    }
  }
`

export const Services = styled.div`
  min-height: 520px;
  h3 {
    color: ${props => props.theme.text};
    font-size: 2.3rem;
    font-weight: 400;
  }
`

// Accordion
export const AccordionHeader = styled(motion.div)`
  width: 100%;
  color: ${props => props.theme.pink};
  height: 32px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.15rem;
  margin: 8px 0;
`

export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 4px;
    background: ${props => props.theme.pink};
    transition: 0.1s ease-in-out;
  }
`

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;
  span {
    width: 100%;
    margin: 8px 0;
    font-size: 0.875rem;
    color: ${props => props.theme.pink};
    display: block;
    font-weight: 300;
  }
`

// Featured tours
export const ToursButton = styled.div`
  margin-top: 36px;
  button {
    background: ${props => props.theme.pink};
    color: #fff;
    position: relative;
    padding: 20px;
    display: block;
    text-align: left;
    font-size: 1.4rem;
    line-height: 1;
    font-weight: 600;
    border: none;
    span {
      margin-right: 100px;
      display: block;
    }
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 20px;
      width: 35px;
      height: 7px;
      display: block;
      background: #fff;
      transform: translateY(-50%);
    }
    &:before {
      margin-top: -8px;
    }
    &:after {
      margin-top: 8px;
    }
  }
`

// Tours
export const HomeToursSection = styled(motion.div)`
  margin-bottom: 200px;
  margin-top: 200px;
  position: relative;
  a {
    position: relative;
    margin-bottom: 200px;
    display: block;
  }
`

export const TourContent = styled(motion.div)`
  height: 480px;
  width: 100%;
  padding: 56px 124px;
  box-sizing: border-box;
  color: ${props => props.theme.text};

  @media only screen and (max-width: 56.25em) {
    padding: 32px 56px;
  }

  @media only screen and (max-width: 37.5em) {
    padding: 24px 16px;
  }

  .tour-title {
    position: absolute;
    bottom: -128px;
    font-size: 7rem;
    font-weight: 900;
    line-height: 90px;
    margin: 0;

    @media only screen and (max-width: 56.25em) {
      font-size: 72px;
      left: 16px;
    }

    @media only screen and (max-width: 37.5em) {
      font-size: 44px;
      line-height: 60px;
    }

    .arrow {
      width: 120px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;
      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;

        @media only screen and (max-width: 37.5em) {
          width: 100px;
        }
        path {
          fill: ${props => props.theme.text};
        }
      }
    }
  }
`

export const TourImage = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 480px;
  display: block;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .overlay {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: ${props => props.theme.background};
    top: 0;
    right: 0;
  }
`
