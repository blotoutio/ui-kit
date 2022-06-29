import { perPageOptions } from '../common/utils'
import { SimpleSelect } from '../select'
import { useState, useEffect } from 'react'
import { Section, StyledText, PgNo, FooterSection, Left, Right } from './style'

export const Pagination = ({
  data,
  reset = true,
  setBlockData,
  setPageData = null,
  paginationType = 'large',
  perPage = perPageOptions[2],
}) => {
  const [endRow, setEndRow] = useState(perPage.value)
  const [curPage, setCurPage] = useState(1)
  const [startRow, setStartRow] = useState(1)
  const [pageNumbers, setPageNumbers] = useState([])
  const [showFooter, setShowFooter] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(perPage)

  useEffect(() => {
    if (data && data.length) {
      const updatedCurPage = reset
        ? 1
        : Math.min(Math.ceil(data.length / rowsPerPage.value), curPage)
      const updatedStartRow = reset
        ? 1
        : (updatedCurPage - 1) * rowsPerPage.value + 1
      const updatedEndRow = reset
        ? perPage.value
        : Math.min(updatedCurPage * rowsPerPage.value, data.length)
      const updatedRowsPerPage = reset ? perPage : rowsPerPage
      const updatedShowFooter = reset
        ? data.length > updatedRowsPerPage.value
        : true

      setPageData &&
        setPageData({
          pageNo: updatedCurPage,
          perPage: updatedRowsPerPage.value,
        })
      setEndRow(updatedEndRow)
      setCurPage(updatedCurPage)
      setStartRow(updatedStartRow)
      setShowFooter(updatedShowFooter)
      setRowsPerPage(updatedRowsPerPage)
      setBlockData(data.slice(updatedStartRow - 1, updatedEndRow))
      getPageNumbers(updatedCurPage, data.length, updatedRowsPerPage.value)
    } else {
      setEndRow(0)
      setBlockData([])
    }
  }, [JSON.stringify(data)])

  const handleRowsPerPage = (e) => {
    setCurPage(1)
    setStartRow(1)
    setRowsPerPage(e)
    setEndRow(Math.min(data.length, e.value))
    setBlockData(data.slice(0, e.value))
    setPageData && setPageData({ pageNo: 1, perPage: e.value })
    getPageNumbers(1, data.length, e.value)
  }

  const range = (left, right, inc = 1) => {
    const range = []
    for (let val = left; val <= right; val += inc) {
      range.push(val)
    }
    return range
  }

  const getPageNumbers = (currentPage, totalRows, perPage) => {
    if (paginationType === 'small') {
      setPageNumbers(['<', '>'])
      return
    }

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
      currentPage <= Math.ceil(data.length / rowsPerPage.value)
    ) {
      setCurPage(currentPage)
      setPageData &&
        setPageData({ pageNo: currentPage, perPage: rowsPerPage.value })
      const startRow = (currentPage - 1) * rowsPerPage.value + 1
      const endRow = Math.min(data.length, currentPage * rowsPerPage.value)
      setStartRow(startRow)
      setEndRow(endRow)
      setBlockData(data.slice(startRow - 1, endRow))
      getPageNumbers(currentPage, data.length, rowsPerPage.value)
    }
  }

  const getPageNumbersSection = (type = 'normal') => {
    return (
      <Section type={type}>
        {pageNumbers.map((page, index) => {
          return (
            <PgNo
              key={index}
              active={curPage === page}
              disabled={page === '...'}
              onClick={handlePageChange}
              paginationType={paginationType}
            >
              {page}
            </PgNo>
          )
        })}
      </Section>
    )
  }

  const getFooterSection = (paginationType) => {
    switch (paginationType) {
      case 'small':
        return (
          <>
            <Left>
              <StyledText>
                {`Paths: ${startRow} - ${endRow} of ${data.length}`}
              </StyledText>
            </Left>
            <Right>{getPageNumbersSection('small')}</Right>
          </>
        )
      default:
        return (
          <>
            <Left>
              <StyledText>View</StyledText>
              <SimpleSelect
                margin={0}
                width={100}
                value={rowsPerPage}
                options={perPageOptions}
                handleChange={handleRowsPerPage}
                type='medium'
              />
              <StyledText>results per page</StyledText>
            </Left>
            <Right>
              <StyledText>{`Results: ${startRow} - ${endRow} of ${data.length}`}</StyledText>
              {getPageNumbersSection()}
            </Right>
          </>
        )
    }
  }

  return (
    <>
      {showFooter && (
        <FooterSection>{getFooterSection(paginationType)}</FooterSection>
      )}
    </>
  )
}
