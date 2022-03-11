export default ({ width, height }) => {
  return (
    <svg
      width={width || '24'}
      height={height || '24'}
      viewBox='0 0 16 16'
      fill='none'
    >
      <rect width='16' height='16' rx='3' fill='#fff' />
      <path
        d='M12.063 7H3.937a.937.937 0 1 0 0 1.875h8.126a.937.937 0 1 0 0-1.875Z'
        fill='currentColor'
      />
    </svg>
  )
}
