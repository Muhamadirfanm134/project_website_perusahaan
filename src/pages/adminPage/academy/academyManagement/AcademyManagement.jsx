import { Table } from 'antd'
import React from 'react'
import GapComponent from 'src/components/gapComponent/GapComponent'
import { GET_ACADEMY } from '../../query'
import { useQuery } from '@apollo/client'

const AcademyManagement = () => {
	const { data: academyData, loading: isLoadingAcademy, error: isErrorAcademy } = useQuery(GET_ACADEMY)

	const columns = [
		{
			title: 'Title',
			dataIndex: 'title',
			key: 'title',
		},
		{
			title: 'Level',
			dataIndex: 'level',
			key: 'level',
		},
		{
			title: 'Category',
			dataIndex: 'category',
			key: 'category',
		},
	]

	return (
		<>
			<div className="title">Management Academy</div>

			<GapComponent height={40} />
			<Table key="id" columns={columns} dataSource={academyData?.academy} loading={isLoadingAcademy} />
		</>
	)
}

export default AcademyManagement
