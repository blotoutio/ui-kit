import Textarea from '../../textarea'
import { Form } from '../common/sharedStyle'

export default {
  title: 'Form',
}

export const TextareaField = (args) => {
  delete args.icon
  return (
    <Form>
      <Textarea {...args} />
    </Form>
  )
}

TextareaField.args = {
  error: false,
}
TextareaField.parameters = {
  backgrounds: {
    default: 'light',
  },
  layout: 'centered',
}
TextareaField.component = Textarea
