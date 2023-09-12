import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
	uri: import.meta.env.VITE_HASURA_URI,
	cache: new InMemoryCache({ addTypename: false }),
	headers: {
		'x-hasura-admin-secret': import.meta.env.VITE_X_HASURA_ADMIN_SECRET,
	},
})
