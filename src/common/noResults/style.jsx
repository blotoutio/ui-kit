import styled from 'styled-components'
import { neutrals70 } from '../colors'

export const NoData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${neutrals70};
  line-height: 24px;
  font-size: 16px;
  margin-top: 20px;

  img {
    margin: 60px 0 24px;
  }
`
