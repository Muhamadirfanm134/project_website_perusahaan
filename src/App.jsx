import { ConfigProvider, theme } from 'antd'
import { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './providers/AuthProvider'
import { ThemeContext } from './providers/ThemeProvider'
import RouteManagement from './routeManagements/RouteManagement'
import ScrollToTop from './utils/ScrollToTop'

function App() {
	const { themeName } = useContext(ThemeContext)
	return (
		<>
			<ConfigProvider
				theme={{
					algorithm: themeName === 'light' ? theme.lightAlgorithm : theme.darkAlgorithm,
					token: {
						colorPrimary: '#196ECD',
						borderRadius: '20px',
					},
				}}
			>
				<BrowserRouter>
					<AuthProvider>
						<ScrollToTop />
						<RouteManagement />
					</AuthProvider>
				</BrowserRouter>
			</ConfigProvider>
		</>
	)
}

export default App
