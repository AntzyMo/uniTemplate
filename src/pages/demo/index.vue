<template>
  <view>
    <btnCom
      class="mb20"
      @click="toRouter({ url: '/pages/demo-package/pages/index',params:{name:1,name2:2} }) "
      >进入分包</btnCom
    >
    <view class="mb20">
      <view>{{ value.name2 }}</view>
      <btnCom @click="setSeeion">设置缓存</btnCom>
    </view>

    <view class="f30 c1890ff">ContentBoxCom组件</view>
    <view class="cont">
      <ContentBoxCom class="ContentBoxCom"></ContentBoxCom>
    </view>

          <view class="mb20 c1890ff" @click="createCanvas">生成海报</view>
      <CanvansCom ref="CanvansCom"></CanvansCom>



  </view>
</template>

<script>
import SwiperCom from "@/components/SwiperCom";
import ContentBoxCom from "@/components/ContentBoxCom";
import CanvansCom from "@/components/CanvansCom";

export default {
  components: {
    ContentBoxCom,
    SwiperCom,
    CanvansCom
  },

  data() {
    return {
      value: this.getStorage("valww"),
   
    };
  },

  watch: {
    value(val) {
      console.log(val, "vla");
      if (val) {
        this.setStorage("valww", val);
      }
    },
  },

  methods: {

    createCanvas(){
      console.log(this.$refs.CanvansCom,'this.$refs.CanvansCom')
      this.$refs.CanvansCom.createCanvas()
    },
   
    setSeeion() {
      this.value = { name: 1, name2: ++this.value.name2 };
      //   this.getStorage("valww", 222);
    }

  },
};
</script>

<style lang="scss" scoped>
.cont {
  width: 100%;
  border: 2rpx solid #000;
  height: 400rpx;

  .ContentBoxCom {
    height: 100%;

    // &>view{
    //   height: 100%;
    // }
  }
}

</style>
