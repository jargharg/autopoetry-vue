<template>
	<header class="info-bar" @click="expanded = !expanded">
		<div
			class="info-bar__details"
			:class="{ 'info-bar__details--expanded': expanded }"
		>
			Inspired by the cut-up technique of William S Burroughs, this app searches for
			your phrase in the
			<a href="http://open-platform.theguardian.com/" target="_blank">
				Guardian API
			</a>
			and slices up an article to make a poem with random snippets. Made by
			<a href="https://jarodhargreav.es" target="_blank"> Jarod Hargreaves </a>.
			<a href="https://github.com/jargharg/autopoetry/" target="_blank">
				See it on Github
			</a>
		</div>
		<div class="info-bar__name">AUTOPOETRY</div>
		<div class="info-bar__info-icon">
			<i class="material-icons">info_outline</i>
		</div>
	</header>
</template>

<script>
export default {
	data: () => ({ expanded: false }),
};
</script>

<style lang="scss">
.info-bar {
	border-bottom: 1px solid $grid-color;
	color: $primary-color;
	color: $bg-color;
	cursor: pointer;
	left: 0;
	opacity: 1;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 10;
	&:hover > .info-bar__info-icon {
		opacity: 1;
	}

	&__name {
		background: $primary-color;
		color: $bg-color;
		height: 100%;
		letter-spacing: 2px;
		padding: 8px;
		transition: 0.2s;

		@include atMedium {
			background: none;
			color: $primary-color;
		}

		&.hidden + .info-bar__info-icon {
			color: $primary-color;
		}
	}

	&__info-icon {
		color: $bg-color;
		opacity: 0.4;
		position: absolute;
		right: 10px;
		top: 5px;
		transition: all 0.4s;

		@include atMedium {
			color: $primary-color;
		}
	}

	&__details {
		background: $primary-color;
		color: $bg-color;
		font-size: 0.7em;
		height: 0;
		opacity: 0;
		overflow: hidden;
		padding: 10px;
		position: absolute;
		transform: translateY(-100%);
		transition: 0.2s transform, 0.2s opacity;
		width: 100%;
		z-index: 10;

		a {
			color: inherit;
			display: inline-block;
		}

		&--expanded {
			height: auto;
			opacity: 1;
			transform: translateY(0);
		}
	}
}
</style>
