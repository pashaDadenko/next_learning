import { FC } from 'react';
import { PostOne } from '@/components/PostOne/PostOne';

type Props = { params: { id: string } };

const Post: FC<Props> = ({ params: { id } }) => {
	return (
		<>
			<h1>Post № {id}</h1>
			<PostOne id={id} />
		</>
	);
};

export default Post;
