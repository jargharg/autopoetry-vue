<template>    
	<div className="poem-header">
		<h1 className="poem-header__title">{{title}}</h1>
	</div>
</template>

<script>
export default {
	name: 'PoemHeader',
	props: { title: String },
};
</script>

<style lang="scss">
.poem-header {
	color: $primary-color;
	padding: 0 20px 10px;
	position: relative;

	&__title {
		display: inline-block;
		font-size: 1.5rem;
		font-weight: 700;
		letter-spacing: 2px;
		margin: 0;
		text-transform: uppercase;
		transition: all 0.2s ease-out;
		@mixin atMedium {
			font-size: 2em;
		}
	}
}
</style>
