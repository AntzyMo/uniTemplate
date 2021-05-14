<template>
  <view class="box tcenter f30" @click="sendFn">
    <text :class="colorClass">{{ canSend ? "获取验证码" : time + "s" }}</text>
  </view>
</template>
<script>
export default {
  props: {
    limitTime: {
      type: Number,
      default: 60,
    },
  },
  data() {
    return {
      canSend: true,
      time: 60,
    };
  },
  created() {
    this.time = this.limitTime;
  },
  computed: {
    colorClass() {
      return this.canSend ? "c1890FF" : "c999";
    },
  },
  methods: {
    sendFn() {
      if (!this.canSend) {
        return false;
      }
      this.canSend = false;
      this.$emit("change");
      let timer = setInterval(() => {
        if (this.time > 1 || this.time == this.limitTime) {
          this.time--;
        } else {
          this.time = this.limitTime;
          this.canSend = true;
          clearInterval(timer);
        }
      }, 1000);
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  display: inline-flex;
  .c1890FF {
    color: #1890ff;
  }
}
</style>