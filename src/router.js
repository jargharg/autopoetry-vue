import Vue from 'vue';
import Router from 'vue-router';
import Input from './views/Input.vue';
import Poem from './views/Poem.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'input',
			component: Input,
		},
		{
			path: '/poem',
			name: 'poem',
			component: Poem,
		},
	],
});