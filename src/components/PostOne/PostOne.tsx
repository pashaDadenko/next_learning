'use client';

import { FC } from 'react';
import { useGetPostsQuery } from '@/redux/api';

type Props = { id: string };

export const PostOne: FC<Props> = ({ id }) => {
	const { data = [] } = useGetPostsQuery('');

	const post = data.filter((item) => item.id === +id!);

	return (
		<>
			{post.map((item) => (
				<div key={item.id}>
					<h3>{item.title}</h3>
					<p>{item.body}</p>
				</div>
			))}
		</>
	);
};
