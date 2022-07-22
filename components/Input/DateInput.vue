<template>
  <div
    class="dateInput text-white"
    :class="[showPicker && 'show']"
    @click="showPicker = !showPicker"
  >
    <!-- @blur="closePicker" -->
    <input
      v-model="vdate"
      class="px-5 py-1.5 bg262627 inline-block"
      type="text"
    />
    <div class="calendar">
      <DatePicker1 v-model="vdate" />
    </div>
  </div>
</template>

<script>
import DatePicker1 from '../DatePicker.vue'

function isValidDate(dateObject) {
  return new Date(dateObject).toString() !== 'Invalid Date'
}

export default {
  name: 'DateInput',
  components: {
    DatePicker1,
  },
  data() {
    return {
      // date: new Date('01-01-2000'),
      date: new Date(),
      showPicker: false,
    }
  },
  computed: {
    vdate: {
      set(v) {
        this.date = isValidDate(v) && new Date(v)
      },
      get() {
        return this.date
      },
    },
  },
  methods: {
    closePicker() {
      setTimeout(() => (this.showPicker = false), 500)
    },
  },
}
</script>

<style>
.dateInput {
  position: relative;
  display: inline-block;
  /* box-shadow: none;
  outline: none; */
}

.dateInput .calendar {
  visibility: hidden;
  /* width: 200px; */
  /* background: #262627; */
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 140%;
  left: 50%;
  margin-left: -100px;
  opacity: 0;
  transition: opacity 0.3s;
}

.dateInput.show .calendar {
  visibility: visible;
  opacity: 1;
}
</style>
