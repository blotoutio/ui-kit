import styled, { css } from 'styled-components'
import { black8, white } from '../common/colors'

const getPadding = (type) => {
  if (type === 'slim') {
    return css`
      padding: 15px;
    `
  }

  if (type === 'fit') {
    return css`
      padding: 0;
    `
  }

  return css`
    padding: 36px;
  `
}

export const Wrapper = styled.div`
  box-shadow: 0 3px 20px ${black8};
  width: 100%;
  margin: 0 auto 36px;
  position: relative;
  border-radius: 10px;
`

export const Content = styled.div`
  background: ${white};
  ${({ type }) => getPadding(type)}
  border-radius: 10px;
  position: relative;
`
