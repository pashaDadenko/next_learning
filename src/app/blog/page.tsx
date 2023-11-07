import { FC } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Blog | next learning',
};

const getData = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 } });

	return response.json();
};

type Posts = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

const Blog: FC = async () => {
	const posts: Posts[] = await getData();

	return (
		<>
			<h1>Blog</h1>

			<ul style={{ marginBottom: 100 }}>
				{posts.map((post) => (
					<li key={post.id}>
						<Link href={`blog/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default Blog;
