(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2048:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return K}});var t=i(6265),a=i(7294),o=i(5893),r=i(9163),s=i(1163),c=i(9008),l=i(1516),d=i(3504),p=i(7814),m=i(1417),h=i(7595),f=i(8947),g=i(2962);i(5001);const u="#15acd6",j="#2b2b2b";var x={colors:{brand:u,black:j,white:"#ffffff",greyLight:"#CFD2D3",grey:"#6c757d",nidratech:"#d5851d"},spacing:{navBarHeight:"5rem",small:"0.5rem",medium:"1rem",mediumLarge:"1.5rem",large:"2rem"},breakpoints:{mobile:"48rem"}},b=i(7261),v=i(6532);function y(){const e=(0,b.Z)(["  \n  html {\n     scroll-behavior: smooth;\n  }\n\n  #__next {\n    font-family: 'Roboto', sans-serif;\n  }\n\n  html, body {\n    font-family: 'Roboto', sans-serif;\n    color: ","\n  }\n  \n  a {\n      color: ",";\n      transition: all 200ms;\n\n      :focus, :hover {\n        color: ",";\n      }\n  }\n\n  .page-transition-enter {\n    opacity: 0;\n  }\n  .page-transition-enter-active {\n    opacity: 1;\n    transition: opacity 200ms;\n  }\n  .page-transition-exit {\n    opacity: 1;\n  }\n  .page-transition-exit-active {\n    opacity: 0;\n    transition: opacity 200ms;\n  }\n"]);return y=function(){return e},e}const w=(0,r.vJ)(y(),j,u,(0,h._j)(.05,u));var _=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v.AG,{}),(0,o.jsx)(w,{})]}),N=i(1664);const k=r.ZP.div.withConfig({displayName:"BurgerMenu__Wrapper",componentId:"sc-17rbfzm-0"})(["position:relative;padding-top:0.7rem;cursor:pointer;display:block;& span{background:",";display:block;position:relative;user-select:none;width:3.5rem;height:0.4rem;margin-bottom:0.7rem;transition:all ease-in-out 0.2s;}.open span:nth-child(2){opacity:0;}.open span:nth-child(3){transform:rotate(45deg);top:-1.1rem;}.open span:nth-child(1){transform:rotate(-45deg);top:1.1rem;}"],(({theme:e})=>e.colors.brand));var C=({isNavbarOpen:e,setIsNavbarOpen:n})=>(0,o.jsx)(k,{onClick:()=>n(!e),children:(0,o.jsxs)("div",{id:"menu-toggle",className:e?"open":"",children:[(0,o.jsx)("span",{children:"\xa0"}),(0,o.jsx)("span",{children:"\xa0"}),(0,o.jsx)("span",{children:"\xa0"})]})}),P=i(5252);const O=r.ZP.a.withConfig({displayName:"CollapseMenu__NavItem",componentId:"sc-1e4kg4n-0"})(["display:flex;padding:0 ",";color:",";justify-content:center;min-width:10vw;:hover{color:",";}"],(({theme:e})=>e.spacing.medium),(({isActive:e,theme:n})=>e?n.colors.brand:n.colors.grey),(({isActive:e,theme:n})=>(0,h._j)(.05,e?n.colors.brand:n.colors.grey))),I=(0,r.ZP)(P.animated.div).withConfig({displayName:"CollapseMenu__CollapseWrapper",componentId:"sc-1e4kg4n-1"})(["background:",";position:fixed;top:4.5rem;left:0;right:0;z-index:999;"],(({theme:e})=>(0,h._j)(.05,e.colors.white))),Z=r.ZP.ul.withConfig({displayName:"CollapseMenu__NavLinks",componentId:"sc-1e4kg4n-2"})(["list-style-type:none;padding:2rem 1rem 2rem 2rem;display:flex;justify-content:center;min-width:10vw;a{text-decoration:none;}@media (min-width:","){display:none;}"],(({theme:e})=>e.breakpoints.mobile));var H=({isNavbarOpen:e,setIsNavbarOpen:n})=>{const{pathname:i}=(0,s.useRouter)(),t=(0,a.useRef)(null),r=(0,P.useTransition)(e,{from:{position:"absolute",opacity:0},enter:{opacity:1},leave:{opacity:0}});return(0,a.useEffect)((()=>{const i=document.querySelector("#menu-toggle"),a=a=>{!e||null!==t&&void 0!==t&&t.current.contains(a.target)||null!==i&&void 0!==i&&i.contains(a.target)||n(!1)};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}}),[t,e]),(0,o.jsx)(o.Fragment,{children:r(((e,a)=>a&&(0,o.jsx)(I,{ref:t,style:e,children:(0,o.jsxs)(Z,{children:[(0,o.jsx)("li",{children:(0,o.jsx)(N.default,{href:"/",passHref:!0,children:(0,o.jsx)(O,{as:"a",title:"Home",onClick:()=>n(!1),isActive:"/"===i,children:"Home"})})}),(0,o.jsx)("li",{children:(0,o.jsx)(N.default,{href:"/blog",passHref:!0,children:(0,o.jsx)(O,{as:"a",title:"Blog",onClick:()=>n(!1),isActive:"/blog"===i,children:"Blog"})})}),(0,o.jsx)("li",{children:(0,o.jsx)(N.default,{href:"/resume",passHref:!0,children:(0,o.jsx)(O,{as:"a",title:"Resum\xe9",onClick:()=>n(!1),isActive:"/resume"===i,children:"Resum\xe9"})})}),(0,o.jsx)("li",{children:(0,o.jsx)(N.default,{href:"/contact",passHref:!0,children:(0,o.jsx)(O,{as:"a",title:"Contact",onClick:()=>n(!1),isActive:"/contact"===i,children:"Contact"})})})]})})))})};function A({isNavbarOpen:e,setIsNavbarOpen:n}){const{pathname:i}=(0,s.useRouter)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(F,{children:(0,o.jsxs)(L,{children:[(0,o.jsx)(N.default,{href:"/",passHref:!0,children:(0,o.jsx)(E,{as:"a","aria-label":"Site cloud logo",children:(0,o.jsx)(S,{src:"images/logo.jpg",alt:"Site cloud logo"})})}),(0,o.jsxs)(z,{children:[(0,o.jsx)("li",{children:(0,o.jsx)(N.default,{href:"/",passHref:!0,children:(0,o.jsx)(E,{as:"a",title:"Home",isActive:"/"===i,children:"Home"})})}),(0,o.jsx)("li",{children:(0,o.jsx)(N.default,{href:"/blog",passHref:!0,children:(0,o.jsx)(E,{as:"a",title:"Blog",isActive:"/blog"===i,children:"Blog"})})}),(0,o.jsx)("li",{children:(0,o.jsx)(N.default,{href:"/resume",passHref:!0,children:(0,o.jsx)(E,{as:"a",title:"Resum\xe9",isActive:"/resume"===i,children:"Resum\xe9"})})}),(0,o.jsx)("li",{children:(0,o.jsx)(N.default,{href:"/contact",passHref:!0,children:(0,o.jsx)(E,{as:"a",title:"Contact us",isActive:"/contact"===i,children:"Contact"})})})]}),(0,o.jsx)(B,{children:(0,o.jsx)(C,{isNavbarOpen:e,setIsNavbarOpen:n})})]})}),(0,o.jsx)(H,{isNavbarOpen:e,setIsNavbarOpen:n})]})}const E=r.ZP.a.withConfig({displayName:"Navbar__NavItem",componentId:"c06jbt-0"})(["display:flex;padding:0 ",";color:",";align-items:center;:hover{color:",";}@media (max-width:","){padding:0;}"],(({theme:e})=>e.spacing.medium),(({isActive:e,theme:n})=>e?n.colors.brand:n.colors.grey),(({isActive:e,theme:n})=>(0,h._j)(.05,e?n.colors.brand:n.colors.grey)),(({theme:e})=>e.breakpoints.mobile)),F=r.ZP.nav.withConfig({displayName:"Navbar__NavBar",componentId:"c06jbt-1"})(["position:fixed;width:100%;top:0;left:0;z-index:1;"]),L=r.ZP.div.withConfig({displayName:"Navbar__FlexContainer",componentId:"c06jbt-2"})(["max-width:120rem;display:flex;margin:auto;justify-content:space-between;padding:0 ",";height:",";background:",";@media (max-width:","){padding:",";}"],(({theme:e})=>e.spacing.medium),(({theme:e})=>e.spacing.navBarHeight),(({theme:e})=>e.colors.white),(({theme:e})=>e.breakpoints.mobile),(({theme:e})=>"0 ".concat(e.spacing.small))),z=r.ZP.ul.withConfig({displayName:"Navbar__NavLinks",componentId:"c06jbt-3"})(["justify-self:end;list-style-type:none;margin:auto 0;display:flex;align-items:center;a{text-decoration:none;}@media (max-width:","){display:none;}"],(({theme:e})=>e.breakpoints.mobile)),B=r.ZP.div.withConfig({displayName:"Navbar__BurgerWrapper",componentId:"c06jbt-4"})(["margin:auto 0;@media (min-width:","){display:none;}"],(({theme:e})=>e.breakpoints.mobile)),S=r.ZP.img.withConfig({displayName:"Navbar__ImgLogo",componentId:"c06jbt-5"})(["width:3.75rem;height:3.75rem;border-radius:3.75rem;border:2px solid ",";transition-duration:0.3s;:focus,:hover{transform:scale(1.05);}"],(({theme:e})=>e.colors.white));i(9878);function R(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function D(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?R(Object(i),!0).forEach((function(n){(0,t.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):R(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}f.vc.autoAddCss=!1;const M=(new Date).getFullYear();s.default.events.on("routeChangeComplete",(()=>{l.ZP.pageview("".concat(window.location.pathname).concat(window.location.search))}));const T=(0,r.ZP)(p.G).withConfig({displayName:"_app__StyledFontAwesomeIcon",componentId:"sc-1fdije6-0"})(["padding:0 0.5rem;"]),G=r.ZP.span.withConfig({displayName:"_app__FindMeText",componentId:"sc-1fdije6-1"})(["text-transform:uppercase;margin-right:",";font-weight:600;font-size:0.9em;"],(({theme:e})=>e.spacing.medium)),W=r.ZP.div.withConfig({displayName:"_app__MainLayoutContainer",componentId:"sc-1fdije6-2"})(["display:grid;grid-template-rows:1fr min-content;min-height:100vh;"]),X=r.ZP.main.withConfig({displayName:"_app__StyledMain",componentId:"sc-1fdije6-3"})(["padding-top:",";"],(({theme:e})=>e.spacing.navBarHeight)),U=r.ZP.footer.withConfig({displayName:"_app__StyledFooter",componentId:"sc-1fdije6-4"})(["display:flex;justify-content:center;padding:",";flex-direction:column;"],(({theme:e})=>e.spacing.large)),q=r.ZP.a.withConfig({displayName:"_app__ForgedLink",componentId:"sc-1fdije6-5"})(["color:",";:hover,:focus{color:",";}"],(({theme:e})=>e.colors.nidratech),(({theme:e})=>(0,h._j)(.05,e.colors.nidratech))),J=r.ZP.div.withConfig({displayName:"_app__FindMeLinks",componentId:"sc-1fdije6-6"})(["align-self:flex-end;margin:0 20vw;display:flex;align-items:center;a{color:",";transition:all 200ms;:focus,:hover{color:",";}}@media (max-width:","){margin:0;}"],(({theme:e})=>e.colors.black),(({theme:e})=>(0,h._j)(.05,e.colors.brand)),(({theme:e})=>e.breakpoints.mobile)),Y=r.ZP.div.withConfig({displayName:"_app__ForgedLinkContainer",componentId:"sc-1fdije6-7"})(["margin-top:2rem;align-self:center;"]);var K=({Component:e,pageProps:n,router:i})=>{const{0:t,1:s}=(0,a.useState)(!1);return(0,a.useEffect)((()=>{l.ZP.initialize("UA-70441070-1")}),[]),(0,o.jsxs)(r.f6,{theme:x,children:[(0,o.jsx)(g.lX,{openGraph:{type:"website",locale:"en_US",images:[{url:"https://www.egorphilippov.me/images/logo-xl.jpg",width:496,height:496}]}}),(0,o.jsxs)(c.default,{children:[(0,o.jsx)("title",{children:"Egor Philippov"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,o.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,o.jsx)("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),(0,o.jsx)("meta",{name:"msapplication-TileColor",content:"#1d7eb1"}),(0,o.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,o.jsx)("meta",{name:"author",content:"Egor Philippov"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,o.jsx)(_,{}),(0,o.jsxs)(W,{children:[(0,o.jsx)(A,{isNavbarOpen:t,setIsNavbarOpen:s}),(0,o.jsx)(X,{children:(0,o.jsx)(d.PageTransition,{timeout:200,classNames:"page-transition",skipInitialTransition:!0,children:(0,a.createElement)(e,D(D({},n),{},{key:i.route}))})}),(0,o.jsxs)(U,{children:[(0,o.jsxs)(J,{children:[(0,o.jsx)(G,{children:"- Find me on"}),(0,o.jsx)("a",{href:"https://github.com/lone-cloud",rel:"noreferrer",target:"_blank","aria-label":"GitHub",children:(0,o.jsx)(T,{icon:m.zhw,size:"2x"})}),(0,o.jsx)("a",{href:"https://ca.linkedin.com/in/egor-philippov-1482207b",rel:"noreferrer",target:"_blank","aria-label":"LinkedIn",children:(0,o.jsx)(T,{icon:m.D9H,size:"2x"})})]}),(0,o.jsxs)(Y,{children:["Forged from \ud83d\udd25 \xa9",M," ",(0,o.jsx)(q,{href:"https://www.nidratech.com/",children:"Nidratech Ltd."})]})]})]})]})}},6363:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return i(2048)}])},4453:function(){}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,112,821,595,433,814,878],(function(){return n(6363),n(2441)}));var i=e.O();_N_E=i}]);