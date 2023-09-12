import { Button, Col, Row, Space } from 'antd'
import { LogoWhite } from 'src/assets'
import '../userLayout.css'
import GapComponent from 'src/components/gapComponent/GapComponent'

const FooterComponent = () => {
	return (
		<Row align="middle" justify="space-around" gutter={[0, 30]}>
			<Col xs={24} sm={24} md={24} lg={8} xl={8}>
				<Space>
					<img src={LogoWhite} alt="footer-logo" className="mn-logo" />
				</Space>
				<div>© 2023 MN Class. All rights reserved.</div>
				<GapComponent height={20} />
				<Space>
					<Button
						icon={<i className="bx bxl-linkedin" />}
						shape="circle"
						type="primary"
						size="large"
						href={'https://www.linkedin.com/company/mn-class'}
						target="_blank"
					/>
					<Button
						icon={<i className="bx bxs-envelope" />}
						shape="circle"
						type="primary"
						size="large"
						href="mailto:muhamadirfan45513@gmail.com"
						target="_blank"
					/>
					<Button
						icon={<i className="bx bxl-instagram-alt" />}
						shape="circle"
						type="primary"
						size="large"
						href={'https://www.instagram.com/mn-class'}
						target="_blank"
					/>
					<Button
						icon={<i className="bx bxl-whatsapp" />}
						shape="circle"
						type="primary"
						size="large"
						href={'https://wa.me/6283871804117?&text=Hai%2C%20Admin%20MN%20Class.'}
						target="_blank"
					/>
				</Space>
			</Col>
			<Col xs={24} sm={24} md={24} lg={8} xl={8}>
				<h1>Contact Us</h1>
				<div>
					<i className="bx-fw bx bxs-buildings" /> MN Class by MNGroup.
				</div>
				<GapComponent height={10} />
				<div>
					<i className="bx-fw bx bxs-envelope" /> muhamadirfan45513@gmail.com
				</div>
			</Col>
		</Row>
	)
}

export default FooterComponent
