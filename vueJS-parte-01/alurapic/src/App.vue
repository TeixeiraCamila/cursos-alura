<template>
  <div id="app">
    <alurapic />
  </div>
</template>

<script>
import alurapic from '@/components/alurapic.vue';

export default {
  name: 'App',
  components: {
    alurapic
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
