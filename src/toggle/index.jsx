import { Wrapper, Option } from './style'

const Toggle = ({ selected, options, handleChange, isDisable, className }) => {
  if (!selected) {
    console.error('Selected for toggle was not provided')
    return null
  }

  return (
    <Wrapper isDisable={isDisable} className={className}>
      {options.map((option) => (
        <Option
          key={option.value}
          onClick={isDisable ? undefined : handleChange.bind(this, option)}
          active={selected.value === option.value}
        >
          {option.label}
        </Option>
      ))}
    </Wrapper>
  )
}

export default Toggle
