<!--
 * @Author: liukai0769 <1017332651@qq.com>
 * @URL: Do not edit
 * @Date: 2021-03-25 16:49:36
 * @LastEditors: liukai0769 <1017332651@qq.com>
 * @LastEditTime: 2021-03-25 17:16:19
 * @FilePath: \\unTemplate\\src\\components\\ArticleLkq\\index.vue
 * @Description:  
-->
<template>
  <view class="course">
  	<zy-title :title="title" v-if="mark" :link="link"></zy-title>
  	<view class="course-content">
  		<view class="course-item" v-for="(item,index) in classData" :key="index" @tap="jump(links,{'id':item.id})">
  			<view class="left">
  				<image :src="url + item.image" mode="aspectFill"></image>
  			</view>
  			<view class="right">
  				<view class="name">
  					{{item.name}}
  				</view>
  				<view class="introduce">
  					{{item.synopsis}}
  				</view>
  				<view class="times bottoms">
  					时长：{{item.allTime}}
  				</view>
  				<view class="btn" v-if="ys1">
  					查看
  				</view>
				<view class="xxrs" v-else>
					{{item.nums}}人加入学习
				</view>
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
    name: 'article-lkq',
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
		classData:{
			type:Array,
			default:[]
		},
		mark:{
			type:Boolean,
			default:true
		},
		ys1:{
			type:Boolean,
			default:true
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
		// 路由跳转
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
  .course{
  	width: 100%;
  	
  	.course-content{
  		.course-item{
  			display: flex;
  			margin: 30rpx;
  			.left{
  				width: 190rpx;
  				min-width: 190rpx;
  				height: 250rpx;
  				image{
  					width: 100%;
  					height: 100%;
					border-radius: 15rpx;
  				}
  			}
  			.right{
  				padding-left: 20rpx;
				min-width: 500rpx;
  				.name{
  					font-size: 28.5rpx;
  					padding-bottom: 20rpx;
  				}
  				.introduce{
  					font-size: 25.5rpx;
  					color: #999999;
  					min-height: 64rpx;
  					line-height: 40rpx;
  					margin-bottom: 10rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient:vertical;
					-webkit-line-clamp:2;
  				}
  				.times{
  					font-size: 25.5rpx;
  					color: #999999;
  				}
  				.btn{
  					width: 120rpx;
  					height: 60rpx;
  					display: flex;
  					justify-content: center;
  					align-items: center;
  					background-color: #eaeaea;
  					font-size: 24rpx;
  					color: #ff3c00;
  					border-radius: 50rpx;
  					float: right;
  				}
				.xxrs{
					font-size: 26rpx;
					color: #999;
					text-align: right;
					margin-top: 15rpx;
				}
  				.bottoms{
  					margin-bottom: 10rpx;
  				}
  			}
  		}
  	}
  }
</style>
