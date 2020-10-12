<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">详情</block>
		</cu-custom>
		<view class="solids-bottom padding-xs flex align-center">
			<view class="flex-sub ">
				<view class="solid-bottom text-xl padding">
					<text class="text-black text-bold">番茄炒鸡蛋</text>
				</view>
				<view class="padding">
					<image src="../../static/logo.png" mode=""></image>
				</view>
				<view class="padding">页面大标题，用于结果页等单一信息页</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad(options) {
		console.log(options)
		},
	}
</script>

<style lang="scss">

</style>
