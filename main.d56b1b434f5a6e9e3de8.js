!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=32)}([function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")()}).call(this,n(34))},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(4),i=n(20),o=n(16);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(1);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,t,n){var r=n(5);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t,n){var r=n(17),i=n(6);e.exports=function(e){return r(i(e))}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var r=n(0),i=n(3);e.exports=function(e,t){try{i(r,e,t)}catch(n){r[e]=t}return t}},function(e,t,n){var r=n(8),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},function(e,t,n){"use strict";var r,i,o=n(60),a=n(61),c=RegExp.prototype.exec,s=String.prototype.replace,l=c,u=(r=/a/,i=/b*/g,c.call(r,"a"),c.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),f=a.UNSUPPORTED_Y||a.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(u||p||f)&&(l=function(e){var t,n,r,i,a=this,l=f&&a.sticky,_=o.call(a),d=a.source,v=0,h=e;return l&&(-1===(_=_.replace("y","")).indexOf("g")&&(_+="g"),h=String(e).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==e[a.lastIndex-1])&&(d="(?: "+d+")",h=" "+h,v++),n=new RegExp("^(?:"+d+")",_)),p&&(n=new RegExp("^"+d+"$(?!\\s)",_)),u&&(t=a.lastIndex),r=c.call(l?n:a,h),l?r?(r.input=r.input.slice(v),r[0]=r[0].slice(v),r.index=a.lastIndex,a.lastIndex+=r[0].length):a.lastIndex=0:u&&r&&(a.lastIndex=a.global?r.index+r[0].length:t),p&&r&&r.length>1&&s.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),e.exports=l},function(e,t,n){var r=n(0),i=n(15).f,o=n(3),a=n(21),c=n(11),s=n(41),l=n(51);e.exports=function(e,t){var n,u,f,p,_,d=e.target,v=e.global,h=e.stat;if(n=v?r:h?r[d]||c(d,{}):(r[d]||{}).prototype)for(u in t){if(p=t[u],f=e.noTargetGet?(_=i(n,u))&&_.value:n[u],!l(v?u:d+(h?".":"#")+u,e.forced)&&void 0!==f){if(typeof p==typeof f)continue;s(p,f)}(e.sham||f&&f.sham)&&o(p,"sham",!0),a(n,u,p,e)}}},function(e,t,n){var r=n(4),i=n(35),o=n(16),a=n(9),c=n(18),s=n(2),l=n(19),u=Object.getOwnPropertyDescriptor;t.f=r?u:function(e,t){if(e=a(e),t=c(t,!0),l)try{return u(e,t)}catch(e){}if(s(e,t))return o(!i.f.call(e,t),e[t])}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(1),i=n(10),o="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?o.call(e,""):Object(e)}:Object},function(e,t,n){var r=n(5);e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var r=n(4),i=n(1),o=n(36);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(4),i=n(19),o=n(7),a=n(18),c=Object.defineProperty;t.f=r?c:function(e,t,n){if(o(e),t=a(t,!0),o(n),i)try{return c(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(0),i=n(3),o=n(2),a=n(11),c=n(22),s=n(37),l=s.get,u=s.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var s=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof t||o(n,"name")||i(n,"name",t),u(n).source=f.join("string"==typeof t?t:"")),e!==r?(s?!p&&e[t]&&(l=!0):delete e[t],l?e[t]=n:i(e,t,n)):l?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||c(this)}))},function(e,t,n){var r=n(23),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return i.call(e)}),e.exports=r.inspectSource},function(e,t,n){var r=n(0),i=n(11),o=r["__core-js_shared__"]||i("__core-js_shared__",{});e.exports=o},function(e,t,n){var r=n(40),i=n(23);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},function(e,t){e.exports={}},function(e,t,n){"use strict";var r=n(52).forEach,i=n(58),o=n(59),a=i("forEach"),c=o("forEach");e.exports=a&&c?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},function(e,t,n){var r=n(6);e.exports=function(e){return Object(r(e))}},function(e,t,n){var r=n(0),i=n(24),o=n(2),a=n(25),c=n(30),s=n(57),l=i("wks"),u=r.Symbol,f=s?u:u&&u.withoutSetter||a;e.exports=function(e){return o(l,e)||(c&&o(u,e)?l[e]=u[e]:l[e]=f("Symbol."+e)),l[e]}},function(e,t,n){var r=n(1);e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(e,t,n){"use strict";var r=n(14),i=n(13);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},function(e,t,n){"use strict";n.r(t);n(33),n(31),n(62),n(67),n(69);var r=document.getElementsByName("author-link"),i=document.getElementById("popup_login"),o=document.getElementById("popup_registration"),a=document.getElementsByClassName("popup_close-button"),c=document.getElementsByName("enter_button"),s=document.getElementsByName("reg_button"),l=document.getElementById("logged_in_form_black"),u=document.getElementById("logged_out_form_black"),f=document.getElementById("login_form_white"),p=document.getElementsByName("exit_button_black"),_=document.getElementsByName("saved_articles_link"),d=document.getElementById("home"),v=document.getElementById("search"),h=document.getElementById("results"),g=document.getElementById("about"),b=document.getElementsByName("logged_in_main_link"),m=document.getElementsByName("search_action"),y=document.getElementsByClassName("loading"),E=document.getElementById("not-found"),L=document.getElementById("search_input"),x=document.getElementById("results_title"),k=document.getElementById("results_button"),S=document.getElementsByName("bookmark"),w=document.getElementsByName("waste"),I=document.getElementsByName("category"),O=document.getElementsByName("alter_link"),P=document.getElementById("popup_success_registration"),T=document.getElementsByName("entrance_after_registration"),B=document.getElementsByName("delete_alert"),N=document.getElementsByName("mobile_menu_button"),j=document.getElementById("grey"),A=document.querySelectorAll(".header_line");r.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),e.stopImmediatePropagation(),i.classList.replace("popup_login__invisible","popup_login"),i.classList.replace("popup__invisible","popup"),j.classList.replace("grey__invisible","grey__visible")}))})),a.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),e.target.parentNode.classList.replace("popup","popup__invisible"),j.classList.replace("grey__visible","grey__invisible")}))})),c.forEach((function(e){e.addEventListener("click",(function(e){e.target.closest(".popup_login").classList.replace("popup","popup__invisible"),u.classList.replace("header-black","header-black__invisible"),l.classList.replace("header-black-logged-in__invisible","header-black-logged-in__visible"),_.forEach((function(e){e.classList.add("header_saved-link__visible")})),j.classList.replace("grey__visible","grey__invisible")}))})),p.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),e.stopImmediatePropagation(),u.classList.replace("header-black__invisible","header-black"),l.classList.replace("header-black-logged-in__visible","header-black-logged-in__invisible")}))})),_.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),l.classList.replace("header-black-logged-in__visible","header-black-logged-in__invisible"),f.classList.replace("header-white__invisible","header-white__visible"),d.classList.replace("header-home__invisible","header-home"),v.classList.replace("header-search","header-search__invisible"),h.classList.replace("results__invisible","results"),g.classList.replace("about","about__invisible"),S.forEach((function(e){e.classList.replace("results_card-bookmark","results_card-bookmark__invisible")})),w.forEach((function(e){e.classList.replace("results_waste__invisible","results_waste")})),I.forEach((function(e){e.classList.replace("results_card-category__invisible","results_card-category")})),y.forEach((function(e){e.classList.replace("loading","loading__invisible")})),E.classList.replace("not-found","not-found__invisible")}))})),b.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),e.stopImmediatePropagation(),l.classList.replace("header-black-logged-in__invisible","header-black-logged-in"),f.classList.replace("header-white","header-white__invisible"),d.classList.replace("header-home","header-home__invisible"),v.classList.replace("header-search__invisible","header-search"),h.classList.replace("results","results__invisible"),g.classList.replace("about__invisible","about")}))})),m.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),h.classList.replace("results","results__invisible"),E.classList.contains("not-found")&&E.classList.replace("not-found","not-found__invisible"),S.forEach((function(e){e.classList.replace("results_card-bookmark__invisible","results_card-bookmark")})),w.forEach((function(e){e.classList.replace("results_card-waste","results_card-waste__invisible")})),I.forEach((function(e){e.classList.replace("results_card-category","results_card-category__invisible")})),B.forEach((function(e){e.classList.replace("results_card-delete","results_card-delete__invisible")})),w.forEach((function(e){e.classList.replace("results_waste","results_waste__invisible")})),y.forEach((function(e){e.classList.replace("loading__invisible","loading")})),setTimeout((function(){y.forEach((function(e){e.classList.replace("loading","loading__invisible")})),"статьи"===L.value?(h.classList.replace("results__invisible","results"),x.classList.replace("results_title__invisible","results_title"),k.classList.replace("results_button__invisible","results_button")):E.classList.replace("not-found__invisible","not-found")}),2e3)}))})),S.forEach((function(e){e.addEventListener("click",(function(e){e.target.classList.contains("results_card-bookmark__blue-flag")?e.target.classList.replace("results_card-bookmark__blue-flag","results_card-bookmark__white-flag"):u.classList.contains("header-black")?(e.target.nextElementSibling.classList.replace("results_card-author-expected__invisible","results_card-author-expected"),setTimeout((function(){e.target.nextElementSibling.classList.replace("results_card-author-expected","results_card-author-expected__invisible")}),3e3)):e.target.classList.replace("results_card-bookmark__white-flag","results_card-bookmark__blue-flag")}))})),w.forEach((function(e){e.addEventListener("mouseover",(function(e){e.target.classList.replace("results_waste__white-waste","results_waste__black-waste"),e.target.nextSibling.nextElementSibling.classList.replace("results_card-delete__invisible","results_card-delete")})),e.addEventListener("mouseout",(function(e){e.target.classList.replace("results_waste__black-waste","results_waste__white-waste")}))})),O.forEach((function(e){e.addEventListener("click",(function(e){"Зарегистрироваться"===e.target.textContent?(i.classList.replace("popup_login","popup_login__invisible"),i.classList.replace("popup","popup__invisible"),o.classList.replace("popup__invisible","popup")):(i.classList.replace("popup_login__invisible","popup_login"),i.classList.replace("popup__invisible","popup"),o.classList.replace("popup","popup__invisible"))}))})),s.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),o.classList.replace("popup","popup__invisible"),P.classList.replace("popup__invisible","popup")}))})),T.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),P.classList.replace("popup","popup__invisible"),i.classList.replace("popup_login__invisible","popup_login"),i.classList.replace("popup__invisible","popup")}))})),N.forEach((function(e){e.addEventListener("click",(function(e){e.target.classList.contains("header_mobile-menu__black-stripes")?(e.target.classList.replace("header_mobile-menu__black-stripes","header_mobile-menu__black-cross"),f.classList.replace("header-white__mobile-short","header-white__mobile-full"),f.classList.replace("header-white__bordered","header-white__unbordered"),A.forEach((function(e){e.classList.remove("header_line__invisible")}))):(e.target.classList.replace("header_mobile-menu__black-cross","header_mobile-menu__black-stripes"),A.forEach((function(e){e.classList.add("header_line__invisible")})),f.classList.replace("header-white__mobile-full","header-white__mobile-short"),f.classList.replace("header-white__unbordered","header-white__bordered")),e.target.classList.contains("header_mobile-menu__white-stripes")?(e.target.classList.replace("header_mobile-menu__white-stripes","header_mobile-menu__white-cross"),A.forEach((function(e){e.classList.remove("header_line__invisible")})),e.target.parentNode.classList.contains("header-black")?u.classList.replace("header-black__mobile-short","header-black__mobile-full"):(l.classList.replace("header-black-logged-in__mobile-short","header-black-logged-in__mobile-full"),A.forEach((function(e){e.classList.remove("header_line__invisible")})),b.forEach((function(e){e.classList.replace("header_main-link__invisible","header_main-link__visible")})),_.forEach((function(e){e.classList.replace("header_saved-link__invisible","header_saved-link__visible"),e.classList.remove("header_saved-link__passive")})),p.forEach((function(e){e.classList.replace("header-black-logged-in_exit-link__invisible","header-black-logged-in_exit-link__visible")})))):(e.target.classList.replace("header_mobile-menu__white-cross","header_mobile-menu__white-stripes"),e.target.parentNode.classList.contains("header-black")?u.classList.replace("header-black__mobile-full","header-black__mobile-short"):l.classList.replace("header-black-logged-in__mobile-full","header-black-logged-in__mobile-short"))}))}))},function(e,t,n){"use strict";var r=n(14),i=n(27);r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);t.f=o?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},function(e,t,n){var r=n(0),i=n(5),o=r.document,a=i(o)&&i(o.createElement);e.exports=function(e){return a?o.createElement(e):{}}},function(e,t,n){var r,i,o,a=n(38),c=n(0),s=n(5),l=n(3),u=n(2),f=n(39),p=n(26),_=c.WeakMap;if(a){var d=new _,v=d.get,h=d.has,g=d.set;r=function(e,t){return g.call(d,e,t),t},i=function(e){return v.call(d,e)||{}},o=function(e){return h.call(d,e)}}else{var b=f("state");p[b]=!0,r=function(e,t){return l(e,b,t),t},i=function(e){return u(e,b)?e[b]:{}},o=function(e){return u(e,b)}}e.exports={set:r,get:i,has:o,enforce:function(e){return o(e)?i(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!s(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},function(e,t,n){var r=n(0),i=n(22),o=r.WeakMap;e.exports="function"==typeof o&&/native code/.test(i(o))},function(e,t,n){var r=n(24),i=n(25),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},function(e,t){e.exports=!1},function(e,t,n){var r=n(2),i=n(42),o=n(15),a=n(20);e.exports=function(e,t){for(var n=i(t),c=a.f,s=o.f,l=0;l<n.length;l++){var u=n[l];r(e,u)||c(e,u,s(t,u))}}},function(e,t,n){var r=n(43),i=n(45),o=n(50),a=n(7);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(a(e)),n=o.f;return n?t.concat(n(e)):t}},function(e,t,n){var r=n(44),i=n(0),o=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e])||o(i[e]):r[e]&&r[e][t]||i[e]&&i[e][t]}},function(e,t,n){var r=n(0);e.exports=r},function(e,t,n){var r=n(46),i=n(49).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},function(e,t,n){var r=n(2),i=n(9),o=n(47).indexOf,a=n(26);e.exports=function(e,t){var n,c=i(e),s=0,l=[];for(n in c)!r(a,n)&&r(c,n)&&l.push(n);for(;t.length>s;)r(c,n=t[s++])&&(~o(l,n)||l.push(n));return l}},function(e,t,n){var r=n(9),i=n(12),o=n(48),a=function(e){return function(t,n,a){var c,s=r(t),l=i(s.length),u=o(a,l);if(e&&n!=n){for(;l>u;)if((c=s[u++])!=c)return!0}else for(;l>u;u++)if((e||u in s)&&s[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},function(e,t,n){var r=n(8),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var r=n(1),i=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=s&&("function"==typeof t?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(i,".").toLowerCase()},c=o.data={},s=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},function(e,t,n){var r=n(53),i=n(17),o=n(28),a=n(12),c=n(55),s=[].push,l=function(e){var t=1==e,n=2==e,l=3==e,u=4==e,f=6==e,p=5==e||f;return function(_,d,v,h){for(var g,b,m=o(_),y=i(m),E=r(d,v,3),L=a(y.length),x=0,k=h||c,S=t?k(_,L):n?k(_,0):void 0;L>x;x++)if((p||x in y)&&(b=E(g=y[x],x,m),e))if(t)S[x]=b;else if(b)switch(e){case 3:return!0;case 5:return g;case 6:return x;case 2:s.call(S,g)}else if(u)return!1;return f?-1:l||u?u:S}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},function(e,t,n){var r=n(54);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,t,n){var r=n(5),i=n(56),o=n(29)("species");e.exports=function(e,t){var n;return i(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!i(n.prototype)?r(n)&&null===(n=n[o])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},function(e,t,n){var r=n(10);e.exports=Array.isArray||function(e){return"Array"==r(e)}},function(e,t,n){var r=n(30);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},function(e,t,n){var r=n(4),i=n(1),o=n(2),a=Object.defineProperty,c={},s=function(e){throw e};e.exports=function(e,t){if(o(c,e))return c[e];t||(t={});var n=[][e],l=!!o(t,"ACCESSORS")&&t.ACCESSORS,u=o(t,0)?t[0]:s,f=o(t,1)?t[1]:void 0;return c[e]=!!n&&!i((function(){if(l&&!r)return!0;var e={length:-1};l?a(e,1,{enumerable:!0,get:s}):e[1]=1,n.call(e,u,f)}))}},function(e,t,n){"use strict";var r=n(7);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},function(e,t,n){"use strict";var r=n(1);function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},function(e,t,n){"use strict";var r=n(63),i=n(7),o=n(28),a=n(12),c=n(8),s=n(6),l=n(64),u=n(66),f=Math.max,p=Math.min,_=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(e,t,n,r){var h=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=r.REPLACE_KEEPS_$0,b=h?"$":"$0";return[function(n,r){var i=s(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,i,r):t.call(String(i),n,r)},function(e,r){if(!h&&g||"string"==typeof r&&-1===r.indexOf(b)){var o=n(t,e,this,r);if(o.done)return o.value}var s=i(e),_=String(this),d="function"==typeof r;d||(r=String(r));var v=s.global;if(v){var y=s.unicode;s.lastIndex=0}for(var E=[];;){var L=u(s,_);if(null===L)break;if(E.push(L),!v)break;""===String(L[0])&&(s.lastIndex=l(_,a(s.lastIndex),y))}for(var x,k="",S=0,w=0;w<E.length;w++){L=E[w];for(var I=String(L[0]),O=f(p(c(L.index),_.length),0),P=[],T=1;T<L.length;T++)P.push(void 0===(x=L[T])?x:String(x));var B=L.groups;if(d){var N=[I].concat(P,O,_);void 0!==B&&N.push(B);var j=String(r.apply(void 0,N))}else j=m(I,_,O,P,B,r);O>=S&&(k+=_.slice(S,O)+j,S=O+I.length)}return k+_.slice(S)}];function m(e,n,r,i,a,c){var s=r+e.length,l=i.length,u=v;return void 0!==a&&(a=o(a),u=d),t.call(c,u,(function(t,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(s);case"<":c=a[o.slice(1,-1)];break;default:var u=+o;if(0===u)return t;if(u>l){var f=_(u/10);return 0===f?t:f<=l?void 0===i[f-1]?o.charAt(1):i[f-1]+o.charAt(1):t}c=i[u-1]}return void 0===c?"":c}))}}))},function(e,t,n){"use strict";n(31);var r=n(21),i=n(1),o=n(29),a=n(13),c=n(3),s=o("species"),l=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u="$0"==="a".replace(/./,"$0"),f=o("replace"),p=!!/./[f]&&""===/./[f]("a","$0"),_=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var d=o(e),v=!i((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),h=v&&!i((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[s]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!v||!h||"replace"===e&&(!l||!u||p)||"split"===e&&!_){var g=/./[d],b=n(d,""[e],(function(e,t,n,r,i){return t.exec===a?v&&!i?{done:!0,value:g.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),m=b[0],y=b[1];r(String.prototype,e,m),r(RegExp.prototype,d,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}f&&c(RegExp.prototype[d],"sham",!0)}},function(e,t,n){"use strict";var r=n(65).charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},function(e,t,n){var r=n(8),i=n(6),o=function(e){return function(t,n){var o,a,c=String(i(t)),s=r(n),l=c.length;return s<0||s>=l?e?"":void 0:(o=c.charCodeAt(s))<55296||o>56319||s+1===l||(a=c.charCodeAt(s+1))<56320||a>57343?e?c.charAt(s):o:e?c.slice(s,s+2):a-56320+(o-55296<<10)+65536}};e.exports={codeAt:o(!1),charAt:o(!0)}},function(e,t,n){var r=n(10),i=n(13);e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var o=n.call(e,t);if("object"!=typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},function(e,t,n){var r=n(0),i=n(68),o=n(27),a=n(3);for(var c in i){var s=r[c],l=s&&s.prototype;if(l&&l.forEach!==o)try{a(l,"forEach",o)}catch(e){l.forEach=o}}},function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(e,t,n){}]);