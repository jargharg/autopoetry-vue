<template>
	<ul class="poem-body">
		<PoemLine
			v-for="(lineIndex, index) in chosenLines"
			:key="index"
			:index="index"
			:lineIndex="lineIndex" />
	</ul>
</template>

<script>
import { mapState } from 'vuex';

import PoemLine from '@/components/PoemLine.vue';

export default {
	name: 'PoemBody',
	components: { PoemLine },
	computed: mapState(['chosenLines']),
};
</script>

<style scoped lang="scss">
.poem-body {
	font-weight: $font-weight;
	padding: 0;
	position: relative;
}
</style>
