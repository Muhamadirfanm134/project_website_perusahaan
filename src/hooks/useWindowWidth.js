import { useEffect, useState } from 'react'

const useWindowWidth = () => {
	const [isSmallScreen, setIsSmallScreen] = useState(false)

	let checkScreenSize = () => {
		setIsSmallScreen(window.innerWidth < 1082)
	}

	useEffect(() => {
		checkScreenSize()

		window.addEventListener('resize', checkScreenSize)

		return () => window.removeEventListener('resize', checkScreenSize)
	}, [checkScreenSize])

	return isSmallScreen
}

export default useWindowWidth
