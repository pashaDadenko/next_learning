import { FC } from 'react';
import { Posts } from '@/components/Posts/Posts';
import { Search } from '@/components/Search/Search';

type TPosts = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

const Blog: FC = async () => {
	const getData = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 } });
		return response.json();
	};

	const posts: TPosts[] = await getData();

	return (
		<>
			<h1>Blog</h1>
			<Search />
			<Posts posts={posts} />
		</>
	);
};

export default Blog;
