import { Actions, Content, Header, Heading, Subtitle, Wrapper } from './style'
import Loader from '../loader'

const Box = (props) => {
  const getHeader = ({ title, action, subtitle }) => {
    if (!title && !action) {
      return {
        hasHeader: false,
        header: null,
      }
    }

    let component = null
    if (title) {
      component = (
        <Heading>
          <span>{title}</span>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Heading>
      )
    }

    return {
      hasHeader: true,
      header: (
        <Header hasTitle={!!title}>
          {component}
          <Actions>{action}</Actions>
        </Header>
      ),
    }
  }

  const { hasHeader, header } = getHeader(props)

  return (
    <Wrapper
      className={props.className}
      isHeading={hasHeader}
      isDisabled={props.isDisabled}
    >
      {header}
      <Content isHeading={hasHeader}>
        {props.loading && <Loader />}
        {props.children}
      </Content>
    </Wrapper>
  )
}

export default Box
