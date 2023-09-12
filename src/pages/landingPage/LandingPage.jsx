import { Carousel, Col, Divider, Row, Skeleton } from 'antd'
import { Link } from 'react-router-dom'
import { PlainCardComponent } from 'src/components/cardComponent/CardComponent'
import GapComponent from 'src/components/gapComponent/GapComponent'
import MediaPage from '../mediaPage/MediaPage'
import { BANNER, TRAINING_CATEGORY } from './constants'
import './landingPage.css'
import { useQuery } from '@apollo/client'
import { GET_ACADEMY_CATEGORY } from './query'
import LoadingComponent from 'src/components/loadingComponent/LoadingComponent'

const LandingPage = () => {
	const { data: academyCategoryData, loading: isLoadingCategory, error: errorCategory } = useQuery(GET_ACADEMY_CATEGORY)

	return (
		<>
			<span className="anchor" id="home" />
			<div className="half-bg">
				<Carousel autoplay>
					{BANNER?.map((item, index) => (
						<Row key={index} style={{ height: '160px' }} justify="center">
							<img src={item.banner} alt={`banner-${index}`} className="banner-style" />
						</Row>
					))}
				</Carousel>
			</div>

			<span className="anchor" id="academy" />
			<div className="title">Pilih Akademi Pelatihan</div>
			<div className="sub-title">Pilih berbagai pelatihan yang sesuai denganmu</div>
			<GapComponent height={40} />

			<Row gutter={[20, 0]}>
				{isLoadingCategory ? (
					<Skeleton active />
				) : (
					academyCategoryData?.academy_category?.map((item, index) => (
						<Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
							<Link to={`academy/${item.path}`}>
								<PlainCardComponent>
									<div style={{ textAlign: 'center' }}>
										<img src={item.icon} alt={`icon-${index}`} style={{ width: 150 }} />
										<GapComponent height={20} />
										<div>{item.title}</div>
									</div>
								</PlainCardComponent>
							</Link>
						</Col>
					))
				)}
			</Row>

			<Divider />

			<span className="anchor" id="media" />
			<MediaPage />
		</>
	)
}

export default LandingPage
