
<template>
<!-- Start of template--> 

  <!-- Injecting  Header Component -->
  <Header/>

  
   <!-- Section containing Frequently Asked Questions (FAQ) -->
<section class="mx-auto max-w-md divide-y-2 divide-blue-gray-200 py-20 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:py-25 lg:px-8" aria-labelledby="faq-heading">
  
  <!-- Heading for the FAQ section -->
  <h2 class="text-3xl font-bold tracking-tight text-blue-gray-900" id="faq-heading">Frequently asked questions</h2>
  
  <!-- Container for the FAQ items -->
  <div class="mt-6 pt-10">
    
    <!-- Description list to hold FAQs in a responsive grid layout -->
    <dl class="space-y-10 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 md:space-y-0">
      
      <!-- Loop through the FAQs and display each one -->
      <div v-for="faq in faqs" :key="faq.id">
        
        <!-- FAQ question -->
        <dt class="text-lg font-medium text-blue-gray-900">{{ faq.question }}</dt>
        
        <!-- FAQ answer -->
        <dd class="mt-2 text-base text-blue-gray-500">{{ faq.answer }}</dd>
      
      </div>
    </dl>
  </div>
</section>

     
   <!-- The gray Line before the footer  -->
   <div class="flex items-center justify-center h-20 bg-gray-300"></div>
        
   <!-- End of template-->
  </template>
  
  <script setup>
// Start of Script

// Components Call
import Header from '@/components/Header.vue';

import { defineComponent, h } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, LifebuoyIcon, NewspaperIcon, PhoneIcon, XMarkIcon } from '@heroicons/vue/24/outline'

// Creating Dumby data, can also use json file on a database

// Data used in QnA section (javascript object)
import { ref, onMounted } from 'vue'
import data from '@/client/data.json'

const faqs = ref([])

onMounted(() => {
  // Check if data.faqs is available
  if (data.faqs) {
    faqs.value = data.faqs
  } else {
    console.error('Platform data is not available in the JSON file')
  }
})
  

// End of Script
</script>