<template>
	<view >
		<view class="cu-card article no-card" v-for="(item,index) in list" :key="index" @tap="toDetail(item.id)">
			<view class="cu-item shadow">
				<view class="content margin-top">
					<image :src="item.pic" mode="aspectFill"></image>
					<view class="desc">
						<view class="text-bold  text-lg">{{item.name}}</view>
						<view class="text-content">{{item.content}}</view>
						<view>
							<view class="cu-tag bg-red light sm round">{{item.tag.split(',')[0]}}</view>
							<view class="cu-tag bg-green light sm round">{{item.tag.split(',')[1]}}</view>
							<view class="cu-tag bg-red light sm round">{{item.tag.split(',')[2]}}</view>
							<view class="cu-tag bg-green light sm round">{{item.tag.split(',')[3]}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		props: {
			list: {
				type: Array,
				value: []
			},
		},
		onLoad() {
			
		},
		methods: {
			toDetail(id) {
				uni.navigateTo({
					url: '/pages/detail/detail?id='+ id
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
