<template>
  <div>
    <ShopCard v-for="item in shop" :key="item.name" :item="item" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ShopCard from '@/components/ShopCard.vue'

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
    cost: 10000,
    limit: 5,
    image: '/Humpback Whale.webp',
  },
  {
    name: 'Sperm Whalen',
    apply: '^',
    value: 0.01,
    cost: 1000000,
    limit: 40,
    image: '/Sperm Whale.jpg',
  },
  {
    name: 'Blue Whalen',
    apply: '+',
    value: 10000,
    cost: 10000000,
    limit: 10,
    image: '/Blue Whale.jpg',
  },
])

const base = ref(1)
const additionbase = ref(0)
const multiplierbase = ref(0)
const exponentbase = ref(0)
const boughtItems = ref([])

function buyItem(item) {
  const count = boughtItems.value.filter((i) => i.name === item.name).length
  if (count >= item.limit) {
    alert('no more haahahhgdhsgfhdhgdsf')
    return
  }

  if (item.apply === '+') {
    additionbase.value += item.value
  } else if (item.apply === '*') {
    multiplierbase.value += item.value
  } else if (item.apply === '^') {
    exponentbase.value += item.value
  }

  boughtItems.value.push(item)
}

function applyAll() {
  base.value = ((1 + additionbase.value) * (1 + multiplierbase.value)) ** (1 + exponentbase.value)
}
</script>

<style scoped>
div {
  padding: 16px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
.container {
  display: flex;
  width: 80vw;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
