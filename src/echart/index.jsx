import { useRef, useEffect } from 'react'
import * as echarts from 'echarts'

const resizeObserver = new ResizeObserver((entries) => {
  entries.map(({ target }) => {
    const instance = echarts.getInstanceByDom(target)
    if (instance) {
      instance.resize()
    }
  })
})

const EChart = ({ options, config, resize, id }) => {
  const chartRef = useRef(null)
  let chart = null

  useEffect(() => {
    if (
      options.toolbox &&
      options.toolbox.feature &&
      options.toolbox.feature.saveAsImage
    ) {
      options.toolbox.feature.saveAsImage.icon =
        'path://M5.0625 0H6.9375C7.24922 0 7.5 0.250781 7.5 0.5625V4.5H9.55547C9.97266 4.5 10.1812 5.00391 9.88594 5.29922L6.32109 8.86641C6.14531 9.04219 5.85703 9.04219 5.68125 8.86641L2.11172 5.29922C1.81641 5.00391 2.025 4.5 2.44219 4.5H4.5V0.5625C4.5 0.250781 4.75078 0 5.0625 0ZM12 8.8125V11.4375C12 11.7492 11.7492 12 11.4375 12H0.5625C0.250781 12 0 11.7492 0 11.4375V8.8125C0 8.50078 0.250781 8.25 0.5625 8.25H4.00078L5.14922 9.39844C5.62031 9.86953 6.37969 9.86953 6.85078 9.39844L7.99922 8.25H11.4375C11.7492 8.25 12 8.50078 12 8.8125ZM9.09375 10.875C9.09375 10.6172 8.88281 10.4062 8.625 10.4062C8.36719 10.4062 8.15625 10.6172 8.15625 10.875C8.15625 11.1328 8.36719 11.3438 8.625 11.3438C8.88281 11.3438 9.09375 11.1328 9.09375 10.875ZM10.5938 10.875C10.5938 10.6172 10.3828 10.4062 10.125 10.4062C9.86719 10.4062 9.65625 10.6172 9.65625 10.875C9.65625 11.1328 9.86719 11.3438 10.125 11.3438C10.3828 11.3438 10.5938 11.1328 10.5938 10.875Z'
    }
    chart = echarts.init(chartRef.current, null, { renderer: 'svg' })
    resizeObserver.observe(chartRef.current)
    chart.setOption(options, config)
  }, [options])

  useEffect(() => {
    if (!chart) {
      return
    }
    chart.resize()
  }, [resize])

  return (
    <div
      data-testid={id}
      ref={chartRef}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  )
}

export default EChart
