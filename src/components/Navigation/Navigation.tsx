'use client';

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Navigation.module.scss';

export const Navigation: FC = () => {
	const pathname = usePathname();

	return (
		<div className={styles.wrapper}>
			<Link className={`${styles.link} ${pathname === '/' ? styles.active : ''}`} href={'/'}>
				Home
			</Link>
			<Link className={`${styles.link} ${pathname === '/blog' ? styles.active : ''}`} href={'/blog'}>
				Blog
			</Link>
			<Link className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`} href={'/about'}>
				About
			</Link>
		</div>
	);
};
