import { Wrapper } from './style'
import Spinner from '../spinner'

/*
  Type:
  - global
  - local
 */

const Loader = (props) => {
  const type = props.variation || 'local'

  return (
    <Wrapper className={props.className} type={type}>
      <Spinner />
    </Wrapper>
  )
}

export default Loader
