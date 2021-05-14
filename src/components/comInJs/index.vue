<template>
    <view v-if="visible" id="fixed-box" class="fixed-box">js调用组件</view>
</template>

<script>
export default {
    data(){
        return {
            visible:true
        }
    },
    methods:{
        closeBox(){
            this.visible=false
        },

         showBox(){
            this.visible=true
        }
    }
}
</script>
<style lang="scss" scoped>
    .fixed-box{
        position: fixed;
        bottom: 20rpx;
        right: 20rpx;
        width: 200rpx;
        height: 200rpx;
        background: skyblue;
    }
</style>