(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{49:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(45),i=n(0),c=n.n(i),u=n(4),l=n.n(u),p=n(6),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},y=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=f(this,e.call.apply(e,[this].concat(a))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!h(e)){e.preventDefault();var t=r.context.router.history,n=r.props,o=n.replace,a=n.to;o?t.replace(a):t.push(a)}},f(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);l()(this.context.router,"You should not use <Link> outside a <Router>"),l()(void 0!==t,'You must specify the "to" property');var a=this.context.router.history,i="string"==typeof t?Object(p.b)(t,null,null,a.location):t,c=a.createHref(i);return o.a.createElement("a",s({},r,{onClick:this.handleClick,href:c,ref:n}))},t}(o.a.Component);y.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},y.defaultProps={replace:!1},y.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired};var d,b=y,v=n(7),w=(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}d(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function c(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,c)}u((r=r.apply(e,t||[])).next())})},O=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={loading:!0,authed:!1},t}return w(t,e),t.prototype.componentDidMount=function(){return m(this,void 0,void 0,function(){return O(this,function(e){switch(e.label){case 0:return[4,Object(v.b)(500)];case 1:return e.sent(),this.setState({loading:!1,authed:Math.random()<.5}),[2]}})})},t.prototype.componentDidUpdate=function(){this.state.authed||this.props.history.replace({pathname:"/landing",search:Object(v.c)({next:this.props.location.pathname})})},t.prototype.render=function(){return this.state.loading||!this.state.authed?"Loading...":o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"left-panel"},"Nav"),o.a.createElement("main",null,o.a.createElement(v.a.Consumer,null,function(e){return o.a.createElement("ul",null,e.map(function(e){var t=e.label,n=e.url;return o.a.createElement("li",{key:t},o.a.createElement(b,{to:n},t))}))}),Object(a.a)(this.props.route.routes)))},t}(o.a.PureComponent);t.default=g}}]);