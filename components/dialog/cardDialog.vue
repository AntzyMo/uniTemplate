<template>
	<view class="cardDialog" v-if="isSelect" >
			<view class="selectBox" :style="{height:height,'margin-top':margintop}">
				<view class="copent">
					<slot></slot>
				</view>
			</view>
			<view class="closeBtn" >
				<uniIcon @click="closeDialog"  color="#fff" type="clear" size="30"></uniIcon>
				
			</view>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icons/uni-icons.vue';
	
	export default{
		components:{uniIcon},
		props:{
			height:{
				type:String,
				default:'0'
			},
			
			marginTop:{
				type:String,
				default:'20'
			}
		},
		data(){
			return {
				isSelect:false
			}
		},
		
		computed:{
			margintop(){
				if(this.marginTop.includes('%')){
					
				return this.marginTop
					}else{
						return this.marginTop+'rpx'
					}
			}
		},
		
		methods:{
			
			//打开弹窗
			init(){
				this.isSelect=true
				return Promise.resolve()
				
			},
			
			//关闭弹窗
			closeDialog(){
				this.isSelect=false
				this.$emit('close',true)
			}
		}
	}
</script>

<style lang="scss">
.cardDialog {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 9999;
	padding: 0 20rpx;
	
	background-color: rgba(0, 0, 0, 0.5);


.selectBox{
	width: 100%;
	background: #fff;
	margin-top: 20rpx;
	position: relative;
	border-radius: 16rpx;
	margin-bottom: 20rpx;
	
	.copent{
		padding: 20rpx;
		
	}
}

.closeBtn{
	flex:1;
	text-align:center;
}




}
</style>
