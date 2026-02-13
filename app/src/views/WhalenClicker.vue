<template>
  <div class="container">
    <h1>whalen clicker</h1>
    <h2>{{ base }}</h2>

    <img @click="applyAll" src="/whalen.jpg" />
    <button @click="set0">Stop</button>

    <ShopCards :shop="shop" @buy="buyItem" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ShopCards from './ShopCards.vue'

const shop = ref([
  {
    name: 'Dwarf Sperm Whalen',
    apply: '+',
    value: 1,
    cost: 10,
    limit: 20,
    image: '/Dwarf Sperm Whale.webp',
  },
  { name: 'Narwhalen', apply: '*', value: 0.05, cost: 30, limit: 15, image: '/Narwhal.jpg' },
  {
    name: 'Killer Whalen',
    apply: '+',
    value: 10,
    cost: 250,
    limit: 20,
    image: '/Killer Whale.jpg',
  },
  { name: 'Gray Whalen', apply: '+', value: 50, cost: 2000, limit: 30, image: '/Gray Whale.png' },
  {
    name: 'Humpback Whalen',
    apply: '*',
    value: 1.5,
    cost: 100000,
    limit: 5,
    image: '/Humpback whale.webp',
  },
  {
    name: 'Sperm Whalen',
    apply: '^',
    value: 0.01,
    cost: 10000000,
    limit: 40,
    image: '/Sperm Whale.jpg',
  },
  {
    name: 'Blue Whalen',
    apply: '+',
    value: 10000,
    cost: 100000000,
    limit: 10,
    image: '/Blue Whale.jpg',
  },
])

const base = ref(1)
const additionbase = ref(0)
const multiplierbase = ref(0)
const exponentbase = ref(0)
const boughtItems = ref([])

function ifCantAfford(item) {
  if (base.value < item.cost) {
    alert('Cannot afford this item!')
    return true
  }
  return false
}
function buyItem(item) {
  const count = boughtItems.value.filter((i) => i.name === item.name).length
  if (count >= item.limit) return alert('no more haahahhgdhsgfhdhgdsf')

  if (item.apply === '+') {
    if (ifCantAfford(item)) return
    base.value -= item.cost
    additionbase.value += item.value
  } else if (item.apply === '*') {
    if (ifCantAfford(item)) return
    base.value -= item.cost
    multiplierbase.value += item.value
  } else if (item.apply === '^') {
    if (ifCantAfford(item)) return
    base.value -= item.cost
    exponentbase.value += item.value
  }

  boughtItems.value.push(item)
}

function applyAll() {
  base.value += ((1 + additionbase.value) * (1 + multiplierbase.value)) ** (1 + exponentbase.value)
}

function set0() {
  base.value = 0
}
</script>

<style scoped>
div {
  text-align: center;
}
</style>
