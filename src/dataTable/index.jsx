import { useState, useEffect } from 'react'
import {
  StyledTable,
  StyledTd,
  StyledTh,
  NoData,
  StyledTr,
  StyledHeader,
  TableWrapper,
  Left,
  Right,
  DownloadWrapper,
  HeaderSection,
  LoaderContainer,
  Wrapper,
} from './style'
import Input from '../input'
import { Download, Search } from '../icons'
import { perPageOptions } from '../common/utils'
import { neutrals40 } from '../common/colors'
import * as ReactDomServer from 'react-dom/server'
import { Pagination } from '../pagination'
import Spinner from '../spinner'

const DataTable = ({
  rows,
  noData,
  headers,
  emptyCell,
  className,
  Component,
  loader = false,
  type = 'table',
  perPage = perPageOptions[2],
  downloadable = true,
  searchable = true,
  hasPagination = true,
}) => {
  const [searchText, setSearchText] = useState('')
  const [totalData, setTotalData] = useState(rows)
  const [blockData, setBlockData] = useState([])

  useEffect(() => {
    setTotalData(rows)
  }, [JSON.stringify(rows)])

  const extractText = (data) => {
    const elementToString = (element) => {
      return ReactDomServer.renderToStaticMarkup(element).replace(
        /<[^>]+>/g,
        ''
      )
    }

    const tabularData = []
    for (const row of data) {
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
    return tabularData
  }

  const handleCSV = (fileName) => {
    const tableData = extractText([headers, ...totalData])
      .map((row) => row.map((cell) => `"${cell}"`).join(','))
      .join('\n')
    const downloadLink = document.createElement('a')
    const blob = new Blob([tableData])
    downloadLink.href = URL.createObjectURL(blob)
    downloadLink.download = fileName
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  const handleSearch = (e) => {
    const totalRows = []
    const pattern = e.target.value.trim().toLowerCase()
    const tableData = extractText(rows)
    for (const row of tableData) {
      const text = row[0].toLowerCase()
      if (text.includes(pattern)) {
        totalRows.push(row)
      }
    }
    setSearchText(e.target.value)
    setTotalData(totalRows)
  }

  const getHeaderSection = () => {
    return (
      <>
        {downloadable || searchable ? (
          <HeaderSection>
            <Left>
              {downloadable && (
                <>
                  {Component}
                  <DownloadWrapper
                    onClick={() => handleCSV(`${type}-data.csv`)}
                  >
                    <Download />
                    <span>CSV</span>
                  </DownloadWrapper>
                </>
              )}
            </Left>
            <Right>
              {searchable && (
                <Input
                  width={314}
                  type={'text'}
                  color={neutrals40}
                  value={searchText}
                  placeholder={'Search'}
                  onChange={handleSearch}
                  icon={<Search color={neutrals40} />}
                  disabled={loader}
                />
              )}
            </Right>
          </HeaderSection>
        ) : null}
      </>
    )
  }

  const getFooterSection = () => {
    return (
      <>
        {hasPagination && (
          <Pagination
            data={totalData}
            perPage={perPage}
            setBlockData={setBlockData}
          />
        )}
      </>
    )
  }

  return (
    <Wrapper>
      {getHeaderSection()}
      {loader ? (
        <LoaderContainer>
          <Spinner />
        </LoaderContainer>
      ) : (
        <>
          <TableWrapper>
            <StyledTable className={className}>
              {headers && headers.length > 0 && (
                <thead>
                  <StyledHeader>
                    {headers.map((header, i) => (
                      <StyledTh className={`th-${i}`} key={`th-${header}-${i}`}>
                        {header}
                      </StyledTh>
                    ))}
                  </StyledHeader>
                </thead>
              )}
              <tbody
                className={!headers || headers.length === 0 ? 'no-header' : ''}
              >
                {!totalData || totalData.length === 0 ? (
                  <StyledTr>
                    <NoData colSpan={headers.length}>
                      {noData || 'No data.'}
                    </NoData>
                  </StyledTr>
                ) : (
                  <>
                    {blockData.map((row, i) => (
                      <StyledTr
                        className={`tr-${i}`}
                        key={`tr-${i}`}
                        hasColor={i % 2 === 1}
                      >
                        {row.map((cell, j) => (
                          <StyledTd
                            className={`td-${j}`}
                            key={`td-${i}-${j}-${cell}`}
                          >
                            {cell != null ? cell : emptyCell || ''}
                          </StyledTd>
                        ))}
                      </StyledTr>
                    ))}
                  </>
                )}
              </tbody>
            </StyledTable>
          </TableWrapper>
          {getFooterSection()}
        </>
      )}
    </Wrapper>
  )
}

export default DataTable
