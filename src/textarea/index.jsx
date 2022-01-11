import { Wrapper, TextareaField } from './style'

const Textarea = (props) => {
  const textProps = { ...props }
  delete textProps.forwardRef
  delete textProps.error
  delete textProps.className

  return (
    <Wrapper className={props.className} error={props.error}>
      <TextareaField {...textProps} ref={props.forwardRef} />
    </Wrapper>
  )
}

export default Textarea
