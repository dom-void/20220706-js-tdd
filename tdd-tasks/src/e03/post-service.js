import axios from 'axios';
const hostURL = 'https://dummyjson.com';
//alternative:  const hostURL = 'https://jsonplaceholder.typicode.com';

export const postService = {
	async getAll() {
		 const { data } = await axios.get(hostURL + '/posts');
		 return data.posts;
	},
	async getOne(id) {
		const { data } = await axios.get(`${hostURL}/posts/${id}`);
		return data;
    }
}
