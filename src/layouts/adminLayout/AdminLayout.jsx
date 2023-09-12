import { LogoutOutlined } from '@ant-design/icons'
import { Avatar, Col, Dropdown, Layout, Menu, Row } from 'antd'
import { Suspense, useState } from 'react'
import { Link, Navigate, Outlet, useNavigate, useParams } from 'react-router-dom'
import { LogoWhite, MNSquare } from 'src/assets'
import { PlainCardComponent } from 'src/components/cardComponent/CardComponent'
import DividerComponent from 'src/components/dividerComponent/DividerComponent'
import GapComponent from 'src/components/gapComponent/GapComponent'
import LoadingComponent from 'src/components/loadingComponent/LoadingComponent'
import useWindowWidth from 'src/hooks/useWindowWidth'
import { useAuth } from 'src/providers/AuthProvider'
import { useTheme } from 'src/providers/ThemeProvider'
import './adminLayout.css'
import { SIDER_MENU } from './constants'
import FooterComponent from './footerComponent/FooterComponent'

const AdminLayout = () => {
	const navigate = useNavigate()
	const path = window.location.pathname
	const [open, setOpen] = useState(false)
	const { themeName, setThemeName } = useTheme()
	const [collapsed, setCollapsed] = useState(false)
	const { Header, Content, Footer, Sider } = Layout
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

	console.log(path)

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
		<Layout
			style={{
				minHeight: '120vh',
			}}
		>
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={(value) => setCollapsed(value)}
				style={{
					overflow: 'auto',
					height: '100vh',
					position: 'fixed',
					left: 0,
					top: 0,
					bottom: 0,
					backgroundColor: '#196ECD',
				}}
				width={256}
			>
				<div style={{ padding: 15 }}>
					<img src={collapsed ? MNSquare : LogoWhite} alt="footer-logo" className="mn-logo" />
					<DividerComponent gap={10} />
				</div>
				<Menu mode="inline" items={SIDER_MENU} selectedKeys={path} />
			</Sider>
			<Layout style={{ marginLeft: collapsed ? 80 : 256 }}>
				<Header className={colorChange ? 'header2-style color2-change' : 'header2-style'}>
					<div style={{ float: 'right' }}>
						<Dropdown
							menu={{
								items,
							}}
							trigger={['click']}
						>
							<Avatar
								size="large"
								style={{ backgroundColor: '#196ECD', cursor: 'pointer' }}
								onClick={() => setOpen(true)}
							>
								{user.email
									.match(/\b(\w)/g)
									.join('')
									.toUpperCase()}
							</Avatar>
						</Dropdown>
					</div>
				</Header>
				<Content
					style={{
						margin: '0 16px',
						padding: 10,
					}}
				>
					<Suspense fallback={<LoadingComponent />}>
						<Outlet />
					</Suspense>
				</Content>
				<Footer className="footer-style-admin">
					<FooterComponent />
				</Footer>
			</Layout>
		</Layout>
	)
}

export default AdminLayout
