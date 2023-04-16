export default class News {
	static URL = 'https://buggyservice.onrender.com';

	static async list(callback, callbackOffline) {
		if (navigator.onLine) {
			const response = await fetch(`${this.URL}/news`);
			const json = response.json();
			const data = await json;
			callback(data);
		} else {
			callbackOffline();
		}
	}
}
