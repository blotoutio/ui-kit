import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import {
  blue10,
  blue20,
  blue40,
  blue50,
  blue60,
  neutrals10,
  neutrals20,
  neutrals70,
  neutrals80,
  neutrals90,
  orange10,
  orange20,
  orange50,
  orange60,
  orange70,
  orange80,
  white,
  blue30,
} from '../common/colors'

const getSolidColor = (color) => {
  switch (color) {
    case 'primary': {
      return {
        bg: orange60,
        bgHover: orange70,
        bgActive: orange80,
        text: white,
      }
    }
    case 'secondary': {
      return {
        bg: blue40,
        bgHover: blue50,
        bgActive: blue60,
        text: white,
      }
    }
    case 'neutral': {
      return {
        bg: neutrals70,
        bgHover: neutrals80,
        bgActive: neutrals90,
        text: white,
      }
    }
  }
}

const getFlatColor = (color) => {
  switch (color) {
    case 'primary': {
      return {
        bgHover: neutrals10,
        bgActive: orange60,
        text: orange60,
        textActive: white,
      }
    }
    case 'secondary': {
      return {
        bgHover: neutrals10,
        bgActive: blue40,
        text: blue40,
        textActive: white,
      }
    }
    case 'neutral': {
      return {
        bgHover: neutrals10,
        bgActive: neutrals70,
        text: neutrals70,
        textActive: white,
      }
    }
  }
}

const getOutlineColor = (color) => {
  switch (color) {
    case 'primary': {
      return {
        bgHover: orange10,
        bgActive: orange20,
        text: orange60,
        border: `1px solid ${orange60}`,
      }
    }
    case 'secondary': {
      return {
        bgHover: blue10,
        bgActive: blue20,
        text: blue40,
        border: `1px solid ${blue40}`,
      }
    }
    case 'neutral': {
      return {
        bgHover: neutrals10,
        bgActive: neutrals70,
        text: neutrals70,
        textActive: white,
        border: `1px solid ${neutrals70}`,
      }
    }
  }
}

const getLightColor = (color) => {
  switch (color) {
    case 'neutral': {
      return {
        bg: neutrals10,
        bgHover: neutrals20,
        bgActive: neutrals20,
        text: neutrals70,
      }
    }
    case 'secondary': {
      return {
        bg: blue30,
        bgHover: blue50,
        bgActive: blue50,
        text: white,
      }
    }
    case 'primary': {
      return {
        bg: orange50,
        bgHover: orange60,
        bgActive: orange70,
        text: white,
      }
    }
  }
}

const getFont = (size) => {
  if (size === 'S') {
    return css`
      font-size: 14px;
      line-height: 20px;
      font-variation-settings: 'wght' 500;
    `
  }

  return css`
    font-size: 16px;
    line-height: 20px;
    font-variation-settings: 'wght' 500;
  `
}

const getSize = (size) => {
  if (size === 'S') {
    return css`
      margin: 6px 12px;
    `
  }

  return css`
    margin: 11px 22px;
  `
}

const generateCSS = (props) => {
  let color

  if (props.variant === 'flat') {
    color = getFlatColor(props.color)
  } else if (props.variant === 'outline') {
    color = getOutlineColor(props.color)
  } else if (props.variant === 'light') {
    color = getLightColor(props.color)
  } else {
    color = getSolidColor(props.color)
  }

  let hover = css`
    cursor: default;
  `

  if (!props.disabled) {
    hover = css`
      &:hover {
        background: ${color.bgHover || 'none'};
        color: ${color.textHover || color.text};
      }

      &:active,
      &.active {
        background: ${color.bgActive || 'none'};
        color: ${color.textActive || color.text};
      }
    `
  }

  return css`
    color: ${color.text};
    background: ${color.bg || 'none'};
    border: ${color.border || '1px solid transparent'};

    ${getFont(props.size)}
    ${style}
    ${hover}
  `
}

const getIconMargin = (position, noMargin) => {
  if (noMargin) {
    return ``
  }

  if (position === 'left') {
    return css`
      margin-right: 10px;
    `
  }

  return css`
    margin-left: 10px;
  `
}

const style = css`
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  opacity: ${(p) => (p.disabled ? 0.2 : 1)};
  position: relative;
  font-family: 'Inter', sans-serif;
  text-decoration: none;
  padding: 0;
  display: inline-block;
`

export const External = styled.a`
  ${(p) => generateCSS(p)}
`

export const Internal = styled(Link)`
  ${(p) => generateCSS(p)}
`

export const Action = styled.button`
  ${(p) => generateCSS(p)}
`

export const Icon = styled.span`
  display: flex;

  ${({ position, noMargin }) => getIconMargin(position, noMargin)}
`

export const Wrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ size }) => getSize(size)}

  > span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`
