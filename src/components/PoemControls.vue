<template>
	<div class="poem-controls">
		<span class="poem-controls__icon">
			<a :href='shareLink()' title="Share to WhatsApp">
				<i class="material-icons md-48">share</i>
			</a>
		</span>

		<span>
			<span class="poem-controls__icon" :class="undoClass" @click="editHistory('undo')" title="Undo action">
				<i class="material-icons md-48">undo</i>
			</span>
			<span class="poem-controls__icon" :class="newPoemClass" @click="newPoem" title="New poem">
				<i class="material-icons md-48">refresh</i>
			</span>
			<span class="poem-controls__icon" :class="redoClass" @click="editHistory('redo')" title="Redo action">
				<i class="material-icons md-48">redo</i>
			</span>
		</span>

		<span class="poem-controls__icon" @click="editPoem" title="Edit poem">
			<i class="material-icons md-48">
				{{ editModeIcon }}
			</i>
		</span>
	</div>
</template>

<script>
export default {
	name: 'Poem',
	components: {},
	computed: {
		editModeIcon() {
			return this.$store.state.editMode ? 'done' : 'mode_edit';
		},
		newPoemClass() {
			return this.$store.state.editMode ? 'poem-controls__icon--hidden' : '';
		},
		undoClass() {
			if (this.$store.state.editMode === false)
				return ' poem-controls__icon--hidden';
			return this.$store.state.history.prev.length > 0
				? ''
				: ' poem-controls__icon--hidden';
		},
		redoClass() {
			if (this.$store.state.editMode === false)
				return ' poem-controls__icon--hidden';
			return this.$store.state.history.next.length > 0
				? ''
				: ' poem-controls__icon--hidden';
		},
	},
	methods: {
		newPoem() {
			this.$store.dispatch('newPoem');
		},
		editPoem() {
			this.$store.commit('toggleEditState');
		},
		editHistory(direction) {
			this.$store.dispatch('editHistory', direction);
		},
		shareLink() {
			const whatsAppPre = 'whatsapp://send?text=';
			const whatsAppPost =
				'\nMake your own autopoem at jarodhargreav.es/autopoetry';

			let poemText = `${this.$store.state.title.toUpperCase()}\n\n`;

			this.$store.state.chosenLines.forEach((line) => {
				poemText += `${this.$store.state.lines[line]}\n`;
			});

			const whatsAppLink = whatsAppPre + encodeURI(poemText + whatsAppPost);

			return whatsAppLink;
		},
	},
};
</script>

<style lang="scss">
.poem-controls {
	background: $primary-color;
	bottom: 0;
	color: $bg-color;
	display: flex;
	justify-content: space-between;
	left: 0;
	padding: 10px 0;
	position: fixed;
	user-select: none;
	width: 100%;
	z-index: 3;

	@include atMedium {
		background: none;
		color: $primary-color;
		left: 0px;
		padding: 10px 20px;
		position: absolute;
		top: 100%;
		width: 100%;
	}

	a {
		color: inherit;
		display: inline-block;
		text-decoration: none;
	}

	&__icon {
		cursor: pointer;
		height: 100%;
		margin: 0 10px;
		transition: all 0.2s ease-out;

		@include atMedium {
			margin: 0;
			opacity: 0.4;

			&:hover {
				opacity: 1;
			}
		}

		&--hidden {
			opacity: 0;
			visibility: hidden;
		}

		&:hover .poem-controls__icon__caption {
			opacity: 1;
			width: auto;
		}
	}
}
</style>