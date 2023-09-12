import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { useLazyQuery, useMutation } from '@apollo/client'
import { Button, Card, Form, Input, Radio, Row } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MNLogo } from 'src/assets'
import GapComponent from 'src/components/gapComponent/GapComponent'
import { useAuth } from 'src/providers/AuthProvider'
import './authStyle.css'
import { GET_USER_BY_EMAIL, REGISTER_USER } from './query/auth-query'
import { Modal } from 'antd'

const AuthPage = () => {
	const { login } = useAuth()
	const [form] = Form.useForm()
	const navigate = useNavigate()
	const [section, setSection] = useState('Login')
	const [loginUser, { data: userData, loading: isUserLoading, error: userError }] = useLazyQuery(GET_USER_BY_EMAIL)
	const [register, { loading: isRegisterLoading }] = useMutation(REGISTER_USER)

	const onLogin = (values) => {
		loginUser({
			variables: { email: values.email, password: values.password },
			onCompleted: (data) => {
				if (data.login !== null) {
					login(data.login)
				} else {
					Modal.warning({
						title: 'Login Failed!',
						content: 'Username/password is not correct',
						centered: true,
						onOk() {
							setSection('Login')
						},
					})
				}
			},
		})

		// login(values)
	}

	const onRegister = (values) => {
		const body = {
			nama: values.nama,
			email: values.email,
			password: values.password,
			isAdmin: false,
		}
		register({
			variables: {
				object: { ...body },
			},
			onError: (err) => {
				message.open({
					type: 'error',
					content: `${err.message}`,
				})
			},
			onCompleted: () => {
				Modal.success({
					title: 'Register Success!',
					content: 'Please login using your account',
					centered: true,
					onOk() {
						form.resetFields(), setSection('Login')
					},
				})
			},
		})
	}

	return (
		<div className="auth-bg">
			<div className="container-center ">
				<Card
					title={<img src={MNLogo} alt="logo" style={{ height: 60, padding: 20 }} />}
					bodyStyle={{ width: '400px' }}
				>
					<Row justify="center">
						<Radio.Group
							defaultValue="Login"
							buttonStyle="solid"
							onChange={(e) => {
								setSection(e.target.value)
								form.resetFields()
							}}
							value={section}
						>
							<Radio.Button value="Login">Login Here</Radio.Button>
							<Radio.Button value="Register">Register Here</Radio.Button>
						</Radio.Group>
					</Row>

					<GapComponent height={20} />

					<Form name="login-form" form={form} onFinish={section === 'Login' ? onLogin : onRegister}>
						{section === 'Register' && (
							<Form.Item
								name="nama"
								rules={[
									{
										required: true,
										message: 'Please input your Email!',
									},
								]}
							>
								<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Nama Lengkap" />
							</Form.Item>
						)}
						<Form.Item
							name="email"
							rules={[
								{
									required: true,
									message: 'Please input your Email!',
								},
							]}
						>
							<Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
						</Form.Item>
						<Form.Item
							name="password"
							rules={[
								{
									required: true,
									message: 'Please input your Password!',
								},
							]}
						>
							<Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
						</Form.Item>
						{section === 'Register' && (
							<Form.Item
								name="konfirmasi_password"
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
								<Input.Password
									prefix={<LockOutlined className="site-form-item-icon" />}
									placeholder="Konfirmasi Password"
								/>
							</Form.Item>
						)}
						<Button type="primary" htmlType="submit" block loading={isUserLoading || isRegisterLoading} size="large">
							{section === 'Login' ? 'Login' : 'Register'}
						</Button>
					</Form>
				</Card>
			</div>
		</div>
	)
}

export default AuthPage
