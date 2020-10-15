<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">详情</block>
		</cu-custom>
		<view class="flex-sub bg-white">
			<image :src="detail.pic" style="width: 100%;"></image>
			<view class="padding flex justify-between">
				<text class="text-xl text-black text-bold">{{detail.name}}</text>
				<uni-fav :checked="checked" @click="onClick"></uni-fav>
			</view>
			<view class="padding solid-bottom" v-html="detail.content"></view>
			<view class="padding solid-bottom">
				<view class="margin-bottom">
					<text class="text-bold  text-lg ">用料</text>
				</view>
				<view class="grid" :class="'col-' + 3">
					<view v-for="(item,index) in detail.material" :key="index">
						{{item.mname}} {{item.amount}}
					</view>
				</view>
			</view>
			<view class="padding">
				<view class="margin-bottom">
					<text class="text-bold  text-lg">做法</text>
				</view>
				<view class="margin-bottom" v-for="(item,index) in detail.process" :key="index">
					{{index+1+'.'}}{{item.pcontent}}
					<view class="margin-top">
						<image :src="item.pic" mode="widthFix"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniFav from '../../components/uni-fav.vue'
	export default {
		components: {
			uniFav
		},
		data() {
			return {
				id: 0,
				detail: {},
				checked: false
			};
		},
		onShareAppMessage(event) {
			console.log(event)
			return {
				title: this.detail.name,
				path: `/pages/detail/detail?id=${this._id}`,
				imageUrl:this.detail.pic
			}
		},
		onLoad(options) {
			if (uni.getStorageSync('collection') === '') {
				uni.setStorageSync('collection', [])
			}
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			console.log(options)
			this.id = options.id
			this.getDetail()
		},
		methods: {
			getDetail() {
				let that = this;
				uni.request({
					url: `https://way.jd.com/jisuapi/detail?id=${that.id}&appkey=3b7be0cd3539afb6c53462690c795f05`,
					success: (res) => {
						// console.log(res.data.result.result);
						that.detail = res.data.result.result
						uni.hideLoading()
						// 初始是否已收藏
						const collection = uni.getStorageSync('collection')
						for (let i = 0; i < collection.length; i++) {
							if (collection[i].id === this.detail.id) {
								this.checked = true
								break
							}
						}						
					},
				});
			},
			//收藏
			onClick() {
				this.checked = !this.checked
				let collection = uni.getStorageSync('collection')
				if (this.checked) {
					collection.unshift(this.detail)
					wx.setStorage({
						key: 'collection',
						data: collection,
					})
				} else {
					for (let i = 0; i < collection.length; i++) {
						if (collection[i].id === this.detail.id) {
							collection.splice(i,1)
							break
						}
					}						
					wx.setStorage({
						key: 'collection',
						data: collection,
					})
				}
			},
		}
	}
</script>

<style lang="scss">

</style>
