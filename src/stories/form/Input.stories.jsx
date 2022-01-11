import Input from '../../input'
import { Form } from '../common/sharedStyle'
import * as icons from '../../icons'

const types = ['text', 'password']
const sizes = ['S', 'M']
const allIcons = [false, ...Object.keys(icons).sort()]

export default {
  title: 'Form',
}

export const InputBox = (args) => {
  const Icon = args.icon ? icons[args.icon] : false
  delete args.icon
  return (
    <Form>
      <Input {...args} icon={Icon ? <Icon /> : false} />
    </Form>
  )
}

InputBox.args = {
  type: 'text',
  size: 'M',
  icon: false,
  error: false,
  placeholder: 'Enter input',
  disabled: false,
}
InputBox.parameters = {
  backgrounds: {
    default: 'light',
  },
  layout: 'centered',
}
InputBox.component = Input
InputBox.argTypes = {
  type: {
    options: types,
    control: 'select',
  },
  size: {
    options: sizes,
    control: 'select',
  },
  icon: {
    options: allIcons,
    control: 'select',
  },
}
