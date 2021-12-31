import styled from 'styled-components'
import { neutrals70 } from '../../common/colors'

export const Form = styled.div`
  margin-top: 20px;
  padding: 0 30px;

  > div {
    margin-bottom: 20px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  margin: 20px 0 8px;
  justify-content: space-evenly;

  button,
  a {
    margin: 0 30px;
    max-width: 200px;
  }
`

export const BlockTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 24px;
  font-variation-settings: 'wght' 600;
  color: ${neutrals70};
`

export const MessageContainer = styled.div`
  text-align: center;
`
export const MessageTitle = styled.div`
  margin: 30px 0 20px;
  padding: 0 30px;
`

export const CreatableContainer = styled.div`
  margin-top: 20px;
  padding: 0 30px;
  width: 270px;

  > div {
    margin-bottom: 20px;
  }
`

export const Container = styled.div`
  width: 700px;
  height: 400px;
`
