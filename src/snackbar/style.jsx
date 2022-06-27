import styled, { css } from 'styled-components'
import {
  errorJuice,
  successJuice,
  white,
  link,
  attentionJuice,
} from '../common/colors'

const getColors = (variant) => {
  switch (variant) {
    case 'success': {
      return css`
        background: ${successJuice};
        color: ${white};
      `
    }
    case 'error': {
      return css`
        background: ${errorJuice};
        color: ${white};
      `
    }
    case 'info': {
      return css`
        background: ${link};
        color: ${white};
      `
    }
    case 'warning': {
      return css`
        background: ${attentionJuice};
      `
    }
  }
}

export const Wrapper = styled.div`
  position: fixed;
  top: 40px;
  right: 40px;
  z-index: 5000;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 3px;
  {${({ variant }) => getColors(variant)}
`

export const Text = styled.div`
  margin-right: 20px;
`

export const IconWrapper = styled.div`
  display: flex;
  cursor: pointer;
`
