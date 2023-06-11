<script setup lang="ts">
import Avatar from './components/Avatar.vue'
</script>

<template>
  <main><div class="wrapper">
    <Avatar></Avatar>
  </div></main>
</template>

<style scoped>
main{
  min-height: 100vh;
  display: flex;
  align-items:center;
  justify-content:center;
}
.wrapper{
  display:flex;
}
</style>
