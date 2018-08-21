<template>
	<div id="app">
<!-- 		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div> -->
		<router-view />
	</div>
</template>

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