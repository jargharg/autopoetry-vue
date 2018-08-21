<template>
	<div class="container">
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

<style lang="scss">
.container {
	border-left: 1px solid $grid-color;
	border-right: 1px solid $grid-color;
	height: 100%;
	margin: 0 auto;
	padding: 70px 0 0;
	transition: opacity 0.5s;
	width: 100%;

	@include atMedium {
		align-items: center;
		display: flex;
		justify-content: center;
		max-width: 500px;
		padding: 0 0 100px;
	}
}
</style>
