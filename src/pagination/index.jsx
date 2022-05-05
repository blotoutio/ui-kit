import { perPageOptions } from '../common/utils'
import { SimpleSelect } from '../select'
import { useState, useEffect } from 'react'
import { Section, StyledText, PgNo, FooterSection, Left, Right } from './style'

export const Pagination = ({
  data,
  perPage = perPageOptions[2],
  setBlockData,
  paginationType = 'large',
}) => {
  const [endRow, setEndRow] = useState(20)
  const [curPage, setCurPage] = useState(1)
  const [startRow, setStartRow] = useState(1)
  const [pageNumbers, setPageNumbers] = useState([])
  const [showFooter, setShowFooter] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(perPage)

  useEffect(() => {
    setStartRow(1)
    setCurPage(1)
    setRowsPerPage(perPage)
    setShowFooter(false)

    if (data) {
      if (data.length > perPage.value) {
        setShowFooter(true)
      }
      setEndRow(Math.min(data.length, perPage.value))
      setBlockData(data.slice(0, perPage.value))
      getPageNumbers(curPage, data.length, perPage.value)
    } else {
      setEndRow(0)
      setBlockData([])
    }
  }, [data])

  const handleRowsPerPage = (e) => {
    setCurPage(1)
    setStartRow(1)
    setRowsPerPage(e)
    setEndRow(Math.min(data.length, e.value))
    setBlockData(data.slice(0, e.value))
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
