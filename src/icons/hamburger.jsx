import styled from 'styled-components'

const Wrapper = styled.span`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`

export default ({ width = 36, height = 36 }) => {
  return (
    <Wrapper width={width} height={height}>
      <svg width={width} height={height} viewBox='0 0 36 36'>
        <path
          d='M31.5 27H4.5V24H31.5V27ZM31.5 19.5H4.5V16.5H31.5V19.5ZM31.5 12H4.5V9H31.5V12Z'
          fill='currentColor'
        />
      </svg>
    </Wrapper>
  )
}
