<template>
  <canvas
    class="canvasCom"
    catchlongtap="saveImage"
    canvas-id="my-canvas"
  ></canvas>
</template>
<script>
export default {
  props: {
    //图片
    imgList: {
      type: Array,
      default: [
        "https://wenmingchashan.s3.cn-south-1.jdcloud-oss.com/uploads/20210419/1e22a7565bb22857484d5f6d259a0b56.png",
        "https://wenmingchashan.s3.cn-south-1.jdcloud-oss.com/uploads/20210419/1e22a7565bb22857484d5f6d259a0b56.png",
        "https://wenmingchashan.s3.cn-south-1.jdcloud-oss.com/uploads/20210419/1e22a7565bb22857484d5f6d259a0b56.png",
        "https://wenmingchashan.s3.cn-south-1.jdcloud-oss.com/uploads/20210419/1e22a7565bb22857484d5f6d259a0b56.png",
      ],
    },
  },
  data() {
    return {
      deviceWidth: 0,
    };
  },

  created() {
    this.getDeviceWidth();
  },
  methods: {
    //获取手机屏幕宽度
    getDeviceWidth() {
      uni.getSystemInfo({
        success: (data) => {
          this.deviceWidth = data.windowWidth;
        },
      });
    },

    //计算px
    rpx2px(rpx) {
      return (this.deviceWidth / 750) * rpx;
    },

    //获取图片
    getImageInfo(imgSrc) {
      return new Promise((resolve, reject) => {
        uni.getImageInfo({
          src: imgSrc,
          success: (image) => {
            resolve(image.path);
          },
          fail: (err) => {
            reject(err);
          },
        });
      });
    },

    //解析图片
    handleImg(img = []) {
      return new Promise((reslove, reject) => {
        let imgArray = [];
        img.forEach((item) => imgArray.push(this.getImageInfo(item)));
        return Promise.all(imgArray)
          .then((res) => {
            reslove(res);
          })
          .catch((err) => reject(err));
      });
    },

    // 创建Canvans
    async createCanvas() {
      uni.showLoading();
      let ctx = uni.createCanvasContext("my-canvas", this);
      
      // 图片地址
      let imgPath = await this.handleImg(this.imgList);
      //设置背景图
      ctx.drawImage(imgPath[0], 0, 0, this.rpx2px(624), this.rpx2px(720));

      //绘制头像
      this.circleImg(
        ctx,
        imgPath[1],
        this.rpx2px(30),
        this.rpx2px(30),
        this.rpx2px(40)
      );

      //名字
      ctx.setFontSize(this.rpx2px(24)); //设置标题字体大小
      ctx.setFillStyle("#000"); //设置标题文本颜色
      ctx.font = "normal bold 16px Arial,sans-serif ";
      ctx.fillText("Zbano", this.rpx2px(130), this.rpx2px(60));

      // 分享标题
      // ctx.setFontSize(this.rpx2px(24)); //设置标题字体大小
      ctx.setFillStyle("#2e5900"); //设置标题文本颜色
      ctx.font = "normal bold 14px Arial,sans-serif ";
      ctx.fillText("邀你一起进行助力活动", this.rpx2px(130), this.rpx2px(100));

      // 绘制广告图
      this.drawRoundRectAvatar(
        ctx,
        imgPath[2],
        this.rpx2px(31),
        this.rpx2px(152),
        this.rpx2px(562),
        this.rpx2px(342),
        this.rpx2px(14)
      );

      // 二维码
      ctx.drawImage(
        imgPath[3],
        this.rpx2px(45),
        this.rpx2px(519),
        this.rpx2px(100),
        this.rpx2px(100)
      );

      //延迟渲染
      setTimeout(() => {
        ctx.draw(true, () => {
          uni.hideLoading();
        });
      }, 100);
    },


    //保存图片到相册
    saveImage() {
      console.log(11112233);
      //判断用户授权
      uni.getSetting({
        success(res) {
          if (Object.keys(res.authSetting).length > 0) {
            //判断是否有相册权限
            if (res.authSetting["scope.writePhotosAlbum"] == undefined) {
            } else {
              if (!res.authSetting["scope.writePhotosAlbum"]) {
              }
            }
          } else {
            return;
          }
        },
      });
      uni.canvasToTempFilePath(
        {
          canvasId: "my-canvas",
          quality: 1,
          complete: (res) => {
            uni.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success(res) {
                wx.showToast({
                  title: "已保存到相册",
                  icon: "success",
                });
              },
            });
          },
        },
        this
      );
    },

    //圆角图片
    drawRoundImg(ctx, img, x, y, width, height, radius) {
      console.log("radius", radius);
      ctx.beginPath();
      ctx.save(); // 左上角
      ctx.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 1.5); // 右上角
      ctx.arc(
        x + width - radius,
        y + radius,
        radius,
        Math.PI * 1.5,
        Math.PI * 2
      ); // 右下角
      ctx.arc(
        x + width - radius,
        y + height - radius,
        radius,
        0,
        Math.PI * 0.5
      ); // 左下角
      ctx.arc(x + radius, y + height - radius, radius, Math.PI * 0.5, Math.PI);
      ctx.stroke();
      ctx.clip();
      ctx.drawImage(img, x, y, width, height);
      ctx.restore();
      ctx.closePath();
    },

    //圆角图片
    drawRoundRectAvatar(ctx, imgPath, x, y, w, h, r) {
      ctx.save();
      this._drawRoundRect(ctx, x, y, w, h, r);
      ctx.clip();
      ctx.drawImage(imgPath, x, y, w, h);
      ctx.restore();
    },

    _drawRoundRect(ctx, x, y, w, h, r) {
      ctx.beginPath();
      // 左上角
      ctx.arc(x + r, y + r, r, Math.PI, Math.PI * 1.5);
      // 右上角
      ctx.arc(x + w - r, y + r, r, Math.PI * 1.5, Math.PI * 2);
      // 右下角
      ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * 0.5);
      // 左下角
      ctx.arc(x + r, y + h - r, r, Math.PI * 0.5, Math.PI);
      ctx.closePath();
      // ctx.strokeStyle = '#D8D8D8';
      ctx.fillStyle = "#FFFFFF";
      // ctx.stroke()
      ctx.fill();
    },

    // 生成圆型图
    circleImg(ctx, img, x, y, r) {
      ctx.save();
      var d = 2 * r;
      var cx = x + r;
      var cy = y + r;
      ctx.arc(cx, cy, r, 0, 2 * Math.PI);
      ctx.clip();
      ctx.drawImage(img, x, y, d, d);
      ctx.restore();
    },

    //圆角矩形
    drawRoundRect(ctx, x, y, width, height, radius, color) {
      ctx.save();
      ctx.beginPath();
      ctx.setFillStyle(color);
      ctx.setStrokeStyle(color);
      ctx.setLineJoin("round"); //交点设置成圆角
      ctx.setLineWidth(radius);
      ctx.strokeRect(
        x + radius / 2,
        y + radius / 2,
        width - radius,
        height - radius
      );
      ctx.fillRect(
        x + radius,
        y + radius,
        width - radius * 2,
        height - radius * 2
      );
      ctx.stroke();
      ctx.closePath();
    },
  },
};
</script>
<style lang="scss" scoped>
.canvasCom {
  width: 624rpx;
  height: 720rpx;
}
</style>