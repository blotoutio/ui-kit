import { useState } from 'react'
import { Wrapper } from './style.jsx'
import Spinner from '../spinner/index.jsx'

export function useLoadingStatus() {
  const [isLoading, setIsLoading] = useState(false)

  function showLoader(loading) {
    setIsLoading(loading)
  }

  return {
    isLoading,
    showLoader,
  }
}

const Loader = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  )
}

export default Loader
