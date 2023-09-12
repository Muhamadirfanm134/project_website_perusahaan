import { Col, Row, Space } from 'antd'
import { PlainCardComponent } from 'src/components/cardComponent/CardComponent'
import { DASHBOARD_MENU } from '../constants'
import GapComponent from 'src/components/gapComponent/GapComponent'
import { Card } from 'antd'
import '../userMenu.css'
import { Result } from 'antd'

const Dashboard = () => {
	return (
		<>
			<Row gutter={[20, 20]}>
				{DASHBOARD_MENU?.map((item, index) => (
					<Col xs={24} sm={24} md={24} lg={8} xl={8} key={index}>
						<PlainCardComponent>
							<Space size="large">
								<img src={item.icon} alt="icon" style={{ width: 70 }} />
								<div>
									<div>{item.title}</div>
									<div>0 Pelatihan</div>
								</div>
							</Space>
						</PlainCardComponent>
					</Col>
				))}
			</Row>
			<GapComponent height={20} />

			<div className="title">Aktivitas</div>
			<GapComponent height={10} />
			<Card className="plain-card">
				<Result
					status="404"
					title="Belum ada aktivitas yang berjalan"
					subTitle="Semua aktivitas yang belajalan akan muncul di sini."
				/>
			</Card>
		</>
	)
}

export default Dashboard
