import{c as a,j as e,f as i}from"./index-XrFnwna7.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=a("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=a("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=a("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);function h(){const r=["Monday","Tuesday","Wednesday","Thursday","Friday"];return e.jsxs("div",{className:"p-8 space-y-8 text-slate-200",children:[e.jsxs("div",{className:"flex justify-between items-end",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-white",children:"Timetable Manager"}),e.jsx("p",{className:"text-slate-400 mt-1",children:"Manage schedules, holidays, and leaves"})]}),e.jsxs("button",{className:"px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors shadow-lg flex items-center",children:[e.jsx(c,{className:"w-4 h-4 mr-2"}),"Add Session"]})]}),e.jsx("div",{className:"glass-dark rounded-3xl p-6 border border-white/10",children:e.jsx("div",{className:"space-y-8",children:r.map(t=>{const l=i.filter(s=>s.day===t);return l.length===0?null:e.jsxs("div",{className:"border border-white/10 rounded-2xl p-6 bg-white/5 relative overflow-hidden",children:[e.jsx("div",{className:"absolute left-0 top-0 w-2 h-full bg-blue-500"}),e.jsx("h3",{className:"text-xl font-bold text-white mb-4 pl-4",children:t}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-4",children:l.map((s,d)=>e.jsxs("div",{className:"bg-slate-900/50 p-4 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors group",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsx("span",{className:"text-sm font-bold text-blue-400",children:s.time}),e.jsxs("div",{className:"flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity",children:[e.jsx("button",{className:"text-slate-400 hover:text-white",children:e.jsx(n,{className:"w-4 h-4"})}),e.jsx("button",{className:"text-rose-400 hover:text-rose-300",children:e.jsx(o,{className:"w-4 h-4"})})]})]}),e.jsx("h4",{className:"font-bold text-white mb-1",children:s.subject}),e.jsxs("div",{className:"flex justify-between text-sm text-slate-400",children:[e.jsx("span",{children:s.room}),e.jsx("span",{children:s.instructor})]})]},d))})]},t)})})})]})}export{h as default};
