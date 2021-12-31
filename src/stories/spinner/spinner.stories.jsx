import Spinner from '../../spinner/index'

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
