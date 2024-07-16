(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{1382:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t(8360)}])},7435:function(e,r,t){"use strict";var n=t(5893),o=t(2962),i=t(5451),a=t(1686);let s={hidden:{opacity:0,x:0,y:0},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:0}},l=a.ZP.div.withConfig({componentId:"sc-9383a1bc-0"})`
  ${e=>{let{$isHome:r}=e;return r?a.iv`
        background-size: 100px 199px;
        padding: 12vh 3vw;
      `:a.iv`
      max-width: 60rem;
      margin: auto;
      margin-top: ${e=>{let{theme:r}=e;return r.spacing.medium}};
      padding: ${e=>{let{theme:r}=e;return`0 ${r.spacing.large}`}};

      @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.mobile}}) {
        max-width: auto;
        margin: 0 ${e=>{let{theme:r}=e;return`0 ${r.spacing.medium}`}};
        padding: ${e=>{let{theme:r}=e;return`0 ${r.spacing.small}`}};
      }
    `}}
`;r.Z=e=>{let{children:r,title:t,description:a,isHome:c}=e;return(0,n.jsxs)(l,{$isHome:c,children:[(0,n.jsx)(o.PB,{title:t,description:a,openGraph:{title:t,description:a}}),(0,n.jsx)(i.E.main,{initial:"hidden",animate:"enter",exit:"exit",variants:s,transition:{type:"linear"},children:r})]})}},8360:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return contact}});var n=t(5893),o=t(7294),i=t(1686),a=t(6637);let s=i.ZP.button.withConfig({componentId:"sc-b63b0701-0"})`
  min-width: 8rem;
  background-color: ${e=>{let{theme:r}=e;return r.colors.brand}};
  font-size: 1.1em;
  color: ${e=>{let{theme:r}=e;return r.colors.white}};
  text-align: center;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.25rem 0.5rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  :focus,
  :hover {
    background-color: ${e=>{let{theme:r}=e;return(0,a._j)(.05,r.colors.brand)}};
  }

  :disabled {
    cursor: not-allowed;
    background-color: ${e=>{let{theme:r}=e;return(0,a.$n)(.2,r.colors.brand)}};
  }
`,l=(0,o.forwardRef)((e,r)=>{let{children:t,onClick:o,isDisabled:i,isLoading:a,...l}=e;return(0,n.jsx)(s,{ref:r,onClick:e=>{"function"!=typeof o||i||a||o(e)},disabled:i||a,...l,children:t})});var c=t(7435);let d=i.ZP.form.withConfig({componentId:"sc-40e5d-0"})`
  margin: 0 10vw;

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.mobile}}) {
    margin: 0 3vw;
  }
`,u=i.iv`
  display: block;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  background-color: ${e=>{let{theme:r}=e;return(0,a.$n)(.3,r.colors.white)}};
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  :focus {
    color: #495057;
    background-color: ${e=>{let{theme:r}=e;return(0,a.$n)(.3,r.colors.white)}};
    border-color: ${e=>{let{theme:r}=e;return(0,a.$n)(.3,r.colors.brand)}};
    outline: 0;
    box-shadow: 0 0 0 0.1rem ${e=>{let{theme:r}=e;return(0,a.$n)(.3,r.colors.brand)}};
  }
`,m=i.ZP.label.withConfig({componentId:"sc-40e5d-1"})`
  display: block;
  margin-bottom: ${e=>{let{theme:r}=e;return r.spacing.medium}};
  margin-top: ${e=>{let{theme:r}=e;return r.spacing.small}};
`,p=i.ZP.textarea.withConfig({componentId:"sc-40e5d-2"})`
  ${u};

  height: auto;
`,g=i.ZP.input.withConfig({componentId:"sc-40e5d-3"})`
  ${u}
`,h=i.ZP.div.withConfig({componentId:"sc-40e5d-4"})`
  display: grid;
  margin-bottom: ${e=>{let{theme:r}=e;return r.spacing.medium}};
`;var contact=()=>{let[e,r]=(0,o.useState)(""),[t,i]=(0,o.useState)(""),a=e.length>2&&t.length>2;return(0,n.jsx)(c.Z,{title:"Contact | Egor Philippov",description:"A contact form for Egor Philippov.",children:(0,n.jsxs)(d,{action:"https://formspree.io/f/xeqdjarz",method:"POST",children:[(0,n.jsxs)(h,{children:[(0,n.jsx)(m,{htmlFor:"email",children:"Email"}),(0,n.jsx)(g,{id:"email",name:"email",type:"email",onChange:e=>r(e.target.value)})]}),(0,n.jsxs)(h,{children:[(0,n.jsx)(m,{htmlFor:"message",children:"Message"}),(0,n.jsx)(p,{id:"message",name:"message",rows:3,onChange:e=>i(e.target.value)})]}),(0,n.jsx)(l,{isDisabled:!a,type:"submit",children:"Submit"})]})})}}},function(e){e.O(0,[451,774,888,179],function(){return e(e.s=1382)}),_N_E=e.O()}]);