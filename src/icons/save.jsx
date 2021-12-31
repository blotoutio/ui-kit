export default ({ width, height }) => {
  return (
    <svg width={width || '12'} height={height || '12'} viewBox='0 0 12 12'>
      <g clipPath='url(#save-icon)' fill='currentColor'>
        <path d='M8.727 8.727H3.273v1.091h5.454v-1.09zM3.273 10.91V12h5.454V10.91H3.273z' />
        <path d='M11.89 3.137L9.7.218A.545.545 0 009.263 0h-.9v4.545a.546.546 0 01-.545.546h-5.09a.546.546 0 01-.546-.546V0H.545A.546.546 0 000 .545v10.91c0 .3.244.545.545.545h1.637V8.182c0-.301.244-.546.545-.546h6.546c.301 0 .545.245.545.546V12h1.637a.546.546 0 00.545-.546v-7.99a.546.546 0 00-.11-.327z' />
        <path d='M3.273 0v4h4V0h-4z' />
      </g>
      <defs>
        <clipPath id='save-icon'>
          <path fill='#fff' d='M0 0h12v12H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}
