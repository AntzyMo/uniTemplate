<template>
	<view class="commitBtn">
		<button
			@click="btnClick"
			type="default"
			:disabled="disabled"
			:loading="loading"
			:open-type="openType"
			@getuserinfo="getuserinfo"
			@getphonenumber="getphonenumber"
			:style="[{ background: bg, color: color, borderRadius: br + 'rpx' }]"
		>
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
			default: ''
		},

		color: {
			type: String,
			default: ''
		},

		//圆角
		br: {
			type: Number,
			default: 10
		},

		//开发能力
		openType: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			loading: false
		};
	},

	methods: {
		btnClick() {
			this.$emit('click');
		},

		//获取用户信息
		getuserinfo(data) {
			this.$emit('getuserinfo', data);
		},

		// 获取手机号
		getphonenumber(data) {
			console.log(data, '222');
		}
	}
};
</script>

<style lang="scss" scoped>
.commitBtn button {
	&::after {
		border: 2rpx solid transparent;
	}
}
</style>
