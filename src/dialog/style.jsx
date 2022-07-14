import styled, { css } from 'styled-components'
import { black24, neutrals40, white } from '../common/colors'

const getModalSize = (variant) => {
  if (variant === 'form') {
    return css`
      max-width: 600px;
    `
  } else if (variant === 'table') {
    return css`
      max-width: 1273px;
      max-height: 550px;
    `
  }

  return css`
    height: calc(100vh - 116px);
    max-width: 970px;
    max-height: 700px;
  `
}

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(15px);
`

export const Outline = styled.div`
  position: absolute;
  z-index: 2001;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

export const Modal = styled.div`
  width: 100%;
  margin: 86px auto 30px;
  background: ${white};
  box-shadow: 0 3px 12px ${black24};
  border-radius: 10px;
  position: absolute;
  z-index: 2002;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  ${({ variant }) => getModalSize(variant)}
`

export const Header = styled.div`
  display: flex;
  padding: 23px 38px;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.span`
  font-size: 24px;
  line-height: 32px;
  font-variation-settings: 'wght' 600;
`

export const Close = styled.div`
  color: ${neutrals40};
  cursor: pointer;
`

export const Content = styled.div`
  text-align: left;
  flex: 1;
  max-height: calc(100% - 66px);
`
