import { SimpleAsyncSelect } from '../../select'

export default {
  title: 'Form',
}

const loadOptions = new Promise((resolve, reject) => {
  const name = 'Dave'
  setTimeout(() => {
    if (name === 'Dave') {
      resolve([
        { label: 'Forward', value: 'forward' },
        { label: 'Reverse', value: 'reverse' },
        { label: 'Top', value: 'top' },
        { label: 'Bottom', value: 'bottom' },
      ])
    } else {
      reject('Unable to Fetch Details...')
    }
  }, 3000)
})

export const AsyncSelect = (args) => {
  const LoadOptionsHandler = () => {
    return loadOptions
  }
  return (
    <SimpleAsyncSelect
      loadOptions={LoadOptionsHandler}
      width={args.width}
      isMulti={args.isMulti}
      isDisabled={args.isDisabled}
      isClearable={args.isClearable}
      isSearchable={args.isSearchable}
      type={args.type}
      noOptionsMessage={() => args.noOptionsMessageValue}
    />
  )
}
AsyncSelect.args = {
  width: '225',
  isMulti: true,
  isDisabled: false,
  isSearchable: true,
  isClearable: true,
  type: 'default',
  noOptionsMessageValue: 'Loading Options...',
}

AsyncSelect.argTypes = {
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
    options: ['default', 'form'],
    control: 'select',
  },
}

AsyncSelect.component = 'SimpleAsyncSelect'

AsyncSelect.parameters = {
  backgrounds: {
    default: 'light',
  },
  layout: 'centered',
}
