<template>
  <ul class="shop-list">
    <li v-for="item in shop" :key="item.name">
      <ShopCard :item="item" />
    </li>
  </ul>
</template>

<script setup>
import ShopCard from '@/components/ShopCard.vue'

defineProps({
  shop: Array,
})
</script>

<style scoped>
.container {
  display: flex;
  gap: 16px;
  padding: 16px;
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}
.shop-list {
  display: flex;
  width: 80vw;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.card {
  border: 1px solid blue;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  width: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
