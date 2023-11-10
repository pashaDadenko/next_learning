'use client';

import { FC } from 'react';
import Link from 'next/link';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { useGetPostsQuery } from '@/redux/api';

type TPosts = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export const Posts: FC = () => {
	const { data = [] } = useGetPostsQuery('');

	const searchValue = useSelector((state: RootState) => state.searchSlice.searchValue);

	const updatePosts = data.filter((post: TPosts) => typeof searchValue === 'string' && post.title.toLowerCase().includes(searchValue.toLowerCase()));

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
