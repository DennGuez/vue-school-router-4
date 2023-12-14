<template>
    <div>
        <section class="destination">
            <!-- <h2>Hello Destination {{ $route.params.id }}</h2> -->
            <h1>{{ destination?.name }}</h1>
            <GoBack />
            <div class="destination-details">
                <img :src="`/images/${destination?.image}`" :alt="destination?.name">
                <p>{{ destination?.description }}</p>
            </div>
        </section>
        <section class="experiences">
            <h2>Top Experiences in {{ destination?.name }}</h2>
            <div class="cards">
                <RouterLink
                    v-for="experience in destination?.experiences"
                    :key="experience.slug"
                    :to="{name: 'experience.show', params:{experienceSlug: experience.slug}}"
                >
                    <ExperienceCard
                        :experience="experience" 
                    />
                </RouterLink>
            </div>
            <RouterView />
        </section>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ExperienceCard from '../components/ExperienceCard.vue'
import GoBack from '../components/GoBack.vue'
import sourceData from '../data.json'

const props = defineProps<{
    id: number
}>(

)

// const destinationId = computed(() => +route.params.id )
const destination = computed(() => {
    return sourceData.destinations.find(destination => destination.id === props.id)
})

</script>

<style scoped>

</style>