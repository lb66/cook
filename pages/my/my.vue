<template>
	<view>
		<view class="bg-img flex align-center justify-center" style="background-image: url('../../static/bg.jpeg');height: 600upx;">
			<view class="padding-xl text-white text-center">
				<view class="avatar-img">
					<open-data type="userAvatarUrl"></open-data>
					<!-- #ifdef H5 -->					
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg" mode="aspectFill"></image>
					<!-- #endif -->
				</view>
				<view class="margin-top text-xl ">
					
					<open-data type="userNickName" class="nickname"></open-data>
					<!-- #ifdef H5 -->				
					钢铁之翼
					<!-- #endif -->
				</view>
			</view>
		</view>
		<view class="cu-list menu card-menu margin-top">
			<view class="cu-item arrow">
				<navigator class="content" hover-class="none" url="../myFavor/myFavor" open-type="redirect">
					<text class="text-yellow cuIcon-favorfill"></text>
					<text class="text-grey">我的收藏</text>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.avatar-img {
		width: 200rpx;
		height: 200rpx;
		display: block;
		overflow: hidden;
		border: 6rpx solid #fff;
		border-radius: 50%;
	}
</style>
