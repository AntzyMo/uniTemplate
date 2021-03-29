<template>
  <view class="tab-box-com">
    <view class="tab-box-com-header">
      <!-- 菜单 -->
      <scroll-view scroll-x class="scroll-box">
        <view class="tab-nav-box">
          <view
            class="tab-nav"
            v-for="item in tabList"
            :key="item.name"
            @click="tabNavClickFn(item)"
          >
            <view class="nav-name f32" :class="[tabNavActiveStyle(item)]">{{
              item.label
            }}</view>
          </view>
        </view>
      </scroll-view>
    </view>
    <view class="tab-box-com-body">
      <slot></slot>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    value: String,
  },

  data() {
    return {
      tabList: [],
    };
  },

  mounted() {
    this.handleTabNavList();
  },

  computed: {
    //标签栏选中状态
    tabNavActiveStyle() {
      return (item) => {
        return item.name === this.value ? "tab-nav-active" : "";
      };
    },
  },

  methods: {
    //处理导航栏
    handleTabNavList(tabList = []) {
      this.$children.forEach((item) => {
        if (item.$options.name === "TabPane") {
          tabList.push({
            label: item.label,
            name: item.name,
          });
        }
      });
      this.tabList = tabList;
    },

    // 点击标签栏事件
    tabNavClickFn(item) {
      this.$emit("input", item.name);
      this.$emit("tab-click", item);
    },
  },
};
</script>
<style lang="scss" scoped>
.tab-box-com {
	width: 100%;

	.tab-box-com-header {
		border-bottom: 10rpx solid #f6f6f6;
		margin-bottom: 25rpx;

		.scroll-box {
			width: 100%;
			height: 100%;
			background: #fff;

			.tab-nav-box {
				width: 100%;
				display: flex;
				white-space: nowrap;

				.tab-nav {
					height: 64rpx;
					padding: 0 20rpx;
					text-align: center;

					.nav-name {
						min-width: 100rpx;
						height: 100%;
					}
				}

				.tab-nav-active {
					color: #1890ff;
					position: relative;
					height: 100%;
          
					&:after {
						content: '';
						background: #1890ff;
						position: absolute;
						bottom: 0;
						left: 50%;
						transform: translateX(-50%);
						height: 7rpx;
						width: 50%;
						border-radius: 38rpx;
					}
				}
			}
		}
	}
}

</style>