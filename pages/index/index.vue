<template>
	<view class="content">
		<view class="card">
			<zSelect v-model="value" :list="list" ></zSelect>
			<zSelect mode="date" type="month" v-model="dateValue" ></zSelect>
		
			<zButton @click="value='3'">按钮</zButton>
		</view>
	</view>
</template>

<script>
	
export default {
	data() {
		return {
			
			value:'1',
			dateValue:'2020-11-01',
			title: 'Hello',
			activeType: '3',
			list: [
				{ label: '测试', value: '0' },
				{ label: '测试1', value: '1' },
				{ label: '测试2', value: '2' },
				{ label: '测试3', value: '3' },
				{ label: '测试4', value: '4' },]
		};
	},
	onLoad() {},

	methods: {
		bindPickerChange(data) {
			console.log(data, '22');
		},

		btnClick() {}
	}
};
</script>

<style>
.content {
	padding: 0 20rpx;
	/* background: #ccc; */
}
</style>
