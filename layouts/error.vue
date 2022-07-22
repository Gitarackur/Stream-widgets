<template>
  <div>
    <div v-if="error.statusCode === 404">
      <h1>error</h1>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  layout: 'error',
  props: ['error'], // you can set a custom layout for the error page
}
</script>
