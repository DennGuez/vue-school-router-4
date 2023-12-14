<template>
    <div class="card">
        <img :src="`/images/${props.experience.image}`" :alt="props.experience.name">        
        <span class="card__text">
            {{  props.experience.name }}
        </span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    experience: any
}>()
</script>