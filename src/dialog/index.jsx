import { Close, Content, Header, Modal, Title, Wrapper, Outline } from './style'
import { Close as CloseIcon } from '../icons'

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
          {onClose && (
            <Close className={'close-button'} onClick={onClose}>
              <CloseIcon />
            </Close>
          )}
        </Header>
        <Content className={'dialog-content'}>{children}</Content>
      </Modal>
      {!disabledOutline && <Outline onClick={onClose} />}
    </Wrapper>
  )
}

export default Dialog
