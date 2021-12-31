import Table from '../../table/index'

export default {
  title: 'Table',
}

export const RegularTable = (args) => {
  return <Table headers={args.headers} rows={args.rows} noData={args.noData} />
}

RegularTable.args = {
  headers: ['Key', 'Value'],
  noData: ['No additional data found for the last week.'],
  rows: [
    ['1', '2'],
    ['3', '4'],
    ['5', '6'],
  ],
}
RegularTable.component = 'Table'
