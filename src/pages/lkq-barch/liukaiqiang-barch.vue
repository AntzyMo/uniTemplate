<!--
 * @Author: liukai0769 <1017332651@qq.com>
 * @URL: Do not edit
 * @Date: 2021-03-25 15:29:44
 * @LastEditors: liukai0769 <1017332651@qq.com>
 * @LastEditTime: 2021-03-29 11:30:50
 * @FilePath: \\unTemplate\\src\\pages\\lkq-barch\\liukaiqiang-barch.vue
 * @Description:  
-->
<template>
  <view class="content">
      <search-lkq :tishi="tishi" @inpuChange="sendOut"></search-lkq>
      <title-lkq :title="title" :mark="mark" :link="link"></title-lkq>
      <article-lkq :title="title" :mark="mark1" :classData="classData" :link="link" :links="links"></article-lkq>
      <article1-lkq :title="title" :mark="mark1" :shopData="shopData" :link="link" :links="links"></article1-lkq>
      <breadcrumbs-lkq :cateArr="cateArr"></breadcrumbs-lkq>
      <daohang-lkq :cateData="cateData"></daohang-lkq>
  </view>
</template>

<script>
import searchLkq from "@/components/SearchLkq/index.vue";
import titleLkq from "@/components/TitleLkq/index.vue";
import articleLkq from "@/components/ArticleLkq/index.vue";
import article1Lkq from "@/components/Article1Lkq/index.vue";
import breadcrumbsLkq from "@/components/BreadcrumbsLkq/index.vue";
import daohangLkq from "@/components/DaohangLkq/index.vue";


export default {
  components: { searchLkq,titleLkq,articleLkq,article1Lkq,breadcrumbsLkq,daohangLkq},
  data() {
    return {
      tishi:'请输入您要搜索的内容',
      link:'/pages/course/course-index',//全部跳转地址
      title:'栏目标题',//标题内容
      mark: true,//控制全部按钮显示,
      mark1: false,//控制article 栏目显示,
      classData:[
        {
          "id":3,
          "name":"江上望青山忆旧",
          "synopsis":"扬子秋残暮雨时，笛声雁影共迷离。重来三月青山道，一片风帆万柳丝。\r\n",
          "image":"/uploads/20210120/015e15361f84067b050f59aeff6b9048.png",
          "allTime":"14小时29分钟"
        },
        {
          "id":3,
          "name":"江上望青山忆旧",
          "synopsis":"扬子秋残暮雨时，笛声雁影共迷离。重来三月青山道，一片风帆万柳丝。\r\n",
          "image":"/uploads/20210120/015e15361f84067b050f59aeff6b9048.png",
          "allTime":"14小时29分钟"
        }
      ],
      shopData:[
        {
          id:3,
          name:"南京IPromise店铺",
          synopsis:"KDD集团旗下时尚珠宝品牌，主打轻珠宝新零售概念，店...采用开放式、体验式，鼓励消费者自助试戴。",
          image:"/uploads/20210120/6ff223022ce9e9446cf0ad3c927d6e6e.png"
        },
        {
          id:3,
          name:"南京IPromise店铺",
          synopsis:"KDD集团旗下时尚珠宝品牌，主打轻珠宝新零售概念，店...采用开放式、体验式，鼓励消费者自助试戴。",
          image:"/uploads/20210120/6ff223022ce9e9446cf0ad3c927d6e6e.png"
        },
        {
          id:3,
          name:"南京IPromise店铺",
          synopsis:"KDD集团旗下时尚珠宝品牌，主打轻珠宝新零售概念，店...采用开放式、体验式，鼓励消费者自助试戴。",
          image:"/uploads/20210120/6ff223022ce9e9446cf0ad3c927d6e6e.png"
        }
      ],
      links:"/pages/index/index",
      cateArr:[
        {id:0, name:"全部", sort:100,nums:1118},
        {id:0, name:"分类", sort:100,nums:118},
        {id:0, name:"课程分类", sort:100,nums:108}
      ],
      cateData:[
        {id:2,name:"热门活动",smallint:2},
        {id:3,name:"快乐互动",smallint:2},
      ]
    };
  },
 
 onLoad(){

  },
  methods: {
    sendOut(e){
        console.log(e)
    },
  },
};
</script>

<style lang="scss">
	.page_boxs{
		height: 100%;
		width: 100%;
		display: flex;
		overflow-x: hidden;
		background: #f8f8f8;
		flex-direction: column;
	}
</style>
