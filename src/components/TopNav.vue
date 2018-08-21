<template>
	<header class="top-nav" @click="infoToggle()">
		<div  class="top-nav__details" :class="{'top-nav__details--expanded': expanded}">
			Inspired by the cut-up technique of William S Burroughs,
			this app searches for your phrase in the
			<a href="http://open-platform.theguardian.com/" target="_blank">
				Guardian API
			</a>
			and slices up an article to make a poem with random
			snippets. Made by
			<a href="https://jarodhargreav.es" target="_blank">
				Jarod Hargreaves
			</a>. 
			<a href="https://github.com/jargharg/autopoetry/" target="_blank">
				See it on Github
			</a>
		</div>
		<div class="top-nav__name">AUTOPOETRY</div>
		<div class="top-nav__info-icon">
			<i class="material-icons">info_outline</i>
		</div>
	</header>
</template>

<script>
export default {
	name: 'TopNav',
	props: {},
	data: () => ({ expanded: false }),
	methods: {
		infoToggle() {
			this.expanded = !this.expanded;
		},
	},
};
</script>

<style lang="scss">
.top-nav {
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
	&:hover > .top-nav__info-icon {
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

		&.hidden + .top-nav__info-icon {
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
		max-height: 0;
		overflow: hidden;
		padding: 0 10px;
		position: absolute;
		transition: 0.2s all ease-out;
		visibility: hidden;
		width: 100%;
		z-index: 100;

		a {
			color: inherit;
			display: inline-block;
		}
		
		&--expanded {
			max-height: 400px;
			padding: 10px;
			visibility: visible;
		}
	}
}
</style>