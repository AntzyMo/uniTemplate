<template>
  <view class="container">
    <scroll-view id="content" :class="iphoneX?'iphoneX':'h100'" scroll-y>

      <ContentBoxCom class="ContentBoxCom" :data="hasList">
        <view>
          你好

        </view>

      </ContentBoxCom>
    </scroll-view>

    <iphoneXLineCom v-if="iphoneX"></iphoneXLineCom>

  </view>
</template>
<script>
import iphoneXLineCom from '@/components/iphoneXLineCom'
import ContentBoxCom from '@/components/ContentBoxCom'
export default {
  components: { iphoneXLineCom, ContentBoxCom },
  data() {
    return {
      list: []
    }
  },
  computed: {
    iphoneX() {
      return this.getStorage("iphone")
    },

    hasList() {
      return this.list.length
    }
  },

}
</script>

<style lang="scss" scoped>
.container {
  .iphoneX {
    height: calc(100vh - 50rpx);
  }
  .h100 {
    height: 100vh;
  }
}
</style>