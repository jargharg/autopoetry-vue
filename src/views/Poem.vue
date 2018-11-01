<template>
	<div class="poem-container" :class="{'edit-mode': $store.state.editMode}">
		<PoemHeader :title="title" />
		<PoemControls />
		<PoemBody />
	</div>
</template>

<script>
import { mapState } from 'vuex';

import PoemHeader from '@/components/PoemHeader.vue';
import PoemBody from '@/components/PoemBody.vue';
import PoemControls from '@/components/PoemControls.vue';

export default {
	name: 'Poem',
	components: {
		PoemHeader,
		PoemBody,
		PoemControls,
	},
	computed: mapState(['title']),
};
</script>

<style lang="scss">
.poem-container {
	animation: fadeIn 0.1s ease-in-out forwards;
	opacity: 0;
	padding: 0 20px 80px;
	position: relative;
	width: 100%;

	&.edit-mode {
		.poem-body {
			&__refresh {
				cursor: pointer;
				opacity: 1;
				visibility: visible;
				z-index: 2;
			}

			&::before,
			&::after {
				opacity: 1;
			}
		}

		.poem-line {
			margin-bottom: 7px;
			user-select: none;

			&__text {
				min-height: 40px;
				padding: 2px 10px;
				@mixin atMedium {
					min-height: 20px;
				}
			}

			&__refresh {
				cursor: pointer;
				opacity: 1;
				visibility: visible;
				z-index: 2;
			}

			&::before,
			&::after {
				opacity: 1;
			}
		}
	}

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