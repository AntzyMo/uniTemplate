<template>
  <view class="content">
    <view class="card">
      <SearchCom v-model="searchVAlue"></SearchCom>
      <SearchCom haveSelect></SearchCom>

      <SelectCom v-model="value" :list="list"></SelectCom>
      <SelectCom
        mode="date"
        type="month"
        arrowType="right"
        v-model="dateValue"
      ></SelectCom>

      <view class="mb20">
        <TabsCom v-model="activeName" @tab-click="tabClick">
          <TabPane label="标题1" name="first">标题1</TabPane>
          <TabPane label="标题2" name="second">标题2</TabPane>
          <TabPane label="标题3" name="third">标题3</TabPane>
        </TabsCom>
      </view>
      <BtnCom @click="btnClick">按钮</BtnCom>
      <view class="mb20">
        <codeCom opacity="2"></codeCom>
      </view>
      <view class="mb20 c1890ff" @click="dialogVisible = true"
        >打开DialogCom</view
      >
      <DialogCom title="DialogCom" :visible.sync="dialogVisible">
        <view>内容</view>
        <view slot="footer" class="dialog-footer">
          <BtnCom class="flex1" @click="dialogVisible = false">取消</BtnCom>
          <BtnCom class="flex1" @click="dialogVisible = false">确定</BtnCom>
        </view>
      </DialogCom>

      <view class="c1890ff mb20" @click="selectvisible = true"
        >打开SelectDialogCom</view
      >
      <SelectDialogCom :visible.sync="selectvisible"></SelectDialogCom>

      <view class="mb20 c1890ff">上传</view>
      <UploadCom :limit="3" v-model="uploadList" action="https://api.fucai.kcshop.vip/api/common/upload"></UploadCom>
    </view>
  </view>
</template>

<script>
import TabsCom from "@/components/TabsCom";
import UploadCom from '@/components/UploadCom'
import codeCom from "../../components/CodeCom/index.vue";
import DialogCom from "../../components/DialogCom/index.vue";
import SwiperCom from "@/components/SwiperCom";
import SearchCom from "@/components/SearchCom";
import SelectDialogCom from "@/components/SelectDialogCom";
export default {
  components: {
    TabsCom,
    codeCom,
    SwiperCom,
    DialogCom,
    SearchCom,
    SelectDialogCom,
    UploadCom
  },
  data() {
    return {
      tabList: [
        { name: "标题一", id: "first" },
        { name: "标题二", id: "second" },
        { name: "标题三", id: "seconds" },
      ],
      uploadList:'',
      activeName: "second",
      selectvisible: false,
      searchVAlue: "",
      dialogVisible: false,
      form: {
        input: "11",
      },

      value: "1",
      dateValue: "2020-11-01",
      title: "Hello",
      activeType: "3",

      list: [
        { label: "测试", value: "0" },
        { label: "测试1", value: "1" },
        { label: "测试2", value: "2" },
        { label: "测试3", value: "3" },
        { label: "测试4", value: "4" },
      ],
    };
  },

  onLoad() {
    this.setStorage("valww", { name: 1, name2: 0 });
  },

  methods: {
   beforeUpload(files){
     console.log(files,'files')
     return false
   },
    bindPickerChange(data) {
      console.log(data, "22");
    },

    tabClick(data) {
      console.log(data, "data22");
    },

    btnClick() {
      // this.toRouter({url:'/pages/demo/index',params:{}})
    },

    inputFn(e) {
      // console.log(e,'e')
    },
    blurFn(e) {
      console.log(this.searchVAlue, "sea");
     
    },

    resetFn() {
      console.log(this.searchVAlue, "sea");
    },


    uploadFn(){
    
    }
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 0 20rpx;
  /* background: #ccc; */
}

.c1890ff {
  color: #1890ff;
}

.dialog-footer {
  display: flex;
  border-top: 2rpx solid #d4d4d4;

  .flex1 {
    flex: 1;
    position: relative;

    &:nth-child(1):after {
      content: "";
      width: 2rpx;
      background: #d4d4d4;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
}
</style>
