import { SimpleSelect } from '../../select'

export default {
  title: 'Form',
}

const SelectOptions = [
  {
    label: 'Forward',
    value: 'forward',
  },
  {
    label: 'Reverse',
    value: 'reverse',
  },
  {
    label: 'Top',
    value: 'top',
  },
  {
    label: 'Bottom',
    value: 'bottom',
  },
]

export const Select = (args) => {
  return (
    <SimpleSelect
      width={args.width}
      options={SelectOptions}
      isDisabled={args.isDisabled}
      isClearable={args.isClearable}
      isSearchable={args.isSearchable}
      noOptionsMessage={() => args.noOptionsMessageValue}
      isMulti={args.isMulti}
      type={args.type}
    />
  )
}

Select.args = {
  width: '225',
  isMulti: true,
  isDisabled: false,
  isClearable: true,
  isSearchable: true,
  type: 'default',
  SelectOptions: SelectOptions,
  noOptionsMessageValue: 'No Options available...',
}

Select.argTypes = {
  isDisabled: {
    control: {
      type: 'boolean',
    },
  },
  isClearable: {
    control: {
      type: 'boolean',
    },
  },
  isSearchable: {
    control: {
      type: 'boolean',
    },
  },
  isMulti: {
    control: {
      type: 'boolean',
    },
  },
  type: {
    options: ['default', 'form', 'medium'],
    control: 'select',
  },
}

Select.component = 'SimpleSelect'

Select.parameters = {
  backgrounds: {
    default: 'light',
  },
  layout: 'centered',
}
