<template>
  <!-- Start of template-->
  <!-- Carousel container with Bootstrap attributes -->
  <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
    
    <!-- Carousel indicators for navigation -->
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    
    <!-- Carousel items -->
    <div class="carousel-inner">
      
      <!-- Slides -->
      <div v-for="(item, index) in items" :key="index" :class="['carousel-item', 'c-item', { 'active': index === 0 }]">
        <img :src="item.src" class="d-block w-100 c-img" :alt="'Slide ' + (index + 1)">
        <div class="carousel-caption top-20 mt-4">
          <h1 class="display-1 fw-bolder text-capitalize">{{ item?.text }}</h1>
        </div>
      </div>
    </div>
    
    <!-- Previous button -->
    <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    
    <!-- Next button -->
    <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!-- End of template-->
</template>

<script setup>

import { ref, onMounted } from 'vue'
import data from '@/client/Client_1/data.json'

const items = ref([])

onMounted(() => {
items.value = data.items
})


</script>

<style>
/* Start of Script */
/* Custom styles for carousel items */
.c-item {
  height: 480px;
}

/* Custom styles for carousel images */
.c-img {
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
}
/* End of Script */
</style>
