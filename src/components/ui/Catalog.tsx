import { FC } from 'react'
import { ICar } from '../../types/car.interface'
import CarItem from '../screens/home/carItem/CarItem'

interface ICatalog {
	data?: ICar[] 
}

const Catalog: FC<ICatalog> = ({ data = [] }) => {
	return (
		<div>
			{data.length ? (
				data.map(car => <CarItem key={car.id} car={car} />)
			) : (
				<p>There not cars</p>
			)}
		</div>
	)
}

export default Catalog
