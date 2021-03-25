<template>
  <view>
    <btnCom
      class="mb20"
      @click="toRouter({ url: '/pages/demo-package/pages/index' })"
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
  

  </view>
</template>

<script>
import ContentBoxCom from '@/components/ContentBoxCom'
export default {
  components: {
    ContentBoxCom
  },

  data() {
    return {
      value:this.getStorage("valww")
    };
  },

    // computed:{
  	//   value:{
  	// 	 get(){
		// 	  return  this.getStorage("valww")
		//    },

		//    set(val){
		// 	   console.log(val,222333)
		// 	   this.setStorage("valww",val)
		// 	   return val
		//    }
  	//   }
    // },
  watch: {
    value(val) {
      console.log(val, "vla");
      if (val) {
        this.setStorage("valww", val);
      }
    },
  },

  methods: {
    setSeeion() {
      this.value = {name:1,name2:++this.value.name2};
      //   this.getStorage("valww", 222);
    },
  },
};
</script>

<style lang="scss" scoped>
.cont{
  width: 100%;
  border:2rpx solid #000;
  height: 400rpx;

  .ContentBoxCom{
    height: 100%;

    // &>view{
    //   height: 100%;
    // }
  }
}
</style>
