import Table from '../../userTable'
import { useState } from 'react'

export default {
  title: 'Table',
}

const rows = [
  ['sdk_start', '1', '2'],
  ['visibility_hidden', '3', '4'],
  ['hover', '5', '6'],
]
const extraColumns = [
  { label: 'Jul 20-Jul 26', value: 1, selected: false },
  { label: 'Jul 27-Aug 02', value: 6, selected: false },
  { label: 'Jul 03-Aug 09', value: 4, selected: false },
]

export const UserTable = (args) => {
  const [rowData, setRowData] = useState(args.rows)
  const [headers, setHeaders] = useState(args.headers)
  const [extraColumns, setExtraColumns] = useState(args.extraColumns)

  const addColumn = (column) => {
    const headerList = [...headers]
    const rowList = [...rows]
    let data = []
    if (column.selected) {
      if (column.label === 'All') {
        extraColumns.forEach((val, colIndex) => {
          if (val.label === 'All') {
            extraColumns[colIndex].selected = false
            return
          }
          const index = headerList.findIndex((item) => item === val.label)

          if (index !== -1) {
            headerList.splice(index, 1)
            rowList.forEach((row) => {
              row.splice(index, 1)
              data.push(row)
            })
          }
          extraColumns[colIndex].selected = false
        })
      } else {
        const allIndex = extraColumns.findIndex((item) => item.label === 'All')
        extraColumns[allIndex].selected = false
        const index = headers.findIndex((item) => item === column.label)
        if (index !== -1) {
          headerList.splice(index, 1)
          rowList.forEach((row) => {
            row.splice(index, 1)
            data.push(row)
          })
        }
      }
    } else {
      if (column.label === 'All') {
        extraColumns.forEach((val, colIndex) => {
          if (val.label !== 'All') {
            const headerIndex = headerList.findIndex(
              (item) => item === val.label
            )
            if (headerIndex === -1) {
              headerList.push(val.label)
              rowList.forEach((row) => {
                row.push(val.value)
                data.push(row)
              })
            }
          }
          extraColumns[colIndex].selected = true
        })
      } else {
        headerList.push(column.label)
        rowList.forEach((row) => {
          row.push(column.value)
          data.push(row)
        })
      }
    }

    if (column.label !== 'All') {
      const columnIndex = extraColumns.findIndex(
        (item) => item.label === column.label
      )
      extraColumns[columnIndex].selected = !column.selected
    }

    setExtraColumns(extraColumns)
    setHeaders(headerList)
    setRowData(data)
  }

  return (
    <Table
      headers={headers}
      rows={rowData}
      noData={args.noData}
      searchable={args.showSearch}
      downloadable={args.showDownload}
      extraColumns={extraColumns}
      addColumn={addColumn}
    />
  )
}

UserTable.args = {
  headers: ['Name', 'Jul 06-Jul 12', 'Jul 13-Jul 19'],
  noData: ['No additional data found for the last week.'],
  rows: rows,
  showDownload: true,
  extraColumns,
}

UserTable.component = 'UserTable'

UserTable.parameters = {
  backgrounds: {
    default: 'light',
  },
  layout: 'centered',
}
