<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Header/>
    
    
    
    <section class="mx-auto max-w-md divide-y-2 divide-blue-gray-200 py-20 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:py-25 lg:px-8" aria-labelledby="faq-heading">
          <h2 class="text-3xl font-bold tracking-tight text-blue-gray-900" id="faq-heading">Frequently asked questions</h2>
          <div class="mt-6 pt-10">
            <dl class="space-y-10 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 md:space-y-0">
              <div v-for="faq in faqs" :key="faq.id">
                <dt class="text-lg font-medium text-blue-gray-900">{{ faq.question }}</dt>
                <dd class="mt-2 text-base text-blue-gray-500">{{ faq.answer }}</dd>
              </div>
            </dl>
          </div>
        </section>
     
        
        <div class="flex items-center justify-center h-20 bg-gray-300">
      <p class="text-sm leading-6 text-gray-900">
      
        </p>
</div>

  </template>
  
  <script setup>
 import cards from '@/components/cards.vue'
import Header from '@/components/Header.vue';
  const metrics = [
    { id: 1, stat: '8K+', emphasis: 'Companies', rest: 'use laoreet amet lacus nibh integer quis.' },
    { id: 2, stat: '25K+', emphasis: 'Countries around the globe', rest: 'lacus nibh integer quis.' },
    { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
    { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
  ]
  const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: 'Why do you never see elephants hiding in trees?',
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 4,
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      'Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 5,
    question: 'What do you call someone with no body and no nose?',
    answer: 'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 6,
    question: 'Why did the invisible man turn down the job offer?',
    answer:
      "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]

  </script>