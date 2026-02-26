<template>
  <div
    class="card"
    @click="
      () => {
        store.ifCantAfford(item)
        store.buyItem(item)
      }
    "
  >
    <img :src="item.image" />
    <h3>{{ item.name }}</h3>
    <p>Cost: {{ item.cost }}</p>
    <p>Max amount of buys: {{ item.limit }}</p>
    <p>u get: {{ item.apply }} {{ item.value }}</p>
  </div>
</template>

<script setup>
import { store } from '@/store/store.js'
const props = defineProps({
  item: Object,
})
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 500px;
  width: 350px;
  border: 3px solid black;
}

.image-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
img {
  max-width: 100%;
  height: auto;
  display: block;
}

</style>
