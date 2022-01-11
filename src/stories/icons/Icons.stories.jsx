import React from 'react'

import * as icons from '../../icons'
import { IconWrapper, IconContainer, Icon, IconTitle } from './style'
import Spinner from '../../spinner'

export default {
  title: 'Icons',
}

const allIcons = { ...icons, Spinner }
const allIconsArgs = {
  width: '64px',
  height: '64px',
}

const renderIcon = (Component, name) => (
  <IconWrapper key={name}>
    <Icon>
      <Component {...allIconsArgs} />
    </Icon>
    <IconTitle>{name}</IconTitle>
  </IconWrapper>
)

export const AllIcons = () => (
  <IconContainer>
    {Object.keys(allIcons)
      .sort()
      .map((icon) => renderIcon(allIcons[icon], icon))}
  </IconContainer>
)
