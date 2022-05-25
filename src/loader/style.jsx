import styled, { css } from 'styled-components'
import { white } from '../common/colors'

const getVariation = (type, zIndex) => {
  if (type === 'global') {
    return css`
      position: fixed;
      z-index: 5000;
    `
  }

  return css`
    position: absolute;
    z-index: ${zIndex || 10};
    background: ${white};
    border-radius: 5px;
    top: 0;
    left: 0;
  `
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ type, zIndex }) => getVariation(type, zIndex)}
`
