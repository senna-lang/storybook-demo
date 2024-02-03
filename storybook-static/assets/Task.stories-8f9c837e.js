import{j as l,a as s}from"./jsx-runtime-03b4ddbf.js";import{P as t}from"./index-8d47fad6.js";function o({task:{id:a,title:c,state:i},onPinTask:b,archiveTask:f}){return l("div",{className:`list-item ${i}`,children:[l("label",{htmlFor:"checked",className:"checkbox",children:[s("input",{type:"checkbox",name:"checked",id:`archiveTask-${a}`}),s("span",{className:"check-box-custom",onClick:()=>f(a),"aria-label":`archiveTask-${a}`})]}),s("label",{htmlFor:"title",className:"title","aria-label":c,children:s("input",{type:"text",value:c,readOnly:!0,name:"title",placeholder:"title"})}),i!=="TASK_ARCHIVED"&&s("button",{className:" pin-button",id:`pinTask-${a}`,"aria-label":`pinTask-${a}`,onClick:()=>b(a),children:s("span",{className:"icon-star"})})]})}o.PropType={task:t.shape({id:t.string.isRequired,title:t.string.isRequired,state:t.string.isRequired,onPinTask:t.func.isRequired,archiveTask:t.func.isRequired})};o.__docgenInfo={description:"",methods:[],displayName:"Task"};const N={component:o,title:"Task",tags:["autodocs"]},e={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},r={args:{task:{...e.args.task,state:"TASK_PINNED"}}},n={args:{task:{...e.args.task,state:"TASK_ARCHIVED"}}};var d,p,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,k,T;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(T=(k=r.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var g,h,_;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(_=(h=n.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const A=["Default","Pinned","Archived"],P=Object.freeze(Object.defineProperty({__proto__:null,Archived:n,Default:e,Pinned:r,__namedExportsOrder:A,default:N},Symbol.toStringTag,{value:"Module"}));export{e as D,o as T,P as a};
