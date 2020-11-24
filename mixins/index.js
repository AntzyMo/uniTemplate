import wxDecode from "@/utils/WXBizDataCrypt";

export default{
	methods:{
		
		//跳转路由
		toRouter(url,type){
			let routerType={
				redirectTo:'redirectTo' //关闭当前页面，跳转到应用内的某个页面
			}
			if(!type){
				uni.navigateTo({
					url
				})
				return 
			}

			uni[routerType[type]]({
				url
			})
		},
		
		//获取节点信息
		getHeight(el,num) {
			uni.createSelectorQuery()
				.in(this)
				.select(el)
				.boundingClientRect(data => {
					console.log(data, 'data.top');
					this.height = this.getSystemInfo() - data.top - num;
				})
				.exec();
		},
		
		//获取屏幕宽度
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
		setStorage(key,value){
			  uni.setStorageSync(key,value)
		},

		//获取本地缓存
		getStorage(key){
			return uni.getStorageSync(key)
		},


		//删除本地缓存
		removeStorage(key){
			uni.removeStorageSync(key);
		},

		//提示框
		message(title){
			uni.showToast({title,icon: 'none'})
		},
		

		//步数解密
		wxDecode(data){
			let pc =new wxDecode(data.appId,data.sessionKey)
			let val=pc.decryptData(data.encryptedData,data.iv)
			return val
		}

	}
}