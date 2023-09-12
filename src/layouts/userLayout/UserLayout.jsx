import { CaretDownOutlined, CloseCircleFilled, LogoutOutlined } from '@ant-design/icons'
import { Avatar, Button, Col, Drawer, Layout, Menu, Popover, Row, Space } from 'antd'
import { Suspense, useState } from 'react'
import { Link, Navigate, Outlet, useNavigate, useParams } from 'react-router-dom'
import { LogoWhite, MNLogo } from 'src/assets'
import { PlainCardComponent } from 'src/components/cardComponent/CardComponent'
import GapComponent from 'src/components/gapComponent/GapComponent'
import LoadingComponent from 'src/components/loadingComponent/LoadingComponent'
import useWindowWidth from 'src/hooks/useWindowWidth'
import { useAuth } from 'src/providers/AuthProvider'
import { useTheme } from 'src/providers/ThemeProvider'
import { HEADER_MENU, USER_MENU } from './constants'
import FooterComponent from './footerComponent/FooterComponent'
import './userLayout.css'

const UserLayout = () => {
	const navigate = useNavigate()
	const { menu } = useParams()
	const [open, setOpen] = useState(false)
	const { themeName, setThemeName } = useTheme()
	const { Header, Content, Footer } = Layout
	const isMobile = useWindowWidth()

	const [colorChange, setColorchange] = useState(false)
	const changeNavbarColor = () => {
		if (window.scrollY >= 10) {
			setColorchange(true)
		} else {
			setColorchange(false)
		}
	}
	window.addEventListener('scroll', changeNavbarColor)

	const { user } = useAuth()

	const onChange = (checked) => {
		setThemeName(checked ? 'light' : 'dark')
	}

	console.log(user)

	if (!user) {
		return <Navigate to="/" />
	}

	const items = [
		{
			label: (
				<a href="/" onClick={() => localStorage.removeItem('user')}>
					<LogoutOutlined /> Log Out
				</a>
			),
			key: '0',
		},
	]

	const content = (item) => {
		return (
			<Row gutter={[20, 0]}>
				{item.children?.map((item, index) => (
					<Col key={index} xs={24} sm={12} md={8} lg={6} xl={6}>
						<Link to={`home-page/academy/${item.path}`}>
							<PlainCardComponent>
								<div style={{ textAlign: 'center' }}>
									<img src={item.icon} alt={`icon-${index}`} style={{ width: 70 }} />
									<GapComponent height={10} />
									<div style={{ fontSize: 12 }}>{item.title}</div>
								</div>
							</PlainCardComponent>
						</Link>
					</Col>
				))}
			</Row>
		)
	}

	return (
		<Layout>
			<Header className={colorChange ? 'header-style color-change' : 'header-style'}>
				<Link to="/">
					<img src={themeName === 'light' ? MNLogo : LogoWhite} alt="mn-logo" className="mn-logo" />
				</Link>

				{!isMobile && (
					<>
						<Space size="large">
							{HEADER_MENU?.map((item) => (
								<span key={item.key}>
									{item.isDropdown ? (
										<Popover
											content={() => content(item)}
											trigger="click"
											arrow={false}
											overlayClassName="overlay-menu"
										>
											<div style={{ fontWeight: 'bold', fontSize: 16, cursor: 'pointer' }}>
												{item.label} <CaretDownOutlined />
											</div>
										</Popover>
									) : (
										<Link
											to={item.path}
											className="menu-style"
											style={{ color: themeName === 'light' ? '#333333' : '#ffffff' }}
										>
											{item.label}
										</Link>
									)}
								</span>
							))}
						</Space>
					</>
				)}

				<div>
					<Avatar size="large" style={{ backgroundColor: '#196ECD', cursor: 'pointer' }} onClick={() => setOpen(true)}>
						{user.email
							.match(/\b(\w)/g)
							.join('')
							.toUpperCase()}
					</Avatar>

					<Drawer
						title={
							<Space>
								<Avatar size="large" style={{ backgroundColor: '#196ECD' }} onClick={() => setOpen(true)}>
									{user.email
										.match(/\b(\w)/g)
										.join('')
										.toUpperCase()}
								</Avatar>
								<div>
									<div style={{ color: '#8c98a4', fontSize: 12 }}>Selamat datang,</div>
									<div>{user.email}</div>
								</div>
							</Space>
						}
						width={450}
						closeIcon={<CloseCircleFilled style={{ fontSize: 20 }} />}
						onClose={() => setOpen(false)}
						open={open}
						footer={
							<div style={{ padding: 15 }}>
								<Button
									type="primary"
									onClick={() => localStorage.removeItem('user')}
									danger
									href="/"
									block
									icon={<LogoutOutlined />}
									size="large"
								>
									Log Out
								</Button>
							</div>
						}
					>
						<Menu mode="inline" items={USER_MENU} selectedKeys={menu} />
					</Drawer>
				</div>
			</Header>
			<Content className="content-style">
				<Suspense fallback={<LoadingComponent />}>
					<Outlet />
				</Suspense>
			</Content>
			<Footer className="footer-style">
				<FooterComponent />
			</Footer>
		</Layout>
	)
}

export default UserLayout
