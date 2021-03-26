<template>
  <view class="tab-plane" v-show="active">
    <slot></slot>
  </view>
</template>
<script>
export default {
  name: "TabPane",
  props: {
    label: String,
    name: String,
  },

  computed: {
    active() {
      return this.$parent.value === this.name
    },
  },
};
</script>
<style lang="scss" scoped>
.tab-plane {
    height: 100%;
}
</style>