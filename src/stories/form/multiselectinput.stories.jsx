import MultiSelectInput from '../../multiSelectInput'
import { CreatableContainer } from '../common/sharedStyle'
import { useState } from 'react'

export default {
  title: 'Form',
}

export const multiSelectInput = (args) => {
  const [input, setInput] = useState()
  const [value, setValue] = useState([])

  const handleKeyDown = (event) => {
    if (!input) return

    switch (event.key) {
      case 'Enter':
      case 'Tab':
        setInput('')
        setValue([...value, { label: input, value: input }])
        event.preventDefault()
    }
  }

  const handleChange = (value) => {
    setValue(value)
    setInput('')
  }

  return (
    <CreatableContainer>
      <MultiSelectInput
        isClearable={args.isClearable}
        error={args.error}
        inputValue={input}
        value={value}
        handleInputChange={setInput}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
        placeholder={args.placeholder}
      />
    </CreatableContainer>
  )
}

multiSelectInput.args = {
  isClearable: true,
  error: false,
  placeholder: 'Enter input',
}

multiSelectInput.argTypes = {
  isClearable: {
    control: {
      type: 'boolean',
    },
  },
}

multiSelectInput.component = MultiSelectInput

multiSelectInput.parameters = {
  backgrounds: {
    default: 'light',
  },
  layout: 'centered',
}
