export default ({ width, height }) => {
  return (
    <svg
      width={width || '24'}
      height={height || '24'}
      viewBox='0 0 16 16'
      fill='none'
    >
      <rect width='16' height='16' rx='3' fill='currentColor' />
      <path
        d='M12.0625 7H3.9375C3.41973 7 3 7.41973 3 7.9375C3 8.45527 3.41973 8.875 3.9375 8.875H12.0625C12.5803 8.875 13 8.45527 13 7.9375C13 7.41973 12.5803 7 12.0625 7Z'
        fill='white'
      />
    </svg>
  )
}
