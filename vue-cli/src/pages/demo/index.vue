<template>
    <view @click="toRouter">demo</view>
</template>
<script>
export default {
    methods: {
       toRouter(){
				uni.navigateTo({
					url:'/pages/demo-packeg/demo/index'
				})
			}
    }
}
</script>