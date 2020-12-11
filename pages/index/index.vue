<template>
	<view class="content">
		<view class="card"  >
			<zUpload v-model="uploadList" url="/api/upload"></zUpload>
		</view>
	</view>
</template>

<script>
	import zUpload from '../../components/zUpload/zUplaod.vue'
	export default {
			components:{zUpload},
		data() {
			return {
				title: 'Hello',
				uploadList:''
			}
		},
		onLoad() {
		
		},
		methods: {
		
		}
	}
</script>

<style lang="scss">
	.card{
		padding: 0 20rpx;
	}
</style>
