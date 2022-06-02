import CreatableSelect from 'react-select/creatable'
import { Wrapper } from './style'
import { errorJuice, neutrals20 } from '../common/colors'

const MultiSelectInput = (props) => {
  const components = {
    DropdownIndicator: null,
  }

  const customStyles = {
    control: (base) => ({
      ...base,
      minHeight: props.minHeight ? props.minHeight : 35,
      alignItems: 'baseline',
      border: `1px solid ${
        props.error ? `${errorJuice} !important` : neutrals20
      }`,
    }),
  }

  return (
    <Wrapper className={props.className}>
      <CreatableSelect
        components={components}
        inputValue={props.inputValue}
        isClearable={props.isClearable}
        isMulti={true}
        menuIsOpen={false}
        onChange={props.handleChange}
        onInputChange={props.handleInputChange}
        onKeyDown={props.handleKeyDown}
        placeholder={props.placeholder}
        value={props.value}
        styles={customStyles}
        menuPlacement='auto'
      />
    </Wrapper>
  )
}

export default MultiSelectInput
