import axios from 'axios';

export default async (req, res) => {
	//Getting data from an URL using axios then displaying it in a console, and catching an error if there is one and displaying it in console too.
	try {
		const axiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.query.id}`);
		const post = axiosResponse.data;
		//Returning a JSON of post
		res.status(200).json(post);
	} catch (error) {
		console.error(error);
		res.status(error.status || 400).json({ message: 'Api Error!!!' });
	}
};
