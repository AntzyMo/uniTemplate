import request from '@/utils/request.js'

	export function login(data) {
		return request({
			url: '/api/user/miniProgramLogin',
			method: 'get',
			data,
			// header:{
			// 	'Authorization':'X-admin-ToKen'
			// }
		}).then(res=>res.data.data)
		
	}
	
	
	