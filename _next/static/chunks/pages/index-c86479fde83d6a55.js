(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5075)}])},6264:function(e,t,n){"use strict";var r=n(5893),a=n(7294),i=n(5131),c=n(6518),s=n(5675);t.Z=function(e){var t=e.comicData,n=e.h,o=e.w,l=e.hover,u=e.openFunc,d=(0,a.useState)(!1),m=d[0],h=d[1];(0,a.useEffect)((function(){"undefined"!=typeof u&&h(u)}),[u]);var f=t.thumbnail.path.slice(0,4)+"s"+t.thumbnail.path.slice(4)+"."+t.thumbnail.extension,v=function(){var e;if(null===(e=t.characters)||void 0===e?void 0:e.returned){var n=new Array;return t.characters.items.map((function(e){var t=e.name;return t?n.push(" "+t):null})),n.toString()}return null},x=(null===t||void 0===t?void 0:t.textObjects)&&t.textObjects.length>1&&(0,r.jsxs)("div",{className:"",children:[" ",t.textObjects.map((function(e){}))," "]}),p=function(e){var t=e.height,n=e.width,a=e.hover;return(0,r.jsx)(s.default,{loader:function(){return f},src:f,alt:"",height:t,width:n,unoptimized:!0,onClick:function(){"undefined"==typeof u&&h(!m)},className:"".concat(a&&"sm:hover:shadow-2xl ease-in-out cursor-pointer","   mx-auto")})};return(0,r.jsxs)("div",{children:[(0,r.jsx)(i.u.Root,{show:m,as:a.Fragment,children:(0,r.jsx)(c.V,{as:"div",className:"fixed z-50 inset-0 overflow-y-auto",onClose:h,children:(0,r.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[(0,r.jsx)(i.u.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)(c.V.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity cursor-pointer"})}),(0,r.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),(0,r.jsx)(i.u.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,r.jsx)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:(0,r.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:(0,r.jsxs)("div",{className:"mx-auto justify-center flex flex-col text-center mt-3 sm:mt-0 sm:text-left",children:[(0,r.jsx)("h3",{className:"text-lg text-center font-medium text-gray-900",children:t.title}),(0,r.jsx)(p,{height:610,width:400,hover:!1}),v()&&(0,r.jsxs)("div",{className:"text-lg font-medium text-gray-900",children:["Featuring: ",v()]}),x,(0,r.jsx)("div",{className:"text-left text-md max-w-7xl mx-auto",children:t.description})]})})})})]})})}),l?(0,r.jsx)("div",{className:"z-0 hover:z-10 xl:scale-100 xl:hover:scale-110 transition-all xl:hover:absolute",children:(0,r.jsx)(p,{height:n,width:o,hover:!0})}):(0,r.jsx)(p,{height:n,width:o,hover:!0})]})}},4276:function(e,t,n){"use strict";var r=n(5893),a=n(7294),i=n(1664),c=n(2478),s=n(2814),o=n(1417);t.Z=function(e){var t=e.children,n=e.searchActive,l=(0,a.useState)([{name:"Gallery",to:"/",current:!n},{name:"Search",to:"/search",current:n}]),u=l[0],d=(l[1],(0,a.useState)()),m=(d[0],d[1]);(0,a.useCallback)((function(e){m(e)}),[]);return(0,r.jsxs)("div",{children:[(0,r.jsx)("nav",{className:"bg-gray-100",children:(0,r.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[(0,r.jsx)("div",{className:"",children:(0,r.jsx)("div",{className:"flex space-x-4",children:u.map((function(e,t){return(0,r.jsx)(i.default,{href:e.to,"aria-current":e.current?"page":void 0,children:(0,r.jsx)("a",{className:(0,c.A)(e.current?"bg-gray-300 text-black":"text-gray-400 hover:bg-gray-300 hover:text-black","px-3 py-2 rounded-md text-sm font-medium"),children:e.name})},e.name)}))})}),(0,r.jsx)("a",{href:"https://github.com/Nathen-Smith/marvel-api-app",children:(0,r.jsx)(s.G,{icon:o.zhw,size:"2x"})})]})})}),t]})}},5075:function(e,t,n){"use strict";n.r(t);var r=n(4051),a=n.n(r),i=n(5893),c=n(7294),s=n(9563),o=n(2478),l=n(4276),u=n(6264),d=n(6133);function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t,n,r,a,i,c){try{var s=e[i](c),o=s.value}catch(l){return void n(l)}s.done?t(o):Promise.resolve(o).then(r,a)}function f(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=function(){var e=(0,c.useState)(),t=e[0],n=e[1],r=(0,c.useCallback)((function(e){n(e)}),[]),m=(0,c.useState)([{name:"Thor",id:"1009664",active:!1},{name:"Captain America",id:"1009220",active:!1},{name:"Iron Man",id:"1009368",active:!1},{name:"Avengers",id:"1009165",active:!1},{name:"Spider-Man (Peter Parker)",id:"1009610",active:!1},{name:"Scarlet Witch",id:"1009562",active:!1},{name:"Hulk",id:"1009351",active:!1},{name:"Doctor Strange",id:"1009282",active:!1},{name:"Wolverine",id:"1009718",active:!1},{name:"Black Panther",id:"1009187",active:!1},{name:"Deadpool",id:"1009268",active:!1},{name:"Natasha Romanoff",id:"1009547",active:!1},{name:"Thanos",id:"1009652",active:!1},{name:"Guardians of the Galaxy",id:"1011299",active:!1}]),v=m[0],x=m[1],p=(0,c.useState)([]),b=p[0],y=p[1],g=(0,c.useState)(!1),j=g[0],w=g[1],N=(0,c.useState)(),k=N[0],S=N[1];return(0,c.useEffect)((function(){for(var e=new Array,t=v.length;t--;)v[t].active&&e.push(v[t].id);v&&y(e)}),[v]),(0,c.useEffect)((function(){var e=function(){var e,t=(e=a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.U)(b);case 2:(t=e.sent)?(n(t),r(t),0===t.length?S("No data returned. Try different combinations"):S("")):(S("Internal server error. Try again"),n(void 0)),w(!1);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function c(e){h(i,r,a,c,s,"next",e)}function s(e){h(i,r,a,c,s,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}();b&&0!==b.length&&(w(!0),e())}),[b,r]),(0,i.jsx)(l.Z,{searchActive:!1,children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"max-w-7xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",children:[(0,i.jsx)("div",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Find Comics by Character"}),v.map((function(e,t){return(0,i.jsx)("label",{className:"flex inline-flex items-center p-1",children:(0,i.jsx)("button",{onClick:function(){!function(e){var t=f(v);t[e].active=!t[e].active,x(t)}(t)},className:(0,o.A)(e.active?"bg-blue-500 hover:bg-blue-700 text-white":"bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border border-blue-500"," font-semibold py-2 px-4 rounded"),"aria-current":e.active?"page":void 0,children:(0,i.jsx)("span",{className:"mx-2",children:e.name})})},t)})),(0,i.jsx)("div",{className:"block text-gray-400 text-sm mt-2",children:"Hint: Selecting multiple characters retrieves shared appearances"})]}),(0,i.jsx)("div",{className:"text-fuchsia-700 text-center font-semibold text-xl mt-12",children:k}),j&&(0,i.jsx)("div",{style:{color:"#3B82F6",textAlign:"center"},children:(0,i.jsx)(d.Z,{className:"mx-auto",color:"inherit"})}),t&&(0,i.jsx)("div",{className:"container grid grid-cols-3 gap-2 gap-y-1 mx-auto max-w-7xl",children:t.map((function(e){return(0,i.jsx)(u.Z,{comicData:e,h:640,w:420,hover:!0},e.id)}))})]})})}},9563:function(e,t,n){"use strict";n.d(t,{U:function(){return d},_:function(){return m}});var r=n(4051),a=n.n(r),i=n(9669),c=n.n(i),s="https://gateway.marvel.com",o="apikey=f19ff79f771f6dbda0e1367ba52ffd54";function l(e,t,n,r,a,i,c){try{var s=e[i](c),o=s.value}catch(l){return void n(l)}s.done?t(o):Promise.resolve(o).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function c(e){l(i,r,a,c,s,"next",e)}function s(e){l(i,r,a,c,s,"throw",e)}c(void 0)}))}}var d=function(){var e=u(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n="characters",0!==t.length){e.next=6;break}return e.abrupt("return",null);case 6:t.length>1&&(n="sharedAppearances");case 7:return e.next=9,c().get("".concat(s,"/v1/public/comics?").concat(n,"=").concat(t.toString(),"&limit=9&").concat(o));case 9:return r=e.sent,e.abrupt("return",r.data.data.results);case 13:return e.prev=13,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=u(a().mark((function e(t,n,r){var i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("".concat(s,"/v1/public/comics?titleStartsWith=").concat(t,"&orderBy=").concat(r?"":"-").concat(n,"&limit=6&").concat(o));case 3:return i=e.sent,e.abrupt("return",i.data.data.results);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,r){return e.apply(this,arguments)}}()},2478:function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}n.d(t,{A:function(){return r}})}},function(e){e.O(0,[112,964,133,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);