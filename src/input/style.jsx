import styled, { css } from 'styled-components'
import {
  blue40,
  errorJuice,
  neutrals10,
  neutrals100,
  neutrals20,
  neutrals60,
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
  color: ${({ color }) => color || neutrals60};
  position: relative;
  background: ${white};

  input {
    background: none;
    border: 1px solid
      ${({ error, color }) => (error ? errorJuice : color || neutrals20)};
    width: 100%;
    padding: 4px ${({ hasIcon }) => (hasIcon ? '30px' : '12px')} 4px 12px;
    border-radius: 5px;
    transition: 0.1s;
    outline: none;
    color: ${({ color }) => color || neutrals100};
    ${({ size }) => getSize(size)}

    ::placeholder {
      color: ${({ color }) => color || neutrals100};
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
