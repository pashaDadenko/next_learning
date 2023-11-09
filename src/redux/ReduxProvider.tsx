'use client';

import { store } from './store';
import React, { FC } from 'react';
import { Provider } from 'react-redux';

export const ReduxProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};
