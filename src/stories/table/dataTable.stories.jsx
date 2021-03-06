import Table from '../../dataTable'

export default {
  title: 'Table',
}

export const DataTable = (args) => {
  return (
    <Table
      headers={args.headers}
      rows={args.rows}
      noData={args.noData}
      searchable={args.showSearch}
      downloadable={args.showDownload}
      perPage={{ label: args.perPage, value: args.perPage }}
    />
  )
}

DataTable.args = {
  headers: ['Name', 'Jul 06-Jul 12', 'Jul 13-Jul 19'],
  noData: ['No additional data found for the last week.'],
  rows: [
    ['sdk_start', '1', '2'],
    ['visibility_hidden', '3', '4'],
    ['hover', '5', '6'],
    ['hover', '5', '6'],
    ['hover', '5', '6'],
    ['hover', '5', '6'],
    ['hover', '5', '6'],
    ['hover', '5', '6'],
  ],
  showSearch: true,
  showDownload: true,
  perPage: 5,
}

DataTable.component = 'DataTable'

DataTable.parameters = {
  backgrounds: {
    default: 'light',
  },
  layout: 'centered',
}
