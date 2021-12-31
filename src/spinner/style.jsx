import styled, { css } from 'styled-components'
import { white } from '../common/colors'

const getTypeData = (type) => {
  switch (type) {
    case 'button-white': {
      return css`
        border: 3px solid ${white};
        border-top: 3px solid #555;
        width: 16px;
        height: 16px;
      `
    }
    case 'small': {
      return css`
        border: 3px solid #f9d5ba;
        border-top: 4px solid #555;
        width: 20px;
        height: 20px;
      `
    }
    default: {
      return css`
        border: 5px solid #f9d5ba;
        border-top: 5px solid #555;
        width: 30px;
        height: 30px;
        margin: 10px;
      `
    }
  }
}

export const Icon = styled.div`
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
  border-radius: 50%;
  ${({ type }) => getTypeData(type)}

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
