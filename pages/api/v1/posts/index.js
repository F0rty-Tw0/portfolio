import axios from 'axios';

export default async (req, res) => {
	//Getting data from an URL using axios then displaying it in a console, and catching an error if there is one
	try {
		const axiosResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
		const posts = axiosResponse.data;
		
		//Should always return an object - this time its an array
		//Showing the spliced posts from 0 index until 10 index
		res.status(200).json(posts.splice(0, 10));
	} catch (error) {
		console.error(error);
		res.status(error.status || 400).json({ message: 'Api Error!!!' });
	}
};
