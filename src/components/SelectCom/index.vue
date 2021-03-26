<template>
  <view class="zSelect">
    <!-- 普通选择器 -->
    <view v-if="mode === 'selector'">
      <picker
        :value="index"
        :range="list"
        :disabled="disabled"
        :range-key="props.label"
        :props="props"
        @change="change"
        @cancel="cancel"
      >
        <view class="select_box" @click="handlerOpen">
          <view class="label f30">{{ label }}</view>
          <image
            class="icon down"
            v-if="arrowType == 'down'"
            :class="{ active: open }"
            src="../../static/common/arrow.png"
          ></image>

          <image
            class="icon"
            v-if="arrowType == 'right'"
            :class="{ active: open }"
            src="../../static/common/arrow.png"
          ></image>
        </view>
      </picker>
    </view>

    <!-- 日期选择器 -->
    <view v-if="mode === 'date'">
      <picker
        mode="date"
        :value="dateValue"
        :fields="type"
        :disabled="disabled"
        @change="change"
        @cancel="cancel"
      >
        <view class="select_box" @click="handlerOpen">
          <view class="label f30">{{ date }}</view>
          <image
            class="icon down"
            v-if="arrowType == 'down'"
            :class="{ active: open }"
            src="../../static/common/arrow.png"
          ></image>

          <image
            class="icon "
            v-if="arrowType == 'right'"
            :class="{ active: open }"
            src="../../static/common/arrow.png"
          ></image>
        </view>
      </picker>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    mode: {
      type: String,
      default: "selector",
    },
    disabled: {
      type: Boolean,
      default: false,
    },

    defaultLabel: {
      //占位符
      type: String,
      default: "请选择",
    },

    defaultDate: {
      type: String,
      default: "请选择日期",
    },

    list: {
      type: Array,
      default: (_) => [],
    },

    type: {
      type: String,
      default: "day", // year、month、day
    },

    arrowType: {
      type: String,
      default: "down",
    },

    props: {
      type: Object,
      default: (_) => ({
        label: "label",
        value: "value",
      }),
    },
  },

  computed: {
    label() {
      if (this.value !== "") {
        let name = "";
        this.list.forEach((item, index) => {
          if (item[this.props.value] == this.value) {
            this.index = index;
            name = item[this.props.label];
          }
        });

        return name;
      } else {
        return this.defaultLabel;
      }
    },

    date() {
      if (this.value) {
        this.dateValue = this.value;
        return this.value;
      } else {
        return this.defaultDate;
      }
    },
  },
  data() {
    return {
      index: -1,
      open: false,
      dateValue: "",
      endDate: new Date().getFullYear() + 10 + "-12-31",
    };
  },
  methods: {
    // 处理禁用
    handlerOpen() {
      if (!this.disabled) {
        this.open = true;
      }
    },

    change(e) {
      this.open = false;
      this.$emit("input", this.list[e.detail.value][this.value]);
      if (this.mode == "selector") {
        for (let item of this.list) {
          if (item[this.props.value] == this.list[e.detail.value][this.value]) {
            this.$emit("change", item);
            return;
          }
        }
      }
    },

    // 取消选择或点遮罩层收起 picker 时触发
    cancel(e) {
      this.open = false;
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.zSelect {
  .select_box {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20rpx 0;

    .label {
      flex: 1;
    }

    .icon {
      width: 46rpx;
      height: 46rpx;
      transition: 0.4s;
    }

    .down {
      transform: rotate(90deg);
    }

    .active {
      transform: rotate(90deg);
    }
  }
}
</style>
