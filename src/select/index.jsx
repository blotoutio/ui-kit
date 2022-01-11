import {
  StyledAsyncCreatableSelect,
  StyledAsyncSelect,
  StyledCreatableSelect,
  StyledSelect,
  Wrapper,
} from './style'
import { errorJuice, neutrals10, neutrals80 } from '../common/colors'

const regularStyle = (hasError) => ({
  control: (provided) => ({
    ...provided,
    minHeight: '34px',
    borderColor: hasError ? `${errorJuice} !important` : '#ccc',
  }),
})

const formStyle = (hasError) => ({
  control: (provided) => ({
    ...provided,
    minHeight: '28px',
    border: 'none',
    background: neutrals10,
    borderRadius: '5px',
    borderColor: hasError ? `${errorJuice} !important` : '#ccc',
  }),
  input: (provided) => ({
    ...provided,
    margin: 0,
    color: neutrals80,
  }),
  menu: (provided) => ({
    ...provided,
    fontSize: '14px',
  }),
})

export const SimpleSelect = (props) => {
  let more = {
    styles: regularStyle(props.showError),
    classNamePrefix: 'regular',
  }

  if (props.value !== undefined) {
    more = {
      ...more,
      value: props.value,
    }
  }

  if (props.type === 'form') {
    more.styles = formStyle(props.showError)
    more.classNamePrefix = 'form'
  }

  if (props.styles) {
    more.styles = {
      ...more.styles,
      ...props.styles,
    }
  }

  let Component = StyledSelect
  if (props.isCreatable) {
    Component = StyledCreatableSelect

    if (props.formatCreateLabel) {
      more.formatCreateLabel = props.formatCreateLabel
    }
    more.createOptionPosition = 'first'
  }

  return (
    <Wrapper
      className={props.className}
      width={props.width}
      margin={props.margin}
    >
      <Component
        cssType={props.type}
        defaultValue={props.defaultValue}
        classNamePrefix={props.classNamePrefix}
        isDisabled={props.isDisabled}
        options={props.options}
        onChange={props.handleChange}
        isClearable={props.isClearable}
        placeholder={props.placeholder}
        noOptionsMessage={props.noOptionsMessage}
        isMulti={props.isMulti}
        isSearchable
        menuPlacement='auto'
        {...more}
      />
    </Wrapper>
  )
}

export const SimpleAsyncSelect = (props) => {
  let more = {
    styles: regularStyle(props.showError),
    classNamePrefix: 'regular',
  }
  if (props.value !== undefined) {
    more = {
      ...more,
      value: props.value,
    }
  }

  if (props.type === 'form') {
    more.styles = formStyle(props.showError)
    more.classNamePrefix = 'form'
  }

  if (props.styles) {
    more.styles = {
      ...more.styles,
      ...props.styles,
    }
  }

  let Component = StyledAsyncSelect
  if (props.isCreatable) {
    Component = StyledAsyncCreatableSelect

    if (props.formatCreateLabel) {
      more.formatCreateLabel = props.formatCreateLabel
    }
    more.createOptionPosition = 'first'
  }

  return (
    <Wrapper
      className={props.className}
      width={props.width}
      margin={props.margin}
    >
      <Component
        cssType={props.type}
        id={props.id}
        loadOptions={props.loadOptions}
        classNamePrefix={props.classNamePrefix}
        onChange={props.handleChange}
        isDisabled={props.isDisabled}
        isMulti={props.isMulti}
        isClearable={props.isClearable}
        isSearchable
        defaultOptions
        noOptionsMessage={props.noOptionsMessage}
        placeholder={props.placeholder}
        menuPlacement='auto'
        {...more}
      />
    </Wrapper>
  )
}
