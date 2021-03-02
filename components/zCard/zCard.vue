<template>
	<view class="zLsitbox">
		<image class="img" :style="{width:imgwidth+'rpx',height:imgheight+'rpx'}" :src="src" mode=""></image>
		<view class="rf">
			<view class="title more-t f30">
				<slot name="title"></slot>
			</view>
			<view class="z_info">
				<slot name="conent"></slot>
			</view>
			
			<view class="footer">
				<slot name="footer"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			src:{
				type:String,
				default:''
			},
			imgwidth:{
				type:Number,
				default:294
			},
			imgheight:{
				type:Number,
				default:221
			}
		}
	}
</script>

<style lang="scss">
	.zLsitbox{
		display: flex;
		.img{
			
			border-radius: 10rpx;
			margin-right: 20rpx;
		}
		
		.rf{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			flex:1;
			
			.title{
				font-weight: bold;
				margin-bottom: 20rpx;
			}
			
			.z_info{
				margin-bottom: 20rpx;
			}
		}
	}
	
</style>
