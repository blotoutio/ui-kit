import styled, { css } from 'styled-components'
import {
  neutrals10,
  neutrals20,
  neutrals40,
  neutrals70,
  neutrals80,
  white,
} from '../common/colors'

export const Wrapper = styled.div`
  width: 100%;
`

export const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;

  .no-header {
    tr:first-of-type {
      td {
        &:first-of-type {
          border-top-left-radius: 5px;
        }

        &:last-of-type {
          border-top-right-radius: 5px;
        }
      }
    }
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const HeaderText = styled.div``

export const ArrowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding-left: 15px;
`

export const SortingArrow = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 4px 5px 4px;
  border-color: transparent transparent ${neutrals40} transparent;
  transform: rotate(0deg);

  &.down {
    transform: rotate(180deg);
  }

  &.active {
    border-color: transparent transparent ${neutrals70} transparent;
  }
`

export const StyledTh = styled.th`
  padding: 18px 20px;
  font-variation-settings: 'wght' 700;
  line-height: 20px;
  background: ${white};
  color: ${neutrals80};
  text-align: left;
  border-top: 1px solid ${neutrals20};
  border-left: 1px solid ${neutrals20};

  &:first-of-type {
    border-top-left-radius: 5px;
  }

  &:last-of-type {
    border-top-right-radius: 5px;
    border-right: 1px solid ${neutrals20};
  }

  &.sortable {
    cursor: pointer;
  }
`

export const StyledTd = styled.td`
  padding: 12px 20px;
  font-variation-settings: 'wght' 400;
  vertical-align: top;

  b {
    font-variation-settings: 'wght' 500;
  }

  &:first-of-type {
    border-left: 1px solid ${neutrals20};
  }

  &:last-of-type {
    border-right: 1px solid ${neutrals20};
  }
`

export const NoData = styled.td`
  color: ${neutrals70};
  text-align: center;
  padding: 20px;
  border-left: 1px solid ${neutrals20};
  border-right: 1px solid ${neutrals20};
`

const getStyles = (p) => {
  const { hasHover, isRowActive, hasColor } = p
  const color = isRowActive ? white : neutrals70
  const background = isRowActive ? neutrals70 : hasColor ? neutrals10 : 'none'
  const cursor = hasHover ? 'pointer' : ''
  const hoverBackground = isRowActive ? neutrals70 : hasHover ? neutrals20 : ''

  return css`
    color: ${color};
    background: ${background};
    cursor: ${cursor};

    &:hover {
      background: ${hoverBackground};
    }
  `
}

export const StyledTr = styled.tr`
  ${(p) => getStyles(p)};

  &:first-of-type {
    td {
      border-top: 1px solid ${neutrals20};
    }
  }

  &:last-of-type {
    td {
      border-bottom: 1px solid ${neutrals20};

      &:first-of-type {
        border-bottom-left-radius: 5px;
      }

      &:last-of-type {
        border-bottom-right-radius: 5px;
      }
    }
  }
`

export const StyledHeader = styled.tr`
  box-shadow: 0 3px 20px rgba(23, 42, 65, 0.08);
  filter: drop-shadow(0 3px 20px rgba(23, 42, 65, 0.08));
`

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 36px;

  > * {
    margin-right: 24px;
  }
`

export const Left = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 24px;
  }
`

export const Right = styled.div`
  display: flex;
  align-items: center;
  color: ${neutrals40};
  margin-left: auto;

  > * {
    margin-left: 36px;
  }
`

export const DownloadWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  height: 44px;
  color: ${neutrals70};
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: ${neutrals10};
  }

  > svg {
    margin-right: 14px;
  }
`

export const TableWrapper = styled.div`
  border-radius: 5px 0 0 5px;
  width: 100%;
  overflow: auto;
`

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
`
