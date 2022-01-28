import { useState } from 'react'
import ButtonDropdown from '../../buttonDropdown'

const timeSeries = [
  {
    label: 'Last 24 hours',
    value: 'hour',
    number: 23,
  },
  {
    label: 'Last week',
    value: 'day',
    number: 6,
  },
  {
    label: 'Last month',
    value: 'week',
    number: 5,
  },
  {
    label: 'Last year',
    value: 'month',
    number: 12,
  },
  {
    label: 'Custom Date Range',
    value: 'custom',
    number: 0,
  },
]

export default {
  title: 'Dropdown',
}

export const ButtonDropDown = (args) => {
  const [timeRange, setTimeRange] = useState(timeSeries[1])

  const handleTimeRange = (e) => {
    if (e === timeRange) {
      return
    }
    setTimeRange(e)
  }

  if (args.noOptionsMessage) {
    const message = args.noOptionsMessage
    args.noOptionsMessage = () => message
  }
  return (
    <ButtonDropdown {...args} value={timeRange} handleChange={handleTimeRange}>
      {timeRange ? timeRange.label : 'Time Range'}
    </ButtonDropdown>
  )
}

ButtonDropDown.args = {
  isSearchable: true,
  isClearable: true,
  isDisabled: false,
  options: timeSeries,
  noOptionsMessage: 'No Options',
}
ButtonDropDown.component = 'ButtonDropdown'
ButtonDropDown.parameters = {
  layout: 'centered',
}
