<script setup>
// Start of Script

// Component Call
import Slider from '@/components/Slider.vue';
import Platforms from '@/components/Platforms.vue'

// End of Script
</script>

<template>
<!-- Start of template--> 
    
 <!-- Injecting  Header Component -->
    <Slider/>
  
 <!--   Banner  -->
     <div class="flex items-center justify-center h-20 bg-gray-300">
         <p class="text-sm leading-6 text-gray-900">
             <strong class="font-semibold text-2xl">Core Services At &copy; Vitana Inc.</strong>
          </p>
      </div>


 <!-- Injecting  Platforms Component -->
    <Platforms/>

<!-- End of template-->
</template>
