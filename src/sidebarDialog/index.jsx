import {
  Content,
  IconWrapper,
  InnerWrapper,
  MainPanel,
  OuterWrapper,
  Sidebar,
  Wrapper,
} from './style'
import { Close } from '../icons'

const SidebarDialog = ({ children, sidebar, handleClose }) => {
  return (
    <Wrapper>
      <Content>
        <OuterWrapper>
          <InnerWrapper>
            <IconWrapper onClick={handleClose}>
              <Close />
            </IconWrapper>
            <Sidebar>{sidebar}</Sidebar>
            <MainPanel>{children}</MainPanel>
          </InnerWrapper>
        </OuterWrapper>
      </Content>
    </Wrapper>
  )
}

export default SidebarDialog
