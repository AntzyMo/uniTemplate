<template>
	<view class="zLsitbox">
		<image class="img" :style="{width:width+'rpx',height:height+'rpx'}" :src="img" mode=""></image>
		<view class="rf">
			<view class="title more-t f30">
				<slot name="title"></slot>
			</view>
			<view class="z_info">
				<slot name="info"></slot>
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
			img:{
				type:String,
				default:''
			},
			width:{
				type:String,
				default:'294'
			},
			height:{
				type:String,
				default:'221'
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
