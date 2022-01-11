import { NoData } from './style'
import noResults from './no_results.svg'

const NoResults = ({ text, noIcon }) => (
  <NoData>
    {!noIcon && <img src={noResults} alt='no results' width={80} height={80} />}
    {text || 'No results'}
  </NoData>
)

export default NoResults
