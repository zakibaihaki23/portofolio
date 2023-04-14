(function(){"use strict";var t={1723:function(t,e,a){var n=a(144),o=a(998),r=a(3059),i=function(){var t=this,e=t._self._c;return e(o.Z,{attrs:{dark:t.darkMode}},[e(r.Z,[e("loadingOverlay",{attrs:{overlay:t.loadingOverlay}}),e("navbar",{attrs:{darkMode:t.darkMode},on:{"update:darkMode":function(e){t.darkMode=e},"dark-mode-toggled":t.onDarkModeToggled}}),e("firstSection")],1),e("footer-section")],1)},s=[],d=a(6232),l=a(4324),u=a(3687),c=a(4665),f=a(7953),p=function(){var t=this,e=t._self._c;return e(d.Z,{attrs:{app:"",color:(t.darkMode,"primary"),dark:t.darkMode,elevation:t.darkMode?0:2}},[e(f.qW,[t._v("My Portfolio")]),e(u.Z),e(c.Z,{class:{"primary--text":!t.darkMode,"secondary--text":t.darkMode},attrs:{"hide-details":"",color:t.darkMode?"indigo":"primary","thumb-label":!1},on:{change:t.toggleDarkMode},scopedSlots:t._u([{key:"prepend",fn:function(){return[e(l.Z,[t._v("mdi-weather-sunny")])]},proxy:!0},{key:"append",fn:function(){return[e(l.Z,[t._v("mdi-weather-night")])]},proxy:!0}]),model:{value:t.darkModeValue,callback:function(e){t.darkModeValue=e},expression:"darkModeValue"}})],1)},m=[],v={props:{darkMode:{type:Boolean,required:!0}},data(){return{darkModeValue:this.darkMode}},methods:{toggleDarkMode(){this.$emit("update:darkMode",this.darkModeValue),this.$vuetify.theme.dark=this.darkModeValue,localStorage.setItem("darkMode",this.darkModeValue),this.$emit("dark-mode-toggled")}}},g=v,y=a(1001),h=(0,y.Z)(g,p,m,!1,null,"0acc2d85",null),k=h.exports,_=a(2933),M=a(3305),b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[t.overlay?e("div",{staticClass:"overlay"}):t._e(),e(_.Z,{attrs:{value:t.overlay}},[t.overlay?e(M.Z,{attrs:{indeterminate:"",color:"primary",size:60,width:10}}):t._e()],1)],1)},Z=[],x={name:"firstLoadingOverlay",props:["overlay"]},O=x,C=(0,y.Z)(O,b,Z,!1,null,"022d0e3a",null),S=C.exports,w=a(778),P=a(4886),j=a(266),T=a(2118),V=a(5495),F=a(1713),E=function(){var t=this,e=t._self._c;return e(T.Z,[e(F.Z,{attrs:{align:"center",justify:"center","align-sm":"center","justify-sm":"center"}},[e(j.Z,{attrs:{cols:"12",md:"6"}},[e(V.Z,{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg","max-width":"500","max-height":"500",contain:""}})],1),e(j.Z,{attrs:{cols:"12",md:"6"}},[e(w.Z,{attrs:{elevation:"2",outlined:"",shaped:""}},[e(P.EB,{staticClass:"headline"},[t._v("About Me")]),e(P.ZB,[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")])],1)],1)],1),e(F.Z,[e(j.Z,[e("about",{attrs:{data:t.experience}})],1)],1)],1)},I=[],B=a(4127),$=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"mx-3 mt-3 mb-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-bg-12 col-md-12 col-sm-12"},[e("p",{staticClass:"title1",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"1000"}},[t._v(" "+t._s(t.data.title)+" ")]),t._l(t.data.data,(function(a,n){return e("ul",{key:a.id,staticClass:"timeline m-0 pt-1",style:{"transition-delay":n/4.2+"s"},attrs:{"data-aos":"fade-up","data-offset":"10","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"500"}},[e("li",{staticClass:"m-0 pb-2"},[e("div",[e("div",{staticClass:"px-2 title2"},[t._v(t._s(a.name))]),e("div",{staticClass:"px-2 title3"},[t._v(" "+t._s(a.degree||a.position)+" "+t._s(a.gpa?"("+a.gpa+")":"")+" ")]),e("div",{staticClass:"px-2 date"},[t._v(t._s(a.date))]),e("div",{staticClass:"px-2 pb-2 pt-2",staticStyle:{"text-align":"justify"}},[t._v(" "+t._s(a.description)+" ")]),t._l(a.skills,(function(a){return e(B.Z,{key:a,staticClass:"ma-2",attrs:{color:"primary"}},[t._v(" "+t._s(a)+" ")])}))],2)])])}))],2)])])])},D=[],J={name:"about",props:{data:{type:Object},nightMode:{type:Boolean}},data(){return{darkMode:"true"===localStorage.getItem("darkMode")||!1}},created(){this.$vuetify.theme.dark=this.darkMode}},L=J,q=(0,y.Z)(L,$,D,!1,null,"653e6f96",null),A=q.exports,R={name:"firstSection",components:{about:A},data(){return{experience:{title:"Experiences",data:[{id:1,name:"PT. Eden Pangan Indonesia (Eden Farm)",date:"March 2022 - Present",position:"Front-End Developer",description:"Build and maintain Web using Vue.js and Mobile Application using React Native and Flutter (Warehouse Management System, Logistic Management System)",skills:["VueJS","Golang","React Native","Flutter","JavaSript","leafletjs"]},{id:2,name:"PT. Eden Pangan Indonesia (Eden Farm)",date:"February 2021 - April 2021",position:"Front-End Developer",description:"Internship Position in Eden Farm",skills:["Javascript","VueJS"]},{id:3,name:"Information and Information Technology Codes and Statistics Office of Pandeglang Regency",date:"22 July - 23 August 2019",position:"Pranata Komputer",description:"Maintain and develop the website of the Pandeglang Regency Information and Information Technology Codes and Statistics Office using VueJS as Frontend and Laravel as Backend",skills:["VueJS","Laravel","MySQL","Figma"]}]}}}},W=R,z=(0,y.Z)(W,E,I,!1,null,null,null),G=z.exports,N={components:{navbar:k,loadingOverlay:S,firstSection:G},data(){return{darkMode:"true"===localStorage.getItem("darkMode")||!1,loadingOverlay:!0}},created(){this.$vuetify.theme.dark=this.darkMode,this.$root.$on("toggleLoadingOverlay",(()=>{this.loadingOverlay=!this.loadingOverlay}))},mounted(){document.title="My Portfolio",setTimeout((()=>{this.loadingOverlay=!1}),1e3)},methods:{onDarkModeToggled(){this.loadingOverlay=!0,setTimeout((()=>{this.loadingOverlay=!1}),1e3)}}},K=N,Q=(0,y.Z)(K,i,s,!1,null,null,null),U=Q.exports,Y=a(8864);n.ZP.use(Y.Z);var H=new Y.Z({}),X=a(4562),tt=a(8271),et=function(){var t=this,e=t._self._c;return e(tt.Z,{attrs:{dark:"",padless:""}},[e(w.Z,{staticClass:"flex",attrs:{flat:"",tile:""}},[e(P.EB,{staticClass:"primary"},[e("strong",{staticClass:"subheading"},[t._v("Get connected with us on social networks!")]),e(u.Z),t._l(t.icons,(function(a){return e(X.Z,{key:a,staticClass:"mx-4",attrs:{dark:"",icon:""}},[e(l.Z,{attrs:{size:"24px"}},[t._v(" "+t._s(a)+" ")])],1)}))],2),e(P.ZB,{staticClass:"py-2 white--text text-center"},[t._v(" "+t._s((new Date).getFullYear())+" — "),e("strong",[t._v("Vuetify")])])],1)],1)},at=[],nt={data:()=>({icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]})},ot=nt,rt=(0,y.Z)(ot,et,at,!1,null,null,null),it=rt.exports;n.ZP.config.productionTip=!1,n.ZP.component("footer-section",it);new n.ZP({vuetify:H,render:t=>t(U)}).$mount("#app")}},e={};function a(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,n,o,r){if(!n){var i=1/0;for(u=0;u<t.length;u++){n=t[u][0],o=t[u][1],r=t[u][2];for(var s=!0,d=0;d<n.length;d++)(!1&r||i>=r)&&Object.keys(a.O).every((function(t){return a.O[t](n[d])}))?n.splice(d--,1):(s=!1,r<i&&(i=r));if(s){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[n,o,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,r,i=n[0],s=n[1],d=n[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(d)var u=d(a)}for(e&&e(n);l<i.length;l++)r=i[l],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(u)},n=self["webpackChunkportofolio"]=self["webpackChunkportofolio"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(1723)}));n=a.O(n)})();
//# sourceMappingURL=app.e35cbe2d.js.map