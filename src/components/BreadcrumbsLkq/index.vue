<!--
 * @Author: liukai0769 <1017332651@qq.com>
 * @URL: Do not edit
 * @Date: 2021-03-29 11:01:13
 * @LastEditors: liukai0769 <1017332651@qq.com>
 * @LastEditTime: 2021-03-29 11:23:50
 * @FilePath: \\unTemplate\\src\\components\\BreadcrumbsLkq\\index.vue
 * @Description:  
-->
<template>
  <view>
    <scroll-view scroll-x="true" style="width: 750rpx;height: 100rpx;">
        <view class="cate-box">
            <view class="cate-item" v-for="(item,index) in cateArr" :key="item.name" :class="[cateIndex==index?'color':'']" @tap="select(index,item.id)">
                {{item.name}}（{{item.nums}}）
            </view>
        </view>
    </scroll-view>
    <slot></slot>
  </view>
</template>

<script>
  export default {
    name: 'breadcrumbs-lkq',
	data(){
		return{
            cateIndex:0,
            cateId:0
        }
	},
    props: {
      cateArr:{
		  type:Array,
		  default:''
	  }
    },
	methods:{
		select(index,id){
			this.cateIndex = index
			this.cateId = id;
		},
	}
  }
</script>

<style lang="scss">
.cate-box{
    display: flex;
    flex-wrap: nowrap;
    padding-left: 15rpx;
    .cate-item{
        width: auto;
        flex-shrink:0;
        padding: 30rpx 15rpx;
        font-size: 29rpx;
    }
    .color{
        color: #ec6522;
        font-weight: 600;
    }
}
</style>
