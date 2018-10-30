import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';
import HTTP from './services/HTTP';
import { parseResponse, chooseLines, randomLineIndex } from './services/poemMethods';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		loading: false,
		chosenLines: [],
		editMode: false,
		history: { prev: [], next: [] },
		lines: [],
		title: '',
	},
	mutations: {
		resetState(state) {
			state.loading = false;
			state.chosenLines = [];
			state.editMode = false;
			state.history = { prev: [], next: [] };
			state.lines = [];
			state.title = '';
		},
		setChosenLines(state, chosenLines) {
			state.chosenLines = chosenLines;
		},
		setAppState(state, newState) {
			state.appState = newState;
		},
		setLoading(state, newLoadingState) {
			state.loading = newLoadingState;
		},
		toggleEditState(state) {
			state.editMode = !state.editMode;
		},
	},
	actions: {
		newPoem({ commit }) {
			commit('resetState');
			router.push('/');
		},
		refreshLine({ commit, state }, lineNumber) {
			const newLineIndex = randomLineIndex(state.lines);
			let newChosenLines = state.chosenLines;
			newChosenLines.splice(lineNumber, 1, newLineIndex);

			commit('setChosenLines', newChosenLines);
		},
		poemSearch({ commit, state }, searchTerm) {
			commit('setLoading', true);

			const safeSearch = searchTerm.replace(/\?|!/g, '');

			const setPoemState = (apiResponse) => {
				const parsedData = parseResponse(apiResponse);
				state.title = searchTerm;
				state.lines = parsedData;
				state.chosenLines = chooseLines(parsedData);
				commit('setLoading', false);
				router.push('/poem');
			};

			// TODO refactor - could use a recursive function
			let apiTerm = safeSearch.replace(/ /g, ' AND ');
			HTTP.search(apiTerm).then(({ response }) => {
				if (response.total > 0) {
					setPoemState(response);
				} else {
					apiTerm = safeSearch.replace(/ /g, ' OR ');
					HTTP.search(apiTerm).then(({ response }) => {
						if (response.total > 0) {
							setPoemState(response);
						} else {
							// if no results for AND or OR search
							// return "no results found"
						}
					});
				}
			});
		},
	},
});
