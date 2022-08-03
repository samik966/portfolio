import { createContext, useContext, useEffect, useState } from 'react'

const PortfolioContext = createContext()

export const PortfolioContextProvider = ({ children }) => {
	const [portfolio, setPortfolio] = useState({})
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('/assets/portfolio.json')
			const portfolioData = await response.json()
			setPortfolio(portfolioData)
		}
		fetchData()
	}, [])
	return (
		<PortfolioContext.Provider value={portfolio}>
			{children}
		</PortfolioContext.Provider>
	)
}

export const usePortfolioContext = () => {
  const context = useContext(PortfolioContext)
  if (!context) {
		throw new Error('You need to wrap with PortfolioContextProvider.')
	}
	return context
}
