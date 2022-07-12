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
  let isSinglePanel
  if (!sidebar || sidebar.length === 0) {
    isSinglePanel = true
  }

  return (
    <Wrapper>
      <Content>
        <OuterWrapper>
          <InnerWrapper>
            <IconWrapper onClick={handleClose}>
              <Close />
            </IconWrapper>
            {!isSinglePanel && <Sidebar edges={'left'}>{sidebar}</Sidebar>}
            <MainPanel edges={isSinglePanel ? 'full' : 'right'}>
              {children}
            </MainPanel>
          </InnerWrapper>
        </OuterWrapper>
      </Content>
    </Wrapper>
  )
}

export default SidebarDialog
