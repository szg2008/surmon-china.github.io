(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{230:function(t,e,n){"use strict";var o=n(16),r=n(17),c=Object(o.b)({name:"AliyunSwiperAd",setup:function(){return{aliyunAds:r.b.ALIYUN_ADS,swiperOption:{mousewheel:!0,autoHeight:!0,loop:!0,direction:"vertical",autoplay:{delay:2600,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}}}}),l=(n(257),n(258),n(12)),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mammon aliyun"},[e("client-only",[e("swiper",{staticClass:"swiper",attrs:{options:this.swiperOption}},[this._l(this.aliyunAds,(function(t,n){return e("swiper-slide",{key:n,staticClass:"slide"},[e("a",{staticClass:"link",attrs:{href:t.url,target:"_blank"}},[e("div",{staticClass:"image",style:{backgroundImage:"url("+t.image+")"}})])])})),this._v(" "),e("div",{staticClass:"swiper-pagination aliyun-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)],1)}),[],!1,null,"5be0006c",null);component.options.__file="aliyun-swiper.vue";var v,d=component.exports;!function(t){t.Aliyun="Aliyun",t.GoogleAdSense1="GoogleAdSense1",t.GoogleAdSense2="GoogleAdSense2"}(v||(v={}));var f=[v.Aliyun],m=[v.GoogleAdSense1,v.GoogleAdSense2],_=Object(o.b)({name:"mammon",components:{AliyunSwiperAd:d},props:{provider:{type:String,default:v.GoogleAdSense1}},setup:function(t){return{isEnabledAliyun:Object(o.a)((function(){return t.provider===v.Aliyun})),isEnabledGA1:Object(o.a)((function(){return t.provider===v.GoogleAdSense1})),isEnabledGA2:Object(o.a)((function(){return t.provider===v.GoogleAdSense2}))}}});n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return f})),n.d(e,"d",(function(){return m}));var h=Object(l.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return this.isEnabledAliyun?e("aliyun-swiper-ad",{key:"aliyun"}):this.isEnabledGA1?e("adsense-responsive-ad-1",{key:"gad1"}):this.isEnabledGA2?e("adsense-responsive-ad-2",{key:"gad2"}):this._e()}),[],!1,null,null,null);h.options.__file="index.vue";e.c=h.exports},232:function(t,e,n){},233:function(t,e,n){},234:function(t,e,n){},238:function(t,e,n){"use strict";var o=n(17),r=n(16),c=n(59),l=n(259),v=n(243),d=Object(r.b)({name:"homepage-example-card",props:{title:{type:String,required:!0},path:{type:String,required:!1}},components:{HomepageBasicCard:v.a},setup:function(t){var e=Object(l.b)();return{fileUrl:t.path&&Object(c.b)(o.b.GITHUB_UID,o.b.PROJECT_NAME,t.path)||"",handleViewCode:function(){t.title&&t.path&&e.open(t.title,t.path)}}}}),f=(n(312),n(12)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homepage-example-card"},[n("homepage-basic-card",{attrs:{title:t.title,titleLink:t.fileUrl}},[n("div",{staticClass:"actions",attrs:{slot:"actions"},slot:"actions"},[t._t("actions"),t._v(" "),t.path?n("button",{staticClass:"code-button",on:{click:t.handleViewCode}},[n("i",{staticClass:"iconfont icon-code"})]):t._e()],2),t._v(" "),t._t("default")],2)],1)}),[],!1,null,"029aaa00",null);component.options.__file="card-example.vue";e.a=component.exports},243:function(t,e,n){"use strict";var o=n(16),r=Object(o.b)({name:"homepage-basic-card",props:{title:String,titleLink:String}}),c=(n(311),n(12)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homepage-card"},[t.title?n("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[t.titleLink?n("a",{staticClass:"link",attrs:{href:t.titleLink,target:"_blank"}},[n("span",[t._v(t._s(t.title))]),t._v(" "),n("i",{staticClass:"iconfont icon-link-external"})]):n("span",[t._v(t._s(t.title))]),t._v(" "),t._t("actions")],2):t._e(),t._v(" "),n("div",{staticClass:"content"},[t._t("default")],2)])}),[],!1,null,"39817b48",null);component.options.__file="card-basic.vue";e.a=component.exports},244:function(t,e,n){"use strict";var o=n(16),r=Object(o.b)({name:"loading"}),c=(n(314),n(12)),component=Object(c.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading"},[e("i",{staticClass:"iconfont icon-clock"}),this._v(" "),e("span",[this._v("Loading...")])])}],!1,null,"6769f9cf",null);component.options.__file="loading.vue";e.a=component.exports},245:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));n(127),n(27),n(28),n(14),n(131);var o=n(17);function r(t){return Object.values(t).map((function(component){var t=component.name,title=component.title,e=component.__file,n=(null==e?void 0:e.split("/"))||[];return{name:t,title:title||t,fileName:n[n.length-1],component:component}}))}function c(t,e){var n=["".concat(o.b.GITHUB_UID," ").concat(t),"".concat(t," github homepage"),"".concat(t," examples"),"How to use ".concat(t,"?")],r=e?" | ".concat(e," "):"",title="".concat(t," | Homepage").concat(r);return{title:title,meta:[{hid:"keywords",name:"keywords",content:n.join(",")},{hid:"description",name:"description",content:e||title}]}}},250:function(t,e,n){"use strict";n(27);var o=n(16),r=n(64),c=n(59),base=n(298),l=n(230),v=n(243),d=n(17),f=(n(252),n(253)),m=function(t){return document.querySelector(t)},_=function(element,t,e){Array.isArray(t)||(t=[t]),t.forEach((function(t){element.addEventListener(t,e,{passive:!0})}))},h=function(element,t,e){Array.isArray(t)||(t=[t]),t.forEach((function(t){element.removeEventListener(t,e)}))},C={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2?arguments[2]:void 0;(n=n||{}).easing=C.ease;var o=m("html, body"),r=["scroll","mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],c=!1,l=function(){c=!0};_(o,r,l);var v=0,d=window.pageYOffset;if("number"==typeof t)v=t;else{var element="string"==typeof t?m(t):t;v=d+element.getBoundingClientRect().top}var y=document.body.scrollHeight-v<window.innerHeight?document.body.scrollHeight-window.innerHeight:v;n.offset&&(y+=n.offset);var w,O=y-d,j=Reflect.apply(f,f,n.easing),k=function(){h(o,r,l),c&&n.onCancel&&n.onCancel(),!c&&n.onDone&&n.onDone()};O&&window.requestAnimationFrame((function t(n){if(c)return k();w||(w=n);var time=n-w,progress=Math.min(time/e,1);progress=j(progress),window.scrollTo(0,d+O*progress),time<e?window.requestAnimationFrame(t):k()}))},w=Object(o.b)({name:"toolbox",setup:function(t,e){var n=e.root,r=Object(o.h)(0),c=Object(o.h)(!1),l=Object(o.h)(!1),v=function(){r.value=window.requestAnimationFrame((function t(){var e=window.scrollY,n=document.body.scrollHeight-window.innerHeight;return l.value&&(e+=1),c.value&&(e-=1),e<0?e=0:e>=n&&(e=n),e>0&&e<n&&(window.scrollTo(0,e),l.value||c.value?void(r.value=window.requestAnimationFrame(t)):(window.cancelAnimationFrame(r.value),!1))}))};return{githubUserUrl:d.b.GITHUB_USER_URL,email:Object(o.a)((function(){var t;return null===(t=n.$store.state.userInfo)||void 0===t?void 0:t.email})),totop:function(){y("body",300,{easing:C["ease-in"]})},toBottom:function(){y(window.scrollY+window.innerHeight,300,{easing:C["ease-in"]})},setTopButtonState:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];c.value=t,window.cancelAnimationFrame(r.value),e&&v()},setBottomButtonState:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];l.value=t,window.cancelAnimationFrame(r.value),e&&v()}}}}),O=(n(313),n(12)),component=Object(O.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"toolbox"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"tool-list"},[n("a",{staticClass:"item",attrs:{title:"to github homepage",target:"_blank",href:t.githubUserUrl}},[n("i",{staticClass:"iconfont icon-github"})]),t._v(" "),t._m(0),t._v(" "),t.email?n("a",{staticClass:"item",attrs:{href:"mailto:"+t.email,target:"_blank"}},[n("i",{staticClass:"iconfont icon-mail"})]):t._e(),t._v(" "),n("button",{staticClass:"item to-page-top",on:{click:t.totop,mouseover:function(e){return t.setTopButtonState(!0,!0)},mouseleave:function(e){return t.setTopButtonState(!1)}}},[n("i",{staticClass:"iconfont icon-arrow-up"})]),t._v(" "),n("button",{staticClass:"item to-page-bottom",on:{click:t.toBottom,mouseover:function(e){return t.setBottomButtonState(!0,!0)},mouseleave:function(e){return t.setBottomButtonState(!1)}}},[n("i",{staticClass:"iconfont icon-arrow-down"})])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"item experiment",attrs:{target:"_blank",title:"to projects page",href:"/"}},[e("i",{staticClass:"iconfont icon-experiment"})])}],!1,null,"3da1b74e",null);component.options.__file="toolbox.vue";var j=component.exports,k=(n(85),n(45),n(28),n(14),n(61),n(5)),S=n(79),A=n(244),x=n(259);function U(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var E=Object(o.b)({name:"homepage-modal",components:{Loading:A.a},setup:function(t,e){e.root;var n=Object(x.b)(),code=Object(o.a)((function(){var t,content=null===(t=n.content)||void 0===t?void 0:t.value;return content&&"\n"+S.a.highlightAuto(content).value}));return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?U(Object(source),!0).forEach((function(e){Object(k.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):U(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},n,{code:code})}}),D=(n(315),Object(O.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"module"}},[t.visible?n("div",{staticClass:"homepage-modal"},[n("div",{staticClass:"modal"},[n("p",{staticClass:"title"},[n("a",{staticClass:"link",attrs:{href:t.fileUrl,target:"_blank"}},[n("span",[t._v(t._s(t.title)+" ("+t._s(t.path)+")")]),t._v(" "),n("i",{staticClass:"iconfont icon-link-external"})]),t._v(" "),n("button",{staticClass:"close",on:{click:t.close}},[n("i",{staticClass:"iconfont icon-close"})])]),t._v(" "),n("div",{staticClass:"content"},[n("transition",{attrs:{name:"module",mode:"out-in"}},[t.isLoading?n("Loading",{staticClass:"loading"}):t.code?n("pre",{staticClass:"code"},[t._v("            "),n("code",{attrs:{"data-lang":t.fileExt},domProps:{innerHTML:t._s(t.code)}}),t._v("\n          ")]):n("p",[t._v("No data")])],1)],1)])]):t._e()])}),[],!1,null,"1ecfb2df",null));D.options.__file="modal.vue";var I=D.exports,B=Object(o.b)({name:"homepage",components:{Mammon:l.c,Loading:A.a,HomepageBasicCard:v.a,HomepageToolbox:j,HomepageModal:I,GithubButtonBase:base.a},props:{name:{type:String,required:!1},repositorieId:{type:String,required:!0},headerAdProvider:{type:String,required:!1},footerAdProvider:{type:String,required:!1}},setup:function(t,e){var n=e.root;Object(x.a)();var l=n.$store.state,v=Object(o.a)((function(){return n.$store.getters[r.StoreNames.GetRepositorieDetail](t.repositorieId)})),f=d.b.GITHUB_UID,m=d.b.GITHUB_USER_URL,_=Object(o.a)((function(){var t;return null===(t=l.userInfo)||void 0===t?void 0:t.blog})),h=Object(o.a)((function(){return n.$route.name})),C=Object(o.a)((function(){return Object(c.c)(f,t.repositorieId)})),y=Object(o.a)((function(){var e;return t.name||(null===(e=v.value)||void 0===e?void 0:e.name)||t.repositorieId})),w=Object(o.a)((function(){var t;return null===(t=v.value)||void 0===t?void 0:t.description})),O=Object(o.a)((function(){return n.$store.getters[r.StoreNames.AppRepositories]}));return{githubUID:f,userUrl:m,blogUrl:_,currentRepositorie:h,repoUrl:C,repoName:y,repoDescription:w,repoDetail:v,appRepositories:O}}}),L=(n(316),n(317),Object(O.a)(B,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-page"},[n("header",{staticClass:"header"},[n("div",{staticClass:"container"},[n("div",{staticClass:"main"},[n("a",{staticClass:"author",attrs:{target:"_blank",href:t.userUrl}},[n("i",{staticClass:"iconfont icon-github"}),t._v(" "),n("span",{staticClass:"name"},[t._v(t._s(t.githubUID))])]),t._v(" "),t._m(0),t._v(" "),n("transition",{attrs:{name:"module"}},[t.blogUrl?n("a",{staticClass:"author",attrs:{target:"_blank",href:t.blogUrl}},[n("i",{staticClass:"iconfont icon-code"}),t._v(" "),n("span",{staticClass:"name"},[t._v("Blog")])]):t._e()])],1),t._v(" "),n("div",{staticClass:"repositories"},[n("span",{staticClass:"current"},[n("span",[t._v(t._s(t.currentRepositorie))]),t._v(" "),n("i",{staticClass:"iconfont icon-dropdown"})]),t._v(" "),n("ul",{staticClass:"list"},t._l(t.appRepositories,(function(e){return n("li",{key:e.name,staticClass:"item",attrs:{title:e.name+": "+e.description}},[n("a",{staticClass:"link",class:{disabled:e.name===t.currentRepositorie},attrs:{href:"/"+e.name,target:"_blank"}},[n("div",{staticClass:"name"},[n("span",{staticClass:"text"},[t._v("\n                  "+t._s(e.name)+"\n                  "),n("i",{staticClass:"iconfont icon-link-external"})]),t._v(" "),n("span",{staticClass:"meta"},[n("i",{staticClass:"iconfont icon-star"}),t._v(" "),n("span",[t._v(t._s(e.stargazers_count))])]),t._v(" "),n("span",{staticClass:"meta"},[n("i",{staticClass:"iconfont icon-fork"}),t._v(" "),n("span",[t._v(t._s(e.forks))])])]),t._v(" "),n("div",{staticClass:"description"},[t._v(t._s(e.description))])])])})),0)])])]),t._v(" "),n("main",{staticClass:"main"},[n("div",{staticClass:"banner"},[n("h1",{staticClass:"title"},[n("span",[t._v(t._s(t.repoName))])]),t._v(" "),n("transition",{attrs:{name:"module",mode:"out-in"}},[n("h4",{key:t.repoDescription,staticClass:"subtitle"},[t._v(t._s(t.repoDescription||"..."))])]),t._v(" "),n("div",{staticClass:"github-buttons"},[n("github-button-base",{staticClass:"item",attrs:{link:t.repoUrl,count:t.repoDetail&&t.repoDetail.stargazers_count||0,countLink:t.repoUrl+"/stargazers",icon:"icon-github",text:"Star"}}),t._v(" "),n("github-button-base",{staticClass:"item",attrs:{link:t.repoUrl+"/issues",count:t.repoDetail&&t.repoDetail.open_issues_count||0,icon:"icon-issue",text:"Issue"}}),t._v(" "),n("github-button-base",{staticClass:"item",attrs:{link:t.repoUrl+"/fork",count:t.repoDetail&&t.repoDetail.forks||0,icon:"icon-fork",text:"Fork"}}),t._v(" "),n("github-button-base",{staticClass:"item",attrs:{link:t.repoUrl+"/archive/master.zip",icon:"icon-download",text:"Download","count-icon":"icon-law","count-link":t.repoUrl+"/blob/master/LICENSE","count-text":t.repoDetail&&t.repoDetail.license?t.repoDetail.license.name:"LICENSE"}})],1),t._v(" "),n("div",{staticClass:"actions"},[t._t("actions")],2)],1),t._v(" "),n("div",{staticClass:"container"},[t.headerAdProvider?n("homepage-basic-card",{staticClass:"homepage-mammon"},[n("client-only",[n("mammon",{attrs:{provider:t.headerAdProvider}})],1)],1):t._e(),t._v(" "),t._t("content",[n("Loading",{staticClass:"loading"})]),t._v(" "),t.footerAdProvider?n("homepage-basic-card",{staticClass:"homepage-mammon"},[n("client-only",[n("mammon",{attrs:{provider:t.footerAdProvider}})],1)],1):t._e()],2)]),t._v(" "),n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("span",{staticClass:"footer-content"},[n("a",{attrs:{href:t.repoUrl,target:"_blank"}},[t._v(t._s(t.repoName))]),t._v(" "),n("span",[t._v(" is maintained by ")]),t._v(" "),n("a",{attrs:{href:t.userUrl,target:"_blank"}},[t._v("@"+t._s(t.githubUID))])])])]),t._v(" "),n("homepage-toolbox"),t._v(" "),n("homepage-modal")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"author",attrs:{target:"_blank",href:"/"}},[e("i",{staticClass:"iconfont icon-experiment"}),this._v(" "),e("span",{staticClass:"name"},[this._v("Projects")])])}],!1,null,"4da48584",null));L.options.__file="index.vue";e.a=L.exports},257:function(t,e,n){"use strict";var o=n(232);n.n(o).a},258:function(t,e,n){"use strict";var o=n(233);n.n(o).a},259:function(t,e,n){"use strict";n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return d}));n(27),n(14),n(251),n(91),n(45);var o,r=n(80),c=n(16);!function(t){t.Vue="vue",t.JavaScript="javascript",t.TypeScript="typescript"}(o||(o={}));var l=Symbol();function v(){var t,e,n,v,d,f,m,_;Object(c.f)(l,(t=Object(c.h)(!1),e=Object(c.h)(null),n=Object(c.h)(null),v=Object(c.h)(null),d=Object(c.h)(null),f=Object(c.h)(null),m=Object(c.h)(!1),_=Object(c.a)((function(){var t,n,r;if(e){if(null===(t=e.value)||void 0===t?void 0:t.endsWith(".vue"))return o.Vue;if(null===(n=e.value)||void 0===n?void 0:n.endsWith(".js"))return o.JavaScript;if(null===(r=e.value)||void 0===r?void 0:r.endsWith(".ts"))return o.TypeScript}})),{visible:t,title:n,path:e,content:f,fileExt:_,fileUrl:v,isLoading:m,open:function(title,path){t.value=!0,e.value=path,n.value=title,m.value=!0,r.a(path).then((function(t){d.value=t.name,v.value=t.html_url,f.value=window.atob("".concat(t.content))})).finally((function(){m.value=!1}))},close:function(){t.value=!1,d.value=null,v.value=null,f.value=null}}))}function d(){var t=Object(c.d)(l);if(!t)throw new Error("No modal store provided!");return t}},260:function(t,e,n){},261:function(t,e,n){},262:function(t,e,n){"use strict";var o=n(234);n.n(o).a},263:function(t,e,n){},264:function(t,e,n){},265:function(t,e,n){},266:function(t,e,n){},267:function(t,e,n){},298:function(t,e,n){"use strict";n(240),n(241);var o=n(16);var r=Object(o.b)({name:"github-button-base",props:{link:{type:String,required:!0},icon:{type:String,required:!0},iconColor:{type:String,required:!1},text:{type:String,required:!1},isLoading:{type:Boolean,required:!1},count:{type:Number,required:!1},countIcon:{type:String,required:!1},countText:{type:String,required:!1},countLink:{type:String,required:!1}},setup:function(t,e){var n=Object(o.a)((function(){return Number.isFinite(t.count)||t.countText})),r=Object(o.a)((function(){return t.countText?t.countText:n?(e=t.count)>1e3?"".concat(parseFloat((e/1e3).toFixed(2)),"k"):String(e):null;var e}));return{hasCount:n,countContent:r}}}),c=(n(262),n(12)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"github-button"},[n("a",{staticClass:"button",attrs:{href:t.link,target:"_blank"}},[n("i",{staticClass:"iconfont",class:t.icon,style:{color:t.iconColor}}),t._v(" "),t.text?n("span",{staticClass:"text"},[t._v(t._s(t.text))]):t._e(),t._v(" "),t._t("default")],2),t._v(" "),t.hasCount?n("a",{staticClass:"count",attrs:{href:t.countLink||t.link,target:"_blank"}},[t.countIcon?n("i",{staticClass:"iconfont",class:t.countIcon}):t._e(),t._v(" "),n("transition",{attrs:{name:"module",mode:"out-in"}},[n("span",{key:t.countContent},[t._v(t._s(t.countContent))])])],1):t._e()])}),[],!1,null,"1ef07698",null);component.options.__file="base.vue";e.a=component.exports},311:function(t,e,n){"use strict";var o=n(260);n.n(o).a},312:function(t,e,n){"use strict";var o=n(261);n.n(o).a},313:function(t,e,n){"use strict";var o=n(263);n.n(o).a},314:function(t,e,n){"use strict";var o=n(264);n.n(o).a},315:function(t,e,n){"use strict";var o=n(265);n.n(o).a},316:function(t,e,n){"use strict";var o=n(266);n.n(o).a},317:function(t,e,n){"use strict";var o=n(267);n.n(o).a}}]);