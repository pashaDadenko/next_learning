import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type TPosts = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export const postsApi = createApi({
	reducerPath: 'postsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/posts' }),
	endpoints: (builder) => ({
		getPosts: builder.query<TPosts[], string>({ query: () => '' }),
	}),
});

export const { useGetPostsQuery } = postsApi;
