import request from '@/utils/request.js'

// 接口示例
export const register = data => request({
	url: '/api/user/register',
	method: 'post',
	data

}).then(res => res.data.data)


