import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
`

export const Logo = styled.div`
  position: relative;
  h1 {
    position: absolute;
    top: -1rem;
    left: 5rem;
    font-size: 2.4em;
    font-weight: 800;
    text-transform: uppercase;
    color: ${props => props.theme.pink};
    opacity: 0.7;
    z-index: -1;

    @media only screen and (max-width: 37.5em) {
      font-size: 1.8rem;
      top: -0.4rem;
      left: 5rem;
    }
  }
  a {
    font-size: 1.8rem;
    font-weight: 800;
    color: ${props => props.theme.text};
  }
  button {
    background: none;
    border: none;
    outline: none;
    color: ${props => props.theme.pink};
    margin: 0 2px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 4px;
    font-size: 1.8rem;
  }
`

export const LanguageToggle = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px 10px;
    background: none;
    outline: none;
    .icon {
      font-size: 2.4rem;
      display: block;
      color: ${props => props.theme.text};
      margin: 8px;

      @media only screen and (max-width: 37.5em) {
        font-size: 1.8rem;
        top: -0.4rem;
        left: 5rem;
      }
    }
  }
`

export const Menu = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px 10px;
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${props => props.theme.text};
      margin: 8px;

      @media only screen and (max-width: 37.5em) {
        width: 24px;
        height: 6px;
      }
    }
  }
`
