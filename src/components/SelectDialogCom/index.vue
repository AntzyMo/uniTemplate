<template>
  <view class="cardDialog" v-if="visible" @touchmove.stop.prevent>
    <view class="content">
      <view class="c-header">
        <view class="flex1"
          ><view class="close" @click="closeDialog">取消</view></view
        >
        <view class="flex1"
          ><view class="title">{{ title }}</view></view
        >
        <view class="flex1"><view class="close"></view></view>
      </view>

      <view class="c-content">
        <scroll-view
          class="scroll-view"
          scroll-y
          :scroll-into-view="scrollToName"
        >
          <view
            class="item"
            :class="[activeClass(index)]"
            v-for="(item, index) in list"
            :key="index"
            :id="'item' + index"
            @click="handleRow(item, index)"
            >{{ item[props.label] }}</view
          >
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    visible: {
      type: Boolean,
      default: false,
    },

    title: {
      type: String,
      default: "选择区号",
    },

    props: {
      type: Object,
      default: (_) => ({
        label: "label",
        value: "value",
      }),
    },

    list: {
      type: Array,
      default: (_) => [
        { label: "中国大陆 +86", value: "+86" },
        { label: "中国大陆 +87", value: "+87" },
        { label: "中国大陆 +88", value: "+88" },
        { label: "中国大陆 +86", value: "4" },
        { label: "中国大陆 +80", value: "5" },
        { label: "中国大陆 +86", value: "6" },
        { label: "中国大陆 +86", value: "7" },
        { label: "中国大陆 +86", value: "8" },
      ],
    },
  },
  data() {
    return {
      index: -1,
      scrollToName: "", //滚动到的id
    };
  },

  computed: {
    activeClass() {
      return (index) => {
        if (this.index === -1) return;
        return this.index == index ? "act" : "";
      };
    },
  },

  watch: {
    visible(val) {
      if (val && this.index != -1) {
        this.scrollToName = "item" + this.index;
        return;
      }
      this.scrollToName = "item0";
    },
  },

  methods: {
    //点击行
    handleRow(row, index) {
      console.log(row, "r22ow");
      this.index = index;
      this.$emit("input", row[this.props.value]);
      this.$emit("change", row);
      this.$emit("update:visible", false);
    },

    //关闭弹窗
    closeDialog() {
      this.$emit("update:visible", false);
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.cardDialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
  transition: .2s;

  .content {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    .c-header {
      background: #f7f7f7;
      height: 90rpx;
      display: flex;
      align-items: center;

      .flex1 {
        flex: 1;
      }

      .close {
        margin-left: 30rpx;
        font-size: 28rpx;
        color: #1890ff;
      }

      .title {
        text-align: center;
        font-size: 30rpx;
      }
    }

    .c-content {
      .scroll-view {
        height: 364rpx;
        background: #fff;
      }

      .item {
        height: 90rpx;
        line-height: 90rpx;
        text-align: center;
        font-size: 28rpx;
        background: #fff;
        color: #333;
        border-bottom: 2rpx solid #dcdcdc;
      }

      .act {
        color: #1890ff;
      }
    }
  }
}
</style>
