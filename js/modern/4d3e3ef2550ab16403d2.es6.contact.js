(window.webpackJsonp=window.webpackJsonp||[]).push([[6],[,,function(t,n,e){"use strict";function r(t){this.form=t,this.sending=!1}function o(){this.setListeners()}function i(){this.form.addEventListener("submit",this)}function s(){this.form.removeEventListener("submit",this)}function c(){return new FormData(this.form)}function u(){this.sending=!0,this.showSubmitting&&this.showSubmitting();const t=this.getFormData(this.form);this.sendFormHandler(this.form,t)}function f(){this.form.reset()}function h(t){switch(t.type){case"submit":return t.preventDefault(),this.submitForm()}}e.d(n,"b",(function(){return r})),e.d(n,"e",(function(){return o})),e.d(n,"g",(function(){return i})),e.d(n,"a",(function(){return s})),e.d(n,"c",(function(){return c})),e.d(n,"h",(function(){return u})),e.d(n,"f",(function(){return f})),e.d(n,"d",(function(){return h}))},,function(t,n,e){"use strict";function r(t){this.resetForm(),console.log(t)}function o(t){console.log(t)}function i(t,n){this.sendForm(t,n).then(t=>this.onSuccessHandler(t)).catch(t=>this.onErrorHandler(t)).finally(()=>{this.sending=!1,this.showSubmitting&&this.showSubmitting()})}e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return o})),e.d(n,"c",(function(){return i}))},,,function(t,n,e){"use strict";async function r(t,n){const e=Object.fromEntries(n),r=t.getAttribute("method"),o=t.getAttribute("enctype");console.log(e);const i={method:r||"POST",credentials:"same-origin",body:JSON.stringify(e),headers:{"Content-Type":o}};this.controller&&(i.signal=this.controller.signal);try{const t=await fetch("https://echo.htmlacademy.ru",i);if(!t.ok)throw new Error("server error");return t}catch(t){throw new Error(t.message)}}e.d(n,"a",(function(){return r}))},function(t,n,e){"use strict";var r=e(2),o=e(4),i=e(7);const s=r.b;s.prototype={constructor:s,init:r.e,setListeners:r.g,destroy:r.a,getFormData:r.c,resetForm:r.f,sendForm:i.a,submitForm:r.h,sendFormHandler:o.c,onSuccessHandler:o.b,onErrorHandler:o.a,handleEvent:r.d},n.a=s},,,,,,,function(t,n,e){e(16),t.exports=e(17)},function(t,n,e){"use strict";e.r(n);var r=e(8);const o=document.querySelector('[name="form-message"]');new r.a(o).init()},function(t,n,e){}],[[15,0]]]);