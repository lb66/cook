(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/list/list"],{"19dd":function(t,e,n){"use strict";var s=n("d4e3"),c=n.n(s);c.a},"3c1a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){n.e("components/list").then(function(){return resolve(n("e0d4"))}.bind(null,n)).catch(n.oe)},c={components:{List:s},data:function(){return{classid:0,relatedList:[],start:0,keyword:""}},onLoad:function(e){t.showLoading({title:"加载中...",mask:!0}),console.log(e),e.classid&&(this.classid=e.classid,this.get2ndList()),e.keyword&&(this.keyword=e.keyword,this.getSearchList())},onReachBottom:function(){0!==this.classid&&this.get2ndList()},methods:{get2ndList:function(){var e=this,n=this;t.request({url:"https://way.jd.com/jisuapi/byclass?classid=".concat(n.classid,"&start=").concat(n.start,"&num=10&appkey=3b7be0cd3539afb6c53462690c795f05"),success:function(s){n.relatedList=e.relatedList.concat(s.data.result.result.list),n.start=n.relatedList.length,t.hideLoading()},fail:function(e){console.log(e),t.hideLoading()}})},getSearchList:function(){var e=this;t.request({url:"https://way.jd.com/jisuapi/search?keyword=".concat(e.keyword,"&num=20&appkey=3b7be0cd3539afb6c53462690c795f05"),success:function(n){e.relatedList=n.data.result.result.list,n.data.result.result.list||t.showModal({content:"暂无相关内容",showCancel:!1,confirmText:"返回",success:function(){t.navigateBack({})}}),t.hideLoading()},fail:function(e){console.log(e),t.hideLoading()}})}}};e.default=c}).call(this,n("543d")["default"])},"57dc":function(t,e,n){"use strict";(function(t){n("756a");s(n("66fd"));var e=s(n("9537"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"836c":function(t,e,n){"use strict";var s;n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return s}));var c=function(){var t=this,e=t.$createElement;t._self._c},a=[]},9537:function(t,e,n){"use strict";n.r(e);var s=n("836c"),c=n("e07d");for(var a in c)"default"!==a&&function(t){n.d(e,t,(function(){return c[t]}))}(a);n("19dd");var i,o=n("f0c5"),u=Object(o["a"])(c["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],i);e["default"]=u.exports},d4e3:function(t,e,n){},e07d:function(t,e,n){"use strict";n.r(e);var s=n("3c1a"),c=n.n(s);for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);e["default"]=c.a}},[["57dc","common/runtime","common/vendor"]]]);