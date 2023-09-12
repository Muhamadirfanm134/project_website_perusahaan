import { Button, Card, Col, Row } from 'antd'
import React from 'react'
import DetailField from 'src/components/detailField/DetailField'
import { BIO_DUMMY } from '../constants'
import dayjs from 'dayjs'
import DividerComponent from 'src/components/dividerComponent/DividerComponent'
import { Space } from 'antd'
import { EditFilled } from '@ant-design/icons'
import GapComponent from 'src/components/gapComponent/GapComponent'
import { Link } from 'react-router-dom'
import { useAuth } from 'src/providers/AuthProvider'

const Biodata = () => {
	const { user } = useAuth()
	return (
		<>
			<Card>
				<Row justify="space-between" align="middle">
					<Col>
						<h1>Data Diri</h1>
					</Col>
					<Col>
						<Link to={`/user/biodata/${user.email}`}>
							<Button type="primary" icon={<EditFilled />} size="large">
								Edit Biodata
							</Button>
						</Link>
					</Col>
				</Row>

				<DividerComponent gap={15} />
				<Row gutter={[20, 20]}>
					<Col xs={24} sm={24} md={12} lg={12} xl={12}>
						<DetailField label="Nama Lengkap" value={BIO_DUMMY?.nama_lengkap} />
					</Col>
					<Col xs={24} sm={24} md={12} lg={12} xl={12}>
						<DetailField label="NIK" value={BIO_DUMMY?.nik} />
					</Col>
					<Col xs={24} sm={24} md={12} lg={12} xl={12}>
						<DetailField label="Email" value={BIO_DUMMY?.email} />
					</Col>
					<Col xs={24} sm={24} md={12} lg={12} xl={12}>
						<DetailField label="Nomor HP" value={BIO_DUMMY?.no_hp} />
					</Col>
					<Col xs={24} sm={24} md={12} lg={12} xl={12}>
						<DetailField label="Tanggal Lahir" value={dayjs(BIO_DUMMY?.tanggal_lahir).format('DD MMMM YYYY')} />
					</Col>
					<Col xs={24} sm={24} md={12} lg={12} xl={12}>
						<DetailField label="Jenis Kelamin" value={BIO_DUMMY?.jenis_kelamin} />
					</Col>
				</Row>

				<GapComponent height={20} />
				<h1>Domisili</h1>
				<DividerComponent gap={15} />
				<Row gutter={[20, 20]}>
					<Col xs={24} sm={24} md={12} lg={12} xl={12}>
						<DetailField label="Provinsi" value={BIO_DUMMY?.provinsi} />
					</Col>
					<Col xs={24} sm={24} md={12} lg={12} xl={12}>
						<DetailField label="Kota/Kabupaten" value={BIO_DUMMY?.kota} />
					</Col>
					<Col xs={24} sm={24} md={12} lg={12} xl={12}>
						<DetailField label="Kecamatan" value={BIO_DUMMY?.kecamatan} />
					</Col>
					<Col xs={24} sm={24} md={12} lg={12} xl={12}>
						<DetailField label="Kelurahan" value={BIO_DUMMY?.kelurahan} />
					</Col>
				</Row>

				<GapComponent height={20} />
				<h1>Pekerjaan</h1>
				<DividerComponent gap={15} />
				<Row gutter={[20, 20]}>
					<Col xs={24} sm={24} md={12} lg={12} xl={12}>
						<DetailField label="Status" value={BIO_DUMMY?.status} />
					</Col>
					<Col xs={24} sm={24} md={12} lg={12} xl={12}>
						<DetailField label="Pekerjaan" value={BIO_DUMMY?.pekerjaan} />
					</Col>
					<Col xs={24} sm={24} md={12} lg={12} xl={12}>
						<DetailField label="Institusi Tempat Bekerja" value={BIO_DUMMY?.institusi} />
					</Col>
				</Row>
			</Card>
		</>
	)
}

export default Biodata
