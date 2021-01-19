<template>
	<view class="content">
		<view class="card">
			<zSelect v-model="value"  :list="list" ></zSelect>
			<zSelect mode="date" type="month" v-model="dateValue" ></zSelect>
		
			<zNav v-model="navVAlue" :props="prpos" :list="clist"></zNav>
			<zButton @click="value='3'">按钮</zButton>
			
			<z-form-item prop="input" required>
				<input v-model.trim="form.input" />
			</z-form-item>
			
		</view>
	</view>
</template>

<script>
	
export default {
	data() {
		return {
			form:{
				input:'11'
			},
			prpos:{
				label:'name',
				value:'type'
			},
			navVAlue:0,
			value:'1',
			dateValue:'2020-11-01',
			title: 'Hello',
			activeType: '3',
			clist:[{name:'测试',type:'0'},{name:'测试1',type:'1'},{name:'测试2',type:'2'},{name:'测试3',type:'3'},{name:'测试4',type:'4'}],
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
