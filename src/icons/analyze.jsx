export default ({ width, height }) => {
  return (
    <svg width={width || '17'} height={height || '16'} viewBox='0 0 17 16'>
      <g clipPath='url(#analyze-icon)' fill='currentColor'>
        <path d='M.938 15.532h8.5c.259 0 .469-.21.469-.469v-.469H2.813c-.776 0-1.407-.63-1.407-1.406V1.438H.938a.469.469 0 00-.47.468v13.157c0 .26.21.469.47.469zM8.032 3.313h2.538L8.032.775v2.538z' />
        <path d='M2.813.5c-.26 0-.47.21-.47.469v12.22c0 .258.21.468.47.468h7.563c.258 0 .468-.21.468-.469v-.602c-.305.08-.617.133-.937.133a3.754 3.754 0 01-3.75-3.75 3.754 3.754 0 013.75-3.75c.325 0 .636.055.937.133V4.25H7.563a.468.468 0 01-.469-.469V.5H2.813z' />
        <path d='M13.526 11.264a.469.469 0 00-.662 0l-.669-.67c.328-.459.524-1.018.524-1.625a2.813 2.813 0 10-2.812 2.813c.607 0 1.166-.197 1.625-.524l.669.668a.469.469 0 000 .663l2.668 2.669a.939.939 0 001.326 0 .939.939 0 000-1.326l-2.669-2.668z' />
      </g>
      <defs>
        <clipPath id='analyze-icon'>
          <path
            fill='currentColor'
            transform='translate(.5)'
            d='M0 0h16v16H0z'
          />
        </clipPath>
      </defs>
    </svg>
  )
}
