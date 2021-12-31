export default ({ width, height }) => {
  return (
    <svg width={width || '14'} height={height || '14'} viewBox='0 0 14 14'>
      <g clipPath='url(#trash-icon)' fill='currentColor'>
        <path d='M2.333 12.445c0 .86.696 1.555 1.556 1.555h6.222c.86 0 1.556-.696 1.556-1.555V3.11H2.333v9.334zM9.722.778L8.944 0H5.056l-.778.778H1.556v1.555h10.888V.778H9.722z' />
      </g>
      <defs>
        <clipPath id='trash-icon'>
          <path fill='#fff' d='M0 0h14v14H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}
