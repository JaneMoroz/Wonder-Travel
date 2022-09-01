import styled, { css } from "styled-components"

export const FooterNav = styled.div`
  margin-top: 196px;
  margin-bottom: 32px;
`
type FooterContentProps = {
  wider?: boolean
}

export const FooterContent = styled.div<FooterContentProps>`
  color: ${props => props.theme.pink};
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 0.5rem;
  flex: 1;

  @media only screen and (max-width: 56.25em) {
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 1.4rem;
  }

  ${props =>
    props.wider &&
    css`
      flex: 2;
    `}
`

export const FooterSocial = styled.div`
  display: flex;
  position: relative;
  a {
    color: ${props => props.theme.pink};
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    padding: 8px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`
