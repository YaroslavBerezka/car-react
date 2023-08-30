import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Home'
import CarDetail from './screens/car-detail/CarDetail'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<CarDetail />} path='/cars/:id' />
				<Route path='*' element={<div>Not Found</div>} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
