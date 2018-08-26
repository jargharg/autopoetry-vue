<template>
	<li tabIndex="0" className="poem-line">
		<div class="poem-line__refresh" @click={onClick}>
			<i class="material-icons md-24">cached</i>
		</div>
		<span class="poem-line__text">{content}</span>
	</li>
</template>

<script>
export default {
	name: 'PoemLine',
	props: { content: String, onClick: Function },
};
</script>

<style lang="scss">
.poem-line {
	line-height: 1.5;
	list-style: none;
	position: relative;
	transition: 0.2s all;
	outline: none;
	&__text {
		display: block;
		min-height: 10px;
		height: 100%;
		transition: 0.2s all;
		padding: 0 10px;
		margin: 0 10px;
	}
}
</style>
