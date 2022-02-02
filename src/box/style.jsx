import styled, { css } from 'styled-components'
import { black8, neutrals100, white } from '../common/colors'

const getHeaderPadding = (isHeading) => {
  if (!isHeading) {
    return css`
      padding: 23px 36px;
    `
  }

  return css`
    padding: 36px;
  `
}

const getContentPadding = (type) => {
  if (type === 'slim') {
    return css`
      padding: 15px;
    `
  }

  if (type === 'fit') {
    return css`
      padding: 0;
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

  ${({ isHeading }) => getHeaderPadding(isHeading)}

  @media (max-width: 450px) {
    padding: 23px 16px;
  }
`

export const Content = styled.div`
  ${({ type }) => getContentPadding(type)}
  border-radius: 10px;
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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;

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
