import { Result } from 'antd'
import { Card } from 'antd'
import React from 'react'

const Pelatihan = () => {
	return (
		<>
			<Card className="plain-card">
				<Result
					status="404"
					title="Belum ada riwayat pelatihan"
					subTitle="Semua riwayat pelatihan akan muncul di sini."
				/>
			</Card>
		</>
	)
}

export default Pelatihan
