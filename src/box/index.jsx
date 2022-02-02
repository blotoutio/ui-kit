import { Actions, Content, Header, Heading, Subtitle, Wrapper } from './style'
import Loader from '../loader'

const Box = (props) => {
  const getHeader = (title, action, subtitle) => {
    if (!title && !action) {
      return null
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

    return (
      <Header>
        {component}
        <Actions>{action}</Actions>
      </Header>
    )
  }

  return (
    <Wrapper
      className={props.className}
      isHeading={!!props.title}
      isDisabled={props.isDisabled}
    >
      {getHeader(props.title, props.action, props.subtitle)}
      <Content type={props.type}>
        {props.loading && <Loader />}
        {props.children}
      </Content>
    </Wrapper>
  )
}

export default Box
