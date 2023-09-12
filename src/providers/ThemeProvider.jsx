import { useContext } from 'react'
import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
	const [themeName, setThemeName] = useState('light')

	return <ThemeContext.Provider value={{ themeName, setThemeName }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
	return useContext(ThemeContext)
}
