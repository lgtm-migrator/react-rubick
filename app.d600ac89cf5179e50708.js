(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{23:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),a=n(22),c=n(44),u=n(48),i=n(43),s=n(9),p=n(42),l=n(6),b={path:"console",exact:!1,component:function(){return n.e(1).then(n.bind(null,41))},routes:[{path:"",redirect:"dashboard"},{path:"dashboard",component:function(){return n.e(0).then(n.bind(null,47))}}]},f={path:"landing",exact:!1,component:function(){return n.e(3).then(n.bind(null,46))},routes:[{path:"",redirect:"login"},{path:"/login/:type(account)?",component:function(){return n.e(2).then(n.bind(null,45))},location:{state:{breadCrumb:function(t){var e=t.breadCrumbs,n=t.params.type;return Object(u.a)(e).label=(n?"account":"user")+"_login",e}}}}]},m=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},d=function(t,e){return void 0===e&&(e=""),t.map(function(t){!1!==(t=m({},t)).exact&&(t.exact=!0);var n=t.path;n=t.path=e+(!n||n.startsWith("/")?n:"/"+n),t.routes&&(t.routes=d(t.routes,n));var r=t.redirect;return t.component?t.component=Object(l.d)(t.component):r&&(t.component=function(t){return function(e){var n=e.location;return o.a.createElement(p.a,{to:m({},n,{pathname:t})})}}(r.startsWith("/")?r:n+"/"+r)),t})},h=d([{path:"/",redirect:"/console"},f,b]),y=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={breadCrumbs:[]},e}return y(e,t),e.prototype.buildBreadCrumbs=function(t){var e=Object(u.a)(Object(s.a)(h,t.location.pathname)),n=e.match,r=n.params,o=n.path,a=e.route.location,c=o.replace(/(^\/)|(\/\:[^/]*)/g,"").split("/").map(function(t,e,n){return{label:t,url:"/"+n.slice(0,e+1).join("/")}}).slice(1);if(a&&a.state){var i=a.state.breadCrumb,p="function"==typeof i?i({breadCrumbs:c,params:r,query:Object(l.c)(t.location.search)}):i;Array.isArray(p)?c=p:p&&c.push({label:p})}return this.setState({breadCrumbs:c}),c},e.prototype.setTitle=function(){var t=this.buildBreadCrumbs(this.props).map(function(t){return t.label}).join(" - ");document.title="React Rubick"+(t?" | "+t:"")},e.prototype.componentDidMount=function(){this.setTitle()},e.prototype.componentDidUpdate=function(t){var e=t.location,n=this.props.location;e.pathname+e.search!==n.pathname+n.search&&this.setTitle()},e.prototype.render=function(){return o.a.createElement(l.a.Provider,{value:this.state.breadCrumbs},Object(s.b)(h))},e}(o.a.PureComponent),O=Object(i.a)(v);Object(a.render)(o.a.createElement(c.a,{basename:"/react-rubick"},o.a.createElement(O,null)),document.getElementById("app"))},39:function(t,e,n){t.exports=n(23)},6:function(t,e,n){"use strict";var r=n(17),o=function(t){return Object(r.asyncComponent)({resolve:t})},a=n(1),c=Object(a.createContext)([]),u=n(10);function i(t){return"string"==typeof t?Object(u.parse)(t.replace(/^\?/,"")):Object(u.stringify)(t)}var s=function(t){return new Promise(function(e){return setTimeout(e,t)})},p=function(t,e){return Promise.race([t,new Promise(function(t,n){setTimeout(function(){return n("Timeout after "+e+"ms")},e)})])};n.d(e,"d",function(){return o}),n.d(e,"a",function(){return c}),n.d(e,"c",function(){return i}),n.d(e,"b",function(){return s}),n.d(e,!1,function(){return p})}},[[39,4,5]]]);