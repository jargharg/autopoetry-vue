<template>
	<form class="input-form" @submit.prevent="submitPoem()">
		<input
			type="text"
			placeholder="Enter a phrase"
			autoComplete="off"
			autoFocus
			v-model="input">
		<input
			type="submit"
			:value="submitText"
			:class="{ 'hidden': !input && !loading }">
	</form>
</template>

<script>
export default {
	name: 'InputForm',
	props: {},
	data() {
		return {
			input: '',
		};
	},
	methods: {
		submitPoem() {
			if (this.input) {
				this.$store.dispatch('poemSearch', this.input);
			}
		},
	},
	computed: {
		loading() {
			return this.$store.state.loading;
		},
		submitText() {
			return this.loading ? 'Loading...' : 'Make a new poem';
		},
	},
};
</script>

<style scoped lang="scss">
.input-form {
	// animation: fadeIn 0.3s ease-in-out forwards;
	opacity: 1;
	padding: 150px 50px;
	position: relative;
	transition: 0.1s all;
	width: 100%;

	@include atMedium {
		padding: 0;
		width: 60%;

		&::before,
		&::after {
			content: '';
			border-bottom: 1px solid $grid-color;
			width: 500%;
			position: absolute;
			left: -200%;
		}

		&::before {
			top: -20px;
		}

		&::after {
			bottom: -20px;
		}
	}

	input {
		background: transparent;
		border: 0;
		color: $primary-color;
		float: left;
		font-family: $font-stack;
		font-size: 1rem;
		font-weight: $font-weight;
		letter-spacing: 0.2px;
		line-height: 1;
		outline: 0;
		padding: 10px;
		transition: 0.1s all;
		width: 100%;

		&[type='text'] {
			border-bottom: 1px solid $primary-color;
		}

		&[type='submit'] {
			background: $primary-color;
			border-radius: 0;
			color: $bg-color;
			cursor: pointer;
			height: 40px;

			&.hidden {
				padding: 0;
				height: 0;
			}
		}
	}
}
</style>