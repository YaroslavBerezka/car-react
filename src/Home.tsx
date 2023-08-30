import { useQuery } from '@tanstack/react-query'
import '../src/assets/styles/global.scss'
import CreateCarForm from './components/screens/home/createCarForm/CreateCarForm'
import Catalog from './components/ui/Catalog'
import Header from './components/ui/Header'
import { CarService } from './services/car.service'

const Home = () => {
	const { data, isLoading } = useQuery(['cars'], () => CarService.getAll())

	return (
		<div>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<>
					<h1>Car catalog</h1>
					<Header />
					<CreateCarForm />
					<Catalog data={data} />
				</>
			)}
		</div>
	)
}

export default Home
