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
  Settings,
  ColumnWrapper,
  ColumnSection,
  CheckContainer,
  Outside,
} from './style'
import { Download, Dots, Check } from '../icons'
import { perPageOptions } from '../common/utils'
import * as ReactDomServer from 'react-dom/server'
import { Pagination } from '../pagination'
import Spinner from '../spinner'
import Button from '../button'

const UserTable = ({
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
  hasPagination = true,
  extraColumns = [],
  addColumn,
}) => {
  const [totalData, setTotalData] = useState(rows)
  const [blockData, setBlockData] = useState([])
  const [showDialog, setShowDialog] = useState(false)

  useEffect(() => {
    setTotalData(rows)
  }, [rows])

  useEffect(() => {
    extraColumns.unshift({ label: 'All', value: '', selected: false })
  }, [])

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

  const hideMenu = () => {
    setShowDialog(false)
  }

  const getDialog = () => {
    if (!showDialog) {
      return
    }

    return (
      <>
        <ColumnWrapper>
          <ColumnSection>
            {extraColumns.map((column) => {
              return (
                <div onClick={() => addColumn(column)} key={`${column.label}`}>
                  {column.label}
                  {column.selected && (
                    <CheckContainer>
                      <Check />
                    </CheckContainer>
                  )}
                </div>
              )
            })}
          </ColumnSection>
        </ColumnWrapper>
      </>
    )
  }

  const getHeaderSection = () => {
    return (
      <>
        <HeaderSection>
          {downloadable ? (
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
          ) : null}
          <Right>
            <Settings>
              <Button
                color='neutral'
                onClick={() => setShowDialog(true)}
                isDisabled={!extraColumns || extraColumns.length === 0}
              >
                <Dots />
              </Button>
              {getDialog()}

              <Outside shown={showDialog} onClick={hideMenu} />
            </Settings>
          </Right>
        </HeaderSection>
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

export default UserTable
