<template>
    <a v-if="isExternal" target="_blank" :href="(to as string)" rel="noopener"> <slot/></a>
    <!-- <RouterLink v-bind="($props as RouterLinkProps)"> <slot/> </RouterLink> -->
    <RouterLink v-else v-bind="props"> <slot/> </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, type RouteLocationRaw} from 'vue-router';

// export interface Props {
//     to: RouteLocationRaw
// }

const props = withDefaults(defineProps<{
    to: RouteLocationRaw
}>(),{
    //@ts-ignore
    ...RouterLink.props 
})

const isExternal = computed(() => {
    return typeof props.to === 'string' && props.to.startsWith('http')
})

</script>
