<template>
  <view class="ContentBoxCom">
    <template v-if="$slots.default">
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
  props: {},
  created() {
    console.log(this, "this");
  },
};
</script>
<style lang="scss" scoped>
.ContentBoxCom {
  height: 100%;
}
</style>