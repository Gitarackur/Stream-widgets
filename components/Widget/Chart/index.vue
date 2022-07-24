<template>
  <div>
    <div class="">
      <ClientOnly>
        <ApexChart type="area" :options="chartOptions" :series="series" />
      </ClientOnly>
    </div>
  </div>
</template>

<script>
const convertArrayTimeStampToDate = (timestampArray) => {
  return (
    timestampArray &&
    timestampArray.map((curr) => {
      const newArr = []
      curr = new Date(curr).toLocaleDateString()
      newArr.push(curr)
      return newArr
    })
  )
}

export default {
  name: 'VChart',
  props: {
    timeStamps: {
      type: Array,
      default: () => [],
    },
    portfolioValue: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    if (process.browser) {
      console.log(this.timeStamps, this.portfolioValue)
      this.chartOptions.xaxis.categories = this.timeStamps;
      this.series[0].data = this.portfolioValue
    }
  },
  data() {
    return {
      series: [
        {
          name: 'series-1',
          data: [],
          colors: ['#65C49D', '#65C49D'],
        },
      ],
      chartOptions: {
        chart: {
          id: 'tradestream graph',
          toolbar: {
            show: false,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: false,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false | '<img src="/static/icons/reset.png" width="20">',
              customIcons: [],
            },
          },
        },
        xaxis: {
          type: 'category',
          categories: [],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: true,
            style: {
              colors: '#676768',
              fontSize: '14px',
              cssClass: 'apexcharts-xaxis-label',
            },
          },
        },
        yaxis: {
          forceNiceScale: false,
          min: 30,
          max: 70,
          tickAmount: 4,
          type:'numeric',
          // tickAmount: 'dataPoints',
          labels: {
            formatter: (value) => value.toFixed(0) +'%',
            style: {
              color: '#676768',
              fontSize: '14px',
              cssClass: 'apexcharts-yaxis-label',
            },
            minWidth: 0,
            maxWidth: 160,
            show: true,
            offsetX: 0,
            offsetY: 0,
            rotate: 0,
          },
        },
        tooltip: {
          custom({ series, seriesIndex, dataPointIndex, w }) {
            const data =
              w.globals.initialSeries[seriesIndex].data[dataPointIndex]
            console.log(
              'series',
              series[0][dataPointIndex],
              seriesIndex,
              dataPointIndex
            )
            return `<div style="font-size: 14px; line-height: 20px; color: #65C49D; background-color: #262627; border: none; box-shadow: none; outline: none; padding: 10px;"
                <p>
                  ${Number(series[0][dataPointIndex]).toFixed(0) + '%'}
                </p>
              </div>`
          },
        },
        fill: {
          colors: [
            'rgba(101, 196, 157, 0.1, 0.2512)',
            'rgba(101, 196, 157, 0, 0.968)',
          ],
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.968,
            opacityTo: 0.2513,
            stops: [100, 96.18, 25.13, 0],
          },
          pattern: {
            style: 'verticalLines',
            width: 6,
            height: 6,
            strokeWidth: 2,
            color: 'red',
          },
        },
        stroke: {
          show: true,
          curve: 'straight',
          lineCap: 'butt',
          colors: ['#447E6B', '#65C49D'],
          width: 3,
          dashArray: 0,
        },
        grid: {
          show: true,
          borderColor: '#323233',
          strokeDashArray: 5,
          position: 'back',
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: true,
            },
          },
          row: {
            colors: undefined,
            opacity: 0.5,
          },
          column: {
            colors: undefined,
            opacity: 0.5,
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
        markers: {
          show: true,
          colors: ['#65C49D', '#65C49D', '#65C49D'],
        },
        dataLabels: {
          enabled: false,
        },
      },
    }
  },
}
</script>
