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
  Section,
  StyledText,
  PgNo,
  HeaderSection,
  FooterSection,
  LoaderContainer,
} from './style.jsx'
import 'jspdf-autotable'
import jsPDF from 'jspdf'
import Input from '../input/index.jsx'
import { Download, Search } from '../icons/index.jsx'
import { SimpleSelect } from '../select/index.jsx'
import { perPageOptions } from '../common/utils.jsx'
import { neutrals40 } from '../common/colors'
import * as ReactDomServer from 'react-dom/server'
import Spinner from '../spinner/index.jsx'

const DataTable = ({
  rows,
  noData,
  headers,
  emptyCell,
  className,
  Component,
  loader = false,
  type = 'table',
  perPage = perPageOptions[1],
  downloadable = true,
  searchable = true,
  hasPagination = true,
}) => {
  const [searchText, setSearchText] = useState('')
  const [totalData, setTotalData] = useState(rows)
  const [filteredData, setFilteredData] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(perPage)
  const [curPage, setCurPage] = useState(1)
  const [startRow, setStartRow] = useState(1)
  const [endRow, setEndRow] = useState(20)
  const [pageNumbers, setPageNumbers] = useState([1])
  const [showFooter, setShowFooter] = useState(false)

  useEffect(() => {
    setStartRow(1)
    setTotalData(rows)
    setSearchText('')
    setRowsPerPage(perPage)
    if (rows.length > perPage.value) {
      setShowFooter(true)
    }
    setEndRow(Math.min(rows.length, perPage.value))
    setFilteredData(rows.slice(0, Math.min(rows.length, perPage.value)))
    getPageNumbers(curPage, rows.length, perPage.value)
  }, [rows])

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

  const handlePDF = (fileName) => {
    const tableData = extractText(totalData)
    const doc = new jsPDF({
      orientation: 'landscape',
    })
    doc.autoTable({
      head: [headers],
      body: tableData,
      theme: 'plain',
      styles: {
        fontSize: 12,
      },
    })
    doc.save(fileName)
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
    setCurPage(1)
    setStartRow(1)
    setEndRow(Math.min(totalRows.length, 20))
    setFilteredData(totalRows.slice(0, 20))
    getPageNumbers(1, totalRows.length, rowsPerPage.value)
  }

  const handleRowsPerPage = (e) => {
    setRowsPerPage(e)
    setCurPage(1)
    setStartRow(1)
    setEndRow(Math.min(totalData.length, e.value))
    setFilteredData(totalData.slice(0, e.value))
    getPageNumbers(1, totalData.length, e.value)
  }

  const range = (left, right, inc = 1) => {
    const range = []
    for (let val = left; val <= right; val += inc) {
      range.push(val)
    }
    return range
  }

  const getPageNumbers = (currentPage, totalRows, perPage) => {
    const totalPages = Math.ceil(totalRows / perPage)
    // if totalPages is small, showing all page numbers in pagination
    let pageNums = ['<', ...range(1, totalPages), '>']
    if (totalPages > 7) {
      const startPage = Math.max(currentPage - 1, 2)
      const endPage = Math.min(currentPage + 1, totalPages - 1)
      pageNums = range(startPage, endPage)

      if (currentPage <= 3) {
        pageNums = ['<', 1, 2, 3, 4, 5, '...', totalPages, '>']
      } else if (currentPage >= totalPages - 2) {
        pageNums = ['<', 1, '...', ...range(totalPages - 4, totalPages), '>']
      } else {
        pageNums = ['<', 1, '...', ...pageNums, '...', totalPages, '>']
      }
    }
    setPageNumbers(pageNums)
  }

  const handlePageChange = (e) => {
    if (e.target.innerText === '...') return
    let currentPage = curPage
    if (e.target.innerText === '<') {
      currentPage -= 1
    } else if (e.target.innerText === '>') {
      currentPage += 1
    } else {
      currentPage = parseInt(e.target.innerText)
    }
    if (
      currentPage > 0 &&
      currentPage <= Math.ceil(totalData.length / rowsPerPage.value)
    ) {
      setCurPage(currentPage)
      const startRow = (currentPage - 1) * rowsPerPage.value + 1
      const endRow = Math.min(totalData.length, currentPage * rowsPerPage.value)
      setStartRow(startRow)
      setEndRow(endRow)
      setFilteredData(totalData.slice(startRow - 1, endRow))
      getPageNumbers(currentPage, totalData.length, rowsPerPage.value)
    }
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
                    onClick={() => handlePDF(`${type}-data.pdf`)}
                  >
                    <Download />
                    <span>PDF</span>
                  </DownloadWrapper>
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
          <FooterSection>
            <Left type='footer'>
              <StyledText type='small'>View</StyledText>
              <SimpleSelect
                margin={0}
                width={100}
                value={rowsPerPage}
                options={perPageOptions}
                handleChange={handleRowsPerPage}
              />
              <StyledText type='small'>results per page</StyledText>
            </Left>
            <Right>
              <StyledText type='small'>{`Results: ${startRow} - ${endRow} of ${totalData.length}`}</StyledText>
              <Section>
                {pageNumbers.map((page, index) => {
                  return (
                    <PgNo
                      key={index}
                      active={curPage === page}
                      disabled={page === '...'}
                      onClick={handlePageChange}
                    >
                      {page}
                    </PgNo>
                  )
                })}
              </Section>
            </Right>
          </FooterSection>
        )}
      </>
    )
  }

  return (
    <>
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
                      <StyledTh key={`th-${header}-${i}`}>{header}</StyledTh>
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
                    {filteredData.map((row, i) => (
                      <StyledTr key={`tr-${i}`} hasColor={i % 2 === 1}>
                        {row.map((cell, j) => (
                          <StyledTd key={`td-${i}-${j}-${cell}`}>
                            {cell || emptyCell || '0'}
                          </StyledTd>
                        ))}
                      </StyledTr>
                    ))}
                  </>
                )}
              </tbody>
            </StyledTable>
          </TableWrapper>
          {showFooter && getFooterSection()}
        </>
      )}
    </>
  )
}

export default DataTable
