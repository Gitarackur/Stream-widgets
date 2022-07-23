<template>
  <div class="md:min-h-screen bg">
    <div class="md:flex md:items-stretch">
      <div class="md:w-1/12 md:min-h-screen bg-sidebar">
        <div>Sidebar</div>
      </div>

      <div class="md:w-11/12 px-6">
        <div class="flex justify-between items-center my-4">
          <div class="">
            <h1 class="c-white">Dashboard</h1>
          </div>

          <div class="">
            <button class=""></button>
            <button class="">Add New Widget</button>
          </div>
        </div>

        <div class="md:flex md:items-stretch md:flex-wrap lg:-m-2">
          <div class="md:w-3/12 lg:p-2">
            <Portfolio />
          </div>

          <div class="md:w-3/12 lg:p-2">
            <TotalReturn />
          </div>

          <div class="md:w-3/12 lg:p-2">
            <AvgReturn />
          </div>

          <div class="md:w-3/12 lg:p-2">
            <ProfitFactor />
          </div>

          <div class="md:w-3/12 lg:p-2">
            <Card class="h-full w-full">
              <h1></h1>
            </Card>
          </div>

          <div class="md:w-6/12 lg:p-2">
            <Card class="h-full w-full">
              <Widget />
            </Card>
          </div>

          <div class="md:w-3/12 lg:p-2">
            <Card class="h-full w-full">
              <!-- <h1></h1> -->
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
import Portfolio from '~/components/Dashboard/Portfolio.vue'
import TotalReturn from '~/components/Dashboard/TotalReturn.vue'
import AvgReturn from '~/components/Dashboard/AvgReturn.vue'
import ProfitFactor from '~/components/Dashboard/ProfitFactor.vue'
import Widget from '../components/Widget/index.vue'

export default {
  name: 'IndexPage',
  components: {
    Card,
    Portfolio,
    TotalReturn,
    AvgReturn,
    ProfitFactor,
    Widget
},
  data() {
    return { 
      timestamps: [1568666854141, 1568595225048, 1568594645595],
      portfolioValue: [100, 150, 200],
    }
  },
  methods: {},
}
</script>
<style scoped>
.bg {
  background: #1c1c1d;
  /* background: #111112; */
  /* background: #323233; */
  /* background: #262627; */
  /* background: #0a0a0b; */
}
.bg-sidebar {
  /* background: #111112; */
  background: #0a0a0b;
}
</style>
