import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Moon, Sun, UserCircle } from '@phosphor-icons/react'
import { Button, Layout, Space, Switch, Tag } from 'antd'
import { Suspense, useState } from 'react'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import { LogoWhite, MNLogo } from 'src/assets'
import LoadingComponent from 'src/components/loadingComponent/LoadingComponent'
import useWindowWidth from 'src/hooks/useWindowWidth'
import { useAuth } from 'src/providers/AuthProvider'
import { useTheme } from 'src/providers/ThemeProvider'
import { HEADER_MENU } from './constants'
import './defaultLayout.css'
import FooterComponent from './footerComponent/FooterComponent'

const DefaultLayout = () => {
	const navigate = useNavigate()
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

	if (user) {
		return <Navigate to={user.isAdmin === true ? '/dashboard-admin' : '/home-page'} replace />
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
									<a
										href={item.path}
										className="menu-style"
										style={{ color: themeName === 'light' ? '#333333' : '#ffffff' }}
									>
										{item.label}
									</a>
									{item.coming && <Tag color="#f7931f">Coming Soon!</Tag>}
								</span>
							))}

							<Link to="/auth">
								<Button type="primary" size="large" icon={<UserOutlined />}>
									Login
								</Button>
							</Link>
						</Space>
					</>
				)}

				{/* <div>
					<Switch
						checkedChildren={<Sun weight="fill" className="icon" />}
						unCheckedChildren={<Moon weight="fill" className="icon" />}
						defaultChecked
						onChange={onChange}
					/>
				</div> */}
			</Header>
			<Content className="content-style ">
				<Suspense fallback={<LoadingComponent />}>
					<Outlet />
				</Suspense>
			</Content>
			<Footer className="footer-style">
				<span className="anchor" id="about" />
				<FooterComponent />
			</Footer>
		</Layout>
	)
}

export default DefaultLayout
