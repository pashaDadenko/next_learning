import { FC } from 'react';

type Props = {
	params: {
		id: string;
	};
};
export const generateMetadata = async ({ params: { id } }: Props) => {
	const post: Posts = await getData(id);

	return {
		title: post.title,
	};
};

type Posts = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

const getData = async (id: string) => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { next: { revalidate: 60 } });

	return response.json();
};

const Post: FC<Props> = async ({ params: { id } }) => {
	const post: Posts = await getData(id);

	return (
		<>
			<h1>Post № {id}</h1>

			<h3>{post.title}</h3>
			<p>{post.body}</p>
		</>
	);
};

export default Post;
