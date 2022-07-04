import { useEffect, useState } from 'react'
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
import { perPageOptions, extractText } from '../common/utils'
import { neutrals40 } from '../common/colors'
import { Pagination } from '../pagination'
import Spinner from '../spinner'

const DataTable = ({
  rows,
  noData,
  headers,
  emptyCell,
  className,
  Component,
  reset = true,
  loader = false,
  type = 'table',
  perPage = perPageOptions[2],
  downloadable = true,
  searchable = true,
  hasPagination = true,
  onSingleClick,
  onDoubleClick,
  isRowActive = () => {
    return false
  },
}) => {
  const [searchText, setSearchText] = useState('')
  const [totalData, setTotalData] = useState(rows)
  const [blockData, setBlockData] = useState([])
  const [pageData, setPageData] = useState({
    pageNo: 1,
    perPage: perPage.value,
  })

  useEffect(() => {
    setTotalData(rows)
  }, [JSON.stringify(extractText(rows))])

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

  const getRowIdx = (i) => {
    return (pageData.pageNo - 1) * pageData.perPage + i
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
            reset={reset}
            data={totalData}
            perPage={perPage}
            setPageData={setPageData}
            setBlockData={setBlockData}
          />
        )}
      </>
    )
  }

  const generateRows = () => {
    let data = totalData
    if (hasPagination) {
      data = blockData
    }

    return (
      <>
        {data.map((row, i) => (
          <StyledTr
            className={`tr-${i}`}
            key={`tr-${i}`}
            hasColor={i % 2 === 1}
            onClick={
              onSingleClick ? onSingleClick.bind(this, getRowIdx(i)) : null
            }
            onDoubleClick={
              onDoubleClick ? onDoubleClick.bind(this, getRowIdx(i)) : null
            }
            hasHover={!!onDoubleClick || !!onSingleClick}
            isRowActive={isRowActive(row)}
          >
            {row.map((cell, j) => (
              <StyledTd className={`td-${j}`} key={`td-${i}-${j}-${cell}`}>
                {cell != null ? cell : emptyCell || ''}
              </StyledTd>
            ))}
          </StyledTr>
        ))}
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
                  generateRows()
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
