<template>
  <div class="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24">
    <div v-for="(platform, index) in platformData" :key="index" class="relative">
      <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
        <!-- Content Block -->
        <div :class="index % 2 === 1 ? 'lg:col-start-2' : ''" class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-5 lg:px-0">
          <div>
            <!-- Icon for the section -->
            <div>
              <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-8 w-8 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                  </path>
                </svg>
              </span>
            </div>
            <!-- Section Title and Description -->
            <div class="mt-6">
              <h2 class="text-3xl font-bold tracking-tight text-white">
                {{ platform.title }}
              </h2>
              <p class="mt-4 text-lg text-gray-300">
                {{ platform.description }}
              </p>
              <div class="mt-6">
                <!-- Learn More Button -->
                <a class="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                  :href="platform.link">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Image for the section -->
        <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-span-1 lg:relative lg:h-full lg:overflow-hidden">
          <img loading="lazy" width="647" height="486"
            class="w-full h-auto rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 object-cover"
            style="color:transparent" :src="platform.image">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import data from '@/client/data.json'

const platformData = ref([])

onMounted(() => {
  // Check if data.Platforms is available
  if (data.Platforms) {
    platformData.value = data.Platforms
  } else {
    console.error('Platform data is not available in the JSON file')
  }
})
</script>

<style>
/* Add your styles here if needed */
</style>
