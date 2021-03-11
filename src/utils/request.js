import {baserul} from './url.js'
/**	
 * 全局默认配置
 * */
const baseDefault = {
	url:baserul,
	header: {
		// 'content-type':'application/json',
		'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',

	}
}

/**	
 * 封装uni请求
 * @params {boolean} publicPath     使用绝对路径
 * @params {string} method          请求方式 默认get请求 小写
 * @params {object} data            请求参数
 * @params {object} header          配置请求头
 * */
function request(Object) {

	return new Promise((resolve, reject) => {
		
		if(Object.loading){
			uni.showLoading({mask:true})
		}

		uni.request({
			url: Object.publicPath ? Object.url : (baseDefault.url + Object.url),
			method: Object.method.toUpperCase() || 'GET',
			data: {...Object.data ,token:uni.getStorageSync('token')}|| {},
			header: {
				// 'Authorization': uni.getStorageSync('token') || 'X-wx-ToKen',
				...baseDefault.header,
				...Object.header
			},
			success(res) {
				uni.hideLoading()
			

				// console.log(res)
				let {
					code,
					msg,
					data
				} = res.data

				switch (code) {
					case 1:
						resolve(res)
						break;

					case 401:

						uni.showToast({
							title: '请登录后操作',
							icon: 'none'
						})

						setTimeout(_ => {
							uni.reLaunch({
								url: '/pages/welcome/welcome'
							});
							uni.setStorageSync('token', '')
						}, 500)

						break;



					default:
						uni.showToast({
							title: msg,
							icon: 'none'
						})
						reject(msg)
						break;
				}

			},

			fail(err) {
				uni.hideLoading()
				

				uni.showToast({
					title: '网络出现问题...',
					icon: 'none'
				})


				reject(err)
			}
		});
	})
}

export default request
