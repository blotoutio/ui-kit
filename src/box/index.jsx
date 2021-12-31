import { Content, Wrapper } from './style.jsx'
import Loader from '../loader/index.jsx'

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
