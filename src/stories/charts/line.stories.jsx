import LineChart from '../../line'
import { Container } from '../common/sharedStyle'

export default {
  title: 'Charts',
}

const chartData = {
  bars: ['Organic', 'Non-Organic', 'Unique'],
  categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  data: [
    {
      data: [2, 0, 0, 0, 0, 0, 0],
      breakDown: [{ Direct: 2 }, {}, {}, {}, {}, {}, {}],
    },
    { data: [0, 0, 0, 0, 0, 0, 0], breakDown: [{}, {}, {}, {}, {}, {}, {}] },
    { data: [2, 0, 0, 0, 0, 0, 0], breakDown: [{}, {}, {}, {}, {}, {}, {}] },
  ],
}

export const Line = (args) => {
  return (
    <Container>
      <LineChart data={chartData} />
    </Container>
  )
}

Line.args = {
  data: chartData,
}

Line.component = LineChart

Line.parameters = {
  backgrounds: {
    default: 'light',
  },
  layout: 'centered',
}
