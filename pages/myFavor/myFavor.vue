<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">我的收藏</block>
		</cu-custom>
		<List :list='favorList' />
	</view>
</template>

<script>
	import List from '../../components/list.vue'
	export default {
		components: {
			List
		},
		data() {
			return {
				favorList:[]
			};
		},
		onLoad() {

		},
		onShow() {
			const collection=uni.getStorageSync('collection')
			this.favorList=collection
		}
	}
</script>

<style lang="scss">

</style>
