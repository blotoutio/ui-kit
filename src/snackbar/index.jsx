import { Wrapper, Text, IconWrapper } from './style.jsx'
import { Close } from '../icons/index.jsx'
import { useEffect } from 'react'

const Snackbar = ({ onClose, variant, message }) => {
  const hideDuration = 5000
  let timer = null

  useEffect(() => {
    startTimer()

    return () => {
      clearTimer()
    }
  })

  const clearTimer = () => {
    if (timer) {
      clearTimeout(timer)
    }
  }

  const startTimer = () => {
    timer = setTimeout(() => {
      onClose()
    }, hideDuration)
  }

  return (
    <Wrapper
      variant={variant}
      onMouseEnter={clearTimer}
      onMouseLeave={startTimer}
    >
      <Text>{message}</Text>
      <IconWrapper onClick={onClose}>
        <Close width={16} height={16} />
      </IconWrapper>
    </Wrapper>
  )
}

export default Snackbar
