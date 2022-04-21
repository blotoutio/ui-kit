import { Close } from '../icons'
import Box from '../box'
import Button from '../button'
import { Content, Wrapper, IconWrapper, ButtonContainer } from './style'

const ConfirmDialog = ({
  title,
  handleClose,
  handleDelete,
  children,
  actionName,
}) => {
  return (
    <Wrapper>
      <Content>
        <Box
          title={title || 'Confirm'}
          action={
            <IconWrapper onClick={handleClose}>
              <Close />
            </IconWrapper>
          }
        >
          {children}
          <ButtonContainer>
            <Button onClick={handleDelete}>{actionName || 'Delete'}</Button>
            <Button color='neutral' onClick={handleClose}>
              Cancel
            </Button>
          </ButtonContainer>
        </Box>
      </Content>
    </Wrapper>
  )
}

export default ConfirmDialog
