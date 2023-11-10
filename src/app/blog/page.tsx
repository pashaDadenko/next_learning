import { FC } from 'react';
import { Posts } from '@/components/Posts/Posts';
import { Search } from '@/components/Search/Search';

const Blog: FC = () => {
	return (
		<>
			<h1>Blog</h1>
			<Search />
			<Posts />
		</>
	);
};

export default Blog;
