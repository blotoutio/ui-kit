import Table from '../../dataTable'

export default {
  title: 'Table',
}

export const DataTable = (args) => {
  return <Table headers={args.headers} rows={args.rows} noData={args.noData} />
}

DataTable.args = {
  headers: ['Name', 'Jul 06-Jul 12', 'Jul 13-Jul 19'],
  noData: ['No additional data found for the last week.'],
  rows: [
    ['sdk_start', '1', '2'],
    ['visibility_hidden', '3', '4'],
    ['hover', '5', '6'],
  ],
}

DataTable.component = 'DataTable'
