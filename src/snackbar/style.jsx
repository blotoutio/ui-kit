import styled from 'styled-components'
import { getVariantColors } from '../common/utils'

export const Wrapper = styled.div`
  position: fixed;
  top: 40px;
  right: 40px;
  z-index: 5000;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 3px;
  {${({ variant }) => getVariantColors(variant)}
`

export const Text = styled.div`
  margin-right: 20px;
`

export const IconWrapper = styled.div`
  display: flex;
  cursor: pointer;
`
