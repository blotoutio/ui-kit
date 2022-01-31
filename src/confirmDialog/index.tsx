import { Close } from '../../icons'
import Box from '../box'
import Button from '../button'
import { Content, Wrapper, IconWrapper, ButtonContainer } from './style'

const ConfirmDialog = ({ title, handleClose, handleDelete, children }) => {
  return (
    <Wrapper>
      <Content>
        <Box
          title={title ? title : 'Confirm'}
          action={
            <IconWrapper onClick={handleClose}>
              <Close />
            </IconWrapper>
          }
        >
          {children}
          <ButtonContainer>
            <Button onClick={handleDelete}>Delete</Button>
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
