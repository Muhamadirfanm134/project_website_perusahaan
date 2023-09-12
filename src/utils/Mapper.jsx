import { Tag } from 'antd'
import { ASN, Leader, LulusanBaru, Mahasiswa, Profesional, Vokasi, Wirausaha } from 'src/assets'
import Biodata from 'src/pages/userPage/userMenu/components/Biodata'
import Dashboard from 'src/pages/userPage/userMenu/components/Dashboard'
import EditBiodata from 'src/pages/userPage/userMenu/components/EditBiodata'
import Pelatihan from 'src/pages/userPage/userMenu/components/Pelatihan'
import Settings from 'src/pages/userPage/userMenu/components/Settings'

export const statusMapping = (status) => {
	const mapper = {
		Buka: <Tag color="#12BB82">Buka</Tag>,
		Tutup: <Tag color="#DF4D6E">Tutup</Tag>,
	}

	return mapper[status] || <Tag>-</Tag>
}

export const categoryMapping = (category) => {
	const mapper = {
		'lulusan-baru': { wording: 'Lulusan Baru', subWording: 'Fresh Graduate', icon: LulusanBaru },
		mahasiswa: { wording: 'Mahasiswa', subWording: 'Under Graduate', icon: Mahasiswa },
		profesional: { wording: 'Profesional', subWording: 'Pekerja Profesional', icon: Profesional },
		vokasi: { wording: 'Vokasi', subWording: 'Lulusan Vokasi', icon: Vokasi },
		wirausaha: { wording: 'Wirausaha', subWording: 'Wirausaha dan UMKM', icon: Wirausaha },
		ASN: { wording: 'Aparatur Sipil Negara', subWording: 'Governance Transformation', icon: ASN },
		leadership: { wording: 'Leadership', subWording: 'Pemimpin Digital', icon: Leader },
	}

	return mapper[category] || '-'
}

export const userMenuMapping = (menu, username) => {
	const mapper = {
		dashboard: <Dashboard />,
		pelatihan: <Pelatihan />,
		biodata: <Biodata />,
		settings: <Settings />,
	}

	return username ? <EditBiodata /> : mapper[menu]
}
