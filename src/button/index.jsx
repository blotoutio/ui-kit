import { Action, External, Icon, Internal, Wrapper } from './style.jsx'

/*
  Type:
  - primary (orange)
  - secondary (blue)
  - neutral (grey)

  Variant:
  - solid
  - flat
  - outline

  Size:
  - M
  - S
 */

const Button = (props) => {
  let Component = Action
  const componentProps = {
    className: props.className,
    type: props.type || 'primary',
    variant: props.variant || 'solid',
    size: props.size || 'M',
    disabled: props.isDisabled,
    'data-testid': props.id,
  }

  const iconPosition = props.iconPosition || 'right'

  const handleClick = () => {
    if (props.isDisabled) {
      return
    }

    props.onClick()
  }

  const getIcon = (position) => {
    if (!props.icon || position !== iconPosition) {
      return
    }

    return (
      <Icon position={iconPosition} noMargin={!props.children}>
        {props.icon}
      </Icon>
    )
  }

  if (props.href) {
    Component = External
  } else if (props.to) {
    Component = Internal
    componentProps.to = props.to
  }

  if (props.onClick) {
    componentProps.onClick = handleClick
  }

  return (
    <Component {...componentProps}>
      <Wrapper size={componentProps.size}>
        {getIcon('left')}
        <span>{props.children}</span>
        {getIcon('right')}
      </Wrapper>
    </Component>
  )
}

export default Button
