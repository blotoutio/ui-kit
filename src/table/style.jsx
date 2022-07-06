import styled, { css } from 'styled-components'
import { neutrals20, neutrals70, neutrals10 } from '../common/colors'

const getScrollableStyles = () => {
  return css`
    tbody {
      display: block;
      max-height: 300px;
      overflow: auto;
    }
    thead,
    tbody tr {
      display: table;
      width: 100%;
      table-layout: fixed;
    }
  `
}

export const StyledTable = styled.table`
  width: 100%;
  border: none;
  border-collapse: collapse;
  font-size: 16px;
  line-height: 24px;
  border-top: ${({ topBorder }) =>
    topBorder ? `1px solid ${neutrals20}` : 'none'};
  ${({ scrollable }) => (scrollable ? getScrollableStyles() : null)}

  b {
    font-variation-settings: 'wght' 500;
  }
`

export const StyledHeader = styled.thead`
  background: ${neutrals20};
`

export const StyledTh = styled.th`
  padding: 12px 10px 12px 36px;
  font-variation-settings: 'wght' 500;
  font-weight: normal;
  text-align: left;
  font-size: 14px;
  white-space: nowrap;
`

export const StyledTd = styled.td`
  padding: 12px 10px 12px 36px;
  border-bottom: 1px solid ${neutrals20};
  font-size: 14px;
  line-height: 20px;
`

export const NoData = styled.div`
  color: ${neutrals70};
  text-align: center;
  padding: 20px;
`

export const StyledTr = styled.tr`
  ${({ hasHover }) =>
    hasHover
      ? `
      cursor: pointer;
      
      &:hover {
        background: ${neutrals10};
      }`
      : ''}
`
