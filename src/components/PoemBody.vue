<template>
	<div class="poem-body">
		<div class="poem-body__refresh" @click="refreshPoem">
			<i class="material-icons md-24">cached</i>
		</div>
		<transition-group name="poem-line" tag="ul" class="poem-body__list">
			<PoemLine
				v-for="(lineIndex, index) in chosenLines"
				:key="`${index}-${lineIndex}`"
				:index="index"
				:lineIndex="lineIndex"
			/>
		</transition-group>
	</div>
</template>

<script>
import { mapState } from 'vuex';

import PoemLine from '@/components/PoemLine.vue';

export default {
	name: 'PoemBody',
	components: { PoemLine },
	computed: mapState(['chosenLines']),
	methods: {
		refreshPoem() {
			this.$store.dispatch('refreshPoem');
		},
	},
};
</script>

<style lang="scss">
.poem-body {
	font-weight: $font-weight;

	&__list {
		padding: 0;
		margin: 0;
	}

	&__refresh {
		color: $secondary-color;
		cursor: pointer;
		display: inline-block;
		height: 50px;
		opacity: 0;
		position: absolute;
		right: -17px;
		text-align: right;
		top: 50%;
		transform: translateY(-50%);
		transition: 0.2s all;
		user-select: none;
		visibility: hidden;
		width: 50px;

		&:hover ~ .poem-line > .poem-line__text {
			background: $secondary-color;
			color: $bg-color;
		}

		@include atMedium {
			right: -40px;

			&::after {
				border-bottom: $refresh-line-width solid $secondary-color;
				content: ' ';
				left: 0;
				position: absolute;
				top: calc(50% - 1px);
				width: 21px;
			}
		}

		i.material-icons {
			font-size: 24px;
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	&::before {
		right: 10px;
		border-bottom: $refresh-line-width solid $secondary-color;
		border-right: $refresh-line-width solid $secondary-color;
		border-top: $refresh-line-width solid $secondary-color;
		bottom: 0;
		content: ' ';
		opacity: 0;
		padding: 3px;
		position: absolute;
		top: 0;
		transition: 0.2s all;
	}
}

.poem-line-enter-active,
.poem-line-leave-active {
	transition: opacity 0.3s, transform 0.3s;
}
.poem-line-leave-active {
	display: none;
}

.poem-line-enter,
.poem-line-leave-to {
	opacity: 0;
	transform: translateY(30px);
}
</style>
