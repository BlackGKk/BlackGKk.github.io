(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{387:function(t,e,s){},434:function(t,e,s){"use strict";s(387)},455:function(t,e,s){"use strict";s.r(e);var n={name:"",data:()=>({strs:[{title:"有一份热，发一份光",stop:5},{title:"就如萤火一般"},{title:"也可以在黑暗里发一点光"},{title:"不必等候炬火"},{title:"此后如竟没有炬火"},{title:"我便是唯一的光"},{title:"愿与所有中国青年共勉"}],currentIndex:0,spans:null,el:null,titleEl:null}),mounted(){if(this.el)this.init();else{const t=setInterval(()=>{this.el=document.querySelector(".hero .description"),this.titleEl=document.querySelector(".hero  h1"),this.el&&(this.titleEl.style.fontWeight="bold",t&&clearInterval(t),this.init())},100)}},methods:{init(){this.currentIndex==this.strs.length&&(this.currentIndex=0);const t=this.strs[this.currentIndex];this.el.innerHTML=t instanceof Object?t.title:t,this.el.innerHTML=this.el.textContent.replace(/\S/g,"<span>$&</span>");let e=0;this.spans=[...document.querySelectorAll(".hero .description span")],this.spans.forEach((s,n)=>{e+=.1,t.hasOwnProperty("stop")&&(t.stop instanceof Array?t.stop.includes(n)&&(e+=.3):t.stop==n&&(e+=.3)),s.style.setProperty("--delay",e+"s")}),this.el.addEventListener("animationend",this.lastEnd)},lastEnd(t){t.target==document.querySelector(".hero .description span:last-child")&&(this.el.classList.add("ended"),setTimeout(()=>{this.el.removeEventListener("animationend",this.lastEnd);let t=0;this.spans.reverse().forEach((e,s)=>{this.el.classList.remove("ended"),e.style.width="2ch",e.style.animation="0.1s text-out ease-in-out forwards",t+=.05,e.style.animationDelay=t+"s"}),this.el.addEventListener("animationend",this.firstEnd)},1500))},firstEnd(t){t.target==document.querySelector(".hero .description span:first-child")&&(this.spans.forEach(t=>{t.remove()}),this.el.removeEventListener("animationend",this.firstEnd),this.currentIndex++,this.init())}}},i=(s(434),s(2)),l=Object(i.a)(n,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);e.default=l.exports}}]);