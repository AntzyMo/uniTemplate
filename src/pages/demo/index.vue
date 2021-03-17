<template>
  <view>
    <btnCom
      class="mb20"
      @click="toRouter({ url: '/pages/demo-package/pages/index' })"
      >进入分包</btnCom
    >

    <view>
      <view>{{ value }}</view>
      <btnCom @click="setSeeion">设置缓存</btnCom>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
    };
  },

    computed:{
  	  value:{
  		 get(){
			  return  this.getStorage("valww")
		   },

		   set(val){
			   console.log(val,222333)
			   this.setStorage("valww",val)
			   return val
		   }
  	  }
    },
//   watch: {
//     value(val) {
//       console.log(val, "vla");
//       if (val) {
//         this.setStorage("valww", val);
//       }
//     },
//   },

  methods: {
    setSeeion() {
      this.value = {name:1,name2:2};
      //   this.getStorage("valww", 222);
    },
  },
};
</script>

<style>
</style>
