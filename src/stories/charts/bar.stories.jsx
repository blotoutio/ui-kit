import BarChart from '../../bar'
import { Container } from '../common/sharedStyle'

export default {
  title: 'Charts',
}

const chartData = {
  categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  data: [['29.24', '26.71', '3.25', '2.89', '16.85', '6.62', '14.44']],
  count: [[243, 222, 27, 24, 140, 55, 120]],
  bars: [],
}

export const Bar = (args) => {
  return (
    <Container>
      <BarChart
        data={chartData}
        vertical={args.vertical}
        percent={args.percent}
      />
    </Container>
  )
}

Bar.args = {
  vertical: false,
  percent: true,
  data: chartData,
}

Bar.argTypes = {
  percent: {
    control: {
      type: 'boolean',
    },
  },
  vertical: {
    control: {
      type: 'boolean',
    },
  },
}

Bar.component = 'SimpleSelect'

Bar.parameters = {
  backgrounds: {
    default: 'light',
  },
  layout: 'centered',
}
