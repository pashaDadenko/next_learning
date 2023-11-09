import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TSearchSlice = {
	searchValue: number | string;
};

export const searchSlice = createSlice({
	name: 'search',
	initialState: <TSearchSlice>{
		searchValue: '',
	},
	reducers: {
		setSearchValue: (state, { payload }: PayloadAction<number | string>) => {
			state.searchValue = payload;
		},
	},
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
