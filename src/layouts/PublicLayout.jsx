import React from 'react'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useAuth } from 'src/providers/AuthProvider'

const PublicLayout = () => {
	const { user } = useAuth()

	if (user) {
		return <Navigate to={user.isAdmin === true ? '/admin' : '/home-page'} replace />
	}

	return <Outlet />
}

export default PublicLayout
