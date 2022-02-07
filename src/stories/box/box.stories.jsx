import Box from '../../box'
import Button from '../../button'

export default {
  title: 'Box',
}

export const box = (args) => {
  let action = null
  if (args.showAction) {
    action = <Button>Add</Button>
  }

  return (
    <Box
      title={args.title}
      subtitle={args.subtitle}
      loading={args.loading}
      action={action}
    >
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </Box>
  )
}

box.args = {
  title: 'Hi',
  subtitle: 'sub title',
  loading: false,
  showAction: false,
}

box.parameters = {
  backgrounds: {
    default: 'light',
  },
  layout: 'centered',
}

box.component = Box
