<template>
    <div class="login">
        <form class="form" @submit.prevent="login">
            <h1>Login</h1>
            <label for="username">Username</label>
            <input v-model="username" name="username" type="text" class="input">
            <label for="password">Password</label>
            <input v-model="password" name="password" type="password" class="input">
            <button class="btn">Login</button>
        </form> 
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute, type RouteLocationRaw } from 'vue-router'

const router = useRouter()
const route = useRoute()

const username = ref('')
const password = ref('')

const login = () => {
    window.user = username.value
    /* this saves the url that the user wants to enter before registering successfully  */
    const redirectPath = route.query.redirect || '/protected' as RouteLocationRaw | any
    // router.push({name: 'protected'})
    router.push(redirectPath)
}

</script>

<style scoped>

</style>