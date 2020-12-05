<template>
	<view class="img-box">
		<view class="preview-box" v-for="(item, index) in imgList" :key="index">
			<image class="preview-img" :src="item" mode="aspectFill"></image>
			<text class="cuIcon-close" @tap="DelImg(index)">x</text>
		</view>
		<view class="choose-img " @tap="onChooseImg" v-if="imgList.length < 10"><view class="add">+</view></view>
	</view>
</template>

<script>
	import {upload} from '@/api/index.js'
	export default{
		props:{
			value:{
				type:String,
				default:''
			}
		},
		data(){
			return {
				imgList: [],
				uploadImgList: [],
			}
		},
		methods:{
			//删除图片
			DelImg(index) {
				uni.showModal({
					title: '删除照片',
					content: '确定要删除这张照片么？',
					cancelText: '取消',
					confirmText: '删除',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(index, 1);
							this.uploadImgList.splice(index, 1);
						}
					}
				});
			},
			
			//上传图片
			onChooseImg() {
				this.chooseImage().then(res => {
					console.log(res,'res222')
					res.forEach(img => {
						this.uploadImage('/api/common/upload', img).then(res => {
							this.imgList.push(res.fullurl);
							this.uploadImgList.push(res.url);
							
							this.$emit('input',this.uploadImgList.join(','))
							// this.uploadImgList.push(res.url);
						});
					});
				});
			},
				
				
		}
	}
</script>

<style lang="scss">
	.img-box {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 20rpx;
		.choose-img,
		.preview-box {
			width: 108rpx;
			height: 108rpx;
			background: rgba(249, 250, 251, 1);
			border: 1rpx solid rgba(223, 223, 223, 1);
			margin-right: 25rpx;
			margin-bottom: 25rpx;
			position: relative;
			&:nth-child(5n) {
				margin-right: 0;
			}
			.cuIcon-cameraadd {
				font-size: 50rpx;
				color: #dfdfdf;
			}
			.preview-img {
				width: 100%;
				height: 100%;
			}
			.cuIcon-close {
				background: linear-gradient(90deg, rgba(216, 159, 100, 1), rgba(235, 193, 150, 1));
				border-radius: 50%;
				width: 40rpx;
				line-height: 40rpx;
				color: #fff;
				text-align: center;
				position: absolute;
				top: -10rpx;
				right: -10rpx;
				    height: 40rpx;
			}
		}
	}
	
	.choose-img{
		text-align: center;
		.add{
			    font-size: 72rpx;
			    color: #999;
		}
	}
	
	
</style>
