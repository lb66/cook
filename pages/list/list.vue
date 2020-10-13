<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">菜谱</block>
		</cu-custom>
		<List :list='relatedList' />
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
				classid: 0,
				relatedList: [],
				start: 0,
				keyword: ''
			};
		},
		onLoad(options) {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			console.log(options)
			if (options.classid) {
				this.classid = options.classid
				this.get2ndList()
			};
			if (options.keyword) {
				this.keyword = options.keyword
				this.getSearchList()
			}
		},
		onReachBottom() {
			if (this.classid !== 0) {
				this.get2ndList()
			}
		},
		methods: {
			get2ndList() {
				var that = this;
				uni.request({
					url: `https://way.jd.com/jisuapi/byclass?classid=${that.classid}&start=${that.start}&num=10&appkey=3b7be0cd3539afb6c53462690c795f05`,
					success: (res) => {
						// console.log(res.data);
						that.relatedList = this.relatedList.concat(res.data.result.result.list);
						// console.log(that.relatedList)
						that.start = that.relatedList.length
						uni.hideLoading()
					},
					fail: (err) => {
						console.log(err)
						uni.hideLoading()
					}
				});
			},
			getSearchList() {
				var that = this;
				uni.request({
					url: `https://way.jd.com/jisuapi/search?keyword=${that.keyword}&num=20&appkey=3b7be0cd3539afb6c53462690c795f05`,
					success: (res) => {
						that.relatedList = res.data.result.result.list;
						if(!res.data.result.result.list){
							uni.showModal({
								content:"暂无相关内容",
								showCancel:false,
								confirmText:'返回',
								success() {
									uni.navigateBack({										
									})
								}
							})
						}
						uni.hideLoading()
					},
					fail: (err) => {
						console.log(err)
						uni.hideLoading()
					}
				});
			},
		}
	}
</script>

<style lang="scss">
	.cu-card.article>.cu-item .content .text-content {
		height: 3.2em;
	}
</style>
