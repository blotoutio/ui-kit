import styled, { css } from 'styled-components'
import {
  black24,
  link,
  neutrals20,
  neutrals60,
  neutrals70,
  neutrals80,
  white,
  blue5,
  blue50,
} from '../common/colors'

const getPosition = (category, position) => {
  if (category) {
    return css`
      right: 100%;
      top: 0;
    `
  }

  if (position === 'right') {
    return css`
      right: 0;
      top: calc(100% + 8px);
    `
  }

  return css`
    left: 0;
    top: calc(100% + 8px);
  `
}

const generateColors = (isActive, hasData) => {
  let bgColor = isActive ? blue50 : white
  let color = isActive ? white : hasData ? blue50 : neutrals60
  return css`
    color: ${color};
    cursor: ${isActive ? 'default' : 'pointer'};
    background-color: ${bgColor};
    &:hover {
      background: ${blue5};
      color: ${hasData ? blue50 : neutrals60};
    }
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
  z-index: 501;
  background-color: ${white};
  border-radius: 4px;
  box-shadow: 0 3px 12px ${black24};
  overflow: hidden;
  ${({ position, category }) => getPosition(category, position)}
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

export const Category = styled.div`
  position: absolute;
  z-index: 500;
  background: ${white};
  box-shadow: 0 3px 12px ${black24};
  min-width: 170px;
  top: calc(100% + 8px);
  left: 0;
  border-radius: 5px;
`

export const CategoryItem = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: ${neutrals70};
  padding: 8px 16px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: ${neutrals20};
  }
`

export const Icon = styled.span`
  display: flex;
`

export const BasicButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: ${(props) => (props.size === 'M' ? '44px' : '34px')};
  padding: 0 13px 0 16px;
  border: 1px solid ${neutrals20};
  border-radius: 5px;
  column-gap: 8px;
  max-width: 250px;
  ${({ isActive, hasData }) => generateColors(isActive, hasData)}
`

export const ButtonWrapper = styled.div`
  padding: 10px 10px 0 10px;
`

export const Content = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-variation-settings: 'wght' 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 10px 0;
`

export const Chips = styled.p`
  border-radius: 18px;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  background: ${({ isActive }) => (isActive ? white : blue50)};
  color: ${({ isActive }) => (!isActive ? white : blue50)};
  font-size: 12px;
  line-height: 16px;
`
