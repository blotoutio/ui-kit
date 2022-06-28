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
import { useState, Fragment, useEffect, useRef } from 'react'
import Select, { components } from 'react-select'
import { neutrals80 } from '../common/colors'
import Button from '../button'

const selectStyles = (showSearch, externalStyles) => {
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
    ...externalStyles,
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
    menu: (provided) => ({
      ...provided,
      position: 'unset',
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
  const [pos, setPos] = useState(props.position)

  const showDropDown = () => {
    ref.current = ref.current + 1
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

  const ref = useRef()

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
      <SelectWrapper ref={ref} position={pos}>
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
          styles={selectStyles(props.isSearchable, props.styles)}
          tabSelectsValue={false}
          noOptionsMessage={props.noOptionsMessage}
          menuPlacement='auto'
          menuPortalTarget={props.menuPortalTarget}
          {...componentProps}
        />
      </SelectWrapper>
    )
  }

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const domRect = ref.current.getBoundingClientRect()
    if (domRect.x < 0) {
      setPos('left')
    }

    if (domRect.x + domRect.width > document.documentElement.clientWidth) {
      setPos('right')
    }
  }, [ref.current])

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
