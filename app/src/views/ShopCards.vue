<template>
  <div>
    <AnimalCard v-for="item in shop" :key="animal.name" :animal="animal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ShopCard from '@/components/ShopCard.vue'
//for key, its asking waht makes each object unique, and its animal.name
const shop = ref([
  //make it from small whale species to big whale species
  { name: 'Dwarf Sperm Whalen', apply: '+', value: 1, cost: 10, limit: 20 },
  { name: 'Narwhalen', apply: '*', value: 0.05, cost: 30, limit: 15 },
  { name: 'Killer Whalen', apply: '+', value: 10, cost: 250, limit: 20 },
  { name: 'Gray Whalen', apply: '+', value: 50, cost: 2000, limit: 30 },
  { name: 'Humpback Whalen', apply: 'x', value: 1.5, cost: 10000, limit: 5 },
  { name: 'Sperm Whalen', apply: '^', value: 0.01, cost: 1000000, limit: 40 },
  { name: 'Blue Whalen', apply: '+', value: 10000, cost: 10000000, limit: 10 },
])
const exponentbase = 1
const multiplierbase = 1
//each file break into smaller components --> resubable, ex: card component, use in diff apps amongst team , a good function = SINGLE output, single PURPOSE
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
