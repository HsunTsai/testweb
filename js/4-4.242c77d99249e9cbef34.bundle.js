(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{715:function(e,t,r){"use strict";r.r(t),function(e){var o,a=r(0),n=r.n(a),l=r(953),i=r(954),s=r(892),c=r(7),u=r.n(c),d=r(327),m=r(340);r(891);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],o=!0,a=!1,n=void 0;try{for(var l,i=e[Symbol.iterator]();!(o=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);o=!0);}catch(e){a=!0,n=e}finally{try{o||null==i.return||i.return()}finally{if(a)throw n}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},y=function(){var e=p(Object(a.useContext)(d.a),2),t=e[0],r=e[1],o=t.home.count,c=Object(l.a)().formatMessage,f=p(Object(a.useState)(!1),2),b=f[0],y=f[1];return n.a.createElement("div",{className:"home"},n.a.createElement("div",{className:u()("home-box","home-box__header")},n.a.createElement("div",{className:u()("home-box__header-title",{"home-box__header-title--active":b})},"Home Page"),n.a.createElement(s.a,{className:"home-box__header-btn",type:"primary",size:"small",onClick:function(){return y(!b)}},"Home Title ".concat(b?"inActive":"Active"))),n.a.createElement("div",{className:u()("home-box","home-box__intl")},n.a.createElement("div",{className:"home-box__intl-title"},"Intl Demo"),n.a.createElement("div",null,"Type 1 [ <FormattedMessage id='xxx' values={{ xxx: 'xxx' }} /> ]"),n.a.createElement(i.a,{id:"superHello",values:{someoneName:"Hsun.Tsai"}}),n.a.createElement("div",null,"Type 2 [ useIntl().formatMessage({ id='xxx' }, { xxx= 'xxx' }) ]"),c({id:"superHello"},{someoneName:"Hsun.Tsai"})),n.a.createElement("div",{className:u()("home-box","home-box__redux")},n.a.createElement("div",{className:"home-box__redux-title"},"Now Count ==> ".concat(o)),n.a.createElement("div",null,n.a.createElement(s.a,{style:{marginRight:8},onClick:function(){return Object(m.c)(r,o)}},"Count Up"),n.a.createElement(s.a,{onClick:function(){return Object(m.b)(r,o)}},"Count Down"))))};b(y,"useContext{[state, dispatch]}\nuseIntl{{ formatMessage }}\nuseState{[active, setActive](false)}",(function(){return[l.a]}));var v,h,g=y;t.default=g,(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(y,"Home","D:\\workspace\\personal\\react-start-kit-domain-directory\\src\\app\\pages\\home\\Home.jsx"),v.register(g,"default","D:\\workspace\\personal\\react-start-kit-domain-directory\\src\\app\\pages\\home\\Home.jsx")),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&h(e)}.call(this,r(2)(e))},891:function(e,t,r){},953:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return c}));var o,a,n,l=r(0),i=r(261),s=r(94);function c(){var e=l.useContext(i.a);return Object(s.c)(e),e}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(c,"useContext{intl}"),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&a.register(c,"useIntl","D:\\workspace\\personal\\react-start-kit-domain-directory\\node_modules\\react-intl\\lib\\src\\components\\useIntl.js"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}).call(this,r(2)(e))},954:function(e,t,r){"use strict";(function(e){var o,a=r(0),n=r(261),l=r(94),i=r(226),s=r.n(i);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,u,d,m=(c=function(e,t){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),p=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(r[o[a]]=e[o[a]])}return r},f=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var o=Array(e),a=0;for(t=0;t<r;t++)for(var n=arguments[t],l=0,i=n.length;l<i;l++,a++)o[a]=n[l];return o},b=s.a||i,y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return m(t,e),t.prototype.shouldComponentUpdate=function(e){var t=this.props,r=t.values,o=p(t,["values"]),a=e.values,n=p(e,["values"]);return!b(a,r)||!b(o,n)},t.prototype.render=function(){var e=this;return a.createElement(n.a.Consumer,null,(function(t){Object(l.c)(t);var r=t.formatMessage,o=t.textComponent,n=void 0===o?a.Fragment:o,i=e.props,s=i.id,c=i.description,u=i.defaultMessage,d=i.values,m=i.children,p=i.tagName,b=void 0===p?n:p,y=r({id:s,description:c,defaultMessage:u},d);return Array.isArray(y)||(y=[y]),"function"==typeof m?m(y):b?a.createElement.apply(a,f([b,null],y)):y}))},t.displayName="FormattedMessage",t}(a.Component),v=y;t.a=v,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(m,"__extends","D:\\workspace\\personal\\react-start-kit-domain-directory\\node_modules\\react-intl\\lib\\src\\components\\message.js"),u.register(p,"__rest","D:\\workspace\\personal\\react-start-kit-domain-directory\\node_modules\\react-intl\\lib\\src\\components\\message.js"),u.register(f,"__spreadArrays","D:\\workspace\\personal\\react-start-kit-domain-directory\\node_modules\\react-intl\\lib\\src\\components\\message.js"),u.register(b,"shallowEquals","D:\\workspace\\personal\\react-start-kit-domain-directory\\node_modules\\react-intl\\lib\\src\\components\\message.js"),u.register(y,"FormattedMessage","D:\\workspace\\personal\\react-start-kit-domain-directory\\node_modules\\react-intl\\lib\\src\\components\\message.js"),u.register(v,"default","D:\\workspace\\personal\\react-start-kit-domain-directory\\node_modules\\react-intl\\lib\\src\\components\\message.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,r(2)(e))}}]);