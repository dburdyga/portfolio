!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){console.log("Hello User Name, ready for London?");var n=function(){var e=document.querySelector(".blog"),t=document.querySelector(".user-blog"),n=document.querySelector(".arrow-scroll");return{move:function(e,t,n){var r="translate3d(0,"+(t/-n+"%")+",0)",i=e.style;i.transform=r,i.webkitTransform=r},init:function(r){this.move(e,r,45),this.move(t,r,20),this.move(n,r,20)}}}();window.onscroll=function(){var e=window.pageYOffset;n.init(e)},$(document).ready(function(){$(".log-in").click(function(e){e.preventDefault(),$(".user-login").toggleClass("user-login--visible"),$(".user").addClass("user--hidden"),$(".log-in").addClass("log-in--hidden")})});CodeMirror.fromTextArea(document.getElementById("code"),{lineNumbers:!0,matchBrackets:!0,mode:"application/x-httpd-php",indentUnit:4});var r=document.getElementById("parallax").children,i=function(e){var t=window.innerWidth/2-e.pageX,n=window.innerHeight/2-e.pageY;[].slice.call(r).forEach(function(e,r){var i=r/100,o=t*i,a=n*i,s=window.innerHeight/2*i,l="translate("+o+"px,"+a+"px)",c=e.firstElementChild;e.style.transform=l,c.style.bottom="-"+s+"px"})};window.addEventListener("mousemove",i);for(var o=document.getElementById("log-in"),a=document.querySelector(".user"),s=document.querySelector(".user-login"),l=document.getElementById("navigation__humburger"),c=document.querySelector(".menu"),d=document.querySelector(".drop-left"),u=document.querySelector(".drop-right"),m=($(window),document.getElementsByClassName("saidbar__item")),v="saidbar__item-active",f=0;f<m.length;f++)m[f].addEventListener("click",function(){if(this.classList.contains(v))this.classList.remove(v);else for(var e=0;e<m.length;e++)m[e].classList.remove(v),this.classList.add(v)});o?o.addEventListener("click",function(){a.style.cssText="transform: rotateY(180deg) translate(50%,-50%);         backface-visibility: hidden;         transition: 1s; ",s.style.cssText="transform: translate(-50%, -50%);  ",o.style.display="none"}):l.addEventListener("click",()=>{l.classList.contains("navigation__humburger_active")?(l.classList.remove("navigation__humburger_active"),c.classList.remove("menu_active"),d.classList.remove("drop-left_active"),u.classList.remove("drop-right_active")):(l.classList.add("navigation__humburger_active"),c.classList.add("menu_active"),d.classList.add("drop-left_active"),u.classList.add("drop-right_active"))});r=document.getElementById("parallax").children,i=function(e){var t=window.innerWidth/2-e.pageX,n=window.innerHeight/2-e.pageY;[].slice.call(r).forEach(function(e,r){var i=r/40,o=t*i,a=n*i,s=window.innerHeight/2*i,l="translate("+o+"px,"+a+"px)",c=e.firstElementChild;e.style.transform=l,c.style.bottom="-"+s+"px"})};window.addEventListener("mousemove",i)}]);