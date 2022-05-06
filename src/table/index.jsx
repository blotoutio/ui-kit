import {
  StyledHeader,
  StyledTable,
  StyledTd,
  StyledTh,
  NoData,
  StyledTr,
} from './style'

const Table = ({ headers, rows, className, format, noData, onDoubleClick }) => {
  if (!rows || rows.length === 0) {
    return <NoData>{noData || 'No data.'}</NoData>
  }

  return (
    <StyledTable className={className} topBorder={!headers || !headers.length}>
      {headers && headers.length > 0 && (
        <StyledHeader>
          <tr>
            {headers.map((header, i) => (
              <StyledTh key={`th-${header}-${i}`}>{header}</StyledTh>
            ))}
          </tr>
        </StyledHeader>
      )}
      <tbody>
        {rows.map((row, i) => (
          <StyledTr
            className={`tr-${i}`}
            data-testid='app-item'
            key={`tr-${i}`}
            onDoubleClick={onDoubleClick ? onDoubleClick.bind(this, i) : null}
            hasHover={!!onDoubleClick}
          >
            {row.map((cell, j) => (
              <StyledTd className={`td-${j}`} key={`td-${i}-${j}-${cell}`}>
                {format ? format(i, j, cell) : cell}
              </StyledTd>
            ))}
          </StyledTr>
        ))}
      </tbody>
    </StyledTable>
  )
}

export default Table
