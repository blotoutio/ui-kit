import { Wrapper, IconWrapper } from './style'
import { Close } from '../icons'

const Alert = ({ children, onClose = null, variant, styles }) => {
  return (
    <Wrapper variant={variant} style={styles}>
      <div>{children}</div>
      {onClose && (
        <IconWrapper onClick={onClose}>
          <Close width={16} height={16} />
        </IconWrapper>
      )}
    </Wrapper>
  )
}

export default Alert
