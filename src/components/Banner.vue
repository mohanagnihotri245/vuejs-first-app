<template>
  <div  v-for="(item, index) in banner" :key="index" class="flex items-center justify-center h-20 bg-gray-300">
    <p class="text-sm leading-6 text-gray-900">
      <strong class="font-semibold text-2xl">{{ item?.message }}</strong>
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import data from '@/client/Client_1/data.json'

const banner = ref([])

// Fetch data when component is mounted
onMounted(() => {
  if (data.Banner) {
    banner.value = data.Banner
  } else {
    console.error('Banner data is not available in the JSON file')
  }
})
</script>

<style>
/* Add your styles here if needed */
</style>
