import React from 'react'
import './detailField.css'
import GapComponent from '../gapComponent/GapComponent'

const DetailField = ({ label, value }) => {
	return (
		<>
			<div>
				<b>{label}</b>
			</div>
			<GapComponent height={10} />
			<div className="field-wrapper">{value || '-'}</div>
		</>
	)
}

export default DetailField
