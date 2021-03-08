<template>
	<view class="content">
		<view class="card">
			<SelectCom v-model="value" :list="list"></SelectCom>
			<SelectCom mode="date" type="month" v-model="dateValue"></SelectCom>

			<TabCom v-model="navVAlue" :props="prpos" :list="clist"></TabCom>
			<BtnCom @click="btnClick">按钮</BtnCom>
			<view>
			<codeCom></codeCom>
			</view>
			<view style="width: 100%; height: 300rpx;">
			
			</view>
		</view>
	</view>
</template>

<script>
	import codeCom from '../../components/CodeCom/index.vue'
	import SwiperCom from '@/components/SwiperCom'
export default {
	components:{codeCom,SwiperCom},
	data() {
		return {
			
			form: {
				input: '11'
			},
			prpos: {
				label: 'name',
				value: 'type'
			},
			navVAlue: 0,
			value: '1',
			dateValue: '2020-11-01',
			title: 'Hello',
			activeType: '3',
			clist: [{ name: '测试', type: '0' }, { name: '测试1', type: '1' }, { name: '测试2', type: '2' }, { name: '测试3', type: '3' }, { name: '测试4', type: '4' }],
			list: [{ label: '测试', value: '0' }, { label: '测试1', value: '1' }, { label: '测试2', value: '2' }, { label: '测试3', value: '3' }, { label: '测试4', value: '4' }]
		};
	},
	onLoad() {},

	methods: {
		bindPickerChange(data) {
			console.log(data, '22');
		},

		btnClick() {
			// this.toRouter({url:'/pages/demo/index',params:{}})
		}
	}
};
</script>

<style>
.content {
	padding: 0 20rpx;
	/* background: #ccc; */
}
</style>
