<template>
  <div class="container">
    <h1>Whalen Clicker</h1>

    <h2>{{ store.base }}</h2>

    <img @click="store.applyAll" src="/whalen.jpg" />

    <button @click="set0">Stop</button>

    <ShopCards :shop="shop" @buy="store.buyItem" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { store } from '@/store/store.js'
import ShopCards from './ShopCards.vue'

const shop = reactive([
  {
    name: 'Dwarf Sperm Whalen',
    apply: '+',
    value: 1,
    cost: 10,
    limit: 20,
    image: '/Dwarf Sperm Whale.webp',
  },
  {
    name: 'Narwhalen',
    apply: '*',
    value: 0.05,
    cost: 40,
    limit: 15,
    image: '/Narwhal.jpg',
  },
  {
    name: 'Killer Whalen',
    apply: '+',
    value: 10,
    cost: 500,
    limit: 20,
    image: '/Killer Whale.jpg',
  },
  {
    name: 'Gray Whalen',
    apply: '+',
    value: 60,
    cost: 3000,
    limit: 30,
    image: '/Gray Whale.png',
  },
  {
    name: 'Humpback Whalen',
    apply: '*',
    value: 1.5,
    cost: 950000,
    limit: 5,
    image: '/Humpback whale.webp',
  },
  {
    name: 'Sperm Whalen',
    apply: '^',
    value: 0.01,
    cost: 2500000,
    limit: 40,
    image: '/Sperm Whale.jpg',
  },
  {
    name: 'Blue Whalen',
    apply: '+',
    value: 10000,
    cost: 50000000,
    limit: 10,
    image: '/Blue Whale.jpg',
  },
  {
    name: 'The actual whalen',
    apply: '*',
    value: 100,
    cost: 1,
    limit: 1,
    image: '/the true whalen.webp',
  },
  {
    name: 'Erlenwein',
    apply: '*',
    value: 1.1,
    cost: 1000,
    limit: 1000000000000,
    image: '/Erlenwein.webp',
  },
])

function set0() {
  store.base = 0
}
</script>

<style scoped>
.container {
  text-align: center;
}
</style>
