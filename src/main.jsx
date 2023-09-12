import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './providers/ThemeProvider.jsx'
import { ApolloProvider } from '@apollo/client'
import { client } from './config/apollo-client.js'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ApolloProvider>
	</React.StrictMode>,
)
