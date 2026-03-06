<template>
  <div class="baby-whalen">
    <h2>Baby Whalen: {{ store.babyWhalen }}</h2>
    <h2>Baby Whalen Multiplier: {{ store.babyWhalenMulti }}</h2>
    <button @click="handleClick">Click Baby Whalen</button>
    <div class="whale-container">
      <img v-for="whale in whales" :key="whale.id" :src="whale.src" class="baby-whalen-image" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { store } from '@/store/store.js'

const whales = ref([])

function handleClick(item) {
  store.babyWhalenClicker(item)
  store.babyWhalenMultiplier()
  whales.value.push({
    id: Date.now(), //specific dom node correepsonds to id (u dibnt have to use id, but wtv)
    src: '/Baby-Whalen.webp',
  })
}
</script>

<style scoped>
.baby-whalen {
  text-align: center;
  margin: 20px 0;
}
</style>
