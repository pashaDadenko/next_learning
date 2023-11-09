'use client';

import { FC } from 'react';
import Link from 'next/link';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

type TProps = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export const Posts: FC<{ posts: TProps[] }> = ({ posts }) => {
	const searchValue = useSelector((state: RootState) => state.searchSlice.searchValue);

	const updatePosts = posts.filter((post: TProps) => typeof searchValue === 'string' && post.title.toLowerCase().includes(searchValue.toLowerCase()));

	return (
		<ul style={{ marginBottom: 100 }}>
			{updatePosts.map((post) => (
				<li key={post.id}>
					<Link href={`blog/${post.id}`}>{post.title}</Link>
				</li>
			))}
		</ul>
	);
};
