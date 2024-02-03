import{a,j as c}from"./jsx-runtime-03b4ddbf.js";import{u as f,a as g,f as v,T as x,P as k,s as T,M as y}from"./TaskList.stories-ccdd8541.js";import{r as B}from"./index-03d05a58.js";import{r as E}from"./index-76fb7be0.js";import{w as b,a as I,b as S,f as o}from"./index-02850062.js";import"./Task.stories-8f9c837e.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";var u=B();function w(){const{error:s}=f(t=>t.taskbox),e=g();return E.useEffect(()=>{e(v())},[]),s?a("div",{className:" page lists-show",children:c("div",{className:"wrapper-message",children:[a("span",{className:"icon-face-sad"}),a("p",{className:" title-message",children:" Oh no ..."}),a("p",{className:" subtitle-message",children:" Something went wrong"})]})}):c("div",{className:" page lists-show",children:[a("nav",{children:a("h1",{className:" title-page ",children:"Taskbox"})}),a(x,{})]})}w.__docgenInfo={description:"",methods:[],displayName:"InBoxScreen"};const A={component:w,title:"InBoxScreen",tags:["autodocs"],decorators:[s=>a(k,{store:T,children:s()})]},r={parameters:{msw:{handlers:[u.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(s,e,t)=>e(t.json(y.tasks)))]}},play:async({canvasElement:s})=>{const e=b(s);await I(await e.findAllByTestId("loading")),await S(async()=>{await o.click(e.getByLabelText("pinTask-1")),await o.click(e.getByLabelText("pinTask-3")),await o.click(e.getByLabelText("archiveTask-5"))})}},n={parameters:{msw:{handlers:[u.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(s,e,t)=>e(t.status(403)))]}}};var i,l,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [rest.get('https://jsonplaceholder.typicode.com/todos?userId=1', (req, res, ctx) => {
        return res(ctx.json(MockedState.tasks));
      })]
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitForElementToBeRemoved(await canvas.findAllByTestId('loading'));
    await waitFor(async () => {
      await fireEvent.click(canvas.getByLabelText('pinTask-1'));
      await fireEvent.click(canvas.getByLabelText('pinTask-3'));
      await fireEvent.click(canvas.getByLabelText('archiveTask-5'));
    });
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [rest.get('https://jsonplaceholder.typicode.com/todos?userId=1', (req, res, ctx) => {
        return res(ctx.status(403));
      })]
    }
  }
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const O=["Default","Error"];export{r as Default,n as Error,O as __namedExportsOrder,A as default};
