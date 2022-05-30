import styled from 'styled-components'

const Wrapper = styled.span`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`

export default ({ width = 18, height = 18 }) => {
  return (
    <Wrapper width={width} height={height}>
      <svg viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#box-with-check)'>
          <path
            d='M16.4248 0L6.6373 10.7719L3.79668 8.60625H2.22168L6.6373 15.7781L17.9998 0H16.4248Z'
            fill='#5ACD66'
          />
          <path
            d='M15.1594 15.7782C15.1594 15.9469 15.0188 16.0875 14.85 16.0875H2.22187C2.05312 16.0875 1.9125 15.9469 1.9125 15.7782V3.15005C1.9125 2.9813 2.05312 2.84067 2.22187 2.84067H10.8562L12.5719 0.956299H0.61875C0.28125 0.956299 0 1.23755 0 1.57505V17.3532C0 17.7188 0.28125 18 0.61875 18H16.3969C16.7344 18 17.0156 17.7188 17.0156 17.3813V5.09067L15.1312 7.73442C15.1594 7.73442 15.1594 15.7782 15.1594 15.7782Z'
            fill='#4E647F'
          />
        </g>
        <defs>
          <clipPath id='box-with-check'>
            <rect width='18' height='18' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </Wrapper>
  )
}
