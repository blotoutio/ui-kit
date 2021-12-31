import styled, { css } from 'styled-components'
import {
  black24,
  link,
  neutrals10,
  neutrals20,
  neutrals30,
  neutrals70,
  neutrals80,
  white,
} from '../common/colors'

const getPosition = (category, position) => {
  if (category) {
    return css`
      right: 100%;
      top: 0;
    `
  }

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

const generateColors = (active, data) => {
  let bgColor = neutrals10
  if (data) {
    bgColor = neutrals20
  }
  if (active) {
    bgColor = neutrals80
  }
  return css`
    border: 0;
    color: ${active ? white : neutrals80};
    cursor: ${active ? 'default' : 'pointer'};
    background-color: ${bgColor};

    &:hover {
      background: ${neutrals20};
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
  right: 0;
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

export const RemoveIcon = styled.div`
  padding-left: 3px;
  display: flex;
  align-items: center;
`

export const Icon = styled.span`
  display: flex;
  padding-left: 12px;
  border-left: 1px solid ${neutrals30};
`

export const BasicButton = styled.button`
  width: 200px;
  height: 28px;
  display: flex;
  cursor: pointer;
  padding: 4px 12px;
  border-radius: 3px;
  align-items: center;
  box-sizing: border-box;
  font-size: 14px;
  font-variation-settings: 'wght' 400;
  ${({ isActive, hasData }) => generateColors(isActive, hasData)};
`

export const Right = styled.div`
  width: 40px;
  display: flex;
  justify-content: flex-end;
`
export const Left = styled.div`
  width: calc(100% - 40px);
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    line-height: 20px;
  }

  > span .side-heading {
    font-variation-settings: 'wght' 500;
    padding-right: 5px;
  }
`

export const ButtonWrapper = styled.div`
  padding: 10px 10px 0 10px;
`
