!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){console.log("Hello User Name, ready for London?");var n=function(){var e=document.querySelector(".blog"),t=document.querySelector(".user-blog"),n=document.querySelector(".arrow-scroll");return{move:function(e,t,n){var o="translate3d(0,"+(t/-n+"%")+",0)",r=e.style;r.transform=o,r.webkitTransform=o},init:function(o){this.move(e,o,45),this.move(t,o,20),this.move(n,o,20)}}}();window.onscroll=function(){var e=window.pageYOffset;n.init(e)};document.getElementById("log-in"),document.querySelector(".user"),document.querySelector(".user-login"),document.getElementById("navigation__humburger"),document.querySelector(".menu"),document.querySelector(".drop-left"),document.querySelector(".drop-right"),$(window);$(document).ready(function(){$(".log-in").click(function(e){e.preventDefault(),$(".user-login").toggleClass("user-login--visible"),$(".user").addClass("user--hidden"),$(".log-in").addClass("log-in--hidden")})}),$(document).ready(function(){$(".navigation__humburger").click(function(e){$(".navigation__humburger").addClass("navigation__humburger_active"),$(".drop-left").addClass("drop-left_active"),$(".drop-right").addClass("drop-right_active"),$(".menu").addClass("menu_active")}),$(".navigation__humburger").click(function(e){console.log("ok")})});for(var o=document.getElementsByClassName("saidbar__item"),r="saidbar__item-active",i=0;i<o.length;i++)o[i].addEventListener("click",function(){if(this.classList.contains(r))this.classList.remove(r);else for(var e=0;e<o.length;e++)o[e].classList.remove(r),this.classList.add(r)})}]);