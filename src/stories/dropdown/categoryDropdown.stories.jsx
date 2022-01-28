import { useState } from 'react'
import Dropdown from '../../dropdown'
import { Funnel } from '../../icons'

const filterCategories = [
  {
    label: 'By Browser',
    value: 'browser_name',
    category: 'Browser',
  },
  {
    label: 'By Country',
    value: 'country_name',
    category: 'Country',
  },
  {
    label: 'By Platform',
    value: 'device_platform',
    category: 'Platform',
  },
  {
    label: 'By Campaign',
    value: 'search_utm_campaign',
    category: 'Campaign',
  },
  {
    label: 'By Application',
    value: 'app_id',
    category: 'Application',
    display: 'label',
  },
]

const subOptions = {
  browser_name: [
    {
      label: 'Chrome',
      value: 'Chrome',
    },
  ],
  country_name: [
    {
      label: 'Slovenia',
      value: 'Slovenia',
    },
    {
      label: 'United States',
      value: 'United States',
    },
  ],
  device_platform: [
    {
      label: 'Mobile',
      value: 'mobile',
    },
    {
      label: 'Tablet',
      value: 'tablet',
    },
  ],
}

export default {
  title: 'Dropdown',
}

export const CategoryDropDown = (args) => {
  const [filterBy, setFilterBy] = useState({})
  const [options, setOptions] = useState([])

  const handleFilter = (e) => {
    setFilterBy(e)
  }

  if (args.noOptionsMessage) {
    const message = args.noOptionsMessage
    args.noOptionsMessage = () => message
  }

  const loadOptions = async (e) => {
    return subOptions[e.value]
  }

  return (
    <Dropdown
      {...args}
      loadOptions={loadOptions}
      value={filterBy}
      handleChange={handleFilter}
      icon={<Funnel width='14' height='16' />}
    >
      Filter
    </Dropdown>
  )
}

CategoryDropDown.args = {
  isSearchable: false,
  isClerable: true,
  isMulti: true,
  isDisabled: false,
  category: filterCategories,
  noOptionsMessage: 'No Options',
}
CategoryDropDown.parameters = {
  layout: 'centered',
}
