<template>
	<view class="hongbaoDialog" v-if="isselect">
		<view class="selectBox">
			<!-- <image v-if="openMoney" class="hongbaoImg" src="/static/hongbaoopen.png" mode=""></image> -->
			<view v-if="openMoney" class="homebaoopen">
				<view v-if="showRmb" class="num">
					
						<slot ></slot>
						<text  class="rmb">元</text>

				</view>
				
				<view v-else class="noMoney"><slot ></slot></view>
			</view>
			<!-- <image v-else class="hongbaoImg" src="/static/hongbao.png" mode=""></image> -->

			<view v-else class="hongbaoImg"></view>

			<button plain class="clickBtn" @click="getMoney"></button>
		</view>
		<view class="closeBtn"><uniIcon @click="closeDialog" color="#fff" type="clear" size="30"></uniIcon></view>
	</view>
</template>

<script>
import uniIcon from '@/components/uni-icons/uni-icons.vue';

export default {
	components: { uniIcon },
	props: {
		isSelect:{
			type:Boolean,
			default:false
		},
		showRmb:{
			type:Boolean,
			default:true
		}
	},
	data() {
		return {
			
			openMoney: false
		};
	},
	
	computed:{
		isselect:{
			get(val){
				return this.isSelect
			},
			set(val){
				this.isSelect=val
				return val
			}
		}
	},

	
	methods: {


		//打开弹窗
		init() {
			this.isselect = true;
			this.$emit('open', true);
		},

		//点击领取
		getMoney() {
			if (!this.openMoney) {
				this.openMoney = true;
				return;
			}

			this.isselect = false;
		},

		//关闭弹窗
		closeDialog() {
			this.isselect = false;
			console.log(this.isselect,'issrere')
			this.$emit('close');
		}
	}
};
</script>

<style lang="scss">
.hongbaoDialog {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 9999;
	padding: 0 20rpx;

	background-color: rgba(0, 0, 0, 0.5);

	.selectBox {
		width: 100%;
		margin-top: 43%;
		margin-left: 43rpx;
		text-align: center;
		margin-bottom: 30rpx;
		position: relative;

		.hongbaoImg {
			width: 550rpx;
			height: 538rpx;
				margin-left: 83rpx;
				background: url(https://dgybjbx.s3.cn-south-1.jdcloud-oss.com/wx/hongbao.png);
			background-size: 100% 100%;
		}

		.homebaoopen {
			margin-left: 83rpx;
			position: relative;
			width: 550rpx;
			height: 538rpx;
				background: url(https://dgybjbx.s3.cn-south-1.jdcloud-oss.com/wx/hongbaoopen.png);
			background-size: 100% 100%;

			.num {
				position: absolute;
				top: 21%;
				left: 23%;
				font-size: 78rpx;

				font-weight: bold;
				color: #be4557;

				.rmb {
					margin-left: 10rpx;
					font-size: 45rpx;
				}
				
			
			}
			
			.noMoney{
				position: absolute;
				top: 19%;
				    left: 12%;
				    font-size: 72rpx;
					font-weight: bold;
					color: #be4557;
			}
		}
	}

	.clickBtn {
		width: 318rpx;
		height: 82rpx;
		position: absolute;
		bottom: 92rpx;
		left: 134rpx;
		border: none;
	}

	.closeBtn {
		flex: 1;
		text-align: center;
	}
	
	
}
</style>
