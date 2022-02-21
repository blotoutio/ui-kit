import styled, { css } from 'styled-components'
import Select from 'react-select'
import AsyncSelect from 'react-select/async'
import AsyncCreatableSelect from 'react-select/async-creatable'
import CreatableSelect from 'react-select/creatable'
import {
  neutrals20,
  neutrals30,
  neutrals70,
  neutrals80,
  white,
} from '../common/colors'

export const Wrapper = styled.div`
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  margin: 0 ${({ margin }) => (margin != null ? margin : 10)}px;
  font-size: 14px;
  line-height: 20px;

  .analyze__indicators {
    display: none;
  }

  .analyze__menu {
    width: auto;
    min-width: 100%;
  }
`

const formStyle = css`
  .form__dropdown-indicator {
    padding: 0 12px;
    color: ${neutrals80};
  }

  .form__indicator {
    padding: 0 8px;
  }

  .form__indicator-separator {
    background-color: ${neutrals30};
  }

  .form__control {
    cursor: pointer;

    &:hover {
      background: ${neutrals20};
    }

    &--is-focused {
      background: ${neutrals70} !important;
      border-color: ${neutrals70} !important;
      caret-color: ${white};

      .form__placeholder,
      .form__input,
      .form__single-value,
      .form__dropdown-indicator {
        color: ${white};
      }
    }
  }
`

const regularStyle = css`
  .regular__dropdown-indicator {
    padding: 6px 8px;
  }

  .regular__indicator {
    padding: 6px 8px;
  }
`

const mediumStyle = css`
  .medium__dropdown-indicator {
    padding: 6px 8px;
  }

  .medium__indicator {
    padding: 5px 8px;
  }
`

const getStyle = (type) => {
  if (type === 'form') {
    return formStyle
  }

  if (type === 'medium') {
    return mediumStyle
  }

  return regularStyle
}

export const StyledSelect = styled(Select)`
  ${({ cssType }) => getStyle(cssType)}
`

export const StyledAsyncSelect = styled(AsyncSelect)`
  ${({ cssType }) => getStyle(cssType)}
`

export const StyledAsyncCreatableSelect = styled(AsyncCreatableSelect)`
  ${({ cssType }) => getStyle(cssType)}
`

export const StyledCreatableSelect = styled(CreatableSelect)`
  ${({ cssType }) => getStyle(cssType)}
`
