var e,t=require("react"),n=require("formik"),r=(e=require("scroll-to-element"))&&"object"==typeof e&&"default"in e?e.default:e;function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u,a,c,f=function(e){function n(){return function(e,t){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this),!(e=o(n).apply(this,arguments))||"object"!=typeof e&&"function"!=typeof e?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this):e;var e}var u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(n,t.Component),(u=[{key:"componentDidUpdate",value:function(e){var t=e.formik,n=t.isSubmitting,o=t.isValidating,i=Object.keys(t.errors);if(i.length>0&&n&&!o){var u='[name="'.concat(i[0],'"]'),a=document.querySelector(u);if(a){var c=this.props,f=c.duration,l=c.focusDelay;r(a,{offset:c.offset,ease:c.ease,duration:f,align:c.align}),this.timeout=setTimeout(function(){return a.focus()},f+l)}}}},{key:"componentWillUnmount",value:function(){this.timeout&&clearTimeout(this.timeout)}},{key:"render",value:function(){return null}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(n.prototype,u),n}();c={offset:0,align:"top",focusDelay:200,ease:"linear",duration:1e3},(a="defaultProps")in(u=f)?Object.defineProperty(u,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):u[a]=c;var l=n.connect(f);module.exports=l;