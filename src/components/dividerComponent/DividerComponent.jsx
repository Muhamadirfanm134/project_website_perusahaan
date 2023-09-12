import { Divider } from 'antd'
import React from 'react'

const DividerComponent = ({ gap, color }) => {
	return <Divider style={{ margin: `${gap}px 0px`, color: `${color}` }} />
}

export default DividerComponent
