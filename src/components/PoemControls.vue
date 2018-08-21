<template>
	<div class="poem-controls">
		<span class="poem-controls__icon">
			<a :href='shareLink()' title="Share to WhatsApp">
				<i class="material-icons md-48">share</i>
				<span class="poem-controls__icon__caption">
					Share to WhatsApp
				</span>
			</a>
		</span>
		<span>
			<span
				class="poem-controls__icon"
				:class="undoClass"
				@Click="editHistory('undo')"
				title="Undo action">
				<i class="material-icons md-48">undo</i>
			</span>
			<span
				class="poem-controls__icon"
				:class="newPoemClass"
				@click="newPoem()"
				title="New poem">
				<i class="material-icons md-48">refresh</i>
				<span class="poem-controls__icon__caption">
					New poem
				</span>
			</span>
			<span
				class="poem-controls__icon"
				:class="redoClass"
				@click="editHistory('redo')"
				title="Redo action">
				<i class="material-icons md-48">redo</i>
			</span>
		</span>
		<span
			class="poem-controls__icon"
			@click="editPoem()"
			title="Edit poem">
			<i class="material-icons md-48">
				{{editModeIcon}}
			</i>
		</span>
	</div>
</template>

<script>
export default {
	name: 'Poem',
	components: {},
	data: () => ({
		editModeIcon: 'mode_edit',
		newPoemClass: '',
		undoClass: ' poem-controls__icon--hidden',
		redoClass: ' poem-controls__icon--hidden',
	}),
	methods: {
		shareLink() {
			return 'https://www.google.com';
			const whatsAppPre = 'whatsapp://send?text=';
			const whatsAppPost =
				'\nMake your own autopoem at jarodhargreav.es/autopoetry';

			let poemText = `${title.toUpperCase()}\n\n`;

			chosenLines.forEach(line => {
				poemText += `${lines[line]}\n`;
			});

			const whatsAppLink =
				whatsAppPre + encodeURI(poemText + whatsAppPost);

			return whatsAppLink;
		},
	},
};

// from state:
// 		title: state.poem.title,
// 		history: state.poem.history,
// 		lines: state.poem.lines,
// 		chosenLines: state.poem.chosenLines,
// 		editMode: state.poem.editMode

// if (nextProps.editMode) {
// 	this.editModeIcon = 'done';
// 	this.newPoemClass = ' poem-controls__icon--hidden';
// 	nextProps.history.prev.length > 0
// 		? (this.undoClass = '')
// 		: (this.undoClass = ' poem-controls__icon--hidden');
// 	nextProps.history.next.length > 0
// 		? (this.redoClass = '')
// 		: (this.redoClass = ' poem-controls__icon--hidden');
// } else {
// 	this.editModeIcon = 'mode_edit';
// 	this.newPoemClass = '';
// 	this.undoClass = ' poem-controls__icon--hidden';
// 	this.redoClass = ' poem-controls__icon--hidden';
// }
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

		&__caption {
			font-size: 0.75em;
			opacity: 0;
			overflow: hidden;
			padding-left: 7px;
			position: absolute;
			transform: translateY(50%);
			transition: opacity 0.2s ease-out;
			top: 50%;
			width: 0;
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