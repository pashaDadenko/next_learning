import { FC } from 'react';

import styles from './Header.module.scss';
import { Navigation } from '../Navigation/Navigation';

export const Header: FC = () => {
	return (
		<header className={styles.wrapper}>
			<Navigation />
		</header>
	);
};
