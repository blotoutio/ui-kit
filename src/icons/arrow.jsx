import styled from 'styled-components'

const Wrapper = styled.span`
  transform: rotate(${({ rotate }) => rotate}deg);
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`

export default ({ rotate = 0, width = 16, height = 16 }) => {
  return (
    <Wrapper rotate={rotate} width={width} height={height}>
      <svg width={width} height={height} viewBox='0 0 16 16'>
        <path
          d='M6.16 12.61h0c.142.117.32.181.503.182a.792.792 0 00.653-.285s0 0 0 0l3.333-4v-.001a.791.791 0 00.001-1.005s0 0 0 0L7.432 3.503a.792.792 0 00-1.153-.119.791.791 0 00-.116 1.115s0 0 0 0l2.815 3.5-2.92 3.494h0a.792.792 0 00.102 1.117z'
          fill='currentColor'
          stroke='currentColor'
          strokeWidth='.25'
        />
      </svg>
    </Wrapper>
  )
}
