<script setup>

import Footer from './components/Footer.vue';
import Navigation from './components/Navigation.vue';
import Home from './views/Home.vue';
import { RouterView } from 'vue-router';
</script>

<template>
<div id="app">
    <Navigation/>
        <router-view/>
    <Footer/> 
</div>

</template>

<style scoped>

</style>
