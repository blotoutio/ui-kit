import EChart from '../echart'
import { chartColors } from '../common/constants'
import NoResults from '../common/noResults'

const getOptions = ({
  data,
  vertical,
  labelFormatter,
  percent,
  showLegend,
}) => {
  if (percent) {
    labelFormatter = (value) => `${value}%`
  }

  if (!labelFormatter) {
    labelFormatter = (value) => value
  }

  const series = data.data.map((item, i) => {
    return {
      name: data.bars[i],
      type: 'bar',
      stack: 'total',
      barGap: 0.2,
      emphasis: {
        focus: 'series',
      },
      data: data.data[i],
      label: {
        show: true,
        formatter: (params) => {
          return labelFormatter(params.value)
        },
      },
    }
  })

  let xAxis
  let yAxis
  if (vertical) {
    xAxis = [
      {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLabel: {
          formatter: (label) => labelFormatter(label),
        },
      },
    ]
    yAxis = [
      {
        type: 'category',
        axisTick: { show: false },
        data: data.categories,
        inverse: true,
        axisLabel: {
          formatter: (label) => label.substr(0, 40),
        },
      },
    ]
  } else {
    xAxis = [
      {
        type: 'category',
        axisTick: { show: false },
        data: data.categories,
      },
    ]
    yAxis = [
      {
        type: 'value',
        axisLabel: {
          formatter: (label) => labelFormatter(label),
        },
      },
    ]
  }

  let legend = null
  if (showLegend) {
    legend = {
      data: data.bars,
      top: 'bottom',
    }
  }

  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        snap: true,
        type: 'shadow',
      },
      formatter: (params) => {
        const index = params[0].dataIndex
        return params
          .map((item, i) => {
            const label = labelFormatter(item.value)
            let value = label
            if (data.count) {
              value = `${data.count[i][index]} (${label})`
            }

            return `<div>${item.axisValueLabel}</div><div>${item.marker} <b>${
              item.seriesName || item.axisValue
            }</b> ${value}</div>`
          })
          .join('')
      },
    },
    toolbox: {
      show: true,
      orient: 'horizontal',
      left: 'right',
      top: 'top',
      feature: {
        saveAsImage: { show: true, title: 'Save' },
      },
    },
    legend,
    xAxis,
    yAxis,
    series,
    color: chartColors,
    grid: {
      left: '20px',
      right: '45px',
      bottom: '30px',
      top: '30px',
      containLabel: true,
    },
  }
}

const BarChart = (props) => {
  if (!props.data || (props.data && props.data.data.length === 0)) {
    return <NoResults />
  }

  return (
    <EChart
      options={getOptions(props)}
      config={{
        notMerge: true,
      }}
      id={props.id}
    />
  )
}

export default BarChart
