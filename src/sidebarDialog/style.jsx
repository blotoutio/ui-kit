import styled from 'styled-components'
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
  margin: 0 auto 36px;
  position: relative;
  border-radius: 10px;
  background: ${white};
`

export const InnerWrapper = styled.div`
  display: flex;
  margin: 0 10px 0;
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

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 300px;
  margin-left: -10px;
  border-radius: 10px 0 0 10px;
  overflow: hidden;
`

export const MainPanel = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 850px;
  margin-right: -10px;
  border-radius: 10px 0 0 10px;
  overflow: hidden;
`
