import Vue from 'vue';
import Router from 'vue-router';
import Input from './views/Input.vue';

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
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "about" */ './views/Poem.vue'),
		},
	],
});