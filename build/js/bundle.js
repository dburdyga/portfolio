!function(e){function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var r={};o.m=e,o.c=r,o.d=function(e,r,n){o.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},o.p="",o(o.s=0)}([function(e,o){console.log("Hello User Name, ready for London?");var r=function(){var e=document.querySelector(".blog"),o=document.querySelector(".user-blog"),r=document.querySelector(".arrow-scroll");return{move:function(e,o,r){var n="translate3d(0,"+(o/-r+"%")+",0)",t=e.style;t.transform=n,t.webkitTransform=n},init:function(n){this.move(e,n,45),this.move(o,n,20),this.move(r,n,20)}}}();window.onscroll=function(){var e=window.pageYOffset;r.init(e)},$(document).ready(function(){$(".log-in").click(function(){$(".user").toggleClass("user-login"),$(".user").removeClass("user--visible")})});CodeMirror(document.body,{value:"function myScript(){return 100;}\n",mode:"javascript"}),CodeMirror.fromTextArea(document.getElementById("code"),{lineNumbers:!0,matchBrackets:!0,mode:"application/x-httpd-php",indentUnit:4})}]);