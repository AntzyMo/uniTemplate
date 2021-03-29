<template>
  <view class="commitBtn">
    <button
      @click="btnClickFn"
      type="default"
      :disabled="disabled"
      :loading="loading"
      :open-type="openType"
      @getuserinfo="getUserInfo"
      @getphonenumber="getPhoneNumber"
      :style="[style,{ borderRadius: br + 'rpx' }]"
    >
      <slot></slot>
    </button>
  </view>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },

    // 背景颜色
    bg: {
      type: String,
      default: "",
    },

    color: {
      type: String,
      default: "",
    },

    //圆角
    br: {
      type: Number,
      default: 10,
    },

    //开发能力
    openType: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      loading: false,
    };
  },
 

  computed: {
    style() {
      let style = {};

      switch (true) {

        case this.bg != "":
          style.background = this.bg;
          break;

        case this.color != "":
          style.color = this.color;
          break;
      }

      return style;
    },
  },

  methods: {
    btnClickFn() {
      this.$emit("click");
    },

    //获取用户信息
    getUserInfo(data) {
      this.$emit("getUserInfo", data);
    },

    // 获取手机号
    getPhoneNumber(data) {
      console.log(data, "222");
    },
  },
};
</script>

<style lang="scss" scoped>
.commitBtn button {
  &::after {
    border: 2rpx solid transparent;
  }
}
</style>
