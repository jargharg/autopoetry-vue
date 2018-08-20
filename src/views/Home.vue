<template>
    <div class="home">
        <TopNav />
        <InputForm />
    </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue';
import InputForm from '@/components/InputForm.vue';

export default {
    name: 'home',
    components: {
        TopNav,
        InputForm,
    },
};
</script>