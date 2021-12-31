import styled from 'styled-components'
import {
  blue40,
  errorJuice,
  neutrals20,
  neutrals60,
  white,
} from '../common/colors'

export const Wrapper = styled.div`
  color: ${neutrals60};
  position: relative;
  background: ${white};
`

export const TextareaField = styled.textarea`
  background: none;
  border: 1px solid ${({ error }) => (error ? errorJuice : neutrals20)};
  width: 100%;
  padding: 5px 12px;
  border-radius: 5px;
  transition: 0.1s;
  outline: none;
  &:focus {
    border-color: ${blue40};
    box-shadow: 0 0 4px rgba(57, 123, 244, 0.5);
    outline-width: 0;
  }
`
