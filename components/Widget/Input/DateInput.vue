<template>
  <div
    ref="picker"
    class="dateInput text-white w-full"
    :class="[showPicker && 'show']"
    @click="showPicker = true"
  >
    <input
      :value="value"
      class="px-5 py-1.5 bg262627 box-border w-full inline-block"
      type="text"
      @input="onInput"
    />
    <div class="calendar">
      <DatePicker1 v-model="mdate" @selected="onSelected" />
    </div>
  </div>
</template>

<script>
import DatePicker1 from '~/components/Widget/Input/DatePicker.vue'

function isValidDate(dateObject) {
  return new Date(dateObject).toString() !== 'Invalid Date'
}

export default {
  name: 'DateInput',
  components: {
    DatePicker1,
  },
  props: ['value'],
  data() {
    return {
      showPicker: false,
    }
  },
  computed: {
    mdate: {
      set(v) {
        this.$emit('input', v.toString())
        console.log('called.....', this.value.toString())
      },
      get() {
        let actualDate = this.value
        if (!isValidDate(actualDate)) {
          actualDate = new Date()
        }
        return actualDate
      },
    },
  },
  watch: {
    showPicker() {
      if (this.showPicker) {
        this.$refs.picker.focus()
      }
    },
  },
  created() {
    if (process.browser) {
      window.addEventListener('click', (e) => {
        if (!this.$el.contains(e.target)) {
          this.showPicker = false
        }
      })
    }
  },
  methods: {
    closePicker() {
      this.showPicker = false
    },
    onSelected() {
      this.$nextTick(() => setTimeout(() => this.showPicker = false, 100))
      this.$emit('selected', this.mdate)
    },
    onInput(e) {
      this.$emit('input', e.target.value)
    },
    displayPicker() {
      console.log('calling picker.....')
      this.showPicker = true
    },
    openPicker() {
      this.$refs.picker.focus()
      this.displayPicker()
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
  bottom: 100%;
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
