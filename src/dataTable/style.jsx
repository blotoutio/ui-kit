import styled from 'styled-components'
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

export const Section = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 36px;

  > * {
    margin-right: 24px;
  }
`

export const FooterSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;

  > * {
    margin-right: 16px;
  }
`

export const Left = styled(Section)`
  > * {
    margin-right: ${({ type }) => (type === 'footer' ? '16px' : '24px')};
  }
`

export const Right = styled(Section)`
  color: ${neutrals40};
  margin-left: auto;
  > * {
    margin-left: 36px;
  }
`

export const StyledText = styled.span`
  text-align: center;
  vertical-align: top;
  color: ${neutrals70};
  font-size: ${({ type }) => (type === 'small' ? '14px' : '16px')};
  line-height: ${({ type }) => (type === 'small' ? '20px' : '24px')};
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

export const PgNo = styled.a`
  text-decoration: none;
  padding: 7px 12px;
  font-size: 14px;
  line-height: 20px;
  color: ${({ active }) => (active ? neutrals70 : neutrals40)};
  ${({ disabled }) => (disabled ? '' : 'cursor: pointer')};
`

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
`
