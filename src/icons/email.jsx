export default ({ width, height }) => {
  return (
    <svg width={width || '16'} height={height || '16'} viewBox='0 0 16 16'>
      <path
        d='M14.667 2H1.333a.667.667 0 00-.666.667v10.666a.667.667 0 00.666.667h13.334a.666.666 0 00.666-.667V2.667A.667.667 0 0014.667 2zM14 12.667H2V6.318l5.752 2.301c.16.063.337.063.496 0L14 6.318v6.349zm0-7.785l-6 2.4-6-2.4V3.333h12v1.549z'
        fill='currentColor'
      />
    </svg>
  )
}
