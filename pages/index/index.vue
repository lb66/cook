<template>
	<view >
		<cu-custom bgColor="bg-gradual-blue" :isBack="false">
			<block slot="content">首页</block>
		</cu-custom>
		<view class="cu-bar search bg-white padding-xs">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索图片、文章、视频"
				 confirm-type="search"></input>
			</view>
		</view>
		<!-- 轮播图 -->
		<swiper class="card-swiper square-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000"
		 duration="500" @change="cardSwiper" indicator-color="#8799a3" indicator-active-color="#0081ff">
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</view>
			</swiper-item>
		</swiper>
		<!-- 列表 -->
		<view class="cu-list grid no-border" :class="['col-' + gridCol]">
			<view class="cu-item" v-for="(item,index) in cuIconList" :key="index">
				<image :src="item.url" mode="widthFix"></image>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- bar -->
		<scroll-view scroll-x class="bg-white nav margin-top">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in 3" :key="index"
				 @tap="tabSelect" :data-id="index">
					{{index===0 ? "最新": index===1 ? "热门":''}}
				</view>
			</view>
		</scroll-view>
		<!-- card -->
		<view class="cu-card article no-card" @tap="toDetail('../detail/detail?id='+111)">
			<view class="cu-item shadow">
				<view class="title">
					<view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view>
				</view>
				<view class="content">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
						<view>
							<view class="cu-tag bg-red light sm round">正义天使</view>
							<view class="cu-tag bg-green light sm round">史诗</view>
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
			return {
				InputBottom: 0,
				// 轮播图
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}],
				towerStart: 0,
				direction: '',
				// 列表
				cuIconList: [{
						url: '../../static/logo.png',
						title: '1'
					},
					{
						url: '../../static/logo.png',
						title: '2'
					},
					{
						url: '../../static/logo.png',
						title: '3'
					},
					{
						url: '../../static/logo.png',
						title: '4'
					},
					{
						url: '../../static/logo.png',
						title: '5'
					},
					{
						url: '../../static/logo.png',
						title: '6'
					},
				],
				gridCol: 3,
				// bar
				TabCur: 0,
				scrollLeft: 0
			};
		},
		onLoad() {
			this.TowerSwiper('swiperList');
			// this.getBanner()
		},
		methods: {
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			// 轮播
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},
			// bar
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			//路由
			toDetail(url) {
				uni.navigateTo({
					url: url
				});
			},
			getBanner() {
				uni.request({
					url: '',
					success: (res) => {
						console.log(res);
					},
					fail: (err) => {
						console.log(err)
					}
				});
			},
		}
	}
</script>

<style lang='scss'>
	.tower-swiper .tower-item {
		transform: scale(calc(0.5 + var(--index) / 10));
		margin-left: calc(var(--left) * 100upx - 150upx);
		z-index: var(--index);
	}

	.cu-item {
		>image {
			width: 28px;
			margin: 10px auto 0 auto;
		}
	}

	.nav {
		border-bottom: 1px solid #eee;
	}

	.cu-card {
		margin-bottom: 4px;
	}
</style>
