<template>
  <TheNavigation />
  <div class="container">
    <RouterView v-slot="{Component}">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </RouterView>
  </div>
</template>

<script lang="ts" setup>
import TheNavigation from './components/TheNavigation.vue';
</script>

<style lang="css">
/* .slide-enter-active, 
.slide-leave-active {
  transition: opacity 1s, transform;
}

.slide-enter-from,
.slide-leave-to{
  opacity:0;
  transform: translateX(-30%);
} */

/* .moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

.moveUp-leave-active {
  animation: moveUp 0.3s ease-in;
}
@keyframes moveUp {
  0% { transform: translateY(0); }
  100% { transform: translateY(-400px); }
} */

.fade-enter-active, 
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to{
  opacity:0;
}

</style>
