import { Pagination } from '../../pagination/index'
import { useState } from 'react'

export default {
  title: 'Pagination',
}

const types = ['small', 'large']

const rows = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

export const Paginations = (args) => {
  return (
    <>
      <Pagination
        key={args.paginationType}
        paginationType={args.paginationType}
        data={rows}
        perPage={args.perPage}
      />
    </>
  )
}

Paginations.args = {
  paginationType: 'large',
}

Paginations.component = 'Pagination'

Paginations.parameters = {
  backgrounds: {
    default: 'light',
  },
  layout: 'centered',
}

Paginations.argTypes = {
  paginationType: {
    options: types,
    control: 'select',
  },
}
