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
  HeaderText,
  ArrowsContainer,
  SortingArrow,
  HeaderContainer,
} from './style'
import Input from '../input'
import { Download, Search } from '../icons'
import { perPageOptions, extractText } from '../common/utils'
import { neutrals40 } from '../common/colors'
import { Pagination } from '../pagination'
import Spinner from '../spinner'

const createHeader = (headers, sortable, sortedBy, onSort) => {
  return (
    <StyledHeader>
      {headers.map((header, i) => (
        <StyledTh
          className={`th-${i} ${sortable && 'sortable'}`}
          key={`th-${header}-${i}`}
          onClick={() => sortable && onSort(i)}
        >
          <HeaderContainer>
            <HeaderText>{header}</HeaderText>
            {sortable && (
              <ArrowsContainer>
                <SortingArrow
                  className={`up ${
                    sortedBy.index === i && sortedBy.direction === 1
                      ? 'active'
                      : ''
                  }`}
                />
                <SortingArrow
                  className={`down  ${
                    sortedBy.index === i && sortedBy.direction === -1
                      ? 'active'
                      : ''
                  }`}
                />
              </ArrowsContainer>
            )}
          </HeaderContainer>
        </StyledTh>
      ))}
    </StyledHeader>
  )
}

const sortData = (data, column, direction, compare) => {
  data.sort((a, b) => {
    if (compare) {
      return compare(a, b, column, direction)
    } else {
      if (typeof a[column] === 'string') {
        if (direction > 0) {
          return a[column].localeCompare(b[column])
        } else {
          return b[column].localeCompare(a[column])
        }
      } else {
        if (direction > 0) {
          return a[column] - b[column]
        } else {
          return b[column] - a[column]
        }
      }
    }
  })
  return data
}

const DataTable = ({
  rows,
  totals,
  compare,
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
  sortable = false,
  onSingleClick,
  onDoubleClick,
  isRowActive = () => {
    return false
  },
}) => {
  const defaultData = totals ? [totals, ...rows] : rows
  const [searchText, setSearchText] = useState('')
  const [totalData, setTotalData] = useState([])
  const [pageData, setPageData] = useState({
    pageNo: 1,
    perPage: perPage.value,
  })
  const [sortedBy, setSortedBy] = useState({ index: null, direction: -1 })

  useEffect(() => {
    setTotalData(defaultData)
  }, [rows])

  const onSort = (index) => {
    let direction = sortedBy.direction
    if (sortedBy.index !== index) {
      direction = 0
    }

    let data
    switch (direction) {
      case 1:
        direction = -1
        data = sortData([...rows], index, direction, compare)
        break
      case 0:
        direction = 1
        data = sortData([...rows], index, direction, compare)
        break
      default:
        direction = 0
        data = defaultData
        break
    }

    setTotalData(data)
    setSortedBy({ index, direction })
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
    tableData.forEach((row, i) => {
      const text = row[0].toLowerCase()
      if (text.includes(pattern)) {
        totalRows.push(rows[i])
      }
    })
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
          />
        )}
      </>
    )
  }

  const currentPageData = (data, pagination) => {
    const startRow = (pagination.pageNo - 1) * pagination.perPage + 1
    const endRow = Math.min(data.length, pagination.pageNo * pagination.perPage)
    return data.slice(startRow - 1, endRow)
  }

  const generateRows = () => {
    let data = totalData
    if (hasPagination) {
      data = currentPageData(data, pageData)
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
                  {createHeader(headers, sortable, sortedBy, onSort)}
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
