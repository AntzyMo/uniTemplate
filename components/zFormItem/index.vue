<template>
	<view class="z_form_item">
		<slot></slot>
	</view>
</template>

<script>
	export default{
		props:{
			prop:{
				type:String,
				default:''
			},
			required:{
				type:Boolean,
				default:false
			},
			rules:{
				type:Object,
				default:_=>({})
			},
			error:{
				type:String,
				default:''
			}
		}
	}
</script>

<style lang="scss">
	
</style>
