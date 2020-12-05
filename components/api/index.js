import request from '@/utils/request.js'

// 注册
export const register = data => request({
	url: '/api/user/register',
	method: 'post',
	data

}).then(res => res.data.data)



// 登录
export const login = data => request({
	url: '/api/user/login',
	method: 'post',
	data

}).then(res => res.data.data)


//获取验证码
export const smsSend = data => request({
	url: '/api/sms/send',
	method: 'post',
	data

}).then(res => res.data.data)


//校验验证码
export const check = data => request({
	url: '/api/sms/check',
	method: 'post',
	data

}).then(res => res.data.data)


//重置密码
export const resetpwd = data => request({
	url: '/api/user/resetpwd',
	method: 'post',
	data

}).then(res => res.data.data)

//推出登录
export const logout = data => request({
	url: '/api/user/logout',
	method: 'post',
	data

}).then(res => res.data.data)





//-----------------------------------首页

//获取区域
export const getArea = data => request({
	url: '/api/index/getArea',
	method: 'get',
	data

}).then(res => res.data.data)

//获取狮友详情
export const shiinfo = data => request({
	url: '/api/index/info',
	method: 'post',
	data

}).then(res => res.data.data)


//获取行业
export const getIndustry = data => request({
	url: '/api/index/getIndustry',
	method: 'get',
	data

}).then(res => res.data.data)


//获取服务队
export const getService = data => request({
	url: '/api/index/getService',
	method: 'get',
	data

}).then(res => res.data.data)


//获取距离
export const getorderItem = data => request({
	url: '/api/index/orderItem',
	method: 'get',
	data

}).then(res => res.data.data)


//获取首页列表
export const getIndexlsit = data => request({
	url: '/api/index/index',
	method: 'post',
	data

}).then(res => res.data.data)


//获取最近狮友
export const getOne = data => request({
	url: '/api/index/getOne',
	method: 'post',
	data

}).then(res => res.data.data)



//-------------------------------------------狮讯
//获取狮讯分类
export const informationClass = data => request({
	url: '/api/information/informationClass',
	method: 'post',
	data

}).then(res => res.data.data)


//获取狮讯列表
export const information = data => request({
	url: '/api/information/information',
	method: 'post',
	data

}).then(res => res.data.data)

//获取狮讯详情
export const shixungetInfo = data => request({
	url: '/api/information/getInfo',
	method: 'post',
	data

}).then(res => res.data.data)

//-------------------------------------------供需

//获取供需列表
export const gongxulist = data => request({
	url: '/api/supply_demand/information',
	method: 'post',
	data

}).then(res => res.data.data)

//获取供需分类
export const getClass = data => request({
	url: '/api/supply_demand/getClass',
	method: 'post',
	data

}).then(res => res.data.data)

//获取供需详情
export const getInfo = data => request({
	url: '/api/supply_demand/getInfo',
	method: 'post',
	data

}).then(res => res.data.data)

//获取供需详情发送信息
export const send = data => request({
	url: '/api/supply_demand/comment',
	method: 'post',
	data

}).then(res => res.data)

//发布供需
export const supply = data => request({
	url: '/api/supply_demand/supply',
	method: 'post',
	data

}).then(res => res.data)



//-------------------------------------------我的

//企业认证
export const auth = data => request({
	url: '/api/user/auth',
	method: 'post',
	data

}).then(res => res.data.data)

//企业认证详情
export const authlist = data => request({
	url: '/api/user/auth_list',
	method: 'post',
	data

}).then(res => res.data.data)


//我的积分
export const myScore = data => request({
	url: '/api/user/my_score',
	method: 'post',
	data

}).then(res => res.data.data)


//供应/需求
export const myinformation = data => request({
	url: '/api/supply_demand/my_information',
	method: 'post',
	data

}).then(res => res.data.data)


// 商品列表
export const shopList = data => request({
	url: '/api/goods/get_search',
	method: 'post',
	data

}).then(res => res.data.data)

// 商品详情
export const shopinfo = data => request({
	url: '/api/goods/get_goods_details',
	method: 'post',
	data

}).then(res => res.data.data)


// 积分规则
export const getRule = data => request({
	url: '/api/user/integral_rule',
	method: 'post',
	data

}).then(res => res.data.data)


// 获取省市区
export const getarea = data => request({
	url: '/api/goods/area',
	method: 'post',
	data

}).then(res => res.data)

// 意见反馈
export const feedback  = data => request({
	url: '/api/user/auth_list',
	method: 'post',
	data

}).then(res => res.data)

// 我的兑换
export const myconvert  = data => request({
	url: '/api/order/my_convert',
	method: 'post',
	data

}).then(res => res.data.data)



// 收货地址列表
export const addressList  = data => request({
	url: '/api/goods/addres_list',
	method: 'post',
	data

}).then(res => res.data.data)

// 添加收货地址
export const addaAress = data => request({
	url: '/api/goods/add_addres',
	method: 'post',
	data

}).then(res => res.data.data)

// 修改收货地址
export const editaddres = data => request({
	url: '/api/goods/edit_addres',
	method: 'post',
	data

}).then(res => res.data.data)


// 删除收货地址
export const deladdres = data => request({
	url: '/api/goods/del_addres',
	method: 'post',
	data

}).then(res => res.data.data)

// 设置默认收货地址
export const setdefaultaddres = data => request({
	url: '/api/goods/set_default_addres',
	method: 'post',
	data

}).then(res => res.data.data)

// 修改昵称
export const profile = data => request({
	url: '/api/user/profile',
	method: 'post',
	data

}).then(res => res.data.data)

// 立即兑换
export const addorder = data => request({
	url: '/api/order/add_order',
	method: 'post',
	data

}).then(res => res.data.data)

// 自提点
export const storelist = data => request({
	url: '/api/goods/store_list',
	method: 'post',
	data

}).then(res => res.data.data)

// 剩余积分
export const myexchange = data => request({
	url: '/api/order/my_exchange',
	method: 'post',
	data

}).then(res => res.data.data)


// 签到
export const signEveryday = data => request({
	url: '/api/user/signEveryday',
	method: 'post',
	data

}).then(res => res.data.data)

// 签到详情
export const signdetails = data => request({
	url: '/api/user/sign_details',
	method: 'post',
	data

}).then(res => res.data.data)


// 我的积分记录
export const signList = data => request({
	url: '/api/user/signList',
	method: 'post',
	data

}).then(res => res.data.data)
