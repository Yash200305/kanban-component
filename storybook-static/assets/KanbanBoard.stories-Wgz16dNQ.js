import{w as W}from"./index-sHzcaYBZ.js";import{j as t}from"./jsx-runtime-BIduicIm.js";import{R as F,r as u}from"./index-D9C2W64m.js";import"./_commonjsHelpers-CqkleIqs.js";function B(e){var s,n,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(s=0;s<r;s++)e[s]&&(n=B(e[s]))&&(a&&(a+=" "),a+=n)}else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function P(){for(var e,s,n=0,a="",r=arguments.length;n<r;n++)(e=arguments[n])&&(s=B(e))&&(a&&(a+=" "),a+=s);return a}const L=e=>{switch(e){case"urgent":return"bg-red-600";case"high":return"bg-orange-500";case"medium":return"bg-yellow-500";case"low":return"bg-emerald-500";default:return"bg-gray-400"}},M=F.memo(({task:e,onEdit:s,onDelete:n,draggable:a=!0,onDragStart:r})=>t.jsxs("div",{className:"rounded-md border border-gray-200 bg-white p-3 shadow-sm hover:shadow transition-shadow cursor-grab",draggable:a,onDragStart:o=>r?.(o,e.id),role:"button",tabIndex:0,"aria-label":`${e.title}. Press space to pick up.`,children:[t.jsxs("div",{className:"flex items-start justify-between gap-2",children:[t.jsx("h4",{className:"font-medium text-gray-900",children:e.title}),t.jsx("span",{className:P("inline-block h-2 w-2 rounded-full",L(e.priority)),"aria-hidden":!0})]}),e.description&&t.jsx("p",{className:"mt-1 text-sm text-gray-600",children:e.description}),t.jsx("div",{className:"mt-2 flex items-center gap-2",children:e.priority&&t.jsx("span",{className:"inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800",children:e.priority})}),t.jsxs("div",{className:"mt-2 flex gap-2",children:[s&&t.jsx("button",{className:"text-xs text-blue-600 hover:underline",onClick:()=>s(e.id),children:"Edit"}),n&&t.jsx("button",{className:"text-xs text-rose-600 hover:underline",onClick:()=>n(e.id),children:"Delete"})]})]}));M.__docgenInfo={description:"",methods:[],displayName:"KanbanCard",props:{task:{required:!0,tsType:{name:"KanbanTask"},description:""},onEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},draggable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onDragStart:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.DragEvent, id: string) => void",signature:{arguments:[{type:{name:"ReactDragEvent",raw:"React.DragEvent"},name:"e"},{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const _=({column:e,tasks:s,onDragOver:n,onDrop:a,onCardDragStart:r,onEdit:o,onDelete:d})=>t.jsxs("section",{className:"flex w-80 min-w-[20rem] flex-col rounded-lg bg-gray-50 p-3",role:"region","aria-label":`${e.title} column with ${s.length} tasks`,onDragOver:n,onDrop:g=>a(g,e.id,s.length),"data-column-id":e.id,children:[t.jsxs("header",{className:"mb-2 flex items-center justify-between",children:[t.jsx("h3",{className:"text-sm font-semibold text-gray-800",children:e.title}),t.jsx("span",{className:"text-xs text-gray-500","aria-label":"task count",children:s.length})]}),t.jsxs("div",{className:"flex flex-col gap-3",role:"list",children:[t.jsx("div",{role:"button","aria-label":`Drop before first task in ${e.title}`,className:"h-0.5",onDragOver:n,onDrop:g=>a(g,e.id,0)}),s.map((g,I)=>t.jsxs("div",{role:"listitem",children:[t.jsx(M,{task:g,onEdit:o,onDelete:d,onDragStart:r}),t.jsx("div",{role:"button","aria-label":`Drop after ${g.title}`,className:"h-0.5",onDragOver:n,onDrop:w=>a(w,e.id,I+1)})]},g.id)),s.length===0&&t.jsx("div",{className:"rounded border border-dashed border-gray-300 p-3 text-center text-sm text-gray-500","aria-label":`No tasks in ${e.title}. Drag tasks here.`,children:"Drag tasks here"})]})]});_.__docgenInfo={description:"",methods:[],displayName:"KanbanColumn",props:{column:{required:!0,tsType:{name:"KanbanColumnModel"},description:""},tasks:{required:!0,tsType:{name:"Array",elements:[{name:"KanbanTask"}],raw:"KanbanTask[]"},description:""},onDragOver:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.DragEvent) => void",signature:{arguments:[{type:{name:"ReactDragEvent",raw:"React.DragEvent"},name:"e"}],return:{name:"void"}}},description:""},onDrop:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.DragEvent, columnId: string, index: number) => void",signature:{arguments:[{type:{name:"ReactDragEvent",raw:"React.DragEvent"},name:"e"},{type:{name:"string"},name:"columnId"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},onCardDragStart:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.DragEvent, id: string) => void",signature:{arguments:[{type:{name:"ReactDragEvent",raw:"React.DragEvent"},name:"e"},{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};function G(e,s){const[n,a]=u.useState(e),[r,o]=u.useState(s),d=u.useMemo(()=>{const m={};for(const l of n){const c=[];for(const i of l.taskIds){const p=r[i];p&&c.push(p)}m[l.id]=c}return m},[n,r]),g=u.useCallback((m,l,c)=>{a(i=>{const p=i.map(k=>({...k,taskIds:k.taskIds.filter(R=>R!==m)})),f=p.find(k=>k.id===l);if(!f)return i;const b=f.taskIds.slice(),h=Math.max(0,Math.min(c,b.length));return b.splice(h,0,m),p.map(k=>k.id===l?{...k,taskIds:b}:k)}),o(i=>{const p=i[m];if(!p)return i;const f={...p,updatedAt:new Date().toISOString()};return{...i,[m]:f}})},[]),I=u.useCallback((m,l)=>{const c=globalThis.crypto?.randomUUID?.()??Math.random().toString(36).slice(2),i=new Date().toISOString(),p={id:c,title:l.title,description:l.description,priority:l.priority,createdAt:i,updatedAt:i};o(f=>({...f,[c]:p})),a(f=>f.map(b=>b.id===m?{...b,taskIds:[...b.taskIds,c]}:b))},[]),w=u.useCallback((m,l)=>{o(c=>{const i=c[m];if(!i)return c;const p={...i,...l,updatedAt:new Date().toISOString()};return{...c,[m]:p}})},[]),S=u.useCallback(m=>{a(l=>l.map(c=>({...c,taskIds:c.taskIds.filter(i=>i!==m)}))),o(l=>{if(!(m in l))return l;const{[m]:c,...i}=l;return i})},[]);return{columns:n,tasks:r,tasksByColumn:d,moveTask:g,createTask:I,updateTask:w,deleteTask:S}}function H(){const[e,s]=u.useState(null),n=u.useCallback((d,g)=>{d.dataTransfer.effectAllowed="move",d.dataTransfer.setData("text/plain",g),s(g)},[]),a=u.useCallback(d=>{d.preventDefault(),d.dataTransfer.dropEffect="move"},[]),r=u.useCallback(d=>{d.preventDefault();const g=d.dataTransfer.getData("text/plain");return s(null),g},[]),o=u.useCallback(()=>s(null),[]);return{draggedId:e,onDragStart:n,onDragOver:a,onDrop:r,onDragEnd:o}}const K=({className:e,variant:s="primary",...n})=>{const a=s==="primary"?"bg-blue-600 text-white hover:bg-blue-700":s==="secondary"?"bg-gray-100 text-gray-900 hover:bg-gray-200":"bg-transparent text-gray-700 hover:bg-gray-100";return t.jsx("button",{className:P("inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500",a,e),...n})};K.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}}}};const V=({open:e,onClose:s,title:n,children:a})=>e?t.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",role:"dialog","aria-modal":"true",children:[t.jsx("div",{className:"absolute inset-0 bg-black/50",onClick:s,"aria-hidden":!0}),t.jsxs("div",{className:"relative z-10 w-full max-w-md rounded-lg bg-white p-4 shadow-lg",children:[n&&t.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:n}),t.jsx("div",{className:"mt-2",children:a}),t.jsx("div",{className:"mt-4 flex justify-end",children:t.jsx("button",{className:"text-sm text-gray-700 hover:underline",onClick:s,children:"Close"})})]})]}):null;V.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const $=({columns:e,tasks:s,onTaskMove:n,onTaskCreate:a,onTaskEdit:r,onTaskDelete:o})=>{const{columns:d,tasksByColumn:g,moveTask:I,createTask:w,deleteTask:S}=G(e,s),{onDragStart:m,onDragOver:l,onDrop:c}=H(),[i,p]=u.useState(!1),[f,b]=u.useState(null),[h,k]=u.useState({title:"",description:"",priority:"medium"}),R=u.useCallback((y,x,q)=>{const E=c(y);E&&(I(E,x,q),n?.(E,x,q))},[I,c,n]),O=u.useCallback(y=>{b(y),k({title:"",description:"",priority:"medium"}),p(!0)},[]),U=u.useCallback(()=>{!f||!h.title.trim()||(w(f,h),a?.(f),p(!1))},[f,h,w,a]),z=u.useMemo(()=>d,[d]);return t.jsxs("div",{className:"flex gap-4 overflow-x-auto p-4",children:[z.map(y=>t.jsxs("div",{className:"flex flex-col gap-2",children:[t.jsx(_,{column:y,tasks:g[y.id]??[],onDragOver:l,onDrop:R,onCardDragStart:m,onEdit:x=>r?.(x),onDelete:x=>{S(x),o?.(x)}}),t.jsx(K,{variant:"secondary",onClick:()=>O(y.id),children:"Add task"})]},y.id)),t.jsx(V,{open:i,onClose:()=>p(!1),title:"Create task",children:t.jsxs("div",{className:"flex flex-col gap-3",children:[t.jsx("input",{className:"rounded border px-2 py-1",placeholder:"Title",value:h.title,onChange:y=>k(x=>({...x,title:y.target.value}))}),t.jsx("textarea",{className:"rounded border px-2 py-1",placeholder:"Description",value:h.description,onChange:y=>k(x=>({...x,description:y.target.value}))}),t.jsxs("select",{className:"rounded border px-2 py-1",value:h.priority,onChange:y=>k(x=>({...x,priority:y.target.value})),children:[t.jsx("option",{value:"low",children:"low"}),t.jsx("option",{value:"medium",children:"medium"}),t.jsx("option",{value:"high",children:"high"}),t.jsx("option",{value:"urgent",children:"urgent"})]}),t.jsxs("div",{className:"flex justify-end gap-2",children:[t.jsx(K,{variant:"ghost",onClick:()=>p(!1),children:"Cancel"}),t.jsx(K,{onClick:U,children:"Create"})]})]})})]})};$.__docgenInfo={description:"",methods:[],displayName:"KanbanBoard",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"KanbanColumn"}],raw:"KanbanColumn[]"},description:""},tasks:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"KanbanTask"}],raw:"Record<Id, KanbanTask>"},description:""},onTaskMove:{required:!1,tsType:{name:"signature",type:"function",raw:"(taskId: Id, toColumnId: Id, toIndex: number) => void",signature:{arguments:[{type:{name:"string"},name:"taskId"},{type:{name:"string"},name:"toColumnId"},{type:{name:"number"},name:"toIndex"}],return:{name:"void"}}},description:""},onTaskCreate:{required:!1,tsType:{name:"signature",type:"function",raw:"(columnId: Id) => void",signature:{arguments:[{type:{name:"string"},name:"columnId"}],return:{name:"void"}}},description:""},onTaskEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"(taskId: Id) => void",signature:{arguments:[{type:{name:"string"},name:"taskId"}],return:{name:"void"}}},description:""},onTaskDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(taskId: Id) => void",signature:{arguments:[{type:{name:"string"},name:"taskId"}],return:{name:"void"}}},description:""}}};const Z={title:"Components/KanbanBoard",component:$,parameters:{layout:"fullscreen"},tags:["autodocs"]},v=new Date().toISOString();function A(e,s="t"){const n={},a=[],r=["low","medium","high","urgent"];for(let o=1;o<=e;o++){const d=`${s}${o}`;a.push(d),n[d]={id:d,title:`Task ${o}`,description:o%3===0?"Longer description for demo":"Short note",priority:r[o%r.length],createdAt:v,updatedAt:v}}return{tasks:n,ids:a}}const D={args:{columns:[{id:"todo",title:"To Do",taskIds:["t1","t2"]},{id:"inprogress",title:"In Progress",taskIds:["t3"]},{id:"done",title:"Done",taskIds:[]}],tasks:{t1:{id:"t1",title:"Design API",description:"Plan endpoints",priority:"high",createdAt:v,updatedAt:v},t2:{id:"t2",title:"Write tests",description:"Unit tests",priority:"medium",createdAt:v,updatedAt:v},t3:{id:"t3",title:"Implement UI",description:"Build components",priority:"urgent",createdAt:v,updatedAt:v}}}},T={args:{columns:[{id:"todo",title:"To Do",taskIds:[]},{id:"inprogress",title:"In Progress",taskIds:[]},{id:"done",title:"Done",taskIds:[]}],tasks:{}}},j={name:"Many Tasks",args:(()=>{const e=A(12,"td"),s=A(10,"ip"),n=A(8,"dn"),a=[{id:"todo",title:"To Do",taskIds:e.ids},{id:"inprogress",title:"In Progress",taskIds:s.ids},{id:"done",title:"Done",taskIds:n.ids}],r={...e.tasks,...s.tasks,...n.tasks};return{columns:a,tasks:r}})()},C={name:"Mobile View",parameters:{viewport:{defaultViewport:"iphone6"}},args:(()=>{const e=A(4,"m"),s=[{id:"todo",title:"To Do",taskIds:e.ids.slice(0,2)},{id:"inprogress",title:"In Progress",taskIds:e.ids.slice(2)},{id:"done",title:"Done",taskIds:[]}],n=e.tasks;return{columns:s,tasks:n}})()},N={name:"Keyboard Navigation",args:D.args,play:async({canvasElement:e})=>{const n=await W(e).findAllByRole("button",{name:/edit/i});n[0]&&n[0].focus()}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      id: 'todo',
      title: 'To Do',
      taskIds: ['t1', 't2']
    }, {
      id: 'inprogress',
      title: 'In Progress',
      taskIds: ['t3']
    }, {
      id: 'done',
      title: 'Done',
      taskIds: []
    }] satisfies KanbanColumn[],
    tasks: {
      t1: {
        id: 't1',
        title: 'Design API',
        description: 'Plan endpoints',
        priority: 'high',
        createdAt: now,
        updatedAt: now
      },
      t2: {
        id: 't2',
        title: 'Write tests',
        description: 'Unit tests',
        priority: 'medium',
        createdAt: now,
        updatedAt: now
      },
      t3: {
        id: 't3',
        title: 'Implement UI',
        description: 'Build components',
        priority: 'urgent',
        createdAt: now,
        updatedAt: now
      }
    } satisfies Record<string, KanbanTask>
  } satisfies Partial<KanbanBoardProps>
}`,...D.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      id: 'todo',
      title: 'To Do',
      taskIds: []
    }, {
      id: 'inprogress',
      title: 'In Progress',
      taskIds: []
    }, {
      id: 'done',
      title: 'Done',
      taskIds: []
    }] satisfies KanbanColumn[],
    tasks: {} as Record<string, KanbanTask>
  } satisfies Partial<KanbanBoardProps>
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Many Tasks',
  args: (() => {
    const todo = makeTasks(12, 'td');
    const inprog = makeTasks(10, 'ip');
    const done = makeTasks(8, 'dn');
    const columns: KanbanColumn[] = [{
      id: 'todo',
      title: 'To Do',
      taskIds: todo.ids
    }, {
      id: 'inprogress',
      title: 'In Progress',
      taskIds: inprog.ids
    }, {
      id: 'done',
      title: 'Done',
      taskIds: done.ids
    }];
    const tasks: Record<string, KanbanTask> = {
      ...todo.tasks,
      ...inprog.tasks,
      ...done.tasks
    };
    return {
      columns,
      tasks
    } satisfies Partial<KanbanBoardProps>;
  })()
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Mobile View',
  parameters: {
    viewport: {
      defaultViewport: 'iphone6' // Viewport addon preset
    }
  },
  args: (() => {
    const t = makeTasks(4, 'm');
    const columns: KanbanColumn[] = [{
      id: 'todo',
      title: 'To Do',
      taskIds: t.ids.slice(0, 2)
    }, {
      id: 'inprogress',
      title: 'In Progress',
      taskIds: t.ids.slice(2)
    }, {
      id: 'done',
      title: 'Done',
      taskIds: []
    }];
    const tasks: Record<string, KanbanTask> = t.tasks;
    return {
      columns,
      tasks
    } satisfies Partial<KanbanBoardProps>;
  })()
}`,...C.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Keyboard Navigation',
  args: Default.args,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const editButtons = await canvas.findAllByRole('button', {
      name: /edit/i
    });
    if (editButtons[0]) editButtons[0].focus();
  }
}`,...N.parameters?.docs?.source}}};const ee=["Default","EmptyBoard","ManyTasks","MobileView","KeyboardNavigation"];export{D as Default,T as EmptyBoard,N as KeyboardNavigation,j as ManyTasks,C as MobileView,ee as __namedExportsOrder,Z as default};
