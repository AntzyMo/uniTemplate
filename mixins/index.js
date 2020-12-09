import wxDecode from "@/utils/WXBizDataCrypt";
import * as utils from '@/utils'
import {
	baserul
} from '@/utils/url'
export default {
	methods: {

		//跳转路由
		toRouter(data, type) {
			let routerType = {
				redirectTo: 'redirectTo', //关闭当前页面，跳转到应用内的某个页面
				reLaunch: 'reLaunch', //关闭所有页面，打开到应用内的某个页面。
				switchTab: 'switchTab', //关闭其他所有非 tabBar 页面,跳转到 tabBar 页面

			}

			let url = utils.transParams(data)
			console.log(url, 'ruk')

			if (!type) {
				uni.navigateTo({
					url
				})
				return
			}

			uni[routerType[type]]({
				url
			})
		},

		//返回上一页
		goBack() {
			wx.navigateBack({
				delta: 1
			})
		},

		//获取节点高度
		getHeight(el, num) {
			uni.createSelectorQuery()
				.in(this)
				.select(el)
				.boundingClientRect(data => {
					console.log(data, 'data.top');
					return this.getSystemInfo() - data.top - num;
				})
				.exec();
		},

		//获取屏幕高度
		getSystemInfo() {
			let num = null;
			uni.getSystemInfo({
				success(data) {
					num = data.windowHeight;
				}
			});

			return num;
		},

		//设置本地缓存
		setStorage(key, value) {
			uni.setStorageSync(key, value)
		},

		//获取本地缓存
		getStorage(key) {
			return uni.getStorageSync(key)
		},


		//删除本地缓存
		removeStorage(key) {
			uni.removeStorageSync(key);
		},

		//提示框
		message(title) {
			uni.showToast({
				title,
				icon: 'none'
			})
		},

		//打电话
		callPhone(phoneNumber) {
			uni.makePhoneCall({
				phoneNumber
			})
		},

		// 打开地图-用于导航
		openLocation(longitude, latitude, name = "快创科技", address = '1111111111111') {
			uni.openLocation({
				longitude: longitude * 1, // 经度
				latitude: latitude * 1, // 纬度
				name,
				address
			})
		},

		// 打开地图-用于搜索地址，选择位置
		searchLocation(longitude, latitude) {
			return new Promise((resolve, reject) => {

				uni.chooseLocation({
					longitude, // 经度
					latitude, // 纬度
					success: res => {
						resolve(res)
					}
				})
			})
		},


		// 图片处理-选择图片
		chooseImage(count = 1) {
			return new Promise((resolve, reject) => {
				uni.chooseImage({
					count: count, // 最多可以选择的图片张数 默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: res => {
						resolve(res.tempFilePaths);
					}
				});
			}).catch(e => {
				reject(e)
			})
		},

		// 图片处理-上传图片
		uploadImage(api, url) {
			uni.showLoading({
				title: '上传中'
			});
			return new Promise((resolve, reject) => {
				uni.uploadFile({
					url: baserul + api,
					filePath: url,
					name: 'file',
					success: res => {
						res = JSON.parse(res.data);
						if (res.code === 1) {
							uni.hideLoading()
							uni.showToast({
								title: '上传成功',
								icon: 'none'
							});
							resolve(res.data)
						} else {
							uni.hideLoading()
							uni.showModal({
								title: '上传失败',
								content: res.msg
							});
						}
					}
				});
			}).catch(e => {
				reject(e)
			})
		},

		// 图片处理-预览图片
		previewImage(urls = [], current = 0) {
			uni.previewImage({
				urls: urls,
				current: current,
				indicator: 'default',
				loop: true,
				fail(err) {
					console.log('previewImage出错', urls, err)
				},
			})
		},

		// 图片处理-获取图片信息
		getImageInfo(src = '') {
			return new Promise((resolve, reject) => {
				uni.getImageInfo({
					src: src,
					success: (image) => {
						resolve(image)
					},
					fail(err) {
						console.log('getImageInfo出错', src, err)
					},
				})
			}).catch(e => {
				reject(e)
			})

		},



		// 微信登录
		wxLogin() {
			return new Promise((resolve, reject) => {
				uni.login({
					provider: 'weixin',
					success: data => {
						resolve(data)
					}
				});
			})

		},

		// 获取位置
		getLocation(name) {
			return new Promise((resolve, reject) => {
				uni.authorize({
					scope: 'scope.userLocation',
					success: res => {
						uni.getLocation({
							type: 'gcj02',
							success: res => {
								resolve(res)
							}
						});
					},

					fail: err => {
						this.message('请点击右上角...进行授权')
					}
				})
			})

		},




		//判断是否为空
		isNull(name, tipMsg) {

			if (!name) {
				console.log(23232)
				this.message(tipMsg)
				return true
			} else {
				return false
			}
		},

		//时间戳转日期格式
		parseTime(date, format = '{y}-{m}-{d}') {
			return utils.parseTime(date, format)
		},


		//步数解密
		wxDecode(data) {
			let pc = new wxDecode(data.appId, data.sessionKey)
			let val = pc.decryptData(data.encryptedData, data.iv)
			return val
		}

	}
}
