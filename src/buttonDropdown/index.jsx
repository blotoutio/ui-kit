import { Add, Check, Search } from '../icons'
import {
  Wrapper,
  Outline,
  SelectWrapper,
  SearchWrapper,
  OptionStyle,
  Icon,
  ButtonWrapper,
} from './style'
import { useState, Fragment } from 'react'
import Select, { components } from 'react-select'
import { neutrals80 } from '../common/colors'
import Button from '../button'

const selectStyles = (showSearch) => {
  const general = {
    placeholder: () => ({
      fontSize: 14,
      lineHeight: '20px',
      color: neutrals80,
    }),
    noOptionsMessage: (provided) => ({
      ...provided,
      fontSize: 14,
      lineHeight: '20px',
    }),
    loadingMessage: (provided) => ({
      ...provided,
      fontSize: 14,
      lineHeight: '20px',
    }),
  }

  if (!showSearch) {
    return {
      control: (provided) => ({ ...provided, display: 'none' }),
      menu: () => ({}),
      menuList: (provided) => ({
        ...provided,
        paddingTop: 0,
        paddingBottom: 0,
      }),
      ...general,
    }
  }

  return {
    control: (provided) => ({
      ...provided,
      margin: 8,
      border: 'none',
    }),
    menu: () => ({
      boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)',
    }),
    menuList: (provided) => ({
      ...provided,
      paddingTop: 10,
      paddingBottom: 0,
    }),
    ...general,
  }
}

const Menu = (props) => {
  return (
    <Fragment>
      <components.Menu {...props}>
        <div>
          {props.selectProps.handleAdd && (
            <ButtonWrapper>
              <Button
                type={'secondary'}
                className={'change-data'}
                onClick={props.selectProps.handleAdd}
              >
                Add
              </Button>
            </ButtonWrapper>
          )}
          <div>{props.children}</div>
        </div>
      </components.Menu>
    </Fragment>
  )
}

const DropdownIndicator = () => (
  <SearchWrapper>
    <Search />
  </SearchWrapper>
)

const Option = (props) => {
  return (
    <OptionStyle
      className={props.isDisabled ? 'disabled' : ''}
      ref={props.innerRef}
      {...props.innerProps}
    >
      {props.label} {props.isSelected && <Check />}
    </OptionStyle>
  )
}

const ButtonDropdown = (props) => {
  const [show, setShow] = useState(false)

  const showDropDown = () => {
    if (props.isDisabled) {
      return
    }

    setShow(true)
  }

  const hideDropDown = () => {
    setShow(false)
  }

  const handleChange = (e) => {
    props.handleChange(e)
    hideDropDown()
  }

  const selectComponent = () => {
    const Component = Select
    const componentProps = {
      options: props.options,
      placeholder: props.placeholder,
    }

    componentProps.value = props.value

    if (props.handleAdd) {
      componentProps.handleAdd = props.handleAdd
      componentProps.hasAdd = !!props.handleAdd
    }

    return (
      <SelectWrapper position={props.position}>
        <Component
          components={{
            DropdownIndicator,
            IndicatorSeparator: null,
            Option,
            Menu,
          }}
          onChange={handleChange}
          isMulti={props.isMulti}
          isSearchable={props.isSearchable}
          menuIsOpen
          autoFocus
          backspaceRemovesValue={false}
          controlShouldRenderValue={false}
          hideSelectedOptions={false}
          isClearable={props.isClearable}
          styles={selectStyles(props.isSearchable)}
          tabSelectsValue={false}
          noOptionsMessage={props.noOptionsMessage}
          menuPlacement='auto'
          {...componentProps}
        />
      </SelectWrapper>
    )
  }

  return (
    <Wrapper className={props.className}>
      <div>
        <Icon data-testid={props.id} onClick={showDropDown}>
          {props.icon ? props.icon : <Add />}
        </Icon>
      </div>
      {show ? selectComponent() : null}
      {show && (
        <Outline
          data-testid='dropdown-outline'
          onClick={hideDropDown.bind(this, null)}
        />
      )}
    </Wrapper>
  )
}

export default ButtonDropdown
