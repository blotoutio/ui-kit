import styled, { css } from 'styled-components'
import {
  blue40,
  errorJuice,
  neutrals10,
  neutrals20,
  neutrals60,
  neutrals80,
  white,
} from '../common/colors'

const getSize = (size) => {
  if (size === 'S') {
    return css`
      font-size: 14px;
      line-height: 20px;
    `
  }

  return css`
    font-size: 16px;
    line-height: 24px;
  `
}

export const Wrapper = styled.div`
  color: ${neutrals60};
  position: relative;

  input {
    background: ${white};
    border: 1px solid ${({ error }) => (error ? errorJuice : neutrals20)};
    width: 100%;
    padding: 10px ${({ hasIcon }) => (hasIcon ? '30px' : '16px')} 10px 16px;
    border-radius: 5px;
    transition: 0.1s;
    outline: none;
    color: ${neutrals80};
    ${({ size }) => getSize(size)}

    &::placeholder {
      opacity: 0.5;
    }

    &:focus {
      border-color: ${blue40};
      box-shadow: 0 0 4px rgba(57, 123, 244, 0.5);
      outline-width: 0;
    }

    &:disabled {
      background: ${neutrals10};
    }
  }

  svg {
    position: absolute;
    top: 10px;
    right: 12px;
  }
`
