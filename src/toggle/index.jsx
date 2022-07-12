import { Wrapper, Option, ToggleButton } from './style'

const Toggle = ({
  selected,
  options,
  handleChange,
  isDisable,
  className,
  style = 'options',
}) => {
  if (selected === undefined) {
    console.error('Selected for toggle was not provided')
    return null
  }

  const toggleClass =
    style === 'toggle' ? (selected === true ? 'toggle active' : 'toggle') : null
  const classNames = [className, style === 'toggle' ? toggleClass : null]
    .join(' ')
    .trim()

  if (style === 'toggle') {
    return (
      <Wrapper
        isDisable={isDisable}
        className={classNames}
        onClick={isDisable ? undefined : handleChange.bind(this, !selected)}
      >
        <ToggleButton
          className={selected ? 'active' : 'inactive'}
          isDisable={isDisable}
        />
      </Wrapper>
    )
  }

  return (
    <Wrapper isDisable={isDisable} className={classNames}>
      {options.map((option) => (
        <Option
          key={option.value}
          onClick={isDisable ? undefined : handleChange.bind(this, option)}
          active={selected.value === option.value}
          isDisable={isDisable}
        >
          {option.label}
        </Option>
      ))}
    </Wrapper>
  )
}

export default Toggle
