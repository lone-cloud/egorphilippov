(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{1382:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return c(719)}])},2284:function(a,b,c){"use strict";var d=c(7297),e=c(2125);function f(){var a=(0,d.Z)(["\n  max-width: 60rem;\n  margin: auto;\n  margin-top: ",";\n  padding: ",";\n\n  @media (max-width: ",") {\n    max-width: auto;\n    margin: 0 ",";\n    padding: ",";\n  }\n"]);return f=function(){return a},a}var g=e.ZP.div.withConfig({componentId:"sc-b7ba820a-0"})(f(),function(a){return a.theme.spacing.medium},function(a){var b=a.theme;return"0 ".concat(b.spacing.large)},function(a){return a.theme.breakpoints.mobile},function(a){var b=a.theme;return"0 ".concat(b.spacing.medium)},function(a){var b=a.theme;return"0 ".concat(b.spacing.small)});b.Z=g},719:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return D}});var d=c(7297),e=c(5893),f=c(7294),g=c(2125),h=c(6637),i=c(2962),j=c(1799),k=c(9396);function l(){var a=(0,d.Z)(["\n  min-width: 8rem;\n  background-color: ",";\n  font-size: 1.1em;\n  color: ",";\n  text-align: center;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.25rem 0.5rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n\n  :focus,\n  :hover {\n    background-color: ",";\n  }\n\n  :disabled {\n    cursor: not-allowed;\n    background-color: ",";\n  }\n"]);return l=function(){return a},a}var m=function(a,b){var c=a.children,d=a.onClick,f=a.isDisabled,g=a.isLoading,h=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children","onClick","isDisabled","isLoading"]);return(0,e.jsx)(n,(0,k.Z)((0,j.Z)({ref:b,onClick:function(a){"function"!=typeof d||f||g||d(a)},disabled:f||g},h),{children:c}))},n=g.ZP.button.withConfig({componentId:"sc-ace84a36-0"})(l(),function(a){return a.theme.colors.brand},function(a){return a.theme.colors.white},function(a){var b=a.theme;return(0,h._j)(.05,b.colors.brand)},function(a){var b=a.theme;return(0,h.$n)(.2,b.colors.brand)}),o=(0,f.forwardRef)(m),p=c(2284);function q(){var a=(0,d.Z)(["\n  margin: 0 10vw;\n\n  @media (max-width: ",") {\n    margin: 0 3vw;\n  }\n"]);return q=function(){return a},a}function r(){var a=(0,d.Z)(["\n  display: block;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: ",";\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n\n  :focus {\n    color: #495057;\n    background-color: ",";\n    border-color: ",";\n    outline: 0;\n    box-shadow: 0 0 0 0.1rem ",";\n  }\n"]);return r=function(){return a},a}function s(){var a=(0,d.Z)(["\n  display: block;\n  margin-bottom: ",";\n  margin-top: ",";\n"]);return s=function(){return a},a}function t(){var a=(0,d.Z)(["\n  ",";\n\n  height: auto;\n"]);return t=function(){return a},a}function u(){var a=(0,d.Z)(["\n  ","\n"]);return u=function(){return a},a}function v(){var a=(0,d.Z)(["\n  display: grid;\n  margin-bottom: ",";\n"]);return v=function(){return a},a}var w=function(){var a=(0,f.useState)(""),b=a[0],c=a[1],d=(0,f.useState)(""),g=d[0],h=d[1],j=b.length>2&&g.length>2;return(0,e.jsxs)(p.Z,{children:[(0,e.jsx)(i.PB,{title:"Contact | Egor Philippov",description:"A contact form for Egor Philippov.",canonical:"https://egor.philippov.ca/contact"}),(0,e.jsxs)(x,{action:"https://formspree.io/philippovegor@gmail.com",method:"POST",children:[(0,e.jsxs)(C,{children:[(0,e.jsx)(z,{htmlFor:"email",children:"Email"}),(0,e.jsx)(B,{id:"email",name:"email",type:"email",onChange:function(a){return c(a.target.value)}})]}),(0,e.jsxs)(C,{children:[(0,e.jsx)(z,{htmlFor:"message",children:"Message"}),(0,e.jsx)(A,{id:"message",name:"message",rows:3,onChange:function(a){return h(a.target.value)}})]}),(0,e.jsx)("input",{type:"hidden",name:"_next",value:"https://egor.philippov.ca/success"}),(0,e.jsx)(o,{isDisabled:!j,type:"submit",children:"Submit"})]})]})},x=g.ZP.form.withConfig({componentId:"sc-a16ed737-0"})(q(),function(a){return a.theme.breakpoints.mobile}),y=(0,g.iv)(r(),function(a){var b=a.theme;return(0,h.$n)(.3,b.colors.white)},function(a){var b=a.theme;return(0,h.$n)(.3,b.colors.white)},function(a){var b=a.theme;return(0,h.$n)(.3,b.colors.brand)},function(a){var b=a.theme;return(0,h.$n)(.3,b.colors.brand)}),z=g.ZP.label.withConfig({componentId:"sc-a16ed737-1"})(s(),function(a){return a.theme.spacing.medium},function(a){return a.theme.spacing.small}),A=g.ZP.textarea.withConfig({componentId:"sc-a16ed737-2"})(t(),y),B=g.ZP.input.withConfig({componentId:"sc-a16ed737-3"})(u(),y),C=g.ZP.div.withConfig({componentId:"sc-a16ed737-4"})(v(),function(a){return a.theme.spacing.medium}),D=w}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=1382)}),_N_E=a.O()}])