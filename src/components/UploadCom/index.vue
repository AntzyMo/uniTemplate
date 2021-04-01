<template>
  <view class="img-box">
    <view class="preview-box" v-for="(item, index) in imgList" :key="index">
      <image
        class="preview-img"
        @click="previewImage([item])"
        :src="item"
        mode="aspectFill"
      ></image>
      <image
        class="close"
        src="../../static/common/icon-del.png"
        @tap="delImg(index)"
      ></image>
    </view>
    <view
      class="choose-img"
      @click="chooseFilesFn"
      v-if="imgList.length < limit"
    >
      <slot >
      <view  class="add">
        <view class="iconAdd">+</view>
        <view class="addTip">上传图片</view>
      </view>
	  </slot>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    beforeUpload: Function,
    value: {
      type: String,
      default: "",
    },
    limit: {
      type: Number,
      default: 10,
    },

    // 上传路径
    action: {
      type: String,
      default: "",
    },

    // 上传的图片字段名称
    name: {
      type: String,
      default: "file",
    }

  },
  data() {
    return {
      uploadImgList: [],
    };
  },


  computed: {
    imgList() {
      if (this.value == null || this.value == "" || this.value == undefined) {
        return [];
      } else {
        return this.value.split(",").map((item) => this.$imgurl + item);
      }
    },
  },
  methods: {
    //删除图片
    delImg(index) {
      this.messageBox({
        title: "删除照片",
        content: "确定要删除这张照片么？",
        cancelText: "取消",
        confirmText: "删除",
      }).then((_) => {
        this.imgList.splice(index, 1);
        this.uploadImgList.splice(index, 1);
      });
    },

    // 选择文件
    chooseFilesFn() {
      //限制上传张数
      let count = this.limit - this.imgList.length;
      this.chooseImageAPi(count, ({ tempFilePaths, tempFiles }) => {
        //上传前判断
        if (this.beforeUpload) {
          //上传前函数
          let beforeUpload = this.beforeUpload(tempFiles);

          if (typeof beforeUpload === "undefined") {
            this.handleUploadImageFn(tempFilePaths);
          }
          return;
        }
        this.handleUploadImageFn(tempFilePaths);
      });
    },

    //处理上传图片
    handleUploadImageFn(tempFilePaths) {
      let action = this.action.includes("http")
        ? this.action
        : this.$imgurl + this.action;

      tempFilePaths.forEach((img) => {
        this.uploadFn(action, img, this.name).then((res) => {
          this.imgList.push(res.fullurl);
          this.uploadImgList.push(res.url);
          this.$emit("input", this.uploadImgList.join(","));
        });
      });
    },

    // 选择图片APi
    chooseImageAPi(count = 10, callback) {
      uni.chooseImage({
        count: count, // 最多可以选择的图片张数 默认9
        sizeType: ["original", "compressed"], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album"], //从相册选择
        success: (res) => {
          if (typeof callback === "function") {
            callback(res);
          }
        },
      });
    },

    // 上传函数
    uploadFn(api, url, name = "file") {
      uni.showLoading({
        title: "上传中",
      });
      return new Promise((resolve, reject) => {
        uni.uploadFile({
          url: api,
          filePath: url,
          name,
          success: (res) => {
            res = JSON.parse(res.data);
            if (res.code === 1) {
              uni.hideLoading();
              this.message("上传成功");
              resolve(res.data);
            } else {
              uni.hideLoading();
              this.message(res.msg);
            }
          },
        });
      }).catch((e) => {
        reject(e);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.img-box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20rpx;
  .choose-img,
  .preview-box {
    width: 108rpx;
    height: 108rpx;
    background: rgba(249, 250, 251, 1);
    border: 1rpx solid rgba(223, 223, 223, 1);
    margin-right: 25rpx;
    margin-bottom: 25rpx;
    position: relative;
    &:nth-child(5n) {
      margin-right: 0;
    }
    .cuIcon-cameraadd {
      font-size: 50rpx;
      color: #dfdfdf;
    }
    .preview-img {
      width: 100%;
      height: 100%;
    }
    .close {
      width: 40rpx;
      height: 40rpx;
      position: absolute;
      top: -10rpx;
      right: -10rpx;
    }
  }
}

.choose-img {
  text-align: center;
  .add {
    font-size: 50rpx;
    color: #999;

    .addTip {
      font-size: 20rpx;
    }
  }
}
</style>
