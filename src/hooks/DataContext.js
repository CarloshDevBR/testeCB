import { createContext, useContext, useState } from 'react'

const DataContext = createContext({})

export const DataProvider = ({ children }) => {
	const [ data, setData ] = useState()

	const putData = async data => {
		setData(data)
	}

	return (
		<DataContext.Provider value={{ putData, data }} >
			{ children }
		</DataContext.Provider>
	)
}

export const useData = () => {
	const context = useContext(DataContext)

	if(!context){
		throw new Error("useData must be used with UserContext")
	}

	return context
}