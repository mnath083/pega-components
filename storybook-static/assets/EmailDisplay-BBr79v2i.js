import{j as s,r as bo}from"./index-Df7fr5hj.js";import{r as c}from"./index-D4H_InIO.js";import{m as fe,b as gn,c as ur,g as bn,n as yo,o as $o,f as je,i as Ee,s as yn,e as Te,l as ve,F as oe,I as Se,T as Me,q as k,G as xe,K as ft,S as Lt,A as m,r as Ze,d as B,N as wo,J as rt,O as Ct,H as Wt,Q as xo,R as fr,B as De,h as Rt,y as So,U as To,k as me,j as $n,a as an,M as wn,E as xn,V as mr,W as _o,X as Io,D as nt,Y as sn,Z as pr,_ as Ao,$ as Sn,w as ko,a0 as Eo}from"./Button-O6gWt_GM.js";import{c as hr}from"./check.icon-BS-u92M9.js";import{j as vo,k as Wn,h as Co,l as Ro,B as Lo,d as Ut,V as Bt,e as Mo,m as jo,g as gr,n as Do}from"./Link-BAySQPqa.js";const Oo=/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|about|blob):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i,ln=e=>e.charAt(0).toUpperCase()+e.slice(1),Et=e=>{var n;const t=(n=e.current)==null?void 0:n.getRootNode();if(!(!fe(t,Document)&&!fe(t,ShadowRoot))){for(const r of t.childNodes)if(r.contains(e.current)&&fe(r,HTMLElement))return r}},No=(e,t,n)=>{const r=[];if(t.global||t.sticky){let o=0,i;for(;i=t.exec(e);)r.push(e.slice(o,i.index),n(i[0])),o=i.index+i[0].length;r.push(e.slice(o))}else{const o=t.exec(e);o?r.push(e.slice(0,o.index),n(o[0]),e.slice(o.index+o[0].length)):r.push(e)}return r.flatMap((o,i)=>o?s.jsx(c.Fragment,{children:o},i):[])},Ye=()=>{const{direction:e}=gn();return c.useMemo(()=>e==="ltr"?{start:"left",end:"right",ltr:!0,rtl:!1}:{start:"right",end:"left",ltr:!1,rtl:!0},[e])},Vn=["button","a","input","li","legend"],zo=({focusEl:e,scope:t,scopeSelector:n,selector:r,orientation:o="vertical",focusDescendantEl:i,clearFocusDescendant:l,focusReturnEl:u,clearFocusReturn:f,currentDescendantId:d,onClick:p,preventInitialScroll:g,pauseDescendantEvaluation:b=!1,clearPreventScroll:h},$=[])=>{const[_,M]=c.useState(0),w=c.useRef(""),E=c.useRef(b),[L,D]=c.useState(null),[I,v]=c.useState(null),[x,V]=c.useState(),{rtl:q}=Ye(),C=c.useCallback(()=>{x==null||x.forEach(S=>{S.setAttribute("data-current","false")})},[x]),j=c.useCallback(S=>{C(),V(S?Array.from(S).filter(O=>fe(O,HTMLElement)):null)},[x]),G=c.useCallback(({clear:S}={clear:!1})=>{var Z;const O=[];if(x&&x.length&&x.forEach(T=>{T.id=T.id||ur(),O.push(T.id)}),S){const T=(Z=e==null?void 0:e.getAttribute("aria-owns"))==null?void 0:Z.split(" "),z=T==null?void 0:T.filter(F=>!O.includes(F));e==null||e.setAttribute("aria-owns",(z==null?void 0:z.join(" "))||"")}else e==null||e.setAttribute("aria-owns",O.join(" "))},[e,x]),U=c.useCallback(()=>{if(b)return;let S=t;if(S&&fe(S,HTMLElement)){if(n&&(S=S.querySelector(n)),!S){j(null);return}if(r){const O=S.querySelectorAll(r);j(O)}else{const O=S.querySelectorAll(vo);j(O)}}else j(null);I===null&&v(0)},[t,n,r,b,I]);return c.useEffect(()=>{E.current=b},[b]),c.useEffect(()=>{if(!t||!e)return;t.setAttribute("data-active-scope",bn()===e?"true":"false");const S=()=>{t.setAttribute("data-active-scope","true")},O=()=>{t.setAttribute("data-active-scope","false")};return e.addEventListener("focus",S),e.addEventListener("blur",O),()=>{e.removeEventListener("focus",S),e.removeEventListener("blur",O)}},[t,e]),c.useEffect(()=>{b||U()},[b]),c.useEffect(()=>{const S=setTimeout(()=>{U(),E.current||v(0)},0);return()=>clearTimeout(S)},[...$]),c.useEffect(()=>{b?(C(),G({clear:!0})):(G(),M(Math.random()))},[b,e,x]),c.useEffect(()=>{const S=()=>{f==null||f(),h==null||h(),I!==null&&I+1<x.length?v(I+1):v(0)},O=()=>{f==null||f(),h==null||h(),I!==null&&I-1>-1?v(I-1):v(x.length-1)},Z=T=>{x!=null&&x.length&&(["ArrowDown","ArrowUp"].includes(T.key)&&o==="vertical"&&T.preventDefault(),["ArrowLeft","ArrowRight"].includes(T.key)&&o==="horizontal"&&T.preventDefault(),setTimeout(()=>{var z;switch(T.key){case"ArrowDown":o==="vertical"&&S();break;case"ArrowUp":o==="vertical"&&O();break;case"ArrowRight":o==="horizontal"&&(q?O():S());break;case"ArrowLeft":o==="horizontal"&&(q?S():O());break;case"Enter":if(I!==null){if(p){p(x[I]);break}const F=x[I].nodeName.toLowerCase();Vn.includes(F)?x[I].click():(z=x[I].querySelector(`${Vn.join(",")}`))==null||z.click()}break}},0))};return!b&&e&&(x!=null&&x.length)&&!d&&e.addEventListener("keydown",Z),()=>{e==null||e.removeEventListener("keydown",Z)}},[e,I,x,b]),c.useEffect(()=>{!b&&x&&d&&x.forEach((S,O)=>{S.id===d&&v(O)})},[d,x,b]),c.useEffect(()=>{if(E.current)return;const S=L||I,O=u==null?void 0:u.id;let Z;const T=i==null?void 0:i.id;let z,F=!1;if(x&&x.length){if(x.forEach((W,P)=>{L===null&&W.id===T&&(z=P,F=!0,D(P)),W.id===O&&(Z=P),W.setAttribute("data-current","false")}),Z&&Z!==I){v(Z),f==null||f();return}if(F&&z!==void 0){M(Math.random()),v(z);return}if(S!==null&&x[S]){const W=x[S];if(W.setAttribute("data-current","true"),e==null||e.setAttribute("aria-activedescendant",W.id),W.id!==w.current&&!g){const P=Element.prototype.scrollIntoViewIfNeeded??Element.prototype.scrollIntoView;P==null||P.call(W,!1)}L!==null&&(D(null),l==null||l()),w.current=W.id}}return()=>{e==null||e.removeAttribute("aria-activedescendant")}},[x,I,i,e,_]),{activeDescendant:I!==null&&x?x[I]:void 0,descendants:x||null}},Po=({loading:e,descendants:t,previousActiveDescendant:n,activeDescendant:r,focusReturnEl:o,setFocusReturnEl:i,scrollEl:l})=>{c.useEffect(()=>{if(e&&t&&t.length&&r){const f=[...t].pop(),d=(f==null?void 0:f.id)||void 0;let p;return d===r.id?(l&&(l.scrollTop=l.scrollHeight-l.offsetHeight),(o==null?void 0:o.id)!==r.id&&(p=setTimeout(()=>{i(f)},0))):(o==null?void 0:o.id)!==r.id&&(p=setTimeout(()=>{i(r)},0)),()=>clearTimeout(p)}},[e,t,n,r,l,o])},br=(e,t,n,r,o)=>{c.useEffect(()=>{var l;let i=null;if(t>0){const u=(e==null?void 0:e.current)??((l=o==null?void 0:o.current)==null?void 0:l.getRootNode())??document;if(!fe(u,HTMLElement,SVGElement,Document,ShadowRoot))return;const f=u.querySelectorAll(r);f.length>t&&(i=f[t])}if(i){const u=new IntersectionObserver(f=>{f[0].isIntersecting&&n()},{root:e.current??null});return u.observe(i),()=>{u.disconnect()}}},[n,t])},yr=(e,t,n)=>{var l;const{portalTarget:r}=gn(),o=((l=r==null?void 0:r.ownerDocument)==null?void 0:l.defaultView)||window,i=c.useCallback(u=>{const f=u.composedPath(),d=f[0];if(!fe(d,Node))return;let p=0,g=1;for(;!fe(f[p],Document);){const h=f[p],$=f[g];if(!h||!$)return;if(fe($,DocumentFragment)||fe($,Document)){if(!fe(h,Node)||!$.contains(h))return;p=g}else if(fe(h,DocumentFragment)){if(!fe($,Element)||$.shadowRoot!==h)return;p=g}g+=1}yo(t).flatMap(h=>!fe(h,Element)&&!fe(h,Document)&&!fe(h,DocumentFragment)?[h]:[h,...$o(h)]).every(h=>h!==d&&!h.contains(d))&&n(u)},[...t,n]);c.useEffect(()=>{const u=Array.isArray(e)?e:[e];return u.forEach(f=>{var d;return(d=o==null?void 0:o.document)==null?void 0:d.addEventListener(f,i)}),()=>{u.forEach(f=>{var d;return(d=o==null?void 0:o.document)==null?void 0:d.removeEventListener(f,i)})}},[e,i])},Tn=e=>{const t=c.useRef();return c.useLayoutEffect(()=>{t.current=e},[e]),t.current},Fo="budicon",Ho="galaxy",Uo=()=>s.jsx("path",{d:"M17.66 3.3 16.5 6.5l-3.3 1.16c-.22.088-.264.562 0 .67l3.3 1.17 1.16 3.3c.1.3.543.3.67 0l1.17-3.3c1.981-.7 3.081-1.09 3.3-1.17.328-.119.205-.598 0-.67L19.5 6.5l-1.17-3.2c-.187-.415-.522-.377-.67 0ZM15.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"}),Bo="0 0 25 25",Go=Object.freeze(Object.defineProperty({__proto__:null,Component:Uo,name:Ho,set:Fo,viewBox:Bo},Symbol.toStringTag,{value:"Module"})),Wo="streamline",Vo="folder-empty",qo=()=>s.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M15.188 7.313v-2.25a1.125 1.125 0 0 0-1.126-1.125H6.189V2.813a1.125 1.125 0 0 0-1.125-1.125H1.688A1.125 1.125 0 0 0 .563 2.813v12.224a1.275 1.275 0 0 0 2.502.329l1.763-7.243a1.125 1.125 0 0 1 1.081-.81h10.404A1.125 1.125 0 0 1 17.4 8.726l-1.65 6.75a1.125 1.125 0 0 1-1.087.835H1.835"}),Zo="0 0 18 18",Yo=Object.freeze(Object.defineProperty({__proto__:null,Component:qo,name:Vo,set:Wo,viewBox:Zo},Symbol.toStringTag,{value:"Module"})),$r=je("empty-state",["message","icon"]);Ze(Go);Ze(Yo);const _n=k.div(({theme:e})=>{const t=xe(()=>ft(e.base.palette["foreground-color"],e.base.transparency["transparent-2"]));return m`
    height: 100%;

    ${Lt} {
      font-size: 1.5rem;
      height: 1.5rem;
      width: 1.5rem;
      color: ${t};
    }
  `});_n.defaultProps=B;const Xo=c.forwardRef(function(t,n){const{base:{"icon-set":r}}=yn(),o=Te(),{testId:i,message:l=o("no_items"),...u}=t,f=ve(i,$r);return s.jsxs(oe,{"data-testid":f.root,...u,as:_n,ref:n,container:{direction:"column",alignItems:"center",justify:"center",gap:1},children:[s.jsx(Se,{"data-testid":f.icon,name:r==="streamline"?"folder-empty":"galaxy"}),s.jsx(Me,{"data-testid":f.message,variant:"secondary",children:l})]})}),wr=Ee(Xo,$r),mt=c.createContext({mode:"action",variant:"drill-down",itemLayout:"stacked",scrollAt:7,loading:!1,componentId:ur(),pushFlyoutId:()=>null,flyOutActiveIdStack:[],focusControl:null,updateActiveDescendants:()=>null,setFocusDescendant:()=>null,setFocusReturnEl:()=>null,getScopedItemId:()=>"",updateParentDescendantStack:()=>null}),xr=je("meta-list",[]),Ko=k.ul(({wrapItems:e})=>m`
    list-style: none;
    overflow: hidden;

    /* Negative margin to account for overflow clipping of focus indicator */
    padding: 0.3rem;
    margin: -0.3rem;

    ${!e&&m`
      white-space: nowrap;
    `}
  `),qn=k.li(({wrapItems:e})=>m`
    min-width: 0;
    display: inline-block;

    ${e?m`
          overflow-wrap: break-word;
        `:m`
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        `}

    &[role='separator'] {
      -webkit-user-select: none;
      user-select: none;
    }
  `),Jo=c.forwardRef(function({testId:t,items:n,wrapItems:r=!0,...o},i){const l=ve(t,xr),u=n.length<=1?"none":void 0;return s.jsx(oe,{"data-testid":l.root,...o,as:Ko,role:u,container:{colGap:.5,alignItems:"center",wrap:r?"wrap":"nowrap"},wrapItems:r,ref:i,children:n.flatMap((f,d,p)=>f?[s.jsx(Me,{as:qn,variant:"secondary",role:u,wrapItems:r,children:f},`${d+0}`)].concat(d!==p.length-1?[s.jsx(Me,{as:qn,"aria-hidden":!0,variant:"secondary",children:"•"},`${d+0}-sep`)]:[]):[])})}),Qo=Ee(Jo,xr),Zn=e=>["between","around","evenly"].includes(e)?`space-${e}`:e,Yn=e=>{if(!e)return;if(e===!0)return m`
      display: grid;
    `;const{inline:t,pad:n,cols:r,autoCols:o,rows:i,autoRows:l,autoFlow:u,areas:f,template:d,colGap:p,rowGap:g,gap:b,justifyItems:h,justifyContent:$,alignItems:_,alignContent:M}=e;return m`
    display: ${t?"inline-grid":"grid"};

    ${n!==void 0&&m`
      padding: ${({theme:{base:{spacing:w}}})=>(Array.isArray(n)?n:[n]).map(E=>`calc(${E} * ${w})`).join(" ")};
    `}

    ${r&&m`
      grid-template-columns: ${r};
    `}

    ${o&&m`
      grid-auto-columns: ${o};
    `}

    ${i&&m`
      grid-template-rows: ${i};
    `}

    ${l&&m`
      grid-auto-rows: ${l};
    `}

    ${u&&m`
      grid-auto-flow: ${u};
    `}

    ${f&&m`
      grid-template-areas: ${f};
    `}

    ${d&&m`
      grid-template: ${d};
    `}

    ${b!==void 0&&m`
      gap: calc(${b} * ${w=>w.theme.base.spacing});
    `}

    ${p!==void 0&&m`
      column-gap: calc(${p} * ${w=>w.theme.base.spacing});
    `}

    ${g!==void 0&&m`
      row-gap: calc(${g} * ${w=>w.theme.base.spacing});
    `}

    ${h&&m`
      justify-items: ${h};
    `}

    ${$&&m`
      justify-content: ${Zn($)};
    `}

    ${_&&m`
      align-items: ${_};
    `}

    ${M&&m`
      align-content: ${Zn(M)};
    `}
  `},Xn=e=>{if(!e)return;const{colStart:t,colEnd:n,colStartEnd:r,rowStart:o,rowEnd:i,rowStartEnd:l,area:u,justifySelf:f,alignSelf:d}=e;return m`
    ${t&&m`
      grid-column-start: ${t};
    `}

    ${n&&m`
      grid-column-end: ${n};
    `}

    ${r&&m`
      grid-column: ${r};
    `}

    ${o&&m`
      grid-row-start: ${o};
    `}

    ${i&&m`
      grid-row-end: ${i};
    `}

    ${l&&m`
      grid-row: ${l};
    `}

    ${u&&m`
      grid-area: ${u};
    `}

    ${f&&m`
      justify-self: ${f};
    `}

    ${d&&m`
      align-self: ${d};
    `}
  `},ei=["xs","sm","md","lg","xl"],Vt=k.div(({container:e,item:t,theme:{base:{breakpoints:n}},xs:r,sm:o,md:i,lg:l,xl:u})=>{const f={xs:r,sm:o,md:i,lg:l,xl:u};return m`
      ${Yn(e)}
      ${Xn(t)}

    ${ei.map(d=>{var p,g;return f[d]&&m`
            @media screen and (min-width: ${n[d]}) {
              ${Yn((p=f[d])==null?void 0:p.container)}
              ${Xn((g=f[d])==null?void 0:g.item)}
            }
          `})}
    `});Vt.defaultProps=B;const dt=c.forwardRef(function(t,n){return s.jsx(Vt,{...t,ref:n})}),Sr=je("summary-item",["primary","secondary","visual","actions"]),Fe=k.div`
  > ${wo}, img {
    display: block;
    object-fit: cover;
    width: 2rem;
    height: 2rem;
  }
`;Fe.defaultProps=B;const In=k(dt)(({theme:e,isString:t,overflowStrategy:n})=>m`
    ${n==="ellipsis"?m`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `:m`
          word-break: break-word;
        `}

    ${t&&m`
      font-weight: ${e.base["font-weight"]["semi-bold"]};
    `}
  `);In.defaultProps=B;const Ne=k(dt)(({overflowStrategy:e})=>m`
    ${e==="ellipsis"?m`
          overflow: hidden;
          text-overflow: ellipsis;
        `:m`
          word-break: break-word;
        `}
  `),ze=k.div`
  white-space: nowrap;
`,Tr=k.div``,ti=({visual:e,actions:t})=>`${e?"auto ":""}minmax(0, 1fr)${t?" auto":""}`,ni=({secondary:e,layout:t,visual:n,actions:r})=>`"${n?"visual ":""}primary${e&&t==="inline"?" secondary":""}${r?" actions":""}"${e&&t==="stacked"?`
"${n?"visual ":""}secondary${r?" actions":""}"`:""}`,ri=c.forwardRef(function({testId:t,visual:n,primary:r,secondary:o,layout:i="stacked",actions:l,container:u,overflowStrategy:f="wrap",as:d,...p},g){const b=ve(t,Sr);return s.jsxs(dt,{"data-testid":b.root,...p,ref:g,container:{cols:ti({visual:n,actions:l}),colGap:2,areas:ni({secondary:o,layout:i,visual:n,actions:l}),...u},as:Tr,forwardedAs:d,children:[n&&s.jsx(dt,{"data-testid":b.visual,as:Fe,item:{area:"visual",alignSelf:"center"},children:n}),s.jsx(In,{"data-testid":b.primary,item:{area:"primary",alignSelf:o&&i==="stacked"?"end":"center"},isString:typeof r=="string",overflowStrategy:f,children:r}),o&&s.jsx(Ne,{"data-testid":b.secondary,item:{area:"secondary",alignSelf:i==="stacked"?"start":"center"},overflowStrategy:f,children:o}),l&&s.jsx(dt,{"data-testid":b.actions,as:ze,item:{area:"actions",alignSelf:"center"},children:l})]})}),An=Ee(ri,Sr),oi="budicon",ii="caret-left",ai=()=>s.jsx("path",{d:"M17.25 21H14.5L8 12.5 14.5 4h2.75l-6.5 8.5z"}),si="0 0 25 25",_r=Object.freeze(Object.defineProperty({__proto__:null,Component:ai,name:ii,set:oi,viewBox:si},Symbol.toStringTag,{value:"Module"})),li="budicon",ci="caret-right",di=()=>s.jsx("path",{d:"M8 4h2.75l6.5 8.5-6.5 8.5H8l6.5-8.5z"}),ui="0 0 25 25",Ir=Object.freeze(Object.defineProperty({__proto__:null,Component:di,name:ci,set:li,viewBox:ui},Symbol.toStringTag,{value:"Module"})),Ar=k.span(({theme:e,variant:t,children:n})=>{const{foreground:r,background:o}=e.components.badges.count[t],i=xe(()=>ft(r,.1)),l=rt(e.base["font-size"],e.base["font-scale"]);return m`
    display: inline-block;
    block-size: 1rem;
    flex-shrink: 0;
    border-radius: calc(9999 * ${e.base["border-radius"]});
    color: ${r};
    background-color: ${o};
    box-shadow: inset 0 0 0 0.0625rem ${i};
    font-size: ${l.xxs};
    font-weight: ${e.base["font-weight"].bold};
    line-height: 1rem;
    text-align: center;
    white-space: nowrap;

    ${n.length===1?m`
          aspect-ratio: 1 / 1;
        `:m`
          padding-inline: ${e.base.spacing};
        `}
  `});Ar.defaultProps=B;const Jt=e=>e<1e3?"":1e3<=e&&e<1e6?"K":1e6<=e&&e<1e9?"M":1e9<=e&&e<1e12?"B":1e12<=e&&e<1e15?"T":"",fi=e=>{for(let t=3;t<15;t+=3){if(e<10**(t+1))return`${`${e}`.slice(0,1)}.${`${e}`.slice(1,2)}${Jt(e)}`;if(e<10**(t+2))return`${`${e}`.slice(0,2)}${Jt(e)}`;if(e<10**(t+3))return`${`${e}`.slice(0,3)}${Jt(e)}`}return"999T+"},mi=e=>{const t=Math.abs(e);return t<1e3?`${e}`:`${e<0?"-":""}${fi(t)}`},kr=Ee(c.forwardRef(function({testId:t,variant:n="default",children:r,...o},i){const l=ve(t,Wn);return Number.isInteger(r)?s.jsx(Ar,{"data-testid":l.root,variant:n,...o,ref:i,children:mi(r)}):null}),Wn),Er=k.mark(({theme:e})=>m`
    color: ${e.base.colors.black};
    background-color: ${e.components.mark["background-color"]};
    font-weight: ${e.components.mark["font-weight"]};
  `);Er.defaultProps=B;const pi=e=>s.jsx(Er,{...e}),He={isItem(e){return Co(e,"primary")},getItem(e,t){let n;return e.some(r=>this.isItem(r)&&r.id===t?(n=r,!0):r.items?(n=this.getItem(r.items,t),!!n):!1),n},getPath(e,t){let n=[];return e.some(r=>{if(r.id===t)return n=[r],!0;if(r.items){const o=this.getPath(r.items,t);return o.length&&(n=o.concat(r)),!!n.length}return!1}),n},setItem(e,t,n){return e.map(r=>r.id===t?{...n}:r.items?{...r,items:this.setItem(r.items,t,n)}:r)},mapItem(e,t,n){return e.map((r,o,i)=>{let l=r;return r.items&&(l={...l,items:this.mapItem(r.items,t,n)}),this.isItem(l)&&r.id===t&&(l=n(l,o,i)),l})},mapTree(e,t){return e.map((n,r,o)=>{let i=n;return n.items&&(i={...i,items:this.mapTree(n.items,t)}),this.isItem(i)?t(i,r,o):i})},flatten(e,t=[],n={parentFirst:!1}){let r=[],o=[];return e.forEach(i=>{if(this.isItem(i)&&r.push(t.length>0?{...i,ancestors:t}:i),i.items){const l=this.flatten(i.items,[...t,i],n);n.parentFirst?o=[...o,...l]:r=[...r,...l]}}),n.parentFirst?[...r,...o]:r},toggleSelected(e,t,n,r){return this.mapTree(e,o=>{if(this.isItem(o)){if(o.id===t)return{...o,selected:r!==void 0?r:!o.selected};if(n==="single-select")return{...o,selected:!1}}return o})},selectItem(e,t,n){return this.toggleSelected(e,t,n,!0)},deselectItem(e,t,n){return this.toggleSelected(e,t,n,!1)},getSelected(e){return e.reduce((t,n)=>(this.isItem(n)&&n.selected&&(t=[...t,n]),n.items&&(t=[...t,...this.getSelected(n.items)]),t),[])},prependTo(e,t,n){return n?this.mapItem(e,n,r=>({...r,items:[...t,...r.items??[]]})):[...t,...e]},appendTo(e,t,n){return n?this.mapItem(e,n,r=>({...r,items:[...r.items??[],...t]})):[...e,...t]},getNextItem(e,t){if(!t)return e[0];let n;return this.mapItem(e,t,(r,o,i)=>(n=i[o+1],r)),n},getPrevItem(e,t){if(!t)return e[0];let n;return this.mapItem(e,t,(r,o,i)=>(n=i[o-1],r)),n},getParentItem(e,t){if(!t)return;const[,n]=this.getPath(e,t);return n}},Ft=m`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;k(De)`
  align-self: center;
`;const cn=k(Se)``,vr=k.li(({theme:{base:e,components:t},isParentItem:n,itemLayout:r,mode:o="action","aria-selected":i=!1,selectableParent:l=!1})=>{const u=xe(()=>Ct(.85,e.palette["primary-background"],e.palette.interactive)),f=xe(()=>Ct(.95,e.palette["primary-background"],e.palette.interactive)),d=xe(()=>ft(t["radio-check"][":checked"]["background-color"],e.transparency["transparent-5"])),p=t["radio-check"][":checked"]["background-color"],g=xe(()=>Wt(p));return m`
      min-height: ${e["hit-area"]["mouse-min"]};
      padding-block: calc(0.75 * ${e.spacing});
      padding-inline: ${e.spacing};
      cursor: pointer;

      ${r==="inline"&&m`
        justify-content: flex-start;

        ${Tr} {
          /* Sets grid columns based on SummaryItem content combinations */

          &:has(${Fe}):has(${Ne}):has(${ze}) {
            grid-template-areas: 'visual primary secondary actions';
            grid-template-columns: auto auto 1fr auto;
          }

          &:has(${Fe}):has(${Ne}):not(:has(${ze})) {
            grid-template-areas: 'visual primary secondary';
            grid-template-columns: auto auto 1fr;
          }

          &:has(${Fe}):not(:has(${Ne})):has(${ze}) {
            grid-template-areas: 'visual primary actions';
            grid-template-columns: auto 1fr auto;
          }

          &:has(${Fe}):not(:has(${Ne})):not(
              :has(${ze})
            ) {
            grid-template-areas: 'visual primary';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${Fe})):has(${Ne}):has(${ze}) {
            grid-template-areas: 'primary secondary actions';
            grid-template-columns: auto 1fr auto;
          }

          &:not(:has(${Fe})):has(${Ne}):not(
              :has(${ze})
            ) {
            grid-template-areas: 'primary secondary';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${Fe})):not(:has(${Ne})):has(
              ${ze}
            ) {
            grid-template-areas: 'primary actions';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${Fe})):not(:has(${Ne})):not(
              :has(${ze})
            ) {
            grid-template-areas: 'primary';
            grid-template-columns: 1fr;
            flex-grow: 0;
          }

          & > ${In} {
            ${Ft};
          }

          & > ${Ne} {
            ${Ft};

            ul {
              li {
                ${Ft};
              }
              justify-content: end;
            }
          }

          & > ${ze} > ${xo} {
            justify-content: end;
          }
        }
      `}

      @media (pointer: coarse) {
        min-height: ${e["hit-area"]["finger-min"]};
      }

      &:focus-within {
        background-color: ${u};
      }

      &:hover {
        ${cn} {
          visibility: visible;
          ${o==="single-select"&&m`
            color: ${i?p:d};
          `}
          ${o==="multi-select"&&m`
            ${!i&&m`
              border-color: ${t["form-control"][":hover"]["border-color"]};
            `}
          `}
        }
      }

      &:hover:not([aria-disabled='true']) {
        background-color: ${f};
      }

      a:first-of-type {
        display: block;
        width: 100%;
        text-decoration: none;
        color: inherit;
      }

      ${n&&!l&&(o==="multi-select"||o==="single-select")&&m`
        padding-inline-start: calc(1.125rem + 2 * ${e.spacing});
      `}

      ${Vt} {
        flex-grow: 1;
      }

      ${cn} {
        margin-inline-start: 0;
        ${o==="single-select"&&m`
          ${i?m`
                color: ${p};
              `:m`
                visibility: hidden;
              `}
        `}
        ${o==="multi-select"&&m`
          ${i?m`
                color: ${g};
                background-color: ${p};
                border: 0.0625rem solid ${t["radio-check"][":checked"]["border-color"]};
              `:m`
                color: transparent;
                border: 0.0625rem solid ${t["radio-check"]["border-color"]};
              `}
          border-radius: min(
            calc(${e["border-radius"]} * ${t.checkbox["border-radius"]}),
            0.25rem
          );
        `}
      }

      &[aria-disabled='true'] {
        background-color: ${t["form-control"][":disabled"]["background-color"]};
        opacity: ${e["disabled-opacity"]};
      }
    `});vr.defaultProps=B;const hi=k.div`
  ${Lt} {
    width: 1em;
    height: 1em;
  }

  & > ${fr} {
    ${Ft};
  }
`;k.p`
  ${Rt}
`;const Cr=k.li(({theme:e})=>m`
    height: 0.0625rem;
    background-color: ${e.base.palette["border-line"]};
    margin: ${e.base.spacing} 0;
  `);Cr.defaultProps=B;const kn=k.div(({theme:e})=>m`
    min-height: ${e.base["hit-area"]["mouse-min"]};
    font-weight: ${e.base["font-weight"]["semi-bold"]};
    background-color: ${e.base.palette["secondary-background"]};

    @media (pointer: coarse) {
      min-height: ${e.base["hit-area"]["finger-min"]};
    }
  `);kn.defaultProps=B;const Rr=k.legend(({theme:{base:e}})=>{const t=xe(()=>Ct(.95,e.palette["primary-background"],e.palette.interactive)),n=xe(()=>Ct(.85,e.palette["primary-background"],e.palette.interactive));return m`
    cursor: pointer;
    width: 100%;
    background-color: ${e.palette["primary-background"]};

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    &:focus-within {
      box-shadow: ${e.shadow["focus-inset"]};
      background-color: ${n};
    }

    &:hover:not([aria-disabled='true']):not([data-current='true']) {
      background-color: ${t};
    }
    color: ${e.palette["foreground-color"]};
    padding: calc(0.5 * ${e.spacing}) ${e.spacing};
    text-align: start;
    border-radius: inherit;

    > ${Vt} {
      grid-column-gap: ${e.spacing};
    }

    ${Lt} {
      /* Fixes vertical align issue increasing box size beyond square */
      display: block;
    }
  `});Rr.defaultProps=B;const En=k.ul(({theme:e})=>m`
    overflow-x: hidden;
    overflow-y: auto;
    list-style: none;
    height: 100%;
    border-radius: inherit;

    ${_n} {
      padding: ${e.base.spacing};
      height: auto;
    }

    li:not(:first-child):not([role='presentation']) > ${kn} {
      margin-block-start: ${e.base.spacing};
    }
  `);En.defaultProps=B;const vn=k.fieldset(({theme:e})=>m`
    background-color: ${e.base.palette["primary-background"]};
    border: 0;
    border-radius: inherit;
  `);vn.defaultProps=B;const gi=k(vn)`
  min-width: 10rem;
`,Lr=k.li`
  display: block;
  position: relative;
  height: 2.8rem;
`,Gt=k.div(({theme:e})=>m`
    position: relative;
    overflow: hidden;
    transition: height ${e.base.animation.speed} ${e.base.animation.timing.ease};

    & > fieldset:first-child {
      position: relative;
    }

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }
  `);Gt.defaultProps=B;const Mr=k.div(({theme:e})=>{const t=`0.0625rem solid ${e.base.palette["border-line"]}`;return m`
    display: flex;
    flex-direction: column;

    &,
    ${Gt} {
      max-height: inherit;
    }

    &:focus {
      box-shadow: ${e.base.shadow.focus};
      outline: none;
    }

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    &[data-active-scope='true'] [data-current='true'] {
      box-shadow: ${e.base.shadow["focus-inset"]};
    }

    ${Ro}:first-child {
      + ${Gt}, + header {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
      }
    }

    > header,
    > footer {
      padding: ${e.base.spacing};
    }

    > header {
      border-bottom: ${t};
    }

    > footer {
      border-top: ${t};
    }
  `});Mr.defaultProps=B;const jr=je("menu",["create-new"]),Dr=je("menu-item",[]);Ze(_r,Ir,hr);const bi=({expandHandler:e})=>{const{end:t}=Ye(),n=s.jsx(Se,{name:`caret-${t}`});return e?s.jsx(De,{as:"span",icon:!0,variant:"simple","aria-hidden":!0,onClick:e,children:n}):n},yi=({ancestors:e=[]})=>{const t=e.length>2,n=t?[e[0],e[e.length-1]]:e,{end:r}=Ye();return s.jsx(oe,{container:{gap:.5,alignItems:"center"},as:hi,title:e.map(o=>He.isItem(o)?o.primary:o.label).join(" > "),children:n.map((o,i,l)=>{const u=He.isItem(o)?o.primary:o.label;return s.jsxs(c.Fragment,{children:[s.jsx(Me,{variant:"secondary",children:u}),i<l.length-1&&s.jsxs(s.Fragment,{children:[s.jsx(Me,{variant:"secondary",children:s.jsx(Se,{name:`caret-${r}`})}),t&&s.jsxs(s.Fragment,{children:[s.jsx(Me,{variant:"secondary",children:"…"}),s.jsx(Me,{variant:"secondary",children:s.jsx(Se,{name:`caret-${r}`})})]})]})]},o.id)})})},$i=({testId:e,id:t,primary:n,secondary:r,ancestors:o,visual:i,count:l,items:u,selected:f,partial:d,href:p,tooltip:g,onClick:b,onExpand:h,disabled:$,role:_="menuitem",...M})=>{const w=Te(),{mode:E,onItemClick:L,itemLayout:D,accent:I,variant:v,setFocusDescendant:x,getScopedItemId:V,arrowNavigationUnsupported:q}=c.useContext(mt),C=ve(e,Dr),j=E==="single-select"||E==="multi-select",G=u&&typeof f=="boolean",U=c.useMemo(()=>V(t),[t,V]),S=`${t}-count`,O=`${t}-secondary`,Z=c.useCallback(N=>{if(N.detail>0){const se=N.target,X=se.getAttribute("role")===_?se:se.closest(`li[role="${_}"]`);X&&x(X)}b==null||b(t,N),L==null||L(t,N)},[b,L,t]),T=c.useCallback(N=>{h==null||h(t,N),N.stopPropagation()},[h,t]);let z;if(I&&!u){const N=typeof I=="function"?I(n):I;z=No(n,N,K=>s.jsx(pi,{children:K}))}const F=o?s.jsx(yi,{ancestors:o}):r&&s.jsx(Qo,{items:r,id:O}),[W,P]=So(),ye=s.jsxs(s.Fragment,{children:[s.jsx(An,{ref:P,primary:z||(u?n:s.jsx(Me,{children:n})),secondary:F,layout:D,visual:i,actions:u||l?s.jsxs(oe,{container:{gap:1,alignItems:"center",justify:"center"},children:[l!==void 0&&s.jsx(kr,{id:S,"aria-label":w("menu_item_count",[l]),children:l}),u&&s.jsx(bi,{expandHandler:G?T:void 0})]}):void 0,container:{colGap:1}}),g&&s.jsx(To,{target:W,hideDelay:"none",showDelay:"short",children:g})]}),Y=c.useMemo(()=>{const N=w("menu_collapsed",[n]);return u?q?w("menu_item_shift_space_expand_collapse",[N]):w("menu_item_expand_arrow",[N]):n},[f,n,u]),Ue=c.useMemo(()=>{const N=!!r;let K;return N?(K=O,l!==void 0&&l>=0&&(K=`${K} ${S}`)):l!==void 0&&l>=0?K=S:K="",K},[u,r,S,O]);return s.jsxs(oe,{"data-testid":C.root,...M,container:{alignItems:"center",justify:"between",gap:1},id:U,as:vr,"aria-label":Y,"aria-describedby":Ue,role:_,"aria-disabled":$,"data-expand":!!u,itemLayout:D,tabIndex:-1,disabled:$,onMouseDown:N=>{N.preventDefault()},onClick:N=>{if(!$)return u&&typeof f!="boolean"?T(N):Z(N)},onMouseEnter:v==="flyout"?T:void 0,href:p,mode:E,isParentItem:!!u,"aria-selected":!!f,selectableParent:G,children:[j&&(!u||G)&&s.jsx(cn,{name:"check"}),p&&!j?s.jsx(Lo,{href:p,tabIndex:"-1",children:ye}):ye]})},Cn=Ee($i,Dr),dn=(e,t,n,r)=>{var f,d;const o=!!((f=e.firstElementChild)!=null&&f.matches("legend")),i=[':scope > ul > li:not([role="separator"]):not([role="presentation"])',':scope > ul > li[role="presentation"] > div:first-child',':scope > ul > li > ul[role="group"] > li:not([role="separator"])'],l=e.querySelectorAll(i.join(", "))[Math.max(Math.min(r-(o?2:1),n-1),0)];let u;if(l){const p=e.getBoundingClientRect().top,g=l.getBoundingClientRect(),b=((d=e.querySelector(":scope > ul"))==null?void 0:d.scrollTop)??0;let h=g.bottom;n>r&&(h=(g.top+g.bottom)/2),u=h-p+b}t.style.height=u?`${u}px`:""},Or=({id:e,label:t,items:n,itemRole:r})=>{const{componentId:o}=c.useContext(mt),i=`${o}-${e}`;return s.jsxs("li",{role:"presentation",children:[s.jsx(oe,{container:{alignItems:"center",pad:[.5,1]},as:kn,id:i,children:t}),s.jsx("ul",{role:"group","aria-labelledby":i,children:n.length>0&&n.map(l=>c.createElement(Cn,{...l,key:l.id,role:r??"menuitem"}))})]})},tt=e=>Array.isArray(e.items),Nr=c.forwardRef(function({items:t,parent:n,menuRole:r},o){const i=Te(),l=me(o),u=c.useRef(null),f=c.useRef(null),d=c.useRef(null),[p,g]=c.useState(),{componentId:b,loadMore:h,loading:$,scrollAt:_,emptyText:M,onItemExpand:w,pushFlyoutId:E,flyOutActiveIdStack:L,updateActiveDescendants:D,updateParentDescendantStack:I}=c.useContext(mt),{announcePolite:v}=$n();br(u,t.length-1,()=>{var C;h==null||h((C=n==null?void 0:n.item)==null?void 0:C.id)},":scope > li"),an(()=>{if(p){const C=t.find(j=>j.id===p.id);C&&tt(C)?g(C):g(void 0)}},[p,t]),c.useEffect(()=>{t.some(j=>L.includes(j.id))||(d.current=null,g(void 0))},[L]),c.useEffect(()=>{t.length===0&&!$&&v({message:M??i("no_items")})},[t.length,$]);const x=c.useMemo(()=>t.length?t.map(C=>He.isItem(C)?c.createElement(Cn,{...C,key:C.id,"aria-haspopup":!!C.items,"aria-expanded":C.items?C.id===(p==null?void 0:p.id):void 0,role:r==="listbox"?"option":"menuitem",onExpand:(j,G)=>{var U;C.items?(d.current=G.currentTarget,g(tt(C)?C:void 0),(U=C==null?void 0:C.onExpand)==null||U.call(C,j,G),w==null||w(j,G),E(C.id||b),D(),I&&I(d.current.closest("li"))):(d.current=null,g(void 0))}}):c.createElement(Or,{...C,key:C.id,itemRole:r==="listbox"?"option":"menuitem"})):$?null:s.jsx(wr,{message:M,forwardedAs:"li"}),[t,$,M,p,L]),V=s.jsxs(En,{ref:u,role:r,children:[x,$&&!p&&s.jsx(Lr,{children:s.jsx(wn,{placement:"local"})})]});c.useLayoutEffect(()=>{g(void 0),l.current&&(f.current=l.current.parentElement,dn(l.current,l.current,t.length,_))},[t]);const q=c.useCallback(()=>{p&&g(void 0)},[p]);return s.jsxs(s.Fragment,{children:[s.jsx(gi,{ref:l,onScroll:q,"data-flyout-menu-parent-id":b,"data-flyout-menu-id":(n==null?void 0:n.item.id)||b,children:V}),p&&l.current&&s.jsx(xn,{target:d.current,show:!0,strategy:"fixed",placement:"right-start",portal:!1,children:s.jsx(Nr,{items:p.items,parent:{el:l.current,item:p,siblingItems:t,setExpandedItem:g,returnFocusRef:d},menuRole:r})})]})}),wi="21.875rem",Kn="calc(100vw - 20rem)",xi=.05,Si="budicon",Ti="drag",_i=()=>s.jsx("path",{d:"M9.5 5.136V3.5h1.708v1.636H9.5Zm0 4.111V7.611h1.708v1.636H9.5Zm0 4.071v-1.636h1.708v1.636H9.5Zm0 4.11v-1.635h1.708v1.636H9.5Zm0 4.072v-1.636h1.708V21.5H9.5Zm4.292-16.364V3.5H15.5v1.636h-1.708Zm0 4.111V7.611H15.5v1.636h-1.708Zm0 4.071v-1.636H15.5v1.636h-1.708Zm0 4.11v-1.635H15.5v1.636h-1.708Zm0 4.072v-1.636H15.5V21.5h-1.708Z"}),Ii="0 0 25 25",Ai=Object.freeze(Object.defineProperty({__proto__:null,Component:_i,name:Ti,set:Si,viewBox:Ii},Symbol.toStringTag,{value:"Module"})),ki="budicon",Ei="arrow-micro-up-down",vi=()=>s.jsx("path",{d:"m12.402 5 4.597 6H8l4.402-6Zm.195 15L8 14h9l-4.403 6Z"}),Ci="0 0 25 25",Ri=Object.freeze(Object.defineProperty({__proto__:null,Component:vi,name:Ei,set:ki,viewBox:Ci},Symbol.toStringTag,{value:"Module"}));Ze(Ai);Ze(Ri);const Li=k(De)(({rotateIcon:e})=>m`
    cursor: grab;

    &:active {
      cursor: grabbing;
    }

    &:not(:focus) {
      ${Rt};
    }

    ${e&&m`
      ${Lt} {
        transform: rotate(90deg);
      }
    `}
  `),zr=k.div(({theme:e})=>m`
    position: absolute;
    inset-inline-start: 0;
    inset-block: 0;
    inline-size: 0.125rem;
    background-color: transparent;
    transition: background-color ${e.base.animation.speed} ${e.base.animation.timing.ease};
    cursor: ew-resize;
    z-index: ${e.base["z-index"].max};

    ::before {
      content: '';
      position: absolute;
      inset: 0;
      width: calc(${e.base["hit-area"].compact} * 0.75);
    }

    &:hover {
      background-color: ${e.base.palette.interactive};
    }

    ${mr} {
      position: absolute;
      inset-block-start: 50%;
      inset-inline-start: calc(-2 * ${e.base.spacing});
      translate: 0 -50%;
      box-shadow: ${e.base.shadow.focus};
    }
  `);zr.defaultProps=B;const Mi=c.forwardRef(function({onMouseDown:t,onKeyDown:n},r){const o=me(r),i=Te(),[l,u]=c.useState(!1),[f,d]=c.useState(!1);Ut(()=>{u(!1),d(!1)});const p=h=>{h.code==="Space"&&(h.preventDefault(),d(!f)),n==null||n(h,f)},g=h=>{const $=Et(o);$&&($.style.setProperty("user-select","none"),u(!0),t==null||t(h))},b=()=>{const h=Et(o);h&&(h.style.removeProperty("user-select"),u(!1))};return s.jsx(zr,{onMouseDown:g,onMouseUp:b,ref:o,children:s.jsx(Li,{tabIndex:0,icon:!0,label:!l&&!f?i("resize"):void 0,"aria-label":i(!l&&!f?"drag_handle_activate_description":"drag_handle_cancel_description"),onMouseDown:g,onKeyDown:p,onBlur:()=>{d(!1)},rotateIcon:f,children:s.jsx(Se,{name:f?"arrow-micro-up-down":"drag"})})})}),Ot=Io(wi),Pr=k.div(e=>{const{state:t,shadow:n,position:r,placement:o,transitionSpeed:i,size:l,resizeable:u,theme:f}=e;let d="horizontal",p="X",g="top";(o==="top"||o==="bottom")&&(d="vertical",p="Y",g="left");const b=t==="open"||t==="opening"?0:"100%",h=i||f.base.animation.speed;return m`
    z-index: ${f.base["z-index"].drawer};
    position: ${r};
    ${o}: 0;
    ${g}: 0;
    height: ${d==="vertical"?l:"100%"};
    width: ${d==="horizontal"?l:"100%"};
    transition-property: transform, box-shadow, opacity;
    transition-duration: max(${h}, 0.0001s);
    transition-timing-function: ${f.base.animation.timing.ease};
    transform: ${t==="open"?"none":`translate${p}(${o==="top"||o==="left"?"-":""}${b})`};

    ${n&&m`
      box-shadow: ${f.base.shadow.high};
    `}

    ${u&&m`
      width: ${d==="horizontal"?"var(--resize-drawer-width)":"100%"};
    `}
  `});Pr.defaultProps=B;const ji=c.forwardRef(function(t,n){const{open:r=!1,shadow:o=!1,position:i="absolute",children:l,placement:u="right",transitionSpeed:f,size:d="100%",resizeable:p=!1,onAfterOpen:g,onAfterClose:b,onBeforeOpen:h,onBeforeClose:$,onOuterClick:_,nullWhenClosed:M=!1,...w}=t,E=me(n),{ltr:L,rtl:D}=Ye(),[I,v]=c.useState(r?"open":"closed");let x=Tn(I);x||(x=I),yr("mousedown",[E],c.useCallback(()=>{r&&(_==null||_())},[r,_])),c.useEffect(()=>{r&&(I==="closed"||I==="closing")?(h==null||h(),_o(E.current),v("opening")):!r&&(I==="open"||I==="opening")?($==null||$(),v("closing")):r&&I==="open"&&x!=="open"?g==null||g():!r&&I==="closed"&&x!=="closed"&&(b==null||b())},[r,I,x,h,$,g,b]);const V=c.useCallback(U=>{U.target!==E.current||U.propertyName!=="transform"||v(r?"open":"closed")},[r]),q=c.useRef();c.useEffect(()=>{if(!p||!E.current)return;const U=Et(E);U&&(U.style.getPropertyValue("--resize-drawer-width")||U.style.setProperty("--resize-drawer-width",d))},[E.current]);const C=c.useCallback(U=>{var T;const S=Et(E),O=(T=E.current)==null?void 0:T.getBoundingClientRect();if(!O||!S)return;q.current=U.clientX;const Z=new AbortController;S.addEventListener("mousemove",z=>{if(!q.current||!O.width)return;const F=q.current,W=u==="right"?F-z.clientX:z.clientX-F,P=Math.max(W+O.width,parseInt(Ot,10));S.style.setProperty("--resize-drawer-width",`clamp(${Ot}, ${P}px, ${Kn})`)},{passive:!0,signal:Z.signal}),S.addEventListener("mouseup",()=>{Z.abort()},{once:!0})},[u]),j=c.useCallback((U,S)=>{var W;if(!S)return;const O=Et(E),Z=document.documentElement.clientWidth*xi,T=(W=E.current)==null?void 0:W.getBoundingClientRect();if(!T||!O||U.code!=="ArrowLeft"&&U.code!=="ArrowRight")return;U.preventDefault();const z=(U.code==="ArrowLeft"?1:-1)*(u==="right"?1:-1),F=Math.max(T.width+z*Z,parseInt(Ot,10));O.style.setProperty("--resize-drawer-width",`clamp(${Ot}, ${F}px, ${Kn})`)},[u]),G=p&&I==="open"&&(u==="left"&&D||u==="right"&&L);return I==="closed"&&!r&&M?null:s.jsxs(Pr,{ref:E,position:i,shadow:o&&r,transitionSpeed:f,placement:u,size:d,resizeable:p,open:r,state:I,onTransitionEnd:V,...w,children:[l,G&&s.jsx(Mi,{onMouseDown:C,onKeyDown:j})]})});Ze(_r,Ir);const Di=({text:e,onClick:t})=>{const n=Te(),{arrowNavigationUnsupported:r}=c.useContext(mt),{start:o}=Ye(),i=c.useCallback(l=>{(l.key==="Enter"||l.key===`Arrow${ln(o)}`)&&t()},[t,o]);return s.jsx(oe,{container:{alignItems:"center"},as:Rr,onClick:t,onKeyDown:i,"data-collapse":"true","aria-expanded":!0,"aria-label":`${n("menu_expanded",[e||""])} ${n(r?"menu_item_collapse_shift_space":"menu_item_collapse_arrow")}`,children:s.jsx(An,{visual:s.jsx(Se,{name:`caret-${o}`}),primary:e})})},Jn=(e,t)=>{e.disabled=t;const n=e.querySelector("legend button");n&&(n.disabled=t)},Qn=(e,t)=>e.reduce((n,r)=>!He.isItem(r)&&r.items?n+r.items.length+1:n+1,t?1:0),Nt=e=>e.flatMap(t=>He.isItem(t)?t:[t,...t.items?t.items:[]]),Fr=c.forwardRef(function({items:t,parent:n,id:r,menuRole:o,...i},l){const u=Te(),f=c.useRef(null),d=me(l),p=c.useRef(null),g=c.useRef(null),[b,h]=c.useState(!n),[$,_]=c.useState(),{scrollAt:M,"aria-label":w,loadMore:E,loading:L,emptyText:D,currentItemId:I,onItemExpand:v,focusControl:x,updateActiveDescendants:V,setFocusReturnEl:q,onItemCollapse:C,expandTo:j}=c.useContext(mt),{end:G}=Ye(),{announcePolite:U}=$n();br(p,t.length-1,()=>{var T;L||E==null||E((T=n==null?void 0:n.item)==null?void 0:T.id)},":scope > li"),c.useLayoutEffect(()=>{!d.current||$||(f.current=d.current.parentElement,dn(d.current,f.current,Qn(t,L),M))}),c.useEffect(()=>{n&&h(!0)},[]),an(()=>{if($){const T=Nt(t).find(z=>z.id===$.id);T&&tt(T)?_(T):_(void 0)}},[$,t]),an(()=>{if(I){const T=Nt(t).find(z=>{var F;return((F=z.items)==null?void 0:F.length)&&He.getItem(z.items,I)!==void 0});T&&(_(tt(T)?T:void 0),V({preventScroll:!0}))}},[I,t,n]),c.useEffect(()=>{if(j!=null&&j.parentItemId){const T=Nt(t).find(z=>z.id===j.parentItemId);if(T)_(tt(T)?T:void 0),V({preventScroll:!0}),j.onComplete();else{const z=Nt(t).find(F=>{var W;return((W=F.items)==null?void 0:W.length)&&He.getItem(F.items,j.parentItemId)!==void 0});z?_(tt(z)?z:void 0):j.onComplete()}}},[j,t,n]);const S=c.useCallback((T,z)=>{var W;const F=He.getItem(t,T);g.current=z.currentTarget,F&&tt(F)?_(F):_(void 0),(W=F==null?void 0:F.onExpand)==null||W.call(F,T,z),v==null||v(T,z),V({preventScroll:!0})},[t]);c.useEffect(()=>{t.length===0&&!L&&U({message:D??u("no_items")})},[t.length,L]);const O=c.useMemo(()=>t.length?t.map((T,z)=>He.isItem(T)?c.createElement(Cn,{...T,key:T.id,role:o==="listbox"?"option":"menuitem",onExpand:T.items?S:void 0}):s.jsxs(c.Fragment,{children:[s.jsx(Or,{...T,items:T.items.map(F=>F.items?{...F,onExpand:S}:F),itemRole:o==="listbox"?"option":"menuitem"}),t[z+1]&&He.isItem(t[z+1])&&s.jsx(Cr,{role:"separator"})]},T.id)):L?null:s.jsx(wr,{message:D,forwardedAs:"li"}),[t,L,D]),Z=s.jsxs(En,{id:$?void 0:r,ref:p,role:o,...i,children:[n&&s.jsx(Di,{text:n.item.primary,onClick:()=>{h(!1)}}),O,L&&!$&&s.jsx(Lr,{children:s.jsx(wn,{placement:"local",liveConfig:{contextualLabel:w??u("menu")}})})]});return s.jsxs(s.Fragment,{children:[s.jsx(ji,{"aria-hidden":!!$,as:vn,ref:d,open:b,style:{opacity:$?0:1},disabled:!!$,placement:G,onBeforeOpen:()=>{n&&(n.el.style.opacity="0"),d.current&&(d.current.style.opacity="1")},onAfterOpen:()=>{n&&Jn(n.el,!0)},onBeforeClose:()=>{n&&f.current&&(Jn(n.el,!1),n.el.style.opacity="1",dn(n.el,f.current,Qn(n.siblingItems),M)),d.current&&(d.current.style.opacity="0")},onAfterClose:()=>{if(n){x==null||x.focus();const T=n.returnFocusRef.current;n.setExpandedItem(void 0),T&&q(T==null?void 0:T.closest("li")),C==null||C(n.item.id),V()}},children:Z}),$&&d.current&&s.jsx(Fr,{id:r,items:$.items,parent:{el:d.current,item:$,siblingItems:t,setExpandedItem:_,returnFocusRef:g},menuRole:o})]})}),Oi=c.forwardRef(function(t,n){var $t,Qe;const r=nt(),{testId:o,id:i=r,items:l=[],itemLayout:u="stacked",onCreateNew:f,mode:d="action",accent:p,scrollAt:g=7,emptyText:b,onItemClick:h,onItemActive:$,onItemExpand:_,loadMore:M,onItemCollapse:w,loading:E=!1,currentItemId:L,header:D,footer:I,variant:v="drill-down",focusControlEl:x,arrowNavigationUnsupported:V,"aria-describedby":q,"aria-label":C,role:j="menu",listId:G,pauseDescendantEvaluation:U,menuList:S,handleRef:O,...Z}=t,T=ve(o,jr),z=Te(),{end:F,start:W}=Ye(),P=nt(),ye=me(n),Y=c.useRef(0),[Ue,N]=c.useState(0),[K,se]=c.useState(null),[X,Ae]=c.useState([i]),[J,ie]=c.useState(),[Be,Ge]=c.useState(!1),[Ce,We]=c.useState([]),[ot,it]=c.useState(),Re=!x,Je=c.useMemo(()=>`fieldset[data-flyout-menu-id="${X[X.length-1]}"]`,[X]),de=c.useMemo(()=>x||ye.current,[x,ye.current]);c.useImperativeHandle(O,()=>({expandTo:Q=>{it(Q)}}),[]);const pt=c.useCallback(Q=>{Ae([...X,Q])},[X]);c.useEffect(()=>{Ae([...X,i])},[i]);const ht=c.useCallback(Q=>{We([...Ce,Q])},[Ce]),gt=c.useCallback(Q=>btoa(encodeURIComponent(Q)),[i]),bt=c.useCallback(Q=>decodeURIComponent(atob(Q)),[i]),$e=c.useCallback(({preventScroll:Q=!1}={})=>{Ge(Q),N(Math.random())},[]),_e=c.useMemo(()=>({focusEl:de,scope:ye.current,scopeSelector:v==="drill-down"?'fieldset[aria-hidden="false"]':Je,selector:`[role="${j==="menu"?"menuitem":"option"}"], legend`,focusDescendantEl:K,clearFocusDescendant:()=>{se(null)},focusReturnEl:J,clearFocusReturn:()=>{ie(null)},currentDescendantId:L?gt(L):void 0,preventInitialScroll:Be,clearPreventScroll:()=>{Ge(!1)},pauseDescendantEvaluation:U}),[de,ye.current,Je,J,K,L,Be,U]),{activeDescendant:ne,descendants:Xe}=zo(_e,[Ue]),jt=Tn(ne);Po({loading:E,descendants:Xe,previousActiveDescendant:jt,activeDescendant:ne,focusReturnEl:J,setFocusReturnEl:ie,scrollEl:(Qe=($t=_e.scope)==null?void 0:$t.querySelector(_e.scopeSelector))==null?void 0:Qe.querySelector("ul")}),c.useEffect(()=>{const Q=(te=null)=>{if(ne){if(ne.dataset.expand==="true"&&te!=="collapse"){(ne.querySelector('span[aria-hidden="true"]')??ne).click();return}if(te!=="expand")if(v==="flyout"&&X.length>1&&Ce.length>0){Ae([...X].slice(0,-1));const pe=Ce.pop();pe!==void 0&&ie(pe),$e()}else ne.dataset.collapse==="true"&&ne.click()}},le=te=>{switch(te.key){case`Arrow${ln(F)}`:{if(V)break;Q("expand");break}case`Arrow${ln(W)}`:{if(V)break;Q("collapse");break}case"Escape":{if(v==="flyout"&&X.length>1&&Ce.length>0){te.preventDefault(),te.stopPropagation(),Ae([...X].slice(0,-1));const pe=Ce.pop();pe!==void 0&&ie(pe),$e()}break}}V&&(te.key===" "||te.key==="Spacebar")&&te.shiftKey&&(te.preventDefault(),Q())};return ne&&($==null||$(bt(ne.id))),de==null||de.addEventListener("keydown",le),()=>de==null?void 0:de.removeEventListener("keydown",le)},[de,ne,X]),c.useEffect(()=>{const Q=setTimeout(()=>{var le,te;if(l.length===Y.current){const pe=Xe==null?void 0:Xe.map(Ke=>Ke.id),at=(te=(le=_e.scope)==null?void 0:le.querySelector(_e.scopeSelector))==null?void 0:te.querySelectorAll(_e.selector);if(!at){$e();return}const st=Array.from(at);if((st==null?void 0:st.length)!==(pe==null?void 0:pe.length)){$e();return}st.every((Ke,Zt)=>Ke.id===pe[Zt])||$e();return}Y.current=l.length,$e()},0);return()=>clearTimeout(Q)},[l]);const Dt=c.useMemo(()=>({componentId:i,"aria-label":C,mode:d,arrowNavigationUnsupported:V,onItemClick:(Q,le)=>{var te;Re&&((te=ye.current)==null||te.focus()),h==null||h(Q,le)},onItemActive:$,onItemExpand:_,onItemCollapse:w,itemLayout:u,accent:p,scrollAt:g,emptyText:b,radioName:P,loadMore:M,loading:E,variant:v,focusControl:de,updateActiveDescendants:$e,setFocusReturnEl:ie,setFocusDescendant:se,getScopedItemId:gt,pushFlyoutId:pt,flyOutActiveIdStack:X,updateParentDescendantStack:ht,expandTo:{parentItemId:ot,onComplete:()=>{it(void 0)}}}),[i,C,d,V,h,$,_,w,u,p,g,b,P,M,E,v,de,$e,ie,se,gt,pt,X,ht,ot]),yt=S??(v==="drill-down"?s.jsx(Fr,{items:l,id:G,menuRole:j,"aria-multiselectable":d==="multi-select","aria-labelledby":C?`${i}-menuLabel`:void 0}):s.jsx(Nr,{items:l,menuRole:j}));return s.jsxs(Mr,{"data-testid":T.root,id:i,"aria-describedby":Re?`${i}-menuDescription`:void 0,...Z,ref:ye,tabIndex:Re?0:void 0,children:[Re&&s.jsx("span",{id:`${i}-menuDescription`,hidden:!0,children:`${z("menu_selection_instructions")} `&&q||""}),C&&s.jsx(Bt,{id:`${i}-menuLabel`,children:C}),D&&s.jsx("header",{"data-popover-scroll-el":!0,children:D}),s.jsx(Gt,{"data-popover-scroll-el":!0,children:s.jsx(mt.Provider,{value:Dt,children:yt})}),(f||I)&&s.jsx("footer",{"data-popover-scroll-el":!0,children:f?s.jsxs(De,{"data-testid":T.createNew,variant:"link",onClick:f,children:[s.jsx(Se,{name:"plus"})," ",z("create_new")]}):I})]})}),Ni=Ee(Oi,jr),zi="budicon",Pi="arrow-micro-down",Fi=()=>s.jsx("path",{d:"M8 9.5h9l-4.402 6-4.597-6H8Z"}),Hi="0 0 25 25",Ui=Object.freeze(Object.defineProperty({__proto__:null,Component:Fi,name:Pi,set:zi,viewBox:Hi},Symbol.toStringTag,{value:"Module"})),Hr=je("menu-button",[]);Ze(Ui);const Ur=k.button(({theme:{base:{spacing:e}}})=>m`
      gap: ${e};
      flex-shrink: 0;
      white-space: nowrap;
      max-width: 100%;

      & + ${sn} + ${mr} {
        margin-inline-start: ${e};
      }
    `);Ur.defaultProps=B;const Bi=k.span(({theme:e,padIcon:t})=>{const{base:{"hit-area":{"mouse-min":n,"finger-min":r}},components:{icon:{size:{s:o}}}}=e;return m`
    max-width: 100%;

    ${t&&m`
      padding-inline-start: calc((${n} - ${o}) / 2);

      @media (pointer: coarse) {
        padding-inline-start: calc(${r} - ${o} * 2);
      }
    `}

    ${fr} {
      text-overflow: ellipsis;
      overflow: hidden;
    }

    ${Lt}:last-child:not(:first-child) {
      /* Offsets the flex gap to make the down arrow appear to trail the text. */
      margin-inline-start: -${e.base.spacing};
    }
  `}),Gi=k(xn)`
  min-width: 20ch;
`,Wi=c.forwardRef(function(t,n){const r=nt(),{testId:o,id:i=r,text:l,menu:u,popover:f,onClick:d,icon:p,count:g,iconOnly:b=!1,showArrow:h=!1,...$}=t,_=ve(o,Hr),[M,w]=c.useState(!1),E=me(n),L=me(f==null?void 0:f.ref),D=me(u==null?void 0:u.ref);Mo([L,E],c.useCallback(v=>{v||w(!1)},[])),Ut(v=>{M&&(w(!1),v.stopPropagation())},E),Ut(v=>{var x;M&&(w(!1),v.stopPropagation(),(x=E.current)==null||x.focus())},u==null?void 0:u.focusControlEl);const{rtl:I}=Ye();return s.jsxs(s.Fragment,{children:[s.jsx(De,{"data-testid":_.root,as:Ur,"aria-label":l,...$,id:i,ref:E,"aria-expanded":M,"aria-haspopup":"menu","aria-controls":M?`${i}-popover`:void 0,label:b&&!M?l:void 0,onClick:v=>{const x=v.detail>0;M?x&&w(!1):w(!0),(!M||x)&&(d==null||d(v))},icon:b,children:s.jsxs(oe,{as:Bi,container:{alignItems:"center",gap:1},padIcon:b&&h,children:[p&&s.jsx(Se,{name:p}),!b&&s.jsxs(s.Fragment,{children:[s.jsx(Me,{children:l}),typeof g=="number"&&s.jsx(kr,{children:g})]}),(!b||h)&&s.jsx(Se,{name:"arrow-micro-down"})]})}),s.jsx(Gi,{placement:I?"bottom-end":"bottom-start",hideOnTargetHidden:!0,...f,id:`${i}-popover`,show:!!u&&M,target:E.current,ref:L,children:u&&s.jsx(Ni,{testId:_.root,...u,ref:D,items:u.items,onItemClick:(v,x)=>{var V;u.mode!=="multi-select"&&w(!1),(V=u.onItemClick)==null||V.call(u,v,x)},focusControlEl:u.focusControlEl||E.current||void 0})})]})}),Vi=Ee(Wi,Hr),qi=c.forwardRef(function({"data-testid":t,items:n,menuAt:r=2,scrollAt:o,iconOnly:i=!0,menuButtonProps:l,contextualLabel:u,compact:f=!1,disabled:d=!1,tabIndex:p},g){const b=Te(),h=me(g);return!n||n.length===0?null:n.length>=r?s.jsx(Vi,{...t?{"data-testid":t}:{},ref:h,text:b("actions"),"aria-label":u&&b("actions_for",[u]),iconOnly:!0,icon:"more",variant:"simple",compact:f,onClick:l==null?void 0:l.onClick,onKeyDown:l==null?void 0:l.onKeyDown,disabled:d,tabIndex:p,menu:{scrollAt:o,items:n.map(({text:$,onClick:_,...M})=>({...M,primary:$,onClick:_?(w,E)=>{_(w,E,h.current??void 0)}:void 0}))}}):s.jsx(s.Fragment,{children:n.map(({id:$,icon:_,text:M,onClick:w,...E})=>c.createElement(De,{...t?{"data-testid":t}:{},key:$,variant:_&&i?"simple":void 0,onClick:L=>w==null?void 0:w($,L),label:_?M:void 0,icon:!!_&&i,compact:f,"aria-label":u?`${M} - ${u}`:M,disabled:d,...E},_&&i?s.jsx(Se,{name:_}):M))})});/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */const{entries:Br,setPrototypeOf:er,isFrozen:Zi,getPrototypeOf:Yi,getOwnPropertyDescriptor:Xi}=Object;let{freeze:ge,seal:ke,create:un}=Object,{apply:fn,construct:mn}=typeof Reflect<"u"&&Reflect;ge||(ge=function(t){return t});ke||(ke=function(t){return t});fn||(fn=function(t,n){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return t.apply(n,o)});mn||(mn=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return new t(...r)});const zt=be(Array.prototype.forEach),Ki=be(Array.prototype.lastIndexOf),tr=be(Array.prototype.pop),St=be(Array.prototype.push),Ji=be(Array.prototype.splice),Ht=be(String.prototype.toLowerCase),Qt=be(String.prototype.toString),en=be(String.prototype.match),Tt=be(String.prototype.replace),Qi=be(String.prototype.indexOf),ea=be(String.prototype.trim),Le=be(Object.prototype.hasOwnProperty),he=be(RegExp.prototype.test),_t=ta(TypeError);function be(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return fn(e,t,r)}}function ta(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return mn(e,n)}}function H(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ht;er&&er(e,null);let r=t.length;for(;r--;){let o=t[r];if(typeof o=="string"){const i=n(o);i!==o&&(Zi(t)||(t[r]=i),o=i)}e[o]=!0}return e}function na(e){for(let t=0;t<e.length;t++)Le(e,t)||(e[t]=null);return e}function Pe(e){const t=un(null);for(const[n,r]of Br(e))Le(e,n)&&(Array.isArray(r)?t[n]=na(r):r&&typeof r=="object"&&r.constructor===Object?t[n]=Pe(r):t[n]=r);return t}function It(e,t){for(;e!==null;){const r=Xi(e,t);if(r){if(r.get)return be(r.get);if(typeof r.value=="function")return be(r.value)}e=Yi(e)}function n(){return null}return n}const nr=ge(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),tn=ge(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),nn=ge(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ra=ge(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),rn=ge(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),oa=ge(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),rr=ge(["#text"]),or=ge(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),on=ge(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ir=ge(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Pt=ge(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),ia=ke(/\{\{[\w\W]*|[\w\W]*\}\}/gm),aa=ke(/<%[\w\W]*|[\w\W]*%>/gm),sa=ke(/\$\{[\w\W]*/gm),la=ke(/^data-[\-\w.\u00B7-\uFFFF]+$/),ca=ke(/^aria-[\-\w]+$/),Gr=ke(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),da=ke(/^(?:\w+script|data):/i),ua=ke(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Wr=ke(/^html$/i),fa=ke(/^[a-z][.\w]*(-[.\w]+)+$/i);var ar=Object.freeze({__proto__:null,ARIA_ATTR:ca,ATTR_WHITESPACE:ua,CUSTOM_ELEMENT:fa,DATA_ATTR:la,DOCTYPE_NAME:Wr,ERB_EXPR:aa,IS_ALLOWED_URI:Gr,IS_SCRIPT_OR_DATA:da,MUSTACHE_EXPR:ia,TMPLIT_EXPR:sa});const At={element:1,text:3,progressingInstruction:7,comment:8,document:9},ma=function(){return typeof window>"u"?null:window},pa=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let r=null;const o="data-tt-policy-suffix";n&&n.hasAttribute(o)&&(r=n.getAttribute(o));const i="dompurify"+(r?"#"+r:"");try{return t.createPolicy(i,{createHTML(l){return l},createScriptURL(l){return l}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},sr=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Vr(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ma();const t=R=>Vr(R);if(t.version="3.3.1",t.removed=[],!e||!e.document||e.document.nodeType!==At.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const r=n,o=r.currentScript,{DocumentFragment:i,HTMLTemplateElement:l,Node:u,Element:f,NodeFilter:d,NamedNodeMap:p=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:g,DOMParser:b,trustedTypes:h}=e,$=f.prototype,_=It($,"cloneNode"),M=It($,"remove"),w=It($,"nextSibling"),E=It($,"childNodes"),L=It($,"parentNode");if(typeof l=="function"){const R=n.createElement("template");R.content&&R.content.ownerDocument&&(n=R.content.ownerDocument)}let D,I="";const{implementation:v,createNodeIterator:x,createDocumentFragment:V,getElementsByTagName:q}=n,{importNode:C}=r;let j=sr();t.isSupported=typeof Br=="function"&&typeof L=="function"&&v&&v.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:G,ERB_EXPR:U,TMPLIT_EXPR:S,DATA_ATTR:O,ARIA_ATTR:Z,IS_SCRIPT_OR_DATA:T,ATTR_WHITESPACE:z,CUSTOM_ELEMENT:F}=ar;let{IS_ALLOWED_URI:W}=ar,P=null;const ye=H({},[...nr,...tn,...nn,...rn,...rr]);let Y=null;const Ue=H({},[...or,...on,...ir,...Pt]);let N=Object.seal(un(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),K=null,se=null;const X=Object.seal(un(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Ae=!0,J=!0,ie=!1,Be=!0,Ge=!1,Ce=!0,We=!1,ot=!1,it=!1,Re=!1,Je=!1,de=!1,pt=!0,ht=!1;const gt="user-content-";let bt=!0,$e=!1,_e={},ne=null;const Xe=H({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let jt=null;const Dt=H({},["audio","video","img","source","image","track"]);let yt=null;const $t=H({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Qe="http://www.w3.org/1998/Math/MathML",Q="http://www.w3.org/2000/svg",le="http://www.w3.org/1999/xhtml";let te=le,pe=!1,at=null;const st=H({},[Qe,Q,le],Qt);let wt=H({},["mi","mo","mn","ms","mtext"]),Ke=H({},["annotation-xml"]);const Zt=H({},["title","style","font","a","script"]);let xt=null;const fo=["application/xhtml+xml","text/html"],mo="text/html";let ae=null,lt=null;const po=n.createElement("form"),Mn=function(a){return a instanceof RegExp||a instanceof Function},Yt=function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(lt&&lt===a)){if((!a||typeof a!="object")&&(a={}),a=Pe(a),xt=fo.indexOf(a.PARSER_MEDIA_TYPE)===-1?mo:a.PARSER_MEDIA_TYPE,ae=xt==="application/xhtml+xml"?Qt:Ht,P=Le(a,"ALLOWED_TAGS")?H({},a.ALLOWED_TAGS,ae):ye,Y=Le(a,"ALLOWED_ATTR")?H({},a.ALLOWED_ATTR,ae):Ue,at=Le(a,"ALLOWED_NAMESPACES")?H({},a.ALLOWED_NAMESPACES,Qt):st,yt=Le(a,"ADD_URI_SAFE_ATTR")?H(Pe($t),a.ADD_URI_SAFE_ATTR,ae):$t,jt=Le(a,"ADD_DATA_URI_TAGS")?H(Pe(Dt),a.ADD_DATA_URI_TAGS,ae):Dt,ne=Le(a,"FORBID_CONTENTS")?H({},a.FORBID_CONTENTS,ae):Xe,K=Le(a,"FORBID_TAGS")?H({},a.FORBID_TAGS,ae):Pe({}),se=Le(a,"FORBID_ATTR")?H({},a.FORBID_ATTR,ae):Pe({}),_e=Le(a,"USE_PROFILES")?a.USE_PROFILES:!1,Ae=a.ALLOW_ARIA_ATTR!==!1,J=a.ALLOW_DATA_ATTR!==!1,ie=a.ALLOW_UNKNOWN_PROTOCOLS||!1,Be=a.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ge=a.SAFE_FOR_TEMPLATES||!1,Ce=a.SAFE_FOR_XML!==!1,We=a.WHOLE_DOCUMENT||!1,Re=a.RETURN_DOM||!1,Je=a.RETURN_DOM_FRAGMENT||!1,de=a.RETURN_TRUSTED_TYPE||!1,it=a.FORCE_BODY||!1,pt=a.SANITIZE_DOM!==!1,ht=a.SANITIZE_NAMED_PROPS||!1,bt=a.KEEP_CONTENT!==!1,$e=a.IN_PLACE||!1,W=a.ALLOWED_URI_REGEXP||Gr,te=a.NAMESPACE||le,wt=a.MATHML_TEXT_INTEGRATION_POINTS||wt,Ke=a.HTML_INTEGRATION_POINTS||Ke,N=a.CUSTOM_ELEMENT_HANDLING||{},a.CUSTOM_ELEMENT_HANDLING&&Mn(a.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(N.tagNameCheck=a.CUSTOM_ELEMENT_HANDLING.tagNameCheck),a.CUSTOM_ELEMENT_HANDLING&&Mn(a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(N.attributeNameCheck=a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),a.CUSTOM_ELEMENT_HANDLING&&typeof a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(N.allowCustomizedBuiltInElements=a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ge&&(J=!1),Je&&(Re=!0),_e&&(P=H({},rr),Y=[],_e.html===!0&&(H(P,nr),H(Y,or)),_e.svg===!0&&(H(P,tn),H(Y,on),H(Y,Pt)),_e.svgFilters===!0&&(H(P,nn),H(Y,on),H(Y,Pt)),_e.mathMl===!0&&(H(P,rn),H(Y,ir),H(Y,Pt))),a.ADD_TAGS&&(typeof a.ADD_TAGS=="function"?X.tagCheck=a.ADD_TAGS:(P===ye&&(P=Pe(P)),H(P,a.ADD_TAGS,ae))),a.ADD_ATTR&&(typeof a.ADD_ATTR=="function"?X.attributeCheck=a.ADD_ATTR:(Y===Ue&&(Y=Pe(Y)),H(Y,a.ADD_ATTR,ae))),a.ADD_URI_SAFE_ATTR&&H(yt,a.ADD_URI_SAFE_ATTR,ae),a.FORBID_CONTENTS&&(ne===Xe&&(ne=Pe(ne)),H(ne,a.FORBID_CONTENTS,ae)),a.ADD_FORBID_CONTENTS&&(ne===Xe&&(ne=Pe(ne)),H(ne,a.ADD_FORBID_CONTENTS,ae)),bt&&(P["#text"]=!0),We&&H(P,["html","head","body"]),P.table&&(H(P,["tbody"]),delete K.tbody),a.TRUSTED_TYPES_POLICY){if(typeof a.TRUSTED_TYPES_POLICY.createHTML!="function")throw _t('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof a.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw _t('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');D=a.TRUSTED_TYPES_POLICY,I=D.createHTML("")}else D===void 0&&(D=pa(h,o)),D!==null&&typeof I=="string"&&(I=D.createHTML(""));ge&&ge(a),lt=a}},jn=H({},[...tn,...nn,...ra]),Dn=H({},[...rn,...oa]),ho=function(a){let y=L(a);(!y||!y.tagName)&&(y={namespaceURI:te,tagName:"template"});const A=Ht(a.tagName),ee=Ht(y.tagName);return at[a.namespaceURI]?a.namespaceURI===Q?y.namespaceURI===le?A==="svg":y.namespaceURI===Qe?A==="svg"&&(ee==="annotation-xml"||wt[ee]):!!jn[A]:a.namespaceURI===Qe?y.namespaceURI===le?A==="math":y.namespaceURI===Q?A==="math"&&Ke[ee]:!!Dn[A]:a.namespaceURI===le?y.namespaceURI===Q&&!Ke[ee]||y.namespaceURI===Qe&&!wt[ee]?!1:!Dn[A]&&(Zt[A]||!jn[A]):!!(xt==="application/xhtml+xml"&&at[a.namespaceURI]):!1},Oe=function(a){St(t.removed,{element:a});try{L(a).removeChild(a)}catch{M(a)}},et=function(a,y){try{St(t.removed,{attribute:y.getAttributeNode(a),from:y})}catch{St(t.removed,{attribute:null,from:y})}if(y.removeAttribute(a),a==="is")if(Re||Je)try{Oe(y)}catch{}else try{y.setAttribute(a,"")}catch{}},On=function(a){let y=null,A=null;if(it)a="<remove></remove>"+a;else{const re=en(a,/^[\r\n\t ]+/);A=re&&re[0]}xt==="application/xhtml+xml"&&te===le&&(a='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+a+"</body></html>");const ee=D?D.createHTML(a):a;if(te===le)try{y=new b().parseFromString(ee,xt)}catch{}if(!y||!y.documentElement){y=v.createDocument(te,"template",null);try{y.documentElement.innerHTML=pe?I:ee}catch{}}const ue=y.body||y.documentElement;return a&&A&&ue.insertBefore(n.createTextNode(A),ue.childNodes[0]||null),te===le?q.call(y,We?"html":"body")[0]:We?y.documentElement:ue},Nn=function(a){return x.call(a.ownerDocument||a,a,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},Xt=function(a){return a instanceof g&&(typeof a.nodeName!="string"||typeof a.textContent!="string"||typeof a.removeChild!="function"||!(a.attributes instanceof p)||typeof a.removeAttribute!="function"||typeof a.setAttribute!="function"||typeof a.namespaceURI!="string"||typeof a.insertBefore!="function"||typeof a.hasChildNodes!="function")},zn=function(a){return typeof u=="function"&&a instanceof u};function Ve(R,a,y){zt(R,A=>{A.call(t,a,y,lt)})}const Pn=function(a){let y=null;if(Ve(j.beforeSanitizeElements,a,null),Xt(a))return Oe(a),!0;const A=ae(a.nodeName);if(Ve(j.uponSanitizeElement,a,{tagName:A,allowedTags:P}),Ce&&a.hasChildNodes()&&!zn(a.firstElementChild)&&he(/<[/\w!]/g,a.innerHTML)&&he(/<[/\w!]/g,a.textContent)||a.nodeType===At.progressingInstruction||Ce&&a.nodeType===At.comment&&he(/<[/\w]/g,a.data))return Oe(a),!0;if(!(X.tagCheck instanceof Function&&X.tagCheck(A))&&(!P[A]||K[A])){if(!K[A]&&Hn(A)&&(N.tagNameCheck instanceof RegExp&&he(N.tagNameCheck,A)||N.tagNameCheck instanceof Function&&N.tagNameCheck(A)))return!1;if(bt&&!ne[A]){const ee=L(a)||a.parentNode,ue=E(a)||a.childNodes;if(ue&&ee){const re=ue.length;for(let we=re-1;we>=0;--we){const qe=_(ue[we],!0);qe.__removalCount=(a.__removalCount||0)+1,ee.insertBefore(qe,w(a))}}}return Oe(a),!0}return a instanceof f&&!ho(a)||(A==="noscript"||A==="noembed"||A==="noframes")&&he(/<\/no(script|embed|frames)/i,a.innerHTML)?(Oe(a),!0):(Ge&&a.nodeType===At.text&&(y=a.textContent,zt([G,U,S],ee=>{y=Tt(y,ee," ")}),a.textContent!==y&&(St(t.removed,{element:a.cloneNode()}),a.textContent=y)),Ve(j.afterSanitizeElements,a,null),!1)},Fn=function(a,y,A){if(pt&&(y==="id"||y==="name")&&(A in n||A in po))return!1;if(!(J&&!se[y]&&he(O,y))){if(!(Ae&&he(Z,y))){if(!(X.attributeCheck instanceof Function&&X.attributeCheck(y,a))){if(!Y[y]||se[y]){if(!(Hn(a)&&(N.tagNameCheck instanceof RegExp&&he(N.tagNameCheck,a)||N.tagNameCheck instanceof Function&&N.tagNameCheck(a))&&(N.attributeNameCheck instanceof RegExp&&he(N.attributeNameCheck,y)||N.attributeNameCheck instanceof Function&&N.attributeNameCheck(y,a))||y==="is"&&N.allowCustomizedBuiltInElements&&(N.tagNameCheck instanceof RegExp&&he(N.tagNameCheck,A)||N.tagNameCheck instanceof Function&&N.tagNameCheck(A))))return!1}else if(!yt[y]){if(!he(W,Tt(A,z,""))){if(!((y==="src"||y==="xlink:href"||y==="href")&&a!=="script"&&Qi(A,"data:")===0&&jt[a])){if(!(ie&&!he(T,Tt(A,z,"")))){if(A)return!1}}}}}}}return!0},Hn=function(a){return a!=="annotation-xml"&&en(a,F)},Un=function(a){Ve(j.beforeSanitizeAttributes,a,null);const{attributes:y}=a;if(!y||Xt(a))return;const A={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Y,forceKeepAttr:void 0};let ee=y.length;for(;ee--;){const ue=y[ee],{name:re,namespaceURI:we,value:qe}=ue,ct=ae(re),Kt=qe;let ce=re==="value"?Kt:ea(Kt);if(A.attrName=ct,A.attrValue=ce,A.keepAttr=!0,A.forceKeepAttr=void 0,Ve(j.uponSanitizeAttribute,a,A),ce=A.attrValue,ht&&(ct==="id"||ct==="name")&&(et(re,a),ce=gt+ce),Ce&&he(/((--!?|])>)|<\/(style|title|textarea)/i,ce)){et(re,a);continue}if(ct==="attributename"&&en(ce,"href")){et(re,a);continue}if(A.forceKeepAttr)continue;if(!A.keepAttr){et(re,a);continue}if(!Be&&he(/\/>/i,ce)){et(re,a);continue}Ge&&zt([G,U,S],Gn=>{ce=Tt(ce,Gn," ")});const Bn=ae(a.nodeName);if(!Fn(Bn,ct,ce)){et(re,a);continue}if(D&&typeof h=="object"&&typeof h.getAttributeType=="function"&&!we)switch(h.getAttributeType(Bn,ct)){case"TrustedHTML":{ce=D.createHTML(ce);break}case"TrustedScriptURL":{ce=D.createScriptURL(ce);break}}if(ce!==Kt)try{we?a.setAttributeNS(we,re,ce):a.setAttribute(re,ce),Xt(a)?Oe(a):tr(t.removed)}catch{et(re,a)}}Ve(j.afterSanitizeAttributes,a,null)},go=function R(a){let y=null;const A=Nn(a);for(Ve(j.beforeSanitizeShadowDOM,a,null);y=A.nextNode();)Ve(j.uponSanitizeShadowNode,y,null),Pn(y),Un(y),y.content instanceof i&&R(y.content);Ve(j.afterSanitizeShadowDOM,a,null)};return t.sanitize=function(R){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},y=null,A=null,ee=null,ue=null;if(pe=!R,pe&&(R="<!-->"),typeof R!="string"&&!zn(R))if(typeof R.toString=="function"){if(R=R.toString(),typeof R!="string")throw _t("dirty is not a string, aborting")}else throw _t("toString is not a function");if(!t.isSupported)return R;if(ot||Yt(a),t.removed=[],typeof R=="string"&&($e=!1),$e){if(R.nodeName){const qe=ae(R.nodeName);if(!P[qe]||K[qe])throw _t("root node is forbidden and cannot be sanitized in-place")}}else if(R instanceof u)y=On("<!---->"),A=y.ownerDocument.importNode(R,!0),A.nodeType===At.element&&A.nodeName==="BODY"||A.nodeName==="HTML"?y=A:y.appendChild(A);else{if(!Re&&!Ge&&!We&&R.indexOf("<")===-1)return D&&de?D.createHTML(R):R;if(y=On(R),!y)return Re?null:de?I:""}y&&it&&Oe(y.firstChild);const re=Nn($e?R:y);for(;ee=re.nextNode();)Pn(ee),Un(ee),ee.content instanceof i&&go(ee.content);if($e)return R;if(Re){if(Je)for(ue=V.call(y.ownerDocument);y.firstChild;)ue.appendChild(y.firstChild);else ue=y;return(Y.shadowroot||Y.shadowrootmode)&&(ue=C.call(r,ue,!0)),ue}let we=We?y.outerHTML:y.innerHTML;return We&&P["!doctype"]&&y.ownerDocument&&y.ownerDocument.doctype&&y.ownerDocument.doctype.name&&he(Wr,y.ownerDocument.doctype.name)&&(we="<!DOCTYPE "+y.ownerDocument.doctype.name+`>
`+we),Ge&&zt([G,U,S],qe=>{we=Tt(we,qe," ")}),D&&de?D.createHTML(we):we},t.setConfig=function(){let R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Yt(R),ot=!0},t.clearConfig=function(){lt=null,ot=!1},t.isValidAttribute=function(R,a,y){lt||Yt({});const A=ae(R),ee=ae(a);return Fn(A,ee,y)},t.addHook=function(R,a){typeof a=="function"&&St(j[R],a)},t.removeHook=function(R,a){if(a!==void 0){const y=Ki(j[R],a);return y===-1?void 0:Ji(j[R],y,1)[0]}return tr(j[R])},t.removeHooks=function(R){j[R]=[]},t.removeAllHooks=function(){j=sr()},t}var ha=Vr();const qr=je("html",[]),vt=ha(),ga=m`
  ul,
  ol {
    padding-inline-start: 2.5rem;
  }

  li {
    margin: 0.5rem 0;
  }

  ul li {
    ul {
      margin-inline-start: 1rem;
      list-style-type: circle;
    }

    ul ul {
      margin-inline-start: 2rem;
      list-style-type: square;
    }

    ul ul ul {
      margin-inline-start: 3rem;
      list-style-type: disc;
    }
  }

  ol li {
    ol {
      margin-inline-start: 1rem;
      list-style-type: lower-alpha;
    }

    ol ol {
      margin-inline-start: 2rem;
      list-style-type: lower-roman;
    }

    ol ol ol {
      margin-inline-start: 3rem;
      list-style-type: decimal;
    }
  }
`,ba=e=>m`
  border-collapse: collapse;

  td {
    border: 0.0625rem solid ${e.base.palette["border-line"]};
    min-width: 6.25rem;
  }

  tr:first-child {
    td:first-child {
      border-top-left-radius: 0.125rem;
    }

    td:last-child {
      border-top-right-radius: 0.125rem;
    }
  }

  tr:last-child {
    td:first-child {
      border-bottom-left-radius: 0.125rem;
    }

    td:last-child {
      border-bottom-right-radius: 0.125rem;
    }
  }
`,ya=e=>{const{base:{"font-size":t,"font-scale":n,palette:r},components:{text:o}}=e,i=rt(t,n);return`
    ${ga}
    table {
      ${ba(e)}
    }
    img {
      max-width: 100%;
      height: auto;
      border-radius: 0.25rem;
    }
    a {
      color: ${r.interactive};
    }
    pre {
      white-space: break-spaces;
    }
    p {
      min-height: ${i[o.primary["font-size"]]};
    }
    h1 {
      font-size: ${i[o.h1["font-size"]]};
      font-weight: ${o.h1["font-weight"]};
      min-height: ${i[o.h1["font-size"]]};
    }
    h2 {
      font-size: ${i[o.h2["font-size"]]};
      font-weight: ${o.h2["font-weight"]};
      min-height: ${i[o.h2["font-size"]]};
    }
    h3 {
      font-size: ${i[o.h3["font-size"]]};
      font-weight: ${o.h3["font-weight"]};
      min-height: ${i[o.h3["font-size"]]};
    }
    h4 {
      font-size: ${i[o.h4["font-size"]]};
      font-weight: ${o.h4["font-weight"]};
      min-height: ${i[o.h4["font-size"]]};
    }
    h5 {
      font-size: ${i[o.h5["font-size"]]};
      font-weight: ${o.h5["font-weight"]};
      min-height: ${i[o.h5["font-size"]]};
    }
    h6 {
      font-size: ${i[o.h6["font-size"]]};
      font-weight: ${o.h6["font-weight"]};
      min-height: ${i[o.h6["font-size"]]};
    }
  `},Zr=k.div(({theme:e})=>m`
    width: 100%;
    overflow-x: auto;
    overflow-wrap: break-word;
    contain: paint;
    ${ya(e)}

    ${sn} ul {
      ul {
        padding-inline-start: 0;
      }
      ol {
        padding-inline-start: 0;
      }
    }

    ${sn} li {
      margin: 0;
    }
  `);Zr.defaultProps=B;if(vt.isSupported){const e=new WeakSet;vt.addHook("beforeSanitizeAttributes",t=>{(t instanceof HTMLElement||t instanceof SVGElement)&&(t.removeAttribute("class"),t.tagName==="A"&&t.hasAttribute("href")&&t.getAttribute("target")==="_blank"&&e.add(t))}),vt.addHook("afterSanitizeAttributes",t=>{if(t.tagName==="A"&&t.hasAttribute("href")){const n=t.getAttribute("href");let r;try{r=new URL(n,window.location.href)}catch{return}window.location.origin!==r.origin?(t.setAttribute("target","_blank"),t.setAttribute("rel","noopener")):e.has(t)&&(t.setAttribute("target","_blank"),e.delete(t))}})}const $a=c.forwardRef(function({testId:t,content:n,customTags:r,...o},i){const[l,u]=c.useState(!1),f=c.useMemo(()=>l&&vt.isSupported?vt.sanitize(n,{FORBID_TAGS:["style","font"],CUSTOM_ELEMENT_HANDLING:{tagNameCheck:r?p=>r.includes(p):void 0},ALLOWED_URI_REGEXP:Oo}):"",[n,r,l]),d=ve(t,qr);return c.useEffect(()=>{u(!0)},[]),s.jsx(Zr,{"data-testid":d.root,...o,dangerouslySetInnerHTML:{__html:f},ref:i})}),wa=Ee($a,qr),xa=k.div``,Yr=k.div``,qt=k.div(({theme:e})=>m`
    position: relative;
    @media (height >= 31.25rem) {
      overflow-y: auto;
      min-height: 4rem;
    }
    padding: calc(2 * ${e.base.spacing});

    /* Small amount of block padding accounts for focus ring clipping within overflow auto. */
    ${Yr} + & {
      padding-block-start: calc(0.5 * ${e.base.spacing});
    }

    &:not(:last-child) {
      padding-block-end: calc(0.5 * ${e.base.spacing});
    }
  `);qt.defaultProps=B;k.div``;const Xr=k(xn)(({theme:e})=>m`
    display: flex;
    flex-direction: column;
    min-width: min(${e.base["content-width"].sm}, calc(100vw - 2rem));
    max-width: min(${e.base["content-width"].lg}, calc(100vw - 2rem));
    max-height: calc(100vh - 2rem);

    @media (height < 31.25rem) {
      overflow-y: auto;
    }

    &[aria-busy='true'] {
      ${qt} {
        overflow: hidden;
      }
    }
  `);Xr.defaultProps=B;const Sa=c.forwardRef(function({arrow:t=!0,target:n,portal:r,strategy:o,placement:i,children:l,progress:u,focusTrap:f=!0,...d},p){const g=me(p);return jo(f?g:null,!1),s.jsx(Xr,{...d,role:"dialog",arrow:t,"aria-modal":!1,"aria-busy":!!u,ref:g,target:n,portal:r,strategy:o,placement:i,children:l})}),Kr=k(De)``,Jr=k(Sa)(({theme:e})=>m`
    /* When a header is not rendered(e.g. progress state) the button must positioned atop. */
    ${qt} > ${Kr} {
      position: relative;
      z-index: calc(${e.base["z-index"].backdrop} + 1);
      align-self: end;
    }
  `);Jr.defaultProps=B;const Ta=c.forwardRef(function({target:t,heading:n,children:r,progress:o,onDismiss:i,...l},u){const f=Te(),d=nt(),p=me(u),g=c.useRef(null),b=c.useRef(null),h=()=>{if(o)return;const w=gr(p),E=w.find(L=>{var D;return(D=g.current)==null?void 0:D.contains(L)})??b.current??w[0];E==null||E.focus()};Ut(w=>{i==null||i(),w.stopPropagation()},p,[i]),yr("mousedown",[t,p],()=>{i==null||i()}),c.useLayoutEffect(()=>{const w=bn();return()=>{w instanceof HTMLElement&&w.isConnected&&w.focus()}},[]),c.useEffect(()=>{o||h()},[o]),c.useEffect(()=>{const w=()=>{setTimeout(()=>{i==null||i()},0)};return t.addEventListener("click",w),()=>{t.removeEventListener("click",w)}},[]);const $=n?s.jsx(Me,{id:d,variant:"h2",children:typeof n=="string"?n:n.primary}):null,_=s.jsx(wn,{visible:!!o,focusOnVisible:!0,placement:"local",message:typeof o=="string"?o:void 0}),M=s.jsx(Kr,{icon:!0,variant:"simple",onClick:()=>{i()},label:f("close"),ref:b,children:s.jsx(Se,{name:"times"})});return s.jsxs(Jr,{...l,...typeof n=="string"?{"aria-labelledby":d}:{"aria-label":n==null?void 0:n.primary},arrow:!0,target:t,progress:o,ref:p,children:[n&&$&&s.jsxs(oe,{container:{alignItems:"center",justify:"between",pad:2,gap:1},item:{shrink:0},as:Yr,children:[typeof n=="string"?$:s.jsx(An,{primary:$,secondary:n.secondary?s.jsx(Me,{variant:"secondary",children:n.secondary}):void 0,visual:n.visual}),M]}),(!n||r||o)&&s.jsxs(oe,{container:{direction:"column"},item:{grow:1},as:qt,ref:g,children:[!n&&M,r&&s.jsx(xa,{inert:o?"":void 0,children:r}),_]})]})}),_a="budicon",Ia="information",Aa=()=>s.jsx("path",{d:"M4.37 20.63C2.122 18.386 1 15.69 1 12.5c0-3.19 1.123-5.885 3.37-8.13C6.614 2.122 9.31 1 12.5 1c3.19 0 5.885 1.123 8.13 3.37C22.878 6.614 24 9.31 24 12.5c0 3.19-1.123 5.885-3.37 8.13C18.386 22.878 15.69 24 12.5 24c-3.19 0-5.885-1.123-8.13-3.37Zm-2.49-8.182c0 2.15.582 4.12 1.791 5.866 1.164 1.79 2.73 3.09 4.701 3.94 1.971.851 4.03 1.03 6.134.627s3.895-1.388 5.418-2.91c1.478-1.478 2.463-3.314 2.91-5.418.404-2.105.224-4.12-.626-6.09-.806-1.97-2.104-3.537-3.85-4.745-1.792-1.21-3.761-1.791-5.91-1.791-2.911 0-5.373 1.03-7.433 3.045-2.06 2.06-3.09 4.567-3.134 7.477ZM13.65 5.14c.843 0 1.61.69 1.61 1.61 0 .92-.69 1.61-1.61 1.61-.843 0-1.61-.69-1.61-1.61 0-.92.69-1.61 1.61-1.61ZM12.1 19.4c-1.263 0-2.175-1.04-1.824-2.274l1.5-4.36c.14-.51.359-1.437-.132-1.437-.328 0-.728.164-1.201.491.35-1.09 1.333-1.62 2.456-1.62 1.264 0 2.176 1.04 1.825 2.274l-1.5 4.36c-.14.51-.17 1.338.322 1.338.328 0 .665-.13 1.011-.392-.35 1.09-1.333 1.62-2.456 1.62Z"}),ka="0 0 25 25",Ea=Object.freeze(Object.defineProperty({__proto__:null,Component:Aa,name:Ia,set:_a,viewBox:ka},Symbol.toStringTag,{value:"Module"}));Ze(Ea);const Qr=k.div``,va=c.forwardRef(function(t,n){const r=Te(),{heading:o=r("additional_info"),contextualLabel:i,children:l,dialogHandle:u,...f}=t,[d,p]=c.useState(null),g=c.useRef(null),b=me(u);return c.useImperativeHandle(b,()=>({open:()=>{p(g.current)},close:()=>{p(null)}})),s.jsxs(oe,{container:!0,as:Qr,ref:n,...f,children:[s.jsx(De,{variant:"simple",label:r("additional_info"),compact:!0,icon:!0,ref:g,onClick:()=>{var h;(h=b.current)==null||h.open()},"aria-label":`${r("additional_info")} - ${i??o}`,children:s.jsx(Se,{name:"information"})}),d&&s.jsx(Ta,{heading:o,target:d,onDismiss:()=>{var h;(h=b.current)==null||h.close()},children:typeof l=="string"?s.jsx(wa,{content:l}):l})]})}),Ca=k.img`
  max-width: 100%;
`,ss=c.forwardRef(function(t,n){const{alt:r,...o}=t;return s.jsx(Ca,{...o,alt:r,ref:n})}),Ie=k.label(({theme:e,labelHidden:t})=>{const{"foreground-color":n}=e.components.label,r=xe(()=>t?Rt:ft(Wt(e.base.palette["primary-background"]),e.base.transparency["transparent-3"])),o=rt(e.base["font-size"],e.base["font-scale"]);return t?Rt:m`
          max-width: max-content;
          font-size: ${o[e.components.label["font-size"]]};
          font-weight: ${e.components.label["font-weight"]};
          color: ${n==="auto"?r:n};
        `});Ie.defaultProps=B;const Ra=c.forwardRef(function({children:t,labelHidden:n=!1,htmlFor:r,...o},i){return s.jsx(Ie,{ref:i,labelHidden:n,htmlFor:r===""?void 0:r,...o,children:t})}),La="budicon",Ma="warn-solid",ja=()=>s.jsx("path",{d:"M23.5 22.5h-22l11-20 11 20Zm-9.741-6.935V9.39a1.655 1.655 0 0 0-1.166-.447c-.42 0-.792.134-1.212.447v6.175a3.23 3.23 0 0 0 1.212.223c.466 0 .839-.09 1.166-.223Zm-1.212 4.787c.466 0 .886-.179 1.212-.492.326-.313.466-.671.466-1.074 0-.447-.14-.85-.466-1.163-.326-.313-.746-.447-1.212-.447-.42 0-.792.134-1.119.447a1.594 1.594 0 0 0-.512 1.163c0 .403.186.76.512 1.074.327.313.7.492 1.119.492Z"}),Da="0 0 25 25",Oa=Object.freeze(Object.defineProperty({__proto__:null,Component:ja,name:Ma,set:La,viewBox:Da},Symbol.toStringTag,{value:"Module"})),Na="budicon",za="diamond-minus",Pa=()=>s.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M23.219 13.178a.96.96 0 0 0 0-1.356L13.179 1.78a.96.96 0 0 0-1.357 0L1.78 11.821a.96.96 0 0 0 0 1.357l10.04 10.041a.96.96 0 0 0 1.357 0l10.041-10.04ZM18 11.5H7v2h11v-2Z"}),Fa="0 0 25 25",Ha=Object.freeze(Object.defineProperty({__proto__:null,Component:Pa,name:za,set:Na,viewBox:Fa},Symbol.toStringTag,{value:"Module"})),Rn=k.div(({theme:{base:{"border-radius":e,"font-size":t,"font-scale":n,animation:{speed:r,timing:o},palette:i},components:{"form-field":l,"form-control":{"foreground-color":u,"background-color":f,"border-color":d,"border-radius":p,"border-width":g,":hover":{"border-color":b},":focus":{"border-color":h,"box-shadow":$},":disabled":{"border-color":_,"background-color":M},":read-only":{"border-color":w,"background-color":E}}}},status:L,hasSuggestion:D})=>{const I=rt(t,n),v=L&&l[L]?l[L]["status-color"]:d,x=D&&L?Ct(.1,l[L]["status-color"],i["primary-background"]):f;return m`
      color: ${u};
      background-color: ${x};
      border-radius: calc(${e} * ${p});
      border-color: ${v};
      border-width: ${g};
      border-style: solid;
      transition-property: color, background-color, border-color;
      transition-duration: ${r};
      transition-timing-function: ${o.ease};
      &,
      & > select {
        outline: none;
      }

      &:disabled,
      &[disabled] {
        background-color: ${M};
        border-color: ${_};
        cursor: not-allowed;
      }

      &:focus:not([disabled]) {
        border-color: ${h};
        box-shadow: ${$};
        ${D&&m`
          background-color: ${f};
        `}
      }

      &:focus-within:not([disabled]) {
        ${D&&m`
          background-color: ${f};
        `}
      }

      &:hover:not([readonly]):not([disabled]):not(:focus, :focus-within) {
        ${!L&&m`
          border-color: ${b};
        `}
        ${D&&m`
          background-color: ${f};
          box-shadow: 0 0 0 0.125rem ${ft(v,.2)};
        `}
      }

      ${D&&m`
        border-end-end-radius: 0;
      `}

      &[readonly] {
        background-color: ${E};
        border-color: ${w};
      }

      @media (pointer: coarse) {
        /* stylelint-disable-next-line unit-allowed-list */
        font-size: max(${I.s}, 16px);
      }
    `});Rn.defaultProps=B;c.forwardRef(function(t,n){return s.jsx(Rn,{ref:n,...t})});const Ua=k.span`
  display: none;
`,Ba=c.forwardRef(function(t,n){const{portalTarget:r}=gn();return r?bo.createPortal(s.jsx(Ua,{...t,ref:n}),r):null}),eo=["label","info","additional-info","suggestion-accept","suggestion-reject"],to=je("form-field",eo),no=je("radio-check",["control",...eo]),Mt=k.div(e=>{const{theme:{base:{spacing:t},components:{"form-field":n,"radio-check":{size:r,"touch-size":o,"background-color":i,"border-color":l,"border-width":u}}},status:f}=e;let d=l;return(f==="error"||f==="warning")&&(d=n[f]["status-color"]),m`
      display: flex;
      flex-shrink: 0;
      position: relative;
      width: ${r};
      height: ${r};
      margin-inline-end: calc(0.5 * ${t});
      border: ${u} solid ${d};
      background-color: ${i};

      @media (pointer: coarse) {
        width: ${o};
        height: ${o};
      }

      &::after {
        content: '';
        display: none;
      }
    `});Mt.defaultProps=B;const Ln=k.input(e=>{const{disabled:t,theme:{base:{"border-radius":n},components:{"form-control":{":focus":{"box-shadow":r,"border-color":o},":read-only":{"background-color":i}},"radio-check":{size:l,":checked":{"background-color":u,"border-color":f}},checkbox:{"border-radius":d},"radio-button":{"border-radius":p}}}}=e,g=e.readOnly?i:u,b=xe(()=>Wt(g)),h=`+ ${Ie} ${Mt}`,{ltr:$}=Ye();return m`
    ${Rt}
    margin: 0;

    /* Sets rect size for JAWS focus outline */
    width: ${l};
    height: ${l};

    ${!t&&m`
      &:focus ${h} {
        box-shadow: ${r};
        border-color: ${o};
      }
    `}
    &:checked
      ${h},
      &:checked:disabled
      ${h},
      &[type='checkbox']:indeterminate
      ${h},
      &[type='checkbox']:indeterminate:disabled
      ${h} {
      border-color: ${e.readOnly?"inherit":f};
      background-color: ${g};

      &::after {
        display: block;
      }
    }

    &[type='radio'] ${h}, &[type='radio'] ${h}::after {
      border-radius: ${p};
    }

    &[type='radio'] ${h}::after {
      content: '';
      position: absolute;
      inset: 0;
      margin: auto;
      width: calc(${l} * 0.3);
      height: calc(${l} * 0.3);
      border-radius: ${p};
      border: calc(${l} * 0.2) solid ${b};
    }

    &[type='checkbox'] ${h} {
      border-radius: min(calc(${n} * ${d}), 0.25rem);
    }

    &[type='checkbox']:not(:indeterminate) ${h} {
      &::after {
        width: 40%;
        height: 75%;
        ${$?m`
              transform: rotate(45deg) translate(50%, -30%);
            `:m`
              transform: rotate(45deg) translate(-50%, 30%);
            `}
        border-right: 0.15em solid ${b};
        border-bottom: 0.15em solid ${b};
      }
    }

    &[type='checkbox']:indeterminate ${h} {
      display: flex;

      &::after {
        width: 90%;
        height: 0.15em;
        margin: auto;
        background-color: ${b};
      }
    }
  `});Ln.defaultProps=B;const ro=k.div(e=>{const{disabled:t,readOnly:n,theme:{base:r,components:{"radio-check":{label:{color:o,"font-weight":i}},"form-control":{":hover":{"border-color":l}}}}}=e,u=rt(r["font-size"],r["font-scale"]);return m`
      > ${Ie} {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-weight: ${i};
        word-break: break-word;
        font-size: ${u.s};
        color: ${o};
        margin: 0;
        min-height: ${r["hit-area"]["mouse-min"]};

        @media (pointer: coarse) {
          min-height: ${r["hit-area"]["finger-min"]};
        }
      }

      > ${ut} {
        margin: 0;
        padding-inline-start: calc(${r.spacing} / 4);
      }

      ${!(t||n)&&m`
        &:not(:focus-within) > ${Ie}:hover ${Mt} {
          border-color: ${l};
        }
      `}
    `});ro.defaultProps=B;const oo=k.label(({disabled:e,readOnly:t,status:n,theme:{base:{palette:r,shadow:o,spacing:i},components:{card:l,"form-field":u,"radio-check":{label:f},"form-control":{":hover":{"border-color":d}}}}})=>{const p=n==="error"?u.error["status-color"]:r["border-line"];return m`
      min-width: min-content;
      cursor: pointer;
      background-color: ${l.background};
      border-radius: ${l["border-radius"]};
      border: 0.0625rem solid ${p};
      padding: ${i};

      ${e&&m`
        cursor: not-allowed;
      `}
      ${!(e||t)&&m`
        :hover:not(:focus-within) {
          border-color: ${d};

          ${Ie} ${Mt} {
            border-color: ${d};
          }
        }

        :focus-within {
          box-shadow: ${o.focus};
          border-color: transparent;
        }
      `}
        > ${Ie} {
        display: flex;
        align-items: center;
        color: ${f.color};
        font-weight: ${f["font-weight"]};
        margin: 0;
      }

      > ${ut} {
        margin: 0;
        padding-inline-start: calc(${i} / 4);
      }
    `});oo.defaultProps=B;const Ga=c.forwardRef(function(t,n){const r=nt(),o=Te(),{testId:i,type:l,id:u=r,label:f,required:d=!1,disabled:p=!1,readOnly:g=!1,indeterminate:b=!1,checked:h,defaultChecked:$,variant:_="simple",onClick:M,onKeyDown:w,onChange:E,status:L,info:D,additionalInfo:I,ariaDescribedby:v,className:x,...V}=t,q=ve(i,no),C=l==="radio",j=_==="card",G=me(n),U=nt();return c.useEffect(()=>{!C&&G.current&&(G.current.indeterminate=!!b)},[G,b,C]),c.useEffect(()=>{if(!G.current)return;const S=G.current.nextSibling;if((S==null?void 0:S.nodeName.toUpperCase())!=="LABEL")return;const O=new AbortController;return S.addEventListener("mousedown",Z=>{G.current===bn()&&Z.preventDefault()},{signal:O.signal}),()=>{O.abort()}},[]),s.jsx(qa,{testId:q,as:j?oo:ro,label:s.jsxs(s.Fragment,{children:[s.jsx(Mt,{status:L,isRadio:C,as:Rn,required:d,disabled:p,readOnly:g,onMouseDown:S=>S.preventDefault()}),f,g&&s.jsx(Ba,{id:U,children:o("read_only")})]}),labelAs:j?"div":void 0,id:u,required:d,disabled:p,readOnly:g,status:L,info:D,isRadioCheck:!0,inline:!0,labelAfter:!0,additionalInfo:I,children:s.jsx(Ln,{"data-testid":q.control,...V,className:pr("radio-check",x,{variant:_,type:l}),id:u,type:l,required:d,checked:h,defaultChecked:$,"aria-describedby":g?`${v} ${U}`:v,disabled:p,readOnly:g,onChange:E,onClick:S=>{g&&S.preventDefault(),M==null||M(S)},onKeyDown:S=>{l==="checkbox"&&g&&S.key===" "&&S.preventDefault(),l==="radio"&&g&&S.key.includes("Arrow")&&S.preventDefault(),w==null||w(S)},ref:G})})});Ee(Ga,no);Ze(Oa,Ha,hr);const io=k(Se)(({theme:e,status:t})=>m`
    height: 1em;
    width: 1em;
    color: ${xe(()=>Sn(e.components["form-field"][t]["status-color"],e.base.palette["primary-background"]),()=>e.components["form-field"][t]["status-color"])};
    vertical-align: baseline;
  `);io.defaultProps=B;const ao=k(De)(({theme:e})=>m`
    margin-block-start: calc(${e.base.spacing} / 2);
    align-self: start;
  `);ao.defaultProps=B;const ut=k.div(({status:e,theme:{base:{"font-size":t,"font-scale":n,spacing:r,palette:o},components:{"form-field":i}}})=>{const{xxs:l}=rt(t,n);return m`
      max-width: max-content;
      font-size: ${l};
      word-break: break-word;

      &:not(:empty) {
        margin-block-start: calc(0.25 * ${r});
      }

      ${e&&i[e]&&m`
        color: ${xe(()=>Sn(i[e]["status-color"],o["primary-background"]),()=>i[e]["status-color"])};
      `}
    `});ut.defaultProps=B;const pn=k.div``,so=k.div(e=>{const{labelAsLegend:t,isRadioCheck:n,showAdditionalInfo:r,disabled:o,required:i,theme:{base:{palette:{urgent:l},"disabled-opacity":u,spacing:f,"hit-area":{"compact-min":d}}}}=e;return m`
    ${o&&m`
      opacity: ${u};
      -webkit-user-select: none;
      user-select: none;
    `}
    position: relative;
    border: 0;

    &:has(${Ln}:only-of-type) {
      ${ut} {
        min-width: 100%;
      }
    }

    > ${Ie}, > ${pn} {
      &:not(:empty) {
        margin-bottom: calc(0.25 * ${f});
        min-height: ${d};
      }
    }

    > ${Ie}, > ${pn} > ${Ie} {
      ${i&&m`
        &::after {
          content: ${'"\\00a0*" / ""'};
          color: ${l};
        }
      `}

      ${o&&m`
        cursor: not-allowed;
      `}
    }

    ${t&&m`
      > legend {
        display: inline-flex;
        align-items: flex-end;
      }
    `}

    ${t&&r&&m`
      display: block;

      > legend {
        float: inline-start;
      }

      > ${Qr} {
        ${!n&&m`
          float: inline-end;
        `}
        + * {
          clear: both;
        }
      }
    `}
  `});so.defaultProps=B;const hn=k(De)(({theme:{base:{"font-size":e,"font-scale":t,"border-radius":n,spacing:r,palette:o},components:{"form-control":{"border-radius":i,"border-width":l},"form-field":u}}})=>{const{xxs:f}=rt(e,t),d=xe(()=>Sn(u.pending["status-color"],o["primary-background"]),()=>u.pending["status-color"]),p=Ao(d),g=xe(()=>Wt(d)),b=g&&ft(g,.4);return m`
    background-color: ${d};
    color: ${g};
    font-size: ${f};
    min-width: calc(3 * ${r});
    min-height: calc(3 * ${r});
    padding: 0 ${r};
    border-radius: 0;
    border: none;

    &:first-child {
      border-inline-end: ${l} solid ${b};
      border-end-start-radius: calc(${n} * ${i});
      margin-inline-start: calc(2 * ${r});
    }

    &:last-child {
      border-end-end-radius: calc(${n} * ${i});
      margin-inline-start: 0;
    }

    &:hover {
      color: ${p.foreground};
      background-color: ${p.background};
    }

    @media (pointer: coarse) {
      min-height: 2rem;
    }
  `});hn.defaultProps=B;const Wa={error:"warn-solid",warning:"diamond-minus",success:"check"},Va=c.forwardRef(function(t,n){const r=nt(),{testId:o,children:i,id:l=r,as:u="div",label:f,labelAs:d="label",labelFor:p=l,labelId:g,labelHidden:b=!1,labelAfter:h=!1,info:$,status:_,isRadioCheck:M,charLimitDisplay:w,required:E=!1,disabled:L=!1,readOnly:D=!1,inline:I=!1,onClear:v,actions:x,container:V,additionalInfo:q,onResolveSuggestion:C,"aria-describedby":j,className:G,...U}=t,S=ve(o,to),O=Te(),{announceAssertive:Z}=$n(),T=d==="legend",z=_==="pending"&&!!C,F=me(n),W=c.useRef(null),[P,ye]=c.useState(null),Y=!!q&&!L&&!b,Ue=s.jsxs(s.Fragment,{children:[s.jsx(Ra,{"data-testid":S.label,id:g,as:d,htmlFor:d==="label"?p:void 0,labelHidden:b,onClick:J=>{D&&J.preventDefault()},inline:I,ref:W,children:f}),Y&&P&&s.jsx(va,{"data-testid":S.additionalInfo,heading:q.heading,contextualLabel:P,children:q.content})]}),N=!M&&!T&&!b?s.jsx(oe,{as:pn,container:{justify:"between",alignItems:"end"},item:{alignSelf:"stretch"},children:Ue}):Ue;c.useEffect(()=>{var J;ye(((J=W.current)==null?void 0:J.textContent)??null)},[f]),c.useEffect(()=>{var J,ie;if(_==="error"||_==="warning"){let Be=`${O(_)} ${$}`;(J=W.current)!=null&&J.textContent&&(Be=`${(ie=W.current)==null?void 0:ie.textContent} ${Be}`),Z({message:Be,type:_})}},[_,$]);let K;if(T||c.Children.count(i)>1)K=i;else{const J=c.Children.only(i).props["aria-describedby"];K=c.cloneElement(i,{"aria-describedby":[J,$&&!D?`${l}-info`:void 0].join(" ").trim()||void 0})}x&&(K=s.jsxs(oe,{container:{alignItems:"center",gap:.5},children:[K,s.jsx(qi,{items:x,menuAt:3})]}));let se=s.jsxs(oe,{id:`${l}-info`,"data-testid":S.info,status:_,as:ut,container:{alignItems:"center",gap:.5},children:[_&&_!=="pending"&&s.jsxs(s.Fragment,{children:[s.jsx(oe,{item:{alignSelf:"start"},as:io,status:_,name:Wa[_]}),s.jsx(Bt,{children:`${O(_)} `})]}),$]});if(w&&(se=s.jsxs(oe,{container:{justify:se?"between":"end",gap:1},children:[se,s.jsx(oe,{item:{shrink:0},children:w})]})),z){const J=gr(F);se=s.jsxs(oe,{container:{alignItems:"start",justify:"between"},children:[s.jsxs(ut,{"data-testid":S.info,status:_,id:`${l}-info`,children:[O("suggestion_info"),s.jsx(Bt,{"aria-live":"polite",children:O("suggestion_assist")})]}),s.jsxs(oe,{container:{wrap:"nowrap"},children:[s.jsx(hn,{"data-testid":S.suggestionReject,onClick:()=>{var ie;C(!1),(ie=J[0])==null||ie.focus()},"aria-label":`${O("no")}, ${O("reject_suggestion_button_a11y")}${P?` - ${P}`:""}`,children:O("no")}),s.jsx(hn,{"data-testid":S.suggestionAccept,onClick:()=>{var ie;C(!0),(ie=J[0])==null||ie.focus()},"aria-label":`${O("yes")}, ${O("accept_suggestion_button_a11y")}${P?` - ${P}`:""}`,children:O("yes")})]})]})}const X=J=>{J.key==="Enter"&&(J.target.closest("button")||(J.preventDefault(),C==null||C(!0)))},Ae=[];return j&&Ae.push(j),T&&$&&Ae.push(`${l}-info`),s.jsxs(oe,{"data-testid":S.root,...U,container:{direction:I?"row":"column",alignItems:I?"center":void 0,wrap:M?"wrap":void 0,...V},as:so,labelAsLegend:T,isRadioCheck:M,showAdditionalInfo:Y,id:`${l}-field`,forwardedAs:u,required:E,disabled:L,readOnly:D,onKeyDown:z?X:void 0,"aria-describedby":Ae.length?Ae.join(" "):void 0,ref:F,className:pr("form-field",G,{status:_}),children:[(T||!h)&&N,K,!T&&h&&N,!D&&se,M&&v&&s.jsx(ao,{variant:"link",onClick:()=>{v()},children:O("clear_selection")})]})}),qa=Ee(Va,to),Za=(e,t)=>e?t==="height"?`${e.scrollHeight}px`:`${e.scrollWidth}px`:"",lr=e=>{const{status:t,dimension:n,transitionSpeed:r,transitionTimingFunction:o,min:i,max:l,nullWhenCollapsed:u,el:f}=e,d={};let p=l;return f&&!l&&(p=Za(f,n)),(t==="expanded"||t==="collapsed")&&((l||i)&&(d[n]=t==="expanded"?p:i||0,d[`overflow${n==="width"?"X":"Y"}`]="hidden"),t==="collapsed"&&!u&&!i&&(d[n]=0,d.overflow="hidden",d.visibility="hidden")),(t==="expanding"||t==="collapsing")&&(d[n]=t==="expanding"?p:i||0,d.overflow="hidden",d.transitionProperty=n,d.transitionDuration=`max(${r}, 0.01ms)`,d.transitionTimingFunction=o),d},Ya=c.forwardRef(function(t,n){const{base:{animation:r}}=yn(),{children:o,dimension:i="height",collapsed:l=!1,onBeforeExpand:u,onAfterExpand:f,onBeforeCollapse:d,onAfterCollapse:p,transitionSpeed:g=r.speed,min:b,max:h,nullWhenCollapsed:$=!1,as:_="div",...M}=t,[w,E]=c.useState(l?"collapsed":"expanded"),L=c.useState(),D=L[1];let I=L[0];const v=Tn(w),x=me(n),V=c.useCallback(q=>{q.target!==x.current||q.propertyName!==i||E(w==="expanding"?"expanded":"collapsed")},[x.current,w]);return c.useLayoutEffect(()=>{const q=l,C=!l,j=["expanded","expanding"].includes(w),G=["collapsed","collapsing"].includes(w);C&&G?(u==null||u(),E("expanding")):q&&j&&(d==null||d(),E("collapsing")),w==="expanded"&&v!=="expanded"?f==null||f():w==="collapsed"&&v!=="collapsed"&&(p==null||p()),D(lr({dimension:i,min:b,max:h,transitionSpeed:g,nullWhenCollapsed:$,status:w,el:x.current,transitionTimingFunction:r.timing.ease}))},[l,w,b,h]),w!==v&&["expanded","collapsed"].includes(v)&&(I=lr({dimension:i,min:b,max:h,transitionSpeed:g,nullWhenCollapsed:$,status:w==="expanding"?"collapsing":"expanding",el:x.current,transitionTimingFunction:r.timing.ease})),w==="collapsed"&&$&&!b?null:s.jsx(_,{ref:x,onTransitionEnd:V,...M,inert:w==="collapsed"&&!$&&!b?"":void 0,style:I,children:o})}),Xa=k(De)``,Ka=({children:e,lines:t})=>{const[n,r]=c.useState(!0),[o,i]=c.useState(!1),l=c.useRef(null),u=Te(),f=c.useMemo(()=>{if(!ko)return 1/0;const d=Number.parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"),10)*1.25;return t*d},[]);return c.useLayoutEffect(()=>{if(!l.current)return;const d=new ResizeObserver(p=>{const g=p.some(({target:b,contentRect:h})=>{if(b===l.current)return h.height>f});i(g)});return d.observe(l.current),()=>{d.disconnect()}},[l.current,f]),s.jsxs(s.Fragment,{children:[s.jsx(Ya,{collapsed:n,min:o?`${f}px`:"max-content",children:s.jsx("div",{ref:l,children:e})}),o&&s.jsx(Xa,{variant:"link",onClick:()=>r(d=>!d),children:u(n?"show_more":"show_less")})]})},Ja=k.span`
  display: inline-block;
  position: relative;
`,lo=()=>{const e=Te();return s.jsxs(Ja,{children:[s.jsx("span",{"aria-hidden":!0,children:"––"}),s.jsx(Bt,{children:e("no_value")})]})},co=je("field-value-list",[]),cr=je("field-value-item",["name","value"]),Qa=k.dt`
  word-break: break-word;
`,es=k.dd`
  word-break: break-word;
`,kt=k.div``,uo=k.dl(({variant:e,theme:t})=>{const{components:{"field-value-list":{inline:{detached:n}}}}=t;return m`
    width: 100%;

    ${e==="value-comparison"&&m`
      dt {
        width: 100%;
      }
      && dd {
        text-align: end;
        padding-inline-start: calc(2 * ${t.base.spacing});

        /* Unset negative margin from Details to prevent field value misalignment */
        margin: unset;
      }
      ${Ie} {
        max-width: unset;
      }
      dd:not(:last-of-type),
      dt:not(:last-of-type) {
        border-bottom: 0.0625rem solid ${t.base.palette["border-line"]};
        padding-bottom: calc(0.5 * ${t.base.spacing});
      }
    `}

    ${n&&e==="inline"&&m`
      dt {
        width: 100%;
        padding-inline-end: calc(${t.base.spacing});
      }
      ${Ie} {
        max-width: unset;
      }
      dd:not(:last-of-type),
      dt:not(:last-of-type),
      dd:has(+ ${kt}),
      dt:has(+ dd + ${kt}),
      ${kt}:has(+ dt + dd),
      ${kt}:not(:last-of-type) {
        border-bottom: 0.0625rem dashed ${t.base.palette["border-line"]};
        padding-bottom: calc(0.5 * ${t.base.spacing});
      }
    `}
  `});uo.defaultProps=B;const dr=Ee(({testId:e,name:t,value:n,variant:r="inline",truncate:o=!0})=>{const i=ve(e,cr),l=typeof n=="string"&&o?s.jsx(Ka,{lines:3,children:n}):n,u=s.jsxs(s.Fragment,{children:[s.jsx(Ie,{"data-testid":i.name,as:Qa,role:"none",children:t}),s.jsx(es,{"data-testid":i.value,role:"none",children:n?l:s.jsx(lo,{})})]});return r==="stacked"?s.jsx(kt,{"data-testid":i.root,children:u}):s.jsx(s.Fragment,{children:u})},cr),ts=c.forwardRef(function({testId:t,fields:n,variant:r="inline",...o},i){const l=ve(t,co),u=me(i),f=Do("xs",{breakpointRef:u,themeProp:"content-width"}),{components:{"field-value-list":{inline:{detached:d}}}}=yn();return s.jsx(dt,{"data-testid":l.root,...o,ref:u,container:{cols:["inline","value-comparison"].includes(r)&&f?"16ch minmax(0, 1fr)":"minmax(0, 1fr)",colGap:!d&&r!=="value-comparison"?2:0,rowGap:!d&&r!=="value-comparison"?1:.5},as:uo,role:"none",variant:f?r:"stacked",children:n.map(({id:p,name:g,value:b,truncate:h=!0,variant:$})=>{const _={name:g,variant:($??r)==="stacked"||!f?"stacked":"inline"};return typeof b=="string"?s.jsx(dr,{..._,value:b,truncate:h},p??g):s.jsx(dr,{..._,value:b},p??g)})})}),ls=Ee(ts,co),cs=c.forwardRef(function({value:t,displayText:n,variant:r="link",...o},i){const l=t?n||t:s.jsx(lo,{});return r==="text"||!t?s.jsx("span",{ref:i,...o,children:l}):s.jsx(Eo,{...o,variant:"link",ref:i,href:`mailto:${t}`,children:l})});export{cs as E,ls as F,ss as I,lo as N,Rn as S,Ta as a,qa as b,ln as c,wr as d,eo as e,yr as u};
