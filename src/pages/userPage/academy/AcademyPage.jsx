import { CalendarFilled, CalendarOutlined, PushpinFilled, PushpinOutlined, UserOutlined } from '@ant-design/icons'
import { Card, Col } from 'antd'
import { Tag } from 'antd'
import { Space } from 'antd'
import { Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { BannerDum } from 'src/assets'
import { PlainCardComponent } from 'src/components/cardComponent/CardComponent'
import GapComponent from 'src/components/gapComponent/GapComponent'
import { SIDE_BANNER, TRAINING_LIST } from 'src/pages/landingPage/constants'
import { categoryMapping, statusMapping } from 'src/utils/Mapper'

const AcademyPage = () => {
	const { category } = useParams()

	const record = TRAINING_LIST?.filter((item) => item.category === category)

	return (
		<>
			<div className="half-bg2">
				<Space size="large" className="glass-style">
					<div>
						<img src={categoryMapping(category).icon} alt="icon" style={{ width: 100 }} />
					</div>
					<Space direction="vertical">
						<div className="news-title" style={{ fontSize: 26 }}>
							<b>{categoryMapping(category).wording}</b>
						</div>
						<div>{categoryMapping(category).subWording}</div>
					</Space>
				</Space>
			</div>

			<GapComponent height={30} />

			<Row gutter={[30, 20]}>
				<Col xs={24} sm={24} md={18} lg={18} xl={18}>
					{record &&
						record?.map((item, index) => (
							<Link key={index} to={`${item.id}`}>
								<PlainCardComponent>
									<Space size="large">
										<div>
											<img src={item.thumbnail} alt={`thumbnail-${index}`} style={{ width: '100px' }} />
										</div>
										<Space direction="vertical">
											<div>{statusMapping(item.status)}</div>
											<div className="news-title">
												<b>{item.name}</b>
											</div>
											<Space size="large">
												<Space>
													<CalendarOutlined />
													<div>{item.date}</div>
												</Space>
												<Space>
													<PushpinOutlined />
													<div>{item.place}</div>
												</Space>
												<Space>
													<UserOutlined />
													<div>{item.speaker}</div>
												</Space>
											</Space>
										</Space>
									</Space>
								</PlainCardComponent>
							</Link>
						))}
				</Col>
				<Col xs={24} sm={24} md={6} lg={6} xl={6}>
					{SIDE_BANNER?.map((item, index) => (
						<img key={index} src={item} alt="banner" style={{ width: '100%', borderRadius: 20, marginBottom: 20 }} />
					))}
				</Col>
			</Row>
		</>
	)
}

export default AcademyPage
