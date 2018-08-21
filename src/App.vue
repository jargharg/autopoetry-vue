<template>
	<div id="app">
		<TopNav />
		<router-view />
	</div>
</template>

<script>
import TopNav from '@/components/TopNav.vue';
	
export default {
	name: 'App',
	components: {
		TopNav,
	},
};
</script>

<style lang="scss">
html,
body,
#app {
	font-family: $font-stack;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: 100%;
	padding: 0;
	margin: 0;
	font-family: $font-stack;
	color: $primary-color;
	font-size: 1rem;
	background-color: $bg-color;

	@include atMedium {
		overflow: -webkit-paged-y;
	}
}

* {
	box-sizing: border-box;
}
</style>