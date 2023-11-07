import { FC } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Home | next learning',
};

const Home: FC = () => {
	return (
		<>
			<h1>Home</h1>
		</>
	);
};

export default Home;
