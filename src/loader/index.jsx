import { Wrapper } from './style.jsx'
import Spinner from '../spinner/index.jsx'

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
