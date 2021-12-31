import { useState } from 'react'
import Toggle from '../../toggle'

export default {
  title: 'Toggle',
  component: Toggle,
}

export const ControlToggle = (args) => {
  const [selected, setSelected] = useState(args.selected)

  return (
    <Toggle
      handleChange={(option) => setSelected(option)}
      {...args}
      selected={selected}
    />
  )
}
ControlToggle.args = {
  options: [
    { label: 'Trends', value: 'trends' },
    { label: 'Funnel', value: 'funnel' },
  ],
  selected: { label: 'Trends', value: 'trends' },
  isDisable: false,
}

ControlToggle.parameters = {
  backgrounds: {
    default: 'light',
  },
  layout: 'centered',
}
