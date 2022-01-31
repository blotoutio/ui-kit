import styled from 'styled-components'
import { black64 } from '../common/colors'

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: ${black64};
  z-index: 100;
  left: 0;
  padding: 0 15px;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 100%;
  max-width: 750px;
`

export const IconWrapper = styled.div`
  display: flex;
  cursor: pointer;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 24px;

  & > button {
    width: 120px;
    margin-right: 24px;
  }

  @media (max-width: 450px) {
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: 16px;
    }

    & > button {
      width: 100%;
    }
  }
`
