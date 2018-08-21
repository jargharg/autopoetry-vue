<template>
	<div class="poem-container">
		<h1>This is a poem</h1>
		<PoemControls />
	</div>
</template>

<script>
import PoemControls from '@/components/PoemControls.vue';

export default {
	name: 'Poem',
	components: {
		PoemControls
	},
};
</script>

<style lang="scss">
.poem-container {
	// animation: fadeIn 0.1s ease-in-out forwards;
	background-color: $bg-color;
	padding: 0 20px 80px;
	position: relative;
	// opacity: 0;
	width: 100%;

	@include atMedium {
		padding: 20px 0;
		&::before,
		&::after {
			border-bottom: 1px solid $grid-color;
			content: ' ';
			height: 1px;
			left: -200%;
			position: absolute;
			width: 500%;
		}

		&::before {
			top: 0;
		}

		&::after {
			bottom: 0;
		}
	}
}
</style>