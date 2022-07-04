import * as ReactDomServer from 'react-dom/server'

export const perPageOptions = [
  {
    label: '5',
    value: 5,
  },
  {
    label: '10',
    value: 10,
  },
  {
    label: '20',
    value: 20,
  },
  {
    label: '50',
    value: 50,
  },
  {
    label: '100',
    value: 100,
  },
]

export const extractText = (data) => {
  if (!Array.isArray(data)) return data

  const elementToString = (element) => {
    return ReactDomServer.renderToStaticMarkup(element).replace(/<[^>]+>/g, '')
  }

  const tabularData = []
  for (const row of data) {
    if (!Array.isArray(row)) {
      tabularData.push(row)
    } else {
      const newRow = []
      for (const cell of row) {
        let value = cell
        if (Array.isArray(cell)) {
          value = cell.map((item) => elementToString(item)).join(' / ')
        } else if (typeof cell === 'object') {
          value = elementToString(cell)
        }

        newRow.push(value)
      }
      tabularData.push(newRow)
    }
  }
  return tabularData
}
