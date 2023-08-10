<template>
  <navigationView />
  <router-view />
  <footerView />
</template>

<style scoped>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
<script setup lang="ts">
  import navigationView from './components/Navigation.vue'
  import footerView from './components/Footer.vue'
</script>