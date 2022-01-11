import { HelperText, LabelText } from './style'

const FieldWrapper = (props) => {
  const getText = () => {
    if (props.html) {
      return (
        <HelperText
          helperType={props.helperType}
          dangerouslySetInnerHTML={{ __html: props.helperText }}
        />
      )
    }

    return (
      <HelperText helperType={props.helperType}>{props.helperText}</HelperText>
    )
  }
  return (
    <div className={props.className}>
      <label>
        {props.label && <LabelText>{props.label}</LabelText>}
        {props.children}
      </label>

      {props.helperText && getText()}
    </div>
  )
}

export default FieldWrapper
