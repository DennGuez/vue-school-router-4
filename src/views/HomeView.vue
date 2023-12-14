<template>
  <div class="home">
    <h1>All Destinations</h1>

    <div class="destinations">
      <RouterLink       
        v-for="destination in detinations" 
        :key="destination.id" 
        :to="{name: 'destination.show', params:{ id: destination.id, slug: destination.slug }}" 
      >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${ destination.image }`" :alt="destination.name">
      </RouterLink>
    </div>


  </div>
</template>

<script lang="ts" setup>
import sourceData from '../data.json'

const detinations = sourceData.destinations


</script>
