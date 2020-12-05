<template>
	<view class="commitBtn">
		<button 
		@click="btnClick"
		 type="default"
		  :disabled="disabled" 
		  :loading="loading" 
			:open-type="openType"
			@getuserinfo="getuserinfo"
		  :style="[{ background: bg, color: color, borderRadius: br + 'rpx' }]">
			<slot></slot>
		</button>
	</view>
</template>

<script>
export default {
	props: {
		disabled: {
			type: Boolean,
			default: false
		},

		// 背景颜色
		bg: {
			type: String,
			default: '#13187a'
		},

		color: {
			type: String,
			default: '#fff'
		},

		//圆角
		br: {
			type: String,
			default: '10'
		},
		
		//开发能力
		openType:{
			type:String,
			default:''
		}
	},
	data() {
		return {
			loading: false
		};
	},

	methods: {
		btnClick() {
			this.$emit('btnClick');
		},
		
		//获取用户信息
		getuserinfo(data){
			this.$emit('getuserinfo',data)
			}
	}
};
</script>

<style lang="scss">
.commitBtn button {
	&::after {
		border: 2rpx solid transparent;
	}
}
</style>
