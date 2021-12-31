import Input from '../../input'
import Wrapper from '../../fieldWrapper'

export default {
  title: 'Form',
}

export const FieldWrapper = (args) => {
  return (
    <Wrapper {...args}>
      <Input />
    </Wrapper>
  )
}
FieldWrapper.args = {
  helperText: 'Let me help you out...',
  helperType: 'text',
  label: 'Awesome input',
}

FieldWrapper.argTypes = {
  helperType: {
    options: ['error', 'text'],
    control: 'select',
  },
}

FieldWrapper.parameters = {
  backgrounds: {
    default: 'light',
  },
  layout: 'centered',
}

FieldWrapper.component = 'FieldWrapper'
