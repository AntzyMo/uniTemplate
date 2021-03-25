<!--
 * @Author: liukai0769 <1017332651@qq.com>
 * @URL: Do not edit
 * @Date: 2021-03-25 15:59:20
 * @LastEditors: liukai0769 <1017332651@qq.com>
 * @LastEditTime: 2021-03-25 16:06:06
 * @FilePath: \\unTemplate\\src\\components\\SearchLkq\\index.vue
 * @Description:  
-->
<template>
  <view class="search-box">
  	<view class="search">
  		<text class="iconfont icon-search" style="color: #2cad42;"></text>
  		<input type="text" value="" v-model="val" @confirm="sendOut" placeholder-style="color:#ccc" :placeholder="tishi" />
  	</view>
  </view>
</template>

<script>
  export default {
    name: 'search-lkq',
	data(){
		return{
			val:''
		}
	},
    props: {
      tishi:{
		  type:String,
		  default:''
	  }
    },
	methods:{
		sendOut(){
			this.$emit("inpuChange",this.val)
		}
	}
  }
</script>

<style lang="scss">
  .search-box{
  	/* width: 100%; */
  	height: 95rpx;
  	background: #ededed;
  	margin: 25rpx 30rpx;
  	max-height: 95rpx;
  	overflow: hidden;
  	display: flex;
  	flex-direction: column;
  	/* align-items: center; */
  	justify-content: center;
  	border-radius: 15rpx;
  	.search{
  		padding-left: 20rpx;
  		display: flex;
  		align-items: center;
  		text{
  			color: #2cad42;
  			font-weight: 600;
  			padding-right: 15rpx;
  			font-size: 38rpx;
  		}
  	}
  }
</style>
