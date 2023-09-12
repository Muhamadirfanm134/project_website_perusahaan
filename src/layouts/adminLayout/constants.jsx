import {
	AppstoreOutlined,
	DashboardOutlined,
	MailOutlined,
	RadarChartOutlined,
	SettingOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { TRAINING_CATEGORY } from 'src/pages/landingPage/constants'

function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	}
}

export const HEADER_MENU = [
	{
		key: 'academy',
		label: 'Academy',
		path: '#',
		isDropdown: true,
		children: TRAINING_CATEGORY,
	},
	{
		key: 'media',
		label: 'Rilis Media',
		path: 'media',
		isDropdown: false,
		children: [],
	},
	{
		key: 'about',
		label: 'Tentang Kami',
		path: 'about',
		isDropdown: false,
		children: [],
	},
]

export const USER_MENU_DATA = [
	{
		title: 'Dashboard',
		icon: <DashboardOutlined />,
		link: 'dashboard',
	},
	{
		title: 'Data Diri',
		icon: <UserOutlined />,
		link: 'biodata',
	},
	{
		title: 'Pelatihan',
		icon: <RadarChartOutlined />,
		link: 'pelatihan',
	},
	{
		title: 'Settings',
		icon: <SettingOutlined />,
		link: 'settings',
	},
]

export const SIDER_MENU = [
	getItem(<Link to={`dashboard-admin`}>Dashboard</Link>, '/dashboard-admin', <DashboardOutlined />),
	getItem('Academy', 'academy', <RadarChartOutlined />, [
		getItem(<Link to={`academy-management`}>Academy Management</Link>, '/academy-management'),
		getItem(<Link to={`academy-category`}>Academy Category</Link>, '/academy-category'),
	]),
]
