import { gql } from '@apollo/client'

export const GET_USER_BY_EMAIL = gql`
	query GetUser($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			email
			isAdmin
			nama
			password
			uuid
		}
	}
`

export const REGISTER_USER = gql`
	mutation RegisterUser($object: user_insert_input!) {
		insert_user_one(object: $object) {
			email
			isAdmin
			nama
			password
			uuid
		}
	}
`
