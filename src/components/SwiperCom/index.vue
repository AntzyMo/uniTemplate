<template>
  <swiper
    class="swiper"
    :indicator-dots="true"
    :current="0"
    autoplay
    :interval="interval"
  >
    <swiper-item
      v-for="(item, index) in swiperList"
      :key="index"
      @click="imageClickFn(item)"
    >
      <image :src="item[props.image]" mode="aspectFill"></image>
    </swiper-item>
  </swiper>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: (_) => [],
    },

    interval: {
      type: Number,
      default: 2000,
    },

    props: {
      type: Object,
      default: (_) => ({
        image: "image",
      }),
    },
  },
  computed: {
    swiperList() {
      if (this.value.length > 0) {
        if (typeof this.value[0] === "string") {
          return this.value.map((item) => {
            return { image: item };
          });
        } else {
          return this.value;
        }
      }
      return [];
    },
  },
  methods: {
    imageClickFn(item) {
      this.$emit("change", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;

  image {
    width: 100%;
  }
}
</style>
