<template>
	<view class="zSelect">
		<!-- 普通选择器 -->
		<view v-if="mode === 'selector'">
			<picker :value="index" :range="list" :disabled="disabled" :range-key="props.label" :props="props" @change="change" @cancel="cancel">
				<view class="select_box" @click="open = true">
					<view class="label f30">{{ label }}</view>
					<uniIcon class="icon" :class="{ active: open }" type="arrowdown" size="24"></uniIcon>
				</view>
			</picker>
		</view>

		<!-- 日期选择器 -->
		<view v-if="mode === 'date'">
			<picker mode="date" :value="dateValue" :fields="type" :disabled="disabled" @change="change" @cancel="cancel">
				<view class="select_box" @click="open = true">
					<view class="label f30">{{ date }}</view>
					<uniIcon class="icon" :class="{ active: open }" type="arrowdown" size="24"></uniIcon>
				</view>
			</picker>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		value: [String, Number],
		mode: {
			type: String,
			default: 'selector'
		},
		disabled: {
			type: Boolean,
			default: false
		},

		defaultLabel: {
			//占位符
			type: String,
			default: '请选择'
		},

		defaultDate: {
			type: String,
			default: '请选择日期'
		},

		list: {
			type: Array,
			default: _ => []
		},

		type: {
			type: String,
			default: 'day' // year、month、day
		},

		props: {
			type: Object,
			default: {
				label: 'label',
				value: 'value'
			}
		}
	},

	computed: {
		label() {
			if (this.value !== '') {
				let name = '';
				this.list.forEach((item, index) => {
					if (item[this.props.value] == this.value) {
						this.index = index;
						name = item[this.props.label];
					}
				});

				return name;
			} else {
				return this.defaultLabel;
			}
		},

		date() {
			if (this.value) {
				this.dateValue=this.value
				return this.value;
			} else {
				return this.defaultDate;
			}
		}
	},
	data() {
		return {
			index: -1,
			open: false,
			dateValue: '',
			endDate: new Date().getFullYear() + 10 + '-12-31'
		};
	},
	methods: {
		change(e) {
			this.open = false;
			this.$emit('input', e.detail.value);
			if (this.model == 'selector') {
				for (let item of this.list) {
					if (item[this.props.value] == e.detail.value) {
						this.$emit('change', item);
						return;
					}
				}
			}
		},

		// 取消选择或点遮罩层收起 picker 时触发
		cancel(e) {
			this.open = false;
			this.$emit('close');
		}
	}
};
</script>

<style lang="scss">
.zSelect {
	.select_box {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 20rpx 0;

		.label {
			flex: 1;
		}

		.icon {
			transition: 0.4s;
		}

		.active {
			transform: rotate(-178deg);
		}
	}
}
</style>
