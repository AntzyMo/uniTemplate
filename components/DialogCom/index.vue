<template>
	<view class="cardDialog" v-if="visible" @touchmove.stop.prevent>
		<view class="card-box" :style="[style]">
			<view class="card-header" >
				<view class="close" v-if="showClose" @click="closeFn"><uniIcon type="close" size="26"></uniIcon></view>
				<view class="title f30" v-if="title || $slots.title">
					<slot name="title">{{ title }}</slot>
				</view>
			</view>

			<view class="card-body"><slot></slot></view>
			<view class="card-footer" v-if="$slots.footer"><slot name="footer"></slot></view>
		</view>
	</view>
</template>

<script>
import uniIcon from '../uni-icons/uni-icons.vue';
export default {
	components: { uniIcon },
	props: {
		visible: {
		   /*  是否打开弹窗  */	
			type: Boolean,
			default: false
		},

		title: {
			/*  标题  */
			type: String,
			default: ''
		},

		width: {
			/*  弹窗宽度  */
			type: [String, Number],
			default: '80'
		},

		showClose: {
			/*  是否显示关闭按钮 */
			type: Boolean,
			default: true
		},
		
		
		
		
	},
	
	computed: {
		style() {
			let style = {};
			if (this.width) {
				style.width = this.width + '%';
			}
			return style;
		}
	},
	
	watch:{
		visible(val){
			if(val){
				this.$emit('open')
			}else{
				this.$emit('close')
			}
		}
	},

	methods: {

		//关闭弹窗
		closeFn() {
			this.$emit('update:visible', false);
			this.closed=true
		}
	}
};
</script>

<style lang="scss" scoped>
.cardDialog {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;

	.card-box {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background: #fff;
		min-height: 600rpx;
		border-radius: 20rpx;

		.card-header {
			margin-bottom: 30rpx;

			.close {
				margin: 20rpx 20rpx 10rpx 0;
				text-align: end;
			}

			.title {
				text-align: center;
			}
		}

		.card-body {
			flex: 1;
		}
		.card-footer {
		}
	}
}
</style>
