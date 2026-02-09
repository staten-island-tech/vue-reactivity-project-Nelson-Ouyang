<template>
  <div>
    <AnimalCard v-for="item in shop" :key="animal.name" :animal="animal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AnimalCard from '@/components/AnimalCard.vue'
//for key, its asking waht makes each object unique, and its animal.name
const shop = ref([{ name: 'BabyWhalen', apply: '+', value: 1, cost: 10 }])
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
