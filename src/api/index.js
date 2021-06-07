import request from '@/utils/request.js'

// 接口示例
export const register = data => request({
	url: '/api/user/register',
	method: 'post',
	loading:false,
	data

}).then(res => res.data.data)

