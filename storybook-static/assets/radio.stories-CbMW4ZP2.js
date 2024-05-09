import{j as e}from"./jsx-runtime-CexXSJP5.js";import{_ as v,$ as L}from"./index-BxZYxvCr.js";import{r as s}from"./index-BP8_t0zE.js";import{a as P,b as J,d as E,e as j}from"./index-DJ4wlX1H.js";import{$ as A,a as Q,b as Z}from"./index-DHmXhf23.js";import{a as ee}from"./index-CmqfNWL9.js";import{$ as oe}from"./index-BSDh6yLp.js";import{$ as ae}from"./index-CF1bRcOk.js";import{$ as te}from"./index-Dpkz7dOd.js";import{c as g}from"./clsx-B-dksMZM.js";import"./index-BxmsGmlx.js";import"./index-B_shv8DR.js";const V="Radio",[re,T]=P(V),[se,ne]=re(V),de=s.forwardRef((a,d)=>{const{__scopeRadio:o,name:n,checked:t=!1,required:c,disabled:l,value:p="on",onCheck:u,...m}=a,[$,f]=s.useState(null),b=L(d,x=>f(x)),i=s.useRef(!1),R=$?!!$.closest("form"):!0;return s.createElement(se,{scope:o,checked:t,disabled:l},s.createElement(E.button,v({type:"button",role:"radio","aria-checked":t,"data-state":M(t),"data-disabled":l?"":void 0,disabled:l,value:p},m,{ref:b,onClick:j(a.onClick,x=>{t||u==null||u(),R&&(i.current=x.isPropagationStopped(),i.current||x.stopPropagation())})})),R&&s.createElement(le,{control:$,bubbles:!i.current,name:n,value:p,checked:t,required:c,disabled:l,style:{transform:"translateX(-100%)"}}))}),ce="RadioIndicator",ie=s.forwardRef((a,d)=>{const{__scopeRadio:o,forceMount:n,...t}=a,c=ne(ce,o);return s.createElement(te,{present:n||c.checked},s.createElement(E.span,v({"data-state":M(c.checked),"data-disabled":c.disabled?"":void 0},t,{ref:d})))}),le=a=>{const{control:d,checked:o,bubbles:n=!0,...t}=a,c=s.useRef(null),l=ae(o),p=oe(d);return s.useEffect(()=>{const u=c.current,m=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(m,"checked").set;if(l!==o&&f){const b=new Event("click",{bubbles:n});f.call(u,o),u.dispatchEvent(b)}},[l,o,n]),s.createElement("input",v({type:"radio","aria-hidden":!0,defaultChecked:o},t,{tabIndex:-1,ref:c,style:{...a.style,...p,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function M(a){return a?"checked":"unchecked"}const ue=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],O="RadioGroup",[pe,Me]=P(O,[A,T]),F=A(),K=T(),[fe,be]=pe(O),me=s.forwardRef((a,d)=>{const{__scopeRadioGroup:o,name:n,defaultValue:t,value:c,required:l=!1,disabled:p=!1,orientation:u,dir:m,loop:$=!0,onValueChange:f,...b}=a,i=F(o),R=ee(m),[x,Y]=J({prop:c,defaultProp:t,onChange:f});return s.createElement(fe,{scope:o,name:n,required:l,disabled:p,value:x,onValueChange:Y},s.createElement(Q,v({asChild:!0},i,{orientation:u,dir:R,loop:$}),s.createElement(E.div,v({role:"radiogroup","aria-required":l,"aria-orientation":u,"data-disabled":p?"":void 0,dir:R},b,{ref:d}))))}),$e="RadioGroupItem",Re=s.forwardRef((a,d)=>{const{__scopeRadioGroup:o,disabled:n,...t}=a,c=be($e,o),l=c.disabled||n,p=F(o),u=K(o),m=s.useRef(null),$=L(d,m),f=c.value===t.value,b=s.useRef(!1);return s.useEffect(()=>{const i=x=>{ue.includes(x.key)&&(b.current=!0)},R=()=>b.current=!1;return document.addEventListener("keydown",i),document.addEventListener("keyup",R),()=>{document.removeEventListener("keydown",i),document.removeEventListener("keyup",R)}},[]),s.createElement(Z,v({asChild:!0},p,{focusable:!l,active:f}),s.createElement(de,v({disabled:l,required:c.required,checked:f},u,t,{name:c.name,ref:$,onCheck:()=>c.onValueChange(t.value),onKeyDown:j(i=>{i.key==="Enter"&&i.preventDefault()}),onFocus:j(t.onFocus,()=>{var i;b.current&&((i=m.current)===null||i===void 0||i.click())})})))}),xe=s.forwardRef((a,d)=>{const{__scopeRadioGroup:o,...n}=a,t=K(o);return s.createElement(ie,v({},t,n,{ref:d}))}),ve=me,_e=Re,he=xe,ye="_light_1qno3_1",Ie="_form_1qno3_8",ge="_body_1qno3_14",je="_item_1qno3_24",Ee="_span_1qno3_59",ke="_label_1qno3_76",De="_disabled_1qno3_84",_={light:ye,"light-theme":"_light-theme_1qno3_1",form:Ie,body:ge,item:je,span:Ee,label:ke,disabled:De},U=({children:a,className:d,...o})=>{const n={form:g(d,_.form)};return e.jsx("form",{...o,children:e.jsx(ve,{"aria-label":"View density",className:n.form,defaultValue:"default",children:a})})},z=({children:a,className:d,isDisabled:o=!1,...n})=>{const t={body:g(d,_.body,o&&_.disabled)};return e.jsx("div",{className:t.body,...n,children:a})},H=({className:a,isDisabled:d=!1,tabIndex:o,value:n,...t})=>{const c={item:g(a,_.item)};return e.jsx(_e,{className:c.item,disabled:d,id:n,tabIndex:o,value:n,...t})},W=({className:a,isDisabled:d=!1,label:o,value:n,...t})=>{const c={label:g(a,_.label,d&&_.disabled)};return e.jsx("label",{className:c.label,htmlFor:n,...t,children:o})},X=({className:a,isDisabled:d=!1,...o})=>{const n={span:g(a,_.span,d&&_.disabled)};return e.jsx(he,{className:n.span,...o})},r={Body:z,Item:H,Label:W,Root:U,Span:X};U.__docgenInfo={description:"",methods:[],displayName:"Root"};z.__docgenInfo={description:"",methods:[],displayName:"Body",props:{isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};H.__docgenInfo={description:"",methods:[],displayName:"Item",props:{isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tabIndex:{required:!0,tsType:{name:"number"},description:""},value:{required:!0,tsType:{name:"string"},description:""}}};W.__docgenInfo={description:"",methods:[],displayName:"Label",props:{isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""}}};X.__docgenInfo={description:"",methods:[],displayName:"Span",props:{isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Oe={component:r,tags:["autodocs"],title:"Components/Radio"},h=()=>e.jsxs(r.Root,{children:[e.jsxs(r.Body,{children:[e.jsx(r.Item,{tabIndex:1,value:"1",children:e.jsx(r.Span,{})}),e.jsx(r.Label,{label:"one",value:"1"})]}),e.jsxs(r.Body,{children:[e.jsx(r.Item,{tabIndex:2,value:"2",children:e.jsx(r.Span,{})}),e.jsx(r.Label,{label:"two",value:"2"})]}),e.jsxs(r.Body,{children:[e.jsx(r.Item,{tabIndex:3,value:"3",children:e.jsx(r.Span,{})}),e.jsx(r.Label,{label:"three",value:"3"})]})]}),y=()=>e.jsx(r.Root,{children:e.jsxs(r.Body,{children:[e.jsx(r.Item,{tabIndex:1,value:"1",children:e.jsx(r.Span,{})}),e.jsx(r.Label,{label:"common",value:"1"})]})}),I=()=>e.jsx(r.Root,{children:e.jsxs(r.Body,{isDisabled:!0,children:[e.jsx(r.Item,{isDisabled:!0,tabIndex:5,value:"5",children:e.jsx(r.Span,{})}),e.jsx(r.Label,{isDisabled:!0,label:"disabled",value:"5"})]})});h.__docgenInfo={description:"",methods:[],displayName:"DefaultGroup"};y.__docgenInfo={description:"",methods:[],displayName:"Default"};I.__docgenInfo={description:"",methods:[],displayName:"Disabled"};var k,D,S;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <Radio.Root>\r
      <Radio.Body>\r
        <Radio.Item tabIndex={1} value={'1'}>\r
          <Radio.Span />\r
        </Radio.Item>\r
        <Radio.Label label={'one'} value={'1'} />\r
      </Radio.Body>\r
      <Radio.Body>\r
        <Radio.Item tabIndex={2} value={'2'}>\r
          <Radio.Span />\r
        </Radio.Item>\r
        <Radio.Label label={'two'} value={'2'} />\r
      </Radio.Body>\r
      <Radio.Body>\r
        <Radio.Item tabIndex={3} value={'3'}>\r
          <Radio.Span />\r
        </Radio.Item>\r
        <Radio.Label label={'three'} value={'3'} />\r
      </Radio.Body>\r
    </Radio.Root>;
}`,...(S=(D=h.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var q,C,N;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <Radio.Root>\r
      <Radio.Body>\r
        <Radio.Item tabIndex={1} value={'1'}>\r
          <Radio.Span />\r
        </Radio.Item>\r
        <Radio.Label label={'common'} value={'1'} />\r
      </Radio.Body>\r
    </Radio.Root>;
}`,...(N=(C=y.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var w,B,G;I.parameters={...I.parameters,docs:{...(w=I.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <Radio.Root>\r
      <Radio.Body isDisabled>\r
        <Radio.Item isDisabled tabIndex={5} value={'5'}>\r
          <Radio.Span />\r
        </Radio.Item>\r
        <Radio.Label isDisabled label={'disabled'} value={'5'} />\r
      </Radio.Body>\r
    </Radio.Root>;
}`,...(G=(B=I.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const Fe=["DefaultGroup","Default","Disabled"];export{y as Default,h as DefaultGroup,I as Disabled,Fe as __namedExportsOrder,Oe as default};
