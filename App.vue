<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
/*每个页面公共css */

/*字体样式 */
@import url('./styles/fonts.css');

/* margin,padding */
@import url('./styles/boxAbout.css');


/*单行文本溢出省略号*/
.one-t {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	transition: all linear 0.2s;
}

/*多行文本溢出省略号*/
.more-t {
	overflow: hidden;
	text-overflow: ellipsis;
	word-break: break-all;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	transition: all linear 0.2s;
}



/* 暂无数据	 */
.nodata {
	text-align: center;
	font-size: 28rpx;
}

/* 微信按钮样式清除	 */
.wxBtn {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: transparent;
	&::after {
		border: 2rpx solid transparent;
	}
}
</style>
