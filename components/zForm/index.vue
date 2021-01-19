<template>
	<form >
		<slot></slot>
	</form>
</template>

<script>
	export default{
		props:{
			model:{
				type:Object,
				default:_=>({})
			},
			rules:{
				type:Object,
				default:_=>({})
			}
		}
	}
</script>

<style lang="scss">
</style>
