<template>
	<view class="content">
		<view class="card"  >
		<!-- <zCard src="/static/logo.png">
			<view slot="title">测试标题</view>
			<view slot="conent">main</view>
			<view slot="footer">底部</view>
		</zCard> -->
		
		<!-- <zNav v-model="activeType" :list='list' @change="change"></zNav>
		<zButton @click="btnClick">按钮</zButton> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				activeType:'3',
				list:[{name:'测试',type:'0'},{name:'测试1',type:'1'},{name:'测试2',type:'2'},{name:'测试3',type:'3'},{name:'测试4',type:'4'}]
			}
		},
		onLoad() {
			
		},
		
		
		methods: {
			change(data){
				console.log(data,'22')
			},
			
			btnClick(){
				
			}
		}
	}
</script>

<style>
	.content{
		padding: 0 20rpx;
		/* background: #ccc; */
	}
</style>
