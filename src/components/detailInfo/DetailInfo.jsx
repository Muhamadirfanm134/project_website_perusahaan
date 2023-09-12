import { Col, Row } from 'antd'
import React from 'react'

const DetailInfo = ({ icon, field, value }) => {
	return (
		<Row justify="space-between">
			<Col>
				{icon} {field}
			</Col>
			<Col>
				<div style={{ color: '#8c98a4' }}>{value}</div>
			</Col>
		</Row>
	)
}

export default DetailInfo
