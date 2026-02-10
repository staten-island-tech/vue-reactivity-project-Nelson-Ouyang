<template>
  <div class="container">
    <h1>whalen clicker</h1>
    <h2>{{ count }}</h2>
    <img @click="increment" src="/whalen.jpg" />
    <button @click="set0">Stop</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0) //use ur magic to track this varaible
let amount = ref(1)
function increment() {
  count.value += amount.value
}
function set0() {
  count.value = 0
}
</script>

<style scoped>
div {
  text-align: center;
}
</style>
