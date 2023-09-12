import { uploaderAPI } from 'src/config/api-service'

export const api = {
	// Image Uploader
	uploader: (body) => {
		return uploaderAPI.post('/dcojljlpw/image/upload', body)
	},
}
