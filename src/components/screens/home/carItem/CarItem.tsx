import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ICar } from '../../../../types/car.interface'
import styles from '../Home.module.scss'
import Price from './Price'

interface ICarItem {
	car: ICar,
}

const CarItem: FC<ICarItem> = ({ car }) => {
	return (
		<div key={car.id} className={styles.item}>
			<div
				className={styles.image}
				style={{
					backgroundImage: `url(${car.image})`,
				}}
			></div>
			<div className={styles.info}>
				<h2>{car.name}</h2>
				<Price price={car.price} />
				<Link className='btn' to={`cars/${car.id}`}>
					Read more
				</Link>
			</div>
		</div>
	)
}

export default CarItem
