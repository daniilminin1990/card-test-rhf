import{j as l}from"./jsx-runtime-CexXSJP5.js";import{r as t,a as ae}from"./index-BP8_t0zE.js";import{T as X}from"./Typography-BrNh2njT.js";import{_ as m,$ as k,a as je,b as Ae}from"./index-BxZYxvCr.js";import{a as Ce,c as ke,e as x,d as z,f as He,b as Ke}from"./index-DJ4wlX1H.js";import{$ as Ve,a as Ue}from"./index-CmqfNWL9.js";import{c as Ze,h as Ge,$ as Be,a as Xe,b as Ye,R as qe}from"./Combination-BqwpRwhz.js";import{$ as he,a as We,b as ze,c as Je,d as Qe}from"./index-DLWNQIZz.js";import{$ as we}from"./index-Dpkz7dOd.js";import{$ as xe,a as e2,b as t2}from"./index-DHmXhf23.js";import{$ as se}from"./index-B_shv8DR.js";import"./clsx-B-dksMZM.js";import"./index-BxmsGmlx.js";import"./index-BSDh6yLp.js";const n2=["Enter"," "],o2=["ArrowDown","PageUp","Home"],be=["ArrowUp","PageDown","End"],c2=[...o2,...be],H="Menu",[Y,r2,a2]=Ve(H),[E,ge]=Ce(H,[a2,he,xe]),K=he(),ve=xe(),[s2,O]=E(H),[i2,J]=E(H),d2=e=>{const{__scopeMenu:n,open:o=!1,children:c,dir:r,onOpenChange:a,modal:i=!0}=e,d=K(n),[f,p]=t.useState(null),h=t.useRef(!1),u=ke(a),$=Ue(r);return t.useEffect(()=>{const v=()=>{h.current=!0,document.addEventListener("pointerdown",w,{capture:!0,once:!0}),document.addEventListener("pointermove",w,{capture:!0,once:!0})},w=()=>h.current=!1;return document.addEventListener("keydown",v,{capture:!0}),()=>{document.removeEventListener("keydown",v,{capture:!0}),document.removeEventListener("pointerdown",w,{capture:!0}),document.removeEventListener("pointermove",w,{capture:!0})}},[]),t.createElement(We,d,t.createElement(s2,{scope:n,open:o,onOpenChange:u,content:f,onContentChange:p},t.createElement(i2,{scope:n,onClose:t.useCallback(()=>u(!1),[u]),isUsingKeyboardRef:h,dir:$,modal:i},c)))},u2=t.forwardRef((e,n)=>{const{__scopeMenu:o,...c}=e,r=K(o);return t.createElement(ze,m({},r,c,{ref:n}))}),Me="MenuPortal",[l2,f2]=E(Me,{forceMount:void 0}),p2=e=>{const{__scopeMenu:n,forceMount:o,children:c,container:r}=e,a=O(Me,n);return t.createElement(l2,{scope:n,forceMount:o},t.createElement(we,{present:o||a.open},t.createElement(Ze,{asChild:!0,container:r},c)))},_="MenuContent",[$2,_e]=E(_),m2=t.forwardRef((e,n)=>{const o=f2(_,e.__scopeMenu),{forceMount:c=o.forceMount,...r}=e,a=O(_,e.__scopeMenu),i=J(_,e.__scopeMenu);return t.createElement(Y.Provider,{scope:e.__scopeMenu},t.createElement(we,{present:c||a.open},t.createElement(Y.Slot,{scope:e.__scopeMenu},i.modal?t.createElement(C2,m({},r,{ref:n})):t.createElement(h2,m({},r,{ref:n})))))}),C2=t.forwardRef((e,n)=>{const o=O(_,e.__scopeMenu),c=t.useRef(null),r=k(n,c);return t.useEffect(()=>{const a=c.current;if(a)return Ge(a)},[]),t.createElement(De,m({},e,{ref:r,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:x(e.onFocusOutside,a=>a.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)}))}),h2=t.forwardRef((e,n)=>{const o=O(_,e.__scopeMenu);return t.createElement(De,m({},e,{ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)}))}),De=t.forwardRef((e,n)=>{const{__scopeMenu:o,loop:c=!1,trapFocus:r,onOpenAutoFocus:a,onCloseAutoFocus:i,disableOutsidePointerEvents:d,onEntryFocus:f,onEscapeKeyDown:p,onPointerDownOutside:h,onFocusOutside:u,onInteractOutside:$,onDismiss:v,disableOutsideScroll:w,...M}=e,Q=O(_,o),U=J(_,o),Ie=K(o),ye=ve(o),ee=r2(o),[Se,te]=t.useState(null),T=t.useRef(null),Oe=k(n,T,Q.onContentChange),L=t.useRef(0),N=t.useRef(""),Te=t.useRef(0),Z=t.useRef(null),ne=t.useRef("right"),G=t.useRef(0),Le=w?qe:t.Fragment,Ne=w?{as:je,allowPinchZoom:!0}:void 0,Fe=s=>{var C,b;const D=N.current+s,y=ee().filter(g=>!g.disabled),B=document.activeElement,oe=(C=y.find(g=>g.ref.current===B))===null||C===void 0?void 0:C.textValue,F=y.map(g=>g.textValue),S=R2(F,D,oe),ce=(b=y.find(g=>g.textValue===S))===null||b===void 0?void 0:b.ref.current;(function g(re){N.current=re,window.clearTimeout(L.current),re!==""&&(L.current=window.setTimeout(()=>g(""),1e3))})(D),ce&&setTimeout(()=>ce.focus())};t.useEffect(()=>()=>window.clearTimeout(L.current),[]),Be();const R=t.useCallback(s=>{var C,b;return ne.current===((C=Z.current)===null||C===void 0?void 0:C.side)&&y2(s,(b=Z.current)===null||b===void 0?void 0:b.area)},[]);return t.createElement($2,{scope:o,searchRef:N,onItemEnter:t.useCallback(s=>{R(s)&&s.preventDefault()},[R]),onItemLeave:t.useCallback(s=>{var C;R(s)||((C=T.current)===null||C===void 0||C.focus(),te(null))},[R]),onTriggerLeave:t.useCallback(s=>{R(s)&&s.preventDefault()},[R]),pointerGraceTimerRef:Te,onPointerGraceIntentChange:t.useCallback(s=>{Z.current=s},[])},t.createElement(Le,Ne,t.createElement(Xe,{asChild:!0,trapped:r,onMountAutoFocus:x(a,s=>{var C;s.preventDefault(),(C=T.current)===null||C===void 0||C.focus()}),onUnmountAutoFocus:i},t.createElement(Ye,{asChild:!0,disableOutsidePointerEvents:d,onEscapeKeyDown:p,onPointerDownOutside:h,onFocusOutside:u,onInteractOutside:$,onDismiss:v},t.createElement(e2,m({asChild:!0},ye,{dir:U.dir,orientation:"vertical",loop:c,currentTabStopId:Se,onCurrentTabStopIdChange:te,onEntryFocus:x(f,s=>{U.isUsingKeyboardRef.current||s.preventDefault()})}),t.createElement(Je,m({role:"menu","aria-orientation":"vertical","data-state":D2(Q.open),"data-radix-menu-content":"",dir:U.dir},Ie,M,{ref:Oe,style:{outline:"none",...M.style},onKeyDown:x(M.onKeyDown,s=>{const b=s.target.closest("[data-radix-menu-content]")===s.currentTarget,D=s.ctrlKey||s.altKey||s.metaKey,y=s.key.length===1;b&&(s.key==="Tab"&&s.preventDefault(),!D&&y&&Fe(s.key));const B=T.current;if(s.target!==B||!c2.includes(s.key))return;s.preventDefault();const F=ee().filter(S=>!S.disabled).map(S=>S.ref.current);be.includes(s.key)&&F.reverse(),E2(F)}),onBlur:x(e.onBlur,s=>{s.currentTarget.contains(s.target)||(window.clearTimeout(L.current),N.current="")}),onPointerMove:x(e.onPointerMove,W(s=>{const C=s.target,b=G.current!==s.clientX;if(s.currentTarget.contains(C)&&b){const D=s.clientX>G.current?"right":"left";ne.current=D,G.current=s.clientX}}))})))))))}),q="MenuItem",ie="menu.itemSelect",w2=t.forwardRef((e,n)=>{const{disabled:o=!1,onSelect:c,...r}=e,a=t.useRef(null),i=J(q,e.__scopeMenu),d=_e(q,e.__scopeMenu),f=k(n,a),p=t.useRef(!1),h=()=>{const u=a.current;if(!o&&u){const $=new CustomEvent(ie,{bubbles:!0,cancelable:!0});u.addEventListener(ie,v=>c==null?void 0:c(v),{once:!0}),He(u,$),$.defaultPrevented?p.current=!1:i.onClose()}};return t.createElement(x2,m({},r,{ref:f,disabled:o,onClick:x(e.onClick,h),onPointerDown:u=>{var $;($=e.onPointerDown)===null||$===void 0||$.call(e,u),p.current=!0},onPointerUp:x(e.onPointerUp,u=>{var $;p.current||($=u.currentTarget)===null||$===void 0||$.click()}),onKeyDown:x(e.onKeyDown,u=>{const $=d.searchRef.current!=="";o||$&&u.key===" "||n2.includes(u.key)&&(u.currentTarget.click(),u.preventDefault())})}))}),x2=t.forwardRef((e,n)=>{const{__scopeMenu:o,disabled:c=!1,textValue:r,...a}=e,i=_e(q,o),d=ve(o),f=t.useRef(null),p=k(n,f),[h,u]=t.useState(!1),[$,v]=t.useState("");return t.useEffect(()=>{const w=f.current;if(w){var M;v(((M=w.textContent)!==null&&M!==void 0?M:"").trim())}},[a.children]),t.createElement(Y.ItemSlot,{scope:o,disabled:c,textValue:r??$},t.createElement(t2,m({asChild:!0},d,{focusable:!c}),t.createElement(z.div,m({role:"menuitem","data-highlighted":h?"":void 0,"aria-disabled":c||void 0,"data-disabled":c?"":void 0},a,{ref:p,onPointerMove:x(e.onPointerMove,W(w=>{c?i.onItemLeave(w):(i.onItemEnter(w),w.defaultPrevented||w.currentTarget.focus())})),onPointerLeave:x(e.onPointerLeave,W(w=>i.onItemLeave(w))),onFocus:x(e.onFocus,()=>u(!0)),onBlur:x(e.onBlur,()=>u(!1))}))))}),b2="MenuRadioGroup";E(b2,{value:void 0,onValueChange:()=>{}});const g2="MenuItemIndicator";E(g2,{checked:!1});const v2=t.forwardRef((e,n)=>{const{__scopeMenu:o,...c}=e;return t.createElement(z.div,m({role:"separator","aria-orientation":"horizontal"},c,{ref:n}))}),M2=t.forwardRef((e,n)=>{const{__scopeMenu:o,...c}=e,r=K(o);return t.createElement(Qe,m({},r,c,{ref:n}))}),_2="MenuSub";E(_2);function D2(e){return e?"open":"closed"}function E2(e){const n=document.activeElement;for(const o of e)if(o===n||(o.focus(),document.activeElement!==n))return}function P2(e,n){return e.map((o,c)=>e[(n+c)%e.length])}function R2(e,n,o){const r=n.length>1&&Array.from(n).every(p=>p===n[0])?n[0]:n,a=o?e.indexOf(o):-1;let i=P2(e,Math.max(a,0));r.length===1&&(i=i.filter(p=>p!==o));const f=i.find(p=>p.toLowerCase().startsWith(r.toLowerCase()));return f!==o?f:void 0}function I2(e,n){const{x:o,y:c}=e;let r=!1;for(let a=0,i=n.length-1;a<n.length;i=a++){const d=n[a].x,f=n[a].y,p=n[i].x,h=n[i].y;f>c!=h>c&&o<(p-d)*(c-f)/(h-f)+d&&(r=!r)}return r}function y2(e,n){if(!n)return!1;const o={x:e.clientX,y:e.clientY};return I2(o,n)}function W(e){return n=>n.pointerType==="mouse"?e(n):void 0}const S2=d2,O2=u2,T2=p2,L2=m2,N2=w2,F2=v2,j2=M2,Ee="DropdownMenu",[A2,b0]=Ce(Ee,[ge]),P=ge(),[k2,Pe]=A2(Ee),H2=e=>{const{__scopeDropdownMenu:n,children:o,dir:c,open:r,defaultOpen:a,onOpenChange:i,modal:d=!0}=e,f=P(n),p=t.useRef(null),[h=!1,u]=Ke({prop:r,defaultProp:a,onChange:i});return t.createElement(k2,{scope:n,triggerId:se(),triggerRef:p,contentId:se(),open:h,onOpenChange:u,onOpenToggle:t.useCallback(()=>u($=>!$),[u]),modal:d},t.createElement(S2,m({},f,{open:h,onOpenChange:u,dir:c,modal:d}),o))},K2="DropdownMenuTrigger",V2=t.forwardRef((e,n)=>{const{__scopeDropdownMenu:o,disabled:c=!1,...r}=e,a=Pe(K2,o),i=P(o);return t.createElement(O2,m({asChild:!0},i),t.createElement(z.button,m({type:"button",id:a.triggerId,"aria-haspopup":"menu","aria-expanded":a.open,"aria-controls":a.open?a.contentId:void 0,"data-state":a.open?"open":"closed","data-disabled":c?"":void 0,disabled:c},r,{ref:Ae(n,a.triggerRef),onPointerDown:x(e.onPointerDown,d=>{!c&&d.button===0&&d.ctrlKey===!1&&(a.onOpenToggle(),a.open||d.preventDefault())}),onKeyDown:x(e.onKeyDown,d=>{c||(["Enter"," "].includes(d.key)&&a.onOpenToggle(),d.key==="ArrowDown"&&a.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(d.key)&&d.preventDefault())})})))}),U2=e=>{const{__scopeDropdownMenu:n,...o}=e,c=P(n);return t.createElement(T2,m({},c,o))},Z2="DropdownMenuContent",G2=t.forwardRef((e,n)=>{const{__scopeDropdownMenu:o,...c}=e,r=Pe(Z2,o),a=P(o),i=t.useRef(!1);return t.createElement(L2,m({id:r.contentId,"aria-labelledby":r.triggerId},a,c,{ref:n,onCloseAutoFocus:x(e.onCloseAutoFocus,d=>{var f;i.current||(f=r.triggerRef.current)===null||f===void 0||f.focus(),i.current=!1,d.preventDefault()}),onInteractOutside:x(e.onInteractOutside,d=>{const f=d.detail.originalEvent,p=f.button===0&&f.ctrlKey===!0,h=f.button===2||p;(!r.modal||h)&&(i.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),B2=t.forwardRef((e,n)=>{const{__scopeDropdownMenu:o,...c}=e,r=P(o);return t.createElement(N2,m({},r,c,{ref:n}))}),X2=t.forwardRef((e,n)=>{const{__scopeDropdownMenu:o,...c}=e,r=P(o);return t.createElement(F2,m({},r,c,{ref:n}))}),Y2=t.forwardRef((e,n)=>{const{__scopeDropdownMenu:o,...c}=e,r=P(o);return t.createElement(j2,m({},r,c,{ref:n}))}),q2=H2,W2=V2,z2=U2,J2=G2,Q2=B2,de=X2,e0=Y2,V=e=>{const{children:n,icon:o,type:c}=e;return l.jsxs(q2,{children:[l.jsx(W2,{asChild:!0,children:l.jsx("button",{"aria-label":"Customise options",className:"IconButton",children:l.jsx("img",{alt:"",src:o})})}),l.jsx(z2,{children:l.jsxs(J2,{className:c==="menu"?"DropdownMenuContentForMenu":"DropdownMenuContent",sideOffset:5,children:[c==="head"&&l.jsxs("div",{className:"header",children:[l.jsx("img",{alt:"",src:o}),l.jsxs("div",{children:[l.jsx(X,{className:"dropdownTextHeader",variant:"subtitle1",children:"Ivan"}),l.jsx(X,{className:"dropdownTextHeader",variant:"caption",children:"j&johnson@gmail.com"})]})]}),ae.Children.toArray(n).map((r,a)=>l.jsxs(ae.Fragment,{children:[c==="menu"&&a!==0?l.jsx(de,{className:"DropdownMenuSeparator"}):"",c==="head"&&l.jsx(de,{className:"DropdownMenuSeparator"}),r]},a)),l.jsx(e0,{className:"DropdownMenuArrow"})]})})]})};V.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuDemo",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},icon:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:"'head' | 'menu'",elements:[{name:"literal",value:"'head'"},{name:"literal",value:"'menu'"}]},description:""}}};const I=e=>{const{icon:n,text:o}=e;return l.jsx("div",{className:"DropdownMenuItemBox",children:l.jsxs(Q2,{className:"DropdownMenuItem",children:[l.jsx("img",{alt:"",src:n}),l.jsx(X,{className:"dropdownText",variant:"caption",children:o})]})})};I.__docgenInfo={description:"",methods:[],displayName:"DropDownItem",props:{icon:{required:!0,tsType:{name:"string"},description:""},text:{required:!0,tsType:{name:"string"},description:""}}};const t0=""+new URL("Ellipse 1-DfHUnM31.svg",import.meta.url).href,n0="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='9'%20cy='9'%20r='8.5'%20stroke='white'/%3e%3cg%20clip-path='url(%23clip0_73129_265)'%3e%3cpath%20d='M9%2010C9.55228%2010%2010%209.55228%2010%209C10%208.44772%209.55228%208%209%208C8.44772%208%208%208.44772%208%209C8%209.55228%208.44772%2010%209%2010Z'%20fill='white'/%3e%3cpath%20d='M9%206.5C9.55228%206.5%2010%206.05228%2010%205.5C10%204.94772%209.55228%204.5%209%204.5C8.44772%204.5%208%204.94772%208%205.5C8%206.05228%208.44772%206.5%209%206.5Z'%20fill='white'/%3e%3cpath%20d='M9%2013.5C9.55228%2013.5%2010%2013.0523%2010%2012.5C10%2011.9477%209.55228%2011.5%209%2011.5C8.44772%2011.5%208%2011.9477%208%2012.5C8%2013.0523%208.44772%2013.5%209%2013.5Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_73129_265'%3e%3crect%20width='12'%20height='12'%20fill='white'%20transform='translate(3%203)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",o0="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.66669%204.00081C4.8435%204.00081%205.01307%203.93058%205.13809%203.80555C5.26312%203.68053%205.33335%203.51096%205.33335%203.33415C5.33335%203.15734%205.26312%202.98777%205.13809%202.86274C5.01307%202.73772%204.8435%202.66748%204.66669%202.66748H3.33335C3.15654%202.66748%202.98697%202.73772%202.86195%202.86274C2.73693%202.98777%202.66669%203.15734%202.66669%203.33415V12.6675C2.66669%2012.8443%202.73693%2013.0139%202.86195%2013.1389C2.98697%2013.2639%203.15654%2013.3341%203.33335%2013.3341H4.66669C4.8435%2013.3341%205.01307%2013.2639%205.13809%2013.1389C5.26312%2013.0139%205.33335%2012.8443%205.33335%2012.6675C5.33335%2012.4907%205.26312%2012.3211%205.13809%2012.1961C5.01307%2012.0711%204.8435%2012.0008%204.66669%2012.0008H4.00002V4.00081H4.66669Z'%20fill='white'/%3e%3cpath%20d='M13.88%207.61411L12%204.94745C11.898%204.80372%2011.7433%204.70621%2011.5697%204.67623C11.396%204.64625%2011.2176%204.68623%2011.0733%204.78745C11.0012%204.83797%2010.9399%204.90228%2010.8927%204.97665C10.8456%205.05103%2010.8137%205.134%2010.7988%205.22077C10.784%205.30755%2010.7864%205.39641%2010.8061%205.48223C10.8257%205.56805%2010.8622%205.64913%2010.9133%205.72078L12.06%207.33411H6.66667C6.48986%207.33411%206.32029%207.40435%206.19526%207.52938C6.07024%207.6544%206%207.82397%206%208.00078C6%208.17759%206.07024%208.34716%206.19526%208.47219C6.32029%208.59721%206.48986%208.66745%206.66667%208.66745H12L10.8%2010.2674C10.7475%2010.3375%2010.7093%2010.4172%2010.6875%2010.502C10.6658%2010.5868%2010.661%2010.6751%2010.6734%2010.7617C10.6857%2010.8484%2010.7151%2010.9318%2010.7597%2011.0071C10.8043%2011.0824%2010.8633%2011.1483%2010.9333%2011.2008C11.0487%2011.2873%2011.1891%2011.3341%2011.3333%2011.3341C11.4368%2011.3341%2011.5389%2011.31%2011.6315%2011.2637C11.724%2011.2174%2011.8046%2011.1502%2011.8667%2011.0674L13.8667%208.40078C13.952%208.28803%2013.9994%208.15104%2014.0018%208.00962C14.0041%207.86821%2013.9615%207.7297%2013.88%207.61411Z'%20fill='white'/%3e%3c/svg%3e",c0="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_5928_6702)'%3e%3cpath%20d='M12.6667%2013.3345H3.33334C3.15653%2013.3345%202.98696%2013.4047%202.86193%2013.5297C2.73691%2013.6548%202.66667%2013.8243%202.66667%2014.0011C2.66667%2014.178%202.73691%2014.3475%202.86193%2014.4725C2.98696%2014.5976%203.15653%2014.6678%203.33334%2014.6678H12.6667C12.8435%2014.6678%2013.0131%2014.5976%2013.1381%2014.4725C13.2631%2014.3475%2013.3333%2014.178%2013.3333%2014.0011C13.3333%2013.8243%2013.2631%2013.6548%2013.1381%2013.5297C13.0131%2013.4047%2012.8435%2013.3345%2012.6667%2013.3345Z'%20fill='white'/%3e%3cpath%20d='M3.33333%2012.0012H3.39333L6.17333%2011.7479C6.47786%2011.7175%206.76269%2011.5834%206.98%2011.3679L12.98%205.36787C13.2129%205.12185%2013.3387%204.79355%2013.33%204.4549C13.3212%204.11625%2013.1786%203.79488%2012.9333%203.56121L11.1067%201.73454C10.8683%201.5106%2010.5559%201.38211%2010.2289%201.37351C9.90191%201.3649%209.58319%201.47679%209.33333%201.68787L3.33333%207.68787C3.11784%207.90518%202.98367%208.19001%202.95333%208.49454L2.66667%2011.2745C2.65769%2011.3722%202.67036%2011.4706%202.70377%2011.5628C2.73719%2011.655%202.79053%2011.7387%202.86%2011.8079C2.92229%2011.8697%202.99617%2011.9185%203.0774%2011.9517C3.15862%2011.9849%203.2456%2012.0017%203.33333%2012.0012ZM10.18%202.66787L12%204.48787L10.6667%205.78787L8.88%204.00121L10.18%202.66787ZM4.24667%208.60787L8%204.88121L9.8%206.68121L6.06667%2010.4145L4.06667%2010.6012L4.24667%208.60787Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_5928_6702'%3e%3crect%20width='16'%20height='16'%20fill='white'%20transform='translate(0%200.000976562)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Re="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_5928_3613)'%3e%3cpath%20d='M7.99998%207.33431C8.5274%207.33431%209.04297%207.17791%209.4815%206.8849C9.92003%206.59188%2010.2618%206.1754%2010.4637%205.68813C10.6655%205.20086%2010.7183%204.66469%2010.6154%204.1474C10.5125%203.63012%2010.2585%203.15497%209.8856%202.78203C9.51266%202.40909%209.0375%202.15511%208.52022%202.05222C8.00294%201.94932%207.46676%202.00213%206.97949%202.20397C6.49222%202.4058%206.07574%202.74759%205.78273%203.18612C5.48971%203.62465%205.33331%204.14023%205.33331%204.66764C5.33331%205.37489%205.61426%206.05317%206.11436%206.55326C6.61446%207.05336%207.29274%207.33431%207.99998%207.33431ZM7.99998%203.33431C8.26369%203.33431%208.52147%203.41251%208.74074%203.55902C8.96001%203.70553%209.1309%203.91376%209.23182%204.1574C9.33274%204.40103%209.35914%204.66912%209.30769%204.92776C9.25625%205.18641%209.12926%205.42398%208.94279%205.61045C8.75632%205.79692%208.51874%205.92391%208.2601%205.97536C8.00146%206.0268%207.73337%206.0004%207.48974%205.89948C7.2461%205.79857%207.03786%205.62767%206.89135%205.4084C6.74485%205.18914%206.66665%204.93135%206.66665%204.66764C6.66665%204.31402%206.80712%203.97488%207.05717%203.72484C7.30722%203.47479%207.64636%203.33431%207.99998%203.33431Z'%20fill='white'/%3e%3cpath%20d='M7.99998%208.66748C6.7623%208.66748%205.57532%209.15915%204.70015%2010.0343C3.82498%2010.9095%203.33331%2012.0965%203.33331%2013.3341C3.33331%2013.511%203.40355%2013.6805%203.52858%2013.8056C3.6536%2013.9306%203.82317%2014.0008%203.99998%2014.0008C4.17679%2014.0008%204.34636%2013.9306%204.47138%2013.8056C4.59641%2013.6805%204.66665%2013.511%204.66665%2013.3341C4.66665%2012.4501%205.01784%2011.6022%205.64296%2010.9771C6.26808%2010.352%207.11592%2010.0008%207.99998%2010.0008C8.88403%2010.0008%209.73188%2010.352%2010.357%2010.9771C10.9821%2011.6022%2011.3333%2012.4501%2011.3333%2013.3341C11.3333%2013.511%2011.4036%2013.6805%2011.5286%2013.8056C11.6536%2013.9306%2011.8232%2014.0008%2012%2014.0008C12.1768%2014.0008%2012.3464%2013.9306%2012.4714%2013.8056C12.5964%2013.6805%2012.6666%2013.511%2012.6666%2013.3341C12.6666%2012.0965%2012.175%2010.9095%2011.2998%2010.0343C10.4246%209.15915%209.23766%208.66748%207.99998%208.66748Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_5928_3613'%3e%3crect%20width='16'%20height='16'%20fill='white'%20transform='translate(0%200.000976562)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",r0="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_5928_6724)'%3e%3cpath%20d='M14%204.00108H10.6667V2.88775C10.651%202.46096%2010.4668%202.05779%2010.1544%201.76661C9.84195%201.47543%209.42683%201.32001%209%201.33442H7C6.57316%201.32001%206.15804%201.47543%205.84561%201.76661C5.53319%202.05779%205.34897%202.46096%205.33333%202.88775V4.00108H1.99999C1.82318%204.00108%201.65361%204.07132%201.52859%204.19634C1.40357%204.32137%201.33333%204.49094%201.33333%204.66775C1.33333%204.84456%201.40357%205.01413%201.52859%205.13915C1.65361%205.26418%201.82318%205.33441%201.99999%205.33441H2.66666V12.6677C2.66666%2013.1982%202.87738%2013.7069%203.25245%2014.082C3.62752%2014.457%204.13623%2014.6677%204.66666%2014.6677H11.3333C11.8638%2014.6677%2012.3725%2014.457%2012.7475%2014.082C13.1226%2013.7069%2013.3333%2013.1982%2013.3333%2012.6677V5.33441H14C14.1768%205.33441%2014.3464%205.26418%2014.4714%205.13915C14.5964%205.01413%2014.6667%204.84456%2014.6667%204.66775C14.6667%204.49094%2014.5964%204.32137%2014.4714%204.19634C14.3464%204.07132%2014.1768%204.00108%2014%204.00108ZM6.66666%202.88775C6.66666%202.78108%206.80666%202.66775%207%202.66775H9C9.19333%202.66775%209.33333%202.78108%209.33333%202.88775V4.00108H6.66666V2.88775ZM12%2012.6677C12%2012.8446%2011.9298%2013.0141%2011.8047%2013.1392C11.6797%2013.2642%2011.5101%2013.3344%2011.3333%2013.3344H4.66666C4.48985%2013.3344%204.32028%2013.2642%204.19526%2013.1392C4.07023%2013.0141%203.99999%2012.8446%203.99999%2012.6677V5.33441H12V12.6677Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_5928_6724'%3e%3crect%20width='16'%20height='16'%20fill='white'%20transform='translate(0%200.000976562)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",g0={component:V,tags:["autodocs"],title:"Components/DropdownMenuDemo"},j={render:()=>l.jsxs(V,{icon:t0,type:"head",children:[l.jsx(I,{icon:Re,text:"My Profile"}),l.jsx(I,{icon:o0,text:"My Profile"})]})},A={render:()=>l.jsxs(V,{icon:n0,type:"menu",children:[l.jsx(I,{icon:r0,text:"My Profile"}),l.jsx(I,{icon:Re,text:"My Profile"}),l.jsx(I,{icon:c0,text:"My Profile"})]})};var ue,le,fe;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <DropdownMenuDemo icon={ellipseIcon} type={'head'}>\r
      <DropDownItem icon={headerIcon} text={'My Profile'} />\r
      <DropDownItem icon={headerIcon1} text={'My Profile'} />\r
    </DropdownMenuDemo>
}`,...(fe=(le=j.parameters)==null?void 0:le.docs)==null?void 0:fe.source}}};var pe,$e,me;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <DropdownMenuDemo icon={groupIcon} type={'menu'}>\r
      <DropDownItem icon={menuIcon} text={'My Profile'} />\r
      <DropDownItem icon={headerIcon} text={'My Profile'} />\r
      <DropDownItem icon={menuIcon2} text={'My Profile'} />\r
    </DropdownMenuDemo>
}`,...(me=($e=A.parameters)==null?void 0:$e.docs)==null?void 0:me.source}}};const v0=["DropDownHeader","DropDownMenu"];export{j as DropDownHeader,A as DropDownMenu,v0 as __namedExportsOrder,g0 as default};