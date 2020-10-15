(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-fav"],{"1b45":function(t,e,n){"use strict";var c;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return c}));var r=function(){var t=this,e=t.$createElement;t._self._c},o=[]},"2d46":function(t,e,n){"use strict";var c=n("3205"),r=n.n(c);r.a},3205:function(t,e,n){},"6bb4":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniFav",props:{star:{type:[Boolean,String],default:!0},bgColor:{type:String,default:"#eeeeee"},fgColor:{type:String,default:"#666666"},bgColorChecked:{type:String,default:"#007aff"},fgColorChecked:{type:String,default:"#FFFFFF"},circle:{type:[Boolean,String],default:!1},checked:{type:Boolean,default:!1},contentText:{type:Object,default:function(){return{contentDefault:"收藏",contentFav:"已收藏"}}}},watch:{checked:function(){t.report&&(this.checked?t.report("收藏","收藏"):t.report("取消收藏","取消收藏"))}},methods:{onClick:function(){this.$emit("click")}}};e.default=n}).call(this,n("543d")["default"])},cb20:function(t,e,n){"use strict";n.r(e);var c=n("6bb4"),r=n.n(c);for(var o in c)"default"!==o&&function(t){n.d(e,t,(function(){return c[t]}))}(o);e["default"]=r.a},df5e:function(t,e,n){"use strict";n.r(e);var c=n("1b45"),r=n("cb20");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("2d46");var u,a=n("f0c5"),f=Object(a["a"])(r["default"],c["b"],c["c"],!1,null,"64801f6a",null,!1,c["a"],u);e["default"]=f.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-fav-create-component',
    {
        'components/uni-fav-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("df5e"))
        })
    },
    [['components/uni-fav-create-component']]
]);
