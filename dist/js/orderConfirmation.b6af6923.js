"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[32],{2170:function(t,e,c){c.d(e,{r:function(){return n}});var s=c(3907),a=c(6252);const n=t=>{const e=(0,s.oR)(),c=e.state.cartList,n=(t,c,s,a)=>{e.commit("changeCartInfo",{shopId:t,productId:c,productInfo:s,num:a})},r=(0,a.Fl)((()=>{const e=c[t]?.productList||{},s={};for(const t in e){const c=e[t];c.count>0&&(s[t]=c)}return s})),o=(0,a.Fl)((()=>{const e=c[t]?.productList||{},s={};for(const t in e){const c=e[t];c.check&&c.count>0&&(s[t]=c)}return s})),i=(0,a.Fl)((()=>{const e=c[t]?.shopName||"";return e})),d=(0,a.Fl)((()=>{const e=c[t]?.productList,s={total:0,price:0,allChecked:!0};if(e)for(const t in e){const c=e[t];c.check&&(s.price+=c.count*c.price,s.total+=c.count),c.count>0&&!c.check&&(s.allChecked=!1)}return s.price>0&&(s.price=s.price.toFixed(2)),s}));return{cartList:c,changeCartInfo:n,productList:r,shopName:i,calacutions:d,orderProductList:o}}},2635:function(t,e,c){c.r(e),c.d(e,{default:function(){return et}});var s=c(6252);const a={class:"wapper"};function n(t,e,c,n,r,o){const i=(0,s.up)("TopArea"),d=(0,s.up)("ProductList"),_=(0,s.up)("Order");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s.Wm)(i),(0,s.Wm)(d),(0,s.Wm)(_)])}var r=c(3577);const o=t=>((0,s.dD)("data-v-17b1f738"),t=t(),(0,s.Cn)(),t),i={class:"top"},d=o((()=>(0,s._)("div",{class:"top__bgcor"},null,-1))),_={class:"top__header"},l=o((()=>(0,s._)("div",{class:"top__receiver__title"},"收货地址",-1))),u={class:"top__receiver__adress"},p={key:0,class:"top__receiver__info"},m={class:"top__receiver__info__name"},h={class:"top__receiver__info__name"},v=o((()=>(0,s._)("div",{class:"top__receiver__icon iconfont"},"",-1)));function k(t,e,c,a,n,o){return(0,s.wg)(),(0,s.iD)("div",i,[d,(0,s._)("div",_,[(0,s._)("div",{class:"iconfont top__header__back",onClick:e[0]||(e[0]=(...t)=>a.handleBackClick&&a.handleBackClick(...t))},""),(0,s.Uk)(" 确认订单 ")]),(0,s._)("div",{class:"top__receiver",onClick:e[1]||(e[1]=(...t)=>a.handleSelectClick&&a.handleSelectClick(...t))},[l,(0,s._)("div",u,(0,r.zw)(a.hasAdress?`${a.data.city}${a.data.department}${a.data.houseNumber}`:"请选择收货地址"),1),a.hasAdress?((0,s.wg)(),(0,s.iD)("div",p,[(0,s._)("span",m,(0,r.zw)(a.data.name),1),(0,s._)("span",h,(0,r.zw)(a.data.phone),1)])):(0,s.kq)("",!0),v])])}c(7658);var f=c(2262),C=c(1117),w=c(2201),b={name:"TopArea",setup(){const t=(0,w.tv)(),e=(0,w.yj)(),c=e.query.addressId,a=(0,f.qj)({}),n=()=>{t.back()},r=()=>{const c=e.path;console.log(c),t.push(`/addressSelect?path=${c}`)};return(0,s.wF)((async()=>{if(c){const t=await(0,C.U)(`/api/user/address/${c}`);if(0===t?.errno){const e=t.data;a.city=e.city,a.department=e.department,a.houseNumber=e.houseNumber,a.name=e.name,a.phone=e.phone}}})),{handleBackClick:n,hasAdress:!!c,handleSelectClick:r,data:a}}},g=c(3744);const y=(0,g.Z)(b,[["render",k],["__scopeId","data-v-17b1f738"]]);var L=y;const I={class:"product"},S={class:"product__title"},D=["src"],N={class:"product__item__detail"},O={class:"product__item__title"},z={class:"product__item__price"},F={class:"product__item__yen"},q={class:"product__item__count"},A={class:"product__item__origin"};function P(t,e,c,a,n,o){return(0,s.wg)(),(0,s.iD)("div",I,[(0,s._)("div",S,(0,r.zw)(a.shopName),1),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.orderProductList,(t=>((0,s.wg)(),(0,s.iD)("div",{class:"product__item",key:t._id},[(0,s._)("img",{class:"product__item__img",src:t.imgUrl},null,8,D),(0,s._)("div",N,[(0,s._)("h4",O,(0,r.zw)(t.name),1),(0,s._)("p",z,[(0,s._)("span",F,"¥"+(0,r.zw)(t.price),1),(0,s._)("span",q,"×"+(0,r.zw)(t.count),1),(0,s._)("span",A,"¥"+(0,r.zw)((t.price*t.count).toFixed(2)),1)])])])))),128))])}var B=c(2170),M={name:"CartList",setup(){const t=(0,w.yj)(),e=t.params.id,{orderProductList:c,shopName:s}=(0,B.r)(e);return{orderProductList:c,shopName:s}}};const $=(0,g.Z)(M,[["render",P],["__scopeId","data-v-aec39c18"]]);var j=$,U=c(9963);const Z=t=>((0,s.dD)("data-v-1d91a668"),t=t(),(0,s.Cn)(),t),H={class:"bottom"},T={class:"bottom__amount"},W=Z((()=>(0,s._)("div",{class:"mask__content__title"},"确认离开收银台？",-1))),x=Z((()=>(0,s._)("p",{class:"mask__content__desc"},"请尽快完成支付，否则将被取消",-1))),J={class:"mask__content__btns"};function R(t,e,c,a,n,o){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",H,[(0,s._)("div",T,[(0,s.Uk)("实付金额"),(0,s._)("span",null,"¥"+(0,r.zw)(a.calacutions.price),1)]),a.showSubmitBtn?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"bottom__submit",onClick:e[0]||(e[0]=()=>a.handleSubmitClick(!0))},"提交订单")):(0,s.kq)("",!0)]),a.showMask?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"mask",onClick:e[4]||(e[4]=()=>a.handleSubmitClick(!1))},[(0,s._)("div",{class:"mask__content",onClick:e[3]||(e[3]=(0,U.iM)((()=>{}),["stop"]))},[W,x,(0,s._)("div",J,[(0,s._)("div",{class:"mask__content__cancel",onClick:e[1]||(e[1]=()=>a.handleConfirmOrder(!0))},"取消订单"),(0,s._)("div",{class:"mask__content__confirm",onClick:e[2]||(e[2]=()=>a.handleConfirmOrder(!1))},"确认支付")])])])):(0,s.kq)("",!0)],64)}var Y=c(3907);const K=(t,e,c,s)=>{const a=(0,w.tv)(),n=(0,Y.oR)(),r=async r=>{const o=[];for(const t in c.value){const e=c.value[t];o.push({id:parseInt(e._id,10),num:e.count})}try{const c=await(0,C.v)("/api/order",{addressId:s,shopId:t,shopName:e.value,isCanceled:r,products:o});if(0===c?.errno){const e=JSON.parse(localStorage.cartList||"{}");delete e[t],localStorage.cartList=JSON.stringify(e),n.commit("clearCartData",t),a.push({name:"OrderList"})}}catch(i){console.log("下单失败")}};return{handleConfirmOrder:r}},E=()=>{const t=(0,f.iH)(!1),e=e=>{t.value=e};return{handleSubmitClick:e,showMask:t}};var G={name:"Order",setup(){const t=(0,w.yj)(),e=parseInt(t.params.id,10),c=t.query.addressId,{calacutions:s,shopName:a,productList:n}=(0,B.r)(e),{handleConfirmOrder:r}=K(e,a,n,c),{handleSubmitClick:o,showMask:i}=E();return{calacutions:s,handleSubmitClick:o,showMask:i,handleConfirmOrder:r,showSubmitBtn:!!c}}};const Q=(0,g.Z)(G,[["render",R],["__scopeId","data-v-1d91a668"]]);var V=Q,X={name:"OrderConfirmation",components:{TopArea:L,ProductList:j,Order:V}};const tt=(0,g.Z)(X,[["render",n],["__scopeId","data-v-0c888249"]]);var et=tt}}]);
//# sourceMappingURL=orderConfirmation.b6af6923.js.map