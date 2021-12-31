import styled from 'styled-components'

export const TableContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  text-align: center;
  /* align-items: center; */
  grid-gap: 10px 0;
  justify-content: space-around;

  & th,
  & td {
    padding: 8px;
  }

  & table {
    border-collapse: collapse;
  }

  & th + th {
    border-bottom: 1px solid;
  }

  & th,
  & h1 {
    font-weight: 450;
  }
`
