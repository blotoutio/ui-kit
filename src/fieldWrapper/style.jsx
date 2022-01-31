import styled from 'styled-components'
import { blue50, errorJuice, neutrals70 } from '../common/colors'

export const LabelText = styled.div`
  color: ${neutrals70};
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 24px;
`

export const HelperText = styled.div`
  color: ${({ helperType }) =>
    helperType === 'error' ? errorJuice : neutrals70};
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
`

export const Wrapper = styled.div`
  margin-bottom: 16px;

  a {
    text-decoration: none;
    color: ${blue50};

    &:hover {
      text-decoration: underline;
    }
  }
`
