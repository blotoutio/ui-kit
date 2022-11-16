import * as ReactDomServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { css } from 'styled-components'

import {
  errorJuice,
  successJuice,
  white,
  link,
  attentionJuice,
} from '../common/colors'

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
    return ReactDomServer.renderToStaticMarkup(
      <StaticRouter>{element}</StaticRouter>
    ).replace(/<[^>]+>/g, '')
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

export const getVariantColors = (variant) => {
  switch (variant) {
    case 'success': {
      return css`
        background: ${successJuice};
        color: ${white};
      `
    }
    case 'error': {
      return css`
        background: ${errorJuice};
        color: ${white};
      `
    }
    case 'info': {
      return css`
        background: ${link};
        color: ${white};
      `
    }
    case 'warning': {
      return css`
        background: ${attentionJuice};
      `
    }
  }
}
