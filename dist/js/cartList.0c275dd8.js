"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[77],{6983:function(t,e,c){c.d(e,{Z:function(){return u}});var n=c(6252),o=c(3577);const s={class:"docker"},i=["innerHTML"],r={class:"docker__title"};function a(t,e,c,a,_,l){const d=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",s,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.dockerList,((t,e)=>((0,n.wg)(),(0,n.iD)("div",{class:(0,o.C_)({docker__item:!0,"docker__item--active":e===c.currentIndex}),key:t.icon},[(0,n.Wm)(d,{to:t.to},{default:(0,n.w5)((()=>[(0,n._)("div",{class:"iconfont",innerHTML:t.icon},null,8,i),(0,n._)("div",r,(0,o.zw)(t.text),1)])),_:2},1032,["to"])],2)))),128))])}var _={name:"Docker",props:["currentIndex"],setup(){const t=[{icon:"&#xe867;",text:"首页",to:{name:"Home"}},{icon:"&#xe73e;",text:"购物车",to:{name:"CartList"}},{icon:"&#xe608;",text:"订单",to:{name:"OrderList"}},{icon:"&#xe78b;",text:"我的",to:{name:"MyAdmin"}}];return{dockerList:t}}},l=c(3744);const d=(0,l.Z)(_,[["render",a],["__scopeId","data-v-3444d875"]]);var u=d},6210:function(t,e,c){c.r(e),c.d(e,{default:function(){return z}});var n=c(6252),o=c(3577);const s=t=>((0,n.dD)("data-v-44a7b8d9"),t=t(),(0,n.Cn)(),t),i={class:"wapper"},r=s((()=>(0,n._)("div",{class:"title"},"我的全部购物车",-1))),a=["onClick"],_={class:"product__title"},l=["src"],d={class:"product__item__detail"},u={class:"product__item__title"},p={class:"product__item__price"},m={class:"product__item__yen"},k={class:"product__item__count"},v={class:"product__item__origin"},w={class:"product__total"},g=s((()=>(0,n._)("span",{class:"iconfont"},"",-1))),f={key:0,class:"empty"};function x(t,e,c,s,x,D){const C=(0,n.up)("Docker");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",i,[r,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.list,((t,e)=>((0,n.wg)(),(0,n.iD)("div",{class:"product",key:e,onClick:()=>s.handleCartClick(e)},[(0,n._)("div",_,(0,o.zw)(t.shopName),1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.productList,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"product__item",key:t._id},[(0,n._)("img",{class:"product__item__img",src:t.imgUrl},null,8,l),(0,n._)("div",d,[(0,n._)("h4",u,(0,o.zw)(t.name),1),(0,n._)("p",p,[(0,n._)("span",m,"¥"+(0,o.zw)(t.price),1),(0,n._)("span",k,"×"+(0,o.zw)(t.count),1),(0,n._)("span",v,"¥"+(0,o.zw)((t.price*t.count).toFixed(2)),1)])])])))),128)),(0,n._)("div",w,[(0,n.Uk)("共计"+(0,o.zw)(t.total)+"件",1),g])],8,a)))),128)),0===Object.keys(s.list).length?((0,n.wg)(),(0,n.iD)("div",f,"购物车中没有商品")):(0,n.kq)("",!0)]),(0,n.Wm)(C,{currentIndex:1})],64)}c(7658);var D=c(6983),C=c(2201),h={name:"CartList",components:{Docker:D.Z},setup(){const t=JSON.parse(localStorage.cartList||"[]");console.log(t);for(const n in t){const e=t[n],c=e.productList;let o=0;for(const t in c){const e=c[t];o+=e.count}e.total=o}const e=(0,C.tv)(),c=t=>{e.push(`orderconfirmation/${t}`)};return{list:t,handleCartClick:c}}},L=c(3744);const y=(0,L.Z)(h,[["render",x],["__scopeId","data-v-44a7b8d9"]]);var z=y}}]);
//# sourceMappingURL=cartList.0c275dd8.js.map