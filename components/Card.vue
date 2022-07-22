<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
}
</script>

<style scoped>
.card {
  /* padding: 24px 24px 0px; */
  padding: 24px;
  display: inline-block;
  background: #262627;
  border: 1px solid #323233;
  border-radius: 6px;
}
</style>
