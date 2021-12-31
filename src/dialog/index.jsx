import {
  Close,
  Content,
  Header,
  Modal,
  Title,
  Wrapper,
  Outline,
} from './style.jsx'
import { Close as CloseIcon } from '../icons/index.jsx'

const Dialog = ({
  className,
  title,
  children,
  onClose,
  variant,
  disabledOutline,
}) => {
  variant = variant || 'normal'

  return (
    <Wrapper className={className}>
      <Modal variant={variant}>
        <Header>
          <Title>{title}</Title>
          <Close className={'close-button'} onClick={onClose}>
            <CloseIcon />
          </Close>
        </Header>
        <Content className={'dialog-content'}>{children}</Content>
      </Modal>
      {!disabledOutline && <Outline onClick={onClose} />}
    </Wrapper>
  )
}

export default Dialog
