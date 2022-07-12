import styled, { css } from 'styled-components'
import {
  white,
  blue40,
  neutrals70,
  neutrals20,
  orange50,
  successJuice,
} from '../common/colors'

export const Wrapper = styled.div`
  display: flex;
  background-color: ${white};
  border: 1px solid ${neutrals20};
  border-radius: 5px;
  padding: 4px 5px;
  align-items: center;
  opacity: ${({ isDisable }) => (isDisable ? 0.5 : 1)};

  &.toggle {
    cursor: pointer;
    position: relative;
    border-radius: 6px;
    width: 30px;
    height: 12px;
    background-color: ${orange50};

    &.active {
      background-color: ${successJuice};
    }
  }
`

export const ToggleButton = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  line-height: 18px;
  font-size: 2em;
  font-weight: bold;
  border-radius: 50%;
  color: white;
  background: white;
  text-align: center;

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  &.active {
    right: -5px;
  }

  &.inactive {
    left: -5px;
  }
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
