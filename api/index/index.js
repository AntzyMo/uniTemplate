import request from '@/utils/request.js'


// 接口请求方式
export function signIn(data) {
	return request({
		url: '/api/user/signIn',
		method: 'post',
		data,

	}).then(res => res.data.data)
}



