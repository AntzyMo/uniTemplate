<template>
  <view class="ContentBoxCom">
    <template v-if="data">
      <slot></slot>
    </template>
    <template v-else>
      <slot name="noData">
        <view class="nodata">暂无数据</view>
      </slot>
    </template>
  </view>
</template>
<script>
export default {
  props: {
     data:{
      type:[Boolean,Number,String],
      default:false
    }
  },
 
};
</script>
<style lang="scss" scoped>
.ContentBoxCom {
  height: 100%;
}
</style>