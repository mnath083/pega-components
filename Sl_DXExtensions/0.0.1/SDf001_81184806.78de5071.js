"use strict";(self.webpackChunksldxcomponents=self.webpackChunksldxcomponents||[]).push([[81184806],{8:(e,n,t)=>{t.d(n,{R:()=>i,Y:()=>r});var o=t(8044);const r=["label","info","additional-info","suggestion-accept","suggestion-reject"],i=(0,o.A)("form-field",r)},177:(e,n,t)=>{t.d(n,{A:()=>f,T:()=>g});var o=t(4848),r=t(1594),i=t(8267),a=t(9549),s=t(427),l=t(8579),c=t(4869),d=t(7491),u=t(8866);const p={Command:"⌘",Alt:"⌥",Option:"⌥",Control:"⌃",Return:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{"aria-hidden":!0,children:"↵"}),(0,o.jsx)(d.A,{children:"Return"})]}),Enter:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{"aria-hidden":!0,children:"↵"}),(0,o.jsx)(d.A,{children:"Enter"})]}),Delete:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{"aria-hidden":!0,children:"Del"}),(0,o.jsx)(d.A,{children:"Delete"})]}),CommandOrControl:"⌘"},m={Control:"Ctrl",Alt:"Alt",Option:"Alt",Meta:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{"aria-hidden":!0,children:"⊞"}),(0,o.jsx)(d.A,{children:"Windows"})]}),Command:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{"aria-hidden":!0,children:"⊞"}),(0,o.jsx)(d.A,{children:"Windows"})]}),Backspace:"Backspace",CommandOrControl:"Ctrl"},h={"Page up":(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{"aria-hidden":!0,children:"Pg up"}),(0,o.jsx)(d.A,{children:"Page up"})]}),"Page down":(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{"aria-hidden":!0,children:"Pg dn"}),(0,o.jsx)(d.A,{children:"Page down"})]}),Ins:"Insert",Shift:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{"aria-hidden":!0,children:"⇧"}),(0,o.jsx)(d.A,{children:"Shift"})]})},g=i.Ay.kbd(({theme:{base:e,components:{text:{primary:n},badges:{keyboard:t}}}})=>i.AH`
      background-color: ${t["background-color"]};
      color: ${e.palette["foreground-color"]};
      display: inline-block;
      position: relative;
      font-family: ${e["font-family"]};
      font-weight: ${n["font-weight"]};
      overflow: hidden;
      white-space: nowrap;
      padding: 0.125rem;
      border: 0.0125rem solid ${t["border-color"]};
      border-radius: calc(${e["border-radius"]} / 4);
      text-transform: capitalize;
      text-align: center;
      min-width: 1.25rem;
      height: 1.25rem;
      text-overflow: ellipsis;
      line-height: 1rem;
      inset-block-start: calc(1.25rem / 4 - 0.125rem);
    `);g.defaultProps=a.qn;const f=(0,c.A)((0,r.forwardRef)(function({testId:e,keyName:n,...t},r){const{windows:i}=(0,s.A)(),a=(0,l.A)(e,u.gF);return(0,o.jsx)(g,{"data-testid":a.root,...t,ref:r,children:i&&m[n]||p[n]||h[n]||n})}),u.gF)},285:(e,n,t)=>{t.d(n,{e:()=>f,A:()=>$});var o=t(4848),r=t(1594),i=t(8267),a=t(9549),s=t(4869),l=t(1862),c=t(9115),d=t(7501),u=t(8579),p=t(2477),m=t(4853);const h=(0,t(8044).A)("backdrop",[]),g={slow:2,medium:1,fast:.5,none:0},f=(0,i.Ay)(d.A)(e=>{const{theme:{base:n}}=e,{opacity:t,alpha:o,variant:r,position:a}=e,s=`max(calc(${g[e.transitionSpeed]} * ${n.animation.speed}), 1ms)`;return i.AH`
      position: ${a};
      z-index: ${"fixed"===a?n["z-index"].backdrop:n["z-index"].popover+1};
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-radius: inherit;
      opacity: ${t};
      transition-property: opacity;
      transition-timing-function: ${e.theme.base.animation.timing.ease};
      /* stylelint-disable declaration-block-no-duplicate-properties */
      transition-duration: 1ms;
      transition-duration: ${s};
      /* stylelint-enable declaration-block-no-duplicate-properties */

      ${"dark"===r&&i.AH`
        background: rgba(0, 0, 0, ${o});
      `}

      ${"light"===r&&i.AH`
        background: rgba(255, 255, 255, ${o});
      `}
    `});f.defaultProps=a.qn;const $=(0,s.A)((0,r.forwardRef)(function({testId:e,children:n,container:t,open:i=!1,variant:a="dark",transitionSpeed:s="medium",alpha:d=.6,position:g="fixed",onBeforeTransitionIn:$,onAfterTransitionIn:b,onBeforeTransitionOut:A,onAfterTransitionOut:w,...v},y){const x=(0,u.A)(e,h),[k,j]=(0,r.useState)("closed"),[H,C]=(0,p.A)(),S=(0,m.A)(y,C),E=(0,r.useCallback)(e=>{if("opacity"!==e.propertyName||e.target!==e.currentTarget)return;let n;"closing"===k?(n="closed",w?.()):(n="open",b?.()),j(n)},[k,w,b]);return(0,r.useEffect)(()=>{i?"closed"!==k&&"closing"!==k||($?.(),(0,l.A)(),j("opening")):"open"!==k&&"opening"!==k||(A?.(),j("closing"))},[i]),(0,r.useEffect)(()=>{if(!S.current)return;const e=window.getComputedStyle(S.current).opacity;"closing"===k&&"0"===e&&(w?.(),j("closed")),"opening"===k&&"1"===e&&(b?.(),j("open"))},[k]),i||"closed"!==k?(0,o.jsx)(c.A,{portalTarget:H??void 0,children:(0,o.jsx)(f,{"data-testid":x.root,container:{justify:"center",alignItems:"center",...t},transitionSpeed:s,opacity:"opening"===k||"open"===k?1:0,alpha:d,variant:a,position:g,onTransitionEnd:E,ref:S,...v,children:n})}):null}),h)},331:(e,n,t)=>{t.d(n,{A:()=>c});var o=t(4848),r=t(1594),i=t(8267),a=t(9549),s=t(4853);const l=i.Ay.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  color: inherit;

  & + & {
    margin-inline-start: ${e=>e.theme.base.spacing};
  }
`;l.defaultProps=a.qn;const c=(0,r.forwardRef)(function({type:e="button",disabled:n=!1,href:t,...i},a){const c=(0,r.useRef)(),d=(0,s.A)(a);(0,r.useEffect)(()=>()=>{c.current=void 0},[]);const u=e=>{i.onMouseDown?.(e),e.persist(),c.current=e},p=e=>{const n=c.current&&!c.current.defaultPrevented;return c.current=void 0,n&&d.current!==document.activeElement&&d.current?.focus(),i.onMouseUp?.(e)};return t?(0,o.jsx)(l,{as:"a",ref:d,href:t,disabled:n,...i,onMouseDown:u,onMouseDownCapture:p}):(0,o.jsx)(l,{ref:d,type:e,disabled:n,...i,onMouseDown:u,onMouseUp:p})})},371:(e,n,t)=>{t.d(n,{Ay:()=>j,OV:()=>x,ah:()=>k});var o=t(4848),r=t(1594),i=t(8267),a=t(1357),s=t(9549),l=t(9576),c=t(6061),d=t(9187),u=t(7321),p=t(4853),m=t(2477),h=t(3885),g=t(9466),f=t(405),$=t(285),b=t(6765),A=t(8889);const w=e=>{const{base:{spacing:n,animation:{speed:t,timing:{ease:o}},"disabled-opacity":r},components:{button:{"focus-shadow":a}}}=e;return i.AH`
    outline: none;
    text-decoration: none;
    transition-property: background-color, color, border-color, box-shadow, translate;
    transition-duration: calc(0.5 * ${t});
    transition-timing-function: ${o};
    cursor: pointer;

    & + & {
      margin-inline-start: ${n};
    }

    /* Not able to combine with selector above. Stylis bug? */

    & + ${A.l} + & {
      margin-inline-start: ${n};
    }

    &:disabled,
    &[disabled] {
      opacity: ${r};
      cursor: not-allowed;
      pointer-events: none;
    }

    &:enabled:focus,
    &:not([disabled]):focus {
      box-shadow: ${a};
    }
  `},v=(e,n)=>({contrastColor:n?e:(0,d.A)(()=>(0,u.W0)(e)),hoverColors:(0,u.ZV)(n||e),activeColors:(0,u.BI)(n||e)}),y=(e,n)=>{const t=(0,u.VR)(n)?n:(0,u.W0)(e),o=(0,d.A)(()=>(0,a.IM)(e,t).AA),r=o?e:(0,u.ho)(e,n),i=(0,d.A)(()=>(0,a.jh)(.9,n,e)),s=(0,d.A)(()=>(0,a.jh)(.8,n,r));return{textColor:o?e:(0,u.W0)(e),hoverBg:i,hoverFg:(0,u.ho)(e,i??"transparent"),activeBg:(0,d.A)(()=>(0,a.jh)(.8,n,r)),activeFg:(0,u.ho)(r,s??"transparent")}},x=i.Ay.button.withConfig((0,u.ks)("loading"))(({variant:e,icon:n,loading:t,compact:o,theme:r})=>{const{base:{spacing:a,"border-radius":s,palette:{"primary-background":l},"hit-area":{"mouse-min":c,"finger-min":d,"compact-min":u},animation:{speed:p}},components:{button:{color:m,"foreground-color":h,"secondary-color":g,"secondary-fill-style":b,padding:A,"border-radius":x,"border-width":k,touch:{padding:j}}}}=r,H=w(r),C=i.AH`
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: ${c};
      min-width: ${c};
      border: ${k} solid transparent;
      border-radius: calc(${s} * ${x});
      -webkit-user-select: none;
      user-select: none;
      white-space: nowrap;

      ${!n&&i.AH`
        padding: ${A};
      `}

      ${n&&i.AH`
        border-radius: calc(${s} * ${x});

        > svg {
          display: block;
        }
      `} ${o&&i.AH`
        min-height: ${u};
        min-width: ${u};
      `} @media (
        pointer: coarse) {
        border-radius: calc(${s} * ${x});

        ${!o&&i.AH`
          min-height: ${d};
          min-width: ${d};
        `}

        ${!n&&i.AH`
          padding: ${j};
        `}
      }

      &:active {
        translate: 0 0.0625rem;
      }
    `,{contrastColor:S,hoverColors:E,activeColors:z}="primary"!==e||"auto"===h?v("primary"===e?m:g):v(h,m),R=i.AH`
      --button-background-color: ${"primary"===e?m:g};
      color: ${S};
      background-color: ${"primary"===e?m:g};

      @media (hover: hover) {
        &:hover {
          background-color: ${E.background};
          text-decoration: none;
        }
      }

      &:active {
        background-color: ${z.background};
        color: ${z.foreground};
        text-decoration: none;
      }
    `,I=y(g,l),P=i.AH`
      --button-background-color: ${l};
      color: ${I.textColor};
      background-color: ${l};
      border-color: ${g};

      @media (hover: hover) {
        &:hover {
          background-color: ${I.hoverBg};
          text-decoration: none;
        }
      }

      &:active {
        color: ${I.activeFg};
        background-color: ${I.activeBg};
        border-color: ${I.activeFg};
        text-decoration: none;
      }
    `,T=y("outline"===b?g:m,l),D=i.AH`
      --button-background-color: ${n?"transparent":l};
      color: ${n?"currentColor":T.textColor};
      background-color: ${n?"transparent":l};

      @media (hover: hover) {
        &:hover {
          ${n&&i.AH`
            ::before {
              content: '';
              position: absolute;
              top: calc(${k} * -1);
              bottom: calc(${k} * -1);
              left: calc(${k} * -1);
              right: calc(${k} * -1);
              border-radius: inherit;
              background-color: currentColor;
              opacity: 0.1;
            }
          `}

          ${!n&&i.AH`
            background-color: ${T.hoverBg};
            color: ${T.hoverFg};
            border-color: ${T.hoverFg};
            text-decoration: none;
          `}
        }

        &:active {
          ${n&&i.AH`
            ::before {
              content: '';
              position: absolute;
              top: calc(${k} * -1);
              bottom: calc(${k} * -1);
              left: calc(${k} * -1);
              right: calc(${k} * -1);
              border-radius: inherit;
              background-color: currentColor;
              opacity: 0.2;
            }
          `}

          ${!n&&i.AH`
            background-color: ${T.activeBg};
            color: ${T.activeFg};
            border-color: ${T.activeFg};
            text-decoration: none;
          `}
        }
      }
    `;return i.AH`
      ${H}
      ${C}
        ${("primary"===e||"secondary"===e&&"fill"===b)&&R}
        ${"secondary"===e&&"outline"===b&&P}
        ${"simple"===e&&D}
        ${"primary"===e&&i.AH`
        font-weight: ${r.base["font-weight"]["semi-bold"]};
      `}

        ${t&&i.AH`
        ${$.e} {
          background-color: var(--button-background-color);
          border-radius: inherit;
        }

        ${f.pT} {
          width: 1em;
          height: 1em;

          ${!n&&i.AH`
            margin-inline-end: calc(${a} / 2);
          `}
          circle:nth-child(2) {
            animation-duration: calc(${p} * 2);
          }
        }
      `}
    `});x.defaultProps=s.qn;const k=i.Ay.a.withConfig((0,u.ks)("loading"))(({theme:e,variant:n,href:t})=>{const{base:{palette:{"foreground-color":o}},components:{button:{color:r,"secondary-fill-style":a},link:{color:s}}}=e;let l=s;t||"solid"!==a||(l=r);const{background:c}=(0,u.BI)(l),{background:d}=(0,u.BI)(o),p=w(e),m=i.AH`
    background-color: transparent;
    display: inline;
    text-align: start;
    border: none;

    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }

    > ${b.vE} {
      vertical-align: bottom;
    }
  `,h=i.AH`
    color: ${l};

    &:active {
      color: ${c};
    }
  `,g=i.AH`
    color: ${o};

    &:active {
      color: ${d};
    }
  `;return i.AH`
    ${p}
    ${m}
      ${"link"===n&&h}
      ${"text"===n&&g}
  `});k.defaultProps=s.qn;const j=(0,r.forwardRef)(function({variant:e="secondary",type:n="button",disabled:t=!1,icon:i=!1,compact:a=!1,href:s,as:d,forwardedAs:u,label:f,"aria-label":$,loading:b=!1,children:A,className:w,...v},y){const[j,H]=(0,m.A)(),C=(0,r.useRef)(),S=(0,r.useRef)(),E=(0,r.useRef)(),z=(0,p.A)(y,H),R=["link","text"].includes(e),I=b&&!R,P=R?k:x,T=e=>{z.current&&S.current&&E.current&&(0,c.A)({x:e.clientX,y:e.clientY},S.current)&&Date.now()-E.current<500&&z.current.click()};return(0,r.useEffect)(()=>(document.addEventListener("mouseup",T),()=>{document.removeEventListener("mouseup",T),C.current=void 0,S.current=void 0,E.current=void 0}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(P,{...v,ref:z,as:d||(s?"a":"button"),forwardedAs:u||(s?"a":"button"),className:(0,l.A)("button",w,{variant:e,icon:i,compact:a,loading:b}),variant:e,icon:i,compact:a,type:s?void 0:n,href:s,disabled:t&&!s,loading:I,"aria-label":$||f,onMouseDown:e=>{v.onMouseDown?.(e),e.persist(),C.current=e,S.current=e.currentTarget.getBoundingClientRect(),E.current=Date.now()},onMouseUp:e=>{const n=C.current&&!C.current.defaultPrevented;return C.current=void 0,S.current=void 0,E.current=void 0,n&&z.current!==document.activeElement&&z.current?.focus(),v.onMouseUp?.(e)},children:[I&&(0,o.jsx)(g.A,{variant:"ring",placement:"inline"}),i&&I?null:A]}),j&&f&&(0,o.jsx)(h.A,{target:j,showDelay:"none",hideDelay:"none",describeTarget:!1,children:f})]})})},768:(e,n,t)=>{t.d(n,{q:()=>A,A:()=>v});var o=t(4848),r=t(1594),i=t(8267),a=t(1357),s=t(7501),l=t(6765),c=t(8696),d=t(6989),u=t(7521),p=t(9187),m=t(4869),h=t(3456),g=t(3085),f=t(8579),$=t(9549);const b=(0,t(8044).A)("empty-state",["message","icon"]);(0,l.pU)(c),(0,l.pU)(d);const A=i.Ay.div(({theme:e})=>{const n=(0,p.A)(()=>(0,a.B3)(e.base.palette["foreground-color"],e.base.transparency["transparent-2"]));return i.AH`
    height: 100%;

    ${l.vE} {
      font-size: 1.5rem;
      height: 1.5rem;
      width: 1.5rem;
      color: ${n};
    }
  `});A.defaultProps=$.qn;const w=(0,r.forwardRef)(function(e,n){const{base:{"icon-set":t}}=(0,h.A)(),r=(0,g.A)(),{testId:i,message:a=r("no_items"),...c}=e,d=(0,f.A)(i,b);return(0,o.jsxs)(s.A,{"data-testid":d.root,...c,as:A,ref:n,container:{direction:"column",alignItems:"center",justify:"center",gap:1},children:[(0,o.jsx)(l.Ay,{"data-testid":d.icon,name:"streamline"===t?"folder-empty":"galaxy"}),(0,o.jsx)(u.A,{"data-testid":d.message,variant:"secondary",children:a})]})}),v=(0,m.A)(w,b)},1093:(e,n,t)=>{t.d(n,{A:()=>i});var o=t(4848),r=t(9115);const i=e=>n=>(0,o.jsx)(r.A,{children:(0,o.jsx)(e,{...n})})},1269:(e,n,t)=>{t.d(n,{A:()=>c});var o=t(4848),r=t(1594),i=t(5206),a=t(8267),s=t(9463);const l=a.Ay.span`
  display: none;
`,c=(0,r.forwardRef)(function(e,n){const{portalTarget:t}=(0,s.A)();return t?(0,i.createPortal)((0,o.jsx)(l,{...e,ref:n}),t):null})},1294:(e,n,t)=>{t.d(n,{A:()=>r});var o=t(1594);(0,o.createContext)({drawerOpen:!1,openDrawer:()=>{},closeDrawer:()=>{}});const r=(0,o.createContext)({navOpen:!1,drawerOpen:!1,setDrawerOpen:()=>{},navState:"closed",collapsedHoverMenus:!1,focusedImperatively:{get current(){return!1}},headerEl:null,previewTriggerRef:{get current(){return null},set current(e){}},searchContainerEl:null,setSearchContainerEl:()=>{},mobileNavOpen:!1,previewActive:!1,setPreviewActive:()=>{}})},1301:(e,n,t)=>{t.d(n,{b:()=>c});var o=t(4848),r=t(1594),i=t(8267),a=t(1357),s=t(9549),l=t(7321);const c=i.Ay.div(({theme:{base:{"border-radius":e,"font-size":n,"font-scale":t,animation:{speed:o,timing:r},palette:s},components:{"form-field":c,"form-control":{"foreground-color":d,"background-color":u,"border-color":p,"border-radius":m,"border-width":h,":hover":{"border-color":g},":focus":{"border-color":f,"box-shadow":$},":disabled":{"border-color":b,"background-color":A},":read-only":{"border-color":w,"background-color":v}}}},status:y,hasSuggestion:x})=>{const k=(0,l.Vr)(n,t),j=y&&c[y]?c[y]["status-color"]:p,H=x&&y?(0,a.jh)(.1,c[y]["status-color"],s["primary-background"]):u;return i.AH`
      color: ${d};
      background-color: ${H};
      border-radius: calc(${e} * ${m});
      border-color: ${j};
      border-width: ${h};
      border-style: solid;
      transition-property: color, background-color, border-color;
      transition-duration: ${o};
      transition-timing-function: ${r.ease};
      &,
      & > select {
        outline: none;
      }

      &:disabled,
      &[disabled] {
        background-color: ${A};
        border-color: ${b};
        cursor: not-allowed;
      }

      &:focus:not([disabled]) {
        border-color: ${f};
        box-shadow: ${$};
        ${x&&i.AH`
          background-color: ${u};
        `}
      }

      &:focus-within:not([disabled]) {
        ${x&&i.AH`
          background-color: ${u};
        `}
      }

      &:hover:not([readonly]):not([disabled]):not(:focus, :focus-within) {
        ${!y&&i.AH`
          border-color: ${g};
        `}
        ${x&&i.AH`
          background-color: ${u};
          box-shadow: 0 0 0 0.125rem ${(0,a.B3)(j,.2)};
        `}
      }

      ${x&&i.AH`
        border-end-end-radius: 0;
      `}

      &[readonly] {
        background-color: ${v};
        border-color: ${w};
      }

      @media (pointer: coarse) {
        /* stylelint-disable-next-line unit-allowed-list */
        font-size: max(${k.s}, 16px);
      }
    `});c.defaultProps=s.qn,(0,r.forwardRef)(function(e,n){return(0,o.jsx)(c,{ref:n,...e})})},1564:(e,n,t)=>{t.d(n,{A:()=>f});var o=t(4848),r=t(1594),i=t(8267),a=t(1357),s=t(9549),l=t(9187),c=t(4869),d=t(7321),u=t(8579),p=t(8866);const m=i.Ay.span(({theme:e,variant:n,children:t})=>{const{foreground:o,background:r}=e.components.badges.count[n],s=(0,l.A)(()=>(0,a.B3)(o,.1)),c=(0,d.Vr)(e.base["font-size"],e.base["font-scale"]);return i.AH`
    display: inline-block;
    block-size: 1rem;
    flex-shrink: 0;
    border-radius: calc(9999 * ${e.base["border-radius"]});
    color: ${o};
    background-color: ${r};
    box-shadow: inset 0 0 0 0.0625rem ${s};
    font-size: ${c.xxs};
    font-weight: ${e.base["font-weight"].bold};
    line-height: 1rem;
    text-align: center;
    white-space: nowrap;

    ${1===t.length?i.AH`
          aspect-ratio: 1 / 1;
        `:i.AH`
          padding-inline: ${e.base.spacing};
        `}
  `});m.defaultProps=s.qn;const h=e=>e<1e3?"":1e3<=e&&e<1e6?"K":1e6<=e&&e<1e9?"M":1e9<=e&&e<1e12?"B":1e12<=e&&e<1e15?"T":"",g=e=>{const n=Math.abs(e);return n<1e3?`${e}`:`${e<0?"-":""}${(e=>{for(let n=3;n<15;n+=3){if(e<10**(n+1))return`${`${e}`.slice(0,1)}.${`${e}`.slice(1,2)}${h(e)}`;if(e<10**(n+2))return`${`${e}`.slice(0,2)}${h(e)}`;if(e<10**(n+3))return`${`${e}`.slice(0,3)}${h(e)}`}return"999T+"})(n)}`},f=(0,c.A)((0,r.forwardRef)(function({testId:e,variant:n="default",children:t,...r},i){const a=(0,u.A)(e,p.EF);return Number.isInteger(t)?(0,o.jsx)(m,{"data-testid":a.root,variant:n,...r,ref:i,children:g(t)}):null}),p.EF)},1847:(e,n,t)=>{t.d(n,{A:()=>s});var o=t(4848),r=t(1594),i=t(371),a=t(9061);const s=(0,r.forwardRef)(function({value:e,displayText:n,variant:t="link",...r},s){const l=e?n||e:(0,o.jsx)(a.A,{});return"text"!==t&&e?(0,o.jsx)(i.ah,{...r,variant:"link",ref:s,href:`mailto:${e}`,children:l}):(0,o.jsx)("span",{ref:s,...r,children:l})})},3249:(e,n,t)=>{t.d(n,{A:()=>c});var o=t(4848),r=t(1594),i=t(4853),a=t(3700),s=t(3456);const l=e=>{const{status:n,dimension:t,transitionSpeed:o,transitionTimingFunction:r,min:i,max:a,nullWhenCollapsed:s,el:l}=e,c={};let d=a;return l&&!a&&(d=((e,n)=>e?"height"===n?`${e.scrollHeight}px`:`${e.scrollWidth}px`:"")(l,t)),"expanded"!==n&&"collapsed"!==n||((a||i)&&(c[t]="expanded"===n?d:i||0,c["overflow"+("width"===t?"X":"Y")]="hidden"),"collapsed"!==n||s||i||(c[t]=0,c.overflow="hidden",c.visibility="hidden")),"expanding"!==n&&"collapsing"!==n||(c[t]="expanding"===n?d:i||0,c.overflow="hidden",c.transitionProperty=t,c.transitionDuration=`max(${o}, 0.01ms)`,c.transitionTimingFunction=r),c},c=(0,r.forwardRef)(function(e,n){const{base:{animation:t}}=(0,s.A)(),{children:c,dimension:d="height",collapsed:u=!1,onBeforeExpand:p,onAfterExpand:m,onBeforeCollapse:h,onAfterCollapse:g,transitionSpeed:f=t.speed,min:$,max:b,nullWhenCollapsed:A=!1,as:w="div",...v}=e,[y,x]=(0,r.useState)(u?"collapsed":"expanded"),k=(0,r.useState)(),j=k[1];let H=k[0];const C=(0,a.A)(y),S=(0,i.A)(n),E=(0,r.useCallback)(e=>{e.target===S.current&&e.propertyName===d&&x("expanding"===y?"expanded":"collapsed")},[S.current,y]);return(0,r.useLayoutEffect)(()=>{const e=u,n=!u,o=["expanded","expanding"].includes(y),r=["collapsed","collapsing"].includes(y);n&&r?(p?.(),x("expanding")):e&&o&&(h?.(),x("collapsing")),"expanded"===y&&"expanded"!==C?m?.():"collapsed"===y&&"collapsed"!==C&&g?.(),j(l({dimension:d,min:$,max:b,transitionSpeed:f,nullWhenCollapsed:A,status:y,el:S.current,transitionTimingFunction:t.timing.ease}))},[u,y,$,b]),y!==C&&["expanded","collapsed"].includes(C)&&(H=l({dimension:d,min:$,max:b,transitionSpeed:f,nullWhenCollapsed:A,status:"expanding"===y?"collapsing":"expanding",el:S.current,transitionTimingFunction:t.timing.ease})),"collapsed"===y&&A&&!$?null:(0,o.jsx)(w,{ref:S,onTransitionEnd:E,...v,inert:"collapsed"!==y||A||$?void 0:"",style:H,children:c})})},5120:(e,n,t)=>{t.d(n,{Ay:()=>H});var o=t(4848),r=t(1594),i=t(8267),a=t(1357),s=t(4853),l=t(7940),c=t(3700),d=t(7784),u=t(1862),p=t(9608),m=t(9549),h=t(3029),g=t(371),f=t(6765),$=t(3085),b=t(5190),A=t(5285),w=t(4519);(0,f.pU)(A),(0,f.pU)(w);const v=(0,i.Ay)(g.Ay)(({rotateIcon:e})=>i.AH`
    cursor: grab;

    &:active {
      cursor: grabbing;
    }

    &:not(:focus) {
      ${a.Ic};
    }

    ${e&&i.AH`
      ${f.vE} {
        transform: rotate(90deg);
      }
    `}
  `),y=i.Ay.div(({theme:e})=>i.AH`
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

    ${g.OV} {
      position: absolute;
      inset-block-start: 50%;
      inset-inline-start: calc(-2 * ${e.base.spacing});
      translate: 0 -50%;
      box-shadow: ${e.base.shadow.focus};
    }
  `);y.defaultProps=m.qn;const x=(0,r.forwardRef)(function({onMouseDown:e,onKeyDown:n},t){const i=(0,s.A)(t),a=(0,$.A)(),[l,c]=(0,r.useState)(!1),[d,u]=(0,r.useState)(!1);(0,b.A)(()=>{c(!1),u(!1)});const m=n=>{const t=(0,p.A)(i);t&&(t.style.setProperty("user-select","none"),c(!0),e?.(n))};return(0,o.jsx)(y,{onMouseDown:m,onMouseUp:()=>{const e=(0,p.A)(i);e&&(e.style.removeProperty("user-select"),c(!1))},ref:i,children:(0,o.jsx)(v,{tabIndex:0,icon:!0,label:l||d?void 0:a("resize"),"aria-label":a(l||d?"drag_handle_cancel_description":"drag_handle_activate_description"),onMouseDown:m,onKeyDown:e=>{"Space"===e.code&&(e.preventDefault(),u(!d)),n?.(e,d)},onBlur:()=>{u(!1)},rotateIcon:d,children:(0,o.jsx)(f.Ay,{name:d?"arrow-micro-up-down":"drag"})})})}),k=(0,a.ir)(h.Y3),j=i.Ay.div(e=>{const{state:n,shadow:t,position:o,placement:r,transitionSpeed:a,size:s,resizeable:l,theme:c}=e;let d="horizontal",u="X",p="top";"top"!==r&&"bottom"!==r||(d="vertical",u="Y",p="left");const m="open"===n||"opening"===n?0:"100%",h=a||c.base.animation.speed;return i.AH`
    z-index: ${c.base["z-index"].drawer};
    position: ${o};
    ${r}: 0;
    ${p}: 0;
    height: ${"vertical"===d?s:"100%"};
    width: ${"horizontal"===d?s:"100%"};
    transition-property: transform, box-shadow, opacity;
    transition-duration: max(${h}, 0.0001s);
    transition-timing-function: ${c.base.animation.timing.ease};
    transform: ${"open"===n?"none":`translate${u}(${"top"===r||"left"===r?"-":""}${m})`};

    ${t&&i.AH`
      box-shadow: ${c.base.shadow.high};
    `}

    ${l&&i.AH`
      width: ${"horizontal"===d?"var(--resize-drawer-width)":"100%"};
    `}
  `});j.defaultProps=m.qn;const H=(0,r.forwardRef)(function(e,n){const{open:t=!1,shadow:i=!1,position:a="absolute",children:m,placement:g="right",transitionSpeed:f,size:$="100%",resizeable:b=!1,onAfterOpen:A,onAfterClose:w,onBeforeOpen:v,onBeforeClose:y,onOuterClick:H,nullWhenClosed:C=!1,...S}=e,E=(0,s.A)(n),{ltr:z,rtl:R}=(0,l.A)(),[I,P]=(0,r.useState)(t?"open":"closed");let T=(0,c.A)(I);T||(T=I),(0,d.A)("mousedown",[E],(0,r.useCallback)(()=>{t&&H?.()},[t,H])),(0,r.useEffect)(()=>{!t||"closed"!==I&&"closing"!==I?t||"open"!==I&&"opening"!==I?t&&"open"===I&&"open"!==T?A?.():t||"closed"!==I||"closed"===T||w?.():(y?.(),P("closing")):(v?.(),(0,u.A)(E.current),P("opening"))},[t,I,T,v,y,A,w]);const D=(0,r.useCallback)(e=>{e.target===E.current&&"transform"===e.propertyName&&P(t?"open":"closed")},[t]),M=(0,r.useRef)();(0,r.useEffect)(()=>{if(!b||!E.current)return;const e=(0,p.A)(E);e&&(e.style.getPropertyValue("--resize-drawer-width")||e.style.setProperty("--resize-drawer-width",$))},[E.current]);const F=(0,r.useCallback)(e=>{const n=(0,p.A)(E),t=E.current?.getBoundingClientRect();if(!t||!n)return;M.current=e.clientX;const o=new AbortController;n.addEventListener("mousemove",e=>{if(!M.current||!t.width)return;const o=M.current,r="right"===g?o-e.clientX:e.clientX-o,i=Math.max(r+t.width,parseInt(k,10));n.style.setProperty("--resize-drawer-width",`clamp(${k}, ${i}px, ${h.m1})`)},{passive:!0,signal:o.signal}),n.addEventListener("mouseup",()=>{o.abort()},{once:!0})},[g]),_=(0,r.useCallback)((e,n)=>{if(!n)return;const t=(0,p.A)(E),o=document.documentElement.clientWidth*h.ph,r=E.current?.getBoundingClientRect();if(!r||!t)return;if("ArrowLeft"!==e.code&&"ArrowRight"!==e.code)return;e.preventDefault();const i=("ArrowLeft"===e.code?1:-1)*("right"===g?1:-1),a=Math.max(r.width+i*o,parseInt(k,10));t.style.setProperty("--resize-drawer-width",`clamp(${k}, ${a}px, ${h.m1})`)},[g]),q=b&&"open"===I&&("left"===g&&R||"right"===g&&z);return"closed"===I&&!t&&C?null:(0,o.jsxs)(j,{ref:E,position:a,shadow:i&&t,transitionSpeed:f,placement:g,size:$,resizeable:b,open:t,state:I,onTransitionEnd:D,...S,children:[m,q&&(0,o.jsx)(x,{onMouseDown:F,onKeyDown:_})]})})},6883:(e,n,t)=>{t.d(n,{A:()=>p,e:()=>u});var o=t(4848),r=t(1594),i=t(8267),a=t(9549);const s=e=>["between","around","evenly"].includes(e)?`space-${e}`:e,l=e=>{if(!e)return;if(!0===e)return i.AH`
      display: grid;
    `;const{inline:n,pad:t,cols:o,autoCols:r,rows:a,autoRows:l,autoFlow:c,areas:d,template:u,colGap:p,rowGap:m,gap:h,justifyItems:g,justifyContent:f,alignItems:$,alignContent:b}=e;return i.AH`
    display: ${n?"inline-grid":"grid"};

    ${void 0!==t&&i.AH`
      padding: ${({theme:{base:{spacing:e}}})=>(Array.isArray(t)?t:[t]).map(n=>`calc(${n} * ${e})`).join(" ")};
    `}

    ${o&&i.AH`
      grid-template-columns: ${o};
    `}

    ${r&&i.AH`
      grid-auto-columns: ${r};
    `}

    ${a&&i.AH`
      grid-template-rows: ${a};
    `}

    ${l&&i.AH`
      grid-auto-rows: ${l};
    `}

    ${c&&i.AH`
      grid-auto-flow: ${c};
    `}

    ${d&&i.AH`
      grid-template-areas: ${d};
    `}

    ${u&&i.AH`
      grid-template: ${u};
    `}

    ${void 0!==h&&i.AH`
      gap: calc(${h} * ${e=>e.theme.base.spacing});
    `}

    ${void 0!==p&&i.AH`
      column-gap: calc(${p} * ${e=>e.theme.base.spacing});
    `}

    ${void 0!==m&&i.AH`
      row-gap: calc(${m} * ${e=>e.theme.base.spacing});
    `}

    ${g&&i.AH`
      justify-items: ${g};
    `}

    ${f&&i.AH`
      justify-content: ${s(f)};
    `}

    ${$&&i.AH`
      align-items: ${$};
    `}

    ${b&&i.AH`
      align-content: ${s(b)};
    `}
  `},c=e=>{if(!e)return;const{colStart:n,colEnd:t,colStartEnd:o,rowStart:r,rowEnd:a,rowStartEnd:s,area:l,justifySelf:c,alignSelf:d}=e;return i.AH`
    ${n&&i.AH`
      grid-column-start: ${n};
    `}

    ${t&&i.AH`
      grid-column-end: ${t};
    `}

    ${o&&i.AH`
      grid-column: ${o};
    `}

    ${r&&i.AH`
      grid-row-start: ${r};
    `}

    ${a&&i.AH`
      grid-row-end: ${a};
    `}

    ${s&&i.AH`
      grid-row: ${s};
    `}

    ${l&&i.AH`
      grid-area: ${l};
    `}

    ${c&&i.AH`
      justify-self: ${c};
    `}

    ${d&&i.AH`
      align-self: ${d};
    `}
  `},d=["xs","sm","md","lg","xl"],u=i.Ay.div(({container:e,item:n,theme:{base:{breakpoints:t}},xs:o,sm:r,md:a,lg:s,xl:u})=>{const p={xs:o,sm:r,md:a,lg:s,xl:u};return i.AH`
      ${l(e)}
      ${c(n)}

    ${d.map(e=>p[e]&&i.AH`
            @media screen and (min-width: ${t[e]}) {
              ${l(p[e]?.container)}
              ${c(p[e]?.item)}
            }
          `)}
    `});u.defaultProps=a.qn;const p=(0,r.forwardRef)(function(e,n){return(0,o.jsx)(u,{...e,ref:n})})},7501:(e,n,t)=>{t.d(n,{A:()=>p,D:()=>u});var o=t(4848),r=t(1594),i=t(8267),a=t(9549);const s=e=>["between","around","evenly"].includes(e)?`space-${e}`:["start","end"].includes(e)?`flex-${e}`:e,l=(e,n)=>{if(!e)return"";if(!0===e)return i.AH`
      display: flex;
    `;const t=(e=>{if(!Array.isArray(e))return[e,e,e,e];switch(e.length){case 1:return[e[0],e[0],e[0],e[0]];case 2:return[e[0],e[1],e[0],e[1]];case 3:return[e[0],e[1],e[2],e[1]];case 4:return e;default:return[void 0,void 0,void 0,void 0]}})(e.pad);if(e&&"object"==typeof e){const o=!e.direction||e.direction.includes("row"),r=e.direction&&e.direction.includes("reverse");return i.AH`
      display: ${e.inline?"inline-flex":"flex"};

      ${void 0!==t[0]&&i.AH`
        padding-block-start: calc(${t[0]} * ${n});
      `}
      ${void 0!==t[1]&&i.AH`
        padding-inline-end: calc(${t[1]} * ${n});
      `}

        ${void 0!==t[2]&&i.AH`
        padding-block-end: calc(${t[2]} * ${n});
      `}

        ${void 0!==t[3]&&i.AH`
        padding-inline-start: calc(${t[3]} * ${n});
      `}

      ${e.direction&&i.AH`
        flex-direction: ${e.direction};
      `}

      ${e.justify&&i.AH`
        justify-content: ${s(e.justify)};
      `}

      ${e.wrap&&i.AH`
        flex-wrap: ${e.wrap};
      `}

      ${e.alignItems&&i.AH`
        align-items: ${s(e.alignItems)};
      `}

      ${e.alignContent&&i.AH`
        align-content: ${s(e.alignContent)};
      `}

      ${e.itemGap&&i.AH`
          > * {
            margin-${o?"inline-start":"block-start"}: calc(${e.itemGap} * ${e=>e.theme.base.spacing});
            ${r?":last-child":":first-child"} {
              margin-${o?"inline-start":"block-start"}: 0;
            }
          }
        `}

      ${void 0!==e.gap&&i.AH`
        gap: calc(${e.gap} * ${e=>e.theme.base.spacing});
      `}

      ${void 0!==e.colGap&&i.AH`
        column-gap: calc(${e.colGap} * ${e=>e.theme.base.spacing});
      `}

      ${void 0!==e.rowGap&&i.AH`
        row-gap: calc(${e.rowGap} * ${e=>e.theme.base.spacing});
      `}
    `}},c=e=>i.AH`
    ${e&&i.AH`
      max-width: 100%;
      min-width: 0;

      ${void 0!==e.grow&&i.AH`
        flex-grow: ${e.grow};
      `}

      ${void 0!==e.shrink&&i.AH`
        flex-shrink: ${e.shrink};
      `}

      ${e.alignSelf&&i.AH`
        align-self: ${s(e.alignSelf)};
      `}

      ${e.basis&&i.AH`
        flex-basis: ${e.basis};
      `}
    `}
  `,d=["xs","sm","md","lg","xl"],u=i.Ay.div(({container:e,item:n,theme:{base:{breakpoints:t,spacing:o}},xs:r,sm:a,md:s,lg:u,xl:p})=>{const m={xs:r,sm:a,md:s,lg:u,xl:p};return i.AH`
      ${l(e,o)}
      ${c(n)}

    ${d.map(e=>m[e]&&i.AH`
            @media screen and (min-width: ${t[e]}) {
              ${l(m[e]?.container,o)}
              ${c(m[e]?.item)}
            }
          `)}
    `});u.defaultProps=a.qn;const p=(0,r.forwardRef)(function(e,n){return(0,o.jsx)(u,{...e,ref:n})})},7902:(e,n,t)=>{t.d(n,{A:()=>c});var o=t(4848),r=t(1594),i=t(8267),a=t(4860),s=t(4680),l=t(9115);const c=({children:e,theme:n})=>{const t=s.A?window.cosmos.configurationContext??l.Q:l.Q,c=(0,r.useContext)(t),d=new a.A({theme:n,parent:c.themeMachine});return(0,o.jsx)(t.Provider,{value:{...c,themeMachine:d},children:(0,o.jsx)(i.NP,{theme:d.theme,children:e})})}},8249:(e,n,t)=>{t.d(n,{gP:()=>w});var o=t(4848),r=t(1594),i=t(8267),a=t(5206),s=t(9549),l=t(9463),c=t(574),d=t(4948),u=t(8579),p=t(2477),m=t(4853),h=t(6416),g=t(9115),f=t(4869);const $=(0,t(8044).A)("fullscreen",[]),b=i.Ay.div(({theme:e,fullscreen:n})=>i.AH`
      ${n&&i.AH`
        --content-height-in-view: 100vh;
        position: fixed;
        z-index: ${e.base["z-index"].backdrop};
        inset: 0;
      `}
    `);b.defaultProps=s.qn;const A=(0,r.createContext)(void 0),w=()=>(0,r.useContext)(A),v=({parentJSX:e,parentElRef:n})=>{const{portalTarget:t}=(0,l.A)();(0,c.A)(n);const{disableScroll:i,enableScroll:s}=(0,d.A)();return(0,r.useEffect)(()=>(i(),s),[]),t?(0,a.createPortal)((0,o.jsx)(g.A,{portalTarget:n.current??void 0,children:e}),t):null};(0,f.A)((0,r.forwardRef)(function({children:e,testId:n,...t},i){const a=(0,u.A)(n,$),[s,l]=(0,p.A)(),c=(0,m.A)(l,i),[d,g]=(0,p.A)(),[f,w]=(0,r.useState)(void 0),y=(0,r.useMemo)(()=>[f,()=>{w(e=>!e)}],[f]),x=(0,h.A)(d,!!f),k=(0,o.jsx)(b,{"data-testid":a.root,"data-fullscreen-enabled":!!f||void 0,...t,ref:c,fullscreen:!!f,"data-popover-id":x,children:e});return(0,o.jsx)(A.Provider,{value:y,children:f&&s?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{ref:g,style:{display:"none"}}),(0,o.jsx)(v,{parentJSX:k,parentElRef:c})]}):k})}),$)},8770:(e,n,t)=>{t.d(n,{GW:()=>ae,Ay:()=>pe});var o=t(4848),r=t(1594),i=t(8267),a=t(1357),s=t(9549),l=t(7501),c=t(3085),d=t(4853),u=t(371),p=t(6765),m=t(6511);const h=(0,r.forwardRef)(function({"data-testid":e,items:n,menuAt:t=2,scrollAt:i,iconOnly:a=!0,menuButtonProps:s,contextualLabel:l,compact:h=!1,disabled:g=!1,tabIndex:f},$){const b=(0,c.A)(),A=(0,d.A)($);return n&&0!==n.length?n.length>=t?(0,o.jsx)(m.A,{...e?{"data-testid":e}:{},ref:A,text:b("actions"),"aria-label":l&&b("actions_for",[l]),iconOnly:!0,icon:"more",variant:"simple",compact:h,onClick:s?.onClick,onKeyDown:s?.onKeyDown,disabled:g,tabIndex:f,menu:{scrollAt:i,items:n.map(({text:e,onClick:n,...t})=>({...t,primary:e,onClick:n?(e,t)=>{n(e,t,A.current??void 0)}:void 0}))}}):(0,o.jsx)(o.Fragment,{children:n.map(({id:n,icon:t,text:i,onClick:s,...c})=>(0,r.createElement)(u.Ay,{...e?{"data-testid":e}:{},key:n,variant:t&&a?"simple":void 0,onClick:e=>s?.(n,e),label:t?i:void 0,icon:!!t&&a,compact:h,"aria-label":l?`${i} - ${l}`:i,disabled:g,...c},t&&a?(0,o.jsx)(p.Ay,{name:t}):i))}):null});var g=t(3351),f=t(8579),$=t(2884),b=t(3113),A=t(7321),w=t(7491),v=t(9187),y=t(7666),x=t(9576),k=t(4869),j=t(9238),H=t(3339),C=t(8072),S=t(9418),E=t(8889),z=t(49);const R=(0,t(8044).A)("html",[]),I=(0,S.A)(),P=i.AH`
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
`,T=i.Ay.div(({theme:e})=>i.AH`
    width: 100%;
    overflow-x: auto;
    overflow-wrap: break-word;
    contain: paint;
    ${(e=>{const{base:{"font-size":n,"font-scale":t,palette:o},components:{text:r}}=e,a=(0,A.Vr)(n,t);return`\n    ${P}\n    table {\n      ${(e=>i.AH`
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
`)(e)}\n    }\n    img {\n      max-width: 100%;\n      height: auto;\n      border-radius: 0.25rem;\n    }\n    a {\n      color: ${o.interactive};\n    }\n    pre {\n      white-space: break-spaces;\n    }\n    p {\n      min-height: ${a[r.primary["font-size"]]};\n    }\n    h1 {\n      font-size: ${a[r.h1["font-size"]]};\n      font-weight: ${r.h1["font-weight"]};\n      min-height: ${a[r.h1["font-size"]]};\n    }\n    h2 {\n      font-size: ${a[r.h2["font-size"]]};\n      font-weight: ${r.h2["font-weight"]};\n      min-height: ${a[r.h2["font-size"]]};\n    }\n    h3 {\n      font-size: ${a[r.h3["font-size"]]};\n      font-weight: ${r.h3["font-weight"]};\n      min-height: ${a[r.h3["font-size"]]};\n    }\n    h4 {\n      font-size: ${a[r.h4["font-size"]]};\n      font-weight: ${r.h4["font-weight"]};\n      min-height: ${a[r.h4["font-size"]]};\n    }\n    h5 {\n      font-size: ${a[r.h5["font-size"]]};\n      font-weight: ${r.h5["font-weight"]};\n      min-height: ${a[r.h5["font-size"]]};\n    }\n    h6 {\n      font-size: ${a[r.h6["font-size"]]};\n      font-weight: ${r.h6["font-weight"]};\n      min-height: ${a[r.h6["font-size"]]};\n    }\n  `})(e)}

    ${E.l} ul {
      ul {
        padding-inline-start: 0;
      }
      ol {
        padding-inline-start: 0;
      }
    }

    ${E.l} li {
      margin: 0;
    }
  `);if(T.defaultProps=s.qn,I.isSupported){const e=new WeakSet;I.addHook("beforeSanitizeAttributes",n=>{(n instanceof HTMLElement||n instanceof SVGElement)&&(n.removeAttribute("class"),"A"===n.tagName&&n.hasAttribute("href")&&"_blank"===n.getAttribute("target")&&e.add(n))}),I.addHook("afterSanitizeAttributes",n=>{if("A"===n.tagName&&n.hasAttribute("href")){const t=n.getAttribute("href");let o;try{o=new URL(t,window.location.href)}catch(e){return}window.location.origin!==o.origin?(n.setAttribute("target","_blank"),n.setAttribute("rel","noopener")):e.has(n)&&(n.setAttribute("target","_blank"),e.delete(n))}})}const D=(0,r.forwardRef)(function({testId:e,content:n,customTags:t,...i},a){const[s,l]=(0,r.useState)(!1),c=(0,r.useMemo)(()=>s&&I.isSupported?I.sanitize(n,{FORBID_TAGS:["style","font"],CUSTOM_ELEMENT_HANDLING:{tagNameCheck:t?e=>t.includes(e):void 0},ALLOWED_URI_REGEXP:z.A}):"",[n,t,s]),d=(0,f.A)(e,R);return(0,r.useEffect)(()=>{l(!0)},[]),(0,o.jsx)(T,{"data-testid":d.root,...i,dangerouslySetInnerHTML:{__html:c},ref:a})}),M=(0,k.A)(D,R);var F=t(5190),_=t(7784),q=t(7521),B=t(9466),L=t(9721),O=t(9749),N=t(5636);const G=i.Ay.div``,W=i.Ay.div``,U=i.Ay.div(({theme:e})=>i.AH`
    position: relative;
    @media (height >= 31.25rem) {
      overflow-y: auto;
      min-height: 4rem;
    }
    padding: calc(2 * ${e.base.spacing});

    /* Small amount of block padding accounts for focus ring clipping within overflow auto. */
    ${W} + & {
      padding-block-start: calc(0.5 * ${e.base.spacing});
    }

    &:not(:last-child) {
      padding-block-end: calc(0.5 * ${e.base.spacing});
    }
  `);U.defaultProps=s.qn,i.Ay.div``;const V=(0,i.Ay)(N.A)(({theme:e})=>i.AH`
    display: flex;
    flex-direction: column;
    min-width: min(${e.base["content-width"].sm}, calc(100vw - 2rem));
    max-width: min(${e.base["content-width"].lg}, calc(100vw - 2rem));
    max-height: calc(100vh - 2rem);

    @media (height < 31.25rem) {
      overflow-y: auto;
    }

    &[aria-busy='true'] {
      ${U} {
        overflow: hidden;
      }
    }
  `);V.defaultProps=s.qn;var X=t(574);const K=(0,r.forwardRef)(function({arrow:e=!0,target:n,portal:t,strategy:r,placement:i,children:a,progress:s,focusTrap:l=!0,...c},u){const p=(0,d.A)(u);return(0,X.A)(l?p:null,!1),(0,o.jsx)(V,{...c,role:"dialog",arrow:e,"aria-modal":!1,"aria-busy":!!s,ref:p,target:n,portal:t,strategy:r,placement:i,children:a})}),Y=(0,i.Ay)(u.Ay)``,Q=(0,i.Ay)(K)(({theme:e})=>i.AH`
    /* When a header is not rendered(e.g. progress state) the button must positioned atop. */
    ${U} > ${Y} {
      position: relative;
      z-index: calc(${e.base["z-index"].backdrop} + 1);
      align-self: end;
    }
  `);Q.defaultProps=s.qn;const J=(0,r.forwardRef)(function({target:e,heading:n,children:t,progress:i,onDismiss:a,...s},u){const m=(0,c.A)(),h=(0,g.A)(),f=(0,d.A)(u),$=(0,r.useRef)(null),b=(0,r.useRef)(null);(0,F.A)(e=>{a?.(),e.stopPropagation()},f,[a]),(0,_.A)("mousedown",[e,f],()=>{a?.()}),(0,r.useLayoutEffect)(()=>{const e=(0,O.A)();return()=>{e instanceof HTMLElement&&e.isConnected&&e.focus()}},[]),(0,r.useEffect)(()=>{i||(()=>{if(i)return;const e=(0,y.A)(f),n=e.find(e=>$.current?.contains(e))??b.current??e[0];n?.focus()})()},[i]),(0,r.useEffect)(()=>{const n=()=>{setTimeout(()=>{a?.()},0)};return e.addEventListener("click",n),()=>{e.removeEventListener("click",n)}},[]);const A=n?(0,o.jsx)(q.A,{id:h,variant:"h2",children:"string"==typeof n?n:n.primary}):null,w=(0,o.jsx)(B.A,{visible:!!i,focusOnVisible:!0,placement:"local",message:"string"==typeof i?i:void 0}),v=(0,o.jsx)(Y,{icon:!0,variant:"simple",onClick:()=>{a()},label:m("close"),ref:b,children:(0,o.jsx)(p.Ay,{name:"times"})});return(0,o.jsxs)(Q,{...s,..."string"==typeof n?{"aria-labelledby":h}:{"aria-label":n?.primary},arrow:!0,target:e,progress:i,ref:f,children:[n&&A&&(0,o.jsxs)(l.A,{container:{alignItems:"center",justify:"between",pad:2,gap:1},item:{shrink:0},as:W,children:["string"==typeof n?A:(0,o.jsx)(L.Ay,{primary:A,secondary:n.secondary?(0,o.jsx)(q.A,{variant:"secondary",children:n.secondary}):void 0,visual:n.visual}),v]}),(!n||t||i)&&(0,o.jsxs)(l.A,{container:{direction:"column"},item:{grow:1},as:U,ref:$,children:[!n&&v,t&&(0,o.jsx)(G,{inert:i?"":void 0,children:t}),w]})]})});var Z=t(70);(0,p.pU)(Z);const ee=i.Ay.div``,ne=(0,r.forwardRef)(function(e,n){const t=(0,c.A)(),{heading:i=t("additional_info"),contextualLabel:a,children:s,dialogHandle:m,...h}=e,[g,f]=(0,r.useState)(null),$=(0,r.useRef)(null),b=(0,d.A)(m);return(0,r.useImperativeHandle)(b,()=>({open:()=>{f($.current)},close:()=>{f(null)}})),(0,o.jsxs)(l.A,{container:!0,as:ee,ref:n,...h,children:[(0,o.jsx)(u.Ay,{variant:"simple",label:t("additional_info"),compact:!0,icon:!0,ref:$,onClick:()=>{b.current?.open()},"aria-label":`${t("additional_info")} - ${a??i}`,children:(0,o.jsx)(p.Ay,{name:"information"})}),g&&(0,o.jsx)(J,{heading:i,target:g,onDismiss:()=>{b.current?.close()},children:"string"==typeof s?(0,o.jsx)(M,{content:s}):s})]})});var te=t(6405),oe=t(8);(0,p.pU)(j,H,C);const re=(0,i.Ay)(p.Ay)(({theme:e,status:n})=>i.AH`
    height: 1em;
    width: 1em;
    color: ${(0,v.A)(()=>(0,A.ho)(e.components["form-field"][n]["status-color"],e.base.palette["primary-background"]),()=>e.components["form-field"][n]["status-color"])};
    vertical-align: baseline;
  `);re.defaultProps=s.qn;const ie=(0,i.Ay)(u.Ay)(({theme:e})=>i.AH`
    margin-block-start: calc(${e.base.spacing} / 2);
    align-self: start;
  `);ie.defaultProps=s.qn;const ae=i.Ay.div(({status:e,theme:{base:{"font-size":n,"font-scale":t,spacing:o,palette:r},components:{"form-field":a}}})=>{const{xxs:s}=(0,A.Vr)(n,t);return i.AH`
      max-width: max-content;
      font-size: ${s};
      word-break: break-word;

      &:not(:empty) {
        margin-block-start: calc(0.25 * ${o});
      }

      ${e&&a[e]&&i.AH`
        color: ${(0,v.A)(()=>(0,A.ho)(a[e]["status-color"],r["primary-background"]),()=>a[e]["status-color"])};
      `}
    `});ae.defaultProps=s.qn;const se=i.Ay.div``,le=i.Ay.div(e=>{const{labelAsLegend:n,isRadioCheck:t,showAdditionalInfo:o,disabled:r,required:a,theme:{base:{palette:{urgent:s},"disabled-opacity":l,spacing:c,"hit-area":{"compact-min":d}}}}=e;return i.AH`
    ${r&&i.AH`
      opacity: ${l};
      -webkit-user-select: none;
      user-select: none;
    `}
    position: relative;
    border: 0;

    &:has(${te.fl}:only-of-type) {
      ${ae} {
        min-width: 100%;
      }
    }

    > ${b.G}, > ${se} {
      &:not(:empty) {
        margin-bottom: calc(0.25 * ${c});
        min-height: ${d};
      }
    }

    > ${b.G}, > ${se} > ${b.G} {
      ${a&&i.AH`
        &::after {
          content: ${'"\\00a0*" / ""'};
          color: ${s};
        }
      `}

      ${r&&i.AH`
        cursor: not-allowed;
      `}
    }

    ${n&&i.AH`
      > legend {
        display: inline-flex;
        align-items: flex-end;
      }
    `}

    ${n&&o&&i.AH`
      display: block;

      > legend {
        float: inline-start;
      }

      > ${ee} {
        ${!t&&i.AH`
          float: inline-end;
        `}
        + * {
          clear: both;
        }
      }
    `}
  `});le.defaultProps=s.qn;const ce=(0,i.Ay)(u.Ay)(({theme:{base:{"font-size":e,"font-scale":n,"border-radius":t,spacing:o,palette:r},components:{"form-control":{"border-radius":s,"border-width":l},"form-field":c}}})=>{const{xxs:d}=(0,A.Vr)(e,n),u=(0,v.A)(()=>(0,A.ho)(c.pending["status-color"],r["primary-background"]),()=>c.pending["status-color"]),p=(0,A.ZV)(u),m=(0,v.A)(()=>(0,A.W0)(u)),h=m?(0,a.B3)(m,.4):m;return i.AH`
    background-color: ${u};
    color: ${m};
    font-size: ${d};
    min-width: calc(3 * ${o});
    min-height: calc(3 * ${o});
    padding: 0 ${o};
    border-radius: 0;
    border: none;

    &:first-child {
      border-inline-end: ${l} solid ${h};
      border-end-start-radius: calc(${t} * ${s});
      margin-inline-start: calc(2 * ${o});
    }

    &:last-child {
      border-end-end-radius: calc(${t} * ${s});
      margin-inline-start: 0;
    }

    &:hover {
      color: ${p.foreground};
      background-color: ${p.background};
    }

    @media (pointer: coarse) {
      min-height: 2rem;
    }
  `});ce.defaultProps=s.qn;const de={error:"warn-solid",warning:"diamond-minus",success:"check"},ue=(0,r.forwardRef)(function(e,n){const t=(0,g.A)(),{testId:i,children:a,id:s=t,as:u="div",label:p,labelAs:m="label",labelFor:A=s,labelId:v,labelHidden:k=!1,labelAfter:j=!1,info:H,status:C,isRadioCheck:S,charLimitDisplay:E,required:z=!1,disabled:R=!1,readOnly:I=!1,inline:P=!1,onClear:T,actions:D,container:M,additionalInfo:F,onResolveSuggestion:_,"aria-describedby":q,className:B,...L}=e,O=(0,f.A)(i,oe.R),N=(0,c.A)(),{announceAssertive:G}=(0,$.A)(),W="legend"===m,U="pending"===C&&!!_,V=(0,d.A)(n),X=(0,r.useRef)(null),[K,Y]=(0,r.useState)(null),Q=!!F&&!R&&!k,J=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b.A,{"data-testid":O.label,id:v,as:m,htmlFor:"label"===m?A:void 0,labelHidden:k,onClick:e=>{I&&e.preventDefault()},inline:P,ref:X,children:p}),Q&&K&&(0,o.jsx)(ne,{"data-testid":O.additionalInfo,heading:F.heading,contextualLabel:K,children:F.content})]}),Z=S||W||k?J:(0,o.jsx)(l.A,{as:se,container:{justify:"between",alignItems:"end"},item:{alignSelf:"stretch"},children:J});let ee;if((0,r.useEffect)(()=>{Y(X.current?.textContent??null)},[p]),(0,r.useEffect)(()=>{if("error"===C||"warning"===C){let e=`${N(C)} ${H}`;X.current?.textContent&&(e=`${X.current?.textContent} ${e}`),G({message:e,type:C})}},[C,H]),W||r.Children.count(a)>1)ee=a;else{const e=r.Children.only(a).props["aria-describedby"];ee=(0,r.cloneElement)(a,{"aria-describedby":[e,H&&!I?`${s}-info`:void 0].join(" ").trim()||void 0})}D&&(ee=(0,o.jsxs)(l.A,{container:{alignItems:"center",gap:.5},children:[ee,(0,o.jsx)(h,{items:D,menuAt:3})]}));let te=(0,o.jsxs)(l.A,{id:`${s}-info`,"data-testid":O.info,status:C,as:ae,container:{alignItems:"center",gap:.5},children:[C&&"pending"!==C&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.A,{item:{alignSelf:"start"},as:re,status:C,name:de[C]}),(0,o.jsx)(w.A,{children:`${N(C)} `})]}),H]});if(E&&(te=(0,o.jsxs)(l.A,{container:{justify:te?"between":"end",gap:1},children:[te,(0,o.jsx)(l.A,{item:{shrink:0},children:E})]})),U){const e=(0,y.A)(V);te=(0,o.jsxs)(l.A,{container:{alignItems:"start",justify:"between"},children:[(0,o.jsxs)(ae,{"data-testid":O.info,status:C,id:`${s}-info`,children:[N("suggestion_info"),(0,o.jsx)(w.A,{"aria-live":"polite",children:N("suggestion_assist")})]}),(0,o.jsxs)(l.A,{container:{wrap:"nowrap"},children:[(0,o.jsx)(ce,{"data-testid":O.suggestionReject,onClick:()=>{_(!1),e[0]?.focus()},"aria-label":`${N("no")}, ${N("reject_suggestion_button_a11y")}${K?` - ${K}`:""}`,children:N("no")}),(0,o.jsx)(ce,{"data-testid":O.suggestionAccept,onClick:()=>{_(!0),e[0]?.focus()},"aria-label":`${N("yes")}, ${N("accept_suggestion_button_a11y")}${K?` - ${K}`:""}`,children:N("yes")})]})]})}const ue=[];return q&&ue.push(q),W&&H&&ue.push(`${s}-info`),(0,o.jsxs)(l.A,{"data-testid":O.root,...L,container:{direction:P?"row":"column",alignItems:P?"center":void 0,wrap:S?"wrap":void 0,...M},as:le,labelAsLegend:W,isRadioCheck:S,showAdditionalInfo:Q,id:`${s}-field`,forwardedAs:u,required:z,disabled:R,readOnly:I,onKeyDown:U?e=>{"Enter"===e.key&&(e.target.closest("button")||(e.preventDefault(),_?.(!0)))}:void 0,"aria-describedby":ue.length?ue.join(" "):void 0,ref:V,className:(0,x.A)("form-field",B,{status:C}),children:[(W||!j)&&Z,ee,!W&&j&&Z,!I&&te,S&&T&&(0,o.jsx)(ie,{variant:"link",onClick:()=>{T()},children:N("clear_selection")})]})}),pe=(0,k.A)(ue,oe.R)},8866:(e,n,t)=>{t.d(n,{EF:()=>r,gF:()=>i});var o=t(8044);(0,o.A)("alert",[]);const r=(0,o.A)("count",[]),i=(0,o.A)("keyboard",[]);(0,o.A)("selectable",["remove"]),(0,o.A)("status",[]),(0,o.A)("tag",[])},8925:(e,n,t)=>{t.d(n,{Ay:()=>j});var o=t(4848),r=t(1594),i=t(8267),a=t(6883),s=t(3113),l=t(8579),c=t(4853),d=t(5661),u=t(3456),p=t(9549),m=t(6837),h=t(4869),g=t(9061),f=t(8044);const $=(0,f.A)("field-value-list",[]),b=(0,f.A)("field-value-item",["name","value"]),A=i.Ay.dt`
  word-break: break-word;
`,w=i.Ay.dd`
  word-break: break-word;
`,v=i.Ay.div``,y=i.Ay.dl(({variant:e,theme:n})=>{const{components:{"field-value-list":{inline:{detached:t}}}}=n;return i.AH`
    width: 100%;

    ${"value-comparison"===e&&i.AH`
      dt {
        width: 100%;
      }
      && dd {
        text-align: end;
        padding-inline-start: calc(2 * ${n.base.spacing});

        /* Unset negative margin from Details to prevent field value misalignment */
        margin: unset;
      }
      ${s.G} {
        max-width: unset;
      }
      dd:not(:last-of-type),
      dt:not(:last-of-type) {
        border-bottom: 0.0625rem solid ${n.base.palette["border-line"]};
        padding-bottom: calc(0.5 * ${n.base.spacing});
      }
    `}

    ${t&&"inline"===e&&i.AH`
      dt {
        width: 100%;
        padding-inline-end: calc(${n.base.spacing});
      }
      ${s.G} {
        max-width: unset;
      }
      dd:not(:last-of-type),
      dt:not(:last-of-type),
      dd:has(+ ${v}),
      dt:has(+ dd + ${v}),
      ${v}:has(+ dt + dd),
      ${v}:not(:last-of-type) {
        border-bottom: 0.0625rem dashed ${n.base.palette["border-line"]};
        padding-bottom: calc(0.5 * ${n.base.spacing});
      }
    `}
  `});y.defaultProps=p.qn;const x=(0,h.A)(({testId:e,name:n,value:t,variant:r="inline",truncate:i=!0})=>{const a=(0,l.A)(e,b),c="string"==typeof t&&i?(0,o.jsx)(m.A,{lines:3,children:t}):t,d=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.G,{"data-testid":a.name,as:A,role:"none",children:n}),(0,o.jsx)(w,{"data-testid":a.value,role:"none",children:t?c:(0,o.jsx)(g.A,{})})]});return"stacked"===r?(0,o.jsx)(v,{"data-testid":a.root,children:d}):(0,o.jsx)(o.Fragment,{children:d})},b),k=(0,r.forwardRef)(function({testId:e,fields:n,variant:t="inline",...r},i){const s=(0,l.A)(e,$),p=(0,c.A)(i),m=(0,d.A)("xs",{breakpointRef:p,themeProp:"content-width"}),{components:{"field-value-list":{inline:{detached:h}}}}=(0,u.A)();return(0,o.jsx)(a.A,{"data-testid":s.root,...r,ref:p,container:{cols:["inline","value-comparison"].includes(t)&&m?"16ch minmax(0, 1fr)":"minmax(0, 1fr)",colGap:h||"value-comparison"===t?0:2,rowGap:h||"value-comparison"===t?.5:1},as:y,role:"none",variant:m?t:"stacked",children:n.map(({id:e,name:n,value:r,truncate:i=!0,variant:a})=>{const s={name:n,variant:"stacked"!==(a??t)&&m?"inline":"stacked"};return"string"==typeof r?(0,o.jsx)(x,{...s,value:r,truncate:i},e??n):(0,o.jsx)(x,{...s,value:r},e??n)})})}),j=(0,h.A)(k,$)},9115:(e,n,t)=>{t.d(n,{Q:()=>A,A:()=>k});var o=t(4848),r=t(1594),i=t(5206),a=t(8267),s=(t(8347),t(9080)),l=t(9549),c=t(4860),d=t(3607),u=t(9839),p=t(127),m=t(4680),h=t(994),g=t(2477),f=t(4853);class $ extends HTMLElement{connectedCallback(){this.dispatchEvent(new Event("connect-disconnect",{bubbles:!1}))}disconnectedCallback(){this.dispatchEvent(new Event("connect-disconnect",{bubbles:!1}))}}customElements.get("pega-connected-watcher")||customElements.define("pega-connected-watcher",$);const b=u.A?navigator.language:"en",A=(0,r.createContext)({locale:b,direction:(0,d.oW)(b),translations:d.nH,themeMachine:l.qR,styleSheetTarget:p.A?document.head:void 0,portalTarget:p.A?document.body:void 0,loadedRef:{current:!1},renderNativeControls:!1,testIds:!0,mountedStyleSheetManagers:[],initialized:!1}),w=Symbol.for("@pega/cosmos-react-core.metadata"),v=new Set,y={version:h.rE,mountedConfigs:[],mountOrder:[],mountCount:{}};m.A&&(window.cosmos.instances||(window.cosmos.instances=[]),window.cosmos.instances.push(y),Array.isArray(window[w])&&(window.cosmos.instances.push(...window[w]),delete window[w]),window[w]||(window[w]={push:e=>{window.cosmos.instances?.push(e)}}));const x=(0,r.forwardRef)(function({children:e,locale:n,direction:t,translations:l,theme:h,disableDefaultFontLoading:$,styleSheets:b,styleSheetTarget:w,portalTarget:x,renderNativeControls:k,testIds:j,id:H},C){const S=m.A?window.cosmos.configurationContext??A:A,E=(0,r.useContext)(S),z=h?new c.A({theme:h,parent:E.themeMachine}):E.themeMachine,R=(0,r.useMemo)(()=>(0,d.Ay)({...E.translations,...l}),[E.translations,l]),[I,P]=(0,g.A)(),[T,D]=(0,g.A)(),[,M]=(0,r.useState)(null),F=(0,f.A)(P,C);(0,r.useEffect)(()=>{if(!T)return;const e=()=>{M(T.isConnected)};return T.addEventListener("connect-disconnect",e),()=>{T.removeEventListener("connect-disconnect",e)}},[T]);const[_,q]=(0,r.useMemo)(()=>{if(!p.A||!I?.isConnected)return[void 0,void 0];const e=I.getRootNode(),n=e instanceof ShadowRoot?e:document.head,t=e instanceof ShadowRoot?e:document.body,o=w??E.styleSheetTarget,r=x??E.portalTarget;return[e.contains(o??null)?o:n,e.contains(r??null)?r:t]},[I,I?.isConnected,w,x,E.styleSheetTarget,E.portalTarget]),B=(0,r.useMemo)(()=>!E.initialized||!(!I||I.getRootNode()===E.styleSheetTarget?.getRootNode()),[E.initialized,I]),L=B?[]:E.mountedStyleSheetManagers,O=(0,r.useMemo)(()=>!!L?.includes(a.ID),[L]);(0,r.useEffect)(()=>{const e=Symbol(H);return(e=>{v.add(e),y.mountedConfigs=[...v].map(e=>e.description??"Unknown");const n=e.description??"Unknown";y.mountOrder.push(n),n in y.mountCount||(y.mountCount[n]=0),y.mountCount[n]+=1})(e),()=>{(e=>{v.delete(e),y.mountedConfigs=[...v].map(e=>e.description??"Unknown")})(e)}},[H]);const N=B?(0,o.jsxs)(o.Fragment,{children:[!$&&_&&(0,i.createPortal)((0,o.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400..700;1,400..700&family=Inter:wght@400..700&family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,400..700&display=swap","data-cosmos-global-style":!0}),_),(0,o.jsx)(s.Ay,{}),e]}):(0,o.jsx)(o.Fragment,{children:e}),G=O?N:(0,o.jsx)(a.ID,{disableVendorPrefixes:!0,target:u.A&&_?.isConnected&&!navigator.userAgent.includes("jsdom")?_:void 0,children:N});return(0,o.jsxs)("div",{"data-config-root":!0,style:{display:"contents"},ref:F,children:[(0,o.jsx)(S.Provider,{value:{locale:n??E.locale,direction:t??(void 0!==n?(0,d.oW)(n):E.direction),translations:R,themeMachine:z,styleSheetTarget:_,portalTarget:q,loadedRef:E.loadedRef,renderNativeControls:k??E.renderNativeControls,testIds:j??E.testIds,mountedStyleSheetManagers:O?L:[...L??[],a.ID],initialized:!0},children:(0,o.jsxs)(a.NP,{theme:z.theme,children:[b&&_&&(0,i.createPortal)(b.map(e=>(0,o.jsx)("link",{rel:"stylesheet",href:e,"data-cosmos-global-style":!0},e)),_),G]})}),(0,o.jsx)("pega-connected-watcher",{ref:D,style:{display:"none"}})]})}),k=x}}]);
//# sourceMappingURL=SDf001_81184806.78de5071.js.map