import { LockOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import { Form } from 'antd'
import { Card, Col, Row } from 'antd'
import React from 'react'
import DividerComponent from 'src/components/dividerComponent/DividerComponent'
import GapComponent from 'src/components/gapComponent/GapComponent'

const Settings = () => {
	const onFinish = (value) => {
		console.log(value)
	}
	return (
		<>
			<Card>
				<h1>Ubah Password</h1>
				<DividerComponent gap={15} />
				<Form name="change-password" onFinish={onFinish} layout="vertical">
					<Form.Item
						label="Password Aktif"
						name="password"
						rules={[
							{
								required: true,
								message: 'Masukkan password aktif anda!',
							},
						]}
						hasFeedback
					>
						<Input.Password placeholder="Masukkan password aktif" prefix={<LockOutlined />} />
					</Form.Item>
					<Form.Item
						name="password_baru"
						label="Password"
						rules={[
							{
								required: true,
								message: 'Masukkan password baru anda!',
							},
						]}
						hasFeedback
					>
						<Input.Password placeholder="Masukkan password baru" prefix={<LockOutlined />} />
					</Form.Item>

					<Form.Item
						name="konfirmasi_password"
						label="Konfirmasi Password"
						dependencies={['password']}
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Konfirmasi password anda!',
							},
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue('password') === value) {
										return Promise.resolve()
									}
									return Promise.reject(new Error('Password yang anda masukkan tidak sama!'))
								},
							}),
						]}
					>
						<Input.Password placeholder="Konfirmasi password" prefix={<LockOutlined />} />
					</Form.Item>

					<GapComponent height={20} />
					<Button type="primary" htmlType="submit">
						Ubah Password
					</Button>
				</Form>
			</Card>
		</>
	)
}

export default Settings
