export default ({ width, height }) => {
  return (
    <svg width={width || '12'} height={height || '12'} viewBox='0 0 12 12'>
      <path
        d='M6.80162 0.910393C6.58137 0.7125 6.29572 0.603027 5.99962 0.603027C5.70353 0.603027 5.41788 0.7125 5.19762 0.910393L0.797624 4.86399C0.672522 4.97649 0.572476 5.11405 0.503978 5.26772C0.435481 5.42139 0.400063 5.58775 0.400024 5.75599V11.4C0.400024 11.7183 0.526453 12.0235 0.751496 12.2485C0.97654 12.4736 1.28176 12.6 1.60002 12.6H3.20002C3.51828 12.6 3.82351 12.4736 4.04855 12.2485C4.2736 12.0235 4.40002 11.7183 4.40002 11.4V8.19999C4.40002 8.09391 4.44217 7.99217 4.51718 7.91715C4.5922 7.84214 4.69394 7.79999 4.80002 7.79999H7.20002C7.30611 7.79999 7.40785 7.84214 7.48287 7.91715C7.55788 7.99217 7.60002 8.09391 7.60002 8.19999V11.4C7.60002 11.7183 7.72645 12.0235 7.9515 12.2485C8.17654 12.4736 8.48176 12.6 8.80002 12.6H10.4C10.7183 12.6 11.0235 12.4736 11.2486 12.2485C11.4736 12.0235 11.6 11.7183 11.6 11.4V5.75599C11.6 5.58775 11.5646 5.42139 11.4961 5.26772C11.4276 5.11405 11.3275 4.97649 11.2024 4.86399L6.80242 0.910393H6.80162Z'
        fill='currentColor'
      />
    </svg>
  )
}
