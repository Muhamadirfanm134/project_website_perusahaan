import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import PublicLayout from 'src/layouts/PublicLayout'
import AdminLayout from 'src/layouts/adminLayout/AdminLayout'
import DefaultLayout from 'src/layouts/defaultLayout/DefaultLayout'
import UserLayout from 'src/layouts/userLayout/UserLayout'
import AdminPage from 'src/pages/adminPage/AdminPage'
import AcademyCategory from 'src/pages/adminPage/academy/academyCategory/AcademyCategory'
import AcademyManagement from 'src/pages/adminPage/academy/academyManagement/AcademyManagement'
import AuthPage from 'src/pages/authPage/AuthPage'
import MediaPage from 'src/pages/mediaPage/MediaPage'
import AcademyPage from 'src/pages/userPage/academy/AcademyPage'
import AcademyDetail from 'src/pages/userPage/academyDetail/AcademyDetail'
import UserMenu from 'src/pages/userPage/userMenu/UserMenu'
import { useAuth } from 'src/providers/AuthProvider'

const LandingPage = lazy(() => import('src/pages/landingPage/LandingPage'))

const RouteManagement = () => {
	const { user } = useAuth()
	return (
		<Routes>
			<Route element={<DefaultLayout />}>
				<Route path="/" element={<LandingPage />} />
				<Route path="/academy/:category" element={<AcademyPage />} />
				<Route path="/academy/:category/:id" element={<AcademyDetail />} />
			</Route>

			<Route element={<PublicLayout />}>
				<Route path="auth" element={<AuthPage />} />
			</Route>

			<Route element={<AdminLayout />}>
				<Route path="dashboard-admin" element={<AdminPage />} />
				<Route path="academy-management" element={<AcademyManagement />} />
				<Route path="academy-category" element={<AcademyCategory />} />
			</Route>

			<Route element={<UserLayout />}>
				<Route path="home-page" element={<LandingPage />} />
				<Route path="home-page/academy/:category" element={<AcademyPage />} />
				<Route path="home-page/academy/:category/:id" element={<AcademyDetail />} />
				<Route path="user/:menu" element={<UserMenu />} />
				<Route path="user/:menu/:username" element={<UserMenu />} />
				<Route path="media" element={<MediaPage />} />
			</Route>
		</Routes>
	)
}

export default RouteManagement
