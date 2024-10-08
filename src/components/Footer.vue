<!-- Template for the footer -->
<template>
  <footer class="bg-blue" aria-labelledby="footer-heading">
    <!-- Hidden heading for accessibility -->
    <h2 id="footer-heading" class="sr-only">Footer</h2>

    <!-- Main container with padding and max-width constraints -->
    <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      
      <!-- Grid layout for the footer content -->
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        
        <!-- First column with logo, description, and social links -->
        <div class="space-y-8 xl:col-span-1">
          
          <!-- Logo -->
          <a href="https://imgbb.com/">
            <img class="h-12" src="https://i.ibb.co/H7jDM6F/download.png" alt="download" border="0">
          </a>
          
          <!-- Description text -->
          <p class="text-base text-gray-500">
            Making the world a better place through constructing elegant hierarchies.
          </p>
          
          <!-- Social media links -->
          <div class="flex space-x-6">
            <a target="_blank" v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>

        <!-- Second and third columns with navigation links -->
        <div class="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          
          <!-- Services and Support sections -->
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-base font-medium text-gray-900">Services</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.solutions" :key="item.name">
                  <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-base font-medium text-gray-900">Support</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.support" :key="item.name">
                  <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>

          <!-- Domains and Company sections -->
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-base font-medium text-gray-900">Domains</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.domains" :key="item.name">
                  <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-base font-medium text-gray-900">Company</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.company" :key="item.name">
                  <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer bottom section with border and text -->
      <div class="mt-12 border-t border-gray-700 pt-8">
        <p class="text-base text-black-400 xl:text-center font-bold">
          2024 &copy; Vitana Inc.- All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<!-- Script setup for Vue -->
<script setup>
import { defineComponent, h } from 'vue'

const navigation = {
  solutions: [
    { name: 'Data Engineering', href: '#' },
    { name: 'Analytics & BI', href: '#' },
    { name: 'IT & Cloud Services', href: '#' },
    { name: 'Software Engineering', href: '#' },
    { name: 'Staffing Solutions', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
  ],
  company: [
    { name: 'Vitana Inc.', href: '#' },
    { name: '2704 Piersland Drive Matthews, NC- 28104', href: '#' },
    { name: 'Support: support@vitanagroup.com', href: '#' },
    { name: 'Enquiries: contactus@vitanagroup.com', href: '#' },
  ],
  domains: [
    { name: 'Financial Services', href: '#' },
    { name: 'Oil & Gas', href: '#' },
    { name: 'Technology', href: '#' },
    { name: 'Consumer Packaged Goods', href: '#' },
    { name: 'Manufacturing', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/vitana-group/',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.2c-1 0-1.7-.7-1.7-1.7s.8-1.7 1.7-1.7 1.7.8 1.7 1.7-.8 1.7-1.7 1.7zm13.5 12.2h-3v-5.6c0-1.3-.4-2.2-1.5-2.2-.8 0-1.3.5-1.5 1-.1.2-.1.5-.1.8v6h-3v-11h3v1.5c.4-.7 1.1-1.5 2.6-1.5 1.9 0 3.3 1.2 3.3 3.8v7.2z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
            }),
          ]),
      }),
    },
  ],
}
</script>
