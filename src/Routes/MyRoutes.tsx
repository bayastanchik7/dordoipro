
import { Route, Routes } from 'react-router-dom'
import MainPages from '../Pages/MainPages'

const MyRoutes = () => {
	const PUBLIC = [
		{
			path: '/',
			element: <MainPages />,
			key: 1
		}
	]

	return (
		<Routes>
			{PUBLIC.map(item => (
				<Route path={item.path} element={item.element} key={item.key} />
			))}
		</Routes>
	)
}

export default MyRoutes
