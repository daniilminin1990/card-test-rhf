import{j as U}from"./jsx-runtime-CexXSJP5.js";import{r as j}from"./index-BP8_t0zE.js";import{S as D}from"./checkbox-CC3pRDKK.js";import"./index-BxZYxvCr.js";import"./index-DJ4wlX1H.js";import"./index-BxmsGmlx.js";import"./index-CF1bRcOk.js";import"./index-BSDh6yLp.js";import"./index-Dpkz7dOd.js";const v={argTypes:{onCheckedChange:{action:"checked"}},component:D,tags:["autodocs"],title:"COMPONENTS/Checkbox"},e={args:{id:"checked-checkbox",isChecked:!0,isDisabled:!1,label:"Click me"}},c={args:{id:"unchecked-checkbox",isChecked:!1,isDisabled:!1,label:"Click me"}},s={args:{id:"disabled-unchecked-checkbox",isChecked:!0,isDisabled:!0,label:"Click me"}},r={args:{id:"disabled-checked-checkbox",isChecked:!1,isDisabled:!0,label:"Click me"}},a={args:{label:"Click me"},render:S=>{const[d,E]=j.useState(!0);return U.jsx(D,{...S,checked:d,id:"controlled-checkbox",onCheckedChange:()=>E(!d)})}};var o,n,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    id: 'checked-checkbox',
    isChecked: true,
    isDisabled: false,
    label: 'Click me'
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var i,l,k;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    id: 'unchecked-checkbox',
    isChecked: false,
    isDisabled: false,
    label: 'Click me'
  }
}`,...(k=(l=c.parameters)==null?void 0:l.docs)==null?void 0:k.source}}};var h,m,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'disabled-unchecked-checkbox',
    isChecked: true,
    isDisabled: true,
    label: 'Click me'
  }
}`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var C,u,p;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: 'disabled-checked-checkbox',
    isChecked: false,
    isDisabled: true,
    label: 'Click me'
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,x,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Click me'
  },
  render: args => {
    const [checked, setChecked] = useState(true);
    return <Checkbox {...args} checked={checked} id={'controlled-checkbox'} onCheckedChange={() => setChecked(!checked)} />;
  }
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const w=["Checked","Unchecked","DisabledChecked","DisabledUnchecked","Controlled"];export{e as Checked,a as Controlled,s as DisabledChecked,r as DisabledUnchecked,c as Unchecked,w as __namedExportsOrder,v as default};
