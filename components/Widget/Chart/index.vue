<template>
  <div>
    <h1>charts</h1>
    <div class="">
      <ClientOnly>
        <ApexChart type="area" :options="chartOptions" :series="series" />
      </ClientOnly>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VChart',
  components: {},
  data() {
    return {
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
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            style: {
              colors: '#fff',
              fontSize: '8px',
              cssClass: 'apexcharts-xaxis-label',
            },
          },
        },
        yaxis: {
          labels: {
            show: false,
            minWidth: 0,
            maxWidth: 160,
            style: {
              color: '#fff',
              fontSize: '8px',
              cssClass: 'apexcharts-yaxis-label',
            },
            offsetX: 0,
            offsetY: 0,
            rotate: 0,
          },
        },
        tooltip: {
          custom({ series, seriesIndex, dataPointIndex, w }) {
            const data =
              w.globals.initialSeries[seriesIndex].data[dataPointIndex]
            console.log('series', series[0][dataPointIndex], seriesIndex, dataPointIndex)
            return (
              `<div style="font-size: 14px; line-height: 20px; color: #65C49D; background-color: #262627; border: none; box-shadow: none; outline: none; padding: 10px;"
                <p>
                  ${Number(series[0][dataPointIndex])}
                </p>
              </div>`
            )
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
      series: [
        {
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91],
          colors: ['#65C49D', '#65C49D'],
        },
      ],
    }
  },
}
</script>
