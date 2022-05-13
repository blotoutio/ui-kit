import styled from 'styled-components'
import {
  neutrals10,
  neutrals20,
  neutrals40,
  neutrals70,
  neutrals80,
  white,
  link,
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

export const StyledTr = styled.tr`
  background: ${({ hasColor }) => (hasColor ? neutrals10 : 'none')};
  color: ${neutrals70};

  ${({ hasHover }) =>
    hasHover
      ? `
      cursor: pointer;
      
      &:hover {
        background: ${neutrals20};
      }`
      : ''}

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

export const Settings = styled.div`
  width: 52px;
  position: relative;
`

export const ColumnWrapper = styled.div`
  position: absolute;
  bottom: -22px;
  width: 163px;
  height: calc(100% + 150px);
  overflow: auto;
  background: ${white};
  color: ${neutrals70};
  font-size: 14px;
  z-index: 9999;
  top: 51px;
  left: -111px;
  padding: 16px;
  justify-content: space-between;
  border: 1px solid ${neutrals20};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
`

export const ColumnSection = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    justify-content: space-between;
    line-height: 14px;
    column-gap: 14px;
    padding: 10px;
    cursor: pointer;
    margin-left: -16px;
    margin-right: -16px;
  }
`

export const Outside = styled.div`
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${({ shown }) => (shown ? 'block' : 'none')};
`

export const CheckContainer = styled.div`
  line-height: 12px;
  color: ${link};
`
