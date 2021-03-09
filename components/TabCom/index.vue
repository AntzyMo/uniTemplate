<template>
	<scroll-view class="scroll-viewz" scroll-x="true">
		<view class="scrollbox">
			<view class="view1" @click="clickTitle(item, index)" v-for="(item, index) in list" :key="index" :style="[{ marginRight: mr + 'rpx' }]">
				<view class="title" :style="[{ color: activeIndex == item[props.value]? activeColor : color }]">{{ item[props.label] }}</view>

				<view v-if="activeIndex == item[props.value]" class="line"></view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
export default {
	props: {
		value:[Number,String],
		list: {
			type: Array,
			default: _ => []
		},

		
		// 默认字体颜色
		color: {
			type: String,
			default: '#999'
		},

		//选中字体颜色
		activeColor: {
			type: String,
			default: '#00b1ff'
		},

		// margin-right
		mr: {
			type: [String, Boolean],
			default: '16'
		},
		
		props:{
			type:Object,
			default:_=>({
				label:'label',
				value:'value'
			})
		}
	},

	data() {
		return {
			activeIndex: this.value
		};
	},
	watch: {
		value(val) {
			this.activeIndex = val;
			
			for (let item of this.list) {
				if (item[this.props.value] == val) {
					this.$emit('change', item);
					return;
				}
			}
			
			
			
		}
	},
	methods: {
		//点击nav
		clickTitle(item, index) {
			this.activeIndex = item[this.props.value];
			this.$emit('input',item[this.props.value])
		}
	}
};
</script>

<style lang="scss" scoped>
.scroll-viewz {
	padding: 20rpx 0;
	.scrollbox {
		display: flex;
		width: 100%;
		white-space: nowrap;
		.view1 {
			margin-right: 16rpx;
		}
	}

	.title {
		color: #999999;
		font-size: 34rpx;
		margin-bottom: 11rpx;
	}

	.active {
		color: #00b1ff;
	}

	.line {
		width: 44rpx;
		height: 9rpx;
		background: #ffb600;
		border-radius: 14rpx;
	}
}
</style>
