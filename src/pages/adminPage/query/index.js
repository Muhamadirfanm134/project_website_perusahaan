import { gql } from '@apollo/client'

export const GET_ACADEMY = gql`
	query academy {
		academy {
			category
			description
			end_date
			level
			name
			place
			quota
			register_deadline
			selection_test
			sertification
			speaker
			start_date
			status
			thumbnail
			uuid
		}
	}
`
