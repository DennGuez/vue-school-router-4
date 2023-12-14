import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AppLink from './components/AppLink.vue'

import './assets/main.css'

const app = createApp(App)

/* This allows call de componet everywhere app with importing there */
app.component('AppLink', AppLink)

app.use(router)

app.mount('#app')
