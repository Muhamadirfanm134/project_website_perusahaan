import { SaveOutlined } from '@ant-design/icons'
import { Form } from 'antd'
import { Input } from 'antd'
import { Space } from 'antd'
import { Select } from 'antd'
import { DatePicker } from 'antd'
import { Button, Card, Col, Row } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import DividerComponent from 'src/components/dividerComponent/DividerComponent'
import GapComponent from 'src/components/gapComponent/GapComponent'
import { BIO_DUMMY } from '../constants'

const EditBiodata = () => {
	const navigate = useNavigate()
	const onFinish = (value) => {
		console.log(value)
	}
	return (
		<>
			<Card>
				<Form name="edit-biodata" onFinish={onFinish} layout="vertical" initialValues={BIO_DUMMY}>
					<Row justify="space-between" align="middle">
						<Col>
							<h1>Data Diri</h1>
						</Col>
						<Col>
							<Space>
								<Button type="primary" size="large" danger onClick={() => navigate(-1)}>
									Batal
								</Button>
								<Button type="primary" icon={<SaveOutlined />} size="large" htmlType="submit">
									Simpan
								</Button>
							</Space>
						</Col>
					</Row>

					<DividerComponent gap={15} />
					<Row gutter={[20, 20]}>
						<Col xs={24} sm={24} md={12} lg={12} xl={12}>
							<Form.Item
								label="Nama Lengkap"
								name="nama_lengkap"
								rules={[
									{
										required: true,
										message: 'Masukkan nama lengkap anda!',
									},
								]}
							>
								<Input placeholder="Masukkan nama lengkap anda" />
							</Form.Item>
						</Col>
						<Col xs={24} sm={24} md={12} lg={12} xl={12}>
							<Form.Item
								label="NIK"
								name="nik"
								rules={[
									{
										required: true,
										message: 'Masukkan nik anda!',
									},
								]}
							>
								<Input placeholder="Masukkan nik anda" />
							</Form.Item>
						</Col>
						<Col xs={24} sm={24} md={12} lg={12} xl={12}>
							<Form.Item
								label="Email"
								name="email"
								rules={[
									{
										required: true,
										message: 'Masukkan email anda!',
									},
								]}
							>
								<Input placeholder="Masukkan email anda" />
							</Form.Item>
						</Col>
						<Col xs={24} sm={24} md={12} lg={12} xl={12}>
							<Form.Item
								label="No. HP"
								name="no_hp"
								rules={[
									{
										required: true,
										message: 'Masukkan no hp anda!',
									},
								]}
							>
								<Input placeholder="Masukkan no hp anda" />
							</Form.Item>
						</Col>
						<Col xs={24} sm={24} md={12} lg={12} xl={12}>
							<Form.Item
								label="Tanggal Lahir"
								name="tanggal_lahir"
								rules={[
									{
										required: true,
										message: 'Masukkan tanggal lahir anda!',
									},
								]}
							>
								<DatePicker placeholder="Masukkan tanggal lahir anda" style={{ width: '100%' }} />
							</Form.Item>
						</Col>
						<Col xs={24} sm={24} md={12} lg={12} xl={12}>
							<Form.Item
								label="Jenis Kelamin"
								name="jenis_kelamin"
								rules={[
									{
										required: true,
										message: 'Pilih jenis kelamin anda!',
									},
								]}
							>
								<Select
									options={[
										{ label: 'Laki-laki', value: 'Laki-laki' },
										{ label: 'Perempuan', value: 'Perempuan' },
									]}
									placeholder="Pilih jenis kelamin anda"
								/>
							</Form.Item>
						</Col>
					</Row>

					<GapComponent height={20} />
					<h1>Domisili</h1>
					<DividerComponent gap={15} />
					<Row gutter={[20, 20]}>
						<Col xs={24} sm={24} md={12} lg={12} xl={12}>
							<Form.Item
								label="Provinsi"
								name="provinsi"
								rules={[
									{
										required: true,
										message: 'Pilih provinsi anda!',
									},
								]}
							>
								<Select placeholder="Pilih provinsi anda" />
							</Form.Item>
						</Col>
						<Col xs={24} sm={24} md={12} lg={12} xl={12}>
							<Form.Item
								label="Kota/Kabupaten"
								name="kota"
								rules={[
									{
										required: true,
										message: 'Pilih kota/kabupaten anda!',
									},
								]}
							>
								<Select placeholder="Pilih kota/kabupaten anda" />
							</Form.Item>
						</Col>
						<Col xs={24} sm={24} md={12} lg={12} xl={12}>
							<Form.Item
								label="Kecamatan"
								name="kecamatan"
								rules={[
									{
										required: true,
										message: 'Pilih kecamatan anda!',
									},
								]}
							>
								<Select placeholder="Pilih kecamatan anda" />
							</Form.Item>
						</Col>
						<Col xs={24} sm={24} md={12} lg={12} xl={12}>
							<Form.Item
								label="Kelurahan"
								name="kelurahan"
								rules={[
									{
										required: true,
										message: 'Pilih kelurahan anda!',
									},
								]}
							>
								<Select placeholder="Pilih kelurahan anda" />
							</Form.Item>
						</Col>
					</Row>

					<GapComponent height={20} />
					<h1>Pekerjaan</h1>
					<DividerComponent gap={15} />
					<Row gutter={[20, 20]}>
						<Col xs={24} sm={24} md={12} lg={12} xl={12}>
							<Form.Item
								label="Status"
								name="status"
								rules={[
									{
										required: true,
										message: 'Pilih status anda!',
									},
								]}
							>
								<Select
									options={[
										{ label: 'Bekerja', value: 'Bekerja' },
										{ label: 'Tidak Bekerja', value: 'Tidak Bekerja' },
									]}
									placeholder="Pilih status anda"
								/>
							</Form.Item>
						</Col>
						<Col xs={24} sm={24} md={12} lg={12} xl={12}>
							<Form.Item
								label="Pekerjaan"
								name="pekerjaan"
								rules={[
									{
										required: true,
										message: 'Masukkan pekerjaan anda!',
									},
								]}
							>
								<Input placeholder="Masukkan pekerjaan anda" />
							</Form.Item>
						</Col>
						<Col xs={24} sm={24} md={12} lg={12} xl={12}>
							<Form.Item
								label="Institusi Tempat Bekerja"
								name="institusi"
								rules={[
									{
										required: true,
										message: 'Masukkan institusi anda!',
									},
								]}
							>
								<Input placeholder="Masukkan institusi anda" />
							</Form.Item>
						</Col>
					</Row>
				</Form>
			</Card>
		</>
	)
}

export default EditBiodata
