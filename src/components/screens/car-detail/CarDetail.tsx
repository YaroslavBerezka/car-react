import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { withAuth } from '../../../HOC/withAuth'
import { CarService } from '../../../services/car.service'
import CarItem from '../home/carItem/CarItem'

const CarDetail = withAuth(() => {
	const { id } = useParams()
	const { data } = useQuery(['car'], () => CarService.getById(id), {
		enabled: true
	})

	return (
		<div>
			{!data?.name ? (
				<p>Loading...</p>
			) : (
				<>
					<Link to='/' className='btn'>
						Back
					</Link>
					<CarItem car={data} />
				</>
			)}
		</div>
	)
})

export default CarDetail
