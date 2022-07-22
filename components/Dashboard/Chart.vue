<template>
  <client-only>
    <div>
      <VueApexCharts
        width="700"
        type="line"
        :options="chartOptions"
        :series="series"
      ></VueApexCharts>
    </div>
  </client-only>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  name: 'VChart',
  components: {
    VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          // height: 350,
          type: 'line',
          stacked: false,
        },
        stroke: {
          curve: 'straight',
        },
        xaxis: {
          // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
          ],
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#FF1654', '#247BA0'],
      series: [
        {
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
      ],
    }
  },
}
</script>
