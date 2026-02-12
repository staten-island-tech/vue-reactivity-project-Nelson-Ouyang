<template>
  <div>
    <h2>{{ item.name }}</h2>
    <div class="image-container">
      <img :src="item.image" alt="" />
      <button @click="buyItem(item)">Buy</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
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
