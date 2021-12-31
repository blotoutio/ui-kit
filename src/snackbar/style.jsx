import styled from 'styled-components'
import { errorJuice, successJuice, white } from '../common/colors'

export const Wrapper = styled.div`
  position: fixed;
  top: 40px;
  right: 40px;
  z-index: 5000;
  background: ${({ variant }) =>
    variant === 'success' ? successJuice : errorJuice};
  color: ${white};
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 3px;
`

export const Text = styled.div`
  margin-right: 20px;
`

export const IconWrapper = styled.div`
  display: flex;
  cursor: pointer;
`
