<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="false">
			<block slot="content">首页</block>
		</cu-custom>
		<view class="cu-bar search bg-white padding-xs">
			<view class="search-form round padding-xs" @tap='toSearch'>
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索菜谱、食材"
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
		<!-- 宫格图 -->
		<view class="cu-list grid no-border" :class="['col-' + gridCol]" >
			<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" @tap="toList(item.classid)">
				<image :src="item.url" mode="widthFix"></image>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- bar -->
		<view class="cu-bar justify-center bg-white margin-top">
			<view class="action border-title">
				<text class="text-xl text-bold text-blue">每日推荐</text>
				<text class="bg-gradual-blue" style="width:3rem"></text>
			</view>
		</view>
		<!-- card -->
		<List :list='dailyList' />
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
				dailyList: [],
				start: 100,
				InputBottom: 0,
				// 轮播图
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
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
				// 宫格图
				cuIconList: [{
						url: '../../static/icon/icon_doughnut.png',
						title: '甜品',
						classid:'339'
					},
					{
						url: '../../static/icon/icon_juice.png',
						title: '饮品',
						classid:'355'
					},
					{
						url: '../../static/icon/icon_kebabs.png',
						title: '烧烤',
						classid:'365'
					},
					{
						url: '../../static/icon/icon_noodle.png',
						title: '面条',
						classid:'326'
					},
					{
						url: '../../static/icon/icon_salad.png',
						title: '素菜',
						classid:'307'
					},
					{
						url: '../../static/icon/icon_seafood.png',
						title: '海鲜',
						classid:'312'
					},
				],
				gridCol: 3,
			};
		},
		onLoad() {
			this.TowerSwiper('swiperList');
			this.getDailyList()
		},
		onReachBottom() {
			this.getDailyList()
		},
		onPullDownRefresh() {
			this.TowerSwiper('swiperList');
			this.start=0;
			this.dailyList=[];
			this.getDailyList();
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
			toSearch(){
				uni.navigateTo({
					url:"/pages/search/search"
				})
			},
			toList(classid){
				uni.navigateTo({
					url: `../list/list?classid=${classid}`
				});
			},
			getDailyList() {
				let that = this;
				let id=new Date().getDate()
				uni.request({
					url: `https://way.jd.com/jisuapi/byclass?classid=${id}&start=${that.start}&num=10&appkey=3b7be0cd3539afb6c53462690c795f05`,
					success: (res) => {
						that.dailyList = this.dailyList.concat(res.data.result.result.list);
						// console.log(that.dailyList)
						that.start = that.dailyList.length
						uni.stopPullDownRefresh()
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
