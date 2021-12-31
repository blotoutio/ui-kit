import styled from 'styled-components'

const Wrapper = styled.span`
  transform: rotate(${({ rotate }) => rotate}deg);
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`

export default ({ rotate = 0, width = 20, height = 20 }) => {
  return (
    <Wrapper rotate={rotate} width={width} height={height}>
      <svg width={width} height={height} viewBox='0 0 20 20'>
        <path
          d='M12.115 10l6.45-6.435a1.506 1.506 0 10-2.13-2.13L10 7.885l-6.435-6.45a1.506 1.506 0 10-2.13 2.13L7.885 10l-6.45 6.435a1.5 1.5 0 000 2.13 1.499 1.499 0 002.13 0L10 12.115l6.435 6.45a1.5 1.5 0 002.13 0 1.5 1.5 0 000-2.13L12.115 10z'
          fill='currentColor'
        />
      </svg>
    </Wrapper>
  )
}
