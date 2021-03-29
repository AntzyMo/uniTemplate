<!--
 * @Author: liukai0769 <1017332651@qq.com>
 * @URL: Do not edit
 * @Date: 2021-03-29 11:01:13
 * @LastEditors: liukai0769 <1017332651@qq.com>
 * @LastEditTime: 2021-03-29 11:34:51
 * @FilePath: \\unTemplate\\src\\components\\DaohangLkq\\index.vue
 * @Description:  
-->
<template>
  <view>
    <scroll-view scroll-y="true" scroll-x class="scroll-floor" style="top:0;" :scroll-into-view="scroll_into_view" scroll-with-animation>
        <view class="child-menu">
            <text v-if="tabCurrentIndex !== ''" class="child-menu-active" :style="{transform:'translateX('+child_translateX+'rpx)'}"></text>
            <view class="child-menu-item" :class="tabCurrentIndex == 0 ? 'child-menu-item-active' : ''"
                @click="changeChild(0,'tabChange')" id="child-0">
                <view style="font-size: 26rpx;">全部</view>
            </view>
            <view v-for="(citem,cindex) in cateData" :key="cindex" class="child-menu-item" :class="tabCurrentIndex == cindex + 1 ? 'child-menu-item-active' : ''"
                @click="changeChild(cindex + 1,'tabChange')" :id="'child-'+(cindex + 1)">
                <view style="font-size: 26rpx;">{{citem.name}}</view>
            </view>
        </view>
    </scroll-view>
  </view>
</template>

<script>
  export default {
    name: 'daohang-lkq',
	data(){
		return{
            tabCurrentIndex:0,
            child_translateX:0,
            scroll_into_view:'child-0',
            type:''
        }
	},
    props: {
      cateData:{
		  type:Array,
		  default:[]
	  }
    },
	methods:{
		changeChild(cindex,source){
            this.tabCurrentIndex = cindex;
            this.child_translateX = (76*2)*cindex;
            this.scroll_into_view = 'child-'+ ((cindex <= 2) ? 0 : (cindex-2));
            this.currentPage = 1;
            if(cindex == 0){
                this.type = '';
            }else{
                this.type = this.cateData[cindex-1].id
            }
        },
        
	}
  }
</script>

<style lang="scss">
.scroll-floor{
    white-space: nowrap;
    transition: top .3s linear;
    z-index:1;
}
.child-menu{
    display: flex;
    align-items: flex-start;
    position: relative;
    background-color: white;
    .child-menu-active{
        content: ' ';
        width: 152rpx;
        transition: all .3s linear;
        transform: translateX(0rpx);
        height: 4rpx;
        background-color: #f60;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .child-menu-item{
        background-color: white;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        padding: 20rpx 0;
        color: #717171;
        transition: all .3s linear;
        .icon{
            image{
                width: 40rpx;
                height: 40rpx;
            }
        }
        view{
            width: 152rpx;
        }
        &.child-menu-item-active{
            color:#f60;
            font-weight: 500;
        }
    }
}
</style>
