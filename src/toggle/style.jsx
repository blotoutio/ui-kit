import styled, { css } from 'styled-components'
import { white, blue40, neutrals70, neutrals20 } from '../common/colors'

export const Wrapper = styled.div`
  display: flex;
  background-color: ${white};
  border: 1px solid ${neutrals20};
  border-radius: 5px;
  padding: 4px 5px;
  align-items: center;
  opacity: ${({ isDisable }) => (isDisable ? 0.5 : 1)};
`

const getColor = (active) => {
  if (active) {
    return css`
      color: ${white};
      background-color: ${blue40};
    `
  }

  return css`
    color: ${neutrals70};
  `
}

export const Option = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ isDisable }) => (isDisable ? 'default' : 'pointer')};
  padding: 0 16px;
  border-radius: 3px;
  font-size: 16px;
  line-height: 24px;
  ${({ active }) => getColor(active)}
  user-select: none;
`
