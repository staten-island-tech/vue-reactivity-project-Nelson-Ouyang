<template>
  <div>
    <ShopCard v-for="item in shop" :key="item.name" :item="item" @buy="buyItem" />
  </div>
</template>

<script setup>
import ShopCard from '@/components/ShopCard.vue'

defineProps({
  shop: Array,
})
</script>

<style scoped>
/* @import 'tailwindcss';
@plugin "daisyui";

body {
  @apply min-h-screen flex flex-col;
} */
.container {
  display: flex;
  gap: 16px;
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
