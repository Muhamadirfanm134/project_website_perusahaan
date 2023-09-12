import { Space } from 'antd'
import { Col, Row } from 'antd'
import React from 'react'
import GapComponent from 'src/components/gapComponent/GapComponent'
import { MEDIA_DATA } from '../landingPage/constants'

const MediaPage = () => {
	return (
		<>
			<div className="title">Rilis Media</div>
			<div className="sub-title">Berita, Artikel, dan Pengumuman Terbaru</div>
			<GapComponent height={40} />

			<Row gutter={[20, 20]} align="middle">
				{MEDIA_DATA?.map((item, index) => (
					<Col key={index} xs={24} sm={24} md={12} lg={12} xl={12}>
						<Space size="large" style={{ cursor: 'pointer' }}>
							<div>
								<img src={item.thumbnail} alt={`thumbnail-${index}`} className="news-thumb" />
							</div>
							<Space direction="vertical">
								<div className="news-category">{item.category}</div>
								<div className="news-title">{item.title}</div>
								<div className="news-date">{item.date}</div>
							</Space>
						</Space>
					</Col>
				))}
			</Row>
		</>
	)
}

export default MediaPage
