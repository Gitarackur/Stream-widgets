<template>
  <div class="">
    <Chart :time-stamps="timeStamps" :portfolio-value="portfolioValue" />

    <div class="md:flex md:justify-between md:items-center md:-mx-4">
      <div class="md:w-8/12 md:px-4">
        <div
          class="flex flex-row gap-2 justify-between items-center bg-sidebar p-1"
        >
          <div class="md:w-full">
            <DateInput v-model="test1" class="w-full" @selected="closePicker" />
          </div>

          <div>-</div>

          <div class="md:w-full">
            <DateInput v-model="date" class="w-full" @selected="closePicker" />
          </div>
        </div>
      </div>
      

      <div class="md:w-5/12 md:px-4">
        <p class="c-676768 mt-10 md:mt-0">
          Your did <span class="text-white">8%</span> less trades compared to <span class="text-white">80</span> trades past month
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import DateInput from '~/components/Widget/Input/DateInput.vue'
import Chart from '~/components/Widget/Chart/index.vue'

export default {
  name: 'Widget',
  components: {
    DateInput,
    Chart,
  },
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
  data() {
    return { date: new Date('01-01-2000'), test1: new Date('') }
  },
  methods: {
    closePicker() {
      // setTimeout(() => (this.showPicker = false), 500)
    },
  },
}
</script>
<style scoped>
.bg {
  background: #1c1c1d;
}
.bg-sidebar {
  background: #0a0a0b;
}
</style>
