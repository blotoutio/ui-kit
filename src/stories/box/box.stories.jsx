import Box from '../../box'

const types = ['slim', 'fit']

export default {
  title: 'Box',
}

export const box = (args) => {
  delete args.icon
  return (
    <Box type={args.type}>
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
  type: 'slim',
}

box.parameters = {
  backgrounds: {
    default: 'light',
  },
  layout: 'centered',
}

box.argTypes = {
  type: {
    options: types,
    control: 'select',
  },
}

box.component = Box
