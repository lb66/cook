<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">搜索</block>
		</cu-custom>
		<view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @input="onInput" @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="请输入菜谱、食材"
				 confirm-type="search"></input>
			</view>
			<view class="action">
				<button @tap="onSearch" class="cu-btn bg-green shadow-blur round">搜索</button>
			</view>
		</view>
		<view class="padding bg-white margin-bottom" v-if="historyWords.length>0">
			<text class=" text-bold  text-lg ">历史搜索</text>
			<view class="flex margin-bottom margin-top justify-start">
				<view @tap='onHIstorySearch' :data-name='item' v-for="(item,index) in historyWords" :key="index" class="bg-grey cu-tag round padding">
					<view >						
						{{item}}
					</view>
				</view>
			</view>
			<text class="text-sm text-red " @tap="deleteHistory">删除记录</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				InputBottom: 0,
				keyword: '',
				historyWords: []
			};
		},
		onLoad() {
			if (uni.getStorageSync('history') === '') {
				uni.setStorageSync('history', [])
			}
		},
		onShow() {
			this.historyWords = uni.getStorageSync('history')
		},
		methods: {
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			onInput(e) {
				// console.log(e.detail.value)
				this.keyword = e.detail.value
			},
			onHIstorySearch(e){
				console.log(e.currentTarget.dataset.name)
				this.keyword=e.currentTarget.dataset.name
				uni.navigateTo({
					url: `../list/list?keyword=${this.keyword}`
				}).then(this.keyword='')
			},
			onSearch() {
				if (this.keyword !== '') {
					const history = uni.getStorageSync('history')
					let bHave = false //判断是否已存在，不会重复存入相同歌曲
					for (let i = 0; i < history.length; i++) {
						if (history[i].keyword === this.keyword) {
							bHave = true
							break
						}
					}
					if (!bHave) {
						history.unshift(this.keyword)
						wx.setStorage({
							key: 'history',
							data: history,
						})
					}
					uni.navigateTo({
						url: `../list/list?keyword=${this.keyword}`
					})
				}
			},
			deleteHistory() {
				uni.setStorageSync('history', [])
				this.historyWords = uni.getStorageSync('history')
			}
		}
	}
</script>

<style lang="scss">

</style>
