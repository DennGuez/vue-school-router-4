<template>
  <div id="nav">
    <!-- <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/brazil">Brazil</RouterLink>
    <RouterLink to="/hawaii">Hawaii</RouterLink>
    <RouterLink to="/jamaica">Jamaica</RouterLink>
    <RouterLink to="/panama">Panama</RouterLink>
    <RouterLink to="/about">About</RouterLink> -->

    <AppLink id="logo" to="/">Vue School Travel App</AppLink>

    <AppLink       
        v-for="destination in detinations" 
        :key="destination.id" 
        :to="{name: 'destination.show', params:{ id: destination.id, slug: destination.slug }}" 
      >
      {{ destination.name }}
    </AppLink>
    <AppLink :to="{name: 'protected'}">Dashboard</AppLink>
    <AppLink to="http://vueschool.io">Vue School</AppLink>
  </div>
</template>

<script setup lang="ts">
import sourceData from '../data.json'

const detinations = sourceData.destinations

</script>

<style scoped>
/* #nav .vue-school-active-link {
    color: red;
    border-bottom: 2px solid red;
} */
</style>