import {
	BookOutlined,
	CalendarOutlined,
	PushpinOutlined,
	ReconciliationOutlined,
	SafetyOutlined,
	TrophyOutlined,
	UserAddOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Button, Card, Col, Row, Space } from 'antd'
import { useParams } from 'react-router-dom'
import GapComponent from 'src/components/gapComponent/GapComponent'
import { TRAINING_LIST } from 'src/pages/landingPage/constants'
import './academyDetail.css'
import { statusMapping } from 'src/utils/Mapper'
import DividerComponent from 'src/components/dividerComponent/DividerComponent'
import DetailInfo from 'src/components/detailInfo/DetailInfo'
import { ShieldChevron } from '@phosphor-icons/react'

const AcademyDetail = () => {
	const { id } = useParams()

	const record = TRAINING_LIST?.find((item) => item.id === Number(id))

	console.log(record)
	return (
		<>
			<div className="half-bg2">
				<div className="glass-style" style={{ padding: 40, width: '70%' }}>
					<div className="news-title" style={{ fontSize: 26 }}>
						<b>{record?.name}</b>
					</div>
					<GapComponent height={20} />
					<Space size="large">
						<Space>
							<CalendarOutlined />
							<div>{record.date}</div>
						</Space>
						<Space>
							<PushpinOutlined />
							<div>{record.place}</div>
						</Space>
						<Space>
							<UserOutlined />
							<div>{record.speaker}</div>
						</Space>
					</Space>
				</div>
			</div>

			<GapComponent height={50} />

			<Row gutter={[30, 20]}>
				<Col xs={24} sm={24} md={18} lg={18} xl={18}>
					<div className="title">Deskripsi Pelatihan</div>

					<GapComponent height={10} />
					<p>{record.description}</p>
				</Col>
				<Col xs={24} sm={24} md={6} lg={6} xl={6}>
					<Card style={{ marginTop: '-25vh' }}>
						<div>Batas Pendaftaran</div>
						<Space>
							<div className="deadline-style">{record?.register_deadline}</div>
							<div>{statusMapping(record.status)}</div>
						</Space>
						<GapComponent height={10} />
						<Button type="primary" block size="large" danger={record?.status === 'Buka' ? false : true}>
							{record?.status === 'Buka' ? 'Daftar Sekarang' : 'Pendaftaran Ditutup'}
						</Button>
						<GapComponent height={30} />
						<DetailInfo icon={<BookOutlined />} field="Metode" value={record?.place} />
						<DividerComponent gap={10} />
						<DetailInfo icon={<ReconciliationOutlined />} field="Alur Seleksi" value={record?.seleksi} />
						<DividerComponent gap={10} />
						<DetailInfo icon={<SafetyOutlined />} field="Level" value={record?.level} />
						<DividerComponent gap={10} />
						<DetailInfo icon={<UserAddOutlined />} field="Kuota Peserta" value={record?.kuota} />
						<DividerComponent gap={10} />
						<DetailInfo icon={<TrophyOutlined />} field="Sertifikasi" value={record?.sertifikasi ? 'Ya' : 'Tidak'} />
						<DividerComponent gap={10} />
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default AcademyDetail
