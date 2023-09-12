import { gql } from '@apollo/client'

export const GET_ACADEMY_CATEGORY = gql`
	query academy {
		academy_category {
			icon
			path
			title
			uuid
		}
	}
`
