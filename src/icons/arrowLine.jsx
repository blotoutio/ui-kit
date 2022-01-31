import styled from 'styled-components'

const Wrapper = styled.span`
  display: flex;
  transform: rotate(${({ rotate }) => rotate}deg);
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`

export default ({ rotate = 0, width = 10, height = 9 }) => {
  return (
    <Wrapper rotate={rotate} width={width} height={height}>
      <svg width={width} height={height} viewBox='0 0 10 9'>
        <path
          d='M4.436 8.158l.767-.763-2.663-2.66h6.69V3.629H2.54L5.203.964 4.436.206.46 4.182l3.976 3.976z'
          fill='currentColor'
        />
      </svg>
    </Wrapper>
  )
}
