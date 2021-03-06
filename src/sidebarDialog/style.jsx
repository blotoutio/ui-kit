import styled, { css } from 'styled-components'
import { black64, neutrals40, white } from '../common/colors'

export const Wrapper = styled.div`
  position: fixed;
  flex-direction: column;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: ${black64};
  z-index: 1001;
  left: 0;
  padding: 0 15px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: fit-content;
  margin: auto;
`

export const OuterWrapper = styled.div`
  display: flex;
  max-width: 1250px;
  position: relative;
  border-radius: 10px;
  background: ${white};
  max-height: calc(100vh - 60px);
`

export const InnerWrapper = styled.div`
  display: flex;
`

export const IconWrapper = styled.div`
  display: flex;
  cursor: pointer;
  margin: 23px 27px 20px;
  position: absolute;
  right: 0;
  color: ${neutrals40};
  z-index: 10002;
`

const getEdges = (edges) => {
  switch (edges) {
    case 'left': {
      return css`
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
      `
    }
    case 'right': {
      return css`
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
      `
    }
    default: {
      return css`
        border-radius: 10px;
      `
    }
  }
}

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  overflow: hidden;

  ${({ edges }) => getEdges(edges)};
`

export const MainPanel = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 850px;
  overflow: hidden;

  ${({ edges }) => getEdges(edges)};
`
