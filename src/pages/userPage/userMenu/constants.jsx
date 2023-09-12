import dayjs from 'dayjs'
import { Learning, Lulus, TidakLulus } from 'src/assets'

export const DASHBOARD_MENU = [
	{
		title: 'Pelatihan',
		icon: Learning,
	},
	{
		title: 'Lulus',
		icon: Lulus,
	},
	{
		title: 'Tidak Lulus',
		icon: TidakLulus,
	},
]

export const BIO_DUMMY = {
	nama_lengkap: 'Muhamad Irfan Maulana',
	nik: '092029290229020',
	email: 'email@email.com',
	no_hp: '089282928282',
	tanggal_lahir: dayjs(),
	jenis_kelamin: 'Laki-laki',
	provinsi: 'DKI Jakarta',
	kota: 'Jakarta Selatan',
	kecamatan: 'Cilandak',
	kelurahan: 'Gandaria Selatan',
	status: 'Bekerja',
	pekerjaan: 'Programmer',
	institusi: 'Test',
}
