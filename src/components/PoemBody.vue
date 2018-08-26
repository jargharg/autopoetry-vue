<template>
	<ul class="poem-body">
		<li class="loading-div" v-if="loading">
			<span>Loading</span>
			<span>.</span>
			<span>.</span>
			<span>.</span>
		</li>
		<PoemLine 
			v-if="!loading"
			v-for="(line, index) in chosenLines"
			:key="index"
			:content="line"
			:onClick="refreshLine(index)" />
		<!-- if loaded, show poem lines -->
	</ul>
</template>

<script>
import PoemLine from '@/components/PoemLine.vue';

export default {
	name: 'PoemBody',
	components: {
		PoemLine,
	},
	data: () => ({ loading: true, chosenLines: ['asd'] }),
	methods: {
		refreshLine(index) {
			console.log(index);
		},
	},
};
</script>

<style lang="scss">
.loading-div {
	height: 180px;
	line-height: 180px;
	list-style: none;
	text-align: center;
	font-size: 1.5em;

	span {
		animation: loadingFade 1s infinite ease-in-out both;
		&:first-child {
			animation: none;
		}
		&:nth-child(2) {
			opacity: 1;
			animation-delay: 0s;
		}
		&:nth-child(3) {
			opacity: 0.5;
			animation-delay: 0.2s;
		}
		&:nth-child(4) {
			opacity: 0;
			animation-delay: 0.4s;
		}
	}
}

.poem-body {
	font-weight: $font-weight;
	margin: 0;
	padding: 0;
	position: relative;
}

@keyframes loadingFade {
	0%,
	100% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
}
</style>
