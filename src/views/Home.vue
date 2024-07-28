<script setup>

import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import temp from '@/components/temp.vue';
import alterphotos from '@/components/alterphotos.vue'
import { defineComponent, h } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, LifebuoyIcon, NewspaperIcon, PhoneIcon, XMarkIcon } from '@heroicons/vue/24/outline'

</script>

<template>
    <temp/>
    <Banner/>
 <alterphotos/>
</template>

<style scoped>

</style>
