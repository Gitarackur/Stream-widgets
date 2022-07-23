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
          id: 'vuechart-example',
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
        },
        fill: {
          colors: [
            'rgba(101, 196, 157, 0.1, 0.2512)',
            'rgba(101, 196, 157, 0, 0.968)',
          ],
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.2513,
            opacityTo: 0.968,
            stops: [0, 96.18, 25.13, 0],
          },
        },
        stroke: {
          show: true,
          curve: 'straight',
          // lineCap: 'butt',
          colors: ['#447E6B', '#65C49D'],
          width: 3,
          dashArray: 0,
        },
        dataLabels: {
          enabled: false,
        },
      },
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
