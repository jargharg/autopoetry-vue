<template>
    <div class="home">
        <TopNav />
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import TopNav from '@/components/TopNav.vue';

export default {
    name: 'home',
    components: {
        HelloWorld,
        TopNav,
    },
};
</script>