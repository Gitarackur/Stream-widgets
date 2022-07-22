<template>
  <div class="tooltip">
    <slot></slot>
    <span class="text-xs tooltiptext px-4 py-3 w-full">
      {{ message }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'HoverItems',
  props: {
    message: { type: String, default: 'hoolala' },
  },
}
</script>

<style scoped>
/***** tooltip *****/

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 200px;
  background: #0a0a0b;
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

.tooltip .tooltiptext::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #0a0a0b transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
