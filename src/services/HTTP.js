const ROOT_URL = 'https://content.guardianapis.com/search?show-fields=body&q=';
const API_KEY = 'dcb6c662-5f3a-4f7a-a57b-c0d7b815c729';

const HTTP = {
	async search(searchTerm) {
		const url = `${ROOT_URL}${searchTerm}&api-key=${API_KEY}`;

		try {
			const response = await fetch(url);
			if (response.ok) return response.json();
			throw new Error('Network response was not ok.');
		} catch (err) {
			console.error(`Fetch issues: ${error.message}`);
		}

		return false;
	},
};

export default HTTP;
