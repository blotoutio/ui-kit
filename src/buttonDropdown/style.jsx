import styled, { css } from 'styled-components'
import {
  black24,
  link,
  neutrals20,
  neutrals70,
  neutrals80,
  white,
} from '../common/colors'

const getPosition = (position) => {
  if (position === 'left') {
    return css`
      left: 0;
      top: calc(100% + 8px);
    `
  }

  return css`
    right: 0;
    top: calc(100% + 8px);
  `
}

export const Wrapper = styled.div`
  position: relative;
`

export const Outline = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
`

export const SelectWrapper = styled.div`
  position: absolute;
  width: 270px;
  z-index: 9999;
  background-color: ${white};
  border-radius: 4px;
  box-shadow: 0 3px 12px ${black24};
  overflow: hidden;
  ${({ position }) => getPosition(position)}
`

export const SearchWrapper = styled.div`
  color: ${neutrals80};
  padding-right: 5px;
`

export const OptionStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  color: ${neutrals70};
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: ${neutrals20};
  }

  svg {
    color: ${link};
  }

  &.disabled {
    cursor: default;
    color: ${neutrals20};

    &:hover {
      background: none;
    }
  }
`

export const RemoveIcon = styled.div`
  padding-left: 3px;
  display: flex;
  align-items: center;
`

export const Icon = styled.span`
  cursor: pointer;
`

export const ButtonWrapper = styled.div`
  padding: 10px 10px 0 10px;
`
