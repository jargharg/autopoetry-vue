<template>
	<li tabIndex="0" class="poem-line">
		<div class="poem-line__refresh" @click="refreshLine">
			<i class="material-icons md-24">cached</i>
		</div>
		<span class="poem-line__text">{{ line }}</span>
	</li>
</template>

<script>
export default {
	name: 'PoemLine',
	props: {
		lineIndex: Number,
		index: Number,
	},
	methods: {
		refreshLine() {
			this.$store.dispatch('refreshLine', this.index);
		},
	},
	computed: {
		line() {
			return this.$store.state.lines[this.lineIndex];
		},
	},
};
</script>

<style scoped lang="scss">
.poem-line {
	line-height: 1.5;
	list-style: none;
	position: relative;
	transition: 0.2s all;
	outline: none;

	&__text {
		display: block;
		height: 100%;
		transition: 0.2s all;
		padding: 0 10px;
		margin: 0 10px;
	}

	&__refresh {
		color: $secondary-color;
		cursor: pointer;
		display: inline-block;
		height: 100%;
		left: -17px;
		opacity: 0;
		position: absolute;
		text-align: left;
		top: 0;
		transition: 0.2s all;
		user-select: none;
		visibility: hidden;
		width: 50px;

		@include atMedium {
			left: -40px;

			&::after {
				border-bottom: $refresh-line-width solid $secondary-color;
				content: ' ';
				position: absolute;
				right: 0;
				top: calc(50% - 1px);
				width: 21px;
			}
		}

		i.material-icons {
			font-size: 24px;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}

		&:hover ~ .poem-line__text {
			background: $secondary-color;
			color: $bg-color;
		}
	}

	&::before {
		transition: 0.2s all;
		border-bottom: $refresh-line-width solid $secondary-color;
		border-left: $refresh-line-width solid $secondary-color;
		border-top: $refresh-line-width solid $secondary-color;
		bottom: 0;
		content: '';
		left: 10px;
		opacity: 0;
		padding: 3px;
		position: absolute;
		top: 0;
	}
}
</style>
