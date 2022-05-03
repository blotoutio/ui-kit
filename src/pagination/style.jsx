import { neutrals10, neutrals40, neutrals70 } from '../common/colors'
import styled, { css } from 'styled-components'

const getStyles = (paginationType, active, disabled) => {
  switch (paginationType) {
    case 'small':
      return css`
        background: ${neutrals10};
        color: ${neutrals70};
        border-radius: 3px;
        cursor: pointer;
      `

    default:
      return css`
        ${disabled ? '' : 'cursor: pointer'};
        color: ${active ? neutrals70 : neutrals40};
      `
  }
}

export const PgNo = styled.a`
  text-decoration: none;
  font-size: 14px;
  line-height: 20px;
  padding: 7px 12px;
  ${({ paginationType, active, disabled }) =>
    getStyles(paginationType, active, disabled)}
`

export const FooterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`

export const StyledText = styled.span`
  text-align: center;
  vertical-align: top;
  color: ${neutrals70};
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
`

export const Section = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${({ type = 'normal' }) => (type === 'normal' ? '0' : '8px')};
`

export const Left = styled(Section)`
  > * {
    margin-right: 12px;
  }
`

export const Right = styled(Section)`
  margin-left: auto;
  > * {
    margin-left: 36px;
  }
`
