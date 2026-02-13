"use strict";(self.webpackChunksldxcomponents=self.webpackChunksldxcomponents||[]).push([[74959911],{70:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>i,name:()=>a,set:()=>o,viewBox:()=>s});var r=n(4848);const o="budicon",a="information",i=()=>(0,r.jsx)("path",{d:"M4.37 20.63C2.122 18.386 1 15.69 1 12.5c0-3.19 1.123-5.885 3.37-8.13C6.614 2.122 9.31 1 12.5 1c3.19 0 5.885 1.123 8.13 3.37C22.878 6.614 24 9.31 24 12.5c0 3.19-1.123 5.885-3.37 8.13C18.386 22.878 15.69 24 12.5 24c-3.19 0-5.885-1.123-8.13-3.37Zm-2.49-8.182c0 2.15.582 4.12 1.791 5.866 1.164 1.79 2.73 3.09 4.701 3.94 1.971.851 4.03 1.03 6.134.627s3.895-1.388 5.418-2.91c1.478-1.478 2.463-3.314 2.91-5.418.404-2.105.224-4.12-.626-6.09-.806-1.97-2.104-3.537-3.85-4.745-1.792-1.21-3.761-1.791-5.91-1.791-2.911 0-5.373 1.03-7.433 3.045-2.06 2.06-3.09 4.567-3.134 7.477ZM13.65 5.14c.843 0 1.61.69 1.61 1.61 0 .92-.69 1.61-1.61 1.61-.843 0-1.61-.69-1.61-1.61 0-.92.69-1.61 1.61-1.61ZM12.1 19.4c-1.263 0-2.175-1.04-1.824-2.274l1.5-4.36c.14-.51.359-1.437-.132-1.437-.328 0-.728.164-1.201.491.35-1.09 1.333-1.62 2.456-1.62 1.264 0 2.176 1.04 1.825 2.274l-1.5 4.36c-.14.51-.17 1.338.322 1.338.328 0 .665-.13 1.011-.392-.35 1.09-1.333 1.62-2.456 1.62Z"}),s="0 0 25 25"},393:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(1594),o=n(712);const a=function(e,t,{target:n=document,eventOptions:a,dependencies:i=[]}={}){(0,r.useEffect)(()=>{const[r]=(0,o.A)([n]);if(r)return r.addEventListener(e,t,a),()=>{r.removeEventListener(e,t,a)}},[e,n,t,a,...i])}},405:(e,t,n)=>{n.d(t,{D2:()=>d,QS:()=>p,pT:()=>m,r3:()=>b,wE:()=>f,z5:()=>h});var r=n(1357),o=n(8267),a=n(7321),i=n(9549),s=n(9187),l=n(285),c=n(7501);const d=(0,o.Ay)(l.A)(()=>o.AH`
    border-radius: inherit;
  `);d.defaultProps=i.qn;const u=o.Ay.div(({theme:e})=>o.AH`
    &:focus-visible {
      box-shadow: ${e.components.button["focus-shadow"]};
      outline: none;
      border-radius: calc(9999 * ${e.base["border-radius"]});
    }
  `);u.defaultProps=i.qn;const m=(0,o.Ay)(u)(({theme:e,placement:t,determinate:n})=>{const a="inline"===t?"1em":"2rem",i=(0,r.J1)(e.base.palette["foreground-color"])>.5?e.base.colors.gray["extra-dark"]:e.base.colors.gray.light;return o.AH`
    position: relative;

    svg {
      display: block;
      width: ${a};
      height: ${a};

      circle {
        fill: transparent;
        stroke: ${i};
        stroke-width: 2;
        r: 45%;
        cx: 50%;
        cy: 50%;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;

        &:nth-child(2) {
          stroke: ${e.components.progress["progress-color"]};
          transition: stroke-dashoffset calc(0.5 * ${e.base.animation.speed})
            ${e.base.animation.timing.ease};

          ${!n&&o.AH`
            @keyframes LoadingRing {
              0% {
                transform: rotate(0deg);
              }

              100% {
                transform: rotate(360deg);
              }
            }
            animation: LoadingRing calc(4 * ${e.base.animation.speed}) linear infinite;
          `}
        }
      }
    }

    ${"inline"===t&&o.AH`
      display: inline-flex;
      vertical-align: top;
    `}
  `});m.defaultProps=i.qn;const p=(0,o.Ay)(u)(({theme:e,placement:t,determinate:n})=>{const a=(0,r.J1)(e.base.palette["foreground-color"])>.5?e.base.colors.gray["extra-dark"]:e.base.colors.gray.light;return o.AH`
    background-color: ${a};
    border-radius: ${e.base["border-radius"]};
    ${"local"===t?o.AH`
          width: calc(100% - 4 * ${e.base.spacing});
        `:o.AH`
          width: 100%;
        `}
    height: 0.375rem;
    min-width: 2rem;
    max-width: min(calc(100vw - 4 * ${e.base.spacing}), ${e.base["content-width"].lg});
    overflow: hidden;

    ::before {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      left: 0;
      border-radius: ${e.base["border-radius"]};
      background-color: ${e.components.progress["progress-color"]};
      ${n&&o.AH`
        transform: translateX(var(--progress, 0));
        transform-origin: 0 50%;
        transition: transform calc(0.5 * ${e.base.animation.speed})
          ${e.base.animation.timing.ease};
      `}

      ${!n&&o.AH`
        @keyframes LoadingBar {
          0% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(200%);
          }
        }
        animation: LoadingBar calc(8 * ${e.base.animation.speed}) linear infinite;
        width: 50%;
      `}
    }

    ${"inline"===t&&o.AH`
      width: 3rem;
      display: inline-block;
      position: relative;
    `}
  `});p.defaultProps=i.qn;const f=(0,o.Ay)(u)(({theme:e,placement:t})=>o.AH`
    line-height: 1;
    display: ${"inline"===t?"inline-flex":"block"};

    @keyframes LoadingEllipsis {
      0% {
        transform: scale(0);
        opacity: 0;
      }

      50% {
        transform: scale(1);
        opacity: 1;
      }

      100% {
        transform: scale(0);
        opacity: 0;
      }
    }

    > span {
      display: flex;
      justify-content: center;

      ${"inline"===t&&o.AH`
        display: inline-flex;
      `}
    }

    > span span {
      margin: 0 0.3125rem;
      background: ${e.components.progress["progress-color"]};
      border-radius: 50%;
      animation: LoadingEllipsis calc(4 * ${e.base.animation.speed}) infinite;

      ${"global"===t&&o.AH`
        width: 1.25rem;
        height: 1.25rem;
      `}

      ${("local"===t||"block"===t)&&o.AH`
        width: 0.625rem;
        height: 0.625rem;
      `}

      ${"inline"===t&&o.AH`
        width: 0.1875rem;
        height: 0.1875rem;
        margin: 0 0.1875rem;
        animation-duration: calc(4 * ${e.base.animation.speed});
      `}

      &:nth-child(2) {
        animation-delay: 0.1667s;
      }

      &:nth-child(3) {
        animation-delay: ${.3334}s;
      }
    }
  `);f.defaultProps=i.qn;const h=o.Ay.span(({theme:e})=>{const t=(0,s.A)(()=>(0,r.B3)((0,a.W0)(e.base.palette["primary-background"]),e.base.transparency["transparent-3"])),n=(0,a.Vr)(e.base["font-size"],e.base["font-scale"]);return o.AH`
    font-size: ${n[e.components.label["font-size"]]};
    font-weight: ${e.base["font-weight"]["semi-bold"]};
    color: ${t};
  `});h.defaultProps=i.qn;const b=(0,o.Ay)(c.A)(({theme:e,placement:t})=>o.AH`
    ${"inline"!==t&&o.AH`
      width: 100%;
    `}

    ${"block"===t&&o.AH`
      margin-block: calc(2 * ${e.base.spacing});
    `}
  `);b.defaultProps=i.qn},427:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(1594),o=n(9839);let a;const i=()=>a||(a=o.A?navigator.userAgent.match(/(Windows|Macintosh)/)?.[0]||"Other":"",a),s=()=>{const[e,t]=(0,r.useState)(i);return(0,r.useEffect)(()=>{e||t(i())},[]),{windows:"Windows"===e,macintosh:"Macintosh"===e,name:e}}},453:(e,t,n)=>{n.d(t,{A:()=>Q});var r={};n.r(r),n.d(r,{Component:()=>M,name:()=>D,set:()=>L,viewBox:()=>P});var o=n(4848),a=n(1594),i=n(8267),s=n(371),l=n(5636),c=n(331),d=n(9549),u=(n(8347),n(4680));const m={update:()=>{},dismiss:()=>{},activate:()=>{},minimize:()=>{},maximize:()=>{},dock:()=>{},unmount:()=>{}},p={alert:!1,dismissible:!0,minimizable:!1,maximizable:!1,dockable:!1,defaultMinimized:!1,unmountWhenMinimized:!0,state:"open",top:!1,initialized:!1,...m},f=(0,a.createContext)(p),h=(0,a.createContext)({create:()=>m,ModalContext:f,initialized:!1}),b=()=>{const{ModalContext:e}=(()=>{const e=u.A?window.cosmos.modalManagerContext??h:h;return(0,a.useContext)(e)})();return(0,a.useContext)(e)};var g=n(3351),v=n(4853),A=n(5661),y=n(3085),w=n(427),x=n(8579),$=n(9187),k=n(5253),E=n(127),j=n(4869),I=n(7321),C=n(1294),H=n(177),S=n(7501),R=n(6765);const L="budicon",D="open",M=()=>(0,o.jsx)("path",{d:"M21 12h-.959V5.676L11.116 14.6l-.718-.718 8.925-8.925H13V4h8v8Zm-2 2h-1v5.5c0 .335-.165.5-.5.5H5.485c-.335 0-.526-.165-.526-.5V7.484c0-.335.191-.526.526-.526H11V6H5.485c-.431 0-.766.144-1.054.431A1.408 1.408 0 0 0 4 7.485V19.5c0 .431.144.712.431 1 .288.288.623.5 1.054.5H17.5c.431 0 .712-.212 1-.5.288-.288.5-.569.5-1V14Z"}),P="0 0 25 25";var q=n(7491),T=n(8249);const z=(0,n(8044).A)("link",["preview-popover","preview","new-tab"]),F=i.Ay.div(({theme:e,preview:t})=>i.AH`
    background-color: ${e.components.tooltip["background-color"]};
    z-index: ${e.base["z-index"].tooltip};

    ${t&&i.AH`
      padding: calc(${e.base.spacing} / 4);
    `}
  `);F.defaultProps=d.qn;const _=(0,i.Ay)(c.A)(({theme:e})=>{const t=(0,$.A)(()=>(0,I.W0)(e.components.tooltip["background-color"])),n=(0,I.Vr)(e.base["font-size"],e.base["font-scale"]);return i.AH`
    position: relative;
    display: inline-flex;
    align-items: center;
    z-index: 1;
    padding: 0 ${e.base.spacing};
    min-height: 1.5rem;
    line-height: 1;
    color: ${t};
    font-size: ${n.xs};
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
      background-color: ${t};
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
  `});_.defaultProps=d.qn;const O=i.Ay.div``,V=(0,i.Ay)(_)(({theme:e})=>i.AH`
    padding: calc(${e.base.spacing} / 2);

    & + & {
      padding-inline-start: calc(${e.base.spacing} - ${e.base.spacing} / 4);
      padding-inline-end: calc(${e.base.spacing} / 4);
    }

    &:hover,
    &:active {
      text-decoration: none;
      ${O} span {
        text-decoration: underline;
      }
      ${O} ${H.T} span {
        text-decoration: none;
      }
    }

    ${O} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    ${H.T} {
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
  `);V.defaultProps=d.qn;const B=(0,i.Ay)(s.Ay)`
  &:has(> img) {
    display: inline-block;

    ${R.vE} {
      vertical-align: top;
    }
  }
`;B.defaultProps=d.qn,(0,R.pU)(r);const N=(0,a.forwardRef)(function({testId:e,href:t,variant:n="link",icon:r=!1,previewable:i=!1,onPreview:s,target:c,children:d,...u},m){const p=k.A.test(t)?void 0:t,{initialized:f}=b(),h=(0,T.gP)(),$=!(!h||!h[0]),{previewTriggerRef:j}=(0,a.useContext)(C.A),I=(0,g.A)(),L=(0,v.A)(m),[D,M]=(0,a.useState)(!1),[P,N]=(0,a.useState)("short"),[Z,W]=(0,a.useState)(!1),U=(0,a.useRef)(null),G=(0,A.A)("sm"),K=(0,y.A)(),{macintosh:J}=(0,w.A)(),X=(0,a.useRef)(!1),Y=(0,x.A)(e,z),Q=(0,a.useRef)({x:0,y:0}),ee=(0,a.useRef)({x:0,y:0}),te=(0,a.useRef)({get contextElement(){return L.current??void 0},getBoundingClientRect:()=>({width:0,height:0,top:ee.current.y,bottom:ee.current.y,left:ee.current.x,right:ee.current.x,x:ee.current.x,y:ee.current.y,toJSON(){return JSON.stringify(this)}})}),ne=i&&!f&&!$;let re;try{if(p){const e=new URL(p,document.location.href);re=!!E.A&&/^https?:$/.test(e.protocol)&&document.location.origin!==e.origin}else re=!1}catch{re=!1}const oe=re?"_blank":c,ae=()=>{G&&!Z&&M(!0)},ie=()=>{M(!1)},se=()=>{W(!1)},le=()=>{j.current=L.current,void 0!==p&&s?.({href:p})};return(0,a.useEffect)(()=>{"none"!==P||D||Z||N("short")},[P,D,Z]),(0,a.useEffect)(()=>{const e=({key:e})=>{"Escape"===e&&(D||Z)&&(N("none"),M(!1),W(!1))};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[D,Z]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(B,{"data-testid":Y.root,href:p,variant:n,ref:L,target:oe,...u,"aria-describedby":ne?`${I}-preview-instructions`:void 0,onMouseEnter:i?e=>{Q.current={x:e.clientX,y:e.clientY},ae()}:void 0,onMouseLeave:ie,onMouseMove:e=>{Q.current={x:e.clientX,y:e.clientY}},onFocus:i?()=>{!G||D||X.current||W(!0)}:void 0,onBlur:()=>{X.current=!1,se()},onKeyUp:e=>{e.getModifierState("Alt")&&"KeyP"===e.code&&le()},onContextMenu:()=>{X.current=!0,N("none"),se(),ie()},children:[d,"_blank"===oe&&(0,o.jsx)(q.A,{children:K("opens_in_a_new_tab")}),!r&&"_blank"===oe&&(0,o.jsx)(R.Ay,{name:"open"})]}),ne&&(0,o.jsxs)(l.A,{"data-testid":Y.previewPopover,show:Z,placement:"top",groupId:"tooltip",showDelay:"short",hideDelay:P,target:L.current,as:F,arrow:!0,preview:!0,portal:!0,onHide:se,onClick:e=>{e.stopPropagation()},children:[(0,o.jsx)(V,{"data-testid":Y.preview,preview:!0,type:"button",ref:U,onClick:le,tabIndex:"-1",children:(0,o.jsxs)(O,{children:[(0,o.jsx)("span",{children:K("preview")}),(0,o.jsxs)(S.A,{container:{inline:!0,justify:"end"},children:[(0,o.jsx)(H.A,{keyName:"Alt"}),(0,o.jsx)(H.A,{keyName:"P"})]})]})}),(0,o.jsx)(V,{"data-testid":Y.newTab,forwardedAs:"a",href:p,target:"_blank",rel:"noreferrer",tabIndex:"-1",children:(0,o.jsxs)(O,{children:[(0,o.jsx)("span",{children:K("link_open_in_tab_text")}),(0,o.jsxs)(S.A,{container:{inline:!0,justify:"end"},children:[(0,o.jsx)(H.A,{keyName:"CommandOrControl"}),(0,o.jsx)(H.A,{keyName:"Enter"})]})]})})]}),(0,o.jsxs)(l.A,{"data-testid":Y.previewPopover,show:D,placement:"top",groupId:"tooltip",showDelay:"short",hideDelay:P,target:te.current,onMouseEnter:ae,onMouseLeave:ie,as:F,arrow:!0,portal:!0,onClick:e=>{e.stopPropagation()},onShow:()=>{const e=L.current?.getClientRects()??[],{x:t,y:n}=Q.current,r=Array.from(e).find(e=>n<e.bottom&&t<e.right);r&&(ee.current={x:t,y:r.top})},children:[ne&&(0,o.jsx)(_,{"data-testid":Y.preview,preview:!0,type:"button",ref:U,onClick:le,tabIndex:"-1",children:K("preview")}),(0,o.jsx)(_,{"data-testid":Y.newTab,forwardedAs:"a",href:p,target:"_blank",rel:"noreferrer",tabIndex:"-1",children:K("link_open_in_tab_text")})]}),ne&&(0,o.jsx)("span",{id:`${I}-preview-instructions`,hidden:!0,children:K("preview_link_instruction",[J?"option":"alt"])})]})}),Z=(0,j.A)(N,z);var W=n(7583);const U=i.Ay.img`
  max-width: 100%;
`,G=(0,a.forwardRef)(function(e,t){const{alt:n,...r}=e;return(0,o.jsx)(U,{...r,alt:n,ref:t})});var K=n(768);const J=i.Ay.div(({theme:e})=>i.AH`
    height: ${e.base["content-width"].xs};
    width: ${e.base["content-width"].xs};
    border: 0.0625rem solid ${e.base.palette["border-line"]};
    border-radius: calc(${e.base["border-radius"]} / 2);
    text-align: center;
  `);J.defaultProps=d.qn;const X=(0,a.forwardRef)(function({value:e,label:t=e,...n},r){const[i,s]=(0,a.useState)(""),l=(0,y.A)(),c=(0,a.useRef)(!1);return(0,a.useEffect)(()=>(c.current=!0,()=>{c.current=!1}),[]),(0,a.useEffect)(()=>{W.dY(e).then(e=>{c.current&&s(e)}).catch(()=>{s("")})},[e]),i?(0,o.jsx)(G,{...n,ref:r,src:i,alt:t}):(0,o.jsx)(S.A,{...n,ref:r,container:{direction:"column",alignItems:"center",justify:"center",gap:1,pad:2},as:J,children:(0,o.jsx)(K.A,{message:l("qr_code_not_available")})})});var Y=n(9061);const Q=(0,a.forwardRef)(function({value:e,displayText:t,variant:n="link",...r},a){const i=e?t||e.split("//").map(e=>e.replace(/:/giu,"$&").replace(/[/~.,\\-_?#%]/giu,"$&").replace(/[=&]/giu,"$&")).join("//").split("").reduce((e,t)=>(e.push(t,(0,o.jsx)("wbr",{},e.length)),e),[]):(0,o.jsx)(Y.A,{});return"text"!==n&&e?"qrcode"===n?(0,o.jsx)(X,{ref:a,...r,value:e,label:t}):(0,o.jsx)(Z,{ref:a,...r,href:e,children:i}):(0,o.jsx)("span",{ref:a,...r,children:i})})},574:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(1594),o=n(9749),a=n(7666),i=n(393);const s=(e,t=!0,n=[],s=!0)=>{const l=(0,r.useCallback)(t=>{if(e?.current&&"Tab"===t.key){const n=(0,a.A)(e),{0:r,[n.length-1]:i}=n,l=(0,o.A)();if((l===e.current||!e.current.contains(l)||e.current.contains(l)&&!n.includes(l))&&s)if(t.preventDefault(),l){const n=(0,a.A)(e,{includeActiveEl:!0}),o=n.findIndex(e=>e===l);-1!==o?t.shiftKey?n[(o-1+n.length)%n.length].focus():n[(o+1)%n.length].focus():t.shiftKey?i?.focus():r?.focus()}else t.shiftKey?i?.focus():r?.focus();else t.shiftKey&&l===r?(t.preventDefault(),i?.focus()):t.shiftKey||l!==i||(t.preventDefault(),r?.focus())}},n);(0,i.A)("keydown",l,{target:t?void 0:e})}},2477:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(1594);const o=(e=null)=>(0,r.useState)(e)},2558:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(1594);const o=(e,t)=>{const n=(0,r.useRef)(!1);(0,r.useEffect)(()=>{if(n.current)return e();n.current=!0},t)}},2884:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(1594),o=(n(8347),n(4680));const a=(0,r.createContext)({announce:()=>{},announcePolite:()=>{},announceAssertive:()=>{},initialized:!1}),i=()=>{const e=o.A?window.cosmos.liveLogContext??a:a;return(0,r.useContext)(e)}},3085:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(1594),o=n(6824),a=n(9463);const i=()=>{const{translations:e,locale:t}=(0,a.A)();return(0,r.useMemo)(()=>(0,o.A)(e,t),[e,t])}},3113:(e,t,n)=>{n.d(t,{A:()=>u,G:()=>d});var r=n(4848),o=n(1594),a=n(8267),i=n(1357),s=n(9549),l=n(9187),c=n(7321);const d=a.Ay.label(({theme:e,labelHidden:t})=>{const{"foreground-color":n}=e.components.label,r=(0,l.A)(()=>t?i.Ic:(0,i.B3)((0,c.W0)(e.base.palette["primary-background"]),e.base.transparency["transparent-3"])),o=(0,c.Vr)(e.base["font-size"],e.base["font-scale"]);return t?i.Ic:a.AH`
          max-width: max-content;
          font-size: ${o[e.components.label["font-size"]]};
          font-weight: ${e.components.label["font-weight"]};
          color: ${"auto"===n?r:n};
        `});d.defaultProps=s.qn;const u=(0,o.forwardRef)(function({children:e,labelHidden:t=!1,htmlFor:n,...o},a){return(0,r.jsx)(d,{ref:a,labelHidden:t,htmlFor:""===n?void 0:n,...o,children:e})})},3339:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>i,name:()=>a,set:()=>o,viewBox:()=>s});var r=n(4848);const o="budicon",a="diamond-minus",i=()=>(0,r.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M23.219 13.178a.96.96 0 0 0 0-1.356L13.179 1.78a.96.96 0 0 0-1.357 0L1.78 11.821a.96.96 0 0 0 0 1.357l10.04 10.041a.96.96 0 0 0 1.357 0l10.041-10.04ZM18 11.5H7v2h11v-2Z"}),s="0 0 25 25"},3351:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(1594),o=n(4685);const a=()=>(0,r.useRef)((0,o.A)()).current},3456:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(9463);const o=()=>(0,r.A)().themeMachine.theme},3700:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(1594);const o=e=>{const t=(0,r.useRef)();return(0,r.useLayoutEffect)(()=>{t.current=e},[e]),t.current}},3885:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(4848),o=n(1594),a=n(8267),i=n(9549),s=n(5636),l=n(3351),c=n(4853),d=n(8579),u=n(3456),m=n(7321),p=n(2365),f=n(9511),h=n(9749),b=n(4869),g=n(7902);const v=(0,n(8044).A)("tooltip",[]),A=a.Ay.div(({theme:e})=>{const t=(0,m.Vr)(e.base["font-size"],e.base["font-scale"]);return a.AH`
    background-color: ${e.components.tooltip["background-color"]};
    color: ${e.components.tooltip["foreground-color"]};
    font-size: ${t.xxs};
    max-width: 40ch;
    padding: ${e.base.spacing};
    white-space: pre-line;
    word-break: break-word;
  `});A.defaultProps=i.qn;const y=(0,o.forwardRef)(function({testId:e,children:t,target:n,ignoredElements:a=[],showDelay:i="short",hideDelay:b="long",placement:y="top",describeTarget:w=!0,smart:x,groupId:$="tooltip",...k},E){const j=(0,l.A)(),[I,C]=(0,o.useState)(!1),[H,S]=(0,o.useState)(!1),R=(0,c.A)(E),L=(0,o.useRef)(null),D=(0,d.A)(e,v),M="string"==typeof t||Array.isArray(t)&&t.every(e=>"string"==typeof e),P=(0,o.useCallback)(({target:e})=>{L.current=e,e!==R.current&&e!==n&&C(!1)},[n]);(0,o.useEffect)(()=>{if(!n)return;const e=()=>{const e=t=>{if((0,p.A)(t).some(Boolean)&&!["absolute","fixed"].includes(window.getComputedStyle(t).position))return!0;for(const n of t.children)if(e(n))return!0;return!1};C(!x||e(n))},t=()=>{e()},r=()=>{L.current&&L.current===R.current||C(!1),L.current=null},o=()=>{a.some(e=>e?.matches(":hover"))||f.A.primary||e()},i=()=>{(0,h.A)()!==n&&C(!1)},s=({key:e})=>{"Escape"===e&&I&&(S(!0),C(!1))};return document.addEventListener("keydown",s),document.addEventListener("mousedown",P),n.addEventListener("focusin",t),n.addEventListener("focusout",r),n.addEventListener("mouseenter",o),n.addEventListener("mouseleave",i),()=>{document.removeEventListener("keydown",s),document.removeEventListener("mousedown",P),n.removeEventListener("focusin",t),n.removeEventListener("focusout",r),n.removeEventListener("mouseenter",o),n.removeEventListener("mouseleave",i)}},[n,P,x,I]),(0,o.useEffect)(()=>{if(n&&w&&I){const e=n.getAttribute("aria-describedby");n.setAttribute("aria-describedby",e?`${e} ${j}`:j)}else if(n){const e=n.getAttribute("aria-describedby");if(e)if(e===j)n.removeAttribute("aria-describedby");else{const t=e.replace(new RegExp(`(?:^|\\s+)${j}`),"");n.setAttribute("aria-describedby",t)}}},[w,n,I]),(0,o.useEffect)(()=>{!I&&H&&S(!1)},[I,H]);const q=(0,u.A)(),T={base:{palette:{"primary-background":q.components.tooltip["background-color"],"foreground-color":q.components.tooltip["foreground-color"],interactive:(0,m.ho)(q.base.palette.interactive,q.components.tooltip["background-color"])}}};return(0,r.jsx)(g.A,{theme:T,children:(0,r.jsx)(s.A,{"data-testid":D.root,id:j,groupId:$,...k,show:I,showDelay:H?"none":i,hideDelay:H?"none":b,onMouseOver:()=>{C(!0)},onMouseOut:()=>{C(!1)},strategy:"fixed",as:A,role:M?"tooltip":"dialog",target:n,arrow:!0,placement:y,onMouseDown:P,hideOnTargetHidden:!0,ref:R,children:t})})}),w=(0,b.A)(y,v)},4519:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>i,name:()=>a,set:()=>o,viewBox:()=>s});var r=n(4848);const o="budicon",a="arrow-micro-up-down",i=()=>(0,r.jsx)("path",{d:"m12.402 5 4.597 6H8l4.402-6Zm.195 15L8 14h9l-4.403 6Z"}),s="0 0 25 25"},4853:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(1594);const o=(...e)=>{const t=(0,r.useRef)(null),[n]=(0,r.useState)(()=>Object.defineProperty({current:null},"current",{configurable:!0,enumerable:!0,get:()=>t.current,set:n=>{t.current=n,e.forEach(e=>{e&&("function"==typeof e?e(t.current):e.current=t.current)})}}));return n}},4948:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(1594),o=n(6629),a=n(2365),i=n(9463);const s=(e=":root")=>{const t=(0,r.useRef)(0),n=(0,r.useRef)(null),{styleSheetTarget:s}=(0,i.A)(),l=(0,r.useCallback)(()=>{n.current?.remove(),n.current=null},[]),c=(0,r.useCallback)(()=>{if(n.current)return;const r=document.querySelector(e);if(!r)return;const[o,i]=(0,a.A)(r);(o||i)&&(n.current=document.createElement("style"),n.current.nonce=window.__webpack_nonce__,n.current.textContent=`\n      ${e} {\n        ${i?`padding-inline-end: ${t.current}px !important`:""};\n        ${o?`padding-block-end: ${t.current}px !important`:""};\n        overflow: hidden !important;\n      }\n    `,(s??document.head).append(n.current))},[e]);return(0,r.useLayoutEffect)(()=>(t.current=(0,o.A)(),l),[l]),{enableScroll:l,disableScroll:c}}},5190:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(1594),o=n(393);const a=(e,t=document,n=[])=>{const a=(0,r.useCallback)(t=>{"Escape"===t.key&&e(t)},[e,...n]);(0,o.A)("keydown",a,{target:t})}},5285:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>i,name:()=>a,set:()=>o,viewBox:()=>s});var r=n(4848);const o="budicon",a="drag",i=()=>(0,r.jsx)("path",{d:"M9.5 5.136V3.5h1.708v1.636H9.5Zm0 4.111V7.611h1.708v1.636H9.5Zm0 4.071v-1.636h1.708v1.636H9.5Zm0 4.11v-1.635h1.708v1.636H9.5Zm0 4.072v-1.636h1.708V21.5H9.5Zm4.292-16.364V3.5H15.5v1.636h-1.708Zm0 4.111V7.611H15.5v1.636h-1.708Zm0 4.071v-1.636H15.5v1.636h-1.708Zm0 4.11v-1.635H15.5v1.636h-1.708Zm0 4.072v-1.636H15.5V21.5h-1.708Z"}),s="0 0 25 25"},5636:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(4848),o=n(1594),a=n(5206),i=n(626),s=n(9463),l=n(2477),c=n(4853),d=n(3351),u=n(2558),m=n(6416),p=n(393),f=n(680),h=n(4680);const b=(0,o.createContext)({checkActive:()=>!0,setActive:()=>{},popovers:{}});var g=n(8889),v=n(127),A=n(6629),y=n(2365);Object.freeze({name:"sameWidth",enabled:!0,phase:"beforeWrite",fn({state:e}){e.styles.popper.width=`${e.rects.reference.width}px`},requires:["computeStyles"]});const w=v.A?(0,A.A)():0,x=(Object.freeze({name:"fitToContent",enabled:!0,phase:"beforeWrite",requires:["computeStyles","offset"],fn({state:e}){e.styles.popper.width="fit-content",e.elements.popper.style.maxWidth="60ch",e.elements.popper.style.minWidth=`${e.rects.reference.width}px`}}),Object.freeze({name:"placeAndContain",enabled:!0,phase:"beforeWrite",requires:["computeStyles","offset"],fn:({state:e})=>{const[t,n]=e.placement.split("-"),r={top:0,bottom:0,right:0,left:0},o=e.orderedModifiers.find(({name:e})=>"preventOverflow"===e)?.options?.padding;"number"==typeof o?(r.top=o,r.bottom=o,r.right=o,r.left=o):o&&(r.top=o.top??r.top,r.bottom=o.bottom??r.bottom,r.right=o.right??r.right,r.left=o.left??r.left);const a=document.documentElement.clientWidth,i=document.documentElement.clientHeight,s=e.rects.reference,l=s.x,c=l+s.width,d=s.y,u=d+s.height,m=(l+c)/2<a/2,p=(d+u)/2<i/2,f=e.modifiersData.offset?.[e.placement]?.x??0,h=e.modifiersData.offset?.[e.placement]?.y??0;let b=null,g=null;const v=[...e.elements.popper.children].flatMap(e=>{const t=e.querySelectorAll("[data-popover-scroll-el]");return t.length>0?[...t]:e}).reduce((t,n)=>n===e.elements.arrow?t:(0,y.A)(n)[0]?t+n.scrollHeight+w:t+n.scrollHeight,0),A=Math.max(e.elements.popper.scrollHeight,v),x=Math.max(e.elements.popper.scrollWidth,...Array.from(e.elements.popper.children).map(t=>t===e.elements.arrow?-1/0:(0,y.A)(t)[1]?t.scrollWidth+w:t.scrollWidth));let $=t;"bottom"===t?(g=i-u-h-r.bottom,u+h+A+r.bottom>i&&($=p?"bottom":"top")):"top"===t?(g=d+h-r.top,d+h-A+r.top<0&&($=p?"bottom":"top")):"left"===t?(b=l+f-r.left,l+f-x+r.left<0&&($=m?"right":"left")):"right"===t&&(b=a-c-f-r.right,c+f+x+r.right>a&&($=m?"right":"left")),"left"!==$&&"right"!==$||(g=i-r.top-r.bottom),e.elements.popper.style.maxHeight=`${g}px`,e.elements.popper.style.maxWidth=null!==b?`${b}px`:"",$=`${$}${n?`-${n}`:""}`,e.placement!==$&&(e.placement=$,e.reset=!0)}})),$={none:0,short:500,long:1e3},k=(0,o.forwardRef)(function({show:e=!0,portal:t=!0,target:n,placement:v="bottom",strategy:A="fixed",style:y,modifiers:w=[],arrow:k=!1,groupId:E,showDelay:j="none",hideDelay:I="none",hideOnTargetHidden:C=!1,children:H,onHide:S,onShow:R,...L},D){const{portalTarget:M}=(0,s.A)(),{checkActive:P,setActive:q,popovers:T}=(0,o.useContext)(b),[z,F]=(0,l.A)(),_=(0,c.A)(D,F),O=(0,o.useRef)(null),V=(0,o.useRef)(),B=(0,o.useRef)(null),[N,Z]=(0,o.useState)(e),W=(0,o.useRef)(),U=(0,d.A)(),G=n instanceof Element?n:n?.contextElement,K="boolean"==typeof t?M:t,J=(0,o.useMemo)(()=>{const e=!!w.slice().reverse().find(e=>"flip"===e.name&&void 0!==e.enabled)?.enabled;return[{name:"computeStyles",options:{gpuAcceleration:!1}},{name:"offset",options:{offset:[0,k?5.5:2]}},{name:"hide",enabled:C},{name:"arrow",enabled:k,options:{element:O.current,padding:7}},{name:"preventOverflow",options:{tether:!w.find(e=>"sameWidth"===e.name||"fitToContent"),padding:16}},{...x,enabled:!e},...w]},[k,C,w]),X=(0,o.useMemo)(()=>{const e=[...J].reverse().find(e=>"offset"===e.name&&!1!==e.enabled);return Array.isArray(e?.options?.offset)?e?.options?.offset[1]??0:0},[J]),{styles:Y,attributes:Q,forceUpdate:ee}=(0,i.E)(n,z,{placement:v,strategy:A,modifiers:J});ee&&(V.current=ee);const[te]=(0,o.useState)(()=>new AbortController),[ne]=(0,o.useState)(()=>new WeakSet),[re]=(0,o.useState)(()=>new ResizeObserver(e=>{let t=!1;for(const{target:n}of e)ne.has(n)?t||(t=!0,te.signal.aborted||V.current?.()):ne.add(n)}));(0,o.useEffect)(()=>()=>{te.abort(),re.disconnect()},[]),(0,o.useEffect)(()=>{if(z)return re.observe(z),()=>{re.unobserve(z)}},[z]),(0,o.useEffect)(()=>{if(G)return re.observe(G),()=>{re.unobserve(G)}},[G]),(0,o.useLayoutEffect)(()=>{B.current=G?(0,f.A)(G,document.documentElement):null},[G]),(0,o.useEffect)(()=>{if(!N||!G)return;const e=new AbortController;let t;e.signal.addEventListener("aborted",()=>{cancelAnimationFrame(t)});const n=()=>{if(B.current){const e=(0,f.A)(G,document.documentElement);B.current.x===e.x&&B.current.y===e.y||(B.current=e,V.current?.())}e.signal.aborted||(t=requestAnimationFrame(n))};return t=requestAnimationFrame(n),()=>{e.abort()}},[N,G]),(0,o.useEffect)(()=>{E&&e&&q(U,E),h.A?(W.current&&clearTimeout(W.current),W.current=window.setTimeout(()=>{Z(e),e&&V.current?.()},$[e?j:I])):(Z(e),e&&V.current?.())},[e]),(0,o.useEffect)(()=>()=>clearTimeout(W.current),[]),(0,u.A)(()=>{N?R?.():S?.()},[N]),(0,o.useEffect)(()=>{E&&T[E]&&T[E]!==U&&Z(!1)},[E?T[E]:void 0]);const oe=(0,m.A)(G,!!t),ae=(0,o.useCallback)(e=>{if(G&&t){const t=new Event(e.type.startsWith("popover:")?e.type:`popover:${e.type}`,{bubbles:!0,cancelable:!0});G.dispatchEvent(t)}},[G,t]);(0,p.A)("focusout",ae,{target:_}),(0,p.A)("popover:focusout",ae,{target:_}),(0,p.A)("focusin",ae,{target:_}),(0,p.A)("popover:focusin",ae,{target:_});const ie=(0,r.jsxs)(g.l,{...L,"data-popover-id":oe,portal:!(!t||!K),offset:X,ref:_,style:{...y,...Y.popper},...Q.popper,children:[k&&(0,r.jsx)(g.s,{ref:O,style:{...Y.arrow}}),H]});return!n||!N||E&&!P(U,E)?null:t&&K?(0,a.createPortal)(ie,K):ie})},5661:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(1594),o=n(4680),a=n(924),i=n(127),s=n(3418);const l=i.A?(0,s.A)():1;var c=n(3456);const d=o.A&&window.getComputedStyle(document.documentElement).fontSize||"16px",u=(e,{breakpointRef:t,defaultValue:n=!1,themeProp:i="breakpoints"}={})=>{const{base:{breakpoints:s,"content-width":u}}=(0,c.A)(),m="content-width"===i?u[e]:s[e],[p,f]=(0,r.useState)(o.A?window.matchMedia(`(min-width: ${m})`).matches:!!n),h=l,b=(0,r.useCallback)(e=>{f(e.matches)},[]);return(0,r.useLayoutEffect)(()=>{if(t&&t.current){const e=(0,a.A)(e=>{if(!t.current?.checkVisibility())return;const n=e.some(({target:e,contentRect:n})=>{if(e!==t.current)return;const r="breakpoints"===i?parseFloat(d):h;return n.width>=parseFloat(m)*r});f(n)},100),n=new ResizeObserver(e);return n.observe(t.current),()=>{n.disconnect()}}if(o.A){const e=window.matchMedia(`(min-width: ${m})`),t="addEventListener"in e,n=(0,a.A)(()=>{f(window.innerWidth>=parseInt(m,10))},100);return t?(e.addEventListener("change",b),f(e.matches)):(window.addEventListener("resize",n),f(window.innerWidth>=parseInt(m,10))),()=>{t?e.removeEventListener("change",b):window.removeEventListener("resize",n)}}},[t?.current]),p}},6405:(e,t,n)=>{n.d(t,{fl:()=>j});var r=n(4848),o=n(1594),a=n(8267),i=n(1357),s=n(8770),l=n(1301),c=n(9549),d=n(9187),u=n(9749),m=n(9576),p=n(4869),f=n(7940),h=n(3351),b=n(3085),g=n(8579),v=n(4853),A=n(3113),y=n(7321),w=n(1269),x=n(8044),$=n(8);const k=(0,x.A)("radio-check",["control",...$.Y]),E=a.Ay.div(e=>{const{theme:{base:{spacing:t},components:{"form-field":n,"radio-check":{size:r,"touch-size":o,"background-color":i,"border-color":s,"border-width":l}}},status:c}=e;let d=s;return"error"!==c&&"warning"!==c||(d=n[c]["status-color"]),a.AH`
      display: flex;
      flex-shrink: 0;
      position: relative;
      width: ${r};
      height: ${r};
      margin-inline-end: calc(0.5 * ${t});
      border: ${l} solid ${d};
      background-color: ${i};

      @media (pointer: coarse) {
        width: ${o};
        height: ${o};
      }

      &::after {
        content: '';
        display: none;
      }
    `});E.defaultProps=c.qn;const j=a.Ay.input(e=>{const{disabled:t,theme:{base:{"border-radius":n},components:{"form-control":{":focus":{"box-shadow":r,"border-color":o},":read-only":{"background-color":s}},"radio-check":{size:l,":checked":{"background-color":c,"border-color":u}},checkbox:{"border-radius":m},"radio-button":{"border-radius":p}}}}=e,h=e.readOnly?s:c,b=(0,d.A)(()=>(0,y.W0)(h)),g=`+ ${A.G} ${E}`,{ltr:v}=(0,f.A)();return a.AH`
    ${i.Ic}
    margin: 0;

    /* Sets rect size for JAWS focus outline */
    width: ${l};
    height: ${l};

    ${!t&&a.AH`
      &:focus ${g} {
        box-shadow: ${r};
        border-color: ${o};
      }
    `}
    &:checked
      ${g},
      &:checked:disabled
      ${g},
      &[type='checkbox']:indeterminate
      ${g},
      &[type='checkbox']:indeterminate:disabled
      ${g} {
      border-color: ${e.readOnly?"inherit":u};
      background-color: ${h};

      &::after {
        display: block;
      }
    }

    &[type='radio'] ${g}, &[type='radio'] ${g}::after {
      border-radius: ${p};
    }

    &[type='radio'] ${g}::after {
      content: '';
      position: absolute;
      inset: 0;
      margin: auto;
      width: calc(${l} * 0.3);
      height: calc(${l} * 0.3);
      border-radius: ${p};
      border: calc(${l} * 0.2) solid ${b};
    }

    &[type='checkbox'] ${g} {
      border-radius: min(calc(${n} * ${m}), 0.25rem);
    }

    &[type='checkbox']:not(:indeterminate) ${g} {
      &::after {
        width: 40%;
        height: 75%;
        ${v?a.AH`
              transform: rotate(45deg) translate(50%, -30%);
            `:a.AH`
              transform: rotate(45deg) translate(-50%, 30%);
            `}
        border-right: 0.15em solid ${b};
        border-bottom: 0.15em solid ${b};
      }
    }

    &[type='checkbox']:indeterminate ${g} {
      display: flex;

      &::after {
        width: 90%;
        height: 0.15em;
        margin: auto;
        background-color: ${b};
      }
    }
  `});j.defaultProps=c.qn;const I=a.Ay.div(e=>{const{disabled:t,readOnly:n,theme:{base:r,components:{"radio-check":{label:{color:o,"font-weight":i}},"form-control":{":hover":{"border-color":l}}}}}=e,c=(0,y.Vr)(r["font-size"],r["font-scale"]);return a.AH`
      > ${A.G} {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-weight: ${i};
        word-break: break-word;
        font-size: ${c.s};
        color: ${o};
        margin: 0;
        min-height: ${r["hit-area"]["mouse-min"]};

        @media (pointer: coarse) {
          min-height: ${r["hit-area"]["finger-min"]};
        }
      }

      > ${s.GW} {
        margin: 0;
        padding-inline-start: calc(${r.spacing} / 4);
      }

      ${!(t||n)&&a.AH`
        &:not(:focus-within) > ${A.G}:hover ${E} {
          border-color: ${l};
        }
      `}
    `});I.defaultProps=c.qn;const C=a.Ay.label(({disabled:e,readOnly:t,status:n,theme:{base:{palette:r,shadow:o,spacing:i},components:{card:l,"form-field":c,"radio-check":{label:d},"form-control":{":hover":{"border-color":u}}}}})=>{const m="error"===n?c.error["status-color"]:r["border-line"];return a.AH`
      min-width: min-content;
      cursor: pointer;
      background-color: ${l.background};
      border-radius: ${l["border-radius"]};
      border: 0.0625rem solid ${m};
      padding: ${i};

      ${e&&a.AH`
        cursor: not-allowed;
      `}
      ${!(e||t)&&a.AH`
        :hover:not(:focus-within) {
          border-color: ${u};

          ${A.G} ${E} {
            border-color: ${u};
          }
        }

        :focus-within {
          box-shadow: ${o.focus};
          border-color: transparent;
        }
      `}
        > ${A.G} {
        display: flex;
        align-items: center;
        color: ${d.color};
        font-weight: ${d["font-weight"]};
        margin: 0;
      }

      > ${s.GW} {
        margin: 0;
        padding-inline-start: calc(${i} / 4);
      }
    `});C.defaultProps=c.qn;const H=(0,o.forwardRef)(function(e,t){const n=(0,h.A)(),a=(0,b.A)(),{testId:i,type:c,id:d=n,label:p,required:f=!1,disabled:A=!1,readOnly:y=!1,indeterminate:x=!1,checked:$,defaultChecked:H,variant:S="simple",onClick:R,onKeyDown:L,onChange:D,status:M,info:P,additionalInfo:q,ariaDescribedby:T,className:z,...F}=e,_=(0,g.A)(i,k),O="radio"===c,V="card"===S,B=(0,v.A)(t),N=(0,h.A)();return(0,o.useEffect)(()=>{!O&&B.current&&(B.current.indeterminate=!!x)},[B,x,O]),(0,o.useEffect)(()=>{if(!B.current)return;const e=B.current.nextSibling;if("LABEL"!==e?.nodeName.toUpperCase())return;const t=new AbortController;return e.addEventListener("mousedown",e=>{B.current===(0,u.A)()&&e.preventDefault()},{signal:t.signal}),()=>{t.abort()}},[]),(0,r.jsx)(s.Ay,{testId:_,as:V?C:I,label:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(E,{status:M,isRadio:O,as:l.b,required:f,disabled:A,readOnly:y,onMouseDown:e=>e.preventDefault()}),p,y&&(0,r.jsx)(w.A,{id:N,children:a("read_only")})]}),labelAs:V?"div":void 0,id:d,required:f,disabled:A,readOnly:y,status:M,info:P,isRadioCheck:!0,inline:!0,labelAfter:!0,additionalInfo:q,children:(0,r.jsx)(j,{"data-testid":_.control,...F,className:(0,m.A)("radio-check",z,{variant:S,type:c}),id:d,type:c,required:f,checked:$,defaultChecked:H,"aria-describedby":y?`${T} ${N}`:T,disabled:A,readOnly:y,onChange:D,onClick:e=>{y&&e.preventDefault(),R?.(e)},onKeyDown:e=>{"checkbox"===c&&y&&" "===e.key&&e.preventDefault(),"radio"===c&&y&&e.key.includes("Arrow")&&e.preventDefault(),L?.(e)},ref:B})})});(0,p.A)(H,k)},6416:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(1594),o=n(5582),a=n(3351);const i=(e,t=!0)=>{const n=(0,a.A)();return(0,r.useEffect)(()=>{if(e&&t)return o.y.has(e)||o.y.set(e,new Set),e.toggleAttribute("data-popover-target",!0),o.y.get(e).add(n),()=>{o.y.has(e)&&(o.y.get(e).delete(n),0===o.y.get(e).size&&(o.y.delete(e),e.removeAttribute("data-popover-target")))}},[t,e,n]),n}},6511:(e,t,n)=>{n.d(t,{A:()=>nt});var r={};n.r(r),n.d(r,{Component:()=>K,name:()=>G,set:()=>U,viewBox:()=>J});var o={};n.r(o),n.d(o,{Component:()=>Q,name:()=>Y,set:()=>X,viewBox:()=>ee});var a={};n.r(a),n.d(a,{Component:()=>Ke,name:()=>Ge,set:()=>Ue,viewBox:()=>Je});var i=n(4848),s=n(1594),l=n(8267),c=n(9549),d=n(3351),u=n(8579),m=n(4853),p=n(712),f=n(5582),h=n(8268),b=n(9463);var g=n(5190),v=n(7940),A=n(371),y=n(8889),w=n(5636),x=n(3085),$=n(4685),k=n(7666),E=n(9749);const j=["button","a","input","li","legend"];var I=n(3700),C=n(3563),H=n(4869),S=n(7491),R=n(6765),L=n(2884);const D=(e,t,n,r,o)=>{(0,s.useEffect)(()=>{let a=null;if(t>0){const n=e?.current??o?.current?.getRootNode()??document;if(!(0,h.A)(n,HTMLElement,SVGElement,Document,ShadowRoot))return;const i=n.querySelectorAll(r);i.length>t&&(a=i[t])}if(a){const t=new IntersectionObserver(e=>{e[0].isIntersecting&&n()},{root:e.current??null});return t.observe(a),()=>{t.disconnect()}}},[n,t])};var M=n(2558),P=n(9466),q=n(768);const T=(0,s.createContext)({mode:"action",variant:"drill-down",itemLayout:"stacked",scrollAt:7,loading:!1,componentId:(0,$.A)(),pushFlyoutId:()=>null,flyOutActiveIdStack:[],focusControl:null,updateActiveDescendants:()=>null,setFocusDescendant:()=>null,setFocusReturnEl:()=>null,getScopedItemId:()=>"",updateParentDescendantStack:()=>null});var z=n(7521),F=n(7501),_=n(8044);const O=(0,_.A)("meta-list",[]),V=l.Ay.ul(({wrapItems:e})=>l.AH`
    list-style: none;
    overflow: hidden;

    /* Negative margin to account for overflow clipping of focus indicator */
    padding: 0.3rem;
    margin: -0.3rem;

    ${!e&&l.AH`
      white-space: nowrap;
    `}
  `),B=l.Ay.li(({wrapItems:e})=>l.AH`
    min-width: 0;
    display: inline-block;

    ${e?l.AH`
          overflow-wrap: break-word;
        `:l.AH`
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        `}

    &[role='separator'] {
      -webkit-user-select: none;
      user-select: none;
    }
  `),N=(0,s.forwardRef)(function({testId:e,items:t,wrapItems:n=!0,...r},o){const a=(0,u.A)(e,O),s=t.length<=1?"none":void 0;return(0,i.jsx)(F.A,{"data-testid":a.root,...r,as:V,role:s,container:{colGap:.5,alignItems:"center",wrap:n?"wrap":"nowrap"},wrapItems:n,ref:o,children:t.flatMap((e,t,r)=>e?[(0,i.jsx)(z.A,{as:B,variant:"secondary",role:s,wrapItems:n,children:e},`${t+0}`)].concat(t!==r.length-1?[(0,i.jsx)(z.A,{as:B,"aria-hidden":!0,variant:"secondary",children:"•"},`${t+0}-sep`)]:[]):[])})}),Z=(0,H.A)(N,O);var W=n(9721);const U="budicon",G="caret-left",K=()=>(0,i.jsx)("path",{d:"M17.25 21H14.5L8 12.5 14.5 4h2.75l-6.5 8.5z"}),J="0 0 25 25",X="budicon",Y="caret-right",Q=()=>(0,i.jsx)("path",{d:"M8 4h2.75l6.5 8.5-6.5 8.5H8l6.5-8.5z"}),ee="0 0 25 25";var te=n(8072),ne=n(1564),re=n(331),oe=n(4864),ae=n(2477),ie=n(3885);const se=l.Ay.mark(({theme:e})=>l.AH`
    color: ${e.base.colors.black};
    background-color: ${e.components.mark["background-color"]};
    font-weight: ${e.components.mark["font-weight"]};
  `);se.defaultProps=c.qn;const le=e=>(0,i.jsx)(se,{...e});var ce=n(3974);const de={isItem:e=>(0,ce.A)(e,"primary"),getItem(e,t){let n;return e.some(e=>this.isItem(e)&&e.id===t?(n=e,!0):!!e.items&&(n=this.getItem(e.items,t),!!n)),n},getPath(e,t){let n=[];return e.some(e=>{if(e.id===t)return n=[e],!0;if(e.items){const r=this.getPath(e.items,t);return r.length&&(n=r.concat(e)),!!n.length}return!1}),n},setItem(e,t,n){return e.map(e=>e.id===t?{...n}:e.items?{...e,items:this.setItem(e.items,t,n)}:e)},mapItem(e,t,n){return e.map((e,r,o)=>{let a=e;return e.items&&(a={...a,items:this.mapItem(e.items,t,n)}),this.isItem(a)&&e.id===t&&(a=n(a,r,o)),a})},mapTree(e,t){return e.map((e,n,r)=>{let o=e;return e.items&&(o={...o,items:this.mapTree(e.items,t)}),this.isItem(o)?t(o,n,r):o})},flatten(e,t=[],n={parentFirst:!1}){let r=[],o=[];return e.forEach(e=>{if(this.isItem(e)&&r.push(t.length>0?{...e,ancestors:t}:e),e.items){const a=this.flatten(e.items,[...t,e],n);n.parentFirst?o=[...o,...a]:r=[...r,...a]}}),n.parentFirst?[...r,...o]:r},toggleSelected(e,t,n,r){return this.mapTree(e,e=>{if(this.isItem(e)){if(e.id===t)return{...e,selected:void 0!==r?r:!e.selected};if("single-select"===n)return{...e,selected:!1}}return e})},selectItem(e,t,n){return this.toggleSelected(e,t,n,!0)},deselectItem(e,t,n){return this.toggleSelected(e,t,n,!1)},getSelected(e){return e.reduce((e,t)=>(this.isItem(t)&&t.selected&&(e=[...e,t]),t.items&&(e=[...e,...this.getSelected(t.items)]),e),[])},prependTo(e,t,n){return n?this.mapItem(e,n,e=>({...e,items:[...t,...e.items??[]]})):[...t,...e]},appendTo(e,t,n){return n?this.mapItem(e,n,e=>({...e,items:[...e.items??[],...t]})):[...e,...t]},getNextItem(e,t){if(!t)return e[0];let n;return this.mapItem(e,t,(e,t,r)=>(n=r[t+1],e)),n},getPrevItem(e,t){if(!t)return e[0];let n;return this.mapItem(e,t,(e,t,r)=>(n=r[t-1],e)),n},getParentItem(e,t){if(!t)return;const[,n]=this.getPath(e,t);return n}};var ue=n(1357),me=n(6883),pe=n(9187),fe=n(7321),he=n(2952);(0,l.Ay)(A.Ay)`
  align-self: center;
`;const be=(0,l.Ay)(R.Ay)``,ge=l.Ay.li(({theme:{base:e,components:t},isParentItem:n,itemLayout:r,mode:o="action","aria-selected":a=!1,selectableParent:i=!1})=>{const s=(0,pe.A)(()=>(0,ue.jh)(.85,e.palette["primary-background"],e.palette.interactive)),c=(0,pe.A)(()=>(0,ue.jh)(.95,e.palette["primary-background"],e.palette.interactive)),d=(0,pe.A)(()=>(0,ue.B3)(t["radio-check"][":checked"]["background-color"],e.transparency["transparent-5"])),u=t["radio-check"][":checked"]["background-color"],m=(0,pe.A)(()=>(0,fe.W0)(u));return l.AH`
      min-height: ${e["hit-area"]["mouse-min"]};
      padding-block: calc(0.75 * ${e.spacing});
      padding-inline: ${e.spacing};
      cursor: pointer;

      ${"inline"===r&&l.AH`
        justify-content: flex-start;

        ${W.J0} {
          /* Sets grid columns based on SummaryItem content combinations */

          &:has(${W.Ik}):has(${W.oF}):has(${W.Af}) {
            grid-template-areas: 'visual primary secondary actions';
            grid-template-columns: auto auto 1fr auto;
          }

          &:has(${W.Ik}):has(${W.oF}):not(:has(${W.Af})) {
            grid-template-areas: 'visual primary secondary';
            grid-template-columns: auto auto 1fr;
          }

          &:has(${W.Ik}):not(:has(${W.oF})):has(${W.Af}) {
            grid-template-areas: 'visual primary actions';
            grid-template-columns: auto 1fr auto;
          }

          &:has(${W.Ik}):not(:has(${W.oF})):not(
              :has(${W.Af})
            ) {
            grid-template-areas: 'visual primary';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${W.Ik})):has(${W.oF}):has(${W.Af}) {
            grid-template-areas: 'primary secondary actions';
            grid-template-columns: auto 1fr auto;
          }

          &:not(:has(${W.Ik})):has(${W.oF}):not(
              :has(${W.Af})
            ) {
            grid-template-areas: 'primary secondary';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${W.Ik})):not(:has(${W.oF})):has(
              ${W.Af}
            ) {
            grid-template-areas: 'primary actions';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${W.Ik})):not(:has(${W.oF})):not(
              :has(${W.Af})
            ) {
            grid-template-areas: 'primary';
            grid-template-columns: 1fr;
            flex-grow: 0;
          }

          & > ${W.ox} {
            ${he.EN};
          }

          & > ${W.oF} {
            ${he.EN};

            ul {
              li {
                ${he.EN};
              }
              justify-content: end;
            }
          }

          & > ${W.Af} > ${F.D} {
            justify-content: end;
          }
        }
      `}

      @media (pointer: coarse) {
        min-height: ${e["hit-area"]["finger-min"]};
      }

      &:focus-within {
        background-color: ${s};
      }

      &:hover {
        ${be} {
          visibility: visible;
          ${"single-select"===o&&l.AH`
            color: ${a?u:d};
          `}
          ${"multi-select"===o&&l.AH`
            ${!a&&l.AH`
              border-color: ${t["form-control"][":hover"]["border-color"]};
            `}
          `}
        }
      }

      &:hover:not([aria-disabled='true']) {
        background-color: ${c};
      }

      a:first-of-type {
        display: block;
        width: 100%;
        text-decoration: none;
        color: inherit;
      }

      ${n&&!i&&("multi-select"===o||"single-select"===o)&&l.AH`
        padding-inline-start: calc(1.125rem + 2 * ${e.spacing});
      `}

      ${me.e} {
        flex-grow: 1;
      }

      ${be} {
        margin-inline-start: 0;
        ${"single-select"===o&&l.AH`
          ${a?l.AH`
                color: ${u};
              `:l.AH`
                visibility: hidden;
              `}
        `}
        ${"multi-select"===o&&l.AH`
          ${a?l.AH`
                color: ${m};
                background-color: ${u};
                border: 0.0625rem solid ${t["radio-check"][":checked"]["border-color"]};
              `:l.AH`
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
    `});ge.defaultProps=c.qn;const ve=l.Ay.div`
  ${R.vE} {
    width: 1em;
    height: 1em;
  }

  & > ${z.D} {
    ${he.EN};
  }
`,Ae=(l.Ay.p`
  ${ue.Ic}
`,l.Ay.li(({theme:e})=>l.AH`
    height: 0.0625rem;
    background-color: ${e.base.palette["border-line"]};
    margin: ${e.base.spacing} 0;
  `));Ae.defaultProps=c.qn;const ye=l.Ay.div(({theme:e})=>l.AH`
    min-height: ${e.base["hit-area"]["mouse-min"]};
    font-weight: ${e.base["font-weight"]["semi-bold"]};
    background-color: ${e.base.palette["secondary-background"]};

    @media (pointer: coarse) {
      min-height: ${e.base["hit-area"]["finger-min"]};
    }
  `);ye.defaultProps=c.qn;const we=l.Ay.legend(({theme:{base:e}})=>{const t=(0,pe.A)(()=>(0,ue.jh)(.95,e.palette["primary-background"],e.palette.interactive)),n=(0,pe.A)(()=>(0,ue.jh)(.85,e.palette["primary-background"],e.palette.interactive));return l.AH`
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

    > ${me.e} {
      grid-column-gap: ${e.spacing};
    }

    ${R.vE} {
      /* Fixes vertical align issue increasing box size beyond square */
      display: block;
    }
  `});we.defaultProps=c.qn;const xe=l.Ay.ul(({theme:e})=>l.AH`
    overflow-x: hidden;
    overflow-y: auto;
    list-style: none;
    height: 100%;
    border-radius: inherit;

    ${q.q} {
      padding: ${e.base.spacing};
      height: auto;
    }

    li:not(:first-child):not([role='presentation']) > ${ye} {
      margin-block-start: ${e.base.spacing};
    }
  `);xe.defaultProps=c.qn;const $e=l.Ay.fieldset(({theme:e})=>l.AH`
    background-color: ${e.base.palette["primary-background"]};
    border: 0;
    border-radius: inherit;
  `);$e.defaultProps=c.qn;const ke=(0,l.Ay)($e)`
  min-width: 10rem;
`,Ee=l.Ay.li`
  display: block;
  position: relative;
  height: 2.8rem;
`,je=l.Ay.div(({theme:e})=>l.AH`
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
  `);je.defaultProps=c.qn;const Ie=l.Ay.div(({theme:e})=>{const t=`0.0625rem solid ${e.base.palette["border-line"]}`;return l.AH`
    display: flex;
    flex-direction: column;

    &,
    ${je} {
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

    ${S.U}:first-child {
      + ${je}, + header {
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
  `});Ie.defaultProps=c.qn;const Ce=(0,_.A)("menu",["create-new"]),He=(0,_.A)("menu-item",[]);(0,R.pU)(r,o,te);const Se=({expandHandler:e})=>{const{end:t}=(0,v.A)(),n=(0,i.jsx)(R.Ay,{name:`caret-${t}`});return e?(0,i.jsx)(A.Ay,{as:"span",icon:!0,variant:"simple","aria-hidden":!0,onClick:e,children:n}):n},Re=({ancestors:e=[]})=>{const t=e.length>2,n=t?[e[0],e[e.length-1]]:e,{end:r}=(0,v.A)();return(0,i.jsx)(F.A,{container:{gap:.5,alignItems:"center"},as:ve,title:e.map(e=>de.isItem(e)?e.primary:e.label).join(" > "),children:n.map((e,n,o)=>{const a=de.isItem(e)?e.primary:e.label;return(0,i.jsxs)(s.Fragment,{children:[(0,i.jsx)(z.A,{variant:"secondary",children:a}),n<o.length-1&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(z.A,{variant:"secondary",children:(0,i.jsx)(R.Ay,{name:`caret-${r}`})}),t&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(z.A,{variant:"secondary",children:"…"}),(0,i.jsx)(z.A,{variant:"secondary",children:(0,i.jsx)(R.Ay,{name:`caret-${r}`})})]})]})]},e.id)})})},Le=(0,H.A)(({testId:e,id:t,primary:n,secondary:r,ancestors:o,visual:a,count:l,items:c,selected:d,partial:m,href:p,tooltip:f,onClick:h,onExpand:b,disabled:g,role:v="menuitem",...A})=>{const y=(0,x.A)(),{mode:w,onItemClick:$,itemLayout:k,accent:E,variant:j,setFocusDescendant:I,getScopedItemId:C,arrowNavigationUnsupported:H}=(0,s.useContext)(T),S=(0,u.A)(e,He),R="single-select"===w||"multi-select"===w,L=c&&"boolean"==typeof d,D=(0,s.useMemo)(()=>C(t),[t,C]),M=`${t}-count`,P=`${t}-secondary`,q=(0,s.useCallback)(e=>{if(e.detail>0){const t=e.target,n=t.getAttribute("role")===v?t:t.closest(`li[role="${v}"]`);n&&I(n)}h?.(t,e),$?.(t,e)},[h,$,t]),_=(0,s.useCallback)(e=>{b?.(t,e),e.stopPropagation()},[b,t]);let O;if(E&&!c){const e="function"==typeof E?E(n):E;O=(0,oe.A)(n,e,e=>(0,i.jsx)(le,{children:e}))}const V=o?(0,i.jsx)(Re,{ancestors:o}):r&&(0,i.jsx)(Z,{items:r,id:P}),[B,N]=(0,ae.A)(),U=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(W.Ay,{ref:N,primary:O||(c?n:(0,i.jsx)(z.A,{children:n})),secondary:V,layout:k,visual:a,actions:c||l?(0,i.jsxs)(F.A,{container:{gap:1,alignItems:"center",justify:"center"},children:[void 0!==l&&(0,i.jsx)(ne.A,{id:M,"aria-label":y("menu_item_count",[l]),children:l}),c&&(0,i.jsx)(Se,{expandHandler:L?_:void 0})]}):void 0,container:{colGap:1}}),f&&(0,i.jsx)(ie.A,{target:B,hideDelay:"none",showDelay:"short",children:f})]}),G=(0,s.useMemo)(()=>{const e=y("menu_collapsed",[n]);return c?y(H?"menu_item_shift_space_expand_collapse":"menu_item_expand_arrow",[e]):n},[d,n,c]),K=(0,s.useMemo)(()=>{let e;return r?(e=P,void 0!==l&&l>=0&&(e=`${e} ${M}`)):e=void 0!==l&&l>=0?M:"",e},[c,r,M,P]);return(0,i.jsxs)(F.A,{"data-testid":S.root,...A,container:{alignItems:"center",justify:"between",gap:1},id:D,as:ge,"aria-label":G,"aria-describedby":K,role:v,"aria-disabled":g,"data-expand":!!c,itemLayout:k,tabIndex:-1,disabled:g,onMouseDown:e=>{e.preventDefault()},onClick:e=>{if(!g)return c&&"boolean"!=typeof d?_(e):q(e)},onMouseEnter:"flyout"===j?_:void 0,href:p,mode:w,isParentItem:!!c,"aria-selected":!!d,selectableParent:L,children:[R&&(!c||L)&&(0,i.jsx)(be,{name:"check"}),p&&!R?(0,i.jsx)(re.A,{href:p,tabIndex:"-1",children:U}):U]})},He),De=(e,t,n,r)=>{const o=!!e.firstElementChild?.matches("legend"),a=e.querySelectorAll([':scope > ul > li:not([role="separator"]):not([role="presentation"])',':scope > ul > li[role="presentation"] > div:first-child',':scope > ul > li > ul[role="group"] > li:not([role="separator"])'].join(", "))[Math.max(Math.min(r-(o?2:1),n-1),0)];let i;if(a){const t=e.getBoundingClientRect().top,o=a.getBoundingClientRect(),s=e.querySelector(":scope > ul")?.scrollTop??0;let l=o.bottom;n>r&&(l=(o.top+o.bottom)/2),i=l-t+s}t.style.height=i?`${i}px`:""},Me=({id:e,label:t,items:n,itemRole:r})=>{const{componentId:o}=(0,s.useContext)(T),a=`${o}-${e}`;return(0,i.jsxs)("li",{role:"presentation",children:[(0,i.jsx)(F.A,{container:{alignItems:"center",pad:[.5,1]},as:ye,id:a,children:t}),(0,i.jsx)("ul",{role:"group","aria-labelledby":a,children:n.length>0&&n.map(e=>(0,s.createElement)(Le,{...e,key:e.id,role:r??"menuitem"}))})]})},Pe=e=>Array.isArray(e.items),qe=(0,s.forwardRef)(function({items:e,parent:t,menuRole:n},r){const o=(0,x.A)(),a=(0,m.A)(r),l=(0,s.useRef)(null),c=(0,s.useRef)(null),d=(0,s.useRef)(null),[u,p]=(0,s.useState)(),{componentId:f,loadMore:h,loading:b,scrollAt:g,emptyText:v,onItemExpand:A,pushFlyoutId:y,flyOutActiveIdStack:$,updateActiveDescendants:k,updateParentDescendantStack:E}=(0,s.useContext)(T),{announcePolite:j}=(0,L.A)();D(l,e.length-1,()=>{h?.(t?.item?.id)},":scope > li"),(0,M.A)(()=>{if(u){const t=e.find(e=>e.id===u.id);t&&Pe(t)?p(t):p(void 0)}},[u,e]),(0,s.useEffect)(()=>{e.some(e=>$.includes(e.id))||(d.current=null,p(void 0))},[$]),(0,s.useEffect)(()=>{0!==e.length||b||j({message:v??o("no_items")})},[e.length,b]);const I=(0,s.useMemo)(()=>e.length?e.map(e=>de.isItem(e)?(0,s.createElement)(Le,{...e,key:e.id,"aria-haspopup":!!e.items,"aria-expanded":e.items?e.id===u?.id:void 0,role:"listbox"===n?"option":"menuitem",onExpand:(t,n)=>{e.items?(d.current=n.currentTarget,p(Pe(e)?e:void 0),e?.onExpand?.(t,n),A?.(t,n),y(e.id||f),k(),E&&E(d.current.closest("li"))):(d.current=null,p(void 0))}}):(0,s.createElement)(Me,{...e,key:e.id,itemRole:"listbox"===n?"option":"menuitem"})):b?null:(0,i.jsx)(q.A,{message:v,forwardedAs:"li"}),[e,b,v,u,$]),C=(0,i.jsxs)(xe,{ref:l,role:n,children:[I,b&&!u&&(0,i.jsx)(Ee,{children:(0,i.jsx)(P.A,{placement:"local"})})]});(0,s.useLayoutEffect)(()=>{p(void 0),a.current&&(c.current=a.current.parentElement,De(a.current,a.current,e.length,g))},[e]);const H=(0,s.useCallback)(()=>{u&&p(void 0)},[u]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ke,{ref:a,onScroll:H,"data-flyout-menu-parent-id":f,"data-flyout-menu-id":t?.item.id||f,children:C}),u&&a.current&&(0,i.jsx)(w.A,{target:d.current,show:!0,strategy:"fixed",placement:"right-start",portal:!1,children:(0,i.jsx)(qe,{items:u.items,parent:{el:a.current,item:u,siblingItems:e,setExpandedItem:p,returnFocusRef:d},menuRole:n})})]})}),Te=qe;var ze=n(5120);(0,R.pU)(r,o);const Fe=({text:e,onClick:t})=>{const n=(0,x.A)(),{arrowNavigationUnsupported:r}=(0,s.useContext)(T),{start:o}=(0,v.A)(),a=(0,s.useCallback)(e=>{"Enter"!==e.key&&e.key!==`Arrow${(0,C.A)(o)}`||t()},[t,o]);return(0,i.jsx)(F.A,{container:{alignItems:"center"},as:we,onClick:t,onKeyDown:a,"data-collapse":"true","aria-expanded":!0,"aria-label":`${n("menu_expanded",[e||""])} ${n(r?"menu_item_collapse_shift_space":"menu_item_collapse_arrow")}`,children:(0,i.jsx)(W.Ay,{visual:(0,i.jsx)(R.Ay,{name:`caret-${o}`}),primary:e})})},_e=(e,t)=>{e.disabled=t;const n=e.querySelector("legend button");n&&(n.disabled=t)},Oe=(e,t)=>e.reduce((e,t)=>!de.isItem(t)&&t.items?e+t.items.length+1:e+1,t?1:0),Ve=e=>e.flatMap(e=>de.isItem(e)?e:[e,...e.items?e.items:[]]),Be=(0,s.forwardRef)(function({items:e,parent:t,id:n,menuRole:r,...o},a){const l=(0,x.A)(),c=(0,s.useRef)(null),d=(0,m.A)(a),u=(0,s.useRef)(null),p=(0,s.useRef)(null),[f,h]=(0,s.useState)(!t),[b,g]=(0,s.useState)(),{scrollAt:A,"aria-label":y,loadMore:w,loading:$,emptyText:k,currentItemId:E,onItemExpand:j,focusControl:I,updateActiveDescendants:C,setFocusReturnEl:H,onItemCollapse:S,expandTo:R}=(0,s.useContext)(T),{end:z}=(0,v.A)(),{announcePolite:F}=(0,L.A)();D(u,e.length-1,()=>{$||w?.(t?.item?.id)},":scope > li"),(0,s.useLayoutEffect)(()=>{d.current&&!b&&(c.current=d.current.parentElement,De(d.current,c.current,Oe(e,$),A))}),(0,s.useEffect)(()=>{t&&h(!0)},[]),(0,M.A)(()=>{if(b){const t=Ve(e).find(e=>e.id===b.id);t&&Pe(t)?g(t):g(void 0)}},[b,e]),(0,M.A)(()=>{if(E){const t=Ve(e).find(e=>e.items?.length&&void 0!==de.getItem(e.items,E));t&&(g(Pe(t)?t:void 0),C({preventScroll:!0}))}},[E,e,t]),(0,s.useEffect)(()=>{if(R?.parentItemId){const t=Ve(e).find(e=>e.id===R.parentItemId);if(t)g(Pe(t)?t:void 0),C({preventScroll:!0}),R.onComplete();else{const t=Ve(e).find(e=>e.items?.length&&void 0!==de.getItem(e.items,R.parentItemId));t?g(Pe(t)?t:void 0):R.onComplete()}}},[R,e,t]);const _=(0,s.useCallback)((t,n)=>{const r=de.getItem(e,t);p.current=n.currentTarget,r&&Pe(r)?g(r):g(void 0),r?.onExpand?.(t,n),j?.(t,n),C({preventScroll:!0})},[e]);(0,s.useEffect)(()=>{0!==e.length||$||F({message:k??l("no_items")})},[e.length,$]);const O=(0,s.useMemo)(()=>e.length?e.map((t,n)=>de.isItem(t)?(0,s.createElement)(Le,{...t,key:t.id,role:"listbox"===r?"option":"menuitem",onExpand:t.items?_:void 0}):(0,i.jsxs)(s.Fragment,{children:[(0,i.jsx)(Me,{...t,items:t.items.map(e=>e.items?{...e,onExpand:_}:e),itemRole:"listbox"===r?"option":"menuitem"}),e[n+1]&&de.isItem(e[n+1])&&(0,i.jsx)(Ae,{role:"separator"})]},t.id)):$?null:(0,i.jsx)(q.A,{message:k,forwardedAs:"li"}),[e,$,k]),V=(0,i.jsxs)(xe,{id:b?void 0:n,ref:u,role:r,...o,children:[t&&(0,i.jsx)(Fe,{text:t.item.primary,onClick:()=>{h(!1)}}),O,$&&!b&&(0,i.jsx)(Ee,{children:(0,i.jsx)(P.A,{placement:"local",liveConfig:{contextualLabel:y??l("menu")}})})]});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ze.Ay,{"aria-hidden":!!b,as:$e,ref:d,open:f,style:{opacity:b?0:1},disabled:!!b,placement:z,onBeforeOpen:()=>{t&&(t.el.style.opacity="0"),d.current&&(d.current.style.opacity="1")},onAfterOpen:()=>{t&&_e(t.el,!0)},onBeforeClose:()=>{t&&c.current&&(_e(t.el,!1),t.el.style.opacity="1",De(t.el,c.current,Oe(t.siblingItems),A)),d.current&&(d.current.style.opacity="0")},onAfterClose:()=>{if(t){I?.focus();const e=t.returnFocusRef.current;t.setExpandedItem(void 0),e&&H(e?.closest("li")),S?.(t.item.id),C()}},children:V}),b&&d.current&&(0,i.jsx)(Be,{id:n,items:b.items,parent:{el:d.current,item:b,siblingItems:e,setExpandedItem:g,returnFocusRef:p},menuRole:r})]})}),Ne=Be,Ze=(0,s.forwardRef)(function(e,t){const n=(0,d.A)(),{testId:r,id:o=n,items:a=[],itemLayout:l="stacked",onCreateNew:c,mode:p="action",accent:f,scrollAt:b=7,emptyText:g,onItemClick:y,onItemActive:w,onItemExpand:H,loadMore:L,onItemCollapse:D,loading:M=!1,currentItemId:P,header:q,footer:z,variant:F="drill-down",focusControlEl:_,arrowNavigationUnsupported:O,"aria-describedby":V,"aria-label":B,role:N="menu",listId:Z,pauseDescendantEvaluation:W,menuList:U,handleRef:G,...K}=e,J=(0,u.A)(r,Ce),X=(0,x.A)(),{end:Y,start:Q}=(0,v.A)(),ee=(0,d.A)(),te=(0,m.A)(t),ne=(0,s.useRef)(0),[re,oe]=(0,s.useState)(0),[ae,ie]=(0,s.useState)(null),[se,le]=(0,s.useState)([o]),[ce,de]=(0,s.useState)(),[ue,me]=(0,s.useState)(!1),[pe,fe]=(0,s.useState)([]),[he,be]=(0,s.useState)(),ge=!_,ve=(0,s.useMemo)(()=>`fieldset[data-flyout-menu-id="${se[se.length-1]}"]`,[se]),Ae=(0,s.useMemo)(()=>_||te.current,[_,te.current]);(0,s.useImperativeHandle)(G,()=>({expandTo:e=>{be(e)}}),[]);const ye=(0,s.useCallback)(e=>{le([...se,e])},[se]);(0,s.useEffect)(()=>{le([...se,o])},[o]);const we=(0,s.useCallback)(e=>{fe([...pe,e])},[pe]),xe=(0,s.useCallback)(e=>btoa(encodeURIComponent(e)),[o]),$e=(0,s.useCallback)(e=>decodeURIComponent(atob(e)),[o]),ke=(0,s.useCallback)(({preventScroll:e=!1}={})=>{me(e),oe(Math.random())},[]),Ee=(0,s.useMemo)(()=>({focusEl:Ae,scope:te.current,scopeSelector:"drill-down"===F?'fieldset[aria-hidden="false"]':ve,selector:`[role="${"menu"===N?"menuitem":"option"}"], legend`,focusDescendantEl:ae,clearFocusDescendant:()=>{ie(null)},focusReturnEl:ce,clearFocusReturn:()=>{de(null)},currentDescendantId:P?xe(P):void 0,preventInitialScroll:ue,clearPreventScroll:()=>{me(!1)},pauseDescendantEvaluation:W}),[Ae,te.current,ve,ce,ae,P,ue,W]),{activeDescendant:He,descendants:Se}=(({focusEl:e,scope:t,scopeSelector:n,selector:r,orientation:o="vertical",focusDescendantEl:a,clearFocusDescendant:i,focusReturnEl:l,clearFocusReturn:c,currentDescendantId:d,onClick:u,preventInitialScroll:m,pauseDescendantEvaluation:p=!1,clearPreventScroll:f},b=[])=>{const[g,A]=(0,s.useState)(0),y=(0,s.useRef)(""),w=(0,s.useRef)(p),[x,I]=(0,s.useState)(null),[C,H]=(0,s.useState)(null),[S,R]=(0,s.useState)(),{rtl:L}=(0,v.A)(),D=(0,s.useCallback)(()=>{S?.forEach(e=>{e.setAttribute("data-current","false")})},[S]),M=(0,s.useCallback)(e=>{D(),R(e?Array.from(e).filter(e=>(0,h.A)(e,HTMLElement)):null)},[S]),P=(0,s.useCallback)(({clear:t}={clear:!1})=>{const n=[];if(S&&S.length&&S.forEach(e=>{e.id=e.id||(0,$.A)(),n.push(e.id)}),t){const t=e?.getAttribute("aria-owns")?.split(" "),r=t?.filter(e=>!n.includes(e));e?.setAttribute("aria-owns",r?.join(" ")||"")}else e?.setAttribute("aria-owns",n.join(" "))},[e,S]),q=(0,s.useCallback)(()=>{if(p)return;let e=t;if(e&&(0,h.A)(e,HTMLElement)){if(n&&(e=e.querySelector(n)),!e)return void M(null);if(r){const t=e.querySelectorAll(r);M(t)}else{const t=e.querySelectorAll(k.U);M(t)}}else M(null);null===C&&H(0)},[t,n,r,p,C]);return(0,s.useEffect)(()=>{w.current=p},[p]),(0,s.useEffect)(()=>{if(!t||!e)return;t.setAttribute("data-active-scope",(0,E.A)()===e?"true":"false");const n=()=>{t.setAttribute("data-active-scope","true")},r=()=>{t.setAttribute("data-active-scope","false")};return e.addEventListener("focus",n),e.addEventListener("blur",r),()=>{e.removeEventListener("focus",n),e.removeEventListener("blur",r)}},[t,e]),(0,s.useEffect)(()=>{p||q()},[p]),(0,s.useEffect)(()=>{const e=setTimeout(()=>{q(),w.current||H(0)},0);return()=>clearTimeout(e)},[...b]),(0,s.useEffect)(()=>{p?(D(),P({clear:!0})):(P(),A(Math.random()))},[p,e,S]),(0,s.useEffect)(()=>{const t=()=>{c?.(),f?.(),null!==C&&C+1<S.length?H(C+1):H(0)},n=()=>{c?.(),f?.(),H(null!==C&&C-1>-1?C-1:S.length-1)},r=e=>{S?.length&&(["ArrowDown","ArrowUp"].includes(e.key)&&"vertical"===o&&e.preventDefault(),["ArrowLeft","ArrowRight"].includes(e.key)&&"horizontal"===o&&e.preventDefault(),setTimeout(()=>{switch(e.key){case"ArrowDown":"vertical"===o&&t();break;case"ArrowUp":"vertical"===o&&n();break;case"ArrowRight":"horizontal"===o&&(L?n():t());break;case"ArrowLeft":"horizontal"===o&&(L?t():n());break;case"Enter":if(null!==C){if(u){u(S[C]);break}const e=S[C].nodeName.toLowerCase();j.includes(e)?S[C].click():S[C].querySelector(`${j.join(",")}`)?.click()}}},0))};return!p&&e&&S?.length&&!d&&e.addEventListener("keydown",r),()=>{e?.removeEventListener("keydown",r)}},[e,C,S,p]),(0,s.useEffect)(()=>{!p&&S&&d&&S.forEach((e,t)=>{e.id===d&&H(t)})},[d,S,p]),(0,s.useEffect)(()=>{if(w.current)return;const t=x||C,n=l?.id;let r;const o=a?.id;let s,d=!1;if(S&&S.length){if(S.forEach((e,t)=>{null===x&&e.id===o&&(s=t,d=!0,I(t)),e.id===n&&(r=t),e.setAttribute("data-current","false")}),r&&r!==C)return H(r),void c?.();if(d&&void 0!==s)return A(Math.random()),void H(s);if(null!==t&&S[t]){const n=S[t];if(n.setAttribute("data-current","true"),e?.setAttribute("aria-activedescendant",n.id),n.id!==y.current&&!m){const e=Element.prototype.scrollIntoViewIfNeeded??Element.prototype.scrollIntoView;e?.call(n,!1)}null!==x&&(I(null),i?.()),y.current=n.id}}return()=>{e?.removeAttribute("aria-activedescendant")}},[S,C,a,e,g]),{activeDescendant:null!==C&&S?S[C]:void 0,descendants:S||null}})(Ee,[re]),Re=(0,I.A)(He);(({loading:e,descendants:t,previousActiveDescendant:n,activeDescendant:r,focusReturnEl:o,setFocusReturnEl:a,scrollEl:i})=>{(0,s.useEffect)(()=>{if(e&&t&&t.length&&r){const e=[...t].pop();let n;return(e?.id||void 0)===r.id?(i&&(i.scrollTop=i.scrollHeight-i.offsetHeight),o?.id!==r.id&&(n=setTimeout(()=>{a(e)},0))):o?.id!==r.id&&(n=setTimeout(()=>{a(r)},0)),()=>clearTimeout(n)}},[e,t,n,r,i,o])})({loading:M,descendants:Se,previousActiveDescendant:Re,activeDescendant:He,focusReturnEl:ce,setFocusReturnEl:de,scrollEl:Ee.scope?.querySelector(Ee.scopeSelector)?.querySelector("ul")}),(0,s.useEffect)(()=>{const e=(e=null)=>{if(He){if("true"===He.dataset.expand&&"collapse"!==e)return void(He.querySelector('span[aria-hidden="true"]')??He).click();if("expand"!==e)if("flyout"===F&&se.length>1&&pe.length>0){le([...se].slice(0,-1));const e=pe.pop();void 0!==e&&de(e),ke()}else"true"===He.dataset.collapse&&He.click()}},t=t=>{switch(t.key){case`Arrow${(0,C.A)(Y)}`:if(O)break;e("expand");break;case`Arrow${(0,C.A)(Q)}`:if(O)break;e("collapse");break;case"Escape":if("flyout"===F&&se.length>1&&pe.length>0){t.preventDefault(),t.stopPropagation(),le([...se].slice(0,-1));const e=pe.pop();void 0!==e&&de(e),ke()}}O&&(" "===t.key||"Spacebar"===t.key)&&t.shiftKey&&(t.preventDefault(),e())};return He&&w?.($e(He.id)),Ae?.addEventListener("keydown",t),()=>Ae?.removeEventListener("keydown",t)},[Ae,He,se]),(0,s.useEffect)(()=>{const e=setTimeout(()=>{if(a.length===ne.current){const e=Se?.map(e=>e.id),t=Ee.scope?.querySelector(Ee.scopeSelector)?.querySelectorAll(Ee.selector);if(!t)return void ke();const n=Array.from(t);return n?.length!==e?.length?void ke():void(n.every((t,n)=>t.id===e[n])||ke())}ne.current=a.length,ke()},0);return()=>clearTimeout(e)},[a]);const Le=(0,s.useMemo)(()=>({componentId:o,"aria-label":B,mode:p,arrowNavigationUnsupported:O,onItemClick:(e,t)=>{ge&&te.current?.focus(),y?.(e,t)},onItemActive:w,onItemExpand:H,onItemCollapse:D,itemLayout:l,accent:f,scrollAt:b,emptyText:g,radioName:ee,loadMore:L,loading:M,variant:F,focusControl:Ae,updateActiveDescendants:ke,setFocusReturnEl:de,setFocusDescendant:ie,getScopedItemId:xe,pushFlyoutId:ye,flyOutActiveIdStack:se,updateParentDescendantStack:we,expandTo:{parentItemId:he,onComplete:()=>{be(void 0)}}}),[o,B,p,O,y,w,H,D,l,f,b,g,ee,L,M,F,Ae,ke,de,ie,xe,ye,se,we,he]),De=U??("drill-down"===F?(0,i.jsx)(Ne,{items:a,id:Z,menuRole:N,"aria-multiselectable":"multi-select"===p,"aria-labelledby":B?`${o}-menuLabel`:void 0}):(0,i.jsx)(Te,{items:a,menuRole:N}));return(0,i.jsxs)(Ie,{"data-testid":J.root,id:o,"aria-describedby":ge?`${o}-menuDescription`:void 0,...K,ref:te,tabIndex:ge?0:void 0,children:[ge&&(0,i.jsx)("span",{id:`${o}-menuDescription`,hidden:!0,children:`${X("menu_selection_instructions")} `&&V||""}),B&&(0,i.jsx)(S.A,{id:`${o}-menuLabel`,children:B}),q&&(0,i.jsx)("header",{"data-popover-scroll-el":!0,children:q}),(0,i.jsx)(je,{"data-popover-scroll-el":!0,children:(0,i.jsx)(T.Provider,{value:Le,children:De})}),(c||z)&&(0,i.jsx)("footer",{"data-popover-scroll-el":!0,children:c?(0,i.jsxs)(A.Ay,{"data-testid":J.createNew,variant:"link",onClick:c,children:[(0,i.jsx)(R.Ay,{name:"plus"})," ",X("create_new")]}):z})]})}),We=(0,H.A)(Ze,Ce),Ue="budicon",Ge="arrow-micro-down",Ke=()=>(0,i.jsx)("path",{d:"M8 9.5h9l-4.402 6-4.597-6H8Z"}),Je="0 0 25 25",Xe=(0,_.A)("menu-button",[]);(0,R.pU)(a);const Ye=l.Ay.button(({theme:{base:{spacing:e}}})=>l.AH`
      gap: ${e};
      flex-shrink: 0;
      white-space: nowrap;
      max-width: 100%;

      & + ${y.l} + ${A.OV} {
        margin-inline-start: ${e};
      }
    `);Ye.defaultProps=c.qn;const Qe=l.Ay.span(({theme:e,padIcon:t})=>{const{base:{"hit-area":{"mouse-min":n,"finger-min":r}},components:{icon:{size:{s:o}}}}=e;return l.AH`
    max-width: 100%;

    ${t&&l.AH`
      padding-inline-start: calc((${n} - ${o}) / 2);

      @media (pointer: coarse) {
        padding-inline-start: calc(${r} - ${o} * 2);
      }
    `}

    ${z.D} {
      text-overflow: ellipsis;
      overflow: hidden;
    }

    ${R.vE}:last-child:not(:first-child) {
      /* Offsets the flex gap to make the down arrow appear to trail the text. */
      margin-inline-start: -${e.base.spacing};
    }
  `}),et=(0,l.Ay)(w.A)`
  min-width: 20ch;
`,tt=(0,s.forwardRef)(function(e,t){const n=(0,d.A)(),{testId:r,id:o=n,text:a,menu:l,popover:c,onClick:y,icon:w,count:x,iconOnly:$=!1,showArrow:k=!1,...E}=e,j=(0,u.A)(r,Xe),[I,C]=(0,s.useState)(!1),H=(0,m.A)(t),S=(0,m.A)(c?.ref),L=(0,m.A)(l?.ref);((e,t)=>{const[n,r]=(0,s.useState)(!1),o=(0,s.useRef)(null),{portalTarget:a}=(0,b.A)(),i=a?.ownerDocument?.defaultView||window,l=(0,s.useRef)();(0,s.useEffect)(()=>()=>{l.current?.abort()},[]);const c=(0,s.useCallback)(a=>{if(!n)return;const s=(0,h.A)(a,FocusEvent)?a.relatedTarget:null,c=(0,p.A)(e).flatMap(e=>[e,...(0,f.A)(e)]);if((0,h.A)(s,Node)){const e=c.find(e=>e?.contains(s));if(e)return void(o.current=e)}const d=new AbortController,u=e=>{c.some(t=>e.composedPath().some(e=>(0,h.A)(e,Node)&&t.contains(e)))||(r(!1),t?.(!1,o.current),o.current=null),d.abort()};i?.document?.addEventListener("focusin",u,{once:!0,signal:d.signal}),i?.document?.addEventListener("mouseup",u,{once:!0,signal:d.signal});const m=()=>{r(!1),t?.(!1,o.current),o.current=null,d.abort()};try{window.parent?.document.addEventListener("focusin",m,{once:!0,signal:d.signal}),window.parent?.document.addEventListener("mouseup",m,{once:!0,signal:d.signal})}catch{}l.current=d},[n,t,e]),d=(0,s.useCallback)(e=>{if(!n){r(!0);const n=e.currentTarget;t?.(!0,n),o.current=n}},[n,t]);(0,s.useEffect)(()=>{const t=(e=>(0,p.A)(e).flatMap(e=>[e,...(0,f.A)(e)]).filter(e=>(0,h.A)(e,HTMLElement)))(e);t.forEach(e=>{e?.contains(document.activeElement)&&d(new FocusEvent("focusin",{relatedTarget:document.activeElement}))})},[]),(0,s.useEffect)(()=>{const t=(0,p.A)(e);return t.forEach(e=>{e?.addEventListener("focusin",d),e?.addEventListener("popover:focusin",d),e?.addEventListener("focusout",c),e?.addEventListener("popover:focusout",c)}),()=>{t.forEach(e=>{e?.removeEventListener("focusin",d),e?.removeEventListener("popover:focusin",d),e?.removeEventListener("focusout",c),e?.removeEventListener("popover:focusout",c)})}},[e,d,c])})([S,H],(0,s.useCallback)(e=>{e||C(!1)},[])),(0,g.A)(e=>{I&&(C(!1),e.stopPropagation())},H),(0,g.A)(e=>{I&&(C(!1),e.stopPropagation(),H.current?.focus())},l?.focusControlEl);const{rtl:D}=(0,v.A)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(A.Ay,{"data-testid":j.root,as:Ye,"aria-label":a,...E,id:o,ref:H,"aria-expanded":I,"aria-haspopup":"menu","aria-controls":I?`${o}-popover`:void 0,label:$&&!I?a:void 0,onClick:e=>{const t=e.detail>0;I?t&&C(!1):C(!0),I&&!t||y?.(e)},icon:$,children:(0,i.jsxs)(F.A,{as:Qe,container:{alignItems:"center",gap:1},padIcon:$&&k,children:[w&&(0,i.jsx)(R.Ay,{name:w}),!$&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(z.A,{children:a}),"number"==typeof x&&(0,i.jsx)(ne.A,{children:x})]}),(!$||k)&&(0,i.jsx)(R.Ay,{name:"arrow-micro-down"})]})}),(0,i.jsx)(et,{placement:D?"bottom-end":"bottom-start",hideOnTargetHidden:!0,...c,id:`${o}-popover`,show:!!l&&I,target:H.current,ref:S,children:l&&(0,i.jsx)(We,{testId:j.root,...l,ref:L,items:l.items,onItemClick:(e,t)=>{"multi-select"!==l.mode&&C(!1),l.onItemClick?.(e,t)},focusControlEl:l.focusControlEl||H.current||void 0})})]})}),nt=(0,H.A)(tt,Xe)},6723:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(4848),o=n(1594),a=n(8770),i=n(1301),s=n(4869),l=n(3974),c=n(9576),d=n(3351),u=n(8579),m=n(8267),p=n(9549);m.Ay.div`
  gap: 1rem;

  /* Let flex items be aligned to the baseline of their first child */
  align-items: baseline;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${i.b} {
    position: relative;
  }

  > :first-child {
    > ${i.b}:after {
      content: '-';
      position: absolute;
      width: 1rem;
      inset-inline-end: -1rem;
      text-align: center;
    }
  }

  > ${i.b}:first-child:after {
    content: '-';
    position: absolute;
    width: 1rem;
    inset-inline-end: -1rem;
    text-align: center;
  }
`.defaultProps=p.qn;const f=m.Ay.input(({theme:{base:e,components:t}})=>m.AH`
    width: 100%;
    height: ${t.input.height};
    min-height: ${e["hit-area"]["mouse-min"]};
    padding-block: 0;
    padding-inline: ${t.input.padding};
    appearance: none;
    -webkit-appearance: none;
    text-align: inherit;

    @media (pointer: coarse) {
      min-height: ${e["hit-area"]["finger-min"]};
    }
  `);f.defaultProps=p.qn;const h=f;var b=n(8044),g=n(8);const v=(0,b.A)("input",["control",...g.Y]),A=(0,s.A)((0,o.forwardRef)(function(e,t){const n=(0,d.A)(),{testId:o,id:s=n,value:m,defaultValue:p,required:f=!1,disabled:b=!1,readOnly:g=!1,label:A,additionalInfo:y,labelHidden:w,info:x,status:$,actions:k,onResolveSuggestion:E,className:j,...I}=e,C=(0,u.A)(o,v),H={};(0,l.A)(e,"value")?H.value=m??"":(0,l.A)(e,"defaultValue")&&(H.defaultValue=p??"");const S=(0,r.jsx)(i.b,{"data-testid":C.control,ref:t,id:s,required:f,disabled:b,readOnly:g,status:$,hasSuggestion:!!E&&"pending"===$,...H,autoComplete:"_off",...I,as:h,className:(0,c.A)("input",j)});return A?(0,r.jsx)(a.Ay,{testId:C,additionalInfo:y,label:A,labelHidden:w,id:s,info:x,readOnly:g,status:$,required:f,disabled:b,actions:k,onResolveSuggestion:E,children:S}):S}),v)},6765:(e,t,n)=>{n.d(t,{Ay:()=>f,pU:()=>d,vE:()=>u});var r=n(4848),o=n(1594),a=n(8267),i=n(3456),s=n(9549),l=n(7321);const c=new Map([]),d=(...e)=>{e.forEach(({set:e,name:t,...n})=>{const r=e??"budicon";c.has(r)?c.get(r).has(t)||c.get(r).set(t,n):c.set(r,new Map([[t,n]]))})},u=a.Ay.svg(({theme:e,size:t="s"})=>{const{components:{icon:{size:{s:n,m:r,l:o}}}}=e;return a.AH`
    display: inline-block;
    fill: currentColor;
    vertical-align: middle;
    flex-shrink: 0;
    /* stylelint-disable unit-allowed-list */
    min-width: 14px;
    min-height: 14px;
    /* stylelint-enable unit-allowed-list */

    @media (forced-colors: active) {
      fill: CanvasText;
    }

    ${"s"===t&&a.AH`
      width: ${n};
      height: ${n};
    `}

    ${"m"===t&&a.AH`
      width: ${r};
      height: ${r};
    `}

    ${"l"===t&&a.AH`
      width: ${o};
      height: ${o};
    `}

    ${"font-size"===t&&a.AH`
      width: 1em;
      height: 1em;
    `}
  `});u.defaultProps=s.qn;const m=a.Ay.div(({theme:e,background:t,foreground:n,size:r="m",shape:o="square"})=>{const i=(0,l.W0)(t),{base:{"border-radius":s},components:{icon:{size:{s:c,m:d,l:m},"border-radius-multiplier":p}}}=e;return a.AH`
    color: ${n??i};
    background-color: ${t};
    display: flex;
    justify-content: center;
    align-items: center;

    ${"s"===r&&a.AH`
      width: ${c};
      height: ${c};
    `}

    ${"m"===r&&a.AH`
      width: ${d};
      height: ${d};
    `}

    ${"l"===r&&a.AH`
      width: ${m};
      height: ${m};
    `}

    ${"font-size"===r&&a.AH`
      width: 1em;
      height: 1em;
    `}

    ${"square"===o&&a.AH`
      border-radius: calc(${p} * ${s});
    `}

    ${"circle"===o&&a.AH`
      border-radius: 50%;
    `}

    ${u} {
      width: 50%;
      height: 50%;
      /* stylelint-disable unit-allowed-list */
      min-width: min(14px, 90%);
      min-height: min(14px, 90%);
      /* stylelint-enable unit-allowed-list */
    }
  `});m.defaultProps=s.qn;const p=Object.freeze({Component:()=>null}),f=(0,o.forwardRef)(function({set:e,name:t,size:a,"aria-label":s,role:l,...f},h){const{base:{"icon-set":b}}=(0,i.A)(),g=e??b??"budicon",[v,A]=(0,o.useState)(c.get(g)?.get(t)??p);return(0,o.useEffect)(()=>{if(c.get(g)?.has(t))return void A(c.get(g).get(t));const e=new AbortController;return(async()=>{try{const e=encodeURIComponent(t);let r,o;switch(g){case"streamline":r="streamline-icons";break;case"budicon":r="icons";break;default:throw new Error("Unknown icon")}try{o=await n(2020)(`./${r}/${e}.icon`)}catch{o=await n(6935)(`./${r}/${e}.icon.tsx`)}if(o.name!==t||!o.Component)throw new Error("Malformed icon definition");d(o)}catch{d({set:g,name:t,...p})}e.signal.aborted||A(c.get(g).get(t)??p)})(),()=>e.abort()},[t,g]),"string"==typeof f.background?(0,r.jsx)(m,{...f,background:f.background,foreground:f.foreground,shape:f.shape,size:a,ref:h,children:(0,r.jsx)(u,{role:l??void 0!==s?"img":"presentation","aria-label":s,viewBox:v.viewBox,children:(0,r.jsx)(v.Component,{})})}):(0,r.jsx)(u,{...f,role:l??void 0!==s?"img":"presentation","aria-label":s,viewBox:v.viewBox,size:a,ref:h,children:(0,r.jsx)(v.Component,{})})})},6837:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(4848),o=n(1594),a=n(8267),i=n(3085),s=n(4680),l=n(371),c=n(3249);const d=(0,a.Ay)(l.Ay)``,u=({children:e,lines:t})=>{const[n,a]=(0,o.useState)(!0),[l,u]=(0,o.useState)(!1),m=(0,o.useRef)(null),p=(0,i.A)(),f=(0,o.useMemo)(()=>{if(!s.A)return 1/0;const e=1.25*Number.parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"),10);return t*e},[]);return(0,o.useLayoutEffect)(()=>{if(!m.current)return;const e=new ResizeObserver(e=>{const t=e.some(({target:e,contentRect:t})=>{if(e===m.current)return t.height>f});u(t)});return e.observe(m.current),()=>{e.disconnect()}},[m.current,f]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{collapsed:n,min:l?`${f}px`:"max-content",children:(0,r.jsx)("div",{ref:m,children:e})}),l&&(0,r.jsx)(d,{variant:"link",onClick:()=>a(e=>!e),children:p(n?"show_more":"show_less")})]})}},6989:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>i,name:()=>a,set:()=>o,viewBox:()=>s});var r=n(4848);const o="streamline",a="folder-empty",i=()=>(0,r.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M15.188 7.313v-2.25a1.125 1.125 0 0 0-1.126-1.125H6.189V2.813a1.125 1.125 0 0 0-1.125-1.125H1.688A1.125 1.125 0 0 0 .563 2.813v12.224a1.275 1.275 0 0 0 2.502.329l1.763-7.243a1.125 1.125 0 0 1 1.081-.81h10.404A1.125 1.125 0 0 1 17.4 8.726l-1.65 6.75a1.125 1.125 0 0 1-1.087.835H1.835"}),s="0 0 18 18"},7491:(e,t,n)=>{n.d(t,{A:()=>l,U:()=>s});var r=n(4848),o=n(1594),a=n(8267),i=n(1357);const s=a.Ay.span`
  ${i.Ic}
  -webkit-user-select: none;
  user-select: none;
`,l=(0,o.forwardRef)(function(e,t){return(0,r.jsx)(s,{...e,ref:t})})},7521:(e,t,n)=>{n.d(t,{A:()=>u,D:()=>d});var r=n(4848),o=n(1594),a=n(8267),i=n(1357),s=n(9549),l=n(9187),c=n(7321);const d=a.Ay.span(e=>{const{variant:t,status:n,theme:{base:{"font-size":r,"font-scale":o,"font-family":s,palette:{"foreground-color":d,urgent:u,warn:m,success:p},transparency:{"transparent-2":f}},components:{text:h}}}=e;let b;n&&(b={error:u,warning:m,success:p}[n]),"secondary"===t&&(b=(0,l.A)(()=>(0,i.B3)(b??d,f)));const g=(0,c.Vr)(r,o);return a.AH`
    font-size: ${g[h[t]["font-size"]]};
    font-weight: ${h[t]["font-weight"]};
    font-family: ${h[t]["font-family"]||s};
    color: ${b};
  `});d.defaultProps=s.qn;const u=(0,o.forwardRef)(function({variant:e="primary",as:t,...n},o){return!t&&/h\d/i.test(e)&&(t=e),(0,r.jsx)(d,{ref:o,variant:e,as:t,...n})})},7708:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(4848),o=n(1594),a=n(371),i=n(9061),s=n(1638);const l=(0,o.forwardRef)(function({value:e,displayText:t,variant:n="link",formattingOptions:{showCountryCode:o=!0}={},...l},c){const d=e?t||((e,{nationalFormat:t}={})=>t?(0,s.l)(e)?.formatNational():(0,s.l)(e)?.formatInternational())(e||"",{nationalFormat:!o})||e:(0,r.jsx)(i.A,{});return"text"!==n&&e?(0,r.jsx)(a.ah,{...l,variant:"link",ref:c,href:`tel:${e}`,children:d}):(0,r.jsx)("span",{ref:c,...l,children:d})})},7784:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(1594),o=n(5582),a=n(8268),i=n(712),s=n(9463);const l=(e,t,n)=>{const{portalTarget:l}=(0,s.A)(),c=l?.ownerDocument?.defaultView||window,d=(0,r.useCallback)(e=>{const r=e.composedPath(),s=r[0];if(!(0,a.A)(s,Node))return;let l=0,c=1;for(;!(0,a.A)(r[l],Document);){const e=r[l],t=r[c];if(!e||!t)return;if((0,a.A)(t,DocumentFragment)||(0,a.A)(t,Document)){if(!(0,a.A)(e,Node)||!t.contains(e))return;l=c}else if((0,a.A)(e,DocumentFragment)){if(!(0,a.A)(t,Element)||t.shadowRoot!==e)return;l=c}c+=1}(0,i.A)(t).flatMap(e=>(0,a.A)(e,Element)||(0,a.A)(e,Document)||(0,a.A)(e,DocumentFragment)?[e,...(0,o.A)(e)]:[e]).every(e=>e!==s&&!e.contains(s))&&n(e)},[...t,n]);(0,r.useEffect)(()=>{const t=Array.isArray(e)?e:[e];return t.forEach(e=>c?.document?.addEventListener(e,d)),()=>{t.forEach(e=>c?.document?.removeEventListener(e,d))}},[e,d])}},7940:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(1594),o=n(9463);const a=()=>{const{direction:e}=(0,o.A)();return(0,r.useMemo)(()=>"ltr"===e?{start:"left",end:"right",ltr:!0,rtl:!1}:{start:"right",end:"left",ltr:!1,rtl:!0},[e])}},8072:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>i,name:()=>a,set:()=>o,viewBox:()=>s});var r=n(4848);const o="budicon",a="check",i=()=>(0,r.jsx)("path",{d:"m3.464 11.371 6.222 5.974L21.582 5 23 6.371 9.732 20 2 12.743l1.464-1.372Z"}),s="0 0 25 25"},8579:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(1594),o=n(9463);const a=(e,t)=>{const{testIds:n}=(0,o.A)();return(0,r.useMemo)(()=>n?"object"==typeof e&&e?e:t(e):{},[n,e,t])}},8696:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>i,name:()=>a,set:()=>o,viewBox:()=>s});var r=n(4848);const o="budicon",a="galaxy",i=()=>(0,r.jsx)("path",{d:"M17.66 3.3 16.5 6.5l-3.3 1.16c-.22.088-.264.562 0 .67l3.3 1.17 1.16 3.3c.1.3.543.3.67 0l1.17-3.3c1.981-.7 3.081-1.09 3.3-1.17.328-.119.205-.598 0-.67L19.5 6.5l-1.17-3.2c-.187-.415-.522-.377-.67 0ZM15.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"}),s="0 0 25 25"},8889:(e,t,n)=>{n.d(t,{l:()=>s,s:()=>i});var r=n(8267),o=n(9549),a=n(7321);const i=r.Ay.div`
  background-color: inherit;

  ::before {
    content: '';
    display: block;
    position: absolute;
    inset: -0.25rem;
    background-color: inherit;
    transform: rotate(45deg);
  }
`;i.defaultProps=o.qn;const s=r.Ay.div(({theme:{base:{"border-radius":e,"z-index":{popover:t,backdrop:n},shadow:{high:o},palette:s},components:{card:{background:l,"foreground-color":c},"form-control":{"border-radius":d}}},portal:u,offset:m})=>{const{backgroundColor:p}=(0,a.LP)(l,c);return r.AH`
      /*
        Margin should never be used with Popper.
        https://popper.js.org/docs/v2/migration-guide/#4-remove-all-css-margins
      */
      margin: 0 !important;
      z-index: ${u?n-1:t};
      background: ${p};
      border-radius: calc(${d} * ${e});
      box-shadow: ${o};
      color: ${s["foreground-color"]};

      @media (forced-colors: active) {
        border: 0.0625rem solid transparent;
      }

      &[data-popper-reference-hidden='true'] {
        visibility: hidden;
        pointer-events: none;
      }

      &[data-popper-placement^='top'] {
        > ${i} {
          top: calc(100%);

          ::before {
            border-bottom-right-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          height: ${m}px;
          bottom: -${m}px;
          left: 0;
          right: 0;
        }
      }

      &[data-popper-placement^='bottom'] {
        > ${i} {
          bottom: calc(100%);

          ::before {
            border-top-left-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          height: ${m}px;
          top: -${m}px;
          left: 0;
          right: 0;
        }
      }

      &[data-popper-placement^='right'] {
        > ${i} {
          right: calc(100%);

          ::before {
            border-bottom-left-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          width: ${m}px;
          left: -${m}px;
          top: 0;
          bottom: 0;
        }
      }

      &[data-popper-placement^='left'] {
        > ${i} {
          left: calc(100%);

          ::before {
            border-top-right-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          width: ${m}px;
          right: -${m}px;
          top: 0;
          bottom: 0;
        }
      }
    `});s.defaultProps=o.qn},9061:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(4848),o=n(8267),a=n(3085),i=n(7491);const s=o.Ay.span`
  display: inline-block;
  position: relative;
`,l=()=>{const e=(0,a.A)();return(0,r.jsxs)(s,{children:[(0,r.jsx)("span",{"aria-hidden":!0,children:"––"}),(0,r.jsx)(i.A,{children:e("no_value")})]})}},9238:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>i,name:()=>a,set:()=>o,viewBox:()=>s});var r=n(4848);const o="budicon",a="warn-solid",i=()=>(0,r.jsx)("path",{d:"M23.5 22.5h-22l11-20 11 20Zm-9.741-6.935V9.39a1.655 1.655 0 0 0-1.166-.447c-.42 0-.792.134-1.212.447v6.175a3.23 3.23 0 0 0 1.212.223c.466 0 .839-.09 1.166-.223Zm-1.212 4.787c.466 0 .886-.179 1.212-.492.326-.313.466-.671.466-1.074 0-.447-.14-.85-.466-1.163-.326-.313-.746-.447-1.212-.447-.42 0-.792.134-1.119.447a1.594 1.594 0 0 0-.512 1.163c0 .403.186.76.512 1.074.327.313.7.492 1.119.492Z"}),s="0 0 25 25"},9463:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(1594),o=(n(8347),n(4680)),a=n(9115);const i=()=>{const e=o.A?window.cosmos.configurationContext??a.Q:a.Q;return(0,r.useContext)(e)}},9466:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(4848),o=n(1594),a=n(5206),i=n(1357),s=n(7521),l=n(3085),c=n(9463),d=n(2884),u=n(3456),m=n(4853),p=n(7501),f=n(405);const h=(0,o.forwardRef)(function({value:e,minValue:t=0,maxValue:n=100,message:o,placement:a,style:i,...s},l){let c=e;return"number"==typeof e&&(c=e>n||t>n?0:e<t?100:-100*(1-(e-t)/(n-t))),(0,r.jsx)(f.QS,{ref:l,role:"progressbar","aria-valuemin":t,"aria-valuemax":n,"aria-valuenow":e,placement:a,determinate:"number"==typeof e,style:{...i,"--progress":c?`${c}%`:""},...s})}),b=(0,o.forwardRef)(function({message:e,placement:t,...n},o){return(0,r.jsx)(f.wE,{ref:o,role:"progressbar",placement:t,...n,children:(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{}),(0,r.jsx)("span",{}),(0,r.jsx)("span",{})]})})}),g={ring:(0,o.forwardRef)(function({value:e,minValue:t=0,maxValue:n=100,placement:o,...a},i){let s;const l=18*Math.PI;return s="number"!=typeof e?(1-.33)*l:e>n||t>n?0:e<t?l:(1-(e-t)/(n-t))*l,(0,r.jsx)(f.pT,{ref:i,role:"progressbar","aria-valuemin":t,"aria-valuemax":n,"aria-valuenow":e,placement:o,determinate:"number"==typeof e,...a,children:(0,r.jsxs)("svg",{viewBox:"0 0 20 20",children:[(0,r.jsx)("circle",{}),(0,r.jsx)("circle",{strokeDasharray:l,style:{strokeDashoffset:s}})]})})}),bar:h,ellipsis:b},v=(0,o.forwardRef)(function({variant:e="ring",placement:t="global",visible:n=!0,focusOnVisible:h=!1,delay:b=!1,onTransitionStartIn:v,onTransitionEndIn:A,onTransitionStartOut:y,onTransitionEndOut:w,value:x,message:$,liveConfig:k,...E},j){const I=(0,l.A)(),{portalTarget:C}=(0,c.A)(),{announcePolite:H}=(0,d.A)(),S=(0,u.A)(),R=(0,m.A)(j),[L,D]=(0,o.useState)(!b&&n),[M,P]=(0,o.useState)(!L),q=(0,o.useRef)(),T=(0,o.useRef)(),z=(0,o.useRef)(),F=(0,o.useRef)(),_="global"===t||"local"===t,O="number"==typeof x?`${x}%`:void 0,V=$&&O?`${$} - ${O}`:$||O,B=()=>{D(!0),P(!1)},N=()=>{D(!1),_||P(!0)};if((0,o.useEffect)(()=>{if(n)q.current=Date.now(),b?z.current=window.setTimeout(B,100):B();else if(void 0!==z.current)if(clearTimeout(z.current),void 0!==T.current){const e=Date.now()-T.current;e>=1e3?N():F.current=window.setTimeout(N,1e3-e)}else N();else N()},[n]),(0,o.useEffect)(()=>{k?.contextualLabel&&L&&H({message:`${k.contextualLabel}, ${V??I("loading")}`,type:"status"})},[L]),(0,o.useEffect)(()=>{!M&&L&&(T.current=Date.now(),h&&R.current?.focus())},[M]),M)return null;const Z=g[e];let W=(0,r.jsx)(Z,{"aria-label":"number"!=typeof x&&V?V:I("loading"),as:"inline"===t?"span":void 0,...E,placement:t,value:x,"aria-valuetext":"number"==typeof x?V:void 0,ref:R,tabIndex:-1});"inline"!==t&&(W=(0,r.jsxs)(p.A,{container:{direction:"column",alignItems:"center",gap:.5},as:f.r3,placement:t,children:[W,$&&(0,r.jsx)(s.A,{as:f.z5,variant:"secondary","aria-hidden":!0,children:$})]}));const U=(0,i.J1)(S.base.palette["foreground-color"])>.5?"dark":"light",G=_?(0,r.jsx)(f.D2,{open:L,container:{direction:"column"},position:"global"===t?"fixed":"absolute",variant:U,alpha:.8,onBeforeTransitionIn:v,onAfterTransitionIn:A,onBeforeTransitionOut:y,onAfterTransitionOut:()=>{P(!0),w?.()},children:W}):W;return"global"===t&&C?(0,a.createPortal)(G,C):G})},9721:(e,t,n)=>{n.d(t,{ox:()=>p,oF:()=>f,J0:()=>b,Af:()=>h,Ik:()=>m,Ay:()=>y});var r=n(4848),o=n(1594),a=n(8267),i=n(6883),s=n(9549),l=n(405),c=n(8579),d=n(4869);const u=(0,n(8044).A)("summary-item",["primary","secondary","visual","actions"]),m=a.Ay.div`
  > ${l.pT}, img {
    display: block;
    object-fit: cover;
    width: 2rem;
    height: 2rem;
  }
`;m.defaultProps=s.qn;const p=(0,a.Ay)(i.A)(({theme:e,isString:t,overflowStrategy:n})=>a.AH`
    ${"ellipsis"===n?a.AH`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `:a.AH`
          word-break: break-word;
        `}

    ${t&&a.AH`
      font-weight: ${e.base["font-weight"]["semi-bold"]};
    `}
  `);p.defaultProps=s.qn;const f=(0,a.Ay)(i.A)(({overflowStrategy:e})=>a.AH`
    ${"ellipsis"===e?a.AH`
          overflow: hidden;
          text-overflow: ellipsis;
        `:a.AH`
          word-break: break-word;
        `}
  `),h=a.Ay.div`
  white-space: nowrap;
`,b=a.Ay.div``,g=({visual:e,actions:t})=>`${e?"auto ":""}minmax(0, 1fr)${t?" auto":""}`,v=({secondary:e,layout:t,visual:n,actions:r})=>`"${n?"visual ":""}primary${e&&"inline"===t?" secondary":""}${r?" actions":""}"${e&&"stacked"===t?`\n"${n?"visual ":""}secondary${r?" actions":""}"`:""}`,A=(0,o.forwardRef)(function({testId:e,visual:t,primary:n,secondary:o,layout:a="stacked",actions:s,container:l,overflowStrategy:d="wrap",as:A,...y},w){const x=(0,c.A)(e,u);return(0,r.jsxs)(i.A,{"data-testid":x.root,...y,ref:w,container:{cols:g({visual:t,actions:s}),colGap:2,areas:v({secondary:o,layout:a,visual:t,actions:s}),...l},as:b,forwardedAs:A,children:[t&&(0,r.jsx)(i.A,{"data-testid":x.visual,as:m,item:{area:"visual",alignSelf:"center"},children:t}),(0,r.jsx)(p,{"data-testid":x.primary,item:{area:"primary",alignSelf:o&&"stacked"===a?"end":"center"},isString:"string"==typeof n,overflowStrategy:d,children:n}),o&&(0,r.jsx)(f,{"data-testid":x.secondary,item:{area:"secondary",alignSelf:"stacked"===a?"start":"center"},overflowStrategy:d,children:o}),s&&(0,r.jsx)(i.A,{"data-testid":x.actions,as:h,item:{area:"actions",alignSelf:"center"},children:s})]})}),y=(0,d.A)(A,u)}}]);
//# sourceMappingURL=SDf001_74959911.8a435296.js.map