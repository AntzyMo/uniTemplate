<!--
 * @Author: liukai0769 <1017332651@qq.com>
 * @URL: Do not edit
 * @Date: 2021-03-25 16:10:54
 * @LastEditors: liukai0769 <1017332651@qq.com>
 * @LastEditTime: 2021-03-25 16:11:11
 * @FilePath: \\unTemplate\\src\\components\\TitleLkq\\index.vue
 * @Description:  
-->
<template>
  
  <view class="information">
	  <view class="title">
	  	{{title}}
	  </view>
  	<view class="all-right" v-if="mark" @tap="jump(link)">
  		<view>全部</view>
  		<view class="iconfont icon-iconfontyoujiantou-copy-copy-copy-copy"></view>
  	</view>
  </view>
</template>

<script>
  export default {
    name: 'title-lkq',
	data(){
		return{
			
		}
	},
    props: {
		title:{
			type:String,
			default:''
		},
		mark:{
			type:Boolean,
			default:true
		},
		link:{
			type:String,
			default:''
		}
    },
	methods:{
		// 路由跳转
		jump(path, parmas) {
			this.$Router.push({
				path: path,
				query: parmas
			});
		},
	}
  }
</script>

<style lang="scss">
	.information{
		padding: 30rpx 30rpx 0 30rpx;
		display: flex;
		justify-content: space-between;
		.title{
			font-size: 34rpx;
			font-weight: 600;
			position: relative;
			z-index: 10;
		}
		.title:before{
			content: '';
			background: #54bc66;
			position: absolute;
			width: 90rpx;
			height: 10rpx;
			bottom: 7rpx;
			z-index: -10;
		}
		.all-right{
			font-size: 27rpx;
			display: flex;
			align-items: center;
		}
	}
  
</style>
