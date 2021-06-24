const ROOT_URL = 'https://content.guardianapis.com/search?show-fields=body&q=';

const HTTP = {
	async search(searchTerm) {
		const url = `${ROOT_URL}${searchTerm}&api-key=${process.env.VUE_APP_API_KEY}`;

		try {
			const response = await fetch(url);
			if (response.ok) return response.json();
			throw new Error('Network response was not ok.');
		} catch (err) {
			console.error(`Fetch issues: ${err.message}`);
		}

		return false;
	},
};

export default HTTP;
