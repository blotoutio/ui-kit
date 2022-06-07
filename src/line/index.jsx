import { chartColors } from '../common/constants'
import EChart from '../echart'
import NoResults from '../common/noResults'

const getOptions = (data) => {
  const series = data.bars.map((bar, index) => {
    return {
      name: bar,
      type: 'line',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: data.data[index].data,
    }
  })

  const options = {
    tooltip: {
      trigger: data.tooltipType === 'item' ? 'item' : 'axis',
      axisPointer: {
        snap: true,
        label: {
          backgroundColor: '#6a7985',
        },
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
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: data.categories,
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
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

  if (data.data[0].breakDown != null) {
    options.tooltip.formatter = (params) => {
      if (data.tooltipType === 'item') {
        const { seriesIndex, dataIndex, color } = params

        const eventName = data.bars[seriesIndex]
        const eventsCount = data.data[seriesIndex].data[dataIndex]
        const organic = data.data[seriesIndex].breakDown[dataIndex].Organic
        const nonOrganic =
          data.data[seriesIndex].breakDown[dataIndex]['Non Organic']
        const organicElement = Object.entries(organic.breakDown).reduce(
          (html, [key, value]) => html + `${key}: ${value} <br/>`,
          ''
        )
        const nonOrganicElement = Object.entries(nonOrganic.breakDown).reduce(
          (html, [key, value]) => html + `${key}: ${value} <br/>`,
          ''
        )

        return `
          <b style="color: ${color}">${eventName} (${eventsCount})</b><br/>
          <b>Organic (${organic.data})</b><br/>
          ${organicElement}
          <b>Non Organic (${nonOrganic.data})</b><br/>
          ${nonOrganicElement}
        `
      }

      let organic = data.data[0].breakDown[params[0].dataIndex]
      let nonOrganic = data.data[1].breakDown[params[1].dataIndex]
      organic = Object.entries(organic).reduce(
        (html, [key, value]) => html + `${key}: ${value} <br/>`,
        ''
      )
      nonOrganic = Object.entries(nonOrganic).reduce(
        (html, [key, value]) => html + `${key}: ${value} <br/>`,
        ''
      )

      return `
          <b style="color: ${params[2].color}">${data.bars[2]} (${params[2].data})</b><br/><br/>
          <b style="color: ${params[0].color}">${data.bars[0]} (${params[0].data})</b><br/>
          ${organic}<br/>
          <b style="color: ${params[1].color}">${data.bars[1]} (${params[1].data})</b><br/>
          ${nonOrganic}
        `
    }
  }

  if (data.bars.length > 1) {
    options.legend = {
      data: data.bars,
      bottom: 0,
    }
  }

  return options
}

const LineChart = ({ id, data }) => {
  if (
    !data ||
    !data.bars ||
    (data && (data.data.length === 0 || data.data[0].data.length === 0))
  ) {
    return <NoResults />
  }

  return (
    <EChart
      options={getOptions(data)}
      config={{
        notMerge: true,
      }}
      id={id}
    />
  )
}

export default LineChart
