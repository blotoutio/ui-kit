import { Wrapper } from './style'
import Spinner from '../spinner'
import { useState } from 'react'

/*
  Type:
  - global
  - local
 */

export function useLoadingStatus() {
  const [isLoading, setIsLoading] = useState(false)

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
    <Wrapper className={props.className} type={type}>
      <Spinner />
    </Wrapper>
  )
}

export default Loader
