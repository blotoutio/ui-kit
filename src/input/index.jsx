import { Wrapper } from './style.jsx'

const Input = (props) => {
  const inputProps = { ...props }
  inputProps.type = props.type || 'text'
  delete inputProps.icon
  delete inputProps.forwardRef
  delete inputProps.error
  delete inputProps.size
  delete inputProps.className
  delete inputProps.color

  return (
    <Wrapper
      className={props.className}
      error={props.error}
      hasIcon={props.icon}
      size={props.size || 'M'}
      color={props.color}
    >
      <input {...inputProps} ref={props.forwardRef} />
      {props.icon && props.icon}
    </Wrapper>
  )
}

export default Input
