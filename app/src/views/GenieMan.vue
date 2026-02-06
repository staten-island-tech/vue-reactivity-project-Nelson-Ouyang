<template>
  <div class="container">
    <h1>genie clicker</h1>
    <h2>{{ count }}</h2>
    <img @click="increment" src="/genie.jpg" />
    <button @click="set0">Stop</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0) //use ur magic to track this varaible
function increment() {
  count.value++
  count.value = Math.pow(count.value, 1.005)
  // because _
}
function set0() {
  count.value = 0
}
</script>

<style scoped></style>
