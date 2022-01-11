import { Content, Wrapper } from './style'
import Loader from '../loader'

const Box = (props) => {
  return (
    <Wrapper className={props.className} type={props.type}>
      <Content type={props.type}>
        {props.loading && <Loader />}
        {props.children}
      </Content>
    </Wrapper>
  )
}

export default Box
