import Spinner from '../../spinner'

export default {
  title: 'Spinner',
}

export const spinner = (args) => {
  return <Spinner />
}

spinner.parameters = {
  backgrounds: {
    default: 'light',
  },
  layout: 'centered',
}

spinner.component = 'Spinner'
