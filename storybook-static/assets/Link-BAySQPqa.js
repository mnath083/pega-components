import{r as o}from"./index-D4H_InIO.js";import{c as _e,g as be,b as te,m as F,n as Z,o as ye,p as Ee,s as Be,w as H,u as je,t as Oe,v as Re,x as Ke,h as Fe,q as S,k as ne,d as L,f as z,i as re,l as se,A as I,y as ue,z as He,C as Ve,D as We,e as Ue,I as Xe,E as fe,F as pe,S as qe,B as Ne,G as Je,H as Ye,J as Ze,r as Ge}from"./Button-O6gWt_GM.js";import{j as t,r as Qe}from"./index-Df7fr5hj.js";const he=(e,n)=>{let s;return function(...a){window.clearTimeout(s),s=window.setTimeout(()=>{s=void 0,e.apply(this,a)},n)}},et=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,tt=()=>{const e=document.createElement("div");e.style.width="1ch",e.style.position="fixed",document.body.append(e);const n=e.offsetWidth;return e.remove(),n},nt=(e,n)=>Object.hasOwn(e,n),rt='a[href], button, input, textarea, select, details, video[controls], audio[controls], [tabindex]:not([tabindex="-1"])',me=(e,{includeActiveEl:n=!1}={})=>{const s=_e();let u=s,a=null;const d=nt(e,"current")?e.current:e;if(!d)return[];let c=rt;n&&(a=be(),a&&(u=a.id||s,a.id=u,c=`${c}, [id="${u}"]`));const f=[...d.querySelectorAll(c)].filter(l=>l instanceof HTMLElement&&(l.id===u||!l.hasAttribute("disabled")&&l.getAttribute("tabindex")!=="-1"&&!l.closest("[inert]")));return(a==null?void 0:a.id)===s&&a.removeAttribute("id"),f},st=e=>Z(e).flatMap(n=>[n,...ye(n)]).filter(n=>F(n,HTMLElement)),At=(e,n)=>{var v;const[s,u]=o.useState(!1),a=o.useRef(null),{portalTarget:d}=te(),c=((v=d==null?void 0:d.ownerDocument)==null?void 0:v.defaultView)||window,f=o.useRef();o.useEffect(()=>()=>{var i;(i=f.current)==null||i.abort()},[]);const l=o.useCallback(i=>{var E,w,T,M;if(!s)return;const r=F(i,FocusEvent)?i.relatedTarget:null,m=Z(e).flatMap(b=>[b,...ye(b)]);if(F(r,Node)){const b=m.find(g=>g==null?void 0:g.contains(r));if(b){a.current=b;return}}const x=new AbortController,y=b=>{m.some(g=>b.composedPath().some(A=>F(A,Node)&&g.contains(A)))||(u(!1),n==null||n(!1,a.current),a.current=null),x.abort()};(E=c==null?void 0:c.document)==null||E.addEventListener("focusin",y,{once:!0,signal:x.signal}),(w=c==null?void 0:c.document)==null||w.addEventListener("mouseup",y,{once:!0,signal:x.signal});const j=()=>{u(!1),n==null||n(!1,a.current),a.current=null,x.abort()};try{(T=window.parent)==null||T.document.addEventListener("focusin",j,{once:!0,signal:x.signal}),(M=window.parent)==null||M.document.addEventListener("mouseup",j,{once:!0,signal:x.signal})}catch{}f.current=x},[s,n,e]),p=o.useCallback(i=>{if(!s){u(!0);const r=i.currentTarget;n==null||n(!0,r),a.current=r}},[s,n]);return o.useEffect(()=>{st(e).forEach(r=>{r!=null&&r.contains(document.activeElement)&&p(new FocusEvent("focusin",{relatedTarget:document.activeElement}))})},[]),o.useEffect(()=>{const i=Z(e);return i.forEach(r=>{r==null||r.addEventListener("focusin",p),r==null||r.addEventListener("popover:focusin",p),r==null||r.addEventListener("focusout",l),r==null||r.addEventListener("popover:focusout",l)}),()=>{i.forEach(r=>{r==null||r.removeEventListener("focusin",p),r==null||r.removeEventListener("popover:focusin",p),r==null||r.removeEventListener("focusout",l),r==null||r.removeEventListener("popover:focusout",l)})}},[e,p,l]),s},ot=Ee?tt():1,it=()=>ot,at=H&&window.getComputedStyle(document.documentElement).fontSize||"16px",ct=(e,{breakpointRef:n,defaultValue:s=!1,themeProp:u="breakpoints"}={})=>{const{base:{breakpoints:a,"content-width":d}}=Be(),c=u==="content-width"?d[e]:a[e],[f,l]=o.useState(H?window.matchMedia(`(min-width: ${c})`).matches:!!s),p=it(),v=o.useCallback(i=>{l(i.matches)},[]);return o.useLayoutEffect(()=>{if(n&&n.current){const i=he(m=>{var y;if(!((y=n.current)!=null&&y.checkVisibility()))return;const x=m.some(({target:j,contentRect:E})=>{if(j!==n.current)return;const w=u==="breakpoints"?parseFloat(at):p;return E.width>=parseFloat(c)*w});l(x)},100),r=new ResizeObserver(i);return r.observe(n.current),()=>{r.disconnect()}}if(H){const i=window.matchMedia(`(min-width: ${c})`),r="addEventListener"in i,m=he(()=>{l(window.innerWidth>=parseInt(c,10))},100);return r?(i.addEventListener("change",v),l(i.matches)):(window.addEventListener("resize",m),l(window.innerWidth>=parseInt(c,10))),()=>{r?i.removeEventListener("change",v):window.removeEventListener("resize",m)}}},[n==null?void 0:n.current]),f},Pt=(e,n=document,s=[])=>{const u=o.useCallback(a=>{a.key==="Escape"&&e(a)},[e,...s]);je("keydown",u,{target:n})},lt=(e,n=!0,s=[],u=!0)=>{const a=o.useCallback(d=>{if(e!=null&&e.current&&d.key==="Tab"){const c=me(e),{0:f,[c.length-1]:l}=c,p=be();if((p===e.current||!e.current.contains(p)||e.current.contains(p)&&!c.includes(p))&&u)if(d.preventDefault(),p){const i=me(e,{includeActiveEl:!0}),r=i.findIndex(m=>m===p);if(r!==-1)if(d.shiftKey){const m=(r-1+i.length)%i.length;i[m].focus()}else i[(r+1)%i.length].focus();else d.shiftKey?l==null||l.focus():f==null||f.focus()}else d.shiftKey?l==null||l.focus():f==null||f.focus();else d.shiftKey&&p===f?(d.preventDefault(),l==null||l.focus()):!d.shiftKey&&p===l&&(d.preventDefault(),f==null||f.focus())}},s);je("keydown",a,{target:n?void 0:e})},ke={update:()=>{},dismiss:()=>{},activate:()=>{},minimize:()=>{},maximize:()=>{},dock:()=>{},unmount:()=>{}},dt={alert:!1,dismissible:!0,minimizable:!1,maximizable:!1,dockable:!1,defaultMinimized:!1,unmountWhenMinimized:!0,state:"open",top:!1,initialized:!1,...ke},ut=o.createContext(dt),ve=o.createContext({create:()=>ke,ModalContext:ut,initialized:!1}),ft=()=>{const e=H?window.cosmos.modalManagerContext??ve:ve;return o.useContext(e)},pt=()=>{const{ModalContext:e}=ft();return o.useContext(e)};let R;const xe=()=>{var e;return R||(R=Oe?((e=navigator.userAgent.match(/(Windows|Macintosh)/))==null?void 0:e[0])||"Other":"",R)},Se=()=>{const[e,n]=o.useState(xe);return o.useEffect(()=>{e||n(xe())},[]),{windows:e==="Windows",macintosh:e==="Macintosh",name:e}},ht=(e=":root")=>{const n=o.useRef(0),s=o.useRef(null),{styleSheetTarget:u}=te(),a=o.useCallback(()=>{var c;(c=s.current)==null||c.remove(),s.current=null},[]),d=o.useCallback(()=>{if(s.current)return;const c=document.querySelector(e);if(!c)return;const[f,l]=Re(c);!f&&!l||(s.current=document.createElement("style"),s.current.nonce=window.__webpack_nonce__,s.current.textContent=`
      ${e} {
        ${l?`padding-inline-end: ${n.current}px !important`:""};
        ${f?`padding-block-end: ${n.current}px !important`:""};
        overflow: hidden !important;
      }
    `,(u??document.head).append(s.current))},[e]);return o.useLayoutEffect(()=>(n.current=Ke(),a),[a]),{enableScroll:a,disableScroll:d}},mt=S.span`
  ${Fe}
  -webkit-user-select: none;
  user-select: none;
`,k=o.forwardRef(function(n,s){return t.jsx(mt,{...n,ref:s})}),G=S.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  color: inherit;

  & + & {
    margin-inline-start: ${e=>e.theme.base.spacing};
  }
`;G.defaultProps=L;const vt=o.forwardRef(function({type:n="button",disabled:s=!1,href:u,...a},d){const c=o.useRef(),f=ne(d);o.useEffect(()=>()=>{c.current=void 0},[]);const l=v=>{var i;(i=a.onMouseDown)==null||i.call(a,v),v.persist(),c.current=v},p=v=>{var r,m;const i=c.current&&!c.current.defaultPrevented;return c.current=void 0,i&&f.current!==document.activeElement&&((r=f.current)==null||r.focus()),(m=a.onMouseUp)==null?void 0:m.call(a,v)};return u?t.jsx(G,{as:"a",ref:f,href:u,disabled:s,...a,onMouseDown:l,onMouseDownCapture:p}):t.jsx(G,{ref:f,type:n,disabled:s,...a,onMouseDown:l,onMouseUp:p})}),zt=z("alert",[]),Dt=z("count",[]),ge=z("keyboard",[]),_t=z("status",[]),xt={Command:"⌘",Alt:"⌥",Option:"⌥",Control:"⌃",Return:t.jsxs(t.Fragment,{children:[t.jsx("span",{"aria-hidden":!0,children:"↵"}),t.jsx(k,{children:"Return"})]}),Enter:t.jsxs(t.Fragment,{children:[t.jsx("span",{"aria-hidden":!0,children:"↵"}),t.jsx(k,{children:"Enter"})]}),Delete:t.jsxs(t.Fragment,{children:[t.jsx("span",{"aria-hidden":!0,children:"Del"}),t.jsx(k,{children:"Delete"})]}),CommandOrControl:"⌘"},gt={Control:"Ctrl",Alt:"Alt",Option:"Alt",Meta:t.jsxs(t.Fragment,{children:[t.jsx("span",{"aria-hidden":!0,children:"⊞"}),t.jsx(k,{children:"Windows"})]}),Command:t.jsxs(t.Fragment,{children:[t.jsx("span",{"aria-hidden":!0,children:"⊞"}),t.jsx(k,{children:"Windows"})]}),Backspace:"Backspace",CommandOrControl:"Ctrl"},wt={"Page up":t.jsxs(t.Fragment,{children:[t.jsx("span",{"aria-hidden":!0,children:"Pg up"}),t.jsx(k,{children:"Page up"})]}),"Page down":t.jsxs(t.Fragment,{children:[t.jsx("span",{"aria-hidden":!0,children:"Pg dn"}),t.jsx(k,{children:"Page down"})]}),Ins:"Insert",Shift:t.jsxs(t.Fragment,{children:[t.jsx("span",{"aria-hidden":!0,children:"⇧"}),t.jsx(k,{children:"Shift"})]})},V=S.kbd(({theme:{base:e,components:{text:{primary:n},badges:{keyboard:s}}}})=>I`
      background-color: ${s["background-color"]};
      color: ${e.palette["foreground-color"]};
      display: inline-block;
      position: relative;
      font-family: ${e["font-family"]};
      font-weight: ${n["font-weight"]};
      overflow: hidden;
      white-space: nowrap;
      padding: 0.125rem;
      border: 0.0125rem solid ${s["border-color"]};
      border-radius: calc(${e["border-radius"]} / 4);
      text-transform: capitalize;
      text-align: center;
      min-width: 1.25rem;
      height: 1.25rem;
      text-overflow: ellipsis;
      line-height: 1rem;
      inset-block-start: calc(1.25rem / 4 - 0.125rem);
    `);V.defaultProps=L;const K=re(o.forwardRef(function({testId:n,keyName:s,...u},a){const{windows:d}=Se(),c=se(n,ge);return t.jsx(V,{"data-testid":c.root,...u,ref:a,children:d&&gt[s]||xt[s]||wt[s]||s})}),ge);o.createContext({drawerOpen:!1,openDrawer:()=>{},closeDrawer:()=>{}});const bt=o.createContext({navOpen:!1,drawerOpen:!1,setDrawerOpen:()=>{},navState:"closed",collapsedHoverMenus:!1,focusedImperatively:{get current(){return!1}},headerEl:null,previewTriggerRef:{get current(){return null},set current(e){}},searchContainerEl:null,setSearchContainerEl:()=>{},mobileNavOpen:!1,previewActive:!1,setPreviewActive:()=>{}}),yt="budicon",Et="open",jt=()=>t.jsx("path",{d:"M21 12h-.959V5.676L11.116 14.6l-.718-.718 8.925-8.925H13V4h8v8Zm-2 2h-1v5.5c0 .335-.165.5-.5.5H5.485c-.335 0-.526-.165-.526-.5V7.484c0-.335.191-.526.526-.526H11V6H5.485c-.431 0-.766.144-1.054.431A1.408 1.408 0 0 0 4 7.485V19.5c0 .431.144.712.431 1 .288.288.623.5 1.054.5H17.5c.431 0 .712-.212 1-.5.288-.288.5-.569.5-1V14Z"}),kt="0 0 25 25",St=Object.freeze(Object.defineProperty({__proto__:null,Component:jt,name:Et,set:yt,viewBox:kt},Symbol.toStringTag,{value:"Module"})),we=z("fullscreen",[]),Me=S.div(({theme:e,fullscreen:n})=>I`
      ${n&&I`
        --content-height-in-view: 100vh;
        position: fixed;
        z-index: ${e.base["z-index"].backdrop};
        inset: 0;
      `}
    `);Me.defaultProps=L;const $e=o.createContext(void 0),Mt=()=>o.useContext($e),$t=({parentJSX:e,parentElRef:n})=>{const{portalTarget:s}=te();lt(n);const{disableScroll:u,enableScroll:a}=ht();return o.useEffect(()=>(u(),a),[]),s?Qe.createPortal(t.jsx(Ve,{portalTarget:n.current??void 0,children:e}),s):null};re(o.forwardRef(function({children:n,testId:s,...u},a){const d=se(s,we),[c,f]=ue(),l=ne(f,a),[p,v]=ue(),[i,r]=o.useState(void 0),m=o.useMemo(()=>[i,()=>{r(j=>!j)}],[i]),x=He(p,!!i),y=t.jsx(Me,{"data-testid":d.root,"data-fullscreen-enabled":i?!0:void 0,...u,ref:l,fullscreen:!!i,"data-popover-id":x,children:n});return t.jsx($e.Provider,{value:m,children:i&&c?t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:v,style:{display:"none"}}),t.jsx($t,{parentJSX:y,parentElRef:l})]}):y})}),we);const Ce=z("link",["preview-popover","preview","new-tab"]),Q=S.div(({theme:e,preview:n})=>I`
    background-color: ${e.components.tooltip["background-color"]};
    z-index: ${e.base["z-index"].tooltip};

    ${n&&I`
      padding: calc(${e.base.spacing} / 4);
    `}
  `);Q.defaultProps=L;const W=S(vt)(({theme:e})=>{const n=Je(()=>Ye(e.components.tooltip["background-color"])),s=Ze(e.base["font-size"],e.base["font-scale"]);return I`
    position: relative;
    display: inline-flex;
    align-items: center;
    z-index: 1;
    padding: 0 ${e.base.spacing};
    min-height: 1.5rem;
    line-height: 1;
    color: ${n};
    font-size: ${s.xs};
    text-decoration: none;

    /* FIXME: Button selector specificity... */
    & + & {
      margin: 0;
    }

    & + &::before {
      content: '';
      position: absolute;
      inset-inline-start: 0;
      inset-block: 0;
      width: 1px; /* stylelint-disable-line unit-allowed-list */
      background-color: ${n};
      opacity: ${e.base.transparency["transparent-3"]};
    }

    &:hover,
    &:active {
      text-decoration: underline;
    }

    &:focus {
      box-shadow:
        inset 0 0 0 0.0625rem ${e.base.palette.light},
        0 0 0.125rem 0.0625rem ${e.base.palette.interactive};
    }
  `});W.defaultProps=L;const D=S.div``,ee=S(W)(({theme:e})=>I`
    padding: calc(${e.base.spacing} / 2);

    & + & {
      padding-inline-start: calc(${e.base.spacing} - ${e.base.spacing} / 4);
      padding-inline-end: calc(${e.base.spacing} / 4);
    }

    &:hover,
    &:active {
      text-decoration: none;
      ${D} span {
        text-decoration: underline;
      }
      ${D} ${V} span {
        text-decoration: none;
      }
    }

    ${D} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    ${V} {
      color: ${e.base.palette.light};
      background-color: ${e.base.colors.gray.dark};
      border-color: ${e.base.colors.gray.medium};
      inset-block-start: unset;
      margin-inline: calc(${e.base.spacing} / 4);

      &:first-of-type {
        margin-inline-start: calc(${e.base.spacing} / 2);
      }

      &:last-of-type {
        margin-inline-end: calc(${e.base.spacing} / 2);
      }
    }
  `);ee.defaultProps=L;const Ie=S(Ne)`
  &:has(> img) {
    display: inline-block;

    ${qe} {
      vertical-align: top;
    }
  }
`;Ie.defaultProps=L;Ge(St);const Ct=o.forwardRef(function({testId:n,href:s,variant:u="link",icon:a=!1,previewable:d=!1,onPreview:c,target:f,children:l,...p},v){const i=et.test(s)?void 0:s,{initialized:r}=pt(),m=Mt(),x=!!(m&&m[0]),{previewTriggerRef:y}=o.useContext(bt),j=We(),E=ne(v),[w,T]=o.useState(!1),[M,b]=o.useState("short"),[g,A]=o.useState(!1),oe=o.useRef(null),ie=ct("sm"),P=Ue(),{macintosh:Le}=Se(),U=o.useRef(!1),$=se(n,Ce),X=o.useRef({x:0,y:0}),C=o.useRef({x:0,y:0}),Te=o.useRef({get contextElement(){return E.current??void 0},getBoundingClientRect:()=>({width:0,height:0,top:C.current.y,bottom:C.current.y,left:C.current.x,right:C.current.x,x:C.current.x,y:C.current.y,toJSON(){return JSON.stringify(this)}})}),_=d&&!r&&!x;let B;try{if(i){const h=new URL(i,document.location.href);B=Ee?/^https?:$/.test(h.protocol)&&document.location.origin!==h.origin:!1}else B=!1}catch{B=!1}const q=B?"_blank":f,ae=()=>{ie&&!g&&T(!0)},Ae=()=>{ie&&!w&&!U.current&&A(!0)},N=()=>{T(!1)},J=()=>{A(!1)},Pe=()=>{U.current=!1,J()},Y=()=>{y.current=E.current,i!==void 0&&(c==null||c({href:i}))},ze=h=>{h.getModifierState("Alt")&&h.code==="KeyP"&&Y()};return o.useEffect(()=>{M==="none"&&!w&&!g&&b("short")},[M,w,g]),o.useEffect(()=>{const h=({key:O})=>{O==="Escape"&&(w||g)&&(b("none"),T(!1),A(!1))};return document.addEventListener("keydown",h),()=>{document.removeEventListener("keydown",h)}},[w,g]),t.jsxs(t.Fragment,{children:[t.jsxs(Ie,{"data-testid":$.root,href:i,variant:u,ref:E,target:q,...p,"aria-describedby":_?`${j}-preview-instructions`:void 0,onMouseEnter:d?h=>{X.current={x:h.clientX,y:h.clientY},ae()}:void 0,onMouseLeave:N,onMouseMove:h=>{X.current={x:h.clientX,y:h.clientY}},onFocus:d?()=>{Ae()}:void 0,onBlur:Pe,onKeyUp:ze,onContextMenu:()=>{U.current=!0,b("none"),J(),N()},children:[l,q==="_blank"&&t.jsx(k,{children:P("opens_in_a_new_tab")}),!a&&q==="_blank"&&t.jsx(Xe,{name:"open"})]}),_&&t.jsxs(fe,{"data-testid":$.previewPopover,show:g,placement:"top",groupId:"tooltip",showDelay:"short",hideDelay:M,target:E.current,as:Q,arrow:!0,preview:!0,portal:!0,onHide:J,onClick:h=>{h.stopPropagation()},children:[t.jsx(ee,{"data-testid":$.preview,preview:!0,type:"button",ref:oe,onClick:Y,tabIndex:"-1",children:t.jsxs(D,{children:[t.jsx("span",{children:P("preview")}),t.jsxs(pe,{container:{inline:!0,justify:"end"},children:[t.jsx(K,{keyName:"Alt"}),t.jsx(K,{keyName:"P"})]})]})}),t.jsx(ee,{"data-testid":$.newTab,forwardedAs:"a",href:i,target:"_blank",rel:"noreferrer",tabIndex:"-1",children:t.jsxs(D,{children:[t.jsx("span",{children:P("link_open_in_tab_text")}),t.jsxs(pe,{container:{inline:!0,justify:"end"},children:[t.jsx(K,{keyName:"CommandOrControl"}),t.jsx(K,{keyName:"Enter"})]})]})})]}),t.jsxs(fe,{"data-testid":$.previewPopover,show:w,placement:"top",groupId:"tooltip",showDelay:"short",hideDelay:M,target:Te.current,onMouseEnter:ae,onMouseLeave:N,as:Q,arrow:!0,portal:!0,onClick:h=>{h.stopPropagation()},onShow:()=>{var le;const h=((le=E.current)==null?void 0:le.getClientRects())??[],{x:O,y:De}=X.current,ce=Array.from(h).find(de=>De<de.bottom&&O<de.right);ce&&(C.current={x:O,y:ce.top})},children:[_&&t.jsx(W,{"data-testid":$.preview,preview:!0,type:"button",ref:oe,onClick:Y,tabIndex:"-1",children:P("preview")}),t.jsx(W,{"data-testid":$.newTab,forwardedAs:"a",href:i,target:"_blank",rel:"noreferrer",tabIndex:"-1",children:P("link_open_in_tab_text")})]}),_&&t.jsx("span",{id:`${j}-preview-instructions`,hidden:!0,children:P("preview_link_instruction",[Le?"option":"alt"])})]})}),Bt=re(Ct,Ce);export{vt as B,K,Bt as L,ut as M,Ie as S,k as V,ve as a,V as b,Se as c,Pt as d,At as e,zt as f,me as g,nt as h,_t as i,rt as j,Dt as k,mt as l,lt as m,ct as n,ht as u};
