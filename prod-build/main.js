(()=>{var e={252:e=>{"use strict";e.exports=require("express")}},t={};function r(s){var o=t[s];if(void 0!==o)return o.exports;var p=t[s]={exports:{}};return e[s](p,p.exports,r),p.exports}(()=>{const e=r(252),t=e();t.use(e.static("public")),t.get("/",((e,t)=>{t.send("Welcome to DeepHealth.")})),t.get("/products",((e,t)=>{t.send("Welcome to DeepHealth Products.")})),t.listen(3e3,(()=>{}))})()})();