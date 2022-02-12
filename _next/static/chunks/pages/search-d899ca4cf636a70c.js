(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{881:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return n(2564)}])},4276:function(e,t,n){"use strict";var r=n(5893),a=n(7294),s=n(1664),i=n(2478),c=n(2814),l=n(1417);t.Z=function(e){var t=e.children,n=e.searchActive,o=(0,a.useState)([{name:"Gallery",to:"/",current:!n},{name:"Search",to:"/search",current:n}]),u=o[0];o[1];return(0,r.jsxs)("div",{children:[(0,r.jsx)("nav",{className:"bg-gray-100",children:(0,r.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[(0,r.jsx)("div",{className:"",children:(0,r.jsx)("div",{className:"flex space-x-4",children:u.map((function(e,t){return(0,r.jsx)(s.default,{href:e.to,"aria-current":e.current?"page":void 0,children:(0,r.jsx)("a",{className:(0,i.A)(e.current?"bg-gray-300 text-black":"text-gray-400 hover:bg-gray-300 hover:text-black","px-3 py-2 rounded-md text-sm font-medium"),children:e.name})},e.name)}))})}),(0,r.jsx)("a",{href:"https://github.com/Nathen-Smith/marvel-api-app",children:(0,r.jsx)(c.G,{icon:l.zhw,size:"2x"})})]})})}),t]})}},2564:function(e,t,n){"use strict";n.r(t);var r=n(4051),a=n.n(r),s=n(5893),i=n(5675),c=n(7294),l=n(9563),o=n(4276),u=n(5131),d=n(6518);function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t,n,r,a,s,i){try{var c=e[s](i),l=c.value}catch(o){return void n(o)}c.done?t(l):Promise.resolve(l).then(r,a)}function x(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=function(){var e=(0,c.useState)(""),t=e[0],n=e[1],r=(0,c.useState)("title"),m=r[0],f=r[1],p=(0,c.useState)(!0),v=p[0],g=p[1],y=(0,c.useState)(),b=y[0],j=y[1],w=(0,c.useCallback)((function(e){j(e)}),[]);(0,c.useEffect)((function(){var e=function(){var e,n=(e=a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l._)(t,m,v);case 2:(n=e.sent)&&(j(n),w(n));case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function i(e){h(s,r,a,i,c,"next",e)}function c(e){h(s,r,a,i,c,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}}();t&&e()}),[t,m,v,w]);var N=(0,c.useCallback)((function(e,t){if(b){var n=x(b);n.forEach((function(e,t){n[t].modalActive=!1})),n[e].modalActive=t,j(n)}}),[b]);return(0,s.jsx)(o.Z,{searchActive:!0,children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:[(0,s.jsxs)("form",{className:"max-w-7xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",children:[(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Comic Search"}),(0,s.jsx)("input",{autoComplete:"off",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",onChange:function(e){return n(e.target.value)}})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("div",{className:"w-full md:w-1/2 mb-6 md:mb-0",children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("select",{className:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-l leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-state",onChange:function(e){return f("Alphabetical"===e.target.value?"title":"onsaleDate")},children:[(0,s.jsx)("option",{children:"Alphabetical"}),(0,s.jsx)("option",{children:"On Sale Date"})]}),(0,s.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",children:(0,s.jsx)("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,s.jsx)("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})})})]})}),(0,s.jsx)("div",{className:"w-full md:w-1/2 mb-6 md:mb-0",children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("select",{className:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-r leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-state",onChange:function(e){return g("Ascending"===e.target.value)},children:[(0,s.jsx)("option",{children:"Ascending"}),(0,s.jsx)("option",{children:"Descending"})]}),(0,s.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",children:(0,s.jsx)("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,s.jsx)("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})})})]})})]})]}),b&&t&&(0,s.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[(0,s.jsx)("thead",{className:"bg-gray-50",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Image"}),(0,s.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Name"}),(0,s.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"On Sale Date"})]})}),(0,s.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:b.map((function(e,t){var n=e.thumbnail.path.slice(0,4)+"s"+e.thumbnail.path.slice(4)+"."+e.thumbnail.extension,r=function(){var t;if(null===(t=e.characters)||void 0===t?void 0:t.returned){var n=new Array;return e.characters.items.map((function(e){var t=e.name;return t?n.push(" "+t):null})),n.toString()}return null},a=(null===e||void 0===e?void 0:e.textObjects)&&e.textObjects.length>1&&(0,s.jsxs)("div",{className:"",children:[" ",e.textObjects.map((function(e){}))," "]}),l=function(e){var r=e.height,a=e.width,c=e.hover;return(0,s.jsx)(i.default,{loader:function(){return n},src:n,alt:"",height:r,width:a,unoptimized:!0,onClick:function(){N(t,!0)},className:"".concat(c&&"sm:hover:shadow-2xl ease-in-out cursor-pointer","   mx-auto")})};return(0,s.jsxs)("tr",{className:"cursor-pointer xl:hover:bg-gray-200",onClick:function(){return N(t,!0)},children:[(0,s.jsx)("td",{children:(0,s.jsxs)("div",{children:[(0,s.jsx)(u.u.Root,{show:(null===e||void 0===e?void 0:e.modalActive)||!1,as:c.Fragment,children:(0,s.jsx)(d.V,{as:"div",className:"fixed z-50 inset-0 overflow-y-auto",onClose:function(){return N(t,!1)},children:(0,s.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[(0,s.jsx)(u.u.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,s.jsx)(d.V.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity cursor-pointer"})}),(0,s.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),(0,s.jsx)(u.u.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,s.jsx)("div",{onClick:function(){return N(t,!1)},className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:(0,s.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:(0,s.jsxs)("div",{className:"mx-auto justify-center flex flex-col text-center mt-3 sm:mt-0 sm:text-left",children:[(0,s.jsx)("div",{className:"text-lg text-center font-medium text-gray-900",children:e.title}),(0,s.jsx)(l,{height:610,width:400,hover:!1}),r()&&(0,s.jsxs)("div",{className:"text-lg font-medium text-gray-900",children:["Featuring: ",r()]}),a,(0,s.jsx)("div",{className:"text-left text-md max-w-7xl mx-auto",children:e.description})]})})})})]})})}),(0,s.jsx)(l,{height:300,width:200,hover:!1})]})}),(0,s.jsx)("td",{children:(0,s.jsx)("div",{className:"text-sm font-medium text-gray-900",children:e.title})}),(0,s.jsx)("td",{children:(0,s.jsx)("div",{className:"text-sm font-medium text-gray-900",children:e.dates[0].date})})]},t)}))})]})]})})}},9563:function(e,t,n){"use strict";n.d(t,{U:function(){return d},_:function(){return m}});var r=n(4051),a=n.n(r),s=n(9669),i=n.n(s),c="https://gateway.marvel.com",l="apikey=f19ff79f771f6dbda0e1367ba52ffd54";function o(e,t,n,r,a,s,i){try{var c=e[s](i),l=c.value}catch(o){return void n(o)}c.done?t(l):Promise.resolve(l).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function i(e){o(s,r,a,i,c,"next",e)}function c(e){o(s,r,a,i,c,"throw",e)}i(void 0)}))}}var d=function(){var e=u(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n="characters",0!==t.length){e.next=6;break}return e.abrupt("return",null);case 6:t.length>1&&(n="sharedAppearances");case 7:return e.next=9,i().get("".concat(c,"/v1/public/comics?").concat(n,"=").concat(t.toString(),"&limit=9&").concat(l));case 9:return r=e.sent,e.abrupt("return",r.data.data.results);case 13:return e.prev=13,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=u(a().mark((function e(t,n,r){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("".concat(c,"/v1/public/comics?titleStartsWith=").concat(t,"&orderBy=").concat(r?"":"-").concat(n,"&limit=6&").concat(l));case 3:return s=e.sent,e.abrupt("return",s.data.data.results);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,r){return e.apply(this,arguments)}}()},2478:function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}n.d(t,{A:function(){return r}})}},function(e){e.O(0,[112,964,774,888,179],(function(){return t=881,e(e.s=t);var t}));var t=e.O();_N_E=t}]);