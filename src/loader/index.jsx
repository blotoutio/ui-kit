import { Wrapper } from './style'
import Spinner from '../spinner'
import { useState } from 'react'

/*
  Type:
  - global
  - local
 */

export function useLoadingStatus(defaultValue) {
  const [isLoading, setIsLoading] = useState(!!defaultValue)

  const showLoader = (loading) => {
    setIsLoading(loading)
  }

  return {
    isLoading,
    showLoader,
  }
}

const Loader = (props) => {
  const type = props.variation || 'local'

  return (
    <Wrapper className={props.className} type={type} zIndex={props.zIndex}>
      <Spinner />
    </Wrapper>
  )
}

export default Loader
