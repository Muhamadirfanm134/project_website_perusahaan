import { Button, Table } from 'antd'
import React from 'react'
import GapComponent from 'src/components/gapComponent/GapComponent'
import { GET_ACADEMY } from '../../query'
import { useQuery } from '@apollo/client'
import { Space } from 'antd'
import { Popconfirm } from 'antd'
import { DeleteOutlined, EditFilled, EditOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'

const AcademyManagement = () => {
	const { data: academyData, loading: isLoadingAcademy, error: isErrorAcademy } = useQuery(GET_ACADEMY)

	const columns = [
		{
			title: 'Title',
			dataIndex: 'name',
			key: 'name',
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
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
		},
		{
			title: 'Date',
			dataIndex: ['start_date', 'end_date'],
			key: 'start_date',
			render: (_, record) => {
				console.log(record.start_date)
				return (
					<div>
						{dayjs(record?.start_date).format('DD-MM-YYYY')} s.d. {dayjs(record?.end_date).format('DD-MM-YYYY')}
					</div>
				)
			},
		},
		{
			title: 'Register Deadline',
			dataIndex: 'register_deadline',
			key: 'register_deadline',
			render: (_, record) => {
				dayjs(record.register_deadline).format('DD-MM-YYYY')
			},
		},
		{
			title: 'Action',
			dataIndex: 'action',
			render: (_, record) => (
				<Space>
					<Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
					<Popconfirm title="Sure to delete?" arrow={false} onConfirm={() => onDelete(record.uuid)}>
						<Button icon={<DeleteOutlined />} />
					</Popconfirm>
				</Space>
			),
		},
	]

	const handleEdit = (record) => {}

	const onDelete = (uuid) => {}

	return (
		<>
			<div className="title">Management Academy</div>

			<GapComponent height={40} />
			<Table rowKey="uuid" columns={columns} dataSource={academyData?.academy} loading={isLoadingAcademy} />
		</>
	)
}

export default AcademyManagement
