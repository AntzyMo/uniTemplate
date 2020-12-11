<template>
	<swiper class="swiper" :indicator-dots="true" :current="0">
		<swiper-item v-for="(item, index) in value" :key="index">
			<image :src="item" mode=""></image>
			</swiper-item>
	</swiper>
</template>

<script>
export default {
	props: {
		
		value: {
			type: Array,
			default: _ => []
		}
	}
};
</script>

<style lang="scss">
.swiper {
	flex: 1;
	width: 100%;
	height: 100%;
	position: relative;

	image{
		width: 100%;
	}

}
</style>
