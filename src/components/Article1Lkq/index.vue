<!--
 * @Author: liukai0769 <1017332651@qq.com>
 * @URL: Do not edit
 * @Date: 2021-03-25 16:59:20
 * @LastEditors: liukai0769 <1017332651@qq.com>
 * @LastEditTime: 2021-03-25 17:15:59
 * @FilePath: \\unTemplate\\src\\components\\Article1Lkq\\index.vue
 * @Description:  
-->
<template>
  <view class="shop">
  	<zy-title :title="title" :link="link"></zy-title>
  	<view class="list">
  		<view class="item" v-for="(item,index) in shopData" :key="index" @tap="jump(links,{'id':item.id})">
  			<image :src="url + item.image" mode="aspectFill"></image>
  			<view class="info">
  				<view class="title">
  					{{item.name}}
  				</view>
  				<view class="content">{{item.synopsis}}</view>
  			</view>
  		</view>
  	</view>
  </view>
</template>

<script>
  import zyTitle from '../TitleLkq/index.vue';
  export default {
	  components: {
		zyTitle
	  },
    name: 'article1-lkq',
	data(){
		return{
			url:'http://xiaomawangpu.s3.cn-south-1.jdcloud-oss.com'
		}
	},
    props: {
		title:{
			type:String,
			default:''
		},
		shopData:{
			type:Array,
			default:[]
		},
		link:{
			type:String,
			default:''
		},
        links:{
            type:String,
            default:''
        }
    },
	methods:{
		jump(path, parmas) {
			this.toRouter({
                url:path,
                params:parmas
            },"switchTab")
		},
	}
  }
</script>

<style lang="scss">
  .shop{
  	.title-item{
  		padding: 30rpx 30rpx 0 30rpx;
  		display: flex;
  		justify-content: space-between;

  		.all-right{
  			font-size: 27rpx;
  			display: flex;
  			align-items: center;
  		}
  	}
  	.list{
  		padding: 30rpx;
  		display: flex;
  		flex-wrap: wrap;
  		.item{
  			width: 330rpx;
  			max-width: 330rpx;
  			image{
  				width: 100%;
  				height: 240rpx;
  			}
  			.info{
  				.title{
  					font-size: 27rpx;
  					padding: 20rpx 0 0 0;
  				}
  				.content{
  					font-size: 24rpx;
  					color: #999;
  					overflow: hidden;
  					text-overflow: ellipsis;
  					display: -webkit-box;
  					-webkit-box-orient:vertical;
  					-webkit-line-clamp:2;
  					margin: 15rpx 0 20rpx 0;
  					line-height: 45rpx;
  				}
  			}
  		}
  		.item:nth-child(2n+1){
  			margin-right: 15rpx;
  		}
  		.item:nth-child(2n){
  			margin-left: 15rpx;
  		}
  		
  		
  		
  	}
  }
</style>
