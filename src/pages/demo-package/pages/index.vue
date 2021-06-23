<template>
  <view
    >你好

    <canvas class="canvasCom" canvas-id="my-canvas"></canvas>
  </view>
</template>
<script>
export default {
  data() {
    return {
      deviceWidth: 0,
      imgSrc:'',
    };
  },
  onLoad() {
    this.getDeviceWidth();
  },

  mounted() {
    this.createCanvas();
  },

  methods: {
    getDeviceWidth() {
      uni.getSystemInfo({
        success: (data) => {
          console.log(data, "data");
          this.deviceWidth = data.windowWidth;
        },
      });
    },
 

    rpx2px(rpx) {
      return (this.deviceWidth / 750) * rpx;
    },

    createCanvas() {
      uni.showLoading();
      let ctx = uni.createCanvasContext("my-canvas");

      //设置背景图
      ctx.drawImage(
        "../../../static/logo.png",
        0,
        0,
        this.rpx2px(624),
        this.rpx2px(720)
      );

      
      //延迟渲染
      setTimeout(() => {
        ctx.draw(true, async () => {
            await uni.canvasToTempFilePath({
                canvasId:'my-canvas',
                quality:1,
                fileType:'jpg',
                complete:res=>{
                    this.imgSrc=res.tempFilePath
                    // console.log(res.tempFilePath)
                }
            })
          uni.hideLoading();
        });
      }, 100);
    },
  },
};
</script>