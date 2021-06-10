<template>
  <view class="search-box">
    <view class="s-item" :style="style">
      <view class="select-box" @click="selectClickFn" v-if="haveSelect">
        <slot name="prefix">
          <view class="f30 select-txt">{{ selectTxt }}</view>
        </slot>
      </view>
      <view class="search-input">
        <view class="icon-box">
          <image :src="searchIcon" />
        </view>
        <view class="input-box pr" @click="inputClickFn">
          <input
            class="uni-input"
            placeholder-class="c999"
            :value="value"
            :focus="focus"
            :disabled="disabled"
            @focus="focusFn"
            @blur="blurFn"
            @input="inputFn"
            @confirm="confirmFn"
            :confirm-type="confirmType"
            :placeholder="placeholder"
          />
          <image
            @click.stop="resetFn"
            src="../../static/common/icon-del.png"
            class="pa icon-del"
            mode=""
            v-if="!disabled && value"
          ></image>
        </view>
      </view>
      <slot name="suffix"></slot>
    </view>
  </view>
</template>
<script>
export default {
  created() {
    let vm = this;
    vm.updateOpacity();
  },
  computed: {
    style() {
      let vm = this;
      return `background: rgba(255, 255, 255, ${vm.opacity});`;
    },
  },
  data() {
    return {
      searchValue: "",
    };
  },
  props: {
    value: [String, Number],
    focus: {
      type: Boolean,
      default: false,
    },
    opacity: {
      type: [Number, String],
      default: 1,
    },
    confirmType: {
      type: String,
      default: "done",
    },
    placeholder: {
      type: String,
      default: "请输入",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    haveSelect: {
      type: Boolean,
      default: false,
    },
    selectTxt: {
      type: String,
      default: "下拉框",
    },
    searchIcon:{
      type: String,
      default: "../../static/common/icon-search.png",
    }
  },
  methods: {
    /* 更新搜索框透明度（供首页用） */
    updateOpacity() {
      let vm = this;
      // vm.style();
    },

    /* input-聚焦 */
    focusFn(e) {
      this.$emit("focus", true);
      this.$emit("focusFn", e.detail.value);
    },

    /* input-输入 */
    inputFn(e) {
      this.$emit("input", e.detail.value);
      this.$emit("inputFn", e.detail.value);
    },

    /* input-失焦 */
    blurFn(e) {
      this.$emit("focus", false);
      this.$emit("blurFn", e.detail.value);
    },

    /* input-点击软键盘右下角按钮 */
    confirmFn(e) {
      this.$emit("focus", false);

      this.$emit("confirmFn", e);
    },

    /* 点击左边部分 */
    selectClickFn() {
      this.$emit("selectClickFn");
    },

    /* 清空搜索数据 */
    resetFn() {
      this.$emit("input", "");
      this.$emit("resetFn");
    },

    /* 更新数据 */
    updateData(key, val) {
      this[key] = val;
    },
    /* 点击搜索框（前提：input为禁用状态） */
    inputClickFn() {
      if (this.disabled) {
        this.$emit("inputClickFn");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.search-box {
  display: flex;
  align-items: center;
  height: 102rpx;
  justify-content: center;
  .s-item {
    width: calc(100vw - 60rpx);
    height: 90rpx;
    border-radius: 4rpx;
    box-shadow: 0px 0px 20rpx #ebebeb;
    display: flex;
    align-items: center;
    .select-box {
      height: 46rpx;
      border-right: 1rpx solid #f8f8f8;
      .select-txt {
        padding-left: 30rpx;
        padding-right: 18rpx;
        display: flex;
        align-items: center;
        &::after {
          content: "";
          display: inline-flex;
          width: 0;
          height: 0;
          border-right: 6rpx solid transparent;
          border-left: 6rpx solid transparent;
          border-top: 8rpx solid #ccc;
          margin-left: 11rpx;
        }
      }
    }
    .search-input {
      flex: auto;
      display: flex;
      align-items: center;
      height: 46rpx;
      .icon-box {
        flex: 0 0 66rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        image {
          width: 26rpx;
          height: 26rpx;
        }
      }
      .input-box {
        flex: auto;
        display: flex;
        align-items: center;
        input {
          font-size: 28rpx;
          width: calc(100% - 70rpx);
        }
        .icon-del {
          width: 26rpx;
          height: 26rpx;
          right: 10rpx;
          top: 0;
          bottom: 0;
          margin: auto;
          padding: 20rpx;
        }
      }
    }
  }
}
</style>