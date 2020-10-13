<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">详情</block>
		</cu-custom>
		<view class="flex-sub ">
			<image :src="detail.pic" mode="" style="width: 100%;"></image>
			<view class="text-xl padding">
				<text class="text-black text-bold">{{detail.name}}</text>
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
	export default {
		data() {
			return {
				id: 0,
				detail: {}
			};
		},
		onLoad(options) {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			console.log(options)
			this.id = options.id
			this.getDetail()
		},
		onReady() {
			
		},
		methods: {
			getDetail() {
				var that = this;
				uni.request({
					url: `https://way.jd.com/jisuapi/detail?id=${that.id}&appkey=3b7be0cd3539afb6c53462690c795f05`,
					success: (res) => {
						// console.log(res.data.result.result);
						that.detail = res.data.result.result
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

</style>
