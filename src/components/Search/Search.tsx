'use client';

import { FC } from 'react';
import { setSearchValue } from '@/redux/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

import styles from './Search.module.scss';

export const Search: FC = () => {
	const dispatch = useDispatch();
	const searchValue = useSelector((state: RootState) => state.searchSlice.searchValue);

	return (
		<div className={styles.wrapper}>
			<input type='search' value={searchValue} placeholder='Search' className={styles.search} onChange={(e) => dispatch(setSearchValue(e.target.value))} />
		</div>
	);
};
