export default ({ width, height }) => {
  return (
    <svg width={width || '16'} height={height || '16'} viewBox='0 0 16 16'>
      <g clipPath='url(#a)' fill='currentColor'>
        <path d='M15.414 6.586a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828ZM9.414 6.586a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828ZM3.414 6.586A2 2 0 1 1 .586 9.414a2 2 0 0 1 2.828-2.828Z' />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='currentColor' d='M0 0h16v16H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}
