import{j as s}from"./jsx-runtime-CexXSJP5.js";import{r as o,R as oe}from"./index-BP8_t0zE.js";import"./index-BxmsGmlx.js";import{M as ie,a as ce,b as ue,c as B,d as de}from"./TrashOutline-DpdesMI8.js";import{c as j}from"./clsx-B-dksMZM.js";/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},S.apply(this,arguments)}var b;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(b||(b={}));function he(e){e===void 0&&(e={});let{initialEntries:t=["/"],initialIndex:a,v5Compat:n=!1}=e,r;r=t.map((c,h)=>m(c,typeof c=="string"?null:c.state,h===0?"default":void 0));let i=p(a??r.length-1),d=b.Pop,u=null;function p(c){return Math.min(Math.max(c,0),r.length-1)}function l(){return r[i]}function m(c,h,g){h===void 0&&(h=null);let R=pe(r?l().pathname:"/",c,h,g);return fe(R.pathname.charAt(0)==="/","relative pathnames are not supported in memory history: "+JSON.stringify(c)),R}function x(c){return typeof c=="string"?c:xe(c)}return{get index(){return i},get action(){return d},get location(){return l()},createHref:x,createURL(c){return new URL(x(c),"http://localhost")},encodeLocation(c){let h=typeof c=="string"?P(c):c;return{pathname:h.pathname||"",search:h.search||"",hash:h.hash||""}},push(c,h){d=b.Push;let g=m(c,h);i+=1,r.splice(i,r.length,g),n&&u&&u({action:d,location:g,delta:1})},replace(c,h){d=b.Replace;let g=m(c,h);r[i]=g,n&&u&&u({action:d,location:g,delta:0})},go(c){d=b.Pop;let h=p(i+c),g=r[h];i=h,u&&u({action:d,location:g,delta:c})},listen(c){return u=c,()=>{u=null}}}}function y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function fe(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function me(){return Math.random().toString(36).substr(2,8)}function pe(e,t,a,n){return a===void 0&&(a=null),S({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?P(t):t,{state:a,key:t&&t.key||n||me()})}function xe(e){let{pathname:t="/",search:a="",hash:n=""}=e;return a&&a!=="?"&&(t+=a.charAt(0)==="?"?a:"?"+a),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function P(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substr(a),e=e.substr(0,a));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}var A;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(A||(A={}));function ge(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,n=e.charAt(a);return n&&n!=="/"?null:e.slice(a)||"/"}function ve(e,t){t===void 0&&(t="/");let{pathname:a,search:n="",hash:r=""}=typeof e=="string"?P(e):e;return{pathname:a?a.startsWith("/")?a:Ce(a,t):t,search:Re(n),hash:Ne(r)}}function Ce(e,t){let a=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?a.length>1&&a.pop():r!=="."&&a.push(r)}),a.length>1?a.join("/"):"/"}function O(e,t,a,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ye(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}function be(e,t){let a=ye(e);return t?a.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase):a.map(n=>n.pathnameBase)}function je(e,t,a,n){n===void 0&&(n=!1);let r;typeof e=="string"?r=P(e):(r=S({},e),y(!r.pathname||!r.pathname.includes("?"),O("?","pathname","search",r)),y(!r.pathname||!r.pathname.includes("#"),O("#","pathname","hash",r)),y(!r.search||!r.search.includes("#"),O("#","search","hash",r)));let i=e===""||r.pathname==="",d=i?"/":r.pathname,u;if(d==null)u=a;else{let x=t.length-1;if(!n&&d.startsWith("..")){let v=d.split("/");for(;v[0]==="..";)v.shift(),x-=1;r.pathname=v.join("/")}u=x>=0?t[x]:"/"}let p=ve(r,u),l=d&&d!=="/"&&d.endsWith("/"),m=(i||d===".")&&a.endsWith("/");return!p.pathname.endsWith("/")&&(l||m)&&(p.pathname+="/"),p}const _e=e=>e.join("/").replace(/\/\/+/g,"/"),Re=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ne=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,K=["post","put","patch","delete"];new Set(K);const we=["get",...K];new Set(we);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},I.apply(this,arguments)}const q=o.createContext(null),E=o.createContext(null),U=o.createContext(null),L=o.createContext({outlet:null,matches:[],isDataRoute:!1});function M(){return o.useContext(U)!=null}function Z(){return M()||y(!1),o.useContext(U).location}function G(e){o.useContext(E).static||o.useLayoutEffect(e)}function Pe(){let{isDataRoute:e}=o.useContext(L);return e?Ee():Se()}function Se(){M()||y(!1);let e=o.useContext(q),{basename:t,future:a,navigator:n}=o.useContext(E),{matches:r}=o.useContext(L),{pathname:i}=Z(),d=JSON.stringify(be(r,a.v7_relativeSplatPath)),u=o.useRef(!1);return G(()=>{u.current=!0}),o.useCallback(function(l,m){if(m===void 0&&(m={}),!u.current)return;if(typeof l=="number"){n.go(l);return}let x=je(l,JSON.parse(d),i,m.relative==="path");e==null&&t!=="/"&&(x.pathname=x.pathname==="/"?t:_e([t,x.pathname])),(m.replace?n.replace:n.push)(x,m.state,m)},[t,n,d,i,e])}var Q=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Q||{}),X=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(X||{});function Ie(e){let t=o.useContext(q);return t||y(!1),t}function Oe(e){let t=o.useContext(L);return t||y(!1),t}function Te(e){let t=Oe(),a=t.matches[t.matches.length-1];return a.route.id||y(!1),a.route.id}function Ee(){let{router:e}=Ie(Q.UseNavigateStable),t=Te(X.UseNavigateStable),a=o.useRef(!1);return G(()=>{a.current=!0}),o.useCallback(function(r,i){i===void 0&&(i={}),a.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,I({fromRouteId:t},i)))},[e,t])}const Ue="startTransition",$=oe[Ue];function Y(e){let{basename:t,children:a,initialEntries:n,initialIndex:r,future:i}=e,d=o.useRef();d.current==null&&(d.current=he({initialEntries:n,initialIndex:r,v5Compat:!0}));let u=d.current,[p,l]=o.useState({action:u.action,location:u.location}),{v7_startTransition:m}=i||{},x=o.useCallback(v=>{m&&$?$(()=>l(v)):l(v)},[l,m]);return o.useLayoutEffect(()=>u.listen(x),[u,x]),o.createElement(Le,{basename:t,children:a,location:p.location,navigationType:p.action,navigator:u,future:i})}function Le(e){let{basename:t="/",children:a=null,location:n,navigationType:r=b.Pop,navigator:i,static:d=!1,future:u}=e;M()&&y(!1);let p=t.replace(/^\/*/,"/"),l=o.useMemo(()=>({basename:p,navigator:i,static:d,future:I({v7_relativeSplatPath:!1},u)}),[p,u,i,d]);typeof n=="string"&&(n=P(n));let{pathname:m="/",search:x="",hash:v="",state:c=null,key:h="default"}=n,g=o.useMemo(()=>{let R=ge(m,p);return R==null?null:{location:{pathname:R,search:x,hash:v,state:c,key:h},navigationType:r}},[p,m,x,v,c,h,r]);return g==null?null:o.createElement(E.Provider,{value:l},o.createElement(U.Provider,{children:a,value:g}))}new Promise(()=>{});/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function T(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,a)=>{let n=e[a];return t.concat(Array.isArray(n)?n.map(r=>[a,r]):[[a,n]])},[]))}function Me(e,t){let a=T(e);return t&&t.forEach((n,r)=>{a.has(r)||t.getAll(r).forEach(i=>{a.append(r,i)})}),a}const Be="6";try{window.__reactRouterVersion=Be}catch{}var W;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(W||(W={}));var k;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(k||(k={}));function Ae(e){let t=o.useRef(T(e)),a=o.useRef(!1),n=Z(),r=o.useMemo(()=>Me(n.search,a.current?null:t.current),[n.search]),i=Pe(),d=o.useCallback((u,p)=>{const l=T(typeof u=="function"?u(r):u);a.current=!0,i("?"+l,p)},[i,r]);return[r,d]}const $e="_nameBlock_ujxrv_1",We="_defaltDeckImg_ujxrv_8",ke="_iconBtns_ujxrv_12",De="_playCircleOutline_ujxrv_24",Fe="_Edit2Outline_ujxrv_25",He="_TrashOutline_ujxrv_26",Ve="_disabled_ujxrv_33",Je="_arrow_ujxrv_38",C={nameBlock:$e,defaltDeckImg:We,iconBtns:ke,playCircleOutline:De,Edit2Outline:Fe,TrashOutline:He,disabled:Ve,arrow:Je},ze=""+new URL("defaultDeckImg-D8ccHzba.png",import.meta.url).href,Ke="_table_1upfp_1",qe="_thead_1upfp_15",Ze="_headCell_1upfp_19",Ge="_cell_1upfp_33",_={table:Ke,thead:qe,headCell:Ze,cell:Ge},ee=o.forwardRef(({className:e,...t},a)=>{const n={table:j(e,_.table)};return s.jsx("table",{className:n.table,ref:a,...t})}),te=o.forwardRef(({className:e,...t},a)=>{const n={thead:j(e,_.thead)};return s.jsx("thead",{className:n.thead,...t,ref:a})}),ae=o.forwardRef(({className:e,...t},a)=>{const n={tbody:j(e,_.tbody)};return s.jsx("tbody",{className:n.tbody,...t,ref:a})}),ne=o.forwardRef(({className:e,...t},a)=>{const n={row:j(e,_.row)};return s.jsx("tr",{className:n.row,...t,ref:a})}),re=o.forwardRef(({className:e,...t},a)=>{const n={headCell:j(e,_.headCell)};return s.jsx("th",{className:n.headCell,...t,ref:a})}),se=o.forwardRef(({className:e,...t},a)=>{const n={cell:j(e,_.cell)};return s.jsx("td",{className:n.cell,...t,ref:a})}),f={Body:ae,Cell:se,Head:te,HeadCell:re,Root:ee,Row:ne};ee.__docgenInfo={description:"",methods:[],displayName:"Root"};te.__docgenInfo={description:"",methods:[],displayName:"Head"};ae.__docgenInfo={description:"",methods:[],displayName:"Body"};ne.__docgenInfo={description:"",methods:[],displayName:"Row"};re.__docgenInfo={description:"",methods:[],displayName:"HeadCell"};se.__docgenInfo={description:"",methods:[],displayName:"Cell"};const le=()=>{const e=["Name","Cards","Last Updated","Created By"],t=[{author:{id:"1",name:"BD"},cardsCount:0,cover:"…",created:"02.05.2024",id:"c1",isPrivate:!0,name:"My Deck",updated:"02.05.2024",userId:"1"},{author:{id:"2",name:"Author name"},cardsCount:8,cover:"…",created:"02.05.2024",id:"c2",isPrivate:!1,name:"Other Deck",updated:"12.02.2022",userId:"1"},{author:{id:"3",name:"Other7"},cardsCount:5,cover:"…",created:"17.02.2024",id:"c3",isPrivate:!1,name:"Z",updated:"17.02.2023",userId:"1"},{author:{id:"4",name:"Other1"},cardsCount:0,cover:"…",created:"17.02.2023",id:"c4",isPrivate:!1,name:"C",updated:"22.02.2023",userId:"1"}],[a,n]=Ae(),r=a.get("sort")||"Last Updated",i=a.get("order")||"asc",d=l=>{n({order:r===l&&i==="asc"?"desc":"asc",sort:l})},u={Cards:"cardsCount","Created By":"author.name","Last Updated":"updated",Name:"name"},p=o.useMemo(()=>{if(!r||!u[r])return t;const l=u[r];return[...t].sort((m,x)=>{const v=l.split(".").reduce((h,g)=>h[g],m),c=l.split(".").reduce((h,g)=>h[g],x);return v<c?i==="asc"?-1:1:v>c?i==="asc"?1:-1:0})},[t,r,i,u]);return s.jsxs(f.Root,{children:[s.jsx(f.Head,{children:s.jsxs(f.Row,{children:[e.map(l=>s.jsx(f.HeadCell,{className:C.visible,onClick:()=>d(l),children:s.jsxs("span",{children:[l,r===l&&i==="desc"&&s.jsx(ie,{className:C.arrow}),r===l&&i==="asc"&&s.jsx(ce,{className:C.arrow})]})},l)),s.jsx(f.HeadCell,{})]})}),s.jsx(f.Body,{children:p.length!==0?p.map(l=>s.jsxs(f.Row,{children:[s.jsx(f.Cell,{children:s.jsxs("a",{className:C.nameBlock,href:"/",children:[s.jsx("img",{alt:"default card img",className:C.defaltDeckImg,src:ze}),s.jsx("h3",{children:l.name})]})}),s.jsx(f.Cell,{children:l.cardsCount}),s.jsx(f.Cell,{children:l.updated}),s.jsx(f.Cell,{children:l.author.name}),s.jsx(f.Cell,{children:l.userId===l.author.id?s.jsxs("div",{className:C.iconBtns,children:[s.jsx("button",{children:s.jsx(ue,{className:C.Edit2Outline})}),s.jsx("button",{disabled:l.cardsCount===0,children:s.jsx(B,{className:`${C.playCircleOutline} ${l.cardsCount===0&&C.disabled}`})}),s.jsx("button",{children:s.jsx(de,{className:C.TrashOutline})})]}):s.jsx("div",{className:C.iconBtns,children:s.jsx("button",{disabled:l.cardsCount===0,children:s.jsx(B,{className:`${C.playCircleOutline} ${l.cardsCount===0&&C.disabled}`})})})})]},l.id)):s.jsx(f.Row,{children:s.jsx(f.Cell,{colSpan:100,style:{textAlign:"center"},children:"Empty"})})})]})};le.__docgenInfo={description:"",methods:[],displayName:"Decks"};const at={component:f,tags:["autodocs"],title:"Components/Table"},N=()=>{const e=["Name","Cards","Last Updated","Created By"];return s.jsx(Y,{initialEntries:["/"],children:s.jsxs(f.Root,{children:[s.jsx(f.Head,{children:s.jsxs(f.Row,{children:[e.map(t=>s.jsx(f.HeadCell,{children:s.jsx("span",{children:t})},t)),s.jsx(f.HeadCell,{})]})}),s.jsx(f.Body,{children:s.jsx(f.Row,{children:s.jsx(f.Cell,{colSpan:100,style:{textAlign:"center"},children:"Empty"})})})]})})},w=()=>s.jsx(Y,{children:s.jsx(le,{})});N.__docgenInfo={description:"",methods:[],displayName:"Default"};w.__docgenInfo={description:"",methods:[],displayName:"WithContent"};var D,F,H;N.parameters={...N.parameters,docs:{...(D=N.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const headersName = ['Name', 'Cards', 'Last Updated', 'Created By'];
  return <MemoryRouter initialEntries={['/']}>\r
      <Table.Root>\r
        <Table.Head>\r
          <Table.Row>\r
            {headersName.map(name => <Table.HeadCell key={name}>\r
                <span>{name}</span>\r
              </Table.HeadCell>)}\r
            <Table.HeadCell></Table.HeadCell>\r
          </Table.Row>\r
        </Table.Head>\r
        <Table.Body>\r
          <Table.Row>\r
            <Table.Cell colSpan={100} style={{
            textAlign: 'center'
          }}>\r
              Empty\r
            </Table.Cell>\r
          </Table.Row>\r
        </Table.Body>\r
      </Table.Root>\r
    </MemoryRouter>;
}`,...(H=(F=N.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var V,J,z;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <MemoryRouter>\r
      <Decks />\r
    </MemoryRouter>;
}`,...(z=(J=w.parameters)==null?void 0:J.docs)==null?void 0:z.source}}};const nt=["Default","WithContent"];export{N as Default,w as WithContent,nt as __namedExportsOrder,at as default};