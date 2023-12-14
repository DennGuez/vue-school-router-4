<template>
    <div>
        <h1>Protected</h1>
        <h2>Greetings, {{ username }}</h2>
        <button @click="logout">Logout</button>
        <RouterLink :to="{name: 'invoices'}">
            <button>Invoices</button>
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const username = ref('')

/* This is where we authenticate the user against our API */
const logout = () => {
    window.user = null
    router.push({name: 'home'})
}
</script>
