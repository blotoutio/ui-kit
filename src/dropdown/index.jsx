import { Arrow, Check, RemoveCircle, Search } from '../icons'
import {
  Wrapper,
  Outline,
  SelectWrapper,
  SearchWrapper,
  OptionStyle,
  Category,
  CategoryItem,
  RemoveIcon,
  Icon,
  BasicButton,
  ButtonWrapper,
  Left,
  Right,
} from './style'
import { useState, Fragment } from 'react'
import Select, { components } from 'react-select'
import AsyncSelect from 'react-select/async'
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

const Dropdown = (props) => {
  const [show, setShow] = useState(false)
  const [category, setCategory] = useState(null)
  const [categoryHash, setCategoryHash] = useState('')

  const showDropDown = () => {
    setShow(true)
  }

  const hideDropDown = () => {
    setShow(false)
    setCategory(null)
  }

  const handleChange = (category, e) => {
    if (category) {
      const value = { ...props.value }
      value[category.value] = {
        category,
        data: e,
      }
      props.handleChange(value)
      setCategoryHash(JSON.stringify(value))
      return
    }

    props.handleChange(e)
    if (props.closeMenuOnSelect) hideDropDown()
  }

  const selectComponent = (item, category) => {
    let Component = Select
    let componentProps = {
      options: props.options,
      placeholder: props.placeholder,
    }

    if (props.loadOptions) {
      Component = AsyncSelect
      componentProps = {
        loadOptions: props.loadOptions.bind(this, item),
        defaultOptions: true,
      }
    }

    if (!category) {
      componentProps.value = props.value
    } else if (props.value[category.value]) {
      componentProps.value = props.value[category.value].data
      componentProps.placeholder = `Select ${category.category}`
    }

    if (props.handleAdd) {
      componentProps.handleAdd = props.handleAdd
      componentProps.hasAdd = !!props.handleAdd
    }

    return (
      <SelectWrapper position={props.position} category={category}>
        <Component
          components={{
            DropdownIndicator,
            IndicatorSeparator: null,
            Option,
            Menu,
          }}
          onChange={handleChange.bind(this, category)}
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

  const categoryComponent = () => {
    return (
      <Category>
        {props.category.map((item) => {
          const showCheck =
            props.value &&
            props.value[item.value] &&
            props.value[item.value].data &&
            props.value[item.value].data.length > 0
          return (
            <CategoryItem
              data-testid={item.value}
              key={item.label}
              onClick={setCategory.bind(this, item)}
            >
              <span>{item.label}</span> {showCheck && <Check />}
              {category &&
                category.label === item.label &&
                selectComponent(item, category)}
            </CategoryItem>
          )
        })}
      </Category>
    )
  }

  const getCurrent = () => {
    if (!props.value || props.category || !props.isClearable) {
      return {
        hasData: false,
        content: (
          <span>
            {props.sideHeading && (
              <span className='side-heading'>
                {props.sideHeading} {props.children && ':'}
              </span>
            )}
            {props.children}
          </span>
        ),
      }
    }

    return {
      hasData: true,
      content: (
        <>
          <span>
            {props.sideHeading && (
              <span className='side-heading'>{props.sideHeading}:</span>
            )}
            {props.children}
          </span>
          <RemoveIcon data-testid='cancel-icon' onClick={clearValue}>
            <RemoveCircle />
          </RemoveIcon>
        </>
      ),
    }
  }

  const clearValue = (event) => {
    event.stopPropagation()
    props.handleChange(null)
  }

  const data = getCurrent()

  return (
    <Wrapper className={props.className}>
      <BasicButton
        data-testid={props.id}
        isActive={show === true}
        onClick={showDropDown}
        hasData={data.hasData}
      >
        <Left>{data.content}</Left>
        <Right>
          <Icon position={'right'}>
            <Arrow rotate={90} />
          </Icon>
        </Right>
      </BasicButton>
      {show ? (props.category ? categoryComponent() : selectComponent()) : null}
      {show && (
        <Outline
          data-testid='dropdown-outline'
          onClick={hideDropDown.bind(this, null)}
        />
      )}
    </Wrapper>
  )
}

export default Dropdown
