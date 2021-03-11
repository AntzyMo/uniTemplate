<template>
  <view class="content">
    <view class="card">
      <SearchCom v-model="searchVAlue"></SearchCom>
      <SearchCom haveSelect></SearchCom>
      <SelectCom v-model="value" :list="list"></SelectCom>
      <SelectCom mode="date" type="month" v-model="dateValue"></SelectCom>

      <TabCom v-model="navVAlue" :props="prpos" :list="clist"></TabCom>
      <BtnCom @click="btnClick">按钮</BtnCom>
      <view class="mb20">
        <codeCom opacity="2"></codeCom>
      </view>
      <view class="c1890ff" @click="dialogVisible = true">打开DialogCom</view>
      <DialogCom title="DialogCom" :visible.sync="dialogVisible">
        <view>内容</view>
        <view slot="footer" class="dialog-footer">
          <BtnCom class="flex1" @click="dialogVisible = false">取消</BtnCom>
          <BtnCom class="flex1" @click="dialogVisible = false">确定</BtnCom>
        </view>
      </DialogCom>
    </view>
  </view>
</template>

<script>
import codeCom from "../../components/CodeCom/index.vue";
import DialogCom from "../../components/DialogCom/index.vue";
import SwiperCom from "@/components/SwiperCom";
import SearchCom from "@/components/SearchCom";

export default {
  components: { codeCom, SwiperCom, DialogCom, SearchCom },
  data() {
    return {
      searchVAlue: "",
      dialogVisible: false,
      form: {
        input: "11",
      },
      prpos: {
        label: "name",
        value: "type",
      },
      navVAlue: 0,
      value: "1",
      dateValue: "2020-11-01",
      title: "Hello",
      activeType: "3",
      clist: [
        { name: "测试", type: "0" },
        { name: "测试1", type: "1" },
        { name: "测试2", type: "2" },
        { name: "测试3", type: "3" },
        { name: "测试4", type: "4" },
      ],
      list: [
        { label: "测试", value: "0" },
        { label: "测试1", value: "1" },
        { label: "测试2", value: "2" },
        { label: "测试3", value: "3" },
        { label: "测试4", value: "4" },
      ],
    };
  },
  onLoad() {},

  methods: {
    bindPickerChange(data) {
      console.log(data, "22");
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
