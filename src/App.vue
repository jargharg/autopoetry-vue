<template>
	<div id="app">
		<InfoBar />

		<div class="container">
			<router-view />
		</div>
	</div>
</template>

<script>
import InfoBar from '@/components/InfoBar.vue';

export default {
	name: 'App',
	components: {
		InfoBar,
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
