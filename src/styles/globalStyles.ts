import styled, { css } from "styled-components"
import { motion } from "framer-motion"

type ContainerProps = {
  fluid?: boolean
}

export const Container = styled.div<ContainerProps>`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;

  @media only screen and (max-width: 37.5em) {
    padding: 0 32px;
  }

  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  ${props =>
    props.fluid === true &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
    `}
`

type FlexProps = {
  spaceBetween?: boolean
  flexEnd?: boolean
  alignTop?: boolean
  noHeight?: boolean
  aboutSection?: boolean
  homeFooter?: boolean
}

export const Flex = styled.div<FlexProps>`
  position: relative;
  display: flex;
  align-items: center;

  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}

  ${props =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `}

  ${props =>
    props.noHeight &&
    css`
      height: 0;
    `}

  ${props =>
    props.aboutSection &&
    css`
      @media only screen and (max-width: 56.25em) {
        flex-direction: column;
        row-gap: 20px;
      }
    `}
  ${props =>
    props.homeFooter &&
    css`
      @media only screen and (max-width: 37.5em) {
        flex-direction: column;
        row-gap: 20px;
        align-items: flex-start;
      }
    `}
`

export const Cursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  background: ${props => props.theme.pink};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-in-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;
  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${props => props.theme.pink};
  }
  &.pointer {
    border: 4px solid ${props => props.theme.text};
  }
  &.locked {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${props => props.theme.pink};
    top: ${props => props.theme.top} !important;
    left: ${props => props.theme.left} !important;
  }
  &.nav-open {
    background: ${props => props.theme.background};
  }
`

// Media
export const MediaSection = styled(motion.div)`
  margin-bottom: 200px;
  margin-top: 200px;
  position: relative;
  a {
    position: relative;
    margin-bottom: 200px;
    display: block;
  }
`

export const MediaContent = styled(motion.div)`
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

  .media-title {
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

export const MediaSource = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 480px;
  display: flex;
  justify-content: center;
  overflow: hidden;

  img {
    width: 1244px;
    height: 480px;
    object-fit: cover;

    /* @media (min-width: 1024px) {
      width: 960px;
    }
    @media (min-width: 1216px) {
      width: 1152px;
    }
    @media (min-width: 1408px) {
      width: 1244px;
    } */
  }

  video {
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
