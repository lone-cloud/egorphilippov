(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6071:function(e,t,n){"use strict";var o=n(9448);t.default=void 0;var r=o(n(7294)),s=n(1689),i=n(2441),a=n(5749);const c={};function l(e,t,n,o){if(!e)return;if(!(0,s.isLocalURL)(t))return;e.prefetch(t,n,o).catch((e=>{0}));const r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;c[t+"%"+n+(r?"%"+r:"")]=!0}var f=function(e){const t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",{href:f,as:u}=r.default.useMemo((()=>{const[t,n]=(0,s.resolveHref)(o,e.href,!0);return{href:t,as:e.as?(0,s.resolveHref)(o,e.as):n||t}}),[o,e.href,e.as]);let{children:p,replace:d,shallow:h,scroll:m,locale:g}=e;"string"===typeof p&&(p=r.default.createElement("a",null,p));const v=r.Children.only(p),w=v&&"object"===typeof v&&v.ref,[y,_]=(0,a.useIntersection)({rootMargin:"200px"}),b=r.default.useCallback((e=>{y(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,y]);(0,r.useEffect)((()=>{const e=_&&t&&(0,s.isLocalURL)(f),o="undefined"!==typeof g?g:n&&n.locale,r=c[f+"%"+u+(o?"%"+o:"")];e&&!r&&l(n,f,u,{locale:o})}),[u,f,_,g,t,n]);const x={ref:b,onClick:e=>{v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,i,a,c){const{nodeName:l}=e.currentTarget;("A"!==l||!function(e){const{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=o.indexOf("#")<0),t[r?"replace":"push"](n,o,{shallow:i,locale:c,scroll:a}))}(e,n,f,u,d,h,m,g)},onMouseEnter:e=>{(0,s.isLocalURL)(f)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),l(n,f,u,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){const e="undefined"!==typeof g?g:n&&n.locale,t=n&&n.isLocaleDomain&&(0,s.getDomainLocale)(u,e,n&&n.locales,n&&n.domainLocales);x.href=t||(0,s.addBasePath)((0,s.addLocale)(u,e,n&&n.defaultLocale))}return r.default.cloneElement(v,x)};t.default=f},5749:function(e,t,n){"use strict";t.__esModule=!0,t.useIntersection=function({rootMargin:e,disabled:t}){const n=t||!s,a=(0,o.useRef)(),[c,l]=(0,o.useState)(!1),f=(0,o.useCallback)((t=>{a.current&&(a.current(),a.current=void 0),n||c||t&&t.tagName&&(a.current=function(e,t,n){const{id:o,observer:r,elements:s}=function(e){const t=e.rootMargin||"";let n=i.get(t);if(n)return n;const o=new Map,r=new IntersectionObserver((e=>{e.forEach((e=>{const t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:r,elements:o}),n}(n);return s.set(e,t),r.observe(e),function(){s.delete(e),r.unobserve(e),0===s.size&&(r.disconnect(),i.delete(o))}}(t,(e=>e&&l(e)),{rootMargin:e}))}),[n,e,c]);return(0,o.useEffect)((()=>{if(!s&&!c){const e=(0,r.requestIdleCallback)((()=>l(!0)));return()=>(0,r.cancelIdleCallback)(e)}}),[c]),[f,c]};var o=n(7294),r=n(8391);const s="undefined"!==typeof IntersectionObserver;const i=new Map},5722:function(e,t,n){"use strict";n.r(t);var o=n(5893),r=n(9163),s=n(1664),i=n(2962);const a=r.ZP.span.withConfig({displayName:"pages__HighlightedText",componentId:"sc-1ff3p8t-0"})(["color:",";"],(({theme:e})=>e.colors.brand)),c=r.ZP.span.withConfig({displayName:"pages__HelloText",componentId:"sc-1ff3p8t-1"})(["text-transform:uppercase;font-weight:600;font-size:0.9em;"]),l=r.ZP.div.withConfig({displayName:"pages__HomeContainer",componentId:"sc-1ff3p8t-2"})(["background-size:100px 199px;padding:12vh 3vw;"]),f=r.ZP.div.withConfig({displayName:"pages__PageBody",componentId:"sc-1ff3p8t-3"})(["font-size:1.25em;line-height:1.5;margin:0 15vw;@media (max-width:","){margin:0 3vw;}"],(({theme:e})=>e.breakpoints.mobile)),u=r.ZP.div.withConfig({displayName:"pages__PageSection",componentId:"sc-1ff3p8t-4"})(["margin:0.5rem 0;"]);t.default=()=>(0,o.jsxs)(l,{children:[(0,o.jsx)(i.PB,{title:"Egor Philippov",description:"The personal site of Egor Philippov.",canonical:"https://www.egorphilippov.me"}),(0,o.jsxs)(f,{children:[(0,o.jsx)(u,{children:(0,o.jsx)(c,{children:"- Hello"})}),(0,o.jsxs)(u,{children:["Is it me you're looking for? My name is"," ",(0,o.jsx)(a,{children:"Egor Philippov"})," and I'm a passionate"," ",(0,o.jsx)(a,{children:"Full Stack Software Engineer"}),". I am comfortable working on the server, browser or mobile. You may have heard of me from."]}),(0,o.jsxs)(u,{children:["I am always looking for exciting new opportunities (\u2714\ufe0f remote \u2714\ufe0f contract \u274c recruiters/agencies).",(0,o.jsx)("br",{}),"Feel free to"," ",(0,o.jsx)(s.default,{href:"/contact",passHref:!0,children:"contact me"}),"."]})]})]})},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5722)}])},1664:function(e,t,n){e.exports=n(6071)},4453:function(){}},function(e){e.O(0,[774,821,433],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);