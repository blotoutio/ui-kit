import styled, { css } from 'styled-components'
import { black8, neutrals100, white } from '../common/colors'

const getHeaderPadding = (isHeading, variation) => {
  if (variation === 'fit') {
    return css`
      padding: 0;
    `
  }

  if (!isHeading) {
    return css`
      padding: 23px 36px;
    `
  }

  return css`
    padding: 36px;
  `
}

export const Wrapper = styled.div`
  box-shadow: 0 3px 20px ${black8};
  width: 100%;
  margin: 0 auto 36px;
  position: relative;
  border-radius: 10px;
  background: ${white};
  opacity: ${({ isDisabled }) => (isDisabled ? '0.5' : '1')};
  display: flex;
  flex-direction: column;

  ${({ isHeading, variation }) => getHeaderPadding(isHeading, variation)}

  @media (max-width: 450px) {
    padding: 24px 16px;
  }
`

export const Content = styled.div`
  position: relative;
`

export const Heading = styled.div`
  & > span {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    margin: 0 12px 0 0;

    color: ${neutrals100};
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: ${({ hasTitle }) => (hasTitle ? 'space-between' : 'end')};
  align-items: baseline;
  margin-bottom: 26px;

  button {
    flex: 0;
  }
`

export const Actions = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 14px;
  }
`

export const Subtitle = styled.div`
  margin-top: 8px;
`
