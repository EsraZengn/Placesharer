(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{122:function(t,e,r){},123:function(t,e,r){},124:function(t,e,r){},137:function(t,e,r){"use strict";r.r(e);var n=r(52),a=r.n(n),o=r(53),c=r(10),i=r(0),u=r.n(i),s=r(58),l=r(6),f=(r(122),r(123),function(t){return u.a.createElement("div",{className:"avatar ".concat(t.className),style:t.style},u.a.createElement("img",{src:t.image,alt:t.alt,style:{width:t.width,height:t.width}}))}),h=r(55);var m=function(t){var e=t.id,r=t.name,n=t.image,a=t.placeCount;return u.a.createElement("li",{className:"user-item"},u.a.createElement(h.a,{className:"user-item__content"},u.a.createElement(l.b,{to:"/".concat(e,"/places")},u.a.createElement("div",{className:"user-item__image"},u.a.createElement(f,{image:"".concat("https://placesharerapp.herokuapp.com","/").concat(n),alt:r})),u.a.createElement("div",{className:"user-item__info"},u.a.createElement("h2",null,r),u.a.createElement("h3",null,a," ",1===a?"Place":"Places")))))};r(124);var d=function(t){var e=t.items;return 0===e.length?u.a.createElement("div",{className:"center"},u.a.createElement(h.a,null,u.a.createElement("h1",null,"No users found"))):u.a.createElement("ul",{className:"users-list"},e.map((function(t){return u.a.createElement(m,{key:t.id,id:t.id,image:t.image,name:t.name,placeCount:t.places.length})})))},p=r(59),v=r(15);e.default=function(){var t=Object(i.useState)(),e=Object(c.a)(t,2),r=e[0],n=e[1],l=Object(s.a)(),f=l.isLoading,h=l.error,m=l.sendRequest,y=l.clearError;return Object(i.useEffect)((function(){(function(){var t=Object(o.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("".concat("https://placesharerapp.herokuapp.com/api","/users"));case 3:e=t.sent,n(e.users),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[m]),u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{error:h,onClear:y}),f&&u.a.createElement("div",{className:"center"},u.a.createElement(v.a,null)),!f&&r&&u.a.createElement(d,{items:r}),";")}},49:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(6);r(72);e.a=function(t){return t.href?a.a.createElement("a",{className:"button button--".concat(t.size||"default"," ").concat(t.inverse&&"button--inverse"," ").concat(t.danger&&"button--danger"),href:t.href},t.children):t.to?a.a.createElement(o.b,{to:t.to,exact:t.exact,className:"button button--".concat(t.size||"default"," ").concat(t.inverse&&"button--inverse"," ").concat(t.danger&&"button--danger")},t.children):a.a.createElement("button",{className:"button button--".concat(t.size||"default"," ").concat(t.inverse&&"button--inverse"," ").concat(t.danger&&"button--danger"),type:t.type,onClick:t.onClick,disabled:t.disabled},t.children)}},52:function(t,e,r){t.exports=r(70)},53:function(t,e,r){"use strict";function n(t,e,r,n,a,o,c){try{var i=t[o](c),u=i.value}catch(s){return void r(s)}i.done?e(u):Promise.resolve(u).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var c=t.apply(e,r);function i(t){n(c,a,o,i,u,"next",t)}function u(t){n(c,a,o,i,u,"throw",t)}i(void 0)}))}}r.d(e,"a",(function(){return a}))},55:function(t,e,r){"use strict";var n=r(0),a=r.n(n);r(66);e.a=function(t){return a.a.createElement("div",{className:"card ".concat(t.className),style:t.style},t.children)}},58:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(52),a=r.n(n),o=r(53),c=r(10),i=r(0),u=function(){var t=Object(i.useState)(!1),e=Object(c.a)(t,2),r=e[0],n=e[1],u=Object(i.useState)(),s=Object(c.a)(u,2),l=s[0],f=s[1],h=Object(i.useRef)([]),m=Object(i.useCallback)(function(){var t=Object(o.a)(a.a.mark((function t(e){var r,o,c,i,u,s,l=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:"GET",o=l.length>2&&void 0!==l[2]?l[2]:null,c=l.length>3&&void 0!==l[3]?l[3]:{},n(!0),i=new AbortController,h.current.push(i),t.prev=6,t.next=9,fetch(e,{method:r,body:o,headers:c,signal:i.signal});case 9:return u=t.sent,t.next=12,u.json();case 12:if(s=t.sent,h.current=h.current.filter((function(t){return t!==i})),u.ok){t.next=16;break}throw new Error(s.message);case 16:return n(!1),t.abrupt("return",s);case 20:throw t.prev=20,t.t0=t.catch(6),f(t.t0.message),n(!1),t.t0;case 25:case"end":return t.stop()}}),t,null,[[6,20]])})));return function(e){return t.apply(this,arguments)}}(),[]);return Object(i.useEffect)((function(){return function(){h.current.forEach((function(t){return t.abort()}))}}),[]),{isLoading:r,error:l,sendRequest:m,clearError:function(){return f(null)}}}},59:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(69),c=r(49);e.a=function(t){return a.a.createElement(o.a,{onCancel:t.onClear,header:"An Error Occurred!",show:!!t.error,footer:a.a.createElement(c.a,{onClick:t.onClear},"Okay")},a.a.createElement("p",null,t.error))}},66:function(t,e,r){},69:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(7),c=r.n(o),i=r(42),u=r(16);r(71);function s(t){var e=a.a.createElement("div",{className:"modal ".concat(t.contentClass),style:t.style},a.a.createElement("header",{className:"modal__header ".concat(t.headerClass)},a.a.createElement("h2",null,t.header)),a.a.createElement("form",{onSubmit:t.onSubmit?t.onSubmit:function(t){return t.preventDefault()}},a.a.createElement("div",{className:"modal__content ".concat(t.contentClass)},t.children),a.a.createElement("footer",{className:"modal__footer ".concat(t.footerClass)},t.footer)));return c.a.createPortal(e,document.getElementById("modal-hook"))}e.a=function(t){return a.a.createElement(a.a.Fragment,null,t.show&&a.a.createElement(u.a,{onClick:t.onCancel}),a.a.createElement(i.a,{in:t.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},a.a.createElement(s,t)))}},70:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function i(t,e,r,n){var a=e&&e.prototype instanceof l?e:l,o=Object.create(a.prototype),c=new x(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return N()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=E(c,r);if(i){if(i===s)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,c),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=i;var s={};function l(){}function f(){}function h(){}var m={};m[a]=function(){return this};var d=Object.getPrototypeOf,p=d&&d(d(L([])));p&&p!==e&&r.call(p,a)&&(m=p);var v=h.prototype=l.prototype=Object.create(m);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var n;this._invoke=function(a,o){function c(){return new e((function(n,c){!function n(a,o,c,i){var s=u(t[a],t,o);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,i)}),(function(t){n("throw",t,c,i)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,i)}))}i(s.arg)}(a,o,n,c)}))}return n=n?n.then(c,c):c()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return f.prototype=v.constructor=h,h.constructor=f,h[c]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},y(g.prototype),g.prototype[o]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var c=new g(i(e,r,n,a),o);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},y(v),v[c]="Generator",v[a]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;b(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},71:function(t,e,r){},72:function(t,e,r){}}]);
//# sourceMappingURL=5.10cccdd7.chunk.js.map