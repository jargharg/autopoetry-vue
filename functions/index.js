const functions = require('firebase-functions');
const fetch = require('node-fetch');
const ROOT_URL = 'https://content.guardianapis.com/search?show-fields=body&q=';

exports.search = functions.https.onRequest(async ({ query }, response) => {
	response.set('Access-Control-Allow-Origin', 'http://localhost:8080');
	response.set('Access-Control-Allow-Methods', 'GET');

	const { searchTerm } = query;
	if (!searchTerm) {
		return response.status(400).send({ errorMessage: 'No searchTerm specified' });
	}
	const safeSearchTerm = searchTerm.replace(/\?|!/g, '');

	const search = async searchTerm => {
		const url = `${ROOT_URL}${searchTerm}&api-key=${process.env.VUE_APP_API_KEY}`;
		const searchResponse = await fetch(url);

		if (!searchResponse.ok) {
			throw Error('Bad network request');
		}

		return searchResponse.json();
	};

	let searchResults;

	try {
		searchResults = await search(safeSearchTerm.replace(/ /g, ' AND '));

		if (searchResults.total <= 0) {
			searchResults = await search(safeSearchTerm.replace(/ /g, ' OR '));
		}

		if (searchResults.total <= 0) {
			throw Error('No matching articles found');
		}
	} catch (error) {
		return response.status(400).send(error);
	}

	return response.status(200).send(searchResults);
});
