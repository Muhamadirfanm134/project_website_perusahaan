import { Card } from 'antd'
import { Space } from 'antd'
import { Menu } from 'antd'
import { Col, Row } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'
import { User } from 'src/assets'
import GapComponent from 'src/components/gapComponent/GapComponent'
import useWindowWidth from 'src/hooks/useWindowWidth'
import { USER_MENU } from 'src/layouts/userLayout/constants'
import { useAuth } from 'src/providers/AuthProvider'
import { userMenuMapping } from 'src/utils/Mapper'

const UserMenu = () => {
	const { menu, username } = useParams()
	const { user } = useAuth()
	const isMobile = useWindowWidth()
	return (
		<>
			<Row gutter={[20, 20]}>
				<Col xs={0} sm={0} md={12} lg={6} xl={6}>
					{!isMobile && (
						<Card style={{ height: '80vh' }}>
							<Menu mode="inline" items={USER_MENU} selectedKeys={menu} />
						</Card>
					)}
				</Col>
				<Col xs={24} sm={24} md={24} lg={18} xl={18}>
					<Card>
						<Space size="large">
							<div>
								<img src={User} alt="user-icon" style={{ width: 100 }} />
							</div>
							<div>
								<div>Selamat datang,</div>
								<div style={{ fontSize: 30, fontWeight: 'bold' }}>{user?.email}</div>
							</div>
						</Space>
					</Card>
					<GapComponent height={20} />
					{userMenuMapping(menu, username)}
				</Col>
			</Row>
		</>
	)
}

export default UserMenu
