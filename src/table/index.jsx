import {
  StyledHeader,
  StyledTable,
  StyledTd,
  StyledTh,
  NoData,
} from './style.jsx'

const Table = ({ headers, rows, className, format, noData }) => {
  if (!rows || rows.length === 0) {
    return <NoData>{noData || 'No data.'}</NoData>
  }

  return (
    <StyledTable className={className}>
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
          <tr data-testid='app-item' key={`tr-${i}`}>
            {row.map((cell, j) => (
              <StyledTd key={`td-${i}-${j}-${cell}`}>
                {format ? format(i, j, cell) : cell}
              </StyledTd>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
}

export default Table
